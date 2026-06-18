import React from 'react'
import { motion } from 'framer-motion'
import { NeuralNoise } from '../components/ui/NeuralNoise'
import ScrollReveal from '../components/ScrollReveal'

export default function Achievements() {
  const achievements = [
    {
      icon: '🏆',
      title: 'Global Game Jam',
      description: 'Developed a complete game in 48 hours with physics and gameplay mechanics.',
      date: '2024',
      type: 'Hackathon'
    },
    {
      icon: '🚀',
      title: 'Qubitron Hackathon',
      description: 'Built a quantum computing visualization tool. Finalist in innovation category.',
      date: '2024',
      type: 'Hackathon'
    },
    {
      icon: '⚡',
      title: 'Full-Stack Web Development',
      description: 'Mastered MERN stack with advanced patterns and best practices.',
      date: '2024',
      type: 'Certification'
    },
    
    
  ]

  const typeColors = {
    'Hackathon': 'text-pink-300 bg-pink-500/20 border-pink-500/50',
    'Certification': 'text-purple-300 bg-purple-500/20 border-purple-500/50',
    'Project': 'text-cyan-300 bg-cyan-500/20 border-cyan-500/50'
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="min-h-screen py-20 relative overflow-hidden flex items-center" style={{ background: '#000000' }}>
      {/* Neural Noise Background Effect - Red */}
      <NeuralNoise color={[1.0, 0.1, 0.1]} opacity={0.2} speed={0.0008} />
      
      {/* Animated vibrant background orbs */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-full blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-red-500/20 to-red-600/20 rounded-full blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Achievements & Highlights</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full"></div>
            </motion.div>
          </div>
        </ScrollReveal>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-4"
        >
          {achievements.map((achievement, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ x: 6, transition: { duration: 0.2 } }}
              className="bg-black/60 backdrop-blur-md rounded-2xl border border-pink-500/30 hover:border-pink-500/60 p-6 group transition-all duration-300 relative overflow-hidden"
            >
              {/* Accent line on hover */}
              <motion.div
                className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-pink-500 via-purple-500 to-cyan-500 origin-top"
                initial={{ scaleY: 0 }}
                whileHover={{ scaleY: 1 }}
                transition={{ duration: 0.3 }}
              />

              <div className="flex items-start gap-6">
                {/* Icon - Animated */}
                <motion.div
                  className="text-4xl flex-shrink-0 mt-1 group-hover:scale-125 smooth-transition"
                  animate={{ rotateZ: [0, 5, -5, 0] }}
                  transition={{ delay: idx * 0.1, duration: 2, repeat: Infinity }}
                >
                  {achievement.icon}
                </motion.div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-3 pb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {achievement.title}
                    </h3>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <motion.span
                        whileHover={{ scale: 1.05 }}
                        className={`inline-block px-3 py-1.5 rounded-full text-xs font-bold border smooth-transition ${typeColors[achievement.type]}`}
                      >
                        {achievement.type}
                      </motion.span>
                      <span className="text-white/70 text-sm font-bold whitespace-nowrap">{achievement.date}</span>
                    </div>
                  </div>
                  <p className="text-white/70 leading-relaxed font-light">{achievement.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
