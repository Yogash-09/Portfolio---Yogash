import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative h-full"
    >
      <div
        className="overflow-hidden h-full flex flex-col rounded-2xl border transition-all duration-300"
        style={{
          background: 'rgba(8,8,8,0.97)',
          borderColor: isHovered ? 'rgba(0,255,247,0.3)' : 'rgba(255,255,255,0.08)',
          boxShadow: isHovered ? '0 0 30px rgba(0,255,247,0.1)' : 'none',
        }}
      >
        {/* Image / Icon Section */}
        <div className="relative h-56 flex items-center justify-center overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.03)' }}
        >
          <motion.div
            className="absolute inset-0 opacity-0"
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            style={{ background: 'linear-gradient(135deg, rgba(0,255,247,0.08), rgba(168,85,247,0.08))' }}
          />

          <motion.div
            className="text-6xl relative z-10"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.3 }}
          >
            {project.image}
          </motion.div>

          {/* Hover Overlay */}
          <motion.div
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center gap-4 backdrop-blur-sm"
          >
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.2 }}
                className="flex flex-wrap gap-2 justify-center px-4"
              >
                {project.technologies.slice(0, 3).map((tech, i) => (
                  <span key={i} className="text-xs backdrop-blur-sm text-white px-2 py-1 rounded-full border border-white/20 font-medium"
                    style={{ background: 'rgba(0,255,247,0.1)' }}>
                    {tech}
                  </span>
                ))}
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.2 }}
              className="flex gap-3"
            >
              <motion.a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 rounded-lg font-medium text-white text-sm shadow-lg"
                style={{ background: 'linear-gradient(135deg, #ff2d78, #a855f7)' }}
              >
                GitHub →
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Category Tag */}
          <div className="mb-4">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="inline-block px-3 py-1 rounded-full text-xs font-bold border"
              style={{ background: 'rgba(0,255,247,0.08)', color: '#00fff7', borderColor: 'rgba(0,255,247,0.2)' }}
            >
              {project.category}
            </motion.span>
          </div>

          {/* Title */}
          <motion.h3
            className="text-xl font-bold mb-3 smooth-transition leading-snug"
            style={{ color: isHovered ? '#00fff7' : '#ffffff' }}
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 1 }}
          >
            {project.title}
          </motion.h3>

          {/* Description */}
          <p className="text-sm mb-4 flex-1 line-clamp-2 leading-relaxed font-light" style={{ color: 'rgba(255,255,255,0.55)' }}>
            {project.description}
          </p>

          {/* Features */}
          <div className="mb-5 flex flex-wrap gap-2">
            {project.features.slice(0, 2).map((feature, idx) => (
              <motion.span
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="text-xs px-3 py-1.5 rounded-lg border font-semibold smooth-transition"
                style={{ background: 'rgba(168,85,247,0.08)', color: 'rgba(168,85,247,0.9)', borderColor: 'rgba(168,85,247,0.2)' }}
              >
                {feature}
              </motion.span>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="mb-6">
            <p className="text-xs mb-2.5 font-bold uppercase tracking-wide" style={{ color: 'rgba(255,255,255,0.35)' }}>Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <motion.span
                  key={idx}
                  whileHover={{ scale: 1.1, translateY: -2 }}
                  className="text-xs px-2.5 py-1.5 rounded-lg font-medium smooth-transition border"
                  style={{ background: 'rgba(10,10,10,0.8)', color: 'rgba(0,255,247,0.7)', borderColor: 'rgba(255,255,255,0.08)' }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <motion.a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98, y: 0 }}
            className="w-full py-3 text-white font-semibold rounded-xl text-center smooth-transition active:scale-95"
            style={{ background: 'linear-gradient(135deg, #ff2d78, #a855f7, #00fff7)', boxShadow: '0 4px 20px rgba(168,85,247,0.3)' }}
          >
            View on GitHub →
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}
