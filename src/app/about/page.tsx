'use client'

import { motion } from 'framer-motion'
import Navbar from '../../components/Navbar'

export default function About() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const stats = [
    { number: '500+', label: 'Clients Served', description: 'Businesses transformed' },
    { number: '2.3M+', label: 'Revenue Generated', description: 'For our clients' },
    { number: '98%', label: 'Success Rate', description: 'Client satisfaction' },
    { number: '24/7', label: 'Support', description: 'Always available' }
  ]

  const team = [
    {
      name: 'Shiv',
      role: 'Founder & CEO',
      bio: 'Former Google AI researcher with 10+ years in marketing automation. Led growth initiatives for Fortune 500 companies.',
      image: 'S',
      expertise: ['AI Strategy', 'Growth Hacking', 'Marketing Automation']
    },
    {
      name: '[Team Member Name]',
      role: 'Head of AI Development',
      bio: 'Ex-Tesla AI engineer specializing in machine learning applications for marketing optimization and predictive analytics.',
      image: 'TM',
      expertise: ['Machine Learning', 'Data Science', 'Predictive Analytics']
    },
    {
      name: '[Team Member Name]',
      role: 'Creative Director',
      bio: 'Award-winning designer with experience at Apple and Airbnb. Focuses on conversion-optimized design and user experience.',
      image: 'TM',
      expertise: ['UX Design', 'Conversion Optimization', 'Brand Strategy']
    }
  ]

  const values = [
    {
      title: 'Innovation First',
      description: 'We leverage cutting-edge AI technology to solve complex marketing challenges and drive unprecedented growth.',
      icon: '🚀'
    },
    {
      title: 'Data-Driven Results',
      description: 'Every decision is backed by data. We measure, analyze, and optimize continuously to ensure maximum ROI.',
      icon: '📊'
    },
    {
      title: 'Client Success',
      description: 'Your success is our success. We&apos;re committed to delivering measurable results that transform your business.',
      icon: '🎯'
    },
    {
      title: 'Transparency',
      description: 'Complete visibility into our processes, methodologies, and results. No black boxes, just clear outcomes.',
      icon: '🔍'
    }
  ]

  return (
    <div className="min-h-screen bg-dark-bg text-white">
      <Navbar />
      
      {/* Hero Section */}
      <motion.section 
        className="relative pt-20 md:pt-32 lg:pt-40 xl:pt-48 pb-20 md:pb-32 lg:pb-40 xl:pb-48 overflow-hidden min-h-screen flex items-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-premium-blue/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-premium-purple/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-premium-blue/5 rounded-full blur-lg animate-bounce" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="text-center">
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-8 lg:mb-12"
              variants={itemVariants}
            >
              <span className="bg-gradient-to-r from-white via-premium-blue to-premium-purple bg-clip-text text-transparent">
                Revolutionizing Marketing
              </span>
              <br />
              <span className="text-white">with AI Intelligence</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-premium-silver/80 font-light max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto mb-8 md:mb-12 lg:mb-16 leading-relaxed px-4"
              variants={itemVariants}
            >
              We&apos;re BotLane - a team of AI experts, growth hackers, and marketing innovators 
              dedicated to transforming how businesses connect with their customers through 
              intelligent automation and data-driven strategies.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center px-4"
              variants={itemVariants}
            >
              <button className="w-full sm:w-auto group relative px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-premium-blue to-premium-purple text-white font-medium text-base md:text-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-premium-blue/25 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-premium-blue/20 to-premium-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">Get Started Today</span>
              </button>
              <button className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 border border-premium-blue/30 text-premium-blue hover:bg-premium-blue/10 transition-all duration-300 rounded-xl text-base md:text-lg">
                Watch Our Story
              </button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center group"
                variants={itemVariants}
              >
                <div className="relative">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-premium-blue to-premium-purple bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-sm sm:text-base md:text-lg font-medium text-white mb-1">{stat.label}</div>
                  <div className="text-xs sm:text-sm text-premium-silver/70">{stat.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Our Story Section */}
      <motion.section 
        className="py-12 md:py-16 lg:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8">
                Our <span className="bg-gradient-to-r from-premium-blue to-premium-purple bg-clip-text text-transparent">Story</span>
              </h2>
              <div className="space-y-4 md:space-y-6 text-premium-silver/90 leading-relaxed">
                <p className="text-base md:text-lg">
                  Founded in 2021 by a team of former Google and Tesla engineers, BotLane emerged from a simple observation: 
                  most businesses were drowning in data but starving for insights.
                </p>
                <p className="text-base md:text-lg">
                  We saw companies spending millions on marketing campaigns without truly understanding their customers&apos; 
                  journey or optimizing for real conversion metrics. Traditional marketing agencies were stuck in outdated 
                  methodologies, while the AI revolution was creating unprecedented opportunities.
                </p>
                <p className="text-base md:text-lg">
                  That&apos;s when we decided to bridge the gap. BotLane was born to democratize AI-powered marketing, 
                  making sophisticated growth strategies accessible to businesses of all sizes.
                </p>
                <p className="text-base md:text-lg text-premium-blue font-medium">
                  Today, we&apos;ve helped over 500 companies increase their revenue by an average of 340% through 
                  intelligent automation and data-driven optimization.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="relative"
              variants={itemVariants}
            >
              <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/60 backdrop-blur-sm border border-premium-blue/10 rounded-3xl p-8 relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-premium-blue/20 rounded-full blur-xl" />
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-premium-purple/20 rounded-full blur-xl" />
                
                <div className="relative z-10">
                  <div className="text-center mb-6">
                    <div className="text-6xl font-bold bg-gradient-to-r from-premium-blue to-premium-purple bg-clip-text text-transparent">
                      2021
                    </div>
                    <div className="text-premium-silver/70">Founded</div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-premium-blue rounded-full"></div>
                      <span className="text-premium-silver/90">First AI marketing automation platform launched</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-premium-purple rounded-full"></div>
                      <span className="text-premium-silver/90">Reached 100 clients in first year</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-premium-blue rounded-full"></div>
                      <span className="text-premium-silver/90">Expanded to enterprise solutions</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-premium-purple rounded-full"></div>
                      <span className="text-premium-silver/90">500+ successful transformations</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section 
        className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-slate-900/30 to-slate-800/20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12 md:mb-16" variants={itemVariants}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
              Meet Our <span className="bg-gradient-to-r from-premium-blue to-premium-purple bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-lg md:text-xl text-premium-silver/80 max-w-3xl mx-auto px-4">
              World-class experts from leading tech companies, united by a passion for innovation and client success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {team.map((member, index) => (
              <motion.div 
                key={index}
                className="group relative bg-gradient-to-br from-slate-800/40 to-slate-900/60 backdrop-blur-sm border border-premium-blue/10 hover:border-premium-blue/30 rounded-3xl p-6 md:p-8 transition-all duration-500 hover:shadow-lg hover:shadow-premium-blue/10"
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-premium-blue/5 to-premium-purple/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  {/* Avatar */}
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-premium-blue to-premium-purple rounded-full flex items-center justify-center text-white font-bold text-xl md:text-2xl mb-4 md:mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {member.image}
                  </div>

                  {/* Info */}
                  <div className="text-center mb-4 md:mb-6">
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-2 group-hover:text-premium-blue transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-sm md:text-base text-premium-blue/80 font-medium mb-3 md:mb-4">{member.role}</p>
                    <p className="text-premium-silver/80 text-xs md:text-sm leading-relaxed">{member.bio}</p>
                  </div>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 bg-premium-blue/20 text-premium-blue text-xs rounded-full border border-premium-blue/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section 
        className="py-12 md:py-16 lg:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12 md:mb-16" variants={itemVariants}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
              Our <span className="bg-gradient-to-r from-premium-blue to-premium-purple bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-lg md:text-xl text-premium-silver/80 max-w-3xl mx-auto px-4">
              The principles that guide everything we do and drive our commitment to excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="group relative bg-gradient-to-br from-slate-800/40 to-slate-900/60 backdrop-blur-sm border border-premium-blue/10 hover:border-premium-blue/30 rounded-3xl p-6 md:p-8 transition-all duration-500"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-premium-blue/5 to-premium-purple/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="text-3xl md:text-4xl mb-3 md:mb-4">{value.icon}</div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4 group-hover:text-premium-blue transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-sm md:text-base text-premium-silver/80 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-premium-blue/10 to-premium-purple/10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
              Ready to Transform Your <span className="bg-gradient-to-r from-premium-blue to-premium-purple bg-clip-text text-transparent">Marketing?</span>
            </h2>
            <p className="text-lg md:text-xl text-premium-silver/80 mb-8 md:mb-10 leading-relaxed px-4">
              Join 500+ companies that have revolutionized their growth with BotLane&apos;s AI-powered solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center px-4">
              <button className="w-full sm:w-auto group relative px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-premium-blue to-premium-purple text-white font-medium text-base md:text-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-premium-blue/25 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-premium-blue/20 to-premium-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">Start Your Transformation</span>
              </button>
              <button className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 border border-premium-blue/30 text-premium-blue hover:bg-premium-blue/10 transition-all duration-300 rounded-xl text-base md:text-lg">
                Schedule a Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </motion.section>

    </div>
  )
}
