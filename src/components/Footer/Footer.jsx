import { useEffect, useState } from 'react'
import { ArrowUp, Mail, MapPin, MessageCircle, Phone, Send, X } from 'lucide-react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import webskodeLogo from '../../assets/webskode-logo.png'
import ContactForm from '../ContactForm/ContactForm'
import ContactCTA from '../ContactCTA/ContactCTA'
import FooterInfographic from '../FooterInfographic/FooterInfographic'
import { serviceCatalog } from '../../data/serviceCatalog'
import { launchBundle, packageCategories } from '../../data/packages'

export default function Footer() {
  const [contactOpen, setContactOpen] = useState(false)
  useEffect(() => {
    const close = event => event.key === 'Escape' && setContactOpen(false)
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [])

  return <>
    <ContactCTA/>
    <footer className="site-footer">
      <div className="footer-accent"/>
      <div className="footer-top">
        <div className="footer-brand">
          <Link to="/"><img src={webskodeLogo} alt="WebsKode"/></Link>
          <p>Improve efficiency and customer experience with dependable websites, software, mobile apps and digital growth services.</p>
          <div className="footer-contact"><a href="tel:+919870438617"><i><Phone size={17}/></i>+91 98704 38617</a><a href="mailto:info@webskode.com"><i><Mail size={17}/></i>info@webskode.com</a><div className="footer-address"><i><MapPin size={17}/></i><span>Corner Shop, Gali No. 6, Palam Colony, Corner, Tikri Rd, Sector 28, Vasant Vihar, Karnal, Haryana 132001</span></div></div>
        </div>
        <FooterInfographic/>
      </div>
      <div className="footer-columns">
        <div className="footer-column" role="navigation" aria-label="Company"><h3>Company</h3><div className="footer-column-links"><Link to="/about">About Us</Link><Link to="/services">Services</Link><Link to="/packages">Packages</Link><Link to="/portfolio">Portfolio</Link><Link to="/technologies">Technologies</Link><Link to="/contact">Contact Us</Link><Link to="/terms-and-policies">Terms & Policies</Link><a href="mailto:info@webskode.com">Get a Quote</a></div></div>
        <div className="footer-column" role="navigation" aria-label="Services"><h3><Link to="/services">Services</Link></h3><div className="footer-column-links two">{serviceCatalog.map(({ slug, title }) => <Link to={`/services/${slug}`} key={slug}>{title}</Link>)}</div></div>
        <div className="footer-column" role="navigation" aria-label="Packages"><h3><Link to="/packages">Packages</Link></h3><div className="footer-column-links two">{packageCategories.map(({ id, title }) => <Link to={`/packages#${id}`} key={id}>{title}</Link>)}<Link to={`/packages#${launchBundle.id}`}>{launchBundle.title}</Link></div></div>
      </div>
      <div className="footer-social"><a href="#" aria-label="LinkedIn"><FaLinkedinIn/>LinkedIn</a><a href="#" aria-label="Facebook"><FaFacebookF/>Facebook</a><a href="#" aria-label="Instagram"><FaInstagram/>Instagram</a><a href="mailto:info@webskode.com"><Send size={17}/>Email Us</a></div>
      <div className="footer-bottom"><p>© 2026 <b>WebsKode</b>. All Rights Reserved.</p><Link to="/terms-and-policies">Terms & Policies</Link></div>
    </footer>
    <button className="go-top-button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Go to top"><ArrowUp/></button>
    <a className="floating-whatsapp-button" href="https://wa.me/919870438617?text=Hello%20WebsKode%2C%20I%20would%20like%20to%20discuss%20a%20project." target="_blank" rel="noreferrer" aria-label="Chat with WebsKode on WhatsApp"><FaWhatsapp/><span>WhatsApp</span></a>
    <button className="floating-contact-button" onClick={() => setContactOpen(true)} aria-label="Open contact form"><MessageCircle/><span>Let’s Talk</span></button>
    {contactOpen && <div className="contact-drawer-backdrop" onClick={() => setContactOpen(false)}><aside className="contact-drawer" onClick={event => event.stopPropagation()} aria-label="Contact WebsKode"><button className="contact-drawer-close" onClick={() => setContactOpen(false)} aria-label="Close contact form"><X/></button><span>Start a project</span><h2>Let’s build something great.</h2><p>Tell us about your project and we’ll respond within one business day.</p><ContactForm/></aside></div>}
  </>
}
