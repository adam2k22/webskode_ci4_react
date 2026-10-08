import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { featuredCategories } from '../../data/serviceCatalog'

export default function HomeServices() {
  return <section className="home-services" aria-labelledby="home-services-title">
    <div className="home-services-label"><b>✦</b><span id="home-services-title">What we do?</span></div>
    <div className="service-arch"/>
    <div className="home-service-grid">
      {featuredCategories.map(({ icon: Icon, image, slug, title, blurb }) => <article key={title}>
        <div className="home-service-image"><img src={image} alt=""/><i><Icon/></i></div>
        <h2>{title}</h2><p>{blurb}</p><Link to={`/services/${slug}`}><span>Explore More</span><ArrowRight size={18}/></Link>
      </article>)}
    </div>
  </section>
}
