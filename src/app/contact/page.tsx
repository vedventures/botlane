'use client'

import { motion } from 'framer-motion'
import Navbar from '../../components/Navbar'

export default function Contact() {
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

  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email Us",
      description: "Get in touch for project inquiries",
      contact: "admin@botlane.io / founder@botlane.io",
      action: "Send Email"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Call Us",
      description: "Speak directly with our team",
      contact: "+91 9315195701",
      action: "Call Now"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Visit Us",
      description: "Our business address",
      contact: "30 N Gould St Ste R, Sheridan, WY 82801",
      action: "Get Directions"
    }
  ]

  return (
    <div className="min-h-screen bg-dark-bg">
      <Navbar />
      
      {/* Background Elements */}
      <div className="absolute inset-0 cyber-grid opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-premium-blue/5 to-transparent" />
      
      <div className="relative z-10 pt-40 sm:pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-16"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-tight text-white mb-4">
                <span className="text-white">Get In </span>
                <span className="bg-premium-gradient bg-clip-text text-transparent font-medium animate-glow">Touch</span>
              </h1>
              <div className="h-px w-24 sm:w-32 bg-gradient-to-r from-transparent via-premium-blue to-transparent mx-auto" />
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-lg sm:text-xl md:text-2xl text-premium-platinum font-light tracking-wide leading-relaxed max-w-3xl mx-auto">
                Ready to transform your marketing? Let&apos;s discuss your growth objectives.
              </p>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Methods */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <motion.div variants={itemVariants}>
                <h2 className="text-2xl font-medium text-white mb-6">
                  Choose Your <span className="text-premium-blue">Preferred Method</span>
                </h2>
              </motion.div>

              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-md border border-premium-blue/20 rounded-2xl p-6 hover:border-premium-blue/40 transition-all duration-500 hover:shadow-lg hover:shadow-premium-blue/10"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-premium-blue/20 rounded-lg flex items-center justify-center text-premium-blue group-hover:bg-premium-blue/30 transition-colors duration-300">
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-white mb-2 group-hover:text-premium-blue transition-colors duration-300">
                        {method.title}
                      </h3>
                      <p className="text-premium-silver/80 font-light text-sm mb-2">
                        {method.description}
                      </p>
                      <p className="text-premium-blue font-light text-sm mb-4">
                        {method.contact}
                      </p>
                      <motion.button
                        className="text-premium-blue text-sm font-light hover:text-premium-blue/80 transition-colors duration-300 flex items-center gap-2"
                        whileHover={{ x: 3 }}
                      >
                        {method.action}
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-md border border-premium-blue/20 rounded-2xl p-8"
            >
              <motion.div variants={itemVariants} className="mb-6">
                <h2 className="text-2xl font-medium text-white mb-2">
                  Send Us a <span className="text-premium-blue">Message</span>
                </h2>
                <p className="text-premium-silver/80 font-light">
                  Tell us about your project and we&apos;ll get back to you within 24 hours.
                </p>
              </motion.div>

              <motion.form variants={itemVariants} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-premium-silver font-light text-sm mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-slate-800/50 border border-premium-blue/30 text-white placeholder-premium-silver/50 focus:border-premium-blue/60 focus:outline-none transition-colors duration-300"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-premium-silver font-light text-sm mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-slate-800/50 border border-premium-blue/30 text-white placeholder-premium-silver/50 focus:border-premium-blue/60 focus:outline-none transition-colors duration-300"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-premium-silver font-light text-sm mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-premium-blue/30 text-white placeholder-premium-silver/50 focus:border-premium-blue/60 focus:outline-none transition-colors duration-300"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block text-premium-silver font-light text-sm mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-premium-blue/30 text-white placeholder-premium-silver/50 focus:border-premium-blue/60 focus:outline-none transition-colors duration-300"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label className="block text-premium-silver font-light text-sm mb-2">
                    Project Type
                  </label>
                  <select className="w-full px-4 py-3 bg-slate-800/50 border border-premium-blue/30 text-white focus:border-premium-blue/60 focus:outline-none transition-colors duration-300">
                    <option value="">Select a service</option>
                    <option value="marketing-audit">Marketing Audit</option>
                    <option value="automation-setup">Automation Setup</option>
                    <option value="content-engine">AI Content Engine</option>
                    <option value="custom-solution">Custom Solution</option>
                  </select>
                </div>

                <div>
                  <label className="block text-premium-silver font-light text-sm mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-premium-blue/30 text-white placeholder-premium-silver/50 focus:border-premium-blue/60 focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Tell us about your project goals and challenges..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full group relative px-6 py-4 bg-gradient-to-r from-premium-blue/80 to-premium-purple/80 border border-premium-blue/50 text-white font-light tracking-wide backdrop-blur-md overflow-hidden transition-all duration-700 hover:border-premium-blue/70 hover:shadow-lg hover:shadow-premium-blue/20"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-premium-blue/20 to-premium-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Send Message
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </span>
                </motion.button>
              </motion.form>
            </motion.div>
          </div>

          {/* FAQ Section */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="mt-16 text-center bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-md border border-premium-blue/20 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-medium text-white mb-4">
              Quick <span className="text-premium-blue">Questions?</span>
            </h3>
            <p className="text-premium-silver/80 font-light mb-6 max-w-2xl mx-auto">
              Most projects start with a discovery call to understand your goals and current challenges.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="text-premium-blue font-medium mb-2">Response Time</h4>
                <p className="text-premium-silver/80 font-light text-sm">We respond to all inquiries within 24 hours during business days.</p>
              </div>
              <div>
                <h4 className="text-premium-blue font-medium mb-2">Project Timeline</h4>
                <p className="text-premium-silver/80 font-light text-sm">Most implementations take 2-8 weeks depending on scope and complexity.</p>
              </div>
              <div>
                <h4 className="text-premium-blue font-medium mb-2">Free Consultation</h4>
                <p className="text-premium-silver/80 font-light text-sm">All initial strategy calls are complimentary with no obligation.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
