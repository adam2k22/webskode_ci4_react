import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home/HomePage'
import ServicesPage from './pages/Services/ServicesPage'
import PackagesPage from './pages/Packages/PackagesPage'
import PortfolioPage from './pages/Portfolio/PortfolioPage'
import AboutPage from './pages/About/AboutPage'
import ContactPage from './pages/Contact/ContactPage'
import TechnologiesPage from './pages/Technologies/TechnologiesPage'
import LogoDesignPage from './pages/Services/LogoDesignPage'
import ServiceCategoryPage from './pages/Services/ServiceCategoryPage'
import ServiceItemPage from './pages/Services/ServiceItemPage'
import TermsPage from './pages/Legal/TermsPage'
import SiteMeta from './components/SiteMeta/SiteMeta'
import MouseEffect from './components/MouseEffect/MouseEffect'
import ChatBot from './components/ChatBot/ChatBot'
import GuideBot from './components/GuideBot/GuideBot'
import './style.css'

// The cursor effect, assistant and mascot are not part of the page itself, so they are added once it has been shown.
// They stay in the main bundle: as separate files they were three more requests chained behind it.
function Extras() {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    const whenIdle = window.requestIdleCallback || (run => setTimeout(run, 1500))
    whenIdle(() => setReady(true), { timeout: 3000 })
  }, [])
  return ready && <><MouseEffect/><ChatBot/><GuideBot/></>
}

createRoot(document.getElementById('root')).render(<BrowserRouter><SiteMeta/><Extras/><Routes><Route path="/" element={<HomePage/>}/><Route path="/services" element={<ServicesPage/>}/><Route path="/services/logo-design" element={<LogoDesignPage/>}/><Route path="/services/:slug" element={<ServiceCategoryPage/>}/><Route path="/services/:category/:item" element={<ServiceItemPage/>}/><Route path="/packages" element={<PackagesPage/>}/><Route path="/portfolio" element={<PortfolioPage/>}/><Route path="/technologies" element={<TechnologiesPage/>}/><Route path="/about" element={<AboutPage/>}/><Route path="/contact" element={<ContactPage/>}/><Route path="/terms-and-policies" element={<TermsPage/>}/></Routes></BrowserRouter>)
