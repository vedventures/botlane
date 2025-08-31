'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'Services', href: '/#services', hasMegaMenu: true },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ]

  const serviceStacks = [
    {
      name: "GrowthStack",
      subtitle: "Growth Infrastructure",
      description: "AI-driven growth systems that scale customer acquisition and optimize conversion funnels.",
      features: ["Lead Generation AI", "Conversion Optimization", "Growth Analytics", "A/B Testing Suite"],
      href: "/#services"
    },
    {
      name: "FlowStack", 
      subtitle: "Customer Journey Automations",
      description: "Intelligent automation that orchestrates personalized customer experiences.",
      features: ["Journey Mapping", "Behavioral Triggers", "Personalization Engine", "Retention Automation"],
      href: "/#services"
    },
    {
      name: "ScaleStack",
      subtitle: "Performance Acceleration", 
      description: "Advanced performance optimization and scaling infrastructure for maximum ROI.",
      features: ["Performance Analytics", "ROI Optimization", "Scaling Automation", "Predictive Modeling"],
      href: "/#services"
    }
  ]

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="absolute top-0 left-0 right-0 z-50 px-6 py-6"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center cursor-pointer"
          >
            <Image 
              src="/botlogo.svg" 
              alt="BotLane Logo" 
              width={40}
              height={40}
              className="h-10 w-auto"
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation - Centered */}
        <div className="hidden md:flex items-center justify-center flex-1">
          <div className="flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={item.name} className="relative">
                {item.hasMegaMenu ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsMegaMenuOpen(true)}
                    onMouseLeave={() => {
                      setTimeout(() => setIsMegaMenuOpen(false), 100)
                    }}
                  >
                    <motion.span
                      className="text-gray-300 hover:text-premium-blue transition-colors duration-300 font-medium cursor-pointer flex items-center gap-1"
                      whileHover={{ y: -2 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index + 0.5 }}
                    >
                      {item.name}
                      <svg className="w-4 h-4 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.span>
                  </div>
                ) : (
                  <Link href={item.href}>
                    <motion.span
                      className="text-gray-300 hover:text-premium-blue transition-colors duration-300 font-medium cursor-pointer"
                      whileHover={{ y: -2 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index + 0.5 }}
                    >
                      {item.name}
                    </motion.span>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button - Hidden on mobile, visible on desktop */}
        <motion.button
          className="hidden md:block px-6 py-3 bg-gradient-to-r from-premium-blue to-premium-purple border border-premium-blue/50 text-white font-medium rounded-lg hover:border-premium-blue/70 transition-all duration-300 text-sm whitespace-nowrap"
          whileHover={{ scale: 1.02, y: -1 }}
          whileTap={{ scale: 0.98 }}
        >
          Get Started
        </motion.button>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white mt-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white mt-1 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`} />
          </div>
        </motion.button>
      </div>

      {/* Comprehensive Mega Menu */}
      <motion.div
        initial={false}
        animate={{ 
          opacity: isMegaMenuOpen ? 1 : 0,
          y: isMegaMenuOpen ? 0 : -10,
          pointerEvents: isMegaMenuOpen ? 'auto' : 'none'
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="absolute top-full left-0 right-0 mt-0 hidden md:block z-50"
        onMouseEnter={() => setIsMegaMenuOpen(true)}
        onMouseLeave={() => setIsMegaMenuOpen(false)}
      >
        <div className="max-w-7xl mx-auto px-6 pt-2">
          <div className="relative bg-gradient-to-br from-dark-bg via-slate-900/95 to-slate-950/95 backdrop-blur-xl border border-premium-blue/20 rounded-3xl shadow-2xl overflow-hidden">
            {/* Animated Background Grid */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)`,
                backgroundSize: '30px 30px'
              }} />
            </div>

            {/* Floating Elements */}
            <div className="absolute top-4 left-8 w-12 h-12 bg-premium-blue/10 rounded-full blur-xl" />
            <div className="absolute bottom-4 right-8 w-16 h-16 bg-premium-purple/10 rounded-full blur-xl" />
            
            <div className="relative z-10 p-10">
              {/* Header Section */}
              <motion.div 
                className="text-center mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <h2 className="text-2xl font-bold bg-gradient-to-r from-white via-premium-blue to-premium-purple bg-clip-text text-transparent mb-3">
                  Our Service Stacks
                </h2>
                <p className="text-premium-silver/80 font-light max-w-2xl mx-auto">
                  Comprehensive AI-driven solutions designed to accelerate your growth and optimize every aspect of your marketing infrastructure.
                </p>
              </motion.div>

              {/* Service Cards Grid */}
              <div className="grid grid-cols-3 gap-8 mb-8">
                {serviceStacks.map((service, index) => (
                  <Link key={service.name} href={service.href}>
                    <motion.div
                      className="group relative h-full bg-gradient-to-br from-slate-800/40 to-slate-900/60 backdrop-blur-sm border border-premium-blue/10 hover:border-premium-blue/30 rounded-2xl p-8 transition-all duration-500 hover:shadow-lg hover:shadow-premium-blue/10 cursor-pointer overflow-hidden"
                      whileHover={{ y: -8, scale: 1.02 }}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.15 + 0.2 }}
                    >
                      {/* Card Background Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-premium-blue/5 to-premium-purple/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative z-10">
                        {/* Service Icon */}
                        <div className="mb-6">
                          <div className="w-12 h-12 bg-gradient-to-br from-premium-blue/20 to-premium-purple/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <div className="w-6 h-6 bg-premium-blue rounded-md"></div>
                          </div>
                        </div>

                        {/* Service Name & Subtitle */}
                        <div className="mb-6">
                          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-premium-blue transition-colors duration-300">
                            {service.name}
                          </h3>
                          <p className="text-premium-blue/80 font-light text-sm tracking-wide">
                            {service.subtitle}
                          </p>
                        </div>

                        {/* Description */}
                        <p className="text-premium-silver/80 font-light leading-relaxed mb-6 text-sm">
                          {service.description}
                        </p>

                        {/* All Features List */}
                        <div className="space-y-3 mb-6">
                          {service.features.map((feature, featureIndex) => (
                            <motion.div 
                              key={featureIndex} 
                              className="flex items-start gap-3"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.15 + featureIndex * 0.1 + 0.4 }}
                            >
                              <svg className="w-4 h-4 text-premium-blue mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              <span className="text-premium-silver/90 font-light text-sm">
                                {feature}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                        
                        {/* CTA */}
                        <div className="pt-4 border-t border-premium-blue/10">
                          <div className="flex items-center justify-between">
                            <span className="text-premium-blue text-sm font-medium group-hover:text-premium-purple transition-colors duration-300">
                              Explore {service.name}
                            </span>
                            <svg className="w-4 h-4 text-premium-blue group-hover:text-premium-purple group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>

              {/* Bottom CTA Section */}
              <motion.div 
                className="text-center pt-8 border-t border-slate-800/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <p className="text-premium-silver/70 text-sm mb-4">
                  Ready to transform your marketing infrastructure?
                </p>
                <motion.button
                  className="group px-8 py-3 bg-gradient-to-r from-premium-blue to-premium-purple border border-premium-blue/50 text-white font-medium rounded-lg hover:border-premium-blue/70 transition-all duration-300 text-sm"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center gap-2">
                    Schedule Consultation
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={false}
        animate={{ 
          opacity: isMenuOpen ? 1 : 0,
          pointerEvents: isMenuOpen ? 'auto' : 'none'
        }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-40 md:hidden"
        onClick={() => setIsMenuOpen(false)}
      >
        {/* Blur Backdrop */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      </motion.div>

      {/* Mobile Menu Sidebar */}
      <motion.div
        initial={false}
        animate={{ 
          x: isMenuOpen ? 0 : '100%'
        }}
        transition={{ 
          type: "spring",
          stiffness: 300,
          damping: 30,
          duration: 0.4
        }}
        className="fixed top-0 right-0 h-full w-2/3 max-w-sm bg-slate-900/95 backdrop-blur-md border-l border-premium-blue/20 shadow-2xl z-50 md:hidden"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-800/50">
            <Image 
              src="/botlogo.svg" 
              alt="BotLane Logo" 
              width={32}
              height={32}
              className="h-8 w-auto"
            />
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-gray-300 hover:text-white transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 px-6 py-8 space-y-6">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ 
                  opacity: isMenuOpen ? 1 : 0,
                  x: isMenuOpen ? 0 : 20
                }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                {item.hasMegaMenu ? (
                  <div>
                    {/* Services Menu Item with Dropdown */}
                    <button
                      onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                      className="flex items-center justify-between w-full text-lg text-gray-300 hover:text-premium-blue transition-colors duration-300 font-medium py-3 border-b border-slate-800/30"
                    >
                      <span>{item.name}</span>
                      <motion.svg 
                        className="w-5 h-5 transition-transform duration-200"
                        animate={{ rotate: isServicesDropdownOpen ? 180 : 0 }}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </motion.svg>
                    </button>
                    
                    {/* Services Submenu */}
                    <motion.div
                      initial={false}
                      animate={{ 
                        height: isServicesDropdownOpen ? 'auto' : 0,
                        opacity: isServicesDropdownOpen ? 1 : 0
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 pt-2 space-y-3">
                        {serviceStacks.map((service, serviceIndex) => (
                          <motion.div
                            key={service.name}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ 
                              opacity: isServicesDropdownOpen ? 1 : 0,
                              x: isServicesDropdownOpen ? 0 : 10
                            }}
                            transition={{ delay: serviceIndex * 0.1 + 0.1 }}
                          >
                            <Link
                              href={service.href}
                              className="block py-2 px-3 rounded-lg bg-slate-800/30 border border-slate-700/30 hover:border-premium-blue/30 transition-all duration-300"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <div className="text-sm font-medium text-white mb-1">
                                {service.name}
                              </div>
                              <div className="text-xs text-premium-blue/80">
                                {service.subtitle}
                              </div>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block text-lg text-gray-300 hover:text-premium-blue transition-colors duration-300 font-medium py-3 border-b border-slate-800/30"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="p-6 border-t border-slate-800/50">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: isMenuOpen ? 1 : 0,
                y: isMenuOpen ? 0 : 20
              }}
              transition={{ delay: 0.4 }}
              className="w-full px-6 py-3 bg-gradient-to-r from-premium-blue to-premium-purple border border-premium-blue/50 text-white font-medium rounded-lg hover:border-premium-blue/70 transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  )
}

export default Navbar
