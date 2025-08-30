'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Shop', href: '#shop' },
    { name: 'Services', href: '#services' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
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
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center"
        >
          <img 
            src="/botlogo.svg" 
            alt="BotLane Logo" 
            className="h-10 w-auto"
          />
        </motion.div>

        {/* Desktop Navigation - Centered */}
        <div className="hidden md:flex items-center justify-center flex-1">
          <div className="flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-premium-blue transition-colors duration-300 font-medium"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index + 0.5 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.button
          className="group relative px-8 py-3 bg-gradient-to-r from-slate-900/80 to-slate-800/80 border border-slate-700/50 text-white font-light text-sm tracking-wide backdrop-blur-md overflow-hidden transition-all duration-700 hover:border-slate-600/70 hover:shadow-lg hover:shadow-slate-900/20"
          whileHover={{ scale: 1.01, y: -1 }}
          whileTap={{ scale: 0.99 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-800/20 to-slate-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <span className="relative z-10 flex items-center gap-2">
            Get Started
            <svg className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
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

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-dark-surface/95 backdrop-blur-md rounded-lg mt-4 mx-4"
      >
        <div className="px-6 py-4 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block text-gray-300 hover:text-premium-blue transition-colors duration-300 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <button className="w-full mt-4 px-6 py-3 bg-premium-blue/10 border border-premium-blue/30 text-premium-blue font-medium rounded-sm backdrop-blur-sm transition-all duration-300 hover:bg-premium-blue hover:text-dark-bg">
            Get Started
          </button>
        </div>
      </motion.div>
    </motion.nav>
  )
}

export default Navbar
