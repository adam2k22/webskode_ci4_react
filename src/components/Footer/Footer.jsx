import { useEffect, useState } from 'react'
import { ArrowUp, Mail, MessageCircle, Phone, Send, X } from 'lucide-react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import webskodeLogo from '../../assets/webskode-logo.png'
import ContactForm from '../ContactForm/ContactForm'
import ContactCTA from '../ContactCTA/ContactCTA'

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
      <div className="footer-main">
        <div className="footer-brand"><Link to="/"><img src={webskodeLogo} alt="WebsKode"/></Link><p>Improve efficiency and customer experience with dependable websites, software, mobile apps and digital growth services.</p></div>
        <div className="footer-links"><div><Link to="/about">About Us</Link><Link to="/packages">Packages</Link><Link to="/portfolio">Portfolio</Link><Link to="/services">Services</Link></div><div><Link to="/technologies">Technologies</Link><Link to="/contact">Contact Us</Link><a href="mailto:info@webskode.com">Get a Quote</a></div></div>
        <div className="footer-contact"><div className="footer-mini-cards"><span>&lt;/&gt;</span><span>UI</span><span>APP</span></div><a href="tel:+919870438617"><i><Phone size={17}/></i>+91 98704 38617</a><a href="mailto:info@webskode.com"><i><Mail size={17}/></i>info@webskode.com</a></div>
      </div>
      <div className="footer-social"><a href="#" aria-label="LinkedIn"><FaLinkedinIn/>LinkedIn</a><a href="#" aria-label="Facebook"><FaFacebookF/>Facebook</a><a href="#" aria-label="Instagram"><FaInstagram/>Instagram</a><a href="mailto:info@webskode.com"><Send size={17}/>Email Us</a></div>
      <div className="footer-bottom"><p>© 2026 <b>WebsKode</b>. All Rights Reserved.</p></div>
    </footer>
    <button className="go-top-button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Go to top"><ArrowUp/></button>
    <a className="floating-whatsapp-button" href="https://wa.me/919870438617?text=Hello%20WebsKode%2C%20I%20would%20like%20to%20discuss%20a%20project." target="_blank" rel="noreferrer" aria-label="Chat with WebsKode on WhatsApp"><FaWhatsapp/><span>WhatsApp</span></a>
    <button className="floating-contact-button" onClick={() => setContactOpen(true)} aria-label="Open contact form"><MessageCircle/><span>Let’s Talk</span></button>
    {contactOpen && <div className="contact-drawer-backdrop" onClick={() => setContactOpen(false)}><aside className="contact-drawer" onClick={event => event.stopPropagation()} aria-label="Contact WebsKode"><button className="contact-drawer-close" onClick={() => setContactOpen(false)} aria-label="Close contact form"><X/></button><span>Start a project</span><h2>Let’s build something great.</h2><p>Tell us about your project and we’ll respond within one business day.</p><ContactForm/></aside></div>}
  </>
}
