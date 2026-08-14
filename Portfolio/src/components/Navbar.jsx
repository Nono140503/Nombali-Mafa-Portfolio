import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { getAssetUrl } from '../utils/projectData'
import './Navbar.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const resumePath = `${import.meta.env.BASE_URL}Nombali_Mafa_CV.pdf`
  const logoImgUrl = getAssetUrl('assets/N.png')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    setMobileMenuOpen(false)
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`
      return
    }
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <NavLink to="/" className="nav-logo" onClick={() => setMobileMenuOpen(false)}>
          <div className="logo-badge">
            <img src={logoImgUrl} alt="Nombali Mafa" className="logo-img" />
          </div>
          <div className="logo-text">
            <span className="logo-name">Nombali Mafa</span>
            <span className="logo-role">Creative Developer</span>
          </div>
        </NavLink>

        {/* Mobile Toggle Button */}
        <button 
          className={`mobile-menu-toggle ${mobileMenuOpen ? 'open' : ''}`} 
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Desktop & Mobile Links */}
        <div className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <NavLink 
            to="/" 
            className={({ isActive }) => `nav-link ${isActive && (location.hash === '' || location.hash === '#home') ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)} 
            end
          >
            Home
          </NavLink>

          <a
            href="#about"
            onClick={(e) => { e.preventDefault(); scrollToSection('about') }}
            className={`nav-link ${location.hash === '#about' ? 'active' : ''}`}
          >
            About
          </a>

          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); scrollToSection('projects') }}
            className={`nav-link ${location.hash === '#projects' ? 'active' : ''}`}
          >
            Work
          </a>

          <NavLink 
            to="/projects" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            All Projects
          </NavLink>

          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}
            className={`nav-link ${location.hash === '#contact' ? 'active' : ''}`}
          >
            Contact
          </a>

          <a
            href={resumePath}
            download="Nombali_Mafa_CV.pdf"
            className="btn btn-primary nav-cv-btn"
            onClick={() => setMobileMenuOpen(false)}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            CV
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar