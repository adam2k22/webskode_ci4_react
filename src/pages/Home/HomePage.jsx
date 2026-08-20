import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import HomeServices from '../../components/HomeServices/HomeServices'
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs'
import TechnologyStack from '../../components/TechnologyStack/TechnologyStack'
import CoreFeatures from '../../components/CoreFeatures/CoreFeatures'
import { portfolioProjects } from '../../data/projects'
import PackagesPreview from '../../components/PackagesPreview/PackagesPreview'
import AboutPreview from '../../components/AboutPreview/AboutPreview'

export default function HomePage() {
  return <>
    <Header/>
    <main id="top">
      <section className="hero dark-hero"><span className="hero-dot"/><div className="dark-hero-copy"><div className="dark-eyebrow"><i/> Full-Service Technology Partner</div><h1>We build digital products<br/><span>that move businesses forward.</span></h1><p>WebsKode creates fast websites, scalable software, reliable data systems, mobile apps, and digital marketing strategies.<br/>From frontend experiences to backend engineering, we turn ambitious ideas into technology that performs.</p><a className="dark-cta" href="/contact">Start Your Project <ArrowUpRight size={18}/></a></div><div className="hero-stats"><article><div><strong>650+</strong><b>Project Delivered</b></div><p>Successfully completed websites across various industries</p></article><article><div><strong>95%</strong><b>Satisfied Rate</b></div><p>Consistently delivering results that meet and exceed clients.</p></article><article><div><strong>120+</strong><b>Stores Built</b></div><p>High-performing online stores designed to convert and scale.</p></article></div></section>
      <HomeServices/>
      <WhyChooseUs/>
      <TechnologyStack/>
      <CoreFeatures/>
      <section className="work" id="work"><div className="section-head home-work-head"><span>Featured work</span><h2>Real projects.<br/>Measurable impact.</h2><Link to="/portfolio">View portfolio <ArrowUpRight/></Link></div><div className="project-grid">{portfolioProjects.map((project, index) => <ProjectCard project={project} index={index} key={project.id}/>)}</div></section>
      <PackagesPreview/>
      <AboutPreview/>
    </main>
    <Footer/>
  </>
}
