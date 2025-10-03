import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './ProjectsOverview.css'

const ProjectsOverview = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('projects')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const projects = [
    {
      id: 1,
      title: 'WhatsApp Chatbots',
      description: 'AI-powered chatbots for finance, women empowerment, and health education. Built with Node.js to provide secure, informative conversations.',
      icon: '/bot.jpg',
      count: '3 Projects',
      technologies: ['Node.js', 'WhatsApp Web JS', 'OpenAI API']
    },
    {
      id: 2,
      title: 'Websites',
      description: 'Modern, responsive web applications featuring interactive user experiences and clean designs built with the latest web technologies.',
      icon: '/web-design.png',
      count: 'Coming Soon',
      technologies: ['React', 'HTML5', 'CSS3', 'JavaScript']
    },
    {
      id: 3,
      title: 'Mobile Apps',
      description: 'Cross-platform mobile applications focused on safety and empowerment, including SafeHer - a comprehensive safety app for women.',
      icon: '/benefits-of-mobile-app-for-business.webp',
      count: '1 Project',
      technologies: ['React Native', 'Firebase', 'JavaScript']
    },
    {
      id: 4,
      title: 'Machine Learning',
      description: 'Data science and machine learning projects using Python, TensorFlow, and scikit-learn. Exploring predictive models and data analysis.',
      icon: '/ML.jpg',
      count: 'Coming Soon',
      technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'Pandas', 'Matplotlib']
    }
  ]

  return (
    <section id="projects" className="projects-overview section">
      <div className="projects-content">
        <h2 className={`section-title ${isVisible ? 'animate-fadeInUp' : ''}`}>
          Projects Overview
        </h2>
        
        <p className={`projects-intro ${isVisible ? 'animate-fadeInUp' : ''}`}>
          I specialize in creating innovative solutions across different platforms. 
          From intelligent chatbots to mobile applications, here's a glimpse of my work.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`project-card ${isVisible ? 'animate-fadeInUp' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="card-header">

                  <img src={project.icon} alt={project.title} width={"100%"} height={180} objectFit="cover"/>


              </div>
              <div className="card-badge">
                  {project.count}
                </div>
              <div className="card-content">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-description">{project.description}</p>
                
                <div className="card-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              

            </div>
          ))}
        </div>

        <div className={`view-more-container ${isVisible ? 'animate-fadeInUp' : ''}`}>
          <Link to="/projects" className="btn btn-primary view-more-btn">
            View All Projects
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProjectsOverview