import { ArrowUpRight } from 'lucide-react'

export default function ProjectCard({ project, index }) {
  return <article className={`project p${index}`}>
    <a className="art portfolio-art" href={project.url} target="_blank" rel="noreferrer"><img src={project.image} alt={`${project.title} website preview`} style={{ objectPosition: project.position }}/><div className="portfolio-overlay"><small>{project.url?.replace(/^https?:\/\//,'').replace(/\/$/,'')}</small><span>View live website <ArrowUpRight size={17}/></span></div><span className="index">0{index + 1}</span></a>
    <div className="project-meta"><div><h3>{project.title}</h3><p>{project.type} · {project.year}</p></div><a className="project-link" href={project.url} target="_blank" rel="noreferrer" aria-label={`View ${project.title}`}><ArrowUpRight/></a></div>
  </article>
}
