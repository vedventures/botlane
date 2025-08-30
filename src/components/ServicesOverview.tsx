'use client'

import { motion } from 'framer-motion'

const ServicesOverview = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  }

  const services = [
    {
      name: "GrowthStack",
      subtitle: "Growth Infrastructure",
      description: "Comprehensive AI-driven growth systems that scale your customer acquisition and optimize conversion funnels across all touchpoints.",
      features: ["Lead Generation AI", "Conversion Optimization", "Growth Analytics", "A/B Testing Suite"],
      gradient: "from-premium-blue/20 to-premium-purple/10"
    },
    {
      name: "FlowStack",
      subtitle: "Customer Journey Automations",
      description: "Intelligent automation that orchestrates personalized customer experiences from first touch to lifetime value maximization.",
      features: ["Journey Mapping", "Behavioral Triggers", "Personalization Engine", "Retention Automation"],
      gradient: "from-premium-purple/20 to-accent-teal/10"
    },
    {
      name: "ScaleStack",
      subtitle: "Performance Acceleration",
      description: "Advanced performance optimization and scaling infrastructure that amplifies your marketing ROI through data-driven insights.",
      features: ["Performance Analytics", "ROI Optimization", "Scaling Automation", "Predictive Modeling"],
      gradient: "from-accent-teal/20 to-premium-blue/10"
    }
  ]

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-dark-surface to-dark-bg overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-premium-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-premium-purple/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4">
              What We <span className="text-premium-blue">Offer</span>
            </h2>
            <div className="h-px w-24 sm:w-28 md:w-32 bg-gradient-to-r from-transparent via-premium-blue to-transparent mx-auto" />
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-lg sm:text-xl md:text-2xl text-premium-silver font-light tracking-wide max-w-3xl mx-auto px-4">
              Three comprehensive service stacks designed to transform your marketing infrastructure
            </p>
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-14 md:mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative h-full"
            >
              <motion.div
                className={`relative h-full p-6 sm:p-8 bg-gradient-to-br ${service.gradient} border border-premium-blue/20 backdrop-blur-sm transition-all duration-700 hover:border-premium-blue/40 hover:bg-opacity-80 overflow-hidden flex flex-col`}
                whileHover={{ 
                  y: -6, 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                {/* Animated Background */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-premium-blue/5 via-transparent to-premium-purple/5 opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0.8 }}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.6, ease: "easeOut" }
                  }}
                />

                {/* Service Name */}
                <motion.div 
                  className="relative z-10 mb-3"
                  whileHover={{ x: 2 }}
                >
                  <h3 className="text-xl sm:text-2xl font-medium text-white group-hover:text-premium-platinum transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-premium-blue font-light text-xs sm:text-sm tracking-wide">
                    {service.subtitle}
                  </p>
                </motion.div>

                {/* Description */}
                <motion.p 
                  className="relative z-10 text-sm sm:text-base text-cool-gray font-light leading-relaxed mb-4 sm:mb-6 group-hover:text-premium-silver transition-colors duration-300 flex-grow"
                  whileHover={{ x: 4 }}
                  transition={{ delay: 0.1 }}
                >
                  {service.description}
                </motion.p>

                {/* Features List */}
                <motion.div 
                  className="relative z-10 space-y-2 mt-auto"
                  whileHover={{ x: 6 }}
                  transition={{ delay: 0.2 }}
                >
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-xs sm:text-sm">
                      <div className="w-1.5 h-1.5 bg-premium-blue/60 rounded-full mr-3 group-hover:bg-premium-blue transition-colors duration-300" />
                      <span className="text-premium-silver/80 group-hover:text-premium-silver transition-colors duration-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </motion.div>

                {/* Hover Glow Effect */}
                <motion.div 
                  className="absolute inset-0 rounded-lg border border-premium-blue/0 group-hover:border-premium-blue/20"
                  whileHover={{
                    boxShadow: [
                      "0 0 0 rgba(99, 102, 241, 0)",
                      "0 0 30px rgba(99, 102, 241, 0.1)",
                      "0 0 60px rgba(99, 102, 241, 0.05)"
                    ],
                    transition: { duration: 0.6 }
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <motion.div variants={itemVariants}>
            <motion.button
              className="group relative w-full sm:w-auto px-8 sm:px-10 md:px-12 py-4 sm:py-5 bg-gradient-to-r from-slate-900/80 to-slate-800/80 border border-slate-700/50 text-white font-light text-sm sm:text-base tracking-wide backdrop-blur-md overflow-hidden transition-all duration-700 hover:border-slate-600/70 hover:shadow-lg hover:shadow-slate-900/20"
              whileHover={{ scale: 1.01, y: -1 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-slate-800/20 to-slate-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <span className="relative z-10 flex items-center gap-2">
                Explore Services
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesOverview
