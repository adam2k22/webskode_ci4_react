import { ArrowRight, Compass } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import PageLayout from '../../components/PageLayout/PageLayout'
import { findCategory, legacyServiceRedirects } from '../../data/serviceCatalog'

export default function ServiceCategoryPage() {
  const { slug: categorySlug } = useParams()
  const category = findCategory(categorySlug)
  if (!category) return <Navigate to={legacyServiceRedirects[categorySlug] ? `/services/${legacyServiceRedirects[categorySlug]}` : '/services'} replace/>

  const { slug, icon: Icon, title, blurb, promise, process, items } = category

  return <PageLayout name={title} eyebrow="Service category" title={`${promise[0]} ${promise[1]}`} intro={blurb}>
    <section className="service-item-grid">
      <div className="service-item-grid-head"><span><Icon size={16}/> {items.length} services</span><h2>Everything we offer in {title}.</h2></div>
      {items.map((item, i) => <Link className="service-item-card" to={`/services/${slug}/${item.slug}`} key={item.slug}>
        <b>{String(i + 1).padStart(2, '0')}</b><h3>{item.title}</h3><p>{item.summary}</p><span>View service <ArrowRight size={16}/></span>
      </Link>)}
    </section>

    <section className="logo-process">
      <div className="logo-process-heading"><span><Compass size={17}/> Our approach</span><h2>A clear path<br/>from start to finish.</h2></div>
      <div className="logo-process-steps">{process.map(([step, copy], i) => <article key={step}><b>{String(i + 1).padStart(2, '0')}</b><h3>{step}</h3><p>{copy}</p></article>)}</div>
    </section>

    <section className="logo-final-cta"><div><span>Not sure where to start?</span><h2>Tell us what<br/>you need.</h2></div><Link to="/contact" aria-label={`Contact us about ${title}`}><ArrowRight size={26}/></Link></section>
  </PageLayout>
}
