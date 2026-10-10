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

// Places that lead to an enquiry; the mascot gets heart eyes over them.
const lovedSpots = '.contact-cta-section, .logo-final-cta, a[href="/contact"], a[href^="https://wa.me"]'

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
    let hoverMood = 'idle'
    let mood = 'idle'
    let lastMove = performance.now()
    let surprisedUntil = 0
    let dizzyUntil = 0
    let energy = 0
    const mouse = { x: -200, y: -200 }
    const position = { x: -200, y: -200 }

    const look = element => {
      // Stay out of the way while the visitor uses the chat or the contact form.
      setActive(Boolean(element) && !element.closest('.chatbot-panel, .contact-drawer'))
      hoverMood = !element ? 'idle' : element.closest(lovedSpots) ? 'love' : element.closest('a, button, summary, article, .project') ? 'happy' : 'idle'
      const next = element?.closest('section, .site-footer') || null
      if (next === section) return
      section = next
      setTip(next && describe(next))
    }
    const move = event => {
      energy += Math.hypot(event.clientX - mouse.x, event.clientY - mouse.y)
      mouse.x = event.clientX
      mouse.y = event.clientY
      lastMove = performance.now()
      look(event.target)
    }
    const scroll = () => {
      lastMove = performance.now()
      look(document.elementFromPoint(mouse.x, mouse.y))
    }
    const press = () => { surprisedUntil = performance.now() + 700 }
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

        // Shaking the mouse makes it dizzy; leaving it still for a while sends it to sleep.
        const now = performance.now()
        energy *= .9
        if (energy > 800) {
          dizzyUntil = now + 1200
          energy = 0
        }
        const next = now < surprisedUntil ? 'surprised' : now < dizzyUntil ? 'dizzy' : now - lastMove > 6000 ? 'sleepy' : hoverMood
        if (next !== mood) {
          mood = next
          bot.dataset.mood = next
        }
      }
      frame = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', move, { passive: true })
    window.addEventListener('scroll', scroll, { passive: true })
    window.addEventListener('mouseout', leave)
    window.addEventListener('mousedown', press)
    frame = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('scroll', scroll)
      window.removeEventListener('mouseout', leave)
      window.removeEventListener('mousedown', press)
      cancelAnimationFrame(frame)
    }
  }, [])

  return <div className={`guide-bot ${active ? 'is-visible' : ''}`} data-mood="idle" ref={botRef} aria-hidden="true">
    <span className="guide-bot-mood">
      <svg className="guide-bot-body" viewBox="0 0 64 64">
        <circle className="guide-bot-skin" cx="32" cy="32" r="29"/>
        <g transform="rotate(14 38 25)">
          <g className="guide-bot-face idle"><rect x="29" y="16" width="7" height="17" rx="3.5"/><rect x="42" y="16" width="7" height="17" rx="3.5"/></g>
          <g className="guide-bot-face happy"><path d="M28 29q4.5-11 9 0"/><path d="M41 29q4.5-11 9 0"/><path d="M34 37q5 5 10 0"/></g>
          <g className="guide-bot-face love"><path className="heart" d="M32.5 31c-9-6-5-12 0-7c5-5 9 1 0 7z"/><path className="heart" d="M45.5 31c-9-6-5-12 0-7c5-5 9 1 0 7z"/><path d="M34 38q5 5 10 0"/></g>
          <g className="guide-bot-face surprised"><circle cx="32.5" cy="24" r="5.5"/><circle cx="45.5" cy="24" r="5.5"/><ellipse cx="39" cy="40" rx="3" ry="4"/></g>
          <g className="guide-bot-face sleepy"><path d="M28 25q4.5 5 9 0"/><path d="M41 25q4.5 5 9 0"/></g>
          <g className="guide-bot-face dizzy"><path d="M29 19l7 5.5-7 5.5"/><path d="M49 19l-7 5.5 7 5.5"/><path d="M33 39q3-4 6 0t6 0"/></g>
          <g className="guide-bot-blush"><circle cx="26" cy="35" r="3.5"/><circle cx="52" cy="35" r="3.5"/></g>
        </g>
      </svg>
      <span className="guide-bot-zzz"><i>z</i><i>z</i><i>z</i></span>
    </span>
    {tip && <div className="guide-bot-tip" key={tip.title}><b>{tip.title}</b>{tip.text && <p>{tip.text}</p>}</div>}
  </div>
}
