import { ArrowUpRight } from 'lucide-react'
import { SiAngular, SiCodeigniter, SiFlutter, SiMysql, SiPython, SiReact, SiVuedotjs, SiWordpress } from 'react-icons/si'
import { Link } from 'react-router-dom'

const technologies = [
  { score: 95, icon: SiReact, name: 'React', type: 'Frontend Development', copy: 'Fast, responsive interfaces built around reusable components.' },
  { score: 92, icon: SiCodeigniter, name: 'CodeIgniter 4', type: 'Backend Framework', copy: 'Secure APIs and dependable server-side business logic.' },
  { score: 90, icon: SiMysql, name: 'MySQL', type: 'Data Management', copy: 'Structured, scalable databases designed for reliable access.' },
  { score: 88, icon: SiFlutter, name: 'Flutter', type: 'Mobile Development', copy: 'Consistent Android and iOS applications from one codebase.' },
  { score: 92, icon: SiVuedotjs, name: 'Vue.js', type: 'Frontend Framework', copy: 'Progressive and approachable interfaces for modern web products.' },
  { score: 89, icon: SiAngular, name: 'Angular', type: 'Application Framework', copy: 'Structured, enterprise-ready applications built for long-term scale.' },
  { score: 91, icon: SiPython, name: 'Python', type: 'Software & Automation', copy: 'Powerful backend systems, data workflows and intelligent automation.' },
  { score: 94, icon: SiWordpress, name: 'WordPress', type: 'CMS Development', copy: 'Flexible, manageable business websites and custom content platforms.' }
]

export default function TechnologyStack() {
  return <section className="technology-stack">
    <span className="stack-dot"/>
    <div className="stack-heading"><div><i/> Our Technology Stack</div><h2>Smart tools fueling creative &<br/>scalable development</h2></div>
    <div className="stack-grid">{technologies.map(({ score, icon: Icon, name, type, copy }) => <article key={name}>
      <div className="stack-score"><strong>{score}%</strong><span><i style={{ '--score': `${score}%` }}/></span></div>
      <p>{copy}</p><Icon/><div className="stack-meta"><h3>{name}</h3><span>{type}</span></div>
    </article>)}</div>
    <div className="stack-cta"><span>WK</span><p>Let’s make something great work together.</p><Link to="/contact">Get Free Quote <ArrowUpRight size={17}/></Link></div>
  </section>
}
