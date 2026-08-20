import { useEffect, useRef } from 'react'
import { BriefcaseBusiness, Megaphone, Search, Target, TrendingUp } from 'lucide-react'
import dataImage from '../../assets/infographic-data.png'
import fullstackImage from '../../assets/infographic-fullstack.png'

const skills = [
  { icon: Search, name: 'SEO Marketing', score: 85 },
  { icon: BriefcaseBusiness, name: 'Business Planning', score: 95 },
  { icon: Megaphone, name: 'Digital Marketing', score: 90 },
  { icon: Target, name: 'Product Strategy', score: 88 }
]

export default function SkillsSection() {
  const sectionRef = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && entry.target.classList.add('skills-visible'), { threshold: .25 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return <section className="skills-section" ref={sectionRef}>
    <span className="skills-cursor"/>
    <div className="skills-title"><div><i/> Our Skills</div><h2>Certified expertise.<br/>Skilled developers.</h2></div>
    <div className="skills-layout">
      <div className="skills-visual"><img className="skills-image one" src={fullstackImage} alt="Full-stack engineering infographic"/><img className="skills-image two" src={dataImage} alt="Data systems infographic"/><i><TrendingUp/></i></div>
      <div className="skills-copy"><p>Turn your ideas into reliable digital products with our experienced design and development team. Our practical expertise helps businesses launch faster, operate efficiently and scale with confidence.</p><div className="skills-grid">{skills.map(({ icon:Icon,name,score },index)=><article key={name} style={{'--delay':`${index*100}ms`}}><i><Icon/></i><div><div className="skill-head"><b>{name}</b><strong>{score}%</strong></div><span className="skill-track"><em style={{'--score':`${score}%`}}/></span></div></article>)}</div></div>
    </div>
  </section>
}
