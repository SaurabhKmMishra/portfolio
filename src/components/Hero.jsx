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
      transition: { staggerChildren: 0.12, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '5rem',
      position: 'relative',
    }}>
      <div className="container" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: '680px',
          }}
        >
          <motion.div
            variants={itemVariants}
            className="mono-text"
            style={{
              fontSize: '0.8rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
              background: 'var(--gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: 500,
            }}
          >
            {tagline}
          </motion.div>

          <motion.h1 variants={itemVariants} style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            lineHeight: 1.1,
            marginBottom: '1rem',
            letterSpacing: '-0.03em',
          }}>
            Hi, I'm{' '}
            <span style={{
              fontFamily: 'var(--serif)',
              fontStyle: 'italic',
              background: 'var(--gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>{name.split(' ')[0]}</span>
          </motion.h1>

          <motion.h2 variants={itemVariants} style={{
            fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
            color: 'var(--muted)',
            marginBottom: '1.5rem',
            fontWeight: 400,
            fontFamily: 'var(--mono)',
            letterSpacing: '0.04em',
          }}>
            {role}
          </motion.h2>

          <motion.p variants={itemVariants} style={{
            fontSize: 'clamp(0.9rem, 1.5vw, 1rem)',
            color: 'var(--muted)',
            maxWidth: '520px',
            marginBottom: '2.5rem',
            lineHeight: 1.8,
          }}>
            {bio}
          </motion.p>

          <motion.div variants={itemVariants} className="hero-buttons" style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            marginBottom: '2.5rem',
            flexWrap: 'wrap',
          }}>
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="#internships"
              className="btn btn-primary"
            >
              View Work <ArrowRight size={16} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="https://drive.google.com/file/d/1dI7KElh9Pc-ZYYyVjinc0E8FzGq_TEAP/view?usp=sharing"
              className="btn btn-outline"
            >
              Resume <Download size={16} />
            </motion.a>
          </motion.div>

          <motion.div variants={itemVariants} style={{
            display: 'flex',
            gap: '1.25rem',
            justifyContent: 'center',
          }}>
            {[
              { icon: FaLinkedin, href: 'https://www.linkedin.com/in/skmsaurabh' },
              { icon: FaGithub, href: 'https://github.com/SaurabhKmMishra' },
              { icon: FaTwitter, href: 'https://x.com/SaurabhMis99897' },
              { icon: FaInstagram, href: 'https://www.instagram.com/saurabh_mishra.96/' },
            ].map(({ icon: Icon, href }, i) => (
              <motion.a
                key={i}
                whileHover={{ y: -3, color: 'var(--accent)' }}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--muted)', transition: 'color 0.2s' }}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Background glow orbs */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.12, 0.2, 0.12],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              top: '30%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 'min(450px, 80vw)',
              height: 'min(450px, 80vw)',
              background: 'radial-gradient(circle, rgba(129,140,248,0.15) 0%, rgba(167,139,250,0.08) 40%, transparent 70%)',
              borderRadius: '50%',
              filter: 'blur(60px)',
            }}
          />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.06, 0.1, 0.06],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            style={{
              position: 'absolute',
              bottom: '10%',
              right: '15%',
              width: 'min(250px, 40vw)',
              height: 'min(250px, 40vw)',
              background: 'radial-gradient(circle, rgba(192,132,252,0.15) 0%, transparent 70%)',
              borderRadius: '50%',
              filter: 'blur(50px)',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
