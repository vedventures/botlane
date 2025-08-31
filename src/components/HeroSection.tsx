'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Navbar from './Navbar'
import TypingEffect from './TypingEffect'

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [shouldPlaySound, setShouldPlaySound] = useState(true)
  
  // Hero phrases for typing effect - optimized for mobile single line
  const heroPhases = [
    "Smart Marketing Tech",
    "AI Growth Systems", 
    "Revenue Automation"
  ]

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      const scrollY = window.scrollY
      // Stop sound when user scrolls more than 100px
      if (scrollY > 100 && shouldPlaySound) {
        setShouldPlaySound(false)
      }
      // Re-enable sound when back at top
      if (scrollY <= 50 && !shouldPlaySound) {
        setShouldPlaySound(true)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [shouldPlaySound])

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
      
      {/* Subtle Noise Texture */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
      }} />
      
      {/* Subtle Overlay */}
      <div className="absolute inset-0 bg-subtle-overlay opacity-40" />
      
      {/* Elegant Floating Elements */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full blur-sm ${
              i % 3 === 0 ? 'w-1 h-1 bg-premium-blue/15' :
              i % 3 === 1 ? 'w-2 h-2 bg-premium-purple/10' :
              'w-1.5 h-1.5 bg-white/5'
            }`}
            style={{
              left: `${15 + Math.random() * 70}%`,
              top: `${15 + Math.random() * 70}%`,
            }}
            animate={{
              y: [0, -20 - Math.random() * 10, 0],
              x: [0, Math.random() * 10 - 5, 0],
              opacity: [0.1, 0.4 + Math.random() * 0.3, 0.1],
              scale: [1, 1.1 + Math.random() * 0.3, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Subtle Depth Lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-premium-blue/8 to-transparent"
            style={{
              top: `${30 + i * 20}%`,
              left: '-20%',
              right: '-20%',
            }}
            animate={{
              opacity: [0, 0.3, 0],
              scaleX: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 2,
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
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight leading-tight min-h-[1.2em]">
            <TypingEffect 
              phrases={heroPhases}
              typingSpeed={80}
              deletingSpeed={40}
              pauseDuration={3000}
              enableSound={shouldPlaySound}
              className=""
            />
          </h1>
          <div className="h-px w-24 sm:w-32 bg-gradient-to-r from-transparent via-premium-blue to-transparent mx-auto mt-4 sm:mt-6" />
        </motion.div>

        {/* Tagline */}
        <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
          <div className="relative">
            <p className="text-lg sm:text-xl md:text-2xl text-premium-platinum font-light tracking-wide leading-relaxed">
              AI-Native Marketing That Scales
            </p>
            <div className="absolute -top-1 -right-2 w-2 h-2 bg-premium-blue/40 rounded-full animate-pulse" />
          </div>
          <p className="text-base sm:text-lg md:text-xl text-cool-gray font-light mt-2">
            Built for Scale, Designed for Growth
          </p>
        </motion.div>

        {/* Main Description */}
        <motion.div variants={itemVariants} className="mb-8 sm:mb-10 md:mb-12">
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute -left-4 top-0 w-px h-full bg-gradient-to-b from-transparent via-premium-blue/20 to-transparent" />
            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed font-light px-2">
              We architect sophisticated AI-driven marketing systems that transform 
              how premium brands engage, convert, and scale their customer relationships.
            </p>
            <div className="absolute -right-4 bottom-0 w-px h-full bg-gradient-to-t from-transparent via-premium-purple/20 to-transparent" />
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center mb-12 sm:mb-14 md:mb-16">
          <motion.button
            className="group relative w-full sm:w-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-premium-blue to-premium-purple border border-premium-blue/50 text-white font-medium text-xs sm:text-sm md:text-base tracking-wide rounded-lg hover:border-premium-blue/70 transition-all duration-300"
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="flex items-center gap-1 sm:gap-2 whitespace-nowrap">
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
          className="relative grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 md:gap-12 max-w-3xl mx-auto px-4"
        >
          {/* Subtle connecting lines between stats */}
          <div className="hidden sm:block absolute top-1/2 left-1/3 w-1/3 h-px bg-gradient-to-r from-premium-blue/10 to-premium-purple/10" />
          <div className="hidden sm:block absolute top-1/2 right-1/3 w-1/3 h-px bg-gradient-to-r from-premium-purple/10 to-premium-blue/10" />
          {[
            { number: '500%', label: 'Average ROI Increase', description: 'First-year performance' },
            { number: '48hrs', label: 'Implementation Time', description: 'From strategy to execution' },
            { number: '99.9%', label: 'System Reliability', description: 'Enterprise-grade uptime' }
          ].map((stat, index) => (
            <motion.div 
              key={index} 
              className="relative text-center group"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 bg-premium-blue/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              
              <div className="relative z-10">
                <div className="text-xl sm:text-2xl md:text-3xl font-light text-premium-blue mb-2 transition-all duration-300 group-hover:text-premium-purple">
                  {stat.number}
                </div>
                <div className="text-premium-platinum text-xs sm:text-sm font-medium mb-1 tracking-wide">
                  {stat.label}
                </div>
                <div className="text-cool-gray text-xs">
                  {stat.description}
                </div>
                
                {/* Micro indicator */}
                <div className="w-1 h-1 bg-premium-blue/30 rounded-full mx-auto mt-2 group-hover:bg-premium-purple/50 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-bg to-transparent" />
      
      {/* Subtle Brand Watermark */}
      <div className="absolute bottom-8 right-8 opacity-5">
        <div className="text-xs font-light text-premium-blue tracking-widest transform rotate-90 origin-center">
          BOTLANE
        </div>
      </div>
      
      {/* Professional Corner Accents */}
      <div className="absolute top-0 left-0 w-20 h-20">
        <div className="absolute top-4 left-4 w-8 h-px bg-gradient-to-r from-premium-blue/20 to-transparent" />
        <div className="absolute top-4 left-4 w-px h-8 bg-gradient-to-b from-premium-blue/20 to-transparent" />
      </div>
      <div className="absolute top-0 right-0 w-20 h-20">
        <div className="absolute top-4 right-4 w-8 h-px bg-gradient-to-l from-premium-purple/20 to-transparent" />
        <div className="absolute top-4 right-4 w-px h-8 bg-gradient-to-b from-premium-purple/20 to-transparent" />
      </div>
    </section>
  )
}

export default HeroSection
