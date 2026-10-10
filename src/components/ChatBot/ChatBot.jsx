import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Bot, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { serviceCatalog } from '../../data/serviceCatalog'
import { launchBundle, packageCategories } from '../../data/packages'

// A scripted assistant: every step is a bot message plus the replies the visitor can pick from.
const followUp = () => [{ label: 'Get a quote', next: contactStep }, { label: 'Start over', next: menuStep }]

function menuStep() {
  return { text: 'What would you like to know?', options: [{ label: 'Our services', next: servicesStep }, { label: 'Pricing', next: pricingStep }, { label: 'See our work', next: workStep }, { label: 'Talk to a person', next: contactStep }] }
}

function servicesStep() {
  return { text: 'We work across these areas. Pick one to see what it covers.', options: [...serviceCatalog.map(category => ({ label: category.title, next: () => categoryStep(category) })), { label: 'Start over', next: menuStep }] }
}

function categoryStep({ slug, title, blurb, items }) {
  return { text: blurb, list: items.map(item => item.title), links: [{ label: `View ${title}`, to: `/services/${slug}` }], options: [{ label: 'Other services', next: servicesStep }, ...followUp()] }
}

function pricingStep() {
  return { text: `Packages start small and scale with your needs. Our ${launchBundle.title} is ${launchBundle.price}. Which area are you interested in?`, options: [...packageCategories.map(category => ({ label: category.title, next: () => packageStep(category) })), { label: 'Start over', next: menuStep }] }
}

function packageStep({ id, title, plans, note }) {
  return { text: `${title} packages:${note ? ` (${note})` : ''}`, list: plans.map(({ name, price, priceNote = '' }) => `${name}: ${price}${priceNote}`), links: [{ label: 'See what each plan includes', to: `/packages#${id}` }], options: [{ label: 'Other packages', next: pricingStep }, ...followUp()] }
}

function workStep() {
  return { text: 'Our portfolio shows recent websites and platforms we have designed and built.', links: [{ label: 'View portfolio', to: '/portfolio' }], options: followUp() }
}

function contactStep() {
  return {
    text: 'Happy to help. Choose whichever is easiest and we’ll respond within one business day.',
    links: [
      { label: 'Chat on WhatsApp', href: 'https://wa.me/919870438617?text=Hello%20WebsKode%2C%20I%20would%20like%20to%20discuss%20a%20project.' },
      { label: 'Call +91 98704 38617', href: 'tel:+919870438617' },
      { label: 'Email info@webskode.com', href: 'mailto:info@webskode.com' },
      { label: 'Send an enquiry form', to: '/contact' }
    ],
    options: [{ label: 'Start over', next: menuStep }]
  }
}

const greeting = { ...menuStep(), text: 'Hi! I’m the WebsKode assistant. What would you like to know?' }

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([{ from: 'bot', ...greeting }])
  const [options, setOptions] = useState(greeting.options)
  const end = useRef(null)

  useEffect(() => { end.current?.scrollIntoView({ block: 'nearest' }) }, [messages, open])
  useEffect(() => {
    const close = event => event.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [])

  const choose = ({ label, next }) => {
    const step = next()
    setMessages([...messages, { from: 'user', text: label }, { from: 'bot', ...step }])
    setOptions(step.options)
  }

  return <>
    <button className="floating-contact-button chatbot-button" onClick={() => setOpen(!open)} aria-label="Open the WebsKode assistant" aria-expanded={open}><Bot/><span>Ask us</span></button>
    {open && <aside className="chatbot-panel" aria-label="WebsKode assistant">
      <div className="chatbot-head"><i><Bot size={19}/></i><div><b>WebsKode Assistant</b><span>Quick answers about our services</span></div><button onClick={() => setOpen(false)} aria-label="Close the assistant"><X size={18}/></button></div>
      <div className="chatbot-messages" aria-live="polite">
        {messages.map(({ from, text, list, links }, i) => <div className={`chatbot-message ${from}`} key={i}>
          <p>{text}</p>
          {list && <ul>{list.map(line => <li key={line}>{line}</li>)}</ul>}
          {links && <div className="chatbot-links">{links.map(({ label, to, href }) => to
            ? <Link to={to} key={label}>{label}<ArrowRight size={14}/></Link>
            : <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" key={label}>{label}<ArrowRight size={14}/></a>)}</div>}
        </div>)}
        <span ref={end}/>
      </div>
      <div className="chatbot-options">{options.map(option => <button onClick={() => choose(option)} key={option.label}>{option.label}</button>)}</div>
    </aside>}
  </>
}
