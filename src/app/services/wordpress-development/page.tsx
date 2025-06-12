'use client';

import React from 'react';
import Link from 'next/link';

export default function WordPressDevelopment() {
  return (
    <div className="min-h-screen bg-[#f9fafb] text-[#374151]">
      {/* Hero Section */}
      <section className="relative overflow-hidden w-full pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-gradient-to-b from-white to-[#f9fafb]">
        {/* Decorative elements - similar to the homepage */}
        <div className="absolute top-12 right-0 w-24 h-24 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-12 left-0 w-32 h-32 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="hidden lg:block absolute top-24 left-12 w-4 h-4 bg-purple-500 rounded-full animate-float-slow opacity-80"></div>
        
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            {/* Left Column - Content */}
            <div className="flex flex-col space-y-4 md:space-y-6">
              <div className="flex items-center space-x-2 mb-1 md:mb-2">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full w-6 h-1"></div>
                <span className="text-indigo-600 font-medium text-sm tracking-wide">DevStack Services</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1e1b4b] leading-tight">
                <span className="inline">Premium </span>
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">WordPress </span>
                <span className="inline">Development</span>
              </h1>
              
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                Create fast, secure, and SEO-optimized websites using the world&apos;s most popular CMS. Our expert team delivers custom WordPress solutions that drive results.
              </p>
              
              <div className="flex flex-row gap-3 pt-2">
                <Link href="/contact" className="flex-1 sm:flex-none px-4 sm:px-6 py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold hover:opacity-90 transition-opacity text-sm inline-flex items-center justify-center">
                  Get Started
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link href="#features" className="flex-1 sm:flex-none px-4 sm:px-6 py-2.5 rounded-lg border border-purple-600 text-purple-600 font-semibold hover:bg-purple-50 transition-colors text-sm inline-flex items-center justify-center">
                  View Features
                </Link>
              </div>
              
              {/* Trust indicators - Optimized for mobile */}
              <div className="pt-4 sm:pt-6 mt-2 sm:mt-4 border-t border-gray-200">
                <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3 text-center md:text-left">Trusted by leading brands</p>
                <div className="flex justify-center md:justify-start flex-wrap gap-3 sm:gap-6 items-center opacity-70">
                  {/* Client logo placeholders - Improved for small screens */}
                  <div className="h-5 sm:h-6 w-auto flex items-center">
                    <div className="w-14 sm:w-20 h-5 sm:h-6 bg-gray-300 rounded-sm flex items-center justify-center text-[8px] sm:text-[10px] text-gray-500">Client 1</div>
                  </div>
                  <div className="h-5 sm:h-6 w-auto flex items-center">
                    <div className="w-14 sm:w-20 h-5 sm:h-6 bg-gray-300 rounded-sm flex items-center justify-center text-[8px] sm:text-[10px] text-gray-500">Client 2</div>
                  </div>
                  <div className="h-5 sm:h-6 w-auto flex items-center">
                    <div className="w-14 sm:w-20 h-5 sm:h-6 bg-gray-300 rounded-sm flex items-center justify-center text-[8px] sm:text-[10px] text-gray-500">Client 3</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Animation - Optimized for mobile */}
            <div className="relative flex items-center justify-center lg:justify-end mt-6 lg:mt-0">
              {/* Card containing animation - Mobile responsive */}
              <div className="relative bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl shadow-indigo-500/10 border border-indigo-100 p-0.5 sm:p-1 w-full max-w-md mx-auto md:max-w-lg">
                {/* Top bar with WordPress logo */}
                <div className="absolute top-0 left-0 w-full h-1 sm:h-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-t-xl"></div>
                <div className="bg-white rounded-xl overflow-hidden p-2 sm:p-4">
                  {/* WordPress characteristic top bar */}
                  <div className="flex items-center justify-between px-1 sm:px-2 py-1 mb-1 sm:mb-2">
                    <div className="flex items-center space-x-1 sm:space-x-1.5">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-400"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="flex items-center text-[10px] sm:text-xs text-gray-500 font-mono">
                      <span>wordpress-site.local</span>
                    </div>
                  </div>
                  
                  {/* WordPress Animation - Adjusted for mobile */}
                  <div className="w-full h-[240px] sm:h-[280px] md:h-[320px] relative overflow-hidden flex items-center justify-center">
                    {/* WordPress Logo Animation */}
                    <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 animate-float">
                      {/* WordPress Logo */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32">
                          <div className="absolute inset-0 border-4 sm:border-6 border-[#21759b] rounded-full animate-pulse-slow"></div>
                          {/* WordPress logo placeholder since the SVG might be missing */}
                          <div className="absolute inset-0 m-auto flex items-center justify-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-[#21759b] flex items-center justify-center text-white font-bold text-xl sm:text-2xl">WP</div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Orbiting Elements - Mobile optimized */}
                      <div className="absolute w-full h-full animate-orbit">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-600 to-indigo-600 p-1 sm:p-1.5 rounded-lg shadow-lg">
                          <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                          </svg>
                        </div>
                      </div>
                      
                      <div className="absolute w-full h-full animate-orbit-delay-1">
                        <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-cyan-400 p-1 sm:p-1.5 rounded-lg shadow-lg">
                          <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" clipRule="evenodd"></path>
                          </svg>
                        </div>
                      </div>
                      
                      <div className="absolute w-full h-full animate-orbit-delay-2">
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-gradient-to-r from-amber-500 to-orange-500 p-1 sm:p-1.5 rounded-lg shadow-lg">
                          <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
                          </svg>
                        </div>
                      </div>
                      
                      <div className="absolute w-full h-full animate-orbit-delay-3">
                        <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-green-500 to-emerald-500 p-1.5 rounded-lg shadow-lg">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" clipRule="evenodd"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    {/* WordPress Dashboard Elements */}
                    <div className="absolute bottom-4 left-4 right-4 h-16 bg-white/90 backdrop-blur-sm rounded-lg shadow-md border border-gray-200 flex items-center px-4 animate-slide-up">
                      <div className="w-8 h-8 rounded-md bg-[#21759b] flex items-center justify-center mr-3 shadow-sm">
                        <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                          <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="h-2 bg-gray-200 rounded-full w-3/4 mb-2"></div>
                        <div className="h-2 bg-gray-200 rounded-full w-1/2"></div>
                      </div>
                      <div className="ml-4 w-12 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-green-500 animate-pulse"></div>
                      </div>
                    </div>
                    
                    {/* Floating Code Blocks - Made smaller to match homepage scale */}
                    <div className="absolute top-6 right-6 bg-white/80 backdrop-blur-sm p-1.5 rounded-md animate-float-delay-1 shadow-sm border border-[#21759b]/20">
                      <div className="text-[6px] sm:text-[8px] font-mono text-[#21759b]">
                        <div>{"function custom_theme() {"}</div>
                        <div>{"  wp_enqueue_style(...);"}</div>
                        <div>{"}"};</div>
                      </div>
                    </div>
                    
                    <div className="absolute top-20 left-6 bg-white/80 backdrop-blur-sm p-1.5 rounded-md animate-float-delay-2 shadow-sm border border-[#21759b]/20">
                      <div className="text-[6px] sm:text-[8px] font-mono text-[#21759b]">
                        <div>{"add_action("}</div>
                        <div>{"  'wp_enqueue_scripts',"}</div>
                        <div>{"  'custom_theme'"}</div>
                        <div>{")"};</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Control dots */}
                <div className="absolute -bottom-3 left-0 right-0 mx-auto w-16 h-6 bg-white rounded-full shadow-md flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mx-0.5"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mx-0.5"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mx-0.5"></div>
                </div>
                
                {/* Floating elements for depth */}
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl -rotate-6 opacity-80 shadow-lg"></div>
                <div className="absolute -bottom-2 -left-3 w-8 h-8 bg-gradient-to-tr from-purple-600 to-indigo-500 rounded-lg rotate-12 opacity-80 shadow-lg"></div>
              </div>
              
              {/* Code snippets floating around */}
              <div className="absolute top-10 -right-6 bg-white/90 backdrop-blur-sm shadow-md rounded-md p-2 w-32 rotate-3 text-xs font-mono text-indigo-800 border border-indigo-100">
                <div className="text-indigo-500">{'<?php'}</div>
                <div>{'function wp_init() {'}</div>
                <div className="pl-2">{'// Code'}</div>
                <div>{'}'}</div>
              </div>
              
              <div className="absolute bottom-10 -left-4 bg-white/90 backdrop-blur-sm shadow-md rounded-md p-2 w-24 -rotate-6 text-xs font-mono text-indigo-800 border border-indigo-100">
                <div className="text-green-500">{'// Theme'}</div>
                <div>{'add_action('}</div>
                <div>{'  "init"'}</div>
                <div>{');'}</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80" fill="white" preserveAspectRatio="none" className="w-full h-auto">
            <path d="M0,64L60,58.7C120,53,240,43,360,42.7C480,43,600,53,720,58.7C840,64,960,64,1080,56C1200,48,1320,32,1380,24L1440,16L1440,80L1380,80C1320,80,1200,80,1080,80C960,80,840,80,720,80C600,80,480,80,360,80C240,80,120,80,60,80L0,80Z"></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Premium WordPress Features</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-2">Our WordPress development services include everything you need to create a high-performing, secure, and user-friendly website.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-50 rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100 transition-all hover:shadow-md hover:-translate-y-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">High-Performance</h3>
              <p className="text-sm sm:text-base text-gray-600">Optimized code, server-side caching, and CDN integration for lightning-fast page loads that keep users engaged.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-50 rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100 transition-all hover:shadow-md hover:-translate-y-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">Advanced Security</h3>
              <p className="text-sm sm:text-base text-gray-600">Built-in protection against common vulnerabilities, malware scanning, and regular security updates.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-50 rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100 transition-all hover:shadow-md hover:-translate-y-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">SEO Optimization</h3>
              <p className="text-sm sm:text-base text-gray-600">Schema markup, optimized metadata, and clean code structure to help your site rank higher in search results.</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gray-50 rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100 transition-all hover:shadow-md hover:-translate-y-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">Content Management</h3>
              <p className="text-sm sm:text-base text-gray-600">Custom post types, intuitive admin interfaces, and editor enhancements for easy content updates.</p>
            </div>

            {/* Feature 5 */}
            <div className="bg-gray-50 rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100 transition-all hover:shadow-md hover:-translate-y-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">E-commerce Ready</h3>
              <p className="text-sm sm:text-base text-gray-600">WooCommerce integration with custom product displays, payment gateways, and order management systems.</p>
            </div>

            {/* Feature 6 */}
            <div className="bg-gray-50 rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100 transition-all hover:shadow-md hover:-translate-y-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">Analytics Integration</h3>
              <p className="text-sm sm:text-base text-gray-600">Google Analytics, conversion tracking, and custom dashboards to monitor your site&apos;s performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section id="workflow" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Our WordPress Development Process</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-2">We follow a structured approach to deliver high-quality WordPress websites that meet your business goals.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {/* Step 1 */}
            <div className="relative mt-6 sm:mt-8">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white text-sm sm:text-base font-bold">1</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 pt-6 sm:pt-8 border border-gray-100">
                <h3 className="text-lg sm:text-xl font-bold text-center mb-2 sm:mb-3">Discovery</h3>
                <p className="text-sm sm:text-base text-gray-600 text-center">We start by understanding your business goals, target audience, and website requirements.</p>
              </div>
              <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-200 -z-10 transform -translate-x-8"></div>
            </div>
            
            {/* Step 2 */}
            <div className="relative mt-6 sm:mt-8">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white text-sm sm:text-base font-bold">2</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 pt-6 sm:pt-8 border border-gray-100">
                <h3 className="text-lg sm:text-xl font-bold text-center mb-2 sm:mb-3">Design</h3>
                <p className="text-sm sm:text-base text-gray-600 text-center">Our designers create wireframes and mockups that align with your brand identity.</p>
              </div>
              <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-200 -z-10 transform -translate-x-8"></div>
            </div>
            
            {/* Step 3 */}
            <div className="relative mt-6 sm:mt-8">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white text-sm sm:text-base font-bold">3</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 pt-6 sm:pt-8 border border-gray-100">
                <h3 className="text-lg sm:text-xl font-bold text-center mb-2 sm:mb-3">Development</h3>
                <p className="text-sm sm:text-base text-gray-600 text-center">Our WordPress experts build your site with clean code and optimized performance.</p>
              </div>
              <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-200 -z-10 transform -translate-x-8"></div>
            </div>
            
            {/* Step 4 */}
            <div className="relative mt-6 sm:mt-8">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white text-sm sm:text-base font-bold">4</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 pt-6 sm:pt-8 border border-gray-100">
                <h3 className="text-lg sm:text-xl font-bold text-center mb-2 sm:mb-3">Launch</h3>
                <p className="text-sm sm:text-base text-gray-600 text-center">After thorough testing, we deploy your site and provide training on content management.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">WordPress Development Plans</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-2">Choose the perfect WordPress solution for your business needs with our flexible pricing options.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Basic Plan */}
            <div className="bg-white rounded-xl p-5 sm:p-6 md:p-8 shadow-md border border-gray-200 transition-all hover:shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-gray-100 rounded-bl-full"></div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">Basic</h3>
              <div className="text-[#21759b] font-bold text-3xl sm:text-4xl mb-4 sm:mb-6">$999<span className="text-base sm:text-lg text-gray-500 font-normal">/one-time</span></div>
              
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                <li className="flex items-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-sm sm:text-base">5-page WordPress website</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-sm sm:text-base">Mobile responsive design</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-sm sm:text-base">Basic SEO optimization</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-sm sm:text-base">Contact form integration</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-sm sm:text-base">1 month of support</span>
                </li>
              </ul>
              
              <button className="w-full py-2.5 sm:py-3 px-4 sm:px-6 bg-[#21759b] text-white text-sm sm:text-base rounded-lg font-semibold hover:bg-[#1d6586] transition-colors">
                Buy Now
              </button>
            </div>
            
            {/* Pro Plan */}
            <div className="bg-white rounded-xl p-5 sm:p-6 md:p-8 shadow-xl border border-indigo-200 scale-100 sm:scale-105 md:scale-105 z-10 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 sm:w-40 h-32 sm:h-40 bg-indigo-50 rounded-full"></div>
              <div className="absolute top-0 left-0 bg-indigo-600 text-white px-3 sm:px-4 py-1 rounded-br-lg font-medium text-xs sm:text-sm">POPULAR</div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">Professional</h3>
              <div className="text-indigo-600 font-bold text-3xl sm:text-4xl mb-4 sm:mb-6">$2,499<span className="text-base sm:text-lg text-gray-500 font-normal">/one-time</span></div>
              
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                <li className="flex items-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-sm sm:text-base">Up to 15-page custom design</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-sm sm:text-base">E-commerce functionality</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-sm sm:text-base">Advanced SEO package</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-sm sm:text-base">Premium plugin integration</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-sm sm:text-base">3 months of support</span>
                </li>
              </ul>
              
              <button className="w-full py-2.5 sm:py-3 px-4 sm:px-6 bg-indigo-600 text-white text-sm sm:text-base rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                Buy Now
              </button>
            </div>
            
            {/* Enterprise Plan */}
            <div className="bg-white rounded-xl p-5 sm:p-6 md:p-8 shadow-md border border-gray-200 transition-all hover:shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-gray-100 rounded-bl-full"></div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">Enterprise</h3>
              <div className="text-purple-600 font-bold text-3xl sm:text-4xl mb-4 sm:mb-6">$4,999<span className="text-base sm:text-lg text-gray-500 font-normal">/one-time</span></div>
              
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                <li className="flex items-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-sm sm:text-base">Unlimited pages</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-sm sm:text-base">Full e-commerce solution</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-sm sm:text-base">Custom plugin development</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-sm sm:text-base">Performance optimization</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-sm sm:text-base">6 months of support</span>
                </li>
              </ul>
              
              <button className="w-full py-2.5 sm:py-3 px-4 sm:px-6 bg-purple-600 text-white text-sm sm:text-base rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Buy Now
              </button>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600">Need a custom solution? <Link href="/contact" className="text-indigo-600 font-medium hover:text-indigo-700">Contact us</Link> for a personalized quote.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-6xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Frequently Asked Questions</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-2">Find answers to common questions about our WordPress development services.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
            {/* FAQ Item 1 */}
            <div className="bg-gray-50 rounded-lg p-4 sm:p-6 shadow-sm">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">How long does it take to build a WordPress website?</h3>
              <p className="text-sm sm:text-base text-gray-600">Typically, a basic WordPress website takes 2-4 weeks to develop. More complex sites with custom functionality may take 6-8 weeks. Enterprise solutions can take 8-12 weeks depending on requirements.</p>
            </div>
            
            {/* FAQ Item 2 */}
            <div className="bg-gray-50 rounded-lg p-4 sm:p-6 shadow-sm">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Will my website be mobile-friendly?</h3>
              <p className="text-gray-600 mt-2 max-w-xl">We bring your WordPress vision to life with custom development. From theme customization to plugin development, we&apos;ll create a website that drives business growth.</p>
            </div>
            
            {/* FAQ Item 3 */}
            <div className="bg-gray-50 rounded-lg p-4 sm:p-6 shadow-sm">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Do you provide website hosting?</h3>
              <p className="text-sm sm:text-base text-gray-600">Yes, we offer managed WordPress hosting solutions optimized for speed and security. We can also deploy your website to your existing hosting provider if preferred.</p>
            </div>
            
            {/* FAQ Item 4 */}
            <div className="bg-gray-50 rounded-lg p-4 sm:p-6 shadow-sm">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Can I update the website myself?</h3>
              <p className="text-sm sm:text-base text-gray-600">Absolutely. We build user-friendly admin interfaces and provide training so you can easily update content, add blog posts, or manage products without technical knowledge.</p>
            </div>
            
            {/* FAQ Item 5 */}
            <div className="bg-gray-50 rounded-lg p-4 sm:p-6 shadow-sm">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Do your WordPress sites work with plugins?</h3>
              <p className="text-sm sm:text-base text-gray-600">Yes, our WordPress sites are fully compatible with plugins. We carefully select and integrate plugins that enhance functionality while maintaining optimal performance.</p>
            </div>
            
            {/* FAQ Item 6 */}
            <div className="bg-gray-50 rounded-lg p-4 sm:p-6 shadow-sm">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">What about website security?</h3>
              <p className="text-sm sm:text-base text-gray-600">Security is our priority. We implement robust security measures including malware scanning, firewall protection, SSL certificates, and regular backups to keep your site secure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto px-2 sm:px-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Ready to Build Your WordPress Website?</h2>
            <p className="text-base sm:text-lg opacity-90 mb-6 sm:mb-8">Get in touch today to discuss your project requirements and how we can help you achieve your business goals with a custom WordPress solution.</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link href="/contact" className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-indigo-600 text-sm sm:text-base font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Contact Us
              </Link>
              <button className="px-6 sm:px-8 py-2.5 sm:py-3 bg-transparent border-2 border-white text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-white/10 transition-colors">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
