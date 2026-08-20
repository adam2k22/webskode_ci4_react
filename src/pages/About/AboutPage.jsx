import { ArrowUpRight, CheckCircle2, Code2, HeartHandshake, Lightbulb, Target } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageLayout from '../../components/PageLayout/PageLayout'
import teamImage from '../../assets/why-us-engineer.png'

export default function AboutPage() {
  const values = [
    [Lightbulb, 'Think clearly', 'We begin with the business problem, not a predetermined solution.'],
    [Code2, 'Build properly', 'Maintainable technology creates value long after the first launch.'],
    [HeartHandshake, 'Work together', 'Open communication keeps your team aligned and the project moving.'],
    [Target, 'Focus on outcomes', 'Every design and engineering decision supports a meaningful goal.'],
  ]

  return <PageLayout eyebrow="About WebsKode" title="A practical technology partner for ambitious teams." intro="We combine thoughtful strategy, focused design and dependable engineering to solve meaningful business problems.">
    <section className="about-intro">
      <div className="about-intro-title"><span>Who we are</span><h2>Small enough to care.<br/>Skilled enough to deliver.</h2></div>
      <div className="about-intro-copy"><p>WebsKode supports businesses through the complete digital lifecycle—from an early idea and its first website to complex software, managed data and growth marketing.</p><p>We communicate clearly, build responsibly and measure our success by the value our work creates.</p></div>
    </section>

    <section className="about-company">
      <div className="about-company-image"><img src={teamImage} alt="Cartoon illustration of a WebsKode developer"/><span>Ideas engineered<br/>for growth.</span></div>
      <div className="about-company-copy"><span>Why WebsKode</span><h2>One team for strategy, design, code and growth.</h2><p>Fewer handoffs mean clearer decisions, better quality and a product that feels consistent from the first screen to the final integration.</p>
        <div className="about-benefits"><span><CheckCircle2/>Strategy shaped around your goals</span><span><CheckCircle2/>Design and engineering under one roof</span><span><CheckCircle2/>Support that continues after launch</span></div>
        <div className="about-numbers"><strong>360°<small>Digital capability</small></strong><strong>06<small>Core services</small></strong><strong>02<small>Mobile platforms</small></strong></div>
        <Link className="about-contact-link" to="/contact">Start a conversation <ArrowUpRight/></Link>
      </div>
    </section>

    <section className="about-values"><div className="about-values-head"><span>How we work</span><h2>Principles behind every project.</h2><p>A thoughtful process makes complex digital work feel simple, transparent and focused.</p></div><div className="values-grid">{values.map(([Icon,title,text], index)=><article key={title}><b>0{index + 1}</b><Icon/><h3>{title}</h3><p>{text}</p></article>)}</div></section>
  </PageLayout>
}
