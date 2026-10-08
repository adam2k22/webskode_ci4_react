import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { findCatalogItem, findCategory } from '../../data/serviceCatalog'

const pages = {
  '/': ['WebsKode | Website, Software & App Development', 'WebsKode builds high-performing websites, scalable software, mobile apps, data systems and digital growth solutions.'],
  '/services': ['Services | WebsKode', 'Explore WebsKode services across software, websites, mobile apps, cloud, AI and automation, e-commerce, integrations, design, support and digital marketing.'],
  '/services/logo-design': ['Logo Design | WebsKode', 'Create a distinctive, versatile logo and visual identity for your business with WebsKode.'],
  '/packages': ['Development Packages | WebsKode', 'Compare WebsKode website and digital development packages for startups, growing businesses and established brands.'],
  '/portfolio': ['Portfolio | WebsKode', 'Explore selected website and digital product projects designed and developed by WebsKode.'],
  '/technologies': ['Technologies | WebsKode', 'Discover the frontend, backend, mobile, database and CMS technologies used by WebsKode.'],
  '/about': ['About WebsKode | Digital Technology Partner', 'Learn about WebsKode, our practical approach and the principles behind our digital work.'],
  '/contact': ['Contact WebsKode | Start Your Project', 'Contact WebsKode to discuss your website, software, mobile app, data or digital marketing project.'],
}

export default function SiteMeta() {
  const { pathname } = useLocation()
  useEffect(() => {
    const [section, categorySlug, itemSlug] = pathname.split('/').filter(Boolean)
    const category = section === 'services' && categorySlug && findCategory(categorySlug)
    const catalogItem = itemSlug && findCatalogItem(categorySlug, itemSlug)
    const catalogMeta = catalogItem ? [`${catalogItem.title} | WebsKode`, catalogItem.summary] : category && !itemSlug && [`${category.title} | WebsKode`, category.blurb]
    const [title, description] = pages[pathname] || catalogMeta || ['WebsKode | Digital Technology Partner', 'WebsKode creates dependable websites, software, mobile apps and digital growth solutions.']
    document.title = title
    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.name = 'description'
      document.head.appendChild(meta)
    }
    meta.content = description
  }, [pathname])
  return null
}
