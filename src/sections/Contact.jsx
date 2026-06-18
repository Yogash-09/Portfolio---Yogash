import { motion } from 'framer-motion';
import { NeuralNoise } from '../components/ui/NeuralNoise';
import { FiMail, FiLinkedin, FiGithub, FiArrowUpRight } from 'react-icons/fi';

const contacts = [
  {
    icon: <FiMail className="text-xl" />,
    label: 'Email',
    value: 'yogasha2006@gmail.com',
    href: 'mailto:yogasha2006@gmail.com',
    gradient: 'linear-gradient(135deg, #ff2d78, #ff6b35)',
    glow: 'rgba(255,45,120,0.25)',
    border: 'rgba(255,45,120,0.3)',
    borderHover: 'rgba(255,45,120,0.7)',
  },
  {
    icon: <FiLinkedin className="text-xl" />,
    label: 'LinkedIn',
    value: 'Yogash S A',
    href: 'https://www.linkedin.com/in/yogash-s-a-a99a24336',
    gradient: 'linear-gradient(135deg, #0077b5, #00a0dc)',
    glow: 'rgba(0,119,181,0.25)',
    border: 'rgba(0,119,181,0.3)',
    borderHover: 'rgba(0,119,181,0.7)',
  },
  {
    icon: <FiGithub className="text-xl" />,
    label: 'GitHub',
    value: 'Yogash-09',
    href: 'https://github.com/Yogash-09',
    gradient: 'linear-gradient(135deg, #a855f7, #6366f1)',
    glow: 'rgba(168,85,247,0.25)',
    border: 'rgba(168,85,247,0.3)',
    borderHover: 'rgba(168,85,247,0.7)',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden" style={{ background: '#000000' }}>
      <NeuralNoise color={[1.0, 0.1, 0.1]} opacity={0.15} speed={0.0008} />

      {/* Background glow orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: 'radial-gradient(circle, #a855f7, transparent)' }} />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-15"
          style={{ background: 'radial-gradient(circle, #ff2d78, transparent)' }} />
      </div>

      <div className="relative z-20 max-w-4xl mx-auto px-6">

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold"
            style={{ background: 'rgba(0,255,100,0.08)', borderColor: 'rgba(0,255,100,0.3)', color: '#00ff64' }}>
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for opportunities
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-3">
            <span style={{
              background: 'linear-gradient(90deg, #ff2d78, #a855f7, #00fff7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Let's Build Together
            </span>
          </h2>
          <p className="text-white/50 text-base max-w-md mx-auto">
            Have a project in mind or just want to connect? Reach out through any of these channels.
          </p>
          <div className="w-16 h-0.5 mx-auto mt-4 rounded-full"
            style={{ background: 'linear-gradient(90deg, #ff2d78, #a855f7, #00fff7)' }} />
        </motion.div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-3 gap-4 mt-10">
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative flex flex-col items-center gap-4 p-6 rounded-2xl border text-center overflow-hidden transition-all duration-300"
              style={{
                background: 'rgba(10,10,10,0.9)',
                borderColor: c.border,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = c.borderHover;
                e.currentTarget.style.boxShadow = `0 0 30px ${c.glow}`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = c.border;
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: c.gradient }} />

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                style={{ background: c.gradient, boxShadow: `0 4px 15px ${c.glow}` }}>
                {c.icon}
              </div>

              {/* Text */}
              <div className="flex-1">
                <p className="font-bold text-white text-sm mb-1">{c.label}</p>
                <p className="text-white/45 text-xs break-all leading-relaxed">{c.value}</p>
              </div>

              {/* Arrow */}
              <FiArrowUpRight className="text-white/20 group-hover:text-white/70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 text-sm" />
            </motion.a>
          ))}
        </div>

        {/* Bottom tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-white/25 text-xs mt-10 tracking-widest uppercase"
        >
          Response within 24 hours · Open to freelance & full-time
        </motion.p>
      </div>
    </section>
  );
}
