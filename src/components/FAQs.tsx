'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const faqVariants = {
    hidden: { 
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const faqs = [
    {
      id: 1,
      question: "How quickly can we see results and what's the typical timeline?",
      answer: "Most clients see initial improvements within 30-45 days, with significant results by month 3. Our phased approach includes: Week 1-2: Infrastructure setup and integration, Month 1: Initial optimization and data collection, Month 2-3: AI model training and refinement, Month 4+: Scaled performance and continuous optimization. We provide weekly progress reports so you can track improvements in real-time."
    },
    {
      id: 2,
      question: "What technology stack do you use and how does it integrate with our existing systems?",
      answer: "We use enterprise-grade, cloud-native technologies including advanced AI/ML frameworks, real-time analytics platforms, and secure API integrations. Our infrastructure is built to seamlessly connect with popular CRMs (Salesforce, HubSpot), marketing platforms (Google Ads, Facebook, LinkedIn), analytics tools (Google Analytics, Mixpanel), and e-commerce systems (Shopify, WooCommerce). We conduct a technical audit before implementation to ensure smooth integration with your existing tech stack."
    },
    {
      id: 3,
      question: "Who owns the data, models, and infrastructure we build together?",
      answer: "You retain full ownership of your data, custom AI models, and any proprietary infrastructure we develop for your business. We provide complete data portability and transparent documentation of all systems. While we maintain intellectual property rights to our core platform and methodologies, everything specifically built for your use case belongs to you. We also offer white-label options for agencies and enterprises who want to resell our infrastructure."
    },
    {
      id: 4,
      question: "What level of support and training do you provide?",
      answer: "We provide comprehensive support including: Dedicated account manager for Pro and Scale plans, 24/7 technical support for Scale plans, Weekly strategy sessions and performance reviews, Complete team training on platform usage and optimization, Real-time monitoring and proactive issue resolution, and Detailed documentation and video tutorials. Our goal is to make your team self-sufficient while providing ongoing strategic guidance."
    },
    {
      id: 5,
      question: "How do you measure and guarantee ROI on our investment?",
      answer: "We establish clear KPIs and ROI benchmarks before starting, typically targeting 3-5x return within 6 months. Our measurement framework includes: Revenue attribution modeling across all channels, Customer lifetime value optimization, Cost per acquisition reduction tracking, and Conversion rate improvements at every funnel stage. We provide transparent reporting with real-time dashboards and offer performance guarantees for Scale plans, including refund policies if agreed-upon benchmarks aren't met."
    },
    {
      id: 6,
      question: "What makes your approach different from other marketing agencies?",
      answer: "Unlike traditional agencies, we build intelligent infrastructure that becomes a permanent asset for your business. Our AI-native approach means continuous learning and optimization without manual intervention. We focus on systems that scale automatically, provide full transparency into our methods and results, and transfer complete ownership of custom-built solutions to you. This isn't just campaign management—it's building your competitive advantage in marketing technology."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

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

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <span className="bg-premium-gradient bg-clip-text text-transparent font-medium animate-glow">Got questions?</span>
            </h2>
            <div className="h-px w-24 sm:w-28 md:w-32 bg-gradient-to-r from-transparent via-premium-blue to-transparent mx-auto" />
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-base sm:text-lg lg:text-xl text-premium-platinum font-light tracking-wide leading-relaxed max-w-2xl mx-auto px-2">
              We&apos;ve answered the most common questions about working with us
            </p>
          </motion.div>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-4 sm:space-y-6"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              variants={faqVariants}
              className="group"
            >
              <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden transition-all duration-300 hover:border-premium-blue/30 hover:shadow-lg hover:shadow-premium-blue/10">
                {/* Question */}
                <motion.button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6 text-left flex items-center justify-between gap-4 transition-all duration-300 hover:bg-slate-800/30"
                  whileHover={{ x: 4 }}
                >
                  <h3 className="text-sm sm:text-base lg:text-lg font-medium text-white leading-relaxed pr-2">
                    {faq.question}
                  </h3>
                  
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex-shrink-0"
                  >
                    <svg 
                      className="w-5 h-5 sm:w-6 sm:h-6 text-premium-blue" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </motion.button>

                {/* Answer */}
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6">
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-600/50 to-transparent mb-4 sm:mb-6" />
                    <p className="text-xs sm:text-sm lg:text-base text-slate-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>

                {/* Hover Glow Effect */}
                <motion.div 
                  className="absolute inset-0 rounded-xl border border-premium-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
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
            Still have questions? Let&apos;s talk about your specific needs.
          </p>
          <motion.button
            className="group relative px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-gradient-to-r from-premium-blue/80 to-premium-purple/80 border border-premium-blue/50 text-white font-light text-sm sm:text-base tracking-wide backdrop-blur-md overflow-hidden transition-all duration-700 hover:border-premium-blue/70 hover:shadow-lg hover:shadow-premium-blue/20"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-premium-blue/20 to-premium-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <span className="relative z-10 flex items-center gap-2">
              Schedule a Call
              <svg className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
