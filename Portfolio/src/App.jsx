import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import ProjectsOverview from './components/ProjectsOverview'
import CommunityRecognition from './components/CommunityRecognition'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Projects from './pages/Projects'
import ScrollToTop from './components/ScrollToTop'
import MobileWarning from './components/MobileWarning'
import CaseStudyModal from './components/CaseStudyModal'
import './App.css'

function App() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null)
  const [selectedVideo, setSelectedVideo] = useState(null)

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="App">
        <MobileWarning />
        <ScrollToTop />
        <Navbar />
        
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <ProjectsOverview 
                onOpenCaseStudy={(project) => setSelectedCaseStudy(project)}
                onOpenVideo={(videoUrl) => setSelectedVideo(videoUrl)}
              />
              <CommunityRecognition />
              <Contact />
            </>
          } />
          <Route path="/projects" element={<Projects />} />
        </Routes>

        <Footer />

        {/* Global Video Modal */}
        {selectedVideo && (
          <div className="video-modal-overlay" onClick={() => setSelectedVideo(null)}>
            <div className="video-modal-container" onClick={(e) => e.stopPropagation()}>
              <button className="close-video-btn" onClick={() => setSelectedVideo(null)}>✕</button>
              <video src={selectedVideo} controls autoPlay className="modal-video" />
            </div>
          </div>
        )}

        {/* Global Case Study Modal */}
        {selectedCaseStudy && (
          <CaseStudyModal 
            project={selectedCaseStudy}
            onClose={() => setSelectedCaseStudy(null)}
            onSelectNext={(nextProject) => setSelectedCaseStudy(nextProject)}
          />
        )}
      </div>
    </Router>
  )
}

export default App