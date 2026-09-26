import { ArrowRight, Check, Compass, Layers3, PenTool, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageLayout from '../../components/PageLayout/PageLayout'
import designTeamImage from '../../assets/service-web-design.png'

const deliverables = [
  'Custom logo concepts shaped around your brand',
  'Primary, stacked and icon-only logo variations',
  'Color palette and type recommendations',
  'High-resolution files for web and print',
]

const process = [
  ['01', 'Discover', 'We learn about your business, audience, competitors and the impression you want your brand to make.'],
  ['02', 'Design', 'We explore original directions and refine the strongest concept around clarity, character and versatility.'],
  ['03', 'Deliver', 'You receive polished logo files and practical variations, ready to use consistently across your channels.'],
]

export default function LogoDesignPage() {
  return <PageLayout eyebrow="Logo & brand identity" title="A logo with a point of view." intro="Build a recognizable identity with a custom logo designed to feel right for your business and work everywhere your brand shows up.">
    <section className="logo-design-intro">
      <div className="logo-design-copy">
        <span className="logo-design-kicker"><i/><PenTool size={16}/> Made for your brand</span>
        <h2>Distinctive by design.<br/><em>Ready for real life.</em></h2>
        <p>Your logo is often the first introduction to your business. We create thoughtful, flexible marks that communicate who you are, not just what is trending.</p>
        <Link className="logo-design-cta" to="/contact">Start a logo project <ArrowRight size={18}/></Link>
      </div>
      <div className="logo-design-visual">
        <img src={designTeamImage} alt="Designers collaborating on a brand identity"/>
        <div className="logo-mark-preview"><span>W</span><small>YOUR BRAND<br/>STARTS HERE</small></div>
        <span className="logo-design-stamp"><Sparkles size={16}/> Made to be remembered</span>
      </div>
    </section>

    <section className="logo-deliverables">
      <div className="logo-section-heading">
        <span>More than a mark</span>
        <h2>A useful identity,<br/>from day one.</h2>
        <p>Every detail is considered so your new identity feels cohesive, practical and unmistakably yours.</p>
      </div>
      <div className="logo-deliverable-list">
        {deliverables.map((item) => <div key={item}><i><Check size={16}/></i><span>{item}</span></div>)}
        <div className="logo-deliverable-note"><Layers3 size={24}/><p>Scalable assets for your website, social profiles, stationery and more.</p></div>
      </div>
    </section>

    <section className="logo-process">
      <div className="logo-process-heading"><span><Compass size={17}/> Our approach</span><h2>From first sketch<br/>to brand-ready.</h2></div>
      <div className="logo-process-steps">{process.map(([number, title, copy]) => <article key={number}><b>{number}</b><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </section>

    <section className="logo-final-cta"><div><span>Have a new idea?</span><h2>Let’s give it<br/>a face.</h2></div><Link to="/contact" aria-label="Contact us about logo design"><ArrowRight size={26}/></Link></section>
  </PageLayout>
}