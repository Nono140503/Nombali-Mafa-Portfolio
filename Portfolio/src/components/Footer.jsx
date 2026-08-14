import { getAssetUrl } from '../utils/projectData'
import './Footer.css'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-card glass-card">
          <div className="footer-top">
            {/* Brand Logo & Name */}
            <div className="footer-brand">
              <div className="footer-logo-badge">
                <img 
                  src={getAssetUrl('assets/N.png')} 
                  alt="Nombali Mafa Logo" 
                  className="footer-logo-img"
                />
              </div>
              <div className="footer-brand-info">
                <h3 className="footer-name">Nombali Mafa</h3>
                <p className="footer-tagline">Software Developer & AI Solutions Architect</p>
              </div>
            </div>

            {/* Links */}
            <div className="footer-nav">
              <a href="#home" onClick={scrollToTop} className="footer-nav-link">Home</a>
              <a href="#about" className="footer-nav-link">About</a>
              <a href="#projects" className="footer-nav-link">Projects</a>
              <a href="#community" className="footer-nav-link">Recognition</a>
              <a href="#contact" className="footer-nav-link">Contact</a>
            </div>

            {/* Back to Top */}
            <button className="back-to-top-btn" onClick={scrollToTop} aria-label="Back to top">
              <span>Back to Top</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="12" y1="19" x2="12" y2="5"/>
                <polyline points="5 12 12 5 19 12"/>
              </svg>
            </button>
          </div>

          <div className="footer-divider"></div>

          <div className="footer-bottom">
            <p className="copyright-text">
              © {new Date().getFullYear()} <strong>Nombali Mafa</strong>. Engineered for real-world impact in Johannesburg, South Africa.
            </p>
            <div className="footer-socials">
              <a 
                href="https://github.com/Nono140503" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-icon"
                aria-label="GitHub"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/nombali-mafa-931086280" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-icon"
                aria-label="LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer