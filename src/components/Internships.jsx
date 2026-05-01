import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

const Internships = () => {
  const experience = useSelector(state => state.portfolio.experience);

  return (
    <section id="internships">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-num">02 //</span>
          <h2 className="section-title">Internships</h2>
          <div className="section-line" />
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {experience.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="glass-panel"
              style={{
                padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                borderLeft: '3px solid var(--accent)',
                borderImage: 'var(--gradient) 1',
              }}
            >
              <div>
                <div className="mono-text" style={{
                  fontSize: '0.78rem',
                  background: 'var(--gradient)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: '0.5rem',
                  fontWeight: 500,
                }}>
                  {exp.period}
                </div>
                <h3 style={{
                  fontSize: 'clamp(1.15rem, 2.5vw, 1.4rem)',
                  color: 'var(--white)',
                  marginBottom: '0.4rem',
                }}>
                  {exp.role}
                </h3>
                <div className="mono-text" style={{
                  fontSize: '0.82rem',
                  color: 'var(--muted)',
                }}>
                  {exp.company} • {exp.location}
                </div>
              </div>

              <p style={{
                color: 'var(--muted)',
                fontSize: '0.9rem',
                lineHeight: 1.75,
              }}>
                {exp.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {exp.tags.map((tag, i) => (
                  <span key={i} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;
