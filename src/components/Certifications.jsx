import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = useSelector(state => state.portfolio.certifications);

  return (
    <section id="certifications">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-num">03 //</span>
          <h2 className="section-title">Certifications</h2>
          <div className="section-line" />
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {certifications.map((cert, idx) => (
            <motion.div 
              key={cert.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ 
                y: -8, 
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                borderColor: 'var(--accent)'
              }}
              className="glass-panel" 
              style={{ padding: '2.5rem', position: 'relative', overflow: 'hidden' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <div style={{ 
                  width: '45px', 
                  height: '45px', 
                  borderRadius: '12px', 
                  background: 'var(--accent-dim)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: 'var(--accent)'
                }}>
                  <Award size={24} />
                </div>
                <div className="mono-text" style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>
                  {cert.date}
                </div>
              </div>
              
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: 'var(--white)' }}>{cert.name}</h3>
              <div className="mono-text" style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>
                {cert.issuer}
              </div>
              
              {cert.credentialId && (
                <div className="mono-text" style={{ fontSize: '0.75rem', color: 'var(--muted)', marginBottom: '1rem', wordBreak: 'break-all' }}>
                  Credential ID: {cert.credentialId}
                </div>
              )}

              {cert.skills && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {cert.skills.map((skill, i) => (
                    <span key={i} className="mono-text" style={{ 
                      fontSize: '0.7rem', 
                      padding: '0.3rem 0.6rem', 
                      background: 'var(--glass-border)',
                      borderRadius: '4px',
                      color: 'var(--text)'
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>
              )}
              
              <motion.a 
                whileHover={{ x: 5, color: 'var(--white)' }}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--accent)',
                  textDecoration: 'none',
                  fontFamily: 'var(--mono)',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  marginTop: 'auto',
                  padding: 0
                }}
              >
                Show Credential <ExternalLink size={16} />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
