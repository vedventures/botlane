'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Navbar from './Navbar'

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-bg">
      {/* Navbar */}
      <Navbar />
      
      {/* Animated Background Grid */}
      <div className="absolute inset-0 cyber-grid opacity-15" />
      
      {/* Subtle Overlay */}
      <div className="absolute inset-0 bg-subtle-overlay opacity-40" />
      
      {/* Elegant Floating Elements */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-premium-blue/20 rounded-full blur-sm"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Subtle Interactive Light Effect */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: mousePosition.x - 300,
          top: mousePosition.y - 300,
          width: 600,
          height: 600,
          background: 'radial-gradient(circle, rgba(99,102,241,0.03) 0%, transparent 70%)',
          borderRadius: '50%',
          transition: 'all 0.3s ease-out',
        }}
      />

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center px-8 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Company Name */}
        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="text-5xl md:text-6xl font-light tracking-tight leading-tight">
            <span className="text-white">Intelligent </span>
            <span className="bg-premium-gradient bg-clip-text text-transparent font-medium animate-glow">Marketing </span>
            <span className="text-premium-silver">Infrastructure</span>
          </h1>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-premium-blue to-transparent mx-auto mt-6" />
        </motion.div>

        {/* Tagline */}
        <motion.div variants={itemVariants} className="mb-8">
          <p className="text-xl md:text-2xl text-premium-platinum font-light tracking-wide leading-relaxed">
            AI-Native Marketing That Scales
          </p>
          <p className="text-lg md:text-xl text-cool-gray font-light mt-2">
            Built for Scale, Designed for Growth
          </p>
        </motion.div>

        {/* Main Description */}
        <motion.div variants={itemVariants} className="mb-12">
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
            We architect sophisticated AI-driven marketing systems that transform 
            how premium brands engage, convert, and scale their customer relationships.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <motion.button
            className="group relative px-10 py-4 bg-premium-blue/10 border border-premium-blue/30 text-premium-blue font-medium text-base rounded-sm backdrop-blur-sm overflow-hidden transition-all duration-500 hover:bg-premium-blue hover:text-dark-bg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Schedule Consultation</span>
          </motion.button>
          
          <motion.button
            className="group px-10 py-4 bg-transparent border border-gray-500/30 text-gray-300 font-medium text-base rounded-sm transition-all duration-500 hover:border-premium-silver/50 hover:text-premium-silver"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View Portfolio
          </motion.button>
        </motion.div>

        {/* Refined Stats */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-3xl mx-auto"
        >
          {[
            { number: '500%', label: 'Average ROI Increase', description: 'First-year performance' },
            { number: '48hrs', label: 'Implementation Time', description: 'From strategy to execution' },
            { number: '99.9%', label: 'System Reliability', description: 'Enterprise-grade uptime' }
          ].map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center group"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-2xl md:text-3xl font-light text-premium-blue mb-2 transition-all duration-300">
                {stat.number}
              </div>
              <div className="text-premium-platinum text-sm font-medium mb-1 tracking-wide">
                {stat.label}
              </div>
              <div className="text-cool-gray text-xs">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-bg to-transparent" />
    </section>
  )
}

export default HeroSection
