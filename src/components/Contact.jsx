import { useSelector } from 'react-redux';
import { Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const { email, phone } = useSelector(state => state.portfolio.personalInfo);

  const cards = [
    {
      icon: Mail,
      label: 'Drop an Email',
      value: email,
      href: `mailto:${email}`,
      target: '_blank',
    },
    {
      icon: Phone,
      label: 'Give a Call',
      value: phone,
      href: `tel:${phone}`,
    },
  ];

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

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: '1.5rem',
        }}>
          {cards.map(({ icon: Icon, label, value, href, target }, idx) => (
            <motion.a
              key={idx}
              href={href}
              target={target}
              rel={target ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="glass-panel"
              style={{
                padding: 'clamp(2rem, 4vw, 3rem)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                color: 'var(--text)',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: 'var(--accent-dim)',
                border: '1px solid rgba(129,140,248,0.12)',
                color: 'var(--accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
              }}>
                <Icon size={24} />
              </div>
              <div className="mono-text" style={{
                fontSize: '0.72rem',
                color: 'var(--muted)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: '0.5rem',
              }}>
                {label}
              </div>
              <h3 style={{
                fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
                color: 'var(--white)',
                wordBreak: 'break-all',
              }}>
                {value}
              </h3>

              {/* Corner glow */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '120px',
                height: '120px',
                background: 'radial-gradient(circle at bottom left, rgba(167,139,250,0.06), transparent 70%)',
                pointerEvents: 'none',
              }} />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
