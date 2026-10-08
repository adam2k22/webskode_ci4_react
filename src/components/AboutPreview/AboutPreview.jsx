import { ArrowUpRight, Award, CheckCircle2, Handshake, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import LiveCharacter from '../LiveCharacter/LiveCharacter'

export default function AboutPreview() {
  return <section className="about-preview">
    <div className="about-preview-art"><LiveCharacter character="designer" alt="Cartoon illustration of a WebsKode product designer"/><div><strong>120+</strong><span>Long-term client<br/>partnerships</span></div></div>
    <div className="about-preview-copy">
      <div className="about-preview-label"><i/> About Us</div><h2>Your trusted partner in web<br/>design & development</h2><p className="about-lead">We help startups and businesses grow online by delivering thoughtful design, efficient code and reliable digital solutions.</p>
      <div className="about-pillars"><article><i><Award/></i><h3>Quality That Drives Results</h3><p>We work as your long-term digital partner, understanding your goals.</p></article><article><i><Handshake/></i><h3>Partnership You Can Rely On</h3><p>We focus on performance, usability and sustainable scalability.</p></article></div>
      <div className="about-proof"><div className="about-checks"><span><CheckCircle2/>Strategy and design through development</span><span><CheckCircle2/>Websites focused on performance</span><span><CheckCircle2/>Support that continues beyond launch</span><Link to="/about">More About Us <ArrowUpRight size={17}/></Link></div><div className="rating-box"><div>{[1,2,3,4,5].map(n=><Star key={n} size={17} fill="currentColor"/>)}</div><strong>4.9<small>/5.0</small></strong><span>Average Website Rating</span></div></div>
      <div className="about-signoff"><span>WK</span><div><b>WebsKode Team</b><small>Design · Development · Growth</small></div></div>
    </div>
  </section>
}
