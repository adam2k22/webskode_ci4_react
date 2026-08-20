import { ArrowRight, Code2, Database, Globe2, Megaphone, MonitorCog, Smartphone } from 'lucide-react'
import websiteImage from '../../assets/infographic-website.png'
import fullstackImage from '../../assets/infographic-fullstack.png'
import dataImage from '../../assets/infographic-data.png'
import softwareImage from '../../assets/infographic-software.png'
import mobileImage from '../../assets/infographic-mobile.png'
import marketingImage from '../../assets/infographic-marketing.png'

const items = [
  { icon: Globe2, image: websiteImage, title: 'Website Development', category: 'Responsive web experiences' },
  { icon: Code2, image: fullstackImage, title: 'Frontend & Backend', category: 'Full-stack engineering' },
  { icon: Database, image: dataImage, title: 'Data Management', category: 'Secure data systems' },
  { icon: MonitorCog, image: softwareImage, title: 'Software Development', category: 'Custom digital products' },
  { icon: Smartphone, image: mobileImage, title: 'Mobile App Development', category: 'Android & iOS' },
  { icon: Megaphone, image: marketingImage, title: 'Digital Marketing & SEO', category: 'Measurable online growth' }
]

export default function HomeServices() {
  return <section className="home-services" aria-labelledby="home-services-title">
    <div className="home-services-label"><b>✦</b><span id="home-services-title">What we do?</span></div>
    <div className="service-arch"/>
    <div className="home-service-grid">
      {items.map(({ icon: Icon, image, title, category }) => <article key={title}>
        <div className="home-service-image"><img src={image} alt=""/><i><Icon/></i></div>
        <h2>{title}</h2><a href="/services"><span>{category}</span><ArrowRight size={18}/></a>
      </article>)}
    </div>
  </section>
}
