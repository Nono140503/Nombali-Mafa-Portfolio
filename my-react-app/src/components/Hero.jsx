import { useState, useEffect } from 'react'
import './Hero.css'

const Hero = () => {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault()
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title animate-fadeInUp">
              Hi, I'm <span className="highlight">Nombali Mafa</span>
            </h1>
            
            <h2 className="hero-subtitle animate-fadeInUp" style={{animationDelay: '0.2s'}}>
              Software Developer
            </h2>
            
            <div className="hero-description animate-fadeInUp" style={{animationDelay: '0.6s'}}>
              <p>
                I'm passionate about creating innovative solutions through code. From WhatsApp chatbots to mobile applications, I build technology that makes a difference in people's lives.
              </p>
            </div>
            
            <div className="hero-buttons animate-fadeInUp" style={{animationDelay: '0.8s'}}>
              <a 
                href="#projects" 
                className="btn btn-primary"
                onClick={(e) => handleSmoothScroll(e, 'projects')}
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="btn btn-outline"
                onClick={(e) => handleSmoothScroll(e, 'contact')}
              >
                Get In Touch
              </a>
            </div>
          </div>
          
          <div className="hero-image animate-fadeInRight">
            <div className="image-container">
              <img 
                src="/Nombali (2).png" 
                alt="Nombali Mafa" 
                className="profile-image animate-float"
              />
              <div className="image-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero