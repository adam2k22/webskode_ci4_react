import { legacyServiceRedirects, serviceCatalog } from './serviceCatalog'

export const siteUrl = 'https://webskode.com'

// path: [breadcrumb name, title, description]
const staticPages = {
  '/': ['Home', 'WebsKode | Website, Software & App Development', 'WebsKode builds high-performing websites, scalable software, mobile apps, data systems and digital growth solutions.'],
  '/services': ['Services', 'Services | WebsKode', 'Explore WebsKode services across software, websites, mobile apps, cloud, AI and automation, e-commerce, integrations, design, support and digital marketing.'],
  '/services/logo-design': ['Logo Design', 'Logo Design | WebsKode', 'Create a distinctive, versatile logo and visual identity for your business with WebsKode.'],
  '/packages': ['Packages', 'Development Packages | WebsKode', 'Compare WebsKode website and digital development packages for startups, growing businesses and established brands.'],
  '/portfolio': ['Portfolio', 'Portfolio | WebsKode', 'Explore selected website and digital product projects designed and developed by WebsKode.'],
  '/technologies': ['Technologies', 'Technologies | WebsKode', 'Discover the frontend, backend, mobile, database and CMS technologies used by WebsKode.'],
  '/about': ['About Us', 'About WebsKode | Digital Technology Partner', 'Learn about WebsKode, our practical approach and the principles behind our digital work.'],
  '/terms-and-policies': ['Terms & Policies', 'Terms & Policies | WebsKode', 'WebsKode terms of service, privacy policy, cancellation and refund policy, and cookie information.'],
  '/contact': ['Contact Us', 'Contact WebsKode | Start Your Project', 'Contact WebsKode to discuss your website, software, mobile app, data or digital marketing project.'],
}

const fallback = { title: 'WebsKode | Digital Technology Partner', description: 'WebsKode creates dependable websites, software, mobile apps and digital growth solutions.' }

const home = ['Home', '/']
const services = ['Services', '/services']

// A few services sit in two categories; their titles carry the category so no two pages share one.
const titleCount = {}
serviceCatalog.forEach(category => category.items.forEach(item => { titleCount[item.title] = (titleCount[item.title] || 0) + 1 }))

const routes = {}
Object.entries(staticPages).forEach(([path, [name, title, description]]) => {
  routes[path] = { title, description, trail: path === '/' ? [] : [home, ...(path.startsWith('/services/') ? [services] : []), [name, path]] }
})
serviceCatalog.forEach(category => {
  const categoryPath = `/services/${category.slug}`
  routes[categoryPath] = { title: `${category.title} | WebsKode`, description: category.blurb, trail: [home, services, [category.title, categoryPath]] }
  category.items.forEach(item => {
    const path = `${categoryPath}/${item.slug}`
    const title = titleCount[item.title] > 1 ? `${item.title} – ${category.title} | WebsKode` : `${item.title} | WebsKode`
    routes[path] = { title, description: item.summary, trail: [home, services, [category.title, categoryPath], [item.title, path]], service: item.title }
  })
})

const normalize = pathname => pathname.replace(/\/+$/, '') || '/'

// Title, description and canonical address for a path; unknown paths get the fallback and no canonical.
export function seoFor(pathname) {
  const path = normalize(pathname)
  const route = routes[path]
  return route ? { title: route.title, description: route.description, canonical: siteUrl + (path === '/' ? '/' : path) } : { ...fallback, canonical: null }
}

// Everything the server needs to print per-page tags, written to app/Data/seo.json at build time.
export function seoManifest() {
  const organizationId = `${siteUrl}/#organization`
  const siteJsonLd = [
    {
      '@type': 'ProfessionalService', '@id': organizationId, name: 'WebsKode', url: `${siteUrl}/`,
      logo: `${siteUrl}/assets/webskode-logo.png`, image: `${siteUrl}/assets/webskode-logo.png`,
      description: staticPages['/'][2], email: 'info@webskode.com', telephone: '+919870438617',
      address: { '@type': 'PostalAddress', streetAddress: 'Corner Shop, Gali No. 6, Palam Colony, Corner, Tikri Rd, Sector 28, Vasant Vihar', addressLocality: 'Karnal', addressRegion: 'Haryana', postalCode: '132001', addressCountry: 'IN' }
    },
    { '@type': 'WebSite', '@id': `${siteUrl}/#website`, url: `${siteUrl}/`, name: 'WebsKode', publisher: { '@id': organizationId } }
  ]

  const manifestRoutes = {}
  Object.entries(routes).forEach(([path, { title, description, trail, service }]) => {
    const { canonical } = seoFor(path)
    const jsonLd = []
    if (trail.length) jsonLd.push({ '@type': 'BreadcrumbList', itemListElement: trail.map(([name, to], i) => ({ '@type': 'ListItem', position: i + 1, name, item: siteUrl + (to === '/' ? '/' : to) })) })
    if (service) jsonLd.push({ '@type': 'Service', name: service, description, url: canonical, provider: { '@id': organizationId } })
    manifestRoutes[path] = { title, description, canonical, jsonLd }
  })

  const redirects = {}
  Object.entries(legacyServiceRedirects).forEach(([from, to]) => { redirects[`/services/${from}`] = `/services/${to}` })

  return { siteUrl, image: `${siteUrl}/assets/webskode-logo.png`, fallback, siteJsonLd, routes: manifestRoutes, redirects }
}
