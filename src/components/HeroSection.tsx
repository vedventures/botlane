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
        className="relative z-10 text-center px-4 sm:px-6 md:px-8 max-w-5xl mx-auto pt-20 sm:pt-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Company Name */}
        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-tight">
            <span className="text-white">Intelligent </span>
            <span className="bg-premium-gradient bg-clip-text text-transparent font-medium animate-glow">Marketing </span>
            <span className="text-premium-silver">Infrastructure</span>
          </h1>
          <div className="h-px w-24 sm:w-32 bg-gradient-to-r from-transparent via-premium-blue to-transparent mx-auto mt-4 sm:mt-6" />
        </motion.div>

        {/* Tagline */}
        <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
          <p className="text-lg sm:text-xl md:text-2xl text-premium-platinum font-light tracking-wide leading-relaxed">
            AI-Native Marketing That Scales
          </p>
          <p className="text-base sm:text-lg md:text-xl text-cool-gray font-light mt-2">
            Built for Scale, Designed for Growth
          </p>
        </motion.div>

        {/* Main Description */}
        <motion.div variants={itemVariants} className="mb-8 sm:mb-10 md:mb-12">
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-light px-2">
            We architect sophisticated AI-driven marketing systems that transform 
            how premium brands engage, convert, and scale their customer relationships.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center mb-12 sm:mb-14 md:mb-16">
          <motion.button
            className="group relative w-full sm:w-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-slate-900/80 to-slate-800/80 border border-slate-700/50 text-white font-light text-xs sm:text-sm md:text-base tracking-wide backdrop-blur-md overflow-hidden transition-all duration-700 hover:border-slate-600/70 hover:shadow-lg hover:shadow-slate-900/20"
            whileHover={{ scale: 1.01, y: -1 }}
            whileTap={{ scale: 0.99 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-slate-800/20 to-slate-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <span className="relative z-10 flex items-center gap-1 sm:gap-2 whitespace-nowrap">
              <span className="hidden sm:inline">Schedule Consultation</span>
              <span className="sm:hidden">Schedule</span>
              <svg className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </motion.button>
          
          <motion.button
            className="group relative w-full sm:w-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-3 sm:py-4 md:py-5 bg-transparent border border-slate-600/40 text-slate-300 font-light text-xs sm:text-sm md:text-base tracking-wide transition-all duration-700 hover:border-slate-500/60 hover:text-slate-200 hover:bg-slate-900/20"
            whileHover={{ scale: 1.01, y: -1 }}
            whileTap={{ scale: 0.99 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-slate-800/10 to-slate-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <span className="relative z-10 flex items-center gap-1 sm:gap-2 whitespace-nowrap">
              <span className="hidden sm:inline">View Portfolio</span>
              <span className="sm:hidden">Portfolio</span>
              <svg className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </span>
          </motion.button>
        </motion.div>

        {/* Refined Stats */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 md:gap-12 max-w-3xl mx-auto px-4"
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
              <div className="text-xl sm:text-2xl md:text-3xl font-light text-premium-blue mb-2 transition-all duration-300">
                {stat.number}
              </div>
              <div className="text-premium-platinum text-xs sm:text-sm font-medium mb-1 tracking-wide">
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
