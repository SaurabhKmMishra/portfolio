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
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem'
        }}>
          {skills.map((skillGroup, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -5, borderColor: 'rgba(255, 255, 255, 0.2)' }}
              key={idx} 
              className="glass-panel" 
              style={{ padding: '2rem' }}
            >
              <h3 className="mono-text" style={{ 
                fontSize: '0.9rem', 
                color: 'var(--accent)', 
                marginBottom: '1.5rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}>
                {skillGroup.category}
              </h3>
              
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {skillGroup.items.map((item, i) => (
                  <motion.li 
                    whileHover={{ x: 5, color: 'var(--white)' }}
                    key={i} 
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '1rem',
                      color: 'var(--text)',
                      cursor: 'default',
                      transition: 'color 0.2s'
                    }}
                  >
                    <span style={{ 
                      width: '6px', 
                      height: '6px', 
                      background: 'var(--accent)', 
                      borderRadius: '50%',
                      display: 'inline-block'
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
