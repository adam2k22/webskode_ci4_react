import { Braces, CloudCog, Database, Layers3 } from 'lucide-react'
import PageLayout from '../../components/PageLayout/PageLayout'
import TechnologyStack from '../../components/TechnologyStack/TechnologyStack'

const capabilities = [
  [Braces, 'Modern frontend', 'Responsive interfaces built with React, Vue and Angular.'],
  [CloudCog, 'Reliable backend', 'Secure APIs, business logic and automation with CodeIgniter and Python.'],
  [Database, 'Structured data', 'Well-designed MySQL systems that keep information dependable and accessible.'],
  [Layers3, 'Connected products', 'Web, mobile and content platforms designed to work as one ecosystem.'],
]

export default function TechnologiesPage() {
  return <PageLayout eyebrow="Technologies" title={<>The right technology<br/>for every digital challenge.</>} intro="We choose proven, maintainable tools based on your product, users and long-term growth—not passing trends.">
    <TechnologyStack/>
    <section className="technology-capabilities"><div className="technology-capabilities-head"><span>How we build</span><h2>A practical stack,<br/>chosen with purpose.</h2><p>Every tool has a job. Our team combines them into fast, secure and scalable products that remain straightforward to manage.</p></div><div className="technology-capability-grid">{capabilities.map(([Icon, title, text], index) => <article key={title}><b>0{index + 1}</b><Icon/><h3>{title}</h3><p>{text}</p></article>)}</div></section>
  </PageLayout>
}
