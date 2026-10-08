import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import PageLayout from '../../components/PageLayout/PageLayout'
import PackagesPreview from '../../components/PackagesPreview/PackagesPreview'

export default function PackagesPage() {
  const { hash } = useLocation()

  // Menu links point at a category (/packages#mobile-apps); bring it into view.
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView()
  }, [hash])

  return <PageLayout eyebrow="Flexible packages" title="A clear starting point for every ambition." intro="Every project is scoped around your goals. Choose a starting package and we’ll tailor the details together.">
    <PackagesPreview showAll/>
    <section className="package-faq"><div><span>Before we start</span><h2>Common package questions.</h2><p>Need something different? Every plan can be adjusted around your requirements.</p></div><div>{[['Are the prices fixed?','Packages are starting points. We provide a clear final quote after understanding scope, integrations and timelines.'],['Can I upgrade later?','Yes. We build with growth in mind, so additional pages, features and integrations can be added later.'],['Do you provide ongoing support?','Every launch includes handover support, with optional maintenance and growth retainers available.']].map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></section>
  </PageLayout>
}
