import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import PageLayout from '../../components/PageLayout/PageLayout'
import { portfolioProjects } from '../../data/projects'

const details = [
  { label: 'Travel & Experiences', summary: 'A destination-led platform designed to make discovering and planning Indian travel feel simple and inspiring.', services: ['Experience design', 'Responsive development', 'Content architecture'], result: 'Clearer discovery and a faster journey from inspiration to enquiry.' },
  { label: 'Energy & Trading', summary: 'A focused corporate presence that communicates capability, trust and specialist industry expertise.', services: ['Brand-led UI', 'Frontend development', 'Lead generation'], result: 'A credible digital platform built to support new business conversations.' },
  { label: 'Property & Real Estate', summary: 'A modern property experience that helps buyers explore projects and connect with the sales team confidently.', services: ['Property UX', 'Mobile-first build', 'Conversion strategy'], result: 'A cleaner browsing experience with direct paths to qualified enquiries.' },
]

export default function PortfolioPage() {
  return <PageLayout eyebrow="WebsKode portfolio" title={<>Digital work with a<br/>purpose behind every pixel.</>} intro="A closer look at how thoughtful strategy, design and development become useful digital experiences." introAlign="centered">
    <section className="case-study-list">
      {portfolioProjects.map((project, index) => {
        const detail = details[index]
        return <article className="case-study" key={project.id}>
          <a className="case-study-image" href={project.url} target="_blank" rel="noreferrer"><img src={project.image} alt={`${project.title} website preview`} style={{ objectPosition: project.position }}/><span>0{index + 1}</span></a>
          <div className="case-study-copy"><small>{detail.label} · {project.year}</small><h2>{project.title}</h2><p>{detail.summary}</p><div className="case-study-services">{detail.services.map(service => <span key={service}><CheckCircle2/> {service}</span>)}</div><div className="case-study-result"><b>Project focus</b><p>{detail.result}</p></div><a href={project.url} target="_blank" rel="noreferrer">Explore live project <ArrowUpRight/></a></div>
        </article>
      })}
    </section>
  </PageLayout>
}
