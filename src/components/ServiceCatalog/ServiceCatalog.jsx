import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { serviceCatalog } from '../../data/serviceCatalog'

export default function ServiceCatalog() {
  return <section className="service-catalog" id="all-services">
    <div className="service-catalog-head"><span><i/> Full service catalog</span><h2>Every service,<br/>in one place.</h2><p>Browse by category and open any service for the details.</p></div>
    <div className="service-catalog-columns">
      {serviceCatalog.map(({ slug, icon: Icon, title, items }) => <article key={slug}>
        <Link className="service-catalog-title" to={`/services/${slug}`}><i><Icon size={20}/></i><h3>{title}</h3><ArrowRight size={17}/></Link>
        <ul>{items.map(item => <li key={item.slug}><Link to={`/services/${slug}/${item.slug}`}>{item.title}</Link></li>)}</ul>
      </article>)}
    </div>
  </section>
}
