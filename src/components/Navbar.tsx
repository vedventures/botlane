'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false)

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

      {/* Mega Menu */}
      <motion.div
        initial={false}
        animate={{ 
          opacity: isMegaMenuOpen ? 1 : 0,
          y: isMegaMenuOpen ? 0 : -10,
          pointerEvents: isMegaMenuOpen ? 'auto' : 'none'
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="absolute top-full left-0 right-0 mt-0 hidden md:block"
        onMouseEnter={() => setIsMegaMenuOpen(true)}
        onMouseLeave={() => setIsMegaMenuOpen(false)}
      >
        <div className="max-w-7xl mx-auto px-6 pt-2">
          <div className="bg-slate-900/95 backdrop-blur-md border border-premium-blue/20 rounded-2xl p-8 shadow-2xl">
            <div className="grid grid-cols-3 gap-8">
              {serviceStacks.map((service, index) => (
                <Link key={service.name} href={service.href}>
                  <motion.div
                    className="group p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-700/30 border border-premium-blue/10 hover:border-premium-blue/30 transition-all duration-300 cursor-pointer"
                    whileHover={{ y: -4, scale: 1.02 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="mb-4">
                      <h3 className="text-lg font-medium text-white mb-1 group-hover:text-premium-blue transition-colors duration-300">
                        {service.name}
                      </h3>
                      <p className="text-premium-blue/80 text-sm font-light">
                        {service.subtitle}
                      </p>
                    </div>
                    
                    <p className="text-premium-silver/80 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    
                    <div className="space-y-2">
                      {service.features.slice(0, 2).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-premium-blue/60 rounded-full" />
                          <span className="text-premium-silver/70 text-xs">
                            {feature}
                          </span>
                        </div>
                      ))}
                      <div className="flex items-center gap-2 text-premium-blue/60 text-xs">
                        <span>+{service.features.length - 2} more features</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-premium-blue/10">
                      <span className="text-premium-blue text-sm font-medium group-hover:text-premium-purple transition-colors duration-300">
                        Learn More →
                      </span>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-dark-surface/95 backdrop-blur-md rounded-lg mt-4 mx-4"
      >
        <div className="px-6 py-4 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block text-gray-300 hover:text-premium-blue transition-colors duration-300 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <button className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-premium-blue to-premium-purple border border-premium-blue/50 text-white font-medium rounded-lg hover:border-premium-blue/70 transition-all duration-300">
            Get Started
          </button>
        </div>
      </motion.div>
    </motion.nav>
  )
}

export default Navbar
