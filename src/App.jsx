import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Internships from './components/Internships'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Internships />
        <Certifications />
        <Contact />
      </main>

      <footer className="footer">
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/skmsaurabh" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={18} />
          </a>
          <a href="https://github.com/SaurabhKmMishra" target="_blank" rel="noopener noreferrer">
            <FaGithub size={18} />
          </a>
          <a href="https://x.com/SaurabhMis99897" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={18} />
          </a>
          <a href="https://www.instagram.com/saurabh_mishra.96/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={18} />
          </a>
        </div>
        <p className="mono-text" style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>
          © {new Date().getFullYear()} Saurabh Kumar Mishra. Made with 💖 and passion.
        </p>
      </footer>
    </>
  )
}

export default App
