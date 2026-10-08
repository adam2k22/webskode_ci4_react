import { useEffect, useState } from 'react'
import { ChevronDown, Clock3, Mail, Menu, Rocket, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import webskodeLogo from '../../assets/webskode-logo.png'
import { serviceCatalog } from '../../data/serviceCatalog'
import { launchBundle, packageCategories } from '../../data/packages'

export default function Header() {
  const { pathname } = useLocation()
  const innerRoute = pathname !== '/'
  const [menu, setMenu] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 120)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => { setMenu(false); setOpenDropdown(null) }
  const toggleDropdown = name => setOpenDropdown(openDropdown === name ? null : name)

  return <>
    <div className={`topbar ${innerRoute ? 'inner-topbar' : ''}`}>
      <span>Welcome to WebsKode — ideas engineered for growth.</span>
    </div>
    <header className={`site-header ${innerRoute ? 'inner-route' : ''} ${scrolled ? 'scrolled' : ''}`}>
      <Link className="logo webskode-logo" to="/" aria-label="WebsKode home"><img src={webskodeLogo} alt="WebsKode"/></Link>
      <nav className={menu ? 'open' : ''}>
        <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
        <div className={openDropdown === 'services' ? 'nav-dropdown open' : 'nav-dropdown'}>
          <NavLink to="/services" onClick={closeMenu}>Services <ChevronDown size={15}/></NavLink>
          <button className="nav-dropdown-toggle" type="button" onClick={() => toggleDropdown('services')} aria-expanded={openDropdown === 'services'} aria-label="Toggle services menu"><ChevronDown size={18}/></button>
          <div className="nav-dropdown-menu">
            {serviceCatalog.map(({ icon: Icon, slug, title }) => <NavLink to={`/services/${slug}`} onClick={closeMenu} key={slug}><Icon size={17}/>{title}</NavLink>)}
          </div>
        </div>
        <div className={openDropdown === 'packages' ? 'nav-dropdown open' : 'nav-dropdown'}>
          <NavLink to="/packages" onClick={closeMenu}>Packages <ChevronDown size={15}/></NavLink>
          <button className="nav-dropdown-toggle" type="button" onClick={() => toggleDropdown('packages')} aria-expanded={openDropdown === 'packages'} aria-label="Toggle packages menu"><ChevronDown size={18}/></button>
          <div className="nav-dropdown-menu">
            {packageCategories.map(({ icon: Icon, id, title }) => <Link to={`/packages#${id}`} onClick={closeMenu} key={id}><Icon size={17}/>{title}</Link>)}
            <Link to={`/packages#${launchBundle.id}`} onClick={closeMenu}><Rocket size={17}/>{launchBundle.title}</Link>
          </div>
        </div>
        <NavLink to="/portfolio" onClick={closeMenu}>Portfolio</NavLink><NavLink to="/about" onClick={closeMenu}>About</NavLink><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
      </nav>
      <a className="email-link" href="mailto:info@webskode.com"><i><Mail size={21}/></i><span><b>Email Us:</b>info@webskode.com</span></a>
      <button className="menu" onClick={() => setMenu(!menu)} aria-label="Toggle menu">{menu ? <X/> : <Menu/>}</button>
    </header>
  </>
}
