import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = useSelector(state => state.portfolio.skills);

  return (
    <section id="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-num">01 //</span>
          <h2 className="section-title">Technical Expertise</h2>
          <div className="section-line" />
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.5rem',
        }}>
          {skills.map((skillGroup, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              key={idx}
              className="glass-panel"
              style={{ padding: '2rem' }}
            >
              <h3 className="mono-text" style={{
                fontSize: '0.8rem',
                background: 'var(--gradient)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '1.5rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                fontWeight: 500,
              }}>
                {skillGroup.category}
              </h3>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {skillGroup.items.map((item, i) => (
                  <motion.li
                    whileHover={{ x: 4, color: 'var(--white)' }}
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      color: 'var(--text)',
                      fontSize: '0.9rem',
                      cursor: 'default',
                      transition: 'color 0.2s',
                    }}
                  >
                    <span style={{
                      width: '5px',
                      height: '5px',
                      background: 'var(--accent)',
                      borderRadius: '50%',
                      display: 'inline-block',
                      flexShrink: 0,
                      boxShadow: '0 0 6px var(--accent-glow)',
                    }} />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
