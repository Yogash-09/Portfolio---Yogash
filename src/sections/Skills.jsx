import React from 'react'
import { motion } from 'framer-motion'
import { NeuralNoise } from '../components/ui/NeuralNoise'
import ScrollReveal from '../components/ScrollReveal'

export default function Skills() {
  const capabilities = [
    {
      title: 'Modern Web Interfaces',
      description: 'Responsive UIs with smooth interactions and excellent performance',
      tech: 'React, Tailwind CSS, Framer Motion, TypeScript'
    },
    {
      title: 'Scalable Backend Systems',
      description: 'Robust APIs with microservices, authentication, and system design patterns',
      tech: 'Node.js, Express, Spring Boot, REST APIs, Authentication'
    },
    {
      title: 'Database & Performance',
      description: 'Optimized data models with query performance and real-time caching',
      tech: 'MongoDB, PostgreSQL, MySQL, Query Optimization'
    },
    {
      title: 'Cloud & DevOps',
      description: 'Infrastructure automation, containerization, and CI/CD pipelines',
      tech: 'Docker, AWS EC2, Linux, CI/CD(Basic)'
    },
    {
      title: 'App Development',
      description: 'Cross-platform mobile applications with native-like performance and smooth UX',
      tech: 'Flutter with Dart'
    },
    {
      title: 'Full-Stack Development',
      description: 'End-to-end solutions from frontend to cloud infrastructure',
      tech: 'Microservices, Architecture Design, API Design, Deployment'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  return (
    <section id="skills" className="min-h-screen py-20 relative overflow-hidden flex items-center" style={{ background: '#000000' }}>
      {/* Neural Noise Background Effect - Red */}
      <NeuralNoise color={[1.0, 0.1, 0.1]} opacity={0.2} speed={0.0008} />
      
      {/* Animated vibrant background orbs */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-full blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-red-500/20 to-red-600/20 rounded-full blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="container mx-auto px-4 relative z-20">
        {/* Section Header */}
        <ScrollReveal>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-20 max-w-2xl"
          >
            <span className="inline-block text-cyan-400 font-semibold text-xs uppercase tracking-widest mb-4">Capabilities</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              What I Build
            </h2>
            <p className="text-lg text-white/70 font-light">
              A complete toolkit for creating modern, scalable solutions across the entire technology stack.
            </p>
          </motion.div>
        </ScrollReveal>

        {/* Capabilities Grid */}
        <ScrollReveal delay={0.1}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid md:grid-cols-2 gap-8 max-w-5xl"
          >
            {capabilities.map((capability, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="group relative"
              >
                <motion.div
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-t-2xl"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />

                <div className="bg-black/60 backdrop-blur-md border border-cyan-500/30 hover:border-cyan-500/60 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 relative overflow-hidden">
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {capability.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/70 text-base leading-relaxed mb-4 font-light">
                    {capability.description}
                  </p>

                  {/* Tech Stack */}
                  <p className="text-sm text-cyan-300/80 font-medium">
                    {capability.tech}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}
