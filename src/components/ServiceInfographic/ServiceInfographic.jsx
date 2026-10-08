import { useEffect, useState } from 'react'

const ORANGE = '#ff5a1f'

const STEP_MS = 2200
const CENTER = { x: 360, y: 250 }
const RADIUS = { x: 250, y: 175 }

export default function ServiceInfographic({ icon: HubIcon, title, heading, features }) {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer = setInterval(() => setActive(current => (current + 1) % features.length), STEP_MS)
    return () => clearInterval(timer)
  }, [paused, features.length])

  const nodes = features.map((feature, i) => {
    const angle = -Math.PI / 2 + (i * 2 * Math.PI) / features.length
    return { ...feature, x: CENTER.x + RADIUS.x * Math.cos(angle), y: CENTER.y + RADIUS.y * Math.sin(angle) }
  })

  return <section className="service-infographic" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
    <div className="service-infographic-heading"><span><i/> How it comes together</span><h2>{heading}</h2></div>

    <svg viewBox="0 0 720 520" aria-hidden="true">
      <ellipse className="svc-orbit" cx={CENTER.x} cy={CENTER.y} rx={RADIUS.x} ry={RADIUS.y} fill="none" stroke="#ffffff1f" strokeWidth="1.5" strokeDasharray="4 10" strokeLinecap="round"/>
      {nodes.map(({ x, y, title: label }, i) => <line className={i === active ? 'svc-link is-active' : 'svc-link'} key={label} x1={CENTER.x} y1={CENTER.y} x2={x} y2={y}/>)}

      <circle className="svc-hub-ring" cx={CENTER.x} cy={CENTER.y} r="78" fill="none" stroke={ORANGE} strokeWidth="2" strokeDasharray="10 12" strokeLinecap="round"/>
      <circle cx={CENTER.x} cy={CENTER.y} r="62" fill={ORANGE}/>
      <HubIcon x={CENTER.x - 26} y={CENTER.y - 26} size={52} color="#fff" strokeWidth={1.7}/>

      {nodes.map(({ icon: Icon, x, y, title: label }, i) => <g className={i === active ? 'svc-node is-active' : 'svc-node'} key={label}>
        {i === active && <circle className="svc-pulse" cx={x} cy={y} r="34" fill="none" stroke={ORANGE} strokeWidth="2"/>}
        <circle cx={x} cy={y} r="34"/>
        {Icon ? <Icon x={x - 14} y={y - 14} size={28} strokeWidth={1.8}/> : <text className="svc-node-number" x={x} y={y + 6} textAnchor="middle">{String(i + 1).padStart(2, '0')}</text>}
        <text x={x} y={y + 56} textAnchor="middle">{label}</text>
      </g>)}
    </svg>

    <ol className="service-infographic-list" aria-label={`${title} capabilities`}>
      {features.map(({ title: label, copy }, i) => <li className={i === active ? 'is-active' : ''} key={label}>
        <button type="button" onClick={() => setActive(i)} onFocus={() => setActive(i)} aria-current={i === active}>
          <b>{String(i + 1).padStart(2, '0')}</b><span><strong>{label}</strong>{copy && <em>{copy}</em>}</span>
        </button>
      </li>)}
    </ol>
  </section>
}
