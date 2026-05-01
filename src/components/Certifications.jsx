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
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: '1.5rem',
        }}>
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel"
              style={{
                padding: 'clamp(1.5rem, 3vw, 2.25rem)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Top row: icon + date */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '1.25rem',
              }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'var(--accent-dim)',
                  border: '1px solid rgba(129,140,248,0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent)',
                }}>
                  <Award size={20} />
                </div>
                <div className="mono-text" style={{
                  fontSize: '0.72rem',
                  color: 'var(--muted)',
                  letterSpacing: '0.04em',
                }}>
                  {cert.date}
                </div>
              </div>

              {/* Name & issuer */}
              <h3 style={{
                fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
                marginBottom: '0.4rem',
                color: 'var(--white)',
                lineHeight: 1.3,
              }}>
                {cert.name}
              </h3>
              <div className="mono-text" style={{
                fontSize: '0.78rem',
                color: 'var(--muted)',
                marginBottom: '1rem',
              }}>
                {cert.issuer}
              </div>

              {/* Credential ID */}
              {cert.credentialId && (
                <div className="mono-text" style={{
                  fontSize: '0.68rem',
                  color: 'var(--muted)',
                  marginBottom: '0.75rem',
                  wordBreak: 'break-all',
                  opacity: 0.7,
                }}>
                  ID: {cert.credentialId}
                </div>
              )}

              {/* Skill tags */}
              {cert.skills && (
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.4rem',
                  marginBottom: '1.25rem',
                }}>
                  {cert.skills.map((skill, i) => (
                    <span key={i} className="tag">
                      {skill}
                    </span>
                  ))}
                </div>
              )}

              {/* Link */}
              <motion.a
                whileHover={{ x: 4 }}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: 'var(--accent)',
                  textDecoration: 'none',
                  fontFamily: 'var(--sans)',
                  fontSize: '0.82rem',
                  fontWeight: 500,
                  marginTop: 'auto',
                  paddingTop: '0.5rem',
                  transition: 'opacity 0.2s',
                }}
              >
                Show Credential <ExternalLink size={14} />
              </motion.a>

              {/* Subtle corner gradient decoration */}
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '100px',
                height: '100px',
                background: 'radial-gradient(circle at top right, rgba(129,140,248,0.06), transparent 70%)',
                pointerEvents: 'none',
              }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
