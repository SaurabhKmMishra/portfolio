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
      
      <footer style={{ padding: '3rem 0', textAlign: 'center', borderTop: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <a href="https://www.linkedin.com/in/skmsaurabh" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--muted)', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent)'} onMouseOut={e => e.currentTarget.style.color = 'var(--muted)'}>
            <FaLinkedin size={20} />
          </a>
          <a href="https://github.com/SaurabhKmMishra" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--muted)', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent)'} onMouseOut={e => e.currentTarget.style.color = 'var(--muted)'}>
            <FaGithub size={20} />
          </a>
          <a href="https://x.com/SaurabhMis99897" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--muted)', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent)'} onMouseOut={e => e.currentTarget.style.color = 'var(--muted)'}>
            <FaTwitter size={20} />
          </a>
          <a href="https://www.instagram.com/saurabh_mishra.96/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--muted)', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent)'} onMouseOut={e => e.currentTarget.style.color = 'var(--muted)'}>
            <FaInstagram size={20} />
          </a>
        </div>
        <p className="mono-text" style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>
          © {new Date().getFullYear()} Saurabh Kumar Mishra. Made with 💖 and passion.
        </p>
      </footer>
    </>
  )
}

export default App
