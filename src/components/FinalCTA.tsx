'use client'

import { motion } from 'framer-motion'

export default function FinalCTA() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { 
      y: 30,
      opacity: 0
    },
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
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-dark-surface to-dark-bg overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Enhanced Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.2) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>
        
        {/* Dramatic Floating Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-premium-blue/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-premium-purple/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-accent-teal/10 rounded-full blur-2xl" />
        
        {/* Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-premium-blue/5 via-transparent to-premium-purple/5" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-6 sm:space-y-8 lg:space-y-12"
        >
          {/* Headline */}
          <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight leading-tight text-white">
              <span className="block mb-2 sm:mb-4">Ready to build your</span>
              <span className="bg-premium-gradient bg-clip-text text-transparent font-medium animate-glow">
                growth engine?
              </span>
            </h2>
            
            <div className="flex justify-center">
              <div className="h-px w-32 sm:w-40 md:w-48 bg-gradient-to-r from-transparent via-premium-blue to-transparent" />
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={itemVariants}>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-premium-platinum font-light tracking-wide leading-relaxed max-w-4xl mx-auto px-2">
              Transform your marketing with AI-native infrastructure that scales automatically and delivers measurable results.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8 pt-4 sm:pt-6 lg:pt-8"
          >
            {/* Primary CTA - Get a Proposal */}
            <motion.button
              className="group relative w-full sm:w-auto px-8 sm:px-10 lg:px-12 xl:px-16 py-4 sm:py-5 lg:py-6 xl:py-7 bg-gradient-to-r from-premium-blue to-premium-purple border border-premium-blue/50 text-white font-medium text-base sm:text-lg lg:text-xl tracking-wide backdrop-blur-md overflow-hidden transition-all duration-700 hover:border-premium-blue/70 hover:shadow-2xl hover:shadow-premium-blue/30"
              whileHover={{ 
                scale: 1.05, 
                y: -4,
                boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-premium-blue/30 to-premium-purple/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <span className="relative z-10 flex items-center justify-center gap-3">
                Get a Proposal
                <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m0 0l-3 3m3-3l-3-3M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              
              {/* Enhanced Glow Effect */}
              <motion.div 
                className="absolute inset-0 border border-premium-blue/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{
                  boxShadow: [
                    "0 0 0 rgba(99, 102, 241, 0)",
                    "0 0 30px rgba(99, 102, 241, 0.2)",
                    "0 0 60px rgba(99, 102, 241, 0.1)"
                  ]
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            {/* Secondary CTA - Book Discovery Call */}
            <motion.button
              className="group relative w-full sm:w-auto px-8 sm:px-10 lg:px-12 xl:px-16 py-4 sm:py-5 lg:py-6 xl:py-7 bg-transparent border border-slate-600/50 text-white font-medium text-base sm:text-lg lg:text-xl tracking-wide backdrop-blur-md overflow-hidden transition-all duration-700 hover:border-premium-blue/50 hover:bg-slate-800/30 hover:shadow-xl hover:shadow-premium-blue/20"
              whileHover={{ 
                scale: 1.05, 
                y: -4,
                boxShadow: "0 15px 30px rgba(99, 102, 241, 0.2)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-premium-blue/10 to-premium-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <span className="relative z-10 flex items-center justify-center gap-3">
                Book Discovery Call
                <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
            </motion.button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            variants={itemVariants}
            className="pt-6 sm:pt-8 lg:pt-12"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 lg:gap-12 text-premium-silver">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-premium-blue" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-xs sm:text-sm lg:text-base font-light">Free Strategy Session</span>
              </div>
              
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-premium-blue" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-xs sm:text-sm lg:text-base font-light">No Long-term Contracts</span>
              </div>
              
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-premium-blue" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-xs sm:text-sm lg:text-base font-light">ROI Guarantee</span>
              </div>
            </div>
          </motion.div>

          {/* Bottom Note */}
          <motion.div variants={itemVariants} className="pt-4 sm:pt-6">
            <p className="text-xs sm:text-sm lg:text-base text-slate-400 font-light max-w-2xl mx-auto">
              Join 200+ companies already scaling with intelligent marketing infrastructure
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-premium-blue/30 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/3 w-1 h-1 bg-premium-purple/40 rounded-full"
          animate={{
            y: [0, -15, 0],
            opacity: [0.4, 0.9, 0.4]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-accent-teal/35 rounded-full"
          animate={{
            y: [0, -25, 0],
            opacity: [0.35, 0.7, 0.35]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
    </section>
  )
}
