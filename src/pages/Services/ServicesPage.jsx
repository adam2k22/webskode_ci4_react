import PageLayout from '../../components/PageLayout/PageLayout'
import ServicesShowcase from '../../components/ServicesShowcase/ServicesShowcase'
import SkillsSection from '../../components/SkillsSection/SkillsSection'

export default function ServicesPage() {
  return <PageLayout eyebrow="Our capabilities" title="Technology from idea to impact." intro="Strategy, design, engineering and growth expertise working together under one roof.">
    <ServicesShowcase/>
    <SkillsSection/>
  </PageLayout>
}
