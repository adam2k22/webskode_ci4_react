import { ArrowUpRight, Braces, Code2, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ContactCTA() {
  return <section className="contact-cta-section">
    <div className="contact-cta-label"><Sparkles size={16}/> Let’s Get Started</div>
    <div className="contact-cta-panel">
      <div className="cta-grid-lines"/><div className="cta-orb one"/><div className="cta-orb two"/>
      <Code2 className="cta-code-icon first"/><Braces className="cta-code-icon second"/>
      <div className="contact-cta-copy"><span>Have an idea worth building?</span><h2>Let’s create a digital<br/>experience that stands out.</h2><p>From the first strategy session to launch and beyond, WebsKode is ready to turn your next idea into a focused, scalable product.</p><Link to="/contact">Let’s Talk <ArrowUpRight size={19}/></Link></div>
      <div className="cta-terminal"><div><i/><i/><i/></div><code><span>const</span> nextProject = {'{'}<br/>  idea: <b>'yours'</b>,<br/>  partner: <b>'WebsKode'</b><br/>{'}'}</code></div>
    </div>
  </section>
}
