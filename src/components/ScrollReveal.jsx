import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function ScrollReveal({ children, delay = 0, direction = 'up' }) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  const directions = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { y: 0, x: -50 },
    right: { y: 0, x: 50 },
  }

  const initialValues = directions[direction] || directions.up

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1, rootMargin: '-50px' }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        ...initialValues,
        scale: 0.95,
        filter: 'blur(10px)'
      }}
      animate={isVisible ? { 
        opacity: 1, 
        x: 0,
        y: 0,
        scale: 1,
        filter: 'blur(0px)'
      } : { 
        opacity: 0, 
        ...initialValues,
        scale: 0.95
      }}
      transition={{ 
        duration: 0.6, 
        delay, 
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {children}
    </motion.div>
  )
}
