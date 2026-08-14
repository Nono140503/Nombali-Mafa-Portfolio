import { useState } from 'react'
import { projectsData } from '../utils/projectData'
import './About.css'

const About = () => {
  const [activeTab, setActiveTab] = useState('spaza-tycoon')
  const activeProject = projectsData.find(p => p.id === activeTab) || projectsData[0]

  const milestones = [
    {
      year: '2025',
      title: 'Spaza Tycoon & Financial AI Innovation',
      desc: 'Architected Web3 business simulations built on Base L2 and conversational AI tools for township economic empowerment and digital reputation.'
    },
    {
      year: '2024',
      title: 'Clinical ML Healthcare Predictor',
      desc: 'Trained and evaluated an 81% accuracy Random Forest predictive risk model for maternal health triage.'
    },
    {
      year: '2024',
      title: 'WhatsApp Automation Suite',
      desc: 'Created CrediBot, AllyBot, and ReproBot delivering interactive AI education direct to WhatsApp.'
    },
    {
      year: '2024',
      title: 'SafeHer Women Safety Platform',
      desc: 'Engineered a React Native mobile application for instant emergency geo-dispatch and community alerts.'
    }
  ]

  const focusPillars = [
    {
      title: 'WhatsApp AI Automation',
      desc: 'Deploying conversational LLM pipelines to accessible chat channels for real-time finance & health literacy.',
      iconSvg: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      )
    },
    {
      title: 'Full-Stack Web & Mobile',
      desc: 'Engineering high-performance React and React Native applications with clean architecture and smooth UX.',
      iconSvg: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      )
    },
    {
      title: 'Machine Learning & Analytics',
      desc: 'Building practical classification models, data pipelines, and exploratory correlation studies in Python.',
      iconSvg: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="20" x2="18" y2="10"/>
          <line x1="12" y1="20" x2="12" y2="4"/>
          <line x1="6" y1="20" x2="6" y2="14"/>
        </svg>
      )
    }
  ]

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          {/* Left Narrative & Milestones Column */}
          <div className="about-story-col animate-fadeInUp">
            <div className="section-label">
              <span>02 // ABOUT & CREDIBILITY</span>
            </div>

            <h2 className="section-title">
              Engineering Practical Technology for <span className="text-gradient">Real-World Impact</span>
            </h2>

            <p className="about-narrative">
              I'm a software developer based in <strong>Johannesburg, South Africa</strong>, passionate about building digital solutions that bridge technical capability with community empowerment.
            </p>

            <p className="about-narrative">
              From building Web3 financial simulations for local informal traders to developing maternal health risk predictors and AI messaging bots, my work focuses on software that delivers tangible value.
            </p>

            {/* Typography Pull Quote */}
            <div className="pull-quote-box glass-card">
              <span className="quote-mark">“</span>
              <p className="quote-text">
                Technology becomes truly powerful when it simplifies complex systems into intuitive tools for everyday people.
              </p>
              <span className="quote-author">— Nombali Mafa</span>
            </div>

            {/* Core Focus Pillars */}
            <div className="focus-pillars-wrapper">
              <h3 className="sub-heading">Core Focus Areas</h3>
              <div className="pillars-list">
                {focusPillars.map((pillar, idx) => (
                  <div key={idx} className="pillar-card glass-card">
                    <div className="pillar-icon-box">
                      {pillar.iconSvg}
                    </div>
                    <div className="pillar-info">
                      <h4 className="pillar-title">{pillar.title}</h4>
                      <p className="pillar-desc">{pillar.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Code Console & Timeline */}
          <div className="about-details-col animate-fadeInUp">
            {/* Embedded Developer Code Console on the Right */}
            <div className="console-wrapper">
              <div className="console-title-bar">
                <span className="console-label">INTERACTIVE CODE CONSOLE</span>
              </div>
              <div className="terminal-card glass-card">
                <div className="terminal-header">
                  <div className="window-dots">
                    <span className="dot dot-red"></span>
                    <span className="dot dot-yellow"></span>
                    <span className="dot dot-green"></span>
                  </div>
                  <div className="terminal-title">nombali-portfolio ~ console</div>
                  <div className="terminal-badge">LIVE CODE</div>
                </div>

                {/* Code Tabs */}
                <div className="terminal-tabs">
                  <button 
                    className={`tab-btn ${activeTab === 'spaza-tycoon' ? 'active' : ''}`}
                    onClick={() => setActiveTab('spaza-tycoon')}
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="16 18 22 12 16 6"/>
                      <polyline points="8 6 2 12 8 18"/>
                    </svg>
                    spaza-tycoon.ts
                  </button>
                  <button 
                    className={`tab-btn ${activeTab === 'finlit-gpt' ? 'active' : ''}`}
                    onClick={() => setActiveTab('finlit-gpt')}
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                    finlit-gpt.py
                  </button>
                  <button 
                    className={`tab-btn ${activeTab === 'maternal-health-risk' ? 'active' : ''}`}
                    onClick={() => setActiveTab('maternal-health-risk')}
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="18" y1="20" x2="18" y2="10"/>
                      <line x1="12" y1="20" x2="12" y2="4"/>
                      <line x1="6" y1="20" x2="6" y2="14"/>
                    </svg>
                    maternal-risk.py
                  </button>
                </div>

                {/* Code Display Window */}
                <div className="terminal-body">
                  <pre className="code-block">
                    <code>{activeProject.codeSnippet}</code>
                  </pre>
                </div>
              </div>
            </div>

            {/* Selected Milestones Timeline */}
            <div className="milestones-wrapper">
              <h3 className="sub-heading">Selected Milestones</h3>
              <div className="timeline-list">
                {milestones.map((m, idx) => (
                  <div key={idx} className="timeline-item">
                    <div className="timeline-badge">{m.year}</div>
                    <div className="timeline-content">
                      <h4 className="timeline-title">{m.title}</h4>
                      <p className="timeline-desc">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
