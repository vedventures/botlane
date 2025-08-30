'use client'

import { motion } from 'framer-motion'

export default function Pricing() {
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

  const pricingTiers = [
    {
      id: 1,
      name: "Starter",
      description: "Perfect for growing businesses ready to scale",
      price: "From $2,500",
      period: "/month",
      popular: false,
      features: [
        "AI-driven campaign optimization",
        "Multi-channel automation setup",
        "Performance analytics dashboard",
        "Monthly strategy consultation",
        "Email & chat support"
      ],
      cta: "Get Started",
      highlight: false
    },
    {
      id: 2,
      name: "Pro",
      description: "Advanced infrastructure for serious growth",
      price: "From $5,000",
      period: "/month",
      popular: true,
      features: [
        "Everything in Starter",
        "Custom AI model training",
        "Advanced attribution modeling",
        "Bi-weekly strategy sessions",
        "Dedicated account manager",
        "Priority support & implementation"
      ],
      cta: "Most Popular",
      highlight: true
    },
    {
      id: 3,
      name: "Scale",
      description: "Enterprise-grade marketing intelligence",
      price: "Custom Quote",
      period: "",
      popular: false,
      features: [
        "Everything in Pro",
        "White-label infrastructure",
        "Custom integrations & APIs",
        "Weekly executive briefings",
        "24/7 dedicated support team",
        "SLA guarantees & compliance"
      ],
      cta: "Get Custom Proposal",
      highlight: false
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
              <span className="bg-premium-gradient bg-clip-text text-transparent font-medium animate-glow">Transparent</span>
              <span className="text-white">. </span>
              <span className="bg-premium-gradient bg-clip-text text-transparent font-medium animate-glow">Predictable</span>
              <span className="text-white">. </span>
              <span className="bg-premium-gradient bg-clip-text text-transparent font-medium animate-glow">Outcome-based</span>
              <span className="text-white">.</span>
            </h2>
            <div className="h-px w-24 sm:w-28 md:w-32 bg-gradient-to-r from-transparent via-premium-blue to-transparent mx-auto" />
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-base sm:text-lg lg:text-xl text-premium-platinum font-light tracking-wide leading-relaxed max-w-3xl mx-auto px-2">
              Choose the intelligence infrastructure that scales with your ambition
            </p>
          </motion.div>
        </motion.div>

        {/* Pricing Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              variants={cardVariants}
              className={`group relative ${tier.highlight ? 'lg:scale-105' : ''}`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-premium-blue to-premium-purple px-4 py-1 rounded-full border border-premium-blue/50">
                    <span className="text-white text-xs sm:text-sm font-medium">Most Popular</span>
                  </div>
                </div>
              )}

              {/* Pricing Card */}
              <div className={`bg-gradient-to-br from-slate-900/80 to-slate-800/60 backdrop-blur-sm border rounded-xl p-4 sm:p-6 lg:p-8 transition-all duration-300 h-full flex flex-col ${
                tier.highlight 
                  ? 'border-premium-blue/50 hover:border-premium-blue/70 shadow-lg shadow-premium-blue/10' 
                  : 'border-slate-700/50 hover:border-blue-500/30 group-hover:shadow-lg group-hover:shadow-blue-500/10'
              } group-hover:-translate-y-1`}>
                
                {/* Tier Header */}
                <div className="text-center mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm mb-4">
                    {tier.description}
                  </p>
                  
                  {/* Price */}
                  <div className="mb-4">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${
                        tier.highlight ? 'text-premium-blue' : 'text-white'
                      }`}>
                        {tier.price}
                      </span>
                      {tier.period && (
                        <span className="text-slate-400 text-sm sm:text-base">
                          {tier.period}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="flex-1 mb-6 sm:mb-8">
                  <ul className="space-y-3 sm:space-y-4">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-1">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-premium-blue" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <motion.button
                  className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-medium text-sm sm:text-base transition-all duration-300 ${
                    tier.highlight
                      ? 'bg-gradient-to-r from-premium-blue to-premium-purple text-white hover:shadow-lg hover:shadow-premium-blue/20 border border-premium-blue/50'
                      : 'bg-slate-800/50 text-white hover:bg-slate-700/50 border border-slate-600/50 hover:border-slate-500/50'
                  }`}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {tier.cta}
                </motion.button>

                {/* Hover Glow Effect */}
                <motion.div 
                  className={`absolute inset-0 rounded-xl border opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    tier.highlight ? 'border-premium-blue/30' : 'border-premium-blue/20'
                  }`}
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

        {/* Bottom CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-8 sm:mt-12 lg:mt-16"
        >
          <p className="text-sm sm:text-base lg:text-lg text-premium-silver font-light mb-4 sm:mb-6">
            Need something different? Let&apos;s build a custom solution.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <motion.button
              className="group relative px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-gradient-to-r from-premium-blue/80 to-premium-purple/80 border border-premium-blue/50 text-white font-light text-sm sm:text-base tracking-wide backdrop-blur-md overflow-hidden transition-all duration-700 hover:border-premium-blue/70 hover:shadow-lg hover:shadow-premium-blue/20"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-premium-blue/20 to-premium-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <span className="relative z-10 flex items-center gap-2">
                See Full Pricing
                <svg className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </motion.button>
            
            <motion.button
              className="group relative px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-transparent border border-slate-600/50 text-white font-light text-sm sm:text-base tracking-wide backdrop-blur-md overflow-hidden transition-all duration-700 hover:border-premium-blue/50 hover:bg-slate-800/30"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Custom Proposal
                <svg className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
