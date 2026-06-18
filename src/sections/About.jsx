import React from 'react'
import { motion } from 'framer-motion'
import { NeuralNoise } from '../components/ui/NeuralNoise'
import ScrollReveal from '../components/ScrollReveal'

export default function About() {
  const strengths = [
    {
      title: 'Full-Stack Development',
      description: 'Building complete applications from frontend to backend with clean structure and maintainable code',
      icon: '👨‍💻'
    },
    {
      title: 'Game Development',
      description: 'Creating interactive games with Unity, focusing on gameplay mechanics and user experience',
      icon: '🎮'
    }
  ]

  const stats = [
    { number: '5+', label: 'Major Projects' },
    { number: '8+', label: 'Tech Stacks' },
    { number: '100%', label: 'Dedication' }
  ]

  return (
    <section id="about" className="min-h-screen py-20 relative overflow-hidden flex items-center" style={{ background: '#000000' }}>
      {/* Neural Noise Background Effect - Red */}
      <NeuralNoise color={[1.0, 0.1, 0.1]} opacity={0.2} speed={0.0008} />
      
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-red-500/20 to-red-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        {/* Section Title */}
        <ScrollReveal>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <span className="inline-block text-cyan-400 font-bold text-sm uppercase tracking-widest mb-4">About Me</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white">
              Full Stack Problem Solver
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full"></div>
          </motion.div>
        </ScrollReveal>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left: Description & Strengths */}
          <ScrollReveal>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Main Description */}
              <div className="mb-12">
                <p className="text-lg text-white/80 leading-relaxed mb-6 font-light">
                  I'm a full-stack developer focused on building practical web applications and interactive experiences. I work across frontend and backend, with hands-on experience in designing APIs, managing data, and creating responsive user interfaces.
                </p>
                <p className="text-lg text-white/70 leading-relaxed mb-6 font-light">
                  Alongside web development, I also build games using Unity—working on gameplay mechanics, UI interaction, and real-time systems through game jam projects.
                </p>
                <p className="text-lg text-white/70 leading-relaxed font-light">
                  I enjoy solving technical problems, whether it's structuring a backend, optimizing a database query, or implementing smooth user interactions.
                </p>
              </div>

              {/* Key Strengths */}
              <div className="space-y-6">
                {strengths.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="group"
                  >
                    <div className="flex gap-4">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        className="text-4xl flex-shrink-0 mt-1"
                      >
                        {item.icon}
                      </motion.div>
                      <div>
                        <h3 className="font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-white/60 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Right: Profile Card with Stats */}
          <ScrollReveal>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Profile Card */}
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="bg-black/60 backdrop-blur-md border border-pink-500/30 p-8 md:p-10 hover:border-pink-500/60 hover:shadow-xl hover:shadow-pink-500/20 overflow-hidden relative group rounded-3xl transition-all"
              >
                {/* Top accent */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Profile Image Area */}
                <div className="mb-10">
                  <motion.div
                    className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-pink-500/30 via-purple-500/20 to-cyan-500/30 h-64 flex items-center justify-center text-8xl shadow-md"
                    whileHover={{ scale: 1.03 }}
                  >
                    👨‍💻
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />
                  </motion.div>
                </div>

                
              </motion.div>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
