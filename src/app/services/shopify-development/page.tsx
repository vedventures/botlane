'use client';

import React from 'react';
import Link from 'next/link';
import ShopifyPremiumAnimation from '@/components/ShopifyPremiumAnimation';

export default function ShopifyDevelopment() {
  return (
    <div className="min-h-screen bg-[#f9fafb] text-[#374151]">
      {/* Hero Section */}
      <div className="relative w-full">
        {/* Enhanced Shopify Store Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Base gradient with enhanced opacity */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#8b5cf6]/10 via-transparent to-[#7c3aed]/10"></div>
          
          {/* Animated gradient circles - Optimized for mobile */}
          <div className="absolute top-4 right-4 sm:top-12 sm:right-12 w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-[#8b5cf6]/15 rounded-full mix-blend-multiply filter blur-xl opacity-80 animate-pulse-slow"></div>
          <div className="absolute -bottom-8 -left-8 sm:-bottom-12 sm:-left-12 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-[#7c3aed]/15 rounded-full mix-blend-multiply filter blur-xl opacity-80 animate-pulse-slow"></div>
          <div className="hidden sm:block absolute top-1/3 right-1/4 w-16 h-16 md:w-20 md:h-20 bg-[#8b5cf6]/10 rounded-full mix-blend-multiply filter blur-lg opacity-70 animate-pulse-delay"></div>
          
          {/* Content Container */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex flex-col justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Text Content */}

              
              {/* Shopify Store Mockup - Responsive */}

            </div>
          </div>
            {/* Tag icon */}
            <svg className="w-3 h-3 text-[#7c3aed]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
          </div>
          
          <div className="absolute top-1/4 right-[38%] w-7 h-7 bg-white/70 backdrop-blur-sm rounded-lg shadow-sm border border-[#8b5cf6]/20 flex items-center justify-center animate-float-delay-2">
            {/* Credit card icon */}
            <svg className="w-3.5 h-3.5 text-[#8b5cf6]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
              <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
            </svg>
          </div>
          
          {/* Code snippet floating in the background */}

          
          {/* Animated data flow lines */}
          <div className="hidden md:block absolute bottom-1/4 right-[40%] w-12 h-0.5 bg-gradient-to-r from-[#8b5cf6]/0 via-[#8b5cf6]/60 to-[#8b5cf6]/0 animate-data-flow"></div>
          <div className="hidden md:block absolute top-1/3 right-[45%] w-8 h-0.5 bg-gradient-to-r from-[#7c3aed]/0 via-[#7c3aed]/60 to-[#7c3aed]/0 animate-data-flow-reverse"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-6xl relative z-10 pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20 bg-gradient-to-b from-white to-[#f9fafb]">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column - Content */}
            <div className="flex flex-col space-y-4 md:space-y-6">
              {/* Existing text content will be here */}
              <div className="flex items-center space-x-2 mb-1 md:mb-2">
                <div className="bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] rounded-full w-6 h-1"></div>
                <span className="text-[#8b5cf6] font-medium text-sm tracking-wide">DevStack Services</span>
              </div>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                <span className="inline">Expert </span>
                <span className="bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] text-transparent bg-clip-text">Shopify </span>
                <span className="inline">Development</span>
              </h1>
              
              <p className="text-gray-600 text-sm sm:text-base mt-2 max-w-xl">We bring your e-commerce vision to life with custom Shopify development. From theme customization to app integration, we&apos;ll create a unique store that drives sales and enhances user experience.</p>
              
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link href="/contact" className="flex-1 sm:flex-none px-4 sm:px-6 py-2.5 rounded-lg bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] text-white font-semibold hover:opacity-90 transition-opacity text-sm inline-flex items-center justify-center">
                  Get Started
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link href="#features" className="flex-1 sm:flex-none px-4 sm:px-6 py-2.5 rounded-lg border border-[#8b5cf6] text-[#8b5cf6] font-semibold hover:bg-[#8b5cf6]/5 transition-colors text-sm inline-flex items-center justify-center">
                  View Features
                </Link>
              </div>
              
              {/* Trust indicators */}
              <div className="pt-4 sm:pt-6 mt-2 sm:mt-4 border-t border-gray-200">
                <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3 text-center md:text-left">Trusted by leading brands</p>
                <div className="flex justify-center md:justify-start flex-wrap gap-3 sm:gap-6 items-center opacity-70">
                  {/* Client logo placeholders */}
                  <div className="h-5 sm:h-6 w-auto flex items-center">
                    <div className="w-14 sm:w-20 h-5 sm:h-6 bg-gray-200 rounded-sm flex items-center justify-center text-[8px] sm:text-[10px] text-gray-500">Client 1</div>
                  </div>
                  <div className="h-5 sm:h-6 w-auto flex items-center">
                    <div className="w-14 sm:w-20 h-5 sm:h-6 bg-gray-200 rounded-sm flex items-center justify-center text-[8px] sm:text-[10px] text-gray-500">Client 2</div>
                  </div>
                  <div className="h-5 sm:h-6 w-auto flex items-center">
                    <div className="w-14 sm:w-20 h-5 sm:h-6 bg-gray-200 rounded-sm flex items-center justify-center text-[8px] sm:text-[10px] text-gray-500">Client 3</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Column - Animation */}
            <div className="relative flex items-center justify-center mt-10 md:mt-0">
              <ShopifyPremiumAnimation />
            </div>
          </div>
        </div>
      
      {/* Process Section - Modern Horizontal Layout */}
    <section id="process" className="py-16 sm:py-24 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#f9fafb] to-white -z-10"></div>
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#8b5cf6]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[#7c3aed]/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-20">
            <span className="inline-block px-4 py-1.5 text-xs sm:text-sm font-semibold text-[#8b5cf6] bg-[#8b5cf6]/10 rounded-full mb-4">OUR PROCESS</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-5">Streamlined Shopify Development</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">A proven 4-step process to transform your e-commerce vision into a high-performing Shopify store</p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#8b5cf6] to-[#7c3aed] -translate-x-1/2"></div>
            
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Step 1 */}
              <div className="lg:pr-16 lg:pt-4 lg:pb-8 lg:border-r border-gray-100 lg:border-dashed">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-[#8b5cf6] flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-[#8b5cf6]/30">01</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Discovery & Strategy</h3>
                    <p className="text-gray-600">We dive deep into your business goals, target audience, and product offerings to craft a tailored Shopify strategy that drives results.</p>
                    <ul className="mt-3 space-y-2">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-[#8b5cf6] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">Market research & competitor analysis</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-[#8b5cf6] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">Technical requirements gathering</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="lg:pl-16 lg:pt-4 lg:pb-8 lg:mt-20">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-[#8b5cf6] flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-[#8b5cf6]/30">02</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">UI/UX Design</h3>
                    <p className="text-gray-600">Our designers create intuitive, conversion-focused interfaces that reflect your brand and provide an exceptional shopping experience.</p>
                    <ul className="mt-3 space-y-2">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-[#8b5cf6] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">Wireframing & prototyping</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-[#8b5cf6] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">Mobile-first responsive design</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="lg:pr-16 lg:pt-4 lg:pb-8 lg:border-r border-gray-100 lg:border-dashed">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-[#8b5cf6] flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-[#8b5cf6]/30">03</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Development</h3>
                    <p className="text-gray-600">Our Shopify experts bring designs to life with clean, efficient code and seamless third-party integrations.</p>
                    <ul className="mt-3 space-y-2">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-[#8b5cf6] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">Custom theme development</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-[#8b5cf6] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">App integration & API connections</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="lg:pl-16 lg:pt-4 lg:pb-8">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-[#8b5cf6] flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-[#8b5cf6]/30">04</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Launch & Growth</h3>
                    <p className="text-gray-600">We ensure a smooth launch and provide ongoing support to help your store grow and evolve.</p>
                    <ul className="mt-3 space-y-2">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-[#8b5cf6] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">Performance optimization & testing</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-[#8b5cf6] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">Training & documentation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* CTA at bottom */}
            <div className="mt-16 text-center">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#8b5cf6]/30 transition-all duration-300">
                Start Your Shopify Journey
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="py-16 sm:py-24 bg-gradient-to-b from-white to-[#f9fafb] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#8b5cf6]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#7c3aed]/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
            <span className="inline-block px-4 py-1.5 text-xs sm:text-sm font-semibold text-[#8b5cf6] bg-[#8b5cf6]/10 rounded-full mb-4">OUR SERVICES</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-5">Shopify Development Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Comprehensive solutions to build, optimize, and grow your Shopify store</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Custom Shopify Store Design */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#8b5cf6]/20">
              <div className="w-14 h-14 bg-[#8b5cf6]/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[#8b5cf6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6a1 1 0 011-1zm0 0h12a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Custom Shopify Store Design</h3>
              <p className="text-gray-600 mb-5">Unique, brand-aligned designs that convert visitors into customers and reflect your business identity.</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#8b5cf6] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Custom homepage & collection pages</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#8b5cf6] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Mobile-first responsive design</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#8b5cf6] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Custom product page layouts</span>
                </li>
              </ul>
            </div>

            {/* Theme Customization & Optimization */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#8b5cf6]/20">
              <div className="w-14 h-14 bg-[#8b5cf6]/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[#8b5cf6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.486M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Theme Customization & Optimization</h3>
              <p className="text-gray-600 mb-5">Lightning-fast, SEO-optimized themes that enhance user experience and boost conversions.</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#8b5cf6] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Page speed optimization</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#8b5cf6] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Mobile responsiveness fixes</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#8b5cf6] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Custom feature implementation</span>
                </li>
              </ul>
            </div>

            {/* App Integration & Automation */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#8b5cf6]/20">
              <div className="w-14 h-14 bg-[#8b5cf6]/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[#8b5cf6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m0 0V9a2 2 0 012-2h4a2 2 0 012 2v2M7 7h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">App Integration & Automation</h3>
              <p className="text-gray-600 mb-5">Seamless integration of essential apps to automate and enhance your store&apos;s functionality.</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#8b5cf6] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Payment & shipping gateways</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#8b5cf6] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Email marketing automation</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#8b5cf6] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Inventory & order management</span>
                </li>
              </ul>
            </div>

            {/* SEO & Performance Optimization */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#8b5cf6]/20">
              <div className="w-14 h-14 bg-[#8b5cf6]/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[#8b5cf6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">SEO & Performance Optimization</h3>
              <p className="text-gray-600 mb-5">Data-driven optimizations to improve search rankings and overall store performance.</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#8b5cf6] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">On-page SEO optimization</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#8b5cf6] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Core Web Vitals improvements</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-[#8b5cf6] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Conversion rate optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#8b5cf6]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#7c3aed]/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-5">Why Choose Us</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Partner with us for a Shopify experience that delivers results and exceeds expectations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#8b5cf6]/20">
              <div className="w-14 h-14 bg-[#8b5cf6]/10 rounded-xl flex items-center justify-center mb-5 mx-auto">
                <svg className="w-7 h-7 text-[#8b5cf6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-center text-gray-900 mb-2">Shopify Certified Experts</h3>
              <p className="text-gray-600 text-center text-sm">Our team consists of certified Shopify experts with deep platform knowledge and extensive e-commerce experience.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#8b5cf6]/20">
              <div className="w-14 h-14 bg-[#8b5cf6]/10 rounded-xl flex items-center justify-center mb-5 mx-auto">
                <svg className="w-7 h-7 text-[#8b5cf6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-center text-gray-900 mb-2">48-Hour Quick Start</h3>
              <p className="text-gray-600 text-center text-sm">Get your project moving quickly with our rapid onboarding and quick start program.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#8b5cf6]/20">
              <div className="w-14 h-14 bg-[#8b5cf6]/10 rounded-xl flex items-center justify-center mb-5 mx-auto">
                <svg className="w-7 h-7 text-[#8b5cf6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-center text-gray-900 mb-2">Mobile-First Design</h3>
              <p className="text-gray-600 text-center text-sm">We prioritize mobile experience to ensure your store looks and performs perfectly on all devices.</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#8b5cf6]/20">
              <div className="w-14 h-14 bg-[#8b5cf6]/10 rounded-xl flex items-center justify-center mb-5 mx-auto">
                <svg className="w-7 h-7 text-[#8b5cf6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-center text-gray-900 mb-2">Conversion Optimization</h3>
              <p className="text-gray-600 text-center text-sm">Our builds are optimized to turn visitors into customers with proven conversion strategies.</p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#8b5cf6]/20">
              <div className="w-14 h-14 bg-[#8b5cf6]/10 rounded-xl flex items-center justify-center mb-5 mx-auto">
                <svg className="w-7 h-7 text-[#8b5cf6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-center text-gray-900 mb-2">Dedicated Support</h3>
              <p className="text-gray-600 text-center text-sm">We provide ongoing support to ensure your store continues to perform at its best after launch.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Shopify Development Plans</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-2">Choose the perfect Shopify solution for your e-commerce needs with our flexible pricing options.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Basic Plan */}
            <div className="bg-white rounded-xl p-5 sm:p-6 md:p-8 shadow-md border border-gray-200 transition-all hover:shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-gray-100 rounded-bl-full"></div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">Starter</h3>
              <div className="text-[#96bf48] font-bold text-3xl sm:text-4xl mb-4 sm:mb-6">$2,499<span className="text-base sm:text-lg text-gray-500 font-normal">/one-time</span></div>
              
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                <li className="flex items-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-sm sm:text-base">Basic Shopify theme customization</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-sm sm:text-base">Up to 20 products</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-sm sm:text-base">Basic SEO setup</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-sm sm:text-base">Payment gateway setup</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-sm sm:text-base">1 month of support</span>
                </li>
              </ul>
              
              <button className="w-full py-2.5 sm:py-3 px-4 sm:px-6 bg-[#96bf48] text-white text-sm sm:text-base rounded-lg font-semibold hover:bg-[#7ea13d] transition-colors">
                Get Started
              </button>
            </div>
            
            {/* Pro Plan */}
            <div className="bg-white rounded-xl p-5 sm:p-6 md:p-8 shadow-xl border border-indigo-200 scale-100 sm:scale-105 md:scale-105 z-10 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 sm:w-40 h-32 sm:h-40 bg-indigo-50 rounded-full"></div>
              <div className="absolute top-0 left-0 bg-indigo-600 text-white px-3 sm:px-4 py-1 rounded-br-lg font-medium text-xs sm:text-sm">BEST VALUE</div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">Professional</h3>
              <div className="text-indigo-600 font-bold text-3xl sm:text-4xl mb-4 sm:mb-6">$4,999<span className="text-base sm:text-lg text-gray-500 font-normal">/one-time</span></div>
              
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                <li className="flex items-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-sm sm:text-base">Custom Shopify theme development</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-sm sm:text-base">Up to 100 products</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-sm sm:text-base">Advanced SEO & marketing setup</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-sm sm:text-base">Custom app integration</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-sm sm:text-base">3 months of support</span>
                </li>
              </ul>
              
              <button className="w-full py-2.5 sm:py-3 px-4 sm:px-6 bg-indigo-600 text-white text-sm sm:text-base rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                Get Started
              </button>
            </div>
            
            {/* Enterprise Plan */}
            <div className="bg-white rounded-xl p-5 sm:p-6 md:p-8 shadow-md border border-gray-200 transition-all hover:shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-gray-100 rounded-bl-full"></div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">Enterprise</h3>
              <div className="text-purple-600 font-bold text-3xl sm:text-4xl mb-4 sm:mb-6">$9,999+<span className="text-base sm:text-lg text-gray-500 font-normal">/one-time</span></div>
              
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                <li className="flex items-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-sm sm:text-base">Custom Shopify Plus development</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-sm sm:text-base">Unlimited products</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-sm sm:text-base">Custom app development</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-sm sm:text-base">Advanced analytics & reporting</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-sm sm:text-base">6 months of priority support</span>
                </li>
              </ul>
              
              <button className="w-full py-2.5 sm:py-3 px-4 sm:px-6 bg-purple-600 text-white text-sm sm:text-base rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600">Need a custom solution? <Link href="/contact" className="text-indigo-600 font-medium hover:text-indigo-700">Contact us</Link> for a personalized quote.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-r from-indigo-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              mixBlendMode: 'overlay'
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-6xl relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">Ready to Launch Your Shopify Store?</h2>
            <p className="text-lg sm:text-xl text-indigo-100 mb-8 sm:mb-10 max-w-3xl mx-auto">
              Transform your e-commerce vision into reality with our expert Shopify development services. Start selling online with a store that&apos;s built for success.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <Link 
                href="/contact" 
                className="px-6 sm:px-8 py-3.5 bg-white text-indigo-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 text-base sm:text-lg flex items-center justify-center"
              >
                Get a Free Consultation
                <svg className="w-5 h-5 ml-2 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              <Link 
                href="tel:+1234567890" 
                className="px-6 sm:px-8 py-3.5 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-300 text-base sm:text-lg flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us Now
              </Link>
            </div>
            
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-indigo-100">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                No setup fees
              </div>
              <div className="hidden sm:block w-px h-5 bg-indigo-400"></div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                14-day money-back guarantee
              </div>
              <div className="hidden sm:block w-px h-5 bg-indigo-400"></div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                24/7 customer support
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full filter blur-3xl"></div>
        <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-indigo-400/20 rounded-full filter blur-3xl"></div>
      </section>
    </div>
  );
}
