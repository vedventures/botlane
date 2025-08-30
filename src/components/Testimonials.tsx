'use client'

import { motion } from 'framer-motion'

export default function Testimonials() {
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

  const testimonials = [
    {
      id: 1,
      quote: "BotLane transformed our marketing infrastructure completely. Their AI-driven approach increased our conversion rates by 340% in just 8 weeks.",
      name: "Sarah Chen",
      title: "VP of Growth",
      company: "TechFlow Dynamics",
      logo: (
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg flex items-center justify-center border border-blue-500/30">
          <span className="text-blue-400 font-bold text-lg">TD</span>
        </div>
      )
    },
    {
      id: 2,
      quote: "The strategic depth and execution quality exceeded our expectations. BotLane doesn&apos;t just deliver campaigns—they architect growth systems.",
      name: "Marcus Rodriguez",
      title: "Chief Marketing Officer",
      company: "Nexus Ventures",
      logo: (
        <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-lg flex items-center justify-center border border-purple-500/30">
          <span className="text-purple-400 font-bold text-lg">NV</span>
        </div>
      )
    },
    {
      id: 3,
      quote: "Working with BotLane feels like having a world-class marketing team embedded in your company. Their intelligence infrastructure is unmatched.",
      name: "Dr. Emily Watson",
      title: "Founder & CEO",
      company: "Quantum Labs",
      logo: (
        <div className="w-12 h-12 bg-gradient-to-br from-teal-500/20 to-blue-600/20 rounded-lg flex items-center justify-center border border-teal-500/30">
          <span className="text-teal-400 font-bold text-lg">QL</span>
        </div>
      )
    }
  ]

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-b from-dark-bg to-dark-surface overflow-hidden">
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
        <div className="absolute top-20 right-10 w-20 h-20 bg-premium-purple/5 rounded-full blur-2xl" />
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-premium-blue/5 rounded-full blur-2xl" />
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-accent-teal/5 rounded-full blur-xl" />
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
              <span className="text-white">What Our </span>
              <span className="bg-premium-gradient bg-clip-text text-transparent font-medium animate-glow">Partners</span>
              <span className="text-white"> Say</span>
            </h2>
            <div className="h-px w-24 sm:w-28 md:w-32 bg-gradient-to-r from-transparent via-premium-blue to-transparent mx-auto" />
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-base sm:text-lg lg:text-xl text-premium-platinum font-light tracking-wide leading-relaxed max-w-3xl mx-auto px-2">
              Trusted by forward-thinking companies who demand excellence
            </p>
          </motion.div>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              className="group relative"
            >
              {/* Testimonial Card */}
              <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 sm:p-6 lg:p-8 hover:border-blue-500/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/10 group-hover:-translate-y-1 h-full flex flex-col">
                
                {/* Quote Icon */}
                <div className="mb-4 sm:mb-6">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-premium-blue/60" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>

                {/* Quote Text */}
                <blockquote className="flex-1 mb-4 sm:mb-6">
                  <p className="text-slate-200 text-xs sm:text-sm lg:text-base leading-relaxed font-light italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-3 sm:gap-4">
                  {/* Logo/Avatar */}
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg flex items-center justify-center border border-blue-500/30">
                      <span className="text-blue-400 font-bold text-sm sm:text-lg">{testimonial.company.split(' ').map(word => word[0]).join('').slice(0, 2)}</span>
                    </div>
                  </div>
                  
                  {/* Name & Title */}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-semibold text-xs sm:text-sm lg:text-base mb-1 truncate">
                      {testimonial.name}
                    </h4>
                    <p className="text-slate-400 text-xs leading-tight">
                      {testimonial.title}
                    </p>
                    <p className="text-premium-blue text-xs font-medium truncate">
                      {testimonial.company}
                    </p>
                  </div>
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
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Trust Indicators */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-6 sm:mt-8 lg:mt-12"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 lg:gap-8 text-slate-400">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-premium-blue" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-xs sm:text-sm font-medium">Verified Reviews</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-premium-blue" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-xs sm:text-sm font-medium">Enterprise Trusted</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-premium-blue" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-xs sm:text-sm font-medium">Results Guaranteed</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
