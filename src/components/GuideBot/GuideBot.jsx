import { useEffect, useRef, useState } from 'react'

// What the mascot says about each section, keyed by the section's class name.
const sectionNotes = {
  hero: ['Welcome to WebsKode', 'We build websites, software and mobile apps, and run digital marketing. Use “Start Your Project” to talk to us.'],
  'home-services': ['What we do', 'Our main service areas. Open any card to see everything it covers.'],
  'why-us': ['Why choose us', 'The reasons clients trust us with their digital projects.'],
  'technology-stack': ['Our tools', 'The languages, frameworks and platforms we build with.'],
  'core-features': ['Core features', 'The essentials built into every solution we deliver.'],
  work: ['Featured work', 'Recent projects we designed and built for clients.'],
  'packages-preview': ['Packages', 'Starting prices for our most popular work. All plans are on the Packages page.'],
  'about-preview': ['About us', 'A quick introduction to who we are and how we help businesses grow online.'],
  'contact-cta-section': ['Ready to start?', 'Tell us about your idea and we’ll reply within one business day.'],
  'site-footer': ['Quick links', 'Our phone, email and address, plus links to every service and package.'],
  'service-catalog': ['All services', 'Browse by category and open any service for the details.'],
  'services-showcase': ['Service categories', 'Each category groups related services. Open one to explore it.'],
  'service-item-grid': ['In this category', 'Each card opens a page showing what’s included.'],
  'service-infographic': ['What’s included', 'The key things you get with this service.'],
  'logo-deliverables': ['What you receive', 'Everything delivered at the end of the project.'],
  'logo-process': ['Our approach', 'The steps we follow from the first conversation to launch.'],
  'service-related': ['Related services', 'Other services in the same category.'],
  'logo-final-cta': ['Let’s talk', 'Click the arrow to tell us about your project.'],
  'package-faq': ['Package questions', 'Answers on pricing, upgrades and what’s included.'],
  'portfolio-gallery': ['Our work', 'Websites and platforms we’ve designed and built.'],
  'case-study-list': ['Case studies', 'A closer look at what we built for each client.'],
  'technology-capabilities': ['How we build', 'Why we choose each tool and how they fit together.'],
  'skills-section': ['Our skills', 'The expertise our developers bring to your project.'],
  'about-intro': ['Who we are', 'Our story and the way we like to work.'],
  'about-company': ['Our company', 'What WebsKode does and who we do it for.'],
  'about-values': ['How we work', 'The principles behind every project.'],
  'contact-page': ['Send an enquiry', 'Fill in the form and we’ll reply within one business day.'],
  'contact-service-types': ['Contact details', 'What we can help with and how to reach us.']
}

// Sections without a note fall back to their own heading and first paragraph.
function describe(section) {
  const known = [...section.classList].find(name => sectionNotes[name])
  if (known) return { title: sectionNotes[known][0], text: sectionNotes[known][1] }
  const title = section.querySelector('h1, h2')?.textContent.trim()
  const text = section.querySelector('p')?.textContent.trim()
  return title ? { title, text } : null
}

export default function GuideBot() {
  const botRef = useRef(null)
  const [active, setActive] = useState(false)
  const [tip, setTip] = useState(null)

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!finePointer || reducedMotion) return undefined

    let frame
    let section = null
    const mouse = { x: -200, y: -200 }
    const position = { x: -200, y: -200 }

    const look = element => {
      // Stay out of the way while the visitor uses the chat or the contact form.
      setActive(Boolean(element) && !element.closest('.chatbot-panel, .contact-drawer'))
      const next = element?.closest('section, .site-footer') || null
      if (next === section) return
      section = next
      setTip(next && describe(next))
    }
    const move = event => {
      mouse.x = event.clientX
      mouse.y = event.clientY
      look(event.target)
    }
    const scroll = () => look(document.elementFromPoint(mouse.x, mouse.y))
    const leave = event => { if (!event.relatedTarget) setActive(false) }
    const animate = () => {
      const bot = botRef.current
      if (bot) {
        const lean = Math.max(-18, Math.min(18, (mouse.x - position.x) * .25))
        position.x += (mouse.x - position.x) * .14
        position.y += (mouse.y - position.y) * .14
        bot.style.transform = `translate3d(${position.x}px,${position.y}px,0)`
        bot.style.setProperty('--lean', `${lean}deg`)
        bot.classList.toggle('flip-x', position.x > window.innerWidth - 340)
        bot.classList.toggle('flip-y', position.y > window.innerHeight - 150)
      }
      frame = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', move, { passive: true })
    window.addEventListener('scroll', scroll, { passive: true })
    window.addEventListener('mouseout', leave)
    frame = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('scroll', scroll)
      window.removeEventListener('mouseout', leave)
      cancelAnimationFrame(frame)
    }
  }, [])

  return <div className={`guide-bot ${active ? 'is-visible' : ''}`} ref={botRef} aria-hidden="true">
    <svg className="guide-bot-body" viewBox="0 0 64 64">
      <circle cx="32" cy="32" r="29"/>
      <g transform="rotate(14 38 25)"><rect x="29" y="16" width="7" height="17" rx="3.5"/><rect x="42" y="16" width="7" height="17" rx="3.5"/></g>
    </svg>
    {tip && <div className="guide-bot-tip" key={tip.title}><b>{tip.title}</b>{tip.text && <p>{tip.text}</p>}</div>}
  </div>
}
