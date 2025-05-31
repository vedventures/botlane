'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  // Using null as initial state for client-side only states to prevent hydration mismatch
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [mobileActiveCategory, setMobileActiveCategory] = useState<string | null>(null);
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const servicesLinkRef = useRef<HTMLLIElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  
  // Set isClient to true when component mounts on client
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  // Close mega menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        megaMenuRef.current && 
        servicesLinkRef.current && 
        !megaMenuRef.current.contains(event.target as Node) &&
        !servicesLinkRef.current.contains(event.target as Node)
      ) {
        setIsMegaMenuOpen(false);
      }
    };
    
    // Close mobile menu when clicking outside
    const handleMobileClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        mobileMenuRef.current && 
        !mobileMenuRef.current.contains(event.target as Node) &&
        !(event.target as Element)?.closest('.mobile-menu-button')
      ) {
        setIsMenuOpen(false);
      }
    };
    
    // Prevent body scroll when mobile menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('mousedown', handleMobileClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('mousedown', handleMobileClickOutside);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed w-full z-50 bg-[#f8fafc] border-b-0">
      <div className="container mx-auto px-2 max-w-6xl">
        <div className="flex items-center justify-between h-20 md:h-24 py-2 md:py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image 
                src="/botlanelogo.svg" 
                alt="BotLane Logo" 
                width={150} 
                height={50} 
                className="h-auto" 
                priority
                style={{ background: 'transparent' }}
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link 
                  href="/" 
                  className="text-[#1e1b4b] hover:text-[#7c3aed] hover:bg-[#8b5cf6]/5 px-3 py-2 rounded-md transition-all inline-flex items-center"
                  style={{ display: 'inline-flex', alignItems: 'center' }}
                >
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/shop" 
                  className="text-[#1e1b4b] hover:text-[#7c3aed] hover:bg-[#8b5cf6]/5 px-3 py-2 rounded-md transition-all inline-flex items-center"
                  style={{ display: 'inline-flex', alignItems: 'center' }}
                >
                  <span>Shop</span>
                </Link>
              </li>
              <li 
                ref={servicesLinkRef}
                className="relative"
                onMouseEnter={() => setIsMegaMenuOpen(true)}
              >
                <Link 
                  href="/services" 
                  className={`text-[#1e1b4b] hover:text-[#7c3aed] ${isMegaMenuOpen ? 'text-[#7c3aed] bg-[#8b5cf6]/5' : ''} px-3 py-2 rounded-md transition-all inline-flex items-center gap-1 relative`}
                  onMouseEnter={() => setIsMegaMenuOpen(true)}
                  style={{ display: 'inline-flex', alignItems: 'center' }}
                >
                  <span className="relative z-10">Services</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform duration-300 relative z-10 ${isMegaMenuOpen ? 'rotate-180' : ''}`}
                    style={{ display: 'inline-block', verticalAlign: 'middle' }}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                  {isClient && isMegaMenuOpen && (
                    <span className="absolute inset-0 bg-[#8b5cf6]/5 rounded-md animate-pulse"></span>
                  )}
                </Link>
                
                {/* Mega Menu */}
                <div 
                  ref={megaMenuRef}
                  className={`absolute left-1/2 -translate-x-1/2 w-[90vw] max-w-[850px] mt-2 md:mt-3 p-2 sm:p-3 bg-white rounded-lg shadow-lg border border-gray-50 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 z-50 transform transition-all ease-out duration-300 ${isClient && isMegaMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
                  onMouseLeave={() => setIsMegaMenuOpen(false)}
                >
                    {/* DevStack Column */}
                    <div className="space-y-2 relative overflow-hidden rounded-md p-2 bg-gradient-to-br from-white to-purple-50 transform transition-all duration-300 ease-out delay-75">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-80"></div>
                      <div className="flex items-center gap-1.5 pb-1.5 border-b border-purple-100">
                        <span className="text-base font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">💻 DevStack</span>
                      </div>
                      <p className="text-xs text-gray-600 font-medium">Custom Web Experiences That Perform</p>
                      
                      <div className="space-y-2 mt-2">
                        <Link href="/services/wordpress-development" className="group block py-1.5 px-2 -mx-2 rounded-md hover:bg-white hover:shadow-sm transition-all duration-200">
                          <div className="font-medium text-gray-800 text-sm group-hover:text-[#7c3aed] transition-colors flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:scale-110 transition-transform"></span>
                            WordPress Development
                          </div>
                          <p className="text-xs text-gray-500 mt-1 pl-3 leading-tight">Fast, secure, and SEO-optimized websites using the world&apos;s most popular CMS</p>
                        </Link>
                        
                        <Link href="/services/shopify-development" className="group block py-1.5 px-2 -mx-2 rounded-md hover:bg-white hover:shadow-sm transition-all duration-200">
                          <div className="font-medium text-gray-800 text-sm group-hover:text-[#7c3aed] transition-colors flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:scale-110 transition-transform"></span>
                            Shopify Development
                          </div>
                          <p className="text-xs text-gray-500 mt-1 pl-3 leading-tight">Beautiful, conversion-focused Shopify stores tailored for ecommerce success</p>
                        </Link>
                        
                        <Link href="/services/full-stack-development" className="group block py-1.5 px-2 -mx-2 rounded-md hover:bg-white hover:shadow-sm transition-all duration-200">
                          <div className="font-medium text-gray-800 text-sm group-hover:text-[#7c3aed] transition-colors flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:scale-110 transition-transform"></span>
                            Full-Stack Web Development
                          </div>
                          <p className="text-xs text-gray-500 mt-1 pl-3 leading-tight">Custom web applications using modern frameworks like React, Node.js, and Django</p>
                        </Link>
                        
                        <Link href="/services/ui-ux-design" className="group block py-1.5 px-2 -mx-2 rounded-md hover:bg-white hover:shadow-sm transition-all duration-200">
                          <div className="font-medium text-gray-800 text-sm group-hover:text-[#7c3aed] transition-colors flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:scale-110 transition-transform"></span>
                            UI/UX Design Systems
                          </div>
                          <p className="text-xs text-gray-500 mt-1 pl-3 leading-tight">Strategic interface and experience design to drive engagement and usability</p>
                        </Link>
                      </div>
                    </div>
                    
                    {/* FlowStack Column */}
                    <div className="space-y-2 relative overflow-hidden rounded-md p-2 bg-gradient-to-br from-white to-indigo-50 transform transition-all duration-300 ease-out delay-150">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-80"></div>
                      <div className="flex items-center gap-1.5 pb-1.5 border-b border-indigo-100">
                        <span className="text-base font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">⚙️ FlowStack</span>
                      </div>
                      <p className="text-xs text-gray-600 font-medium">Automate Everything. Operate Smarter.</p>
                      
                      <div className="space-y-2 mt-2">
                        <Link href="/services/ai-chatbot-development" className="group block py-1.5 px-2 -mx-2 rounded-md hover:bg-white hover:shadow-sm transition-all duration-200">
                          <div className="font-medium text-gray-800 text-sm group-hover:text-[#7c3aed] transition-colors flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 group-hover:scale-110 transition-transform"></span>
                            AI Chatbot Development
                          </div>
                          <p className="text-xs text-gray-500 mt-1 pl-3 leading-tight">Intelligent bots for lead generation, customer support, and internal automation</p>
                        </Link>
                        
                        <Link href="/services/workflow-automation" className="group block py-1.5 px-2 -mx-2 rounded-md hover:bg-white hover:shadow-sm transition-all duration-200">
                          <div className="font-medium text-gray-800 text-sm group-hover:text-[#7c3aed] transition-colors flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 group-hover:scale-110 transition-transform"></span>
                            Workflow Automation
                          </div>
                          <p className="text-xs text-gray-500 mt-1 pl-3 leading-tight">No-code/low-code automation using tools like Zapier, Make, or custom scripting</p>
                        </Link>
                        
                        <Link href="/services/api-crm-integrations" className="group block py-1.5 px-2 -mx-2 rounded-md hover:bg-white hover:shadow-sm transition-all duration-200">
                          <div className="font-medium text-gray-800 text-sm group-hover:text-[#7c3aed] transition-colors flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 group-hover:scale-110 transition-transform"></span>
                            API & CRM Integrations
                          </div>
                          <p className="text-xs text-gray-500 mt-1 pl-3 leading-tight">Seamless data flow between platforms like HubSpot, Stripe, Notion, Slack, etc.</p>
                        </Link>
                        
                        <Link href="/services/ai-powered-tools" className="group block py-1.5 px-2 -mx-2 rounded-md hover:bg-white hover:shadow-sm transition-all duration-200">
                          <div className="font-medium text-gray-800 text-sm group-hover:text-[#7c3aed] transition-colors flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 group-hover:scale-110 transition-transform"></span>
                            AI-Powered Internal Tools
                          </div>
                          <p className="text-xs text-gray-500 mt-1 pl-3 leading-tight">Custom tools like form processors, report generators, and dashboards built with AI</p>
                        </Link>
                      </div>
                    </div>
                    
                    {/* ScaleStack Column */}
                    <div className="space-y-2 relative overflow-hidden rounded-md p-2 bg-gradient-to-br from-white to-violet-50 transform transition-all duration-300 ease-out delay-200">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 to-violet-600 opacity-80"></div>
                      <div className="flex items-center gap-1.5 pb-1.5 border-b border-violet-100">
                        <span className="text-base font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">📈 ScaleStack</span>
                      </div>
                      <p className="text-xs text-gray-600 font-medium">Grow Faster. Smarter. Sharper.</p>
                      
                      <div className="space-y-2 mt-2">
                        <Link href="/services/performance-marketing" className="group block py-1.5 px-2 -mx-2 rounded-md hover:bg-white hover:shadow-sm transition-all duration-200">
                          <div className="font-medium text-gray-800 text-sm group-hover:text-[#7c3aed] transition-colors flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 group-hover:scale-110 transition-transform"></span>
                            Performance Marketing (Ads)
                          </div>
                          <p className="text-xs text-gray-500 mt-1 pl-3 leading-tight">ROI-driven ad campaigns on Google, Meta, LinkedIn, and beyond</p>
                        </Link>
                        
                        <Link href="/services/seo-content-strategy" className="group block py-1.5 px-2 -mx-2 rounded-md hover:bg-white hover:shadow-sm transition-all duration-200">
                          <div className="font-medium text-gray-800 text-sm group-hover:text-[#7c3aed] transition-colors flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 group-hover:scale-110 transition-transform"></span>
                            SEO & Content Strategy
                          </div>
                          <p className="text-xs text-gray-500 mt-1 pl-3 leading-tight">Organic growth through advanced SEO, content planning, and on-page optimization</p>
                        </Link>
                        
                        <Link href="/services/social-media-management" className="group block py-1.5 px-2 -mx-2 rounded-md hover:bg-white hover:shadow-sm transition-all duration-200">
                          <div className="font-medium text-gray-800 text-sm group-hover:text-[#7c3aed] transition-colors flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 group-hover:scale-110 transition-transform"></span>
                            Social Media Management
                          </div>
                          <p className="text-xs text-gray-500 mt-1 pl-3 leading-tight">Platform-specific strategies, creatives, and scheduling to grow brand presence</p>
                        </Link>
                        
                        <Link href="/services/email-funnel-automation" className="group block py-1.5 px-2 -mx-2 rounded-md hover:bg-white hover:shadow-sm transition-all duration-200">
                          <div className="font-medium text-gray-800 text-sm group-hover:text-[#7c3aed] transition-colors flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 group-hover:scale-110 transition-transform"></span>
                            Email & Funnel Automation
                          </div>
                          <p className="text-xs text-gray-500 mt-1 pl-3 leading-tight">Lead nurturing, sales funnels, and behavioral email sequences for conversion</p>
                        </Link>
                      </div>
                    </div>
                  </div>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-[#1e1b4b] hover:text-[#7c3aed] hover:bg-[#8b5cf6]/5 px-3 py-2 rounded-md transition-all inline-flex items-center"
                  style={{ display: 'inline-flex', alignItems: 'center' }}
                >
                  <span>About</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-[#1e1b4b] hover:text-[#7c3aed] hover:bg-[#8b5cf6]/5 px-3 py-2 rounded-md transition-all inline-flex items-center"
                  style={{ display: 'inline-flex', alignItems: 'center' }}
                >
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </nav>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] text-white px-6 py-2.5 rounded-md font-medium hover:shadow-lg hover:shadow-violet-500/20 transition-all"
            >
              Get Started
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden relative z-50">
            <button
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
                // Reset mobile menu state when closing
                if (isMenuOpen) {
                  setIsServicesOpen(false);
                  setMobileActiveCategory(null);
                }
              }}
              className="mobile-menu-button inline-flex items-center justify-center p-2 rounded-md text-[#1e1b4b] hover:text-[#7c3aed] hover:bg-[#8b5cf6]/5 focus:outline-none relative"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
            
            {/* Mobile Menu - Slides in from right */}
            <div
              ref={mobileMenuRef}
              className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white z-40 shadow-2xl transform transition-all duration-300 ease-in-out md:hidden overflow-y-auto ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} border-l border-violet-100`}
              style={{
                backgroundImage: 'radial-gradient(circle at top right, rgba(139, 92, 246, 0.03), transparent 70%), linear-gradient(to bottom, white, white)'
              }}
            >
              {/* Mobile Menu Header with Close Button */}
              <div className="sticky top-0 bg-white/90 backdrop-blur-sm z-10 px-5 py-5 flex items-center justify-between border-b border-violet-100 shadow-sm">
                <div className="flex-shrink-0">
                  <Link href="/" className="flex items-center">
                    <Image 
                      src="/botlogo.png" 
                      alt="BotLane" 
                      width={120} 
                      height={24} 
                      priority
                      className="drop-shadow-sm hover:drop-shadow transition-all duration-200"
                      style={{ background: 'transparent' }}
                    />
                  </Link>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-full text-gray-500 hover:text-[#7c3aed] hover:bg-violet-50 transition-all duration-200 group"
                  aria-label="Close menu"
                >
                  <svg className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-violet-200/20 to-transparent rounded-bl-full"></div>
              </div>
              
              {/* Subtle decorative pattern */}
              <div className="absolute left-0 top-24 w-32 h-32 opacity-5 pointer-events-none">
                <svg width="120" height="120" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                      <circle cx="2" cy="2" r="1" fill="#8b5cf6" />
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill="url(#grid)" />
                </svg>
              </div>
              
              <nav className="px-4 mt-4">
                {/* Primary Navigation Links */}
                <div className="space-y-1">
                  <div className="mb-2 px-2">
                    <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Navigation</p>
                  </div>
                  <Link
                    href="/" 
                    className="group flex items-center w-full px-4 py-3 text-[#1e1b4b] hover:text-[#7c3aed] hover:bg-white rounded-lg transition-all duration-200 border border-transparent hover:border-violet-100 hover:shadow-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="w-6 h-6 mr-3 rounded-full bg-gradient-to-br from-violet-50 to-white flex items-center justify-center shadow-sm border border-violet-100 group-hover:scale-110 transition-transform duration-200">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-[#7c3aed]">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                    </div>
                    <span className="font-medium">Home</span>
                  </Link>
                  
                  <Link
                    href="/shop" 
                    className="group flex items-center w-full px-4 py-3 text-[#1e1b4b] hover:text-[#7c3aed] hover:bg-white rounded-lg transition-all duration-200 border border-transparent hover:border-violet-100 hover:shadow-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="w-6 h-6 mr-3 rounded-full bg-gradient-to-br from-violet-50 to-white flex items-center justify-center shadow-sm border border-violet-100 group-hover:scale-110 transition-transform duration-200">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-[#7c3aed]">
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                      </svg>
                    </div>
                    <span className="font-medium">Shop</span>
                  </Link>
                </div>
                
                {/* Services Main Menu Item */}
                <div className="space-y-1 mt-2">
                  <div className="mb-2 px-2">
                    <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Services</p>
                  </div>
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className={`group flex items-center justify-between w-full px-4 py-3 ${isServicesOpen ? 'text-[#7c3aed] bg-white border-violet-100 shadow-sm' : 'text-[#1e1b4b] border-transparent'} hover:text-[#7c3aed] hover:bg-white rounded-lg transition-all duration-200 border hover:border-violet-100 hover:shadow-sm`}
                  >
                    <div className="flex items-center">
                      <div className="w-6 h-6 mr-3 rounded-full bg-gradient-to-br from-violet-50 to-white flex items-center justify-center shadow-sm border border-violet-100 group-hover:scale-110 transition-transform duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-[#7c3aed]">
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="12" y1="8" x2="12" y2="16"></line>
                          <line x1="8" y1="12" x2="16" y2="12"></line>
                        </svg>
                      </div>
                      <span className="font-medium">Services</span>
                    </div>
                    <div className="relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`}
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                      {isServicesOpen && <span className="absolute -right-1 -top-1 w-2 h-2 rounded-full bg-violet-400 animate-pulse"></span>}
                    </div>
                  </button>
                  
                  {/* Services Categories - Hidden until Services is clicked */}
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isServicesOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="pl-3 pr-2 py-1 space-y-1">
                      {/* DevStack Category */}
                      <button
                        onClick={() => setMobileActiveCategory(mobileActiveCategory === 'devstack' ? null : 'devstack')}
                        className={`flex items-center justify-between w-full px-3 py-2.5 ${mobileActiveCategory === 'devstack' ? 'text-[#7c3aed] bg-[#8b5cf6]/5' : 'text-[#1e1b4b]'} hover:text-[#7c3aed] hover:bg-[#8b5cf6]/5 rounded-md transition-colors`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">🧩 DevStack</span>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className={`transition-transform duration-200 ${mobileActiveCategory === 'devstack' ? 'rotate-180' : ''}`}
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </button>
                  
                      {/* DevStack Services */}
                      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileActiveCategory === 'devstack' ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="pl-4 pr-2 py-2 space-y-3">
                          {/* WordPress Development */}
                          <Link
                            href="/services/wordpress-development"
                            className="block w-full px-3 py-3 text-sm text-gray-700 hover:text-[#7c3aed] hover:bg-white hover:shadow-sm rounded-md transition-all duration-200 border border-transparent hover:border-violet-100"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <div className="flex items-start gap-3">
                              <div className="flex-shrink-0 mt-0.5">
                                <div className="w-8 h-8 rounded-md bg-gradient-to-br from-violet-50 to-white flex items-center justify-center shadow-sm border border-violet-100">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#7c3aed]">
                                    <path d="M12 2H2v10h10V2z"></path>
                                    <path d="M12 12H2v10h10V12z"></path>
                                    <path d="M22 2h-10v10h10V2z"></path>
                                    <path d="M22 12h-10v10h10V12z"></path>
                                  </svg>
                                </div>
                              </div>
                              <div>
                                <div className="font-medium text-[#1e1b4b] group-hover:text-[#7c3aed]">WordPress Development</div>
                                <p className="text-xs text-gray-500 mt-1 leading-tight">Fast, secure, and SEO-optimized websites using the world&apos;s most popular CMS</p>
                              </div>
                            </div>
                          </Link>
                          
                          {/* Shopify Development */}
                          <Link
                            href="/services/shopify-development"
                            className="block w-full px-3 py-3 text-sm text-gray-700 hover:text-[#7c3aed] hover:bg-white hover:shadow-sm rounded-md transition-all duration-200 border border-transparent hover:border-violet-100"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <div className="flex items-start gap-3">
                              <div className="flex-shrink-0 mt-0.5">
                                <div className="w-8 h-8 rounded-md bg-gradient-to-br from-violet-50 to-white flex items-center justify-center shadow-sm border border-violet-100">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#7c3aed]">
                                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                  </svg>
                                </div>
                              </div>
                              <div>
                                <div className="font-medium text-[#1e1b4b] group-hover:text-[#7c3aed]">Shopify Development</div>
                                <p className="text-xs text-gray-500 mt-1 leading-tight">Beautiful, conversion-focused Shopify stores tailored for ecommerce success</p>
                              </div>
                            </div>
                          </Link>
                          
                          {/* Full-Stack Web Development */}
                          <Link
                            href="/services/full-stack-development"
                            className="block w-full px-3 py-3 text-sm text-gray-700 hover:text-[#7c3aed] hover:bg-white hover:shadow-sm rounded-md transition-all duration-200 border border-transparent hover:border-violet-100"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <div className="flex items-start gap-3">
                              <div className="flex-shrink-0 mt-0.5">
                                <div className="w-8 h-8 rounded-md bg-gradient-to-br from-violet-50 to-white flex items-center justify-center shadow-sm border border-violet-100">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#7c3aed]">
                                    <polyline points="16 18 22 12 16 6"></polyline>
                                    <polyline points="8 6 2 12 8 18"></polyline>
                                  </svg>
                                </div>
                              </div>
                              <div>
                                <div className="font-medium text-[#1e1b4b] group-hover:text-[#7c3aed]">Full-Stack Web Development</div>
                                <p className="text-xs text-gray-500 mt-1 leading-tight">Custom web applications using modern frameworks like React, Node.js, and Django</p>
                              </div>
                            </div>
                          </Link>
                          
                          {/* UI/UX Design Systems */}
                          <Link
                            href="/services/ui-ux-design"
                            className="block w-full px-3 py-3 text-sm text-gray-700 hover:text-[#7c3aed] hover:bg-white hover:shadow-sm rounded-md transition-all duration-200 border border-transparent hover:border-violet-100"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <div className="flex items-start gap-3">
                              <div className="flex-shrink-0 mt-0.5">
                                <div className="w-8 h-8 rounded-md bg-gradient-to-br from-violet-50 to-white flex items-center justify-center shadow-sm border border-violet-100">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#7c3aed]">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                                    <line x1="9" y1="9" x2="9.01" y2="9"></line>
                                    <line x1="15" y1="9" x2="15.01" y2="9"></line>
                                  </svg>
                                </div>
                              </div>
                              <div>
                                <div className="font-medium text-[#1e1b4b] group-hover:text-[#7c3aed]">UI/UX Design Systems</div>
                                <p className="text-xs text-gray-500 mt-1 leading-tight">Strategic interface and experience design to drive engagement and usability</p>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                      
                      {/* FlowStack Category */}
                      <button
                        onClick={() => setMobileActiveCategory(mobileActiveCategory === 'flowstack' ? null : 'flowstack')}
                        className={`flex items-center justify-between w-full px-3 py-2.5 ${mobileActiveCategory === 'flowstack' ? 'text-[#7c3aed] bg-[#8b5cf6]/5' : 'text-[#1e1b4b]'} hover:text-[#7c3aed] hover:bg-[#8b5cf6]/5 rounded-md transition-colors`}
                      >
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">⚙️ FlowStack</span>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`transition-transform duration-200 ${mobileActiveCategory === 'flowstack' ? 'rotate-180' : ''}`}
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                  
                      {/* FlowStack Services */}
                      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileActiveCategory === 'flowstack' ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="pl-4 pr-2 py-2 space-y-3">
                          {/* AI Chatbot Development */}
                          <Link
                            href="/services/ai-chatbot-development"
                            className="block w-full px-3 py-3 text-sm text-gray-700 hover:text-[#7c3aed] hover:bg-white hover:shadow-sm rounded-md transition-all duration-200 border border-transparent hover:border-violet-100"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <div className="flex items-start gap-3">
                              <div className="flex-shrink-0 mt-0.5">
                                <div className="w-8 h-8 rounded-md bg-gradient-to-br from-indigo-50 to-white flex items-center justify-center shadow-sm border border-indigo-100">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#7c3aed]">
                                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                  </svg>
                                </div>
                              </div>
                              <div>
                                <div className="font-medium text-[#1e1b4b] group-hover:text-[#7c3aed]">AI Chatbot Development</div>
                                <p className="text-xs text-gray-500 mt-1 leading-tight">Intelligent bots for lead generation, customer support, and internal automation</p>
                              </div>
                            </div>
                          </Link>
                          
                          {/* Workflow Automation */}
                          <Link
                            href="/services/workflow-automation"
                            className="block w-full px-3 py-3 text-sm text-gray-700 hover:text-[#7c3aed] hover:bg-white hover:shadow-sm rounded-md transition-all duration-200 border border-transparent hover:border-violet-100"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <div className="flex items-start gap-3">
                              <div className="flex-shrink-0 mt-0.5">
                                <div className="w-8 h-8 rounded-md bg-gradient-to-br from-indigo-50 to-white flex items-center justify-center shadow-sm border border-indigo-100">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#7c3aed]">
                                    <path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6z"></path>
                                    <path d="M12 13v8"></path>
                                    <path d="M5 13v6a2 2 0 0 0 2 2h8"></path>
                                  </svg>
                                </div>
                              </div>
                              <div>
                                <div className="font-medium text-[#1e1b4b] group-hover:text-[#7c3aed]">Workflow Automation</div>
                                <p className="text-xs text-gray-500 mt-1 leading-tight">No-code/low-code automation using tools like Zapier, Make, or custom scripting</p>
                              </div>
                            </div>
                          </Link>
                          
                          {/* API & CRM Integrations */}
                          <Link
                            href="/services/api-crm-integrations"
                            className="block w-full px-3 py-3 text-sm text-gray-700 hover:text-[#7c3aed] hover:bg-white hover:shadow-sm rounded-md transition-all duration-200 border border-transparent hover:border-violet-100"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <div className="flex items-start gap-3">
                              <div className="flex-shrink-0 mt-0.5">
                                <div className="w-8 h-8 rounded-md bg-gradient-to-br from-indigo-50 to-white flex items-center justify-center shadow-sm border border-indigo-100">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#7c3aed]">
                                    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                                    <line x1="6" y1="10" x2="6" y2="14"></line>
                                    <line x1="12" y1="10" x2="12" y2="14"></line>
                                    <line x1="18" y1="10" x2="18" y2="14"></line>
                                  </svg>
                                </div>
                              </div>
                              <div>
                                <div className="font-medium text-[#1e1b4b] group-hover:text-[#7c3aed]">API & CRM Integrations</div>
                                <p className="text-xs text-gray-500 mt-1 leading-tight">Seamless data flow between platforms like HubSpot, Stripe, Notion, Slack, etc.</p>
                              </div>
                            </div>
                          </Link>
                          
                          {/* AI-Powered Internal Tools */}
                          <Link
                            href="/services/ai-powered-tools"
                            className="block w-full px-3 py-3 text-sm text-gray-700 hover:text-[#7c3aed] hover:bg-white hover:shadow-sm rounded-md transition-all duration-200 border border-transparent hover:border-violet-100"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <div className="flex items-start gap-3">
                              <div className="flex-shrink-0 mt-0.5">
                                <div className="w-8 h-8 rounded-md bg-gradient-to-br from-indigo-50 to-white flex items-center justify-center shadow-sm border border-indigo-100">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#7c3aed]">
                                    <path d="M12 2a10 10 0 1 0 10 10H12V2z"></path>
                                    <path d="M20 2a10 10 0 1 0 10 10H20V2z" transform="rotate(45 16 12)"></path>
                                  </svg>
                                </div>
                              </div>
                              <div>
                                <div className="font-medium text-[#1e1b4b] group-hover:text-[#7c3aed]">AI-Powered Internal Tools</div>
                                <p className="text-xs text-gray-500 mt-1 leading-tight">Custom tools like form processors, report generators, and dashboards built with AI</p>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                      
                      {/* ScaleStack Category */}
                      <button
                        onClick={() => setMobileActiveCategory(mobileActiveCategory === 'scalestack' ? null : 'scalestack')}
                        className={`flex items-center justify-between w-full px-3 py-2.5 ${mobileActiveCategory === 'scalestack' ? 'text-[#7c3aed] bg-[#8b5cf6]/5' : 'text-[#1e1b4b]'} hover:text-[#7c3aed] hover:bg-[#8b5cf6]/5 rounded-md transition-colors`}
                      >
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">📈 ScaleStack</span>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`transition-transform duration-200 ${mobileActiveCategory === 'scalestack' ? 'rotate-180' : ''}`}
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                  
                      {/* ScaleStack Services */}
                      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileActiveCategory === 'scalestack' ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="pl-4 pr-2 py-2 space-y-3">
                          {/* Performance Marketing */}
                          <Link
                            href="/services/performance-marketing"
                            className="block w-full px-3 py-3 text-sm text-gray-700 hover:text-[#7c3aed] hover:bg-white hover:shadow-sm rounded-md transition-all duration-200 border border-transparent hover:border-violet-100"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <div className="flex items-start gap-3">
                              <div className="flex-shrink-0 mt-0.5">
                                <div className="w-8 h-8 rounded-md bg-gradient-to-br from-violet-50 to-white flex items-center justify-center shadow-sm border border-violet-100">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#7c3aed]">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                  </svg>
                                </div>
                              </div>
                              <div>
                                <div className="font-medium text-[#1e1b4b] group-hover:text-[#7c3aed]">Performance Marketing (Ads)</div>
                                <p className="text-xs text-gray-500 mt-1 leading-tight">ROI-driven ad campaigns on Google, Meta, LinkedIn, and beyond</p>
                              </div>
                            </div>
                          </Link>
                          
                          {/* SEO & Content Strategy */}
                          <Link
                            href="/services/seo-content-strategy"
                            className="block w-full px-3 py-3 text-sm text-gray-700 hover:text-[#7c3aed] hover:bg-white hover:shadow-sm rounded-md transition-all duration-200 border border-transparent hover:border-violet-100"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <div className="flex items-start gap-3">
                              <div className="flex-shrink-0 mt-0.5">
                                <div className="w-8 h-8 rounded-md bg-gradient-to-br from-violet-50 to-white flex items-center justify-center shadow-sm border border-violet-100">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#7c3aed]">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                  </svg>
                                </div>
                              </div>
                              <div>
                                <div className="font-medium text-[#1e1b4b] group-hover:text-[#7c3aed]">SEO & Content Strategy</div>
                                <p className="text-xs text-gray-500 mt-1 leading-tight">Organic growth through advanced SEO, content planning, and on-page optimization</p>
                              </div>
                            </div>
                          </Link>
                          
                          {/* Social Media Management */}
                          <Link
                            href="/services/social-media-management"
                            className="block w-full px-3 py-3 text-sm text-gray-700 hover:text-[#7c3aed] hover:bg-white hover:shadow-sm rounded-md transition-all duration-200 border border-transparent hover:border-violet-100"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <div className="flex items-start gap-3">
                              <div className="flex-shrink-0 mt-0.5">
                                <div className="w-8 h-8 rounded-md bg-gradient-to-br from-violet-50 to-white flex items-center justify-center shadow-sm border border-violet-100">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#7c3aed]">
                                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                                  </svg>
                                </div>
                              </div>
                              <div>
                                <div className="font-medium text-[#1e1b4b] group-hover:text-[#7c3aed]">Social Media Management</div>
                                <p className="text-xs text-gray-500 mt-1 leading-tight">Platform-specific strategies, creatives, and scheduling to grow brand presence</p>
                              </div>
                            </div>
                          </Link>
                          
                          {/* Email & Funnel Automation */}
                          <Link
                            href="/services/email-funnel-automation"
                            className="block w-full px-3 py-3 text-sm text-gray-700 hover:text-[#7c3aed] hover:bg-white hover:shadow-sm rounded-md transition-all duration-200 border border-transparent hover:border-violet-100"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <div className="flex items-start gap-3">
                              <div className="flex-shrink-0 mt-0.5">
                                <div className="w-8 h-8 rounded-md bg-gradient-to-br from-violet-50 to-white flex items-center justify-center shadow-sm border border-violet-100">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#7c3aed]">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                  </svg>
                                </div>
                              </div>
                              <div>
                                <div className="font-medium text-[#1e1b4b] group-hover:text-[#7c3aed]">Email & Funnel Automation</div>
                                <p className="text-xs text-gray-500 mt-1 leading-tight">Lead nurturing, sales funnels, and behavioral email sequences for conversion</p>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
              
              {/* Secondary Navigation Links */}
              <div className="px-4 mt-6 space-y-1">
                <div className="mb-2 px-2">
                  <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Company</p>
                </div>
                <Link
                  href="/about"
                  className="group flex items-center w-full px-4 py-3 text-[#1e1b4b] hover:text-[#7c3aed] hover:bg-white rounded-lg transition-all duration-200 border border-transparent hover:border-violet-100 hover:shadow-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="w-6 h-6 mr-3 rounded-full bg-gradient-to-br from-violet-50 to-white flex items-center justify-center shadow-sm border border-violet-100 group-hover:scale-110 transition-transform duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-[#7c3aed]">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="16" x2="12" y2="12"></line>
                      <line x1="12" y1="8" x2="12.01" y2="8"></line>
                    </svg>
                  </div>
                  <span className="font-medium">About</span>
                </Link>
                
                <Link
                  href="/contact"
                  className="group flex items-center w-full px-4 py-3 text-[#1e1b4b] hover:text-[#7c3aed] hover:bg-white rounded-lg transition-all duration-200 border border-transparent hover:border-violet-100 hover:shadow-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="w-6 h-6 mr-3 rounded-full bg-gradient-to-br from-violet-50 to-white flex items-center justify-center shadow-sm border border-violet-100 group-hover:scale-110 transition-transform duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-[#7c3aed]">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <span className="font-medium">Contact</span>
                </Link>
              </div>
              
              {/* CTA Button */}
              <div className="px-4 mt-8 mb-8">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-lg blur opacity-30 group-hover:opacity-80 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                  <Link
                    href="/contact"
                    className="relative flex items-center justify-center w-full py-3.5 px-4 rounded-lg bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] text-white font-medium shadow-lg hover:shadow-violet-500/30 transition-all duration-300 group-hover:scale-[1.01]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="mr-2">Get Started</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Overlay for mobile menu */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity duration-300 md:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
      />
    </header>
  );
};

export default Header;
