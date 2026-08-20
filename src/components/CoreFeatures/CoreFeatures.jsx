import { ArrowUpRight, Blocks, Code2, MonitorSmartphone, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

const features = [
  { value: '500+', title: 'Custom Websites Developed', icon: Code2, copy: 'Websites built from scratch with clean code, modern design and performance engineered into every page.' },
  { value: '250+', title: 'Web Integrations', icon: Blocks, copy: 'Seamless connections with third-party tools, APIs and services that enhance business functionality.' },
  { value: '120+', title: 'Responsive Mobile Designs', icon: MonitorSmartphone, copy: 'Mobile-first products that look excellent, perform smoothly and engage users on every device.' }
]

export default function CoreFeatures() {
  return <section className="core-features">
    <span className="core-dot"/>
    <div className="core-intro"><div><small><i/> Our Core Features</small><h2>Powerful features that set<br/>our web solutions apart</h2></div><div><p>Our web solutions are built with essential features that ensure performance, scalability and an exceptional user experience for every project.</p><Link to="/contact">Contact Us <ArrowUpRight size={17}/></Link></div></div>
    <div className="core-grid">{features.map(({ value,title,icon:Icon,copy })=><article key={title}><strong>{value}</strong><h3>{title}</h3><Icon/><p>{copy}</p></article>)}</div>
    <div className="core-trust"><span>WK</span><p>The people behind dependable digital products — <Link to="/about">Meet WebsKode.</Link></p><b>4.9/5</b><div>{[1,2,3,4,5].map(n=><Star key={n} size={14} fill="currentColor"/>)}</div><small>Over 4200 Reviews</small></div>
  </section>
}
