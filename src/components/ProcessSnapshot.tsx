'use client'

import { motion } from 'framer-motion'

export default function ProcessSnapshot() {
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

  const cardVariants = {
    hidden: { 
      y: 50,
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

  const steps = [
    {
      id: "01",
      title: "Discovery",
      description: "Deep-dive analysis of your current marketing infrastructure and growth objectives",
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      duration: "Week 1"
    },
    {
      id: "02",
      title: "Stack Setup",
      description: "Custom configuration of AI-driven marketing systems tailored to your business model",
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      duration: "Week 2-3"
    },
    {
      id: "03",
      title: "Launch",
      description: "Seamless deployment with real-time monitoring and immediate performance tracking",
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      ),
      duration: "Week 4"
    },
    {
      id: "04",
      title: "Learn",
      description: "Data-driven optimization based on performance insights and behavioral analytics",
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      duration: "Week 5-8"
    },
    {
      id: "05",
      title: "Scale",
      description: "Intelligent expansion with automated systems that grow with your success",
      icon: (
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      duration: "Ongoing"
    }
  ]

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-b from-dark-surface to-dark-bg overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-premium-blue/5 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-premium-purple/5 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent-teal/5 rounded-full blur-xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light tracking-tight leading-tight text-white mb-4">
              <span className="text-white">Process </span>
              <span className="bg-premium-gradient bg-clip-text text-transparent font-medium animate-glow">Snapshot</span>
            </h2>
            <div className="h-px w-24 sm:w-28 md:w-32 bg-gradient-to-r from-transparent via-premium-blue to-transparent mx-auto" />
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-base sm:text-lg lg:text-xl text-premium-platinum font-light tracking-wide leading-relaxed max-w-3xl mx-auto px-2">
              From onboarding to ROI in 5 steps
            </p>
          </motion.div>
        </motion.div>

        {/* Process Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative"
        >
          {/* Timeline Line - Hidden on mobile, visible on larger screens */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-premium-blue/20 via-premium-blue/40 to-premium-blue/20 transform -translate-y-1/2" />
          
          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                variants={cardVariants}
                className="relative group flex"
              >
                {/* Step Card */}
                <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 sm:p-6 hover:border-blue-500/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/10 group-hover:-translate-y-1 w-full flex flex-col min-h-[240px] sm:min-h-[280px]">
                  {/* Step Number Badge */}
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm">
                      {step.id}
                    </div>
                    <span className="text-xs text-slate-400 bg-slate-800/50 px-2 py-1 rounded-full">
                      {step.duration}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="mb-3 sm:mb-4 text-blue-400 group-hover:text-blue-300 transition-colors duration-300 group-hover:rotate-3 transform">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 group-hover:text-blue-100 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed flex-1 mb-3 sm:mb-4">
                      {step.description}
                    </p>
                  </div>

                  {/* Hover Glow Effect */}
                  <motion.div 
                    className="absolute inset-0 rounded-xl border border-premium-blue/0 group-hover:border-premium-blue/30"
                    whileHover={{
                      boxShadow: [
                        "0 0 0 rgba(99, 102, 241, 0)",
                        "0 0 20px rgba(99, 102, 241, 0.1)",
                        "0 0 40px rgba(99, 102, 241, 0.05)"
                      ]
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Desktop Timeline Connector Dot */}
                <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-4 bg-premium-blue/30 border-2 border-dark-bg rounded-full transform -translate-y-1/2 group-hover:bg-premium-blue/50 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-8 sm:mt-12 lg:mt-16"
        >
          <p className="text-sm sm:text-base lg:text-lg text-premium-silver font-light mb-4 sm:mb-6">
            Ready to transform your marketing infrastructure?
          </p>
          <motion.button
            className="group relative px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-gradient-to-r from-premium-blue/80 to-premium-purple/80 border border-premium-blue/50 text-white font-light text-sm sm:text-base tracking-wide backdrop-blur-md overflow-hidden transition-all duration-700 hover:border-premium-blue/70 hover:shadow-lg hover:shadow-premium-blue/20"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-premium-blue/20 to-premium-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <span className="relative z-10 flex items-center gap-2">
              Start Your Journey
              <svg className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
