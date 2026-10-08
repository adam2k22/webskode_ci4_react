import { ArrowRight, Check, Rocket } from 'lucide-react'
import { Link } from 'react-router-dom'
import { featuredCategory, launchBundle, packageCategories, priceTable } from '../../data/packages'

function PlanCard({ plan, subtitle }) {
  return <article>
    <span className="plan-name">{plan.name}</span>
    <strong>{plan.price}{plan.priceNote && <small> {plan.priceNote}</small>}</strong>{subtitle && <h3>{subtitle}</h3>}
    <ul>{plan.features.map(feature => <li key={feature}><i><Check size={14}/></i>{feature}</li>)}</ul>
    <Link to="/contact">Choose this plan <ArrowRight size={19}/></Link>
  </article>
}

function PriceTable() {
  return <div className="package-table" id="pricing">
    <div className="package-category-head"><span>00</span><h3>Pricing at a glance</h3><p>Starting prices for every service.</p></div>
    <div className="package-table-scroll"><table>
      <thead><tr><th scope="col">Service</th><th scope="col">Starter</th><th scope="col">Business</th><th scope="col">Professional</th></tr></thead>
      <tbody>{priceTable.map(({ service, starter, business, professional, category }) => <tr key={service}>
        <th scope="row">{category ? <a href={`#${category}`}>{service}</a> : service}</th><td>{starter}</td><td>{business}</td><td>{professional}</td>
      </tr>)}</tbody>
    </table></div>
  </div>
}

export default function PackagesPreview({ showAll = false }) {
  return <section className="packages-preview">
    <div className="packages-heading"><div><i/> Packages</div><h2>Choose a strong starting point<br/>for your next digital product.</h2><p>Clear deliverables, dependable execution and room to tailor every package around your goals.</p></div>
    {showAll
      ? <>
        <PriceTable/>
        {packageCategories.map(({ id, icon: Icon, title, note, plans }, index) => <div className="package-category" id={id} key={id}>
          <div className="package-category-head"><span>{String(index + 1).padStart(2, '0')}</span><h3><Icon size={24}/>{title}</h3>{note && <p>{note}</p>}</div>
          <div className="package-preview-grid">{plans.map(plan => <PlanCard plan={plan} key={plan.name}/>)}</div>
        </div>)}
        <div className="package-bundle" id={launchBundle.id}>
          <i><Rocket size={26}/></i>
          <div><span>Bundle</span><h3>{launchBundle.title}</h3></div>
          <strong>{launchBundle.price}</strong>
          <Link to="/contact">Ask about the bundle <ArrowRight size={18}/></Link>
        </div>
      </>
      : <>
        <div className="package-preview-grid">{featuredCategory.plans.map(plan => <PlanCard plan={plan} subtitle={featuredCategory.title} key={plan.name}/>)}</div>
        <div className="packages-note">Need a store, mobile app, custom software or marketing? <Link to="/packages">Explore all packages <ArrowRight size={16}/></Link></div>
      </>}
  </section>
}
