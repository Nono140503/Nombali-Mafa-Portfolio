import { useEffect } from 'react'
import { projectsData, getAssetUrl } from '../utils/projectData'
import './CaseStudyModal.css'

const CaseStudyModal = ({ project, onClose, onSelectNext }) => {
  if (!project) return null

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'auto'
    }
  }, [onClose])

  const currentIndex = projectsData.findIndex(p => p.id === project.id)
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length]
  const cs = project.caseStudy || {}

  return (
    <div className="cs-overlay" onClick={onClose}>
      <div className="cs-drawer" onClick={(e) => e.stopPropagation()}>
        {/* Sticky Header with Close Button */}
        <div className="cs-header">
          <div className="cs-header-meta">
            <span className="cs-number">{project.number}</span>
            <span className="cs-category">{project.category}</span>
          </div>
          <button className="cs-close-btn" onClick={onClose} aria-label="Close Case Study">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Modal Scroll Container */}
        <div className="cs-body">
          {/* Case Study Hero Section */}
          <div className="cs-hero-section">
            <h1 className="cs-title">{project.title}</h1>
            <p className="cs-tagline">{project.tagline}</p>
            
            {project.image && (
              <div className="cs-hero-image-wrapper">
                <img src={getAssetUrl(project.image)} alt={project.title} className="cs-hero-image" />
              </div>
            )}
          </div>

          {/* High-Contrast Problem Statement Card */}
          {cs.problem && (
            <div className="cs-problem-box glass-card">
              <div className="problem-label">THE PROBLEM STATEMENT</div>
              <p className="problem-text">"{cs.problem}"</p>
            </div>
          )}

          {/* Sticky Metadata Grid */}
          <div className="cs-meta-grid">
            <div className="meta-box">
              <span className="meta-box-lbl">ROLE</span>
              <span className="meta-box-val">{cs.role || 'Full-Stack Developer'}</span>
            </div>
            <div className="meta-box">
              <span className="meta-box-lbl">TIMELINE</span>
              <span className="meta-box-val">{cs.timeline || '2024 - 2025'}</span>
            </div>
            <div className="meta-box">
              <span className="meta-box-lbl">DOMAIN</span>
              <span className="meta-box-val">{project.category}</span>
            </div>
            <div className="meta-box">
              <span className="meta-box-lbl">TECH STACK</span>
              <div className="meta-tech-list">
                {project.technologies.map((t, idx) => (
                  <span key={idx} className="mini-badge">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Editorial Chapters */}
          <div className="cs-chapters">
            {cs.challenge && (
              <section className="cs-chapter">
                <h2 className="chapter-title">01 / The Challenge</h2>
                <p className="chapter-body">{cs.challenge}</p>
              </section>
            )}

            {cs.build && (
              <section className="cs-chapter">
                <h2 className="chapter-title">02 / Technical Architecture & Build</h2>
                <p className="chapter-body">{cs.build}</p>
                {project.codeSnippet && (
                  <div className="cs-code-snippet glass-card">
                    <pre><code>{project.codeSnippet}</code></pre>
                  </div>
                )}
              </section>
            )}

            {cs.outcome && (
              <section className="cs-chapter">
                <h2 className="chapter-title">03 / Outcome & Impact</h2>
                <p className="chapter-body">{cs.outcome}</p>
              </section>
            )}

            {cs.reflection && (
              <section className="cs-chapter">
                <h2 className="chapter-title">04 / Key Learnings & Reflection</h2>
                <p className="chapter-body">{cs.reflection}</p>
              </section>
            )}

            {/* Video Preview Section */}
            {project.video && (
              <section className="cs-chapter">
                <h2 className="chapter-title">05 / Demo Video Walkthrough</h2>
                <div className="cs-video-wrapper">
                  <video src={getAssetUrl(project.video)} controls className="cs-video" />
                </div>
              </section>
            )}
          </div>

          {/* External Action Links */}
          <div className="cs-actions-row">
            {project.link && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary cs-action-btn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                <span>Visit Live Application</span>
              </a>
            )}

            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary cs-action-btn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span>GitHub Repository</span>
              </a>
            )}
          </div>

          {/* Next Project Link Footer */}
          <div className="cs-next-footer" onClick={() => onSelectNext(nextProject)}>
            <div className="next-lbl">NEXT PROJECT</div>
            <h3 className="next-title">{nextProject.title} →</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CaseStudyModal
