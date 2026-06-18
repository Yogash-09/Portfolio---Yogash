import { motion } from 'framer-motion';

export default function SectionTitle({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      <p className="text-white/50 text-lg max-w-2xl mx-auto">
        {subtitle}
      </p>
      <div className="flex justify-center mt-4">
        <div className="w-16 h-1 rounded-full" style={{ background: 'linear-gradient(90deg, #ff2d78, #a855f7, #00fff7)' }}></div>
      </div>
    </motion.div>
  );
}
