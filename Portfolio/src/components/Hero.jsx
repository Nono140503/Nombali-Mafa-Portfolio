import { projectsData, getAssetUrl } from '../utils/projectData'
import './Hero.css'

const Hero = () => {
  const profilePicUrl = getAssetUrl('assets/Nombali.png')

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault()
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero-section">
      {/* Background ambient lighting */}
      <div className="hero-glow-blob glow-1"></div>
      <div className="hero-glow-blob glow-2"></div>
      
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Hero Text & Narrative */}
          <div className="hero-text-content animate-fadeInUp">
            <div className="location-badge">
              <span className="pulse-dot"></span>
              <span>Based in Johannesburg, South Africa • Open for Projects</span>
            </div>

            <h1 className="hero-name heading-xl">
              Nombali <span className="text-gradient">Mafa</span>
            </h1>

            <h2 className="hero-tagline heading-md">
              Software Developer & AI Solutions Builder
            </h2>

            <p className="hero-description">
              I architect intelligent WhatsApp AI chatbots, responsive web applications, and healthcare machine learning models designed to solve complex real-world challenges.
            </p>

            <div className="hero-actions">
              <a 
                href="#projects" 
                className="btn btn-primary"
                onClick={(e) => handleSmoothScroll(e, 'projects')}
              >
                <span>Explore Selected Work</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>

              <a 
                href="#contact" 
                className="btn btn-secondary"
                onClick={(e) => handleSmoothScroll(e, 'contact')}
              >
                <span>Get In Touch</span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-value">08+</span>
                <span className="stat-label">Shipped Projects</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-value">03</span>
                <span className="stat-label">WhatsApp AI Bots</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-value">81%</span>
                <span className="stat-label">ML Risk Model Acc.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Prominent Large Profile Image */}
          <div className="hero-visual-content animate-fadeInUp">
            <div className="blended-profile-wrapper">
              <div className="profile-image-container animate-float">
                <img 
                  src={profilePicUrl} 
                  alt="Nombali Mafa" 
                  className="profile-img"
                />
                <div className="profile-ring"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero