import { ArrowUpRight } from 'lucide-react'
import { portfolioProjects } from '../../data/projects'

export default function PortfolioGallery() {
  return <section className="portfolio-gallery">
    {portfolioProjects.map(project => <article className="portfolio-hover-card" key={project.id}>
      <a href={project.url} target="_blank" rel="noreferrer">
        <img src={project.image} alt={`${project.title} website preview`}/>
        <div className="portfolio-hover-details"><small>{project.type}</small><h2>{project.title}</h2><p>Purposeful design, responsive development and a focused experience created to support real business growth.</p><span>View live website <ArrowUpRight/></span></div>
      </a>
    </article>)}
  </section>
}
