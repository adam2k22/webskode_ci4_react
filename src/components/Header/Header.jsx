import { useEffect, useState } from 'react'
import { Clock3, Mail, Menu, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import webskodeLogo from '../../assets/webskode-logo.png'

export default function Header() {
  const { pathname } = useLocation()
  const innerRoute = pathname !== '/'
  const [menu, setMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 120)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenu(false)

  return <>
    <div className={`topbar ${innerRoute ? 'inner-topbar' : ''}`}>
      <span>Welcome to WebsKode — ideas engineered for growth.</span>
    </div>
    <header className={`site-header ${innerRoute ? 'inner-route' : ''} ${scrolled ? 'scrolled' : ''}`}>
      <Link className="logo webskode-logo" to="/" aria-label="WebsKode home"><img src={webskodeLogo} alt="WebsKode"/></Link>
      <nav className={menu ? 'open' : ''}>
        <NavLink to="/" end onClick={closeMenu}>Home</NavLink><NavLink to="/services" onClick={closeMenu}>Services</NavLink><NavLink to="/packages" onClick={closeMenu}>Packages</NavLink><NavLink to="/portfolio" onClick={closeMenu}>Portfolio</NavLink><NavLink to="/about" onClick={closeMenu}>About</NavLink><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
      </nav>
      <a className="email-link" href="mailto:info@webskode.com"><i><Mail size={21}/></i><span><b>Email Us:</b>info@webskode.com</span></a>
      <button className="menu" onClick={() => setMenu(!menu)} aria-label="Toggle menu">{menu ? <X/> : <Menu/>}</button>
    </header>
  </>
}
