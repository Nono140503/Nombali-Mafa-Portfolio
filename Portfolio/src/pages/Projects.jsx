import { useState } from 'react'
import { projectsData, getAssetUrl } from '../utils/projectData'
import CaseStudyModal from '../components/CaseStudyModal'
import './Projects.css'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null)

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'featured', name: 'Featured' },
    { id: 'chatbots', name: 'WhatsApp AI' },
    { id: 'web', name: 'Web Apps' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'machine learning', name: 'Machine Learning' }
  ]

  const getFilteredProjects = () => {
    if (activeFilter === 'all') return projectsData
    if (activeFilter === 'featured') return projectsData.filter(p => p.featured)
    return projectsData.filter(p => 
      p.category.toLowerCase().includes(activeFilter.toLowerCase())
    )
  }

  const handleProjectClick = (project) => {
    if (project.caseStudy) {
      setSelectedCaseStudy(project)
    } else if (project.video) {
      setSelectedVideo(getAssetUrl(project.video))
    } else if (project.link) {
      window.open(project.link, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <div className="projects-page">
      {/* Header Banner */}
      <div className="projects-hero">
        <div className="container">
          <div className="section-label">
            <span>PROJECT ARCHIVE</span>
          </div>
          <h1 className="projects-title">
            All <span className="text-gradient">Projects & Works</span>
          </h1>
          <p className="projects-subtitle">
            Explore the complete collection of web applications, AI chatbots, mobile systems, and machine learning models.
          </p>
        </div>
      </div>

      <div className="projects-content">
        <div className="container">
          {/* Category Filter Pills */}
          <div className="filter-tabs">
            {filters.map((filter) => (
              <button
                key={filter.id}
                className={`filter-tab ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.name}
              </button>
            ))}
          </div>

          {/* Grid Layout */}
          <div className="archive-grid">
            {getFilteredProjects().map((project) => (
              <div 
                key={project.id} 
                className="archive-card glass-card"
                onClick={() => handleProjectClick(project)}
              >
                <div className="archive-card-media">
                  <img src={getAssetUrl(project.image)} alt={project.title} loading="lazy" />
                  <div className="media-overlay">
                    <span className="overlay-btn">
                      {project.caseStudy ? 'Read Case Study' : project.video ? 'Play Demo Video' : 'View Link'}
                    </span>
                  </div>
                  <span className="archive-number">{project.number}</span>

                  {project.video && (
                    <div className="media-play-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="5 3 19 12 5 21 5 3"/>
                      </svg>
                    </div>
                  )}
                </div>

                <div className="archive-card-info">
                  <span className="archive-cat">{project.category}</span>
                  <h3 className="archive-title">{project.title}</h3>
                  <p className="archive-desc">{project.description}</p>
                  
                  <div className="archive-tech-list">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-badge">{tech}</span>
                    ))}
                  </div>

                  <div className="archive-card-actions">
                    {project.caseStudy && (
                      <button 
                        className="btn btn-secondary btn-sm"
                        onClick={(e) => { e.stopPropagation(); setSelectedCaseStudy(project); }}
                      >
                        Case Study
                      </button>
                    )}
                    {project.video && (
                      <button 
                        className="btn btn-primary btn-sm"
                        onClick={(e) => { e.stopPropagation(); setSelectedVideo(getAssetUrl(project.video)); }}
                      >
                        Demo Video
                      </button>
                    )}
                    {project.link && !project.video && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-secondary btn-sm"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Visit Link
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {getFilteredProjects().length === 0 && (
            <div className="no-projects glass-card">
              <p>No projects found matching the selected category.</p>
            </div>
          )}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="video-modal-overlay" onClick={() => setSelectedVideo(null)}>
          <div className="video-modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="close-video-btn" onClick={() => setSelectedVideo(null)}>✕</button>
            <video src={selectedVideo} controls autoPlay className="modal-video" />
          </div>
        </div>
      )}

      {/* Case Study Modal */}
      {selectedCaseStudy && (
        <CaseStudyModal 
          project={selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
          onSelectNext={(nextP) => setSelectedCaseStudy(nextP)}
        />
      )}
    </div>
  )
}

export default Projects