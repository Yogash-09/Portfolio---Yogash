import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../data/projects'
import { NeuralNoise } from '../components/ui/NeuralNoise'
import ScrollReveal from '../components/ScrollReveal'

export default function Projects() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)
  const currentProject = projects[currentProjectIndex]

  const handleNext = () => setCurrentProjectIndex((prev) => (prev + 1) % projects.length)
  const handlePrev = () => setCurrentProjectIndex((prev) => (prev - 1 + projects.length) % projects.length)
  const handleDotClick = (index) => setCurrentProjectIndex(index)

  return (
    <section id="projects" className="min-h-screen py-20 relative overflow-hidden flex items-center" style={{ background: '#000000' }}>
      <NeuralNoise color={[1.0, 0.1, 0.1]} opacity={0.2} speed={0.0008} />

      <motion.div
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl"
        style={{ background: 'rgba(255,45,120,0.08)' }}
        animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl"
        style={{ background: 'rgba(0,255,247,0.06)' }}
        animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container mx-auto px-4 relative z-20">
        <ScrollReveal>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Featured Projects</span>
            </h2>
            <div className="h-1 w-16 rounded-full" style={{ background: 'linear-gradient(90deg, #ff2d78, #a855f7, #00fff7)' }}></div>
          </motion.div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true, margin: '-50px' }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProjectIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="backdrop-blur-md rounded-2xl border border-pink-500/30 overflow-hidden hover:border-pink-500/60 transition-all duration-300"
                style={{ background: 'rgba(8,8,8,0.9)' }}
              >
                <motion.div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ background: 'linear-gradient(90deg, #ff2d78, #a855f7, #00fff7)' }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />

                <div className="grid md:grid-cols-2 gap-6 p-6 md:p-8">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="flex items-center justify-center"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden flex items-center justify-center text-8xl md:text-9xl border border-cyan-500/30"
                      style={{ background: 'rgba(255,255,255,0.03)', boxShadow: '0 0 30px rgba(255,45,120,0.1)' }}
                    >
                      {currentProject.image}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0 bg-black/40 flex items-center justify-center backdrop-blur-sm"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1 }}
                          className="text-white px-6 py-3 rounded-full font-bold text-sm"
                          style={{ background: 'linear-gradient(135deg, #ff2d78, #a855f7)' }}
                        >
                          {currentProject.category}
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                    className="flex flex-col justify-between"
                  >
                    <div>
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="inline-block text-xs font-bold text-pink-300 px-3 py-1 rounded-full mb-4 border border-pink-500/50"
                        style={{ background: 'rgba(255,45,120,0.15)' }}
                      >
                        {currentProject.category}
                      </motion.span>

                      <motion.h3
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.35 }}
                        className="text-4xl font-bold text-white mb-4"
                      >
                        {currentProject.title}
                      </motion.h3>

                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-lg text-white/70 leading-relaxed mb-6 font-light"
                      >
                        {currentProject.description}
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.45 }}
                        className="space-y-2 mb-6"
                      >
                        {currentProject.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-center gap-3 text-white/80"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + idx * 0.05 }}
                          >
                            <span className="text-cyan-400 font-bold">✓</span>
                            <span>{feature}</span>
                          </motion.div>
                        ))}
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-wrap gap-2 mb-8"
                      >
                        {currentProject.technologies.map((tech, idx) => (
                          <motion.span
                            key={idx}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="text-sm px-3 py-1.5 border border-cyan-500/40 text-cyan-300 rounded-lg font-semibold hover:border-cyan-500 hover:shadow-md transition-all backdrop-blur-sm"
                            style={{ background: 'rgba(0,255,247,0.05)', boxShadow: undefined }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.55 }}
                      className="flex gap-4"
                    >
                      {currentProject.repo && (
                        <motion.a
                          href={currentProject.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 py-3 px-6 text-white font-bold rounded-lg text-center transition-all active:scale-95"
                          style={{ background: 'linear-gradient(135deg, #ff2d78, #a855f7, #00fff7)', boxShadow: '0 4px 20px rgba(168,85,247,0.3)' }}
                        >
                          View on GitHub →
                        </motion.a>
                      )}
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center gap-8 mt-12"
            >
              <div className="flex gap-4">
                <motion.button
                  onClick={handlePrev}
                  whileHover={{ scale: 1.1, x: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-full border-2 border-cyan-500/50 hover:border-cyan-500 transition-all text-white text-xl backdrop-blur-sm"
                  style={{ background: 'rgba(0,0,0,0.7)', boxShadow: '0 0 15px rgba(0,255,247,0.1)' }}
                  aria-label="Previous project"
                >
                  ←
                </motion.button>

                <div className="flex items-center gap-4 px-6 py-2 backdrop-blur-md rounded-full border border-pink-500/30" style={{ background: 'rgba(0,0,0,0.6)' }}>
                  <span className="text-sm font-semibold text-white/80">
                    {currentProjectIndex + 1} / {projects.length}
                  </span>
                </div>

                <motion.button
                  onClick={handleNext}
                  whileHover={{ scale: 1.1, x: 2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-full border-2 border-cyan-500/50 hover:border-cyan-500 transition-all text-white text-xl backdrop-blur-sm"
                  style={{ background: 'rgba(0,0,0,0.7)', boxShadow: '0 0 15px rgba(0,255,247,0.1)' }}
                  aria-label="Next project"
                >
                  →
                </motion.button>
              </div>

              <div className="flex gap-2">
                {projects.map((_, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => handleDotClick(idx)}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                    className={`rounded-full transition-all ${
                      idx === currentProjectIndex
                        ? 'w-3 h-3'
                        : 'w-2 h-2'
                    }`}
                    style={{
                      background: idx === currentProjectIndex
                        ? 'linear-gradient(135deg, #ff2d78, #a855f7)'
                        : 'rgba(255,255,255,0.2)',
                      boxShadow: idx === currentProjectIndex ? '0 0 10px rgba(255,45,120,0.5)' : 'none'
                    }}
                    aria-label={`Go to project ${idx + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}
