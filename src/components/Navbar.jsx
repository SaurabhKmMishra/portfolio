import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '1.5rem 3rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        transition: 'all 0.3s ease',
        ...(scrolled ? {
          background: 'rgba(13, 13, 13, 0.7)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--glass-border)'
        } : {})
      }}
    >
      <motion.a 
        whileHover={{ scale: 1.05, color: 'var(--white)' }}
        whileTap={{ scale: 0.95 }}
        href="#" 
        style={{
          fontFamily: 'var(--mono)',
          fontSize: '0.9rem',
          color: 'var(--accent)',
          textDecoration: 'none',
          letterSpacing: '0.1em',
          fontWeight: '500'
        }}
      >
        SKM.
      </motion.a>
      
      <ul style={{
        display: 'flex',
        gap: '2.5rem',
        listStyle: 'none'
      }}>
        {['Skills', 'Internships', 'Certifications', 'Contact'].map((item, i) => (
          <motion.li 
            key={item}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
          >
            <motion.a 
              whileHover={{ y: -2, color: 'var(--accent)' }}
              href={`#${item.toLowerCase()}`}
              style={{
                display: 'block',
                fontFamily: 'var(--mono)',
                fontSize: '0.8rem',
                color: 'var(--text)',
                textDecoration: 'none',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                transition: 'color 0.2s ease'
              }}
            >
              {item}
            </motion.a>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
