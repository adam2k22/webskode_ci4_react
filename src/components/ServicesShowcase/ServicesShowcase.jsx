import { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { serviceCatalog } from '../../data/serviceCatalog'

export default function ServicesShowcase() {
  const gridRef = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && entry.target.classList.add('is-visible'), { threshold: .12 })
    if (gridRef.current) observer.observe(gridRef.current)
    return () => observer.disconnect()
  }, [])

  return <section className="services-showcase" ref={gridRef}>
    {serviceCatalog.map(({ icon: Icon, image, slug, title, blurb, items }, index) => <article key={title} style={{ '--delay': `${index * 90}ms` }}>
      <Link className="showcase-image" to={`/services/${slug}`}><img src={image} alt={`${title} service`}/><i><Icon/></i><span>Explore services</span></Link>
      <h2>{title}</h2><p>{blurb}</p><Link className="showcase-meta" to={`/services/${slug}`}><span>{items.length} services</span><ArrowRight/></Link>
    </article>)}
  </section>
}
