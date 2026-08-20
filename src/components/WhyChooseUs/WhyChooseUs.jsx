import { ArrowUpRight, BadgeCheck, Quote, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import engineerImage from '../../assets/why-us-engineer.png'
import designerImage from '../../assets/why-us-designer.png'

export default function WhyChooseUs() {
  return <section className="why-us">
    <div className="why-us-copy">
      <div className="why-label"><i/> Why Choose Us</div>
      <h2>Your digital success, built with precision<span>.</span></h2>
      <blockquote>“Code with purpose, design with passion, and build digital products that drive results.”<Quote/></blockquote>
      <div className="why-feature"><i><BadgeCheck/></i><div><h3>Expert Team & Proven Results</h3><p>Our designers, developers and strategists combine creativity with technical expertise to deliver dependable digital solutions.</p></div></div>
      <div className="progress-title"><span>Custom Digital Development</span><b>95%</b></div><div className="progress"><i/></div>
      <Link className="why-cta" to="/about">Learn More <ArrowUpRight size={18}/></Link>
    </div>
    <div className="why-us-visual">
      <img className="why-img back" src={engineerImage} alt="Cartoon illustration of a WebsKode engineer"/>
      <img className="why-img front" src={designerImage} alt="Cartoon illustration of a WebsKode product designer"/>
      <div className="review-card"><div className="avatar-row"><i>W</i><i>K</i><i>D</i><i>+</i></div><div className="review-stars">{[1,2,3,4,5].map(n=><Star key={n} size={18} fill="currentColor"/>)}</div><b>20k+ Reviews</b></div>
    </div>
  </section>
}
