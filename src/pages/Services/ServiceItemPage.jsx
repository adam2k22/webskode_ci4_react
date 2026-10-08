import { ArrowRight, Compass, Sparkles } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import PageLayout from '../../components/PageLayout/PageLayout'
import ServiceInfographic from '../../components/ServiceInfographic/ServiceInfographic'
import { findCatalogItem, findCategory } from '../../data/serviceCatalog'

export default function ServiceItemPage() {
  const { category: categorySlug, item: itemSlug } = useParams()
  const category = findCategory(categorySlug)
  const item = findCatalogItem(categorySlug, itemSlug)
  if (!category) return <Navigate to="/services" replace/>
  if (!item) return <Navigate to={`/services/${categorySlug}`} replace/>

  const { icon: Icon, image, title: categoryTitle, blurb, promise, process, items } = category
  const { title, headline, summary, features } = item
  const related = items.filter(other => other.slug !== itemSlug)

  return <PageLayout name={title} eyebrow={categoryTitle} title={headline} intro={summary}>
    <section className="logo-design-intro">
      <div className="logo-design-copy">
        <span className="logo-design-kicker"><i/><Icon size={16}/> {categoryTitle}</span>
        <h2>{promise[0]}<br/><em>{promise[1]}</em></h2>
        <p>{title} is part of our {categoryTitle} work. {blurb}</p>
        <Link className="logo-design-cta" to="/contact">Discuss your project <ArrowRight size={18}/></Link>
      </div>
      <div className="logo-design-visual">
        <img src={image} alt={`${categoryTitle} illustration`}/>
        <span className="logo-design-stamp"><Sparkles size={16}/> {title}</span>
      </div>
    </section>

    <ServiceInfographic key={`${categorySlug}/${itemSlug}`} icon={Icon} title={title} heading="What’s included" features={features.map(feature => ({ title: feature }))}/>

    <section className="logo-process">
      <div className="logo-process-heading"><span><Compass size={17}/> Our approach</span><h2>A clear path<br/>from start to finish.</h2></div>
      <div className="logo-process-steps">{process.map(([step, copy], i) => <article key={step}><b>{String(i + 1).padStart(2, '0')}</b><h3>{step}</h3><p>{copy}</p></article>)}</div>
    </section>

    <section className="service-related">
      <div><span>More in this category</span><h2>{categoryTitle}</h2></div>
      <div className="service-related-links" role="navigation" aria-label={`Other ${categoryTitle} services`}>
        {related.map(other => <Link to={`/services/${categorySlug}/${other.slug}`} key={other.slug}>{other.title}<ArrowRight size={15}/></Link>)}
        <Link className="service-related-all" to={`/services/${categorySlug}`}>View the full category<ArrowRight size={15}/></Link>
      </div>
    </section>

    <section className="logo-final-cta"><div><span>Interested in {title}?</span><h2>Let’s talk about<br/>your project.</h2></div><Link to="/contact" aria-label={`Contact us about ${title}`}><ArrowRight size={26}/></Link></section>
  </PageLayout>
}
