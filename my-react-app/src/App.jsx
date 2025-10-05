import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProjectsOverview from './components/ProjectsOverview'
import Footer from './components/Footer'
import Projects from './pages/Projects'
import ScrollToTop from './components/ScrollToTop'
import MobileWarning from './components/MobileWarning'
import './App.css'

function App() {
  return (
    // Use Vite's BASE_URL so the router works when the app is served from a subpath
    // (for example: https://username.github.io/Nombali-Mafa-Portfolio/)
    <Router basename={import.meta.env.BASE_URL}>
      <div className="App">
        <MobileWarning />
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <ProjectsOverview />
            </>
          } />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App