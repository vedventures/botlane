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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight text-white mb-4">
              <span className="text-white">What We </span>
              <span className="bg-premium-gradient bg-clip-text text-transparent font-medium animate-glow">Offer</span>
            </h2>
            <div className="h-px w-24 sm:w-28 md:w-32 bg-gradient-to-r from-transparent via-premium-blue to-transparent mx-auto" />
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-lg sm:text-xl md:text-2xl text-premium-platinum font-light tracking-wide leading-relaxed max-w-3xl mx-auto px-4">
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
                className="relative h-full bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-md border border-premium-blue/20 rounded-2xl p-6 sm:p-8 hover:border-premium-blue/40 transition-all duration-500 hover:shadow-lg hover:shadow-premium-blue/10 flex flex-col"
                whileHover={{ y: -8 }}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-premium-blue/5 to-premium-purple/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex flex-col h-full">
                  {/* Service Name & Subtitle */}
                  <div className="mb-4">
                    <h3 className="text-xl sm:text-2xl font-medium text-white mb-2 group-hover:text-premium-blue transition-colors duration-300">
                      {service.name}
                    </h3>
                    <p className="text-premium-blue/80 font-light text-sm tracking-wide">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-premium-silver/80 font-light leading-relaxed mb-6 flex-grow text-sm sm:text-base">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-premium-blue mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-premium-silver/90 font-light text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
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
              className="group relative w-full sm:w-auto px-8 sm:px-10 md:px-12 py-4 sm:py-5 bg-gradient-to-r from-premium-blue to-premium-purple border border-premium-blue/50 text-white font-medium text-sm sm:text-base tracking-wide rounded-lg hover:border-premium-blue/70 transition-all duration-300"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center gap-2">
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
