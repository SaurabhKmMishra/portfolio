import { useSelector } from 'react-redux';
import { ArrowRight, Download } from 'lucide-react';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero = () => {
  const { name, role, tagline, bio } = useSelector(state => state.portfolio.personalInfo);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="home" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      paddingTop: '6rem',
      position: 'relative'
    }}>
      <div className="container" style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        textAlign: 'center' 
      }}>
        
        {/* Central Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ 
            zIndex: 2, 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center' 
          }}
        >
          <motion.div variants={itemVariants} className="mono-text accent-text" style={{ fontSize: '0.9rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            {tagline}
          </motion.div>
          
          <motion.h1 variants={itemVariants} style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', lineHeight: 1.1, marginBottom: '1rem' }}>
            Hi, I'm <br />
            <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>{name.split(' ')[0]}</span>
          </motion.h1>
          
          <motion.h2 variants={itemVariants} className="mono-text" style={{ fontSize: '1.2rem', color: 'var(--muted)', marginBottom: '2rem', fontWeight: 400 }}>
            {role}
          </motion.h2>
          
          <motion.p variants={itemVariants} style={{ fontSize: '1.05rem', color: 'var(--muted)', maxWidth: '600px', marginBottom: '3rem' }}>
            {bio}
          </motion.p>
          
          <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '2rem' }}>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#internships" 
              className="btn btn-primary"
            >
              View Work <ArrowRight size={18} />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#" 
              className="btn btn-outline"
            >
              Resume <Download size={18} />
            </motion.a>
          </motion.div>

          <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
            <motion.a whileHover={{ y: -3, color: 'var(--accent)' }} href="https://www.linkedin.com/in/skmsaurabh" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--muted)', transition: 'color 0.2s' }}>
              <FaLinkedin size={22} />
            </motion.a>
            <motion.a whileHover={{ y: -3, color: 'var(--accent)' }} href="https://github.com/SaurabhKmMishra" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--muted)', transition: 'color 0.2s' }}>
              <FaGithub size={22} />
            </motion.a>
            <motion.a whileHover={{ y: -3, color: 'var(--accent)' }} href="https://x.com/SaurabhMis99897" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--muted)', transition: 'color 0.2s' }}>
              <FaTwitter size={22} />
            </motion.a>
            <motion.a whileHover={{ y: -3, color: 'var(--accent)' }} href="https://www.instagram.com/saurabh_mishra.96/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--muted)', transition: 'color 0.2s' }}>
              <FaInstagram size={22} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Decorative background blur blob centralized */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 0, pointerEvents: 'none' }}
        >
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              width: '400px',
              height: '400px',
              background: 'var(--accent)',
              filter: 'blur(150px)',
              borderRadius: '50%',
            }} 
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
