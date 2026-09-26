import { ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'

const packages = [
  { name: 'Launch', price: '₹14K', subtitle: 'Business website starter', features: ['Up to 5 responsive pages', 'Contact and enquiry forms', 'Basic SEO setup', 'Performance optimization'] },
  { name: 'Growth', price: '₹29K', subtitle: 'For growing digital brands', popular: true, features: ['Up to 12 custom pages', 'CMS and API integrations', 'Advanced SEO foundation', 'Analytics and conversion tracking'] },
  { name: 'Scale', price: '₹49K', subtitle: 'Advanced web solutions', features: ['Custom full-stack development', 'Secure backend and database', 'Business workflow integrations', 'Launch and technical support'] }
]

export default function PackagesPreview() {
  return <section className="packages-preview">
    <div className="packages-heading"><div><i/> Packages</div><h2>Choose a strong starting point<br/>for your next digital product.</h2><p>Clear deliverables, dependable execution and room to tailor every package around your goals.</p></div>
    <div className="package-preview-grid">{packages.map(plan => <article className={plan.popular ? 'popular' : ''} key={plan.name}>
      <span className="plan-name">{plan.name}</span>{plan.popular && <b className="plan-badge">Most Popular</b>}
      <strong>{plan.price}<small> onwards</small></strong><h3>{plan.subtitle}</h3>
      <ul>{plan.features.map(feature => <li key={feature}><i><Check size={14}/></i>{feature}</li>)}</ul>
      <Link to="/contact">Choose this plan <ArrowRight size={19}/></Link>
    </article>)}</div>
    <div className="packages-note">Need mobile apps, custom software or a larger platform? <Link to="/packages">Explore all packages <ArrowRight size={16}/></Link></div>
  </section>
}
