import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

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
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/projects" className="nav-link">
              Projects
            </Link>
            <a href="#contact" onClick={() => scrollToSection('contact')} className="nav-link">
              Contact
            </a>
            <a 
              href="/Nombali_Mafa_Resume.pdf" 
              download="Nombali_Mafa_Resume.pdf" 
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