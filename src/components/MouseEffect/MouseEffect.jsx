import { useEffect, useRef, useState } from 'react'

export default function MouseEffect() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const mouse = useRef({ x: -100, y: -100 })
  const ring = useRef({ x: -100, y: -100 })
  const [active, setActive] = useState(false)

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!finePointer || reducedMotion) return undefined

    let frame
    const move = event => {
      mouse.current = { x: event.clientX, y: event.clientY }
      if (dotRef.current) dotRef.current.style.transform = `translate3d(${event.clientX}px,${event.clientY}px,0)`
      setActive(true)
    }
    const leave = event => { if (!event.relatedTarget) setActive(false) }
    const hover = event => ringRef.current?.classList.toggle('is-hovering', Boolean(event.target.closest('a, button, input, textarea, summary, .project, article')))
    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * .16
      ring.current.y += (mouse.current.y - ring.current.y) * .16
      if (ringRef.current) ringRef.current.style.transform = `translate3d(${ring.current.x}px,${ring.current.y}px,0)`
      frame = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', move, { passive: true })
    window.addEventListener('mouseout', leave)
    document.addEventListener('mouseover', hover)
    frame = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseout', leave)
      document.removeEventListener('mouseover', hover)
      cancelAnimationFrame(frame)
    }
  }, [])

  return <div className={`mouse-effect ${active ? 'is-visible' : ''}`} aria-hidden="true"><span className="mouse-dot" ref={dotRef}/><span className="mouse-ring" ref={ringRef}/></div>
}
