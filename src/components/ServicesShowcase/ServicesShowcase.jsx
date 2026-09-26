import { useEffect, useRef } from 'react'
import { ArrowRight, Code2, Database, Globe2, Megaphone, MonitorCog, PenTool, Smartphone } from 'lucide-react'
import { Link } from 'react-router-dom'
import websiteImage from '../../assets/infographic-website.png'
import fullstackImage from '../../assets/infographic-fullstack.png'
import dataImage from '../../assets/infographic-data.png'
import softwareImage from '../../assets/infographic-software.png'
import mobileImage from '../../assets/infographic-mobile.png'
import marketingImage from '../../assets/infographic-marketing.png'
import brandImage from '../../assets/service-web-design.png'

const services = [
  { icon: Globe2, image: websiteImage, title: 'Website Development', category: 'Design & development' },
  { icon: PenTool, image: brandImage, title: 'Logo Design', category: 'Brand identity', href: '/services/logo-design' },
  { icon: Code2, image: fullstackImage, title: 'Frontend & Backend', category: 'Full-stack engineering' },
  { icon: Database, image: dataImage, title: 'Data Management', category: 'Business data systems' },
  { icon: MonitorCog, image: softwareImage, title: 'Software Development', category: 'Custom applications' },
  { icon: Smartphone, image: mobileImage, title: 'Android & iOS Apps', category: 'Mobile development' },
  { icon: Megaphone, image: marketingImage, title: 'Digital Marketing & SEO', category: 'Online growth' }
]

export default function ServicesShowcase() {
  const gridRef = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && entry.target.classList.add('is-visible'), { threshold: .12 })
    if (gridRef.current) observer.observe(gridRef.current)
    return () => observer.disconnect()
  }, [])

  return <section className="services-showcase" ref={gridRef}>
    {services.map(({ icon: Icon, image, title, category, href = '/contact' }, index) => <article key={title} style={{ '--delay': `${index * 90}ms` }}>
      <Link className="showcase-image" to={href}><img src={image} alt={`${title} service`}/><i><Icon/></i><span>Explore service</span></Link>
      <h2>{title}</h2><Link className="showcase-meta" to={href}><span>{category}</span><ArrowRight/></Link>
    </article>)}
  </section>
}
