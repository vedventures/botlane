'use client'

import { motion } from 'framer-motion'

const WhyBotLane = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
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

  const pillars = [
    {
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "AI-Powered Systems",
      description: "Advanced machine learning algorithms that adapt and optimize your marketing performance in real-time."
    },
    {
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Full-Funnel Automation",
      description: "Seamless customer journey orchestration from awareness to conversion and retention."
    },
    {
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Transparent Pricing",
      description: "Clear, performance-based pricing with no hidden fees. You only pay for measurable results."
    },
    {
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: "US Registered",
      description: "Fully registered U.S. company with enterprise-grade security and compliance standards."
    }
  ]

  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-b from-dark-bg to-dark-surface overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(99, 102, 241, 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12 sm:mb-14 md:mb-16"
        >
          {/* Main Headline */}
          <motion.div variants={itemVariants} className="mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4">
              AI-Native. <span className="text-premium-platinum">Outcome-Obsessed.</span>
            </h2>
            <div className="h-px w-16 sm:w-20 md:w-24 bg-gradient-to-r from-transparent via-premium-blue to-transparent mx-auto" />
          </motion.div>

          {/* Subheadline */}
          <motion.div variants={itemVariants}>
            <p className="text-lg sm:text-xl md:text-2xl text-premium-silver font-light tracking-wide px-4">
              Smarter execution. Measurable outcomes.
            </p>
          </motion.div>
        </motion.div>

        {/* Pillars Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-6 sm:p-8 bg-gradient-to-b from-dark-surface/80 to-dark-bg/60 border border-premium-blue/20 backdrop-blur-sm transition-all duration-500 hover:border-premium-blue/40 hover:bg-dark-surface/90 overflow-hidden"
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                rotateX: 5,
                rotateY: 2
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 20 
              }}
            >
              {/* Animated Background Glow */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-premium-blue/10 via-premium-purple/5 to-transparent opacity-0 group-hover:opacity-100"
                initial={{ scale: 0.8, opacity: 0 }}
                whileHover={{ 
                  scale: 1.1, 
                  opacity: 1,
                  transition: { duration: 0.6, ease: "easeOut" }
                }}
              />

              {/* Floating Particles Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-premium-blue/40 rounded-full"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`,
                    }}
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.4, 0.8, 0.4],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2 + Math.random(),
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>

              {/* Icon with enhanced animation */}
              <motion.div 
                className="mb-4 sm:mb-6 text-premium-blue/70 group-hover:text-premium-blue transition-colors duration-300 relative z-10"
                whileHover={{ 
                  scale: 1.1, 
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.5 }
                }}
              >
                {pillar.icon}
              </motion.div>

              {/* Title with subtle animation */}
              <motion.h3 
                className="text-lg sm:text-xl font-medium text-white mb-3 sm:mb-4 group-hover:text-premium-platinum transition-colors duration-300 relative z-10"
                whileHover={{ x: 2 }}
              >
                {pillar.title}
              </motion.h3>

              {/* Description with stagger effect */}
              <motion.p 
                className="text-sm sm:text-base text-cool-gray font-light leading-relaxed group-hover:text-premium-silver transition-colors duration-300 relative z-10"
                whileHover={{ x: 4 }}
                transition={{ delay: 0.1 }}
              >
                {pillar.description}
              </motion.p>

              {/* Enhanced Border Glow Effect */}
              <motion.div 
                className="absolute inset-0 rounded-lg border border-premium-blue/0 group-hover:border-premium-blue/30"
                whileHover={{
                  boxShadow: [
                    "0 0 0 rgba(99, 102, 241, 0)",
                    "0 0 20px rgba(99, 102, 241, 0.1)",
                    "0 0 40px rgba(99, 102, 241, 0.05)"
                  ],
                  transition: { duration: 0.6 }
                }}
              />

              {/* Subtle Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-premium-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default WhyBotLane
