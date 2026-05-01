import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

const Internships = () => {
  const experience = useSelector(state => state.portfolio.experience);

  return (
    <section id="internships" style={{ background: 'var(--surface)' }}>
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

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {experience.map((exp, idx) => (
            <motion.div 
              key={exp.id} 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ x: 10 }}
              className="glass-panel" 
              style={{ 
                padding: '3rem',
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '1.5rem',
                borderLeft: '4px solid var(--accent)'
              }}
            >
              <div>
                <div className="mono-text" style={{ color: 'var(--accent)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                  {exp.period}
                </div>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--white)', marginBottom: '0.5rem' }}>
                  {exp.role}
                </h3>
                <div className="mono-text" style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>
                  {exp.company} • {exp.location}
                </div>
              </div>
              
              <div>
                <p style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>
                  {exp.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {exp.tags.map((tag, i) => (
                    <span key={i} className="mono-text" style={{ 
                      fontSize: '0.7rem', 
                      padding: '0.3rem 0.6rem', 
                      border: '1px solid var(--glass-border)',
                      borderRadius: '4px',
                      color: 'var(--text)'
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;
