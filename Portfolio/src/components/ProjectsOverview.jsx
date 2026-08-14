import { useState } from 'react'
import { Link } from 'react-router-dom'
import { projectsData, getAssetUrl } from '../utils/projectData'
import './ProjectsOverview.css'

const ProjectsOverview = ({ onOpenCaseStudy, onOpenVideo }) => {
  const featuredProjects = projectsData.filter(p => p.featured)
  const remainingProjects = projectsData.filter(p => !p.featured).slice(0, 4)

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center animate-fadeInUp">
          <div className="section-label">
            <span>01 // SELECTED WORK</span>
          </div>
          <h2 className="section-title">
            Featured Projects & <span className="text-gradient">Case Studies</span>
          </h2>
          <p className="section-subtitle">
            Explore micro-enterprise web engines, clinical machine learning predictors, emergency mobile safety tools, and WhatsApp AI bots.
          </p>
        </div>

        {/* Bento Grid Container */}
        <div className="bento-grid">
          {featuredProjects.map((project) => (
            <div 
              key={project.id} 
              className={`bento-card glass-card bento-${project.bentoSize}`}
            >
              {/* Media Header / Image */}
              <div className="bento-card-bg">
                <img 
                  src={getAssetUrl(project.image)} 
                  alt={project.title} 
                  loading="lazy" 
                />
                <div className="bento-card-overlay"></div>

                {project.video && (
                  <button 
                    className="video-play-badge" 
                    onClick={() => onOpenVideo(getAssetUrl(project.video))}
                    title="Play Video Demo"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="5 3 19 12 5 21 5 3"/>
                    </svg>
                    <span>Play Demo</span>
                  </button>
                )}
              </div>

              <div className="bento-content">
                <div className="bento-top">
                  <span className="card-number">{project.number}</span>
                  <span className="category-tag">{project.category}</span>
                </div>

                <div className="bento-main">
                  <h3 className="bento-title">{project.title}</h3>
                  <p className="bento-tagline">{project.tagline}</p>
                  <p className="bento-description">{project.description}</p>
                  
                  {project.metrics && (
                    <div className="bento-metrics">
                      {project.metrics.map((m, idx) => (
                        <div key={idx} className="metric-pill">
                          <span className="metric-val">{m.value}</span>
                          <span className="metric-lbl">{m.label}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="bento-tech-stack">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="bento-actions">
                  {project.caseStudy && (
                    <button 
                      className="btn btn-secondary btn-sm"
                      onClick={() => onOpenCaseStudy(project)}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                        <polyline points="14 2 14 8 20 8"/>
                      </svg>
                      Read Case Study
                    </button>
                  )}

                  {project.video ? (
                    <button 
                      className="btn btn-primary btn-sm"
                      onClick={() => onOpenVideo(getAssetUrl(project.video))}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="5 3 19 12 5 21 5 3"/>
                      </svg>
                      Watch Demo
                    </button>
                  ) : project.link ? (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-primary btn-sm"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                      {project.category.includes('Machine Learning') ? 'Open Notebook' : 'Visit Live'}
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary Supporting Projects Grid */}
        <div className="secondary-projects-heading">
          <h3>More AI & Automation Solutions</h3>
        </div>

        <div className="compact-grid">
          {remainingProjects.map((project) => (
            <div key={project.id} className="compact-card glass-card">
              <div className="compact-media">
                <img src={getAssetUrl(project.image)} alt={project.title} loading="lazy" />
                {project.video && (
                  <button 
                    className="compact-play-overlay"
                    onClick={() => onOpenVideo(getAssetUrl(project.video))}
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="5 3 19 12 5 21 5 3"/>
                    </svg>
                  </button>
                )}
              </div>

              <div className="compact-content">
                <div className="compact-header">
                  <span className="card-number-sm">{project.number}</span>
                  <span className="category-tag-sm">{project.category}</span>
                </div>
                <h4 className="compact-title">{project.title}</h4>
                <p className="compact-desc">{project.description}</p>

                <div className="compact-tech">
                  {project.technologies.slice(0, 3).map((t, idx) => (
                    <span key={idx} className="tech-badge-sm">{t}</span>
                  ))}
                </div>

                <div className="compact-actions">
                  {project.video && (
                    <button 
                      className="link-btn"
                      onClick={() => onOpenVideo(getAssetUrl(project.video))}
                    >
                      <span>Play Video</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="5 3 19 12 5 21 5 3"/>
                      </svg>
                    </button>
                  )}
                  {project.caseStudy && (
                    <button 
                      className="link-btn"
                      onClick={() => onOpenCaseStudy(project)}
                    >
                      <span>View Story →</span>
                    </button>
                  )}
                  {project.link && !project.video && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-btn"
                    >
                      <span>Visit Site →</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* All Projects Navigation Bar */}
        <div className="projects-cta-footer animate-fadeInUp">
          <Link to="/projects" className="btn btn-primary btn-lg">
            <span>Explore All {projectsData.length} Projects in Archive</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProjectsOverview