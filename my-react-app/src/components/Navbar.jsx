import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  // build resume path using Vite base so it works when app is hosted on a subpath
  const resumePath = `${import.meta.env.BASE_URL}Nombali_mafa_Resume.pdf`

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-content">
          <div className="nav-logo">
            <span className='initials'>NGM</span>
          </div>
          
          <div className="nav-links">
            <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} end>
              Home
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Projects
            </NavLink>
            <a
              href="#contact"
              onClick={() => scrollToSection('contact')}
              className={`nav-link ${location.hash === '#contact' ? 'active' : ''}`}
            >
              Contact
            </a>
            <a
              href={resumePath}
              download="Nombali_mafa_Resume.pdf"
              className="btn btn-primary nav-btn"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar