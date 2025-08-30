'use client'

import { motion } from 'framer-motion'

const ClientWins = () => {
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

  const caseResults = [
    {
      stat: "+38%",
      description: "qualified demos booked using AI SDR",
      category: "Lead Generation",
      gradient: "from-premium-blue/20 to-premium-purple/10"
    },
    {
      stat: "-22%",
      description: "CPA via predictive bidding",
      category: "Cost Optimization",
      gradient: "from-premium-purple/20 to-accent-teal/10"
    },
    {
      stat: "5x",
      description: "faster publishing with AI Content Engine",
      category: "Content Automation",
      gradient: "from-accent-teal/20 to-premium-blue/10"
    }
  ]

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-dark-bg to-dark-surface overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle Radial Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(99, 102, 241, 0.2) 1px, transparent 0)`,
            backgroundSize: '80px 80px'
          }} />
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-32 right-20 w-24 h-24 bg-premium-purple/5 rounded-full blur-2xl" />
        <div className="absolute bottom-32 left-20 w-32 h-32 bg-accent-teal/5 rounded-full blur-2xl" />
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
              Outcomes We've <span className="text-premium-blue">Delivered</span>
            </h2>
            <div className="h-px w-24 sm:w-28 md:w-32 bg-gradient-to-r from-transparent via-premium-blue to-transparent mx-auto" />
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-lg sm:text-xl md:text-2xl text-premium-silver font-light tracking-wide max-w-3xl mx-auto px-4">
              Real results from real clients who trusted us with their growth
            </p>
          </motion.div>
        </motion.div>

        {/* Case Results Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8"
        >
          {caseResults.map((result, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <motion.div
                className={`relative h-full p-6 sm:p-8 bg-gradient-to-br ${result.gradient} border border-premium-blue/20 backdrop-blur-sm transition-all duration-700 hover:border-premium-blue/40 hover:bg-opacity-80 overflow-hidden flex flex-col items-center text-center`}
                whileHover={{ 
                  y: -8, 
                  scale: 1.03,
                  rotateX: 3,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Animated Background Glow */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-premium-blue/8 via-transparent to-premium-purple/8 opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ 
                    scale: 1.2, 
                    opacity: 1,
                    transition: { duration: 0.6, ease: "easeOut" }
                  }}
                />

                {/* Floating Particles Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-premium-blue/30 rounded-full"
                      style={{
                        left: `${15 + Math.random() * 70}%`,
                        top: `${15 + Math.random() * 70}%`,
                      }}
                      animate={{
                        y: [0, -12, 0],
                        opacity: [0.3, 0.7, 0.3],
                        scale: [1, 1.3, 1],
                      }}
                      transition={{
                        duration: 2.5 + Math.random(),
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}
                </div>

                {/* Category Badge */}
                <motion.div 
                  className="relative z-10 mb-3 sm:mb-4 px-2 sm:px-3 py-1 bg-premium-blue/10 border border-premium-blue/30 rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-xs sm:text-xs font-medium text-premium-blue tracking-wide">
                    {result.category}
                  </span>
                </motion.div>

                {/* Main Statistic */}
                <motion.div 
                  className="relative z-10 mb-3 sm:mb-4"
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white group-hover:text-premium-platinum transition-colors duration-300">
                    {result.stat}
                  </div>
                </motion.div>

                {/* Description */}
                <motion.p 
                  className="relative z-10 text-sm sm:text-base text-cool-gray font-light leading-relaxed group-hover:text-premium-silver transition-colors duration-300"
                  whileHover={{ y: -2 }}
                  transition={{ delay: 0.1 }}
                >
                  {result.description}
                </motion.p>

                {/* Enhanced Border Glow Effect */}
                <motion.div 
                  className="absolute inset-0 rounded-lg border border-premium-blue/0 group-hover:border-premium-blue/30"
                  whileHover={{
                    boxShadow: [
                      "0 0 0 rgba(99, 102, 241, 0)",
                      "0 0 25px rgba(99, 102, 241, 0.1)",
                      "0 0 50px rgba(99, 102, 241, 0.05)"
                    ],
                    transition: { duration: 0.6 }
                  }}
                />

                {/* Subtle Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-premium-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-12 sm:mt-14 md:mt-16"
        >
          <motion.div variants={itemVariants}>
            <p className="text-base sm:text-lg text-premium-silver/80 font-light max-w-2xl mx-auto px-4">
              These results represent just a fraction of the transformations we've delivered. 
              <span className="text-premium-blue"> Your success story could be next.</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ClientWins
