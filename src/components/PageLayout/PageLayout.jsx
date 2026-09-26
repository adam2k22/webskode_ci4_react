import { useEffect } from 'react'
import { Sparkles } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

export default function PageLayout({ eyebrow, title, intro, introAlign = '', children }) {
  const { pathname } = useLocation()
  const pageName = { '/services': 'Our Services', '/services/logo-design': 'Logo Design', '/packages': 'Packages', '/portfolio': 'Portfolio', '/technologies': 'Technologies', '/about': 'About Us', '/contact': 'Contact Us' }[pathname] || eyebrow

  useEffect(() => { window.scrollTo(0, 0) }, [pathname])

  return <><Header/><main className="inner-page"><section className="inner-hero"><div className="inner-hero-content"><h1>{pageName}</h1><div className="breadcrumbs"><Link to="/">Home</Link><i><Sparkles size={13}/></i><span>{pageName}</span></div></div></section><section className={`page-intro ${introAlign}`}><span>{eyebrow}</span><h2>{title}</h2><p>{intro}</p></section>{children}</main><Footer/></>
}
