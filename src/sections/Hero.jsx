import React from 'react'
import { motion } from 'framer-motion'
import { NeuralNoise } from '../components/ui/NeuralNoise'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  }

  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center pt-32 pb-20">
      {/* Neural Noise Background Effect - Red */}
      <NeuralNoise color={[1.0, 0.1, 0.1]} opacity={0.25} speed={0.0008} />
      
      {/* Pure black base */}
      <div className="absolute inset-0" style={{ background: '#000000' }}></div>
      
      {/* Animated vibrant background elements */}
      <motion.div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl"
        style={{ background: 'rgba(255,45,120,0.12)' }}
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full blur-3xl"
        style={{ background: 'rgba(0,255,247,0.08)' }}
        animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      
      {/* Floating accent orbs */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-40 h-40 border-2 border-pink-500/40 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-32 h-32 border-2 border-cyan-500/40 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 text-center z-20 max-w-4xl"
      >
        {/* Main Headline - BOLD & BIG */}
        <motion.div variants={itemVariants} className="mb-8">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-black leading-tight tracking-tighter mb-4">
            <motion.span
              className="inline-block"
              animate={{ backgroundPosition: '200% 0' }}
              transition={{ duration: 8, repeat: Infinity }}
              style={{
                background: 'linear-gradient(90deg, #EC4899 0%, #A855F7 25%, #0891B2 50%, #3B82F6 75%, #EC4899 100%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Yogash S A
            </motion.span>
          </h1>
        </motion.div>

        {/* Subheading - Clear Positioning */}
        <motion.div variants={itemVariants} className="mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
            Full Stack & App Developer
          </h2>
          <motion.div
            className="w-16 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full mx-auto mt-6"
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          />
        </motion.div>

        {/* Descriptive Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed font-light"
        >
          I craft high-performance backend systems and delightful frontends. From microservices to IoT, 
          I turn complex challenges into elegant, production-grade solutions.
        </motion.p>

        {/* Premium CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.08, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all"
          >
            Explore My Work →
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.08, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-cyan-400 text-white font-bold rounded-xl hover:bg-white/20 shadow-md hover:shadow-lg transition-all"
          >
            Get In Touch →
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-16"
        >
          <p className="text-white/60 text-sm font-medium mb-2">Scroll to explore</p>
          <motion.div className="text-2xl">⬇️</motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
