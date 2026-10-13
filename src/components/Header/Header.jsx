import { useEffect, useRef, useState } from 'react'
import { ChevronDown, Clock3, Mail, Menu, Rocket, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import webskodeLogo from '../../assets/webskode-logo-600.webp'
import Image from '../Image/Image'
import { serviceCatalog } from '../../data/serviceCatalog'
import { launchBundle, packageCategories } from '../../data/packages'

export default function Header() {
  const { pathname } = useLocation()
  const innerRoute = pathname !== '/'
  const [menu, setMenu] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const markerRef = useRef(null)

  // The marker covers the first 120px of the page; the header shrinks once it has scrolled out of view.
  // An observer reports that without reading the scroll position, which would force a layout on every load.
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting))
    observer.observe(markerRef.current)
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => { setMenu(false); setOpenDropdown(null) }
  const toggleDropdown = name => setOpenDropdown(openDropdown === name ? null : name)

  return <>
    <div className={`topbar ${innerRoute ? 'inner-topbar' : ''}`}>
      <span>Welcome to WebsKode — ideas engineered for growth.</span>
    </div>
    <header className={`site-header ${innerRoute ? 'inner-route' : ''} ${scrolled ? 'scrolled' : ''}`}>
      <Link className="logo webskode-logo" to="/" aria-label="WebsKode home"><Image src={webskodeLogo} alt="WebsKode" sizes="(max-width: 760px) 145px, 205px" width="600" height="200" loading="eager"/></Link>
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
    <span className="scroll-marker" ref={markerRef}/>
  </>
}
