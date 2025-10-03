import { useState } from 'react'
import './Projects.css'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const projects = {
    chatbots: [
      {
        id: 1,
        title: 'CrediBot',
        description: 'Credibot is your personal finance WhatsApp chatbot. He\'s your go-to guy for navigating loans and understanding financial policies.',
        image: '/src/assets/whatsapp-chatbot.webp',
        video: '/src/assets/CrediBot.mp4',
        technologies: ['Node.js', 'WhatsApp Web JS', 'OpenAI API']
      },
      {
        id: 2,
        title: 'AllyBot',
        description: 'Meet AllyBot, your WhatsApp chatbot ally in the IT workspace. She\'s here to empower women in tech.',
        image: '/src/assets/shutterstock_1180950625.jpg',
        video: '/src/assets/AllyBot.mp4',
        technologies: ['Node.js', 'WhatsApp Web JS', 'OpenAI API']
      },
      {
        id: 3,
        title: 'ReproBot',
        description: 'Meet ReproBot, your WhatsApp ally for Sexual Reproductive Health and Rights education.',
        image: '/src/assets/chatbot-app.jpg',
        video: '/src/assets/ReproBot.mp4',
        technologies: ['Node.js', 'WhatsApp Web JS', 'OpenAI API']
      }
    ],
    react: [
      {
        id: 4,
        title: 'Weather App',
        description: 'React-based application providing real-time weather information with a clean interface.',
        image: '/src/assets/Colorful_3d_Weather_Forecast.png',
        link: 'https://nono140503.github.io/WeatherApp/',
        technologies: ['React', 'JavaScript', 'OpenWeather API', 'CSS3']
      }
    ],
    mobile: [
      {
        id: 5,
        title: 'SafeHer',
        description: 'Cutting-edge mobile application designed to enhance women\'s safety through advanced technology.',
        image: '/src/assets/SafeHer-Logo.jpg',
        video: '/src/assets/SafeHer.mp4',
        technologies: ['React Native', 'Firebase', 'Geolocation']
      }
    ],
     ml: [
      {
        id: 6,
        title: 'Maternal Health Risk Machine Learning Model',
        description: 'Built a Random Forest model that predicts maternal health risk levels with 81% accuracy using clinical data.',
        image: '/src/assets/Maternity.png',
        link: 'https://colab.research.google.com/drive/1J6eP8YmSDnQNefUJ-s0rb3i34ARnMBgU?usp=sharing',
        technologies: ['Python', 'Pandas', 'Seaborn', 'Matplotlib', 'Scikit-learn']
      }
    ],
  }

  const filters = [
    { id: 'all', name: 'All Projects', icon: 'fas fa-rocket' },
    { id: 'chatbots', name: 'Chatbots', icon: 'fas fa-robot' },
    { id: 'react', name: 'React Apps', icon: 'fab fa-react' },
    { id: 'mobile', name: 'Mobile Apps', icon: 'fas fa-mobile-alt' },
    { id: 'ml', name: 'Machine Learning', icon: 'fas fa-brain' }
  ]

  const getFilteredProjects = () => {
    if (activeFilter === 'all') {
      return [...projects.chatbots, ...projects.react, ...projects.mobile, ...projects.ml]
    }
    return projects[activeFilter] || []
  }

  const handleProjectClick = (project) => {
    if (project.link) {
      window.open(project.link, '_blank')
    } else if (project.video) {
      setSelectedVideo(project.video)
      setIsModalOpen(true)
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedVideo(null)
  }

  return (
    <div className="projects-page">
      <div className="projects-hero">
        <div className="container">
          <h1 className="projects-title">My Projects</h1>
          <p className="projects-subtitle">
            Explore my journey through different technologies and domains
          </p>
        </div>
      </div>

      <div className="projects-content">
        <div className="container">
          <div className="filter-tabs">
            {filters.map((filter) => (
              <button
                key={filter.id}
                className={`filter-tab ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                <i className={filter.icon}></i>
                {filter.name}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {getFilteredProjects().map((project) => (
              <div 
                key={project.id} 
                className="project-card"
                onClick={() => handleProjectClick(project)}
                style={{ cursor: 'pointer' }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <p className="project-text">{project.description}</p>
                    <div className="project-tooltip">
                      {project.video ? 'Click to view video' : project.link ? 'Click to visit website' : 'Coming Soon'}
                    </div>
                  </div>
                </div>
                
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {getFilteredProjects().length === 0 && (
            <div className="no-projects">
              <p>No projects found in this category.</p>
            </div>
          )}
        </div>
      </div>

      {isModalOpen && (
        <div className="video-modal" onClick={closeModal}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <video 
              src={selectedVideo} 
              controls 
              autoPlay
              width="600"
              height="400"
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Projects