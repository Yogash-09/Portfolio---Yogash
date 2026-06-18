import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Achievements from './sections/Achievements'
import Contact from './sections/Contact'
import Navbar from './components/Navbar'

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = window.scrollY
      const progress = windowHeight > 0 ? (scrolled / windowHeight) * 100 : 0
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="w-full min-h-screen" style={{ background: '#000000', color: '#e5e5e5' }}>
      {/* Scroll Progress Bar */}
      <motion.div
        className="scroll-progress"
        style={{ scaleX: scrollProgress / 100 }}
      />

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
      
      {/* Footer */}
      <footer className="py-12 border-t border-white/10 mt-24" style={{ background: '#000000' }}>
        <div className="container mx-auto px-4 text-center">
          
          <p className="text-white/40 text-sm mt-2">Crafted with precision and passion</p>
        </div>
      </footer>
    </div>
  )
}
