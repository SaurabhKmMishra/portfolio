import { useSelector } from 'react-redux';
import { Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const { email, phone } = useSelector(state => state.portfolio.personalInfo);

  return (
    <section id="contact">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-num">04 //</span>
          <h2 className="section-title">Get in Touch</h2>
          <div className="section-line" />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {/* Email Card */}
          <motion.a 
            href={`mailto:${email}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5, borderColor: 'var(--accent)', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}
            className="glass-panel"
            style={{ 
              padding: '3rem', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              justifyContent: 'center',
              textDecoration: 'none',
              color: 'var(--text)',
              textAlign: 'center'
            }}
          >
            <div style={{ 
              width: '60px', height: '60px', borderRadius: '50%', 
              background: 'var(--accent-dim)', color: 'var(--accent)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: '1.5rem'
            }}>
              <Mail size={28} />
            </div>
            <div className="mono-text" style={{ fontSize: '0.8rem', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              Drop an Email
            </div>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--white)' }}>{email}</h3>
          </motion.a>

          {/* Phone Card */}
          <motion.a 
            href={`tel:${phone}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            whileHover={{ y: -5, borderColor: 'var(--accent)', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}
            className="glass-panel"
            style={{ 
              padding: '3rem', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              justifyContent: 'center',
              textDecoration: 'none',
              color: 'var(--text)',
              textAlign: 'center'
            }}
          >
            <div style={{ 
              width: '60px', height: '60px', borderRadius: '50%', 
              background: 'var(--accent-dim)', color: 'var(--accent)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: '1.5rem'
            }}>
              <Phone size={28} />
            </div>
            <div className="mono-text" style={{ fontSize: '0.8rem', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              Give a Call
            </div>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--white)' }}>{phone}</h3>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
