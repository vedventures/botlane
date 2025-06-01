'use client';

import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#f9fafb] to-[#f5f3ff] pt-16 sm:pt-20 pb-8 sm:pb-10 border-t border-purple-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100 rounded-full filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100 rounded-full filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/4"></div>
      
      <div className="container mx-auto px-5 sm:px-8 md:px-14 lg:px-24 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {/* Company Info - Now takes 1 column on large screens */}
          <div className="col-span-2 lg:col-span-1 md:col-span-2">
            <div className="mb-6">
              <Image 
                src="/botlanelogo.svg" 
                alt="BotLane Logo" 
                width={160} 
                height={50} 
                className="h-auto" 
                priority
                style={{ background: 'transparent' }}
              />
            </div>
            <p className="text-[#4b5563] mb-6 text-sm leading-relaxed max-w-xs">
              Empowering businesses through innovative digital solutions. We specialize in web development, digital marketing, and AI integration.
            </p>
            {/* Social Icons in a more compact layout */}
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" 
                className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center text-[#64748b] hover:text-white hover:bg-[#7c3aed] transition-all duration-300 group">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" 
                className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center text-[#64748b] hover:text-white hover:bg-[#7c3aed] transition-all duration-300 group">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" 
                className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center text-[#64748b] hover:text-white hover:bg-[#7c3aed] transition-all duration-300 group">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" 
                className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center text-[#64748b] hover:text-white hover:bg-[#7c3aed] transition-all duration-300 group">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Services - Each link section takes 1 column */}
          <div className="col-span-1 lg:col-span-1 md:col-span-1">
            <div className="relative">
              <h4 className="text-[#1e1b4b] font-semibold mb-4 sm:mb-5 text-sm sm:text-base inline-flex items-center">
                <span className="w-1 h-5 bg-gradient-to-b from-purple-600 to-indigo-600 rounded-full mr-2"></span>
                <span>Services</span>
              </h4>
            </div>
            <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm">
              <li>
                <Link href="/services/web-development" className="text-[#4b5563] hover:text-[#7c3aed] transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-200 group-hover:bg-purple-500 mr-2 transition-colors"></span>
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/web-apps" className="text-[#4b5563] hover:text-[#7c3aed] transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-200 group-hover:bg-purple-500 mr-2 transition-colors"></span>
                  Web Applications
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing" className="text-[#4b5563] hover:text-[#7c3aed] transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-200 group-hover:bg-purple-500 mr-2 transition-colors"></span>
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/seo" className="text-[#4b5563] hover:text-[#7c3aed] transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-200 group-hover:bg-purple-500 mr-2 transition-colors"></span>
                  SEO Services
                </Link>
              </li>
              <li>
                <Link href="/services/ai-solutions" className="text-[#4b5563] hover:text-[#7c3aed] transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-200 group-hover:bg-purple-500 mr-2 transition-colors"></span>
                  AI Solutions
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div className="col-span-1 lg:col-span-1 md:col-span-1">
            <div className="relative">
              <h4 className="text-[#1e1b4b] font-semibold mb-4 sm:mb-5 text-sm sm:text-base inline-flex items-center">
                <span className="w-1 h-5 bg-gradient-to-b from-indigo-600 to-purple-600 rounded-full mr-2"></span>
                <span>Company</span>
              </h4>
            </div>
            <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm">
              <li>
                <Link href="/about" className="text-[#4b5563] hover:text-[#7c3aed] transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-200 group-hover:bg-indigo-500 mr-2 transition-colors"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-[#4b5563] hover:text-[#7c3aed] transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-200 group-hover:bg-indigo-500 mr-2 transition-colors"></span>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-[#4b5563] hover:text-[#7c3aed] transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-200 group-hover:bg-indigo-500 mr-2 transition-colors"></span>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-[#4b5563] hover:text-[#7c3aed] transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-200 group-hover:bg-indigo-500 mr-2 transition-colors"></span>
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#4b5563] hover:text-[#7c3aed] transition-colors flex items-center group">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-200 group-hover:bg-indigo-500 mr-2 transition-colors"></span>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact - Now takes 1 column on large screens */}
          <div className="col-span-2 lg:col-span-1 md:col-span-2">
            <div className="relative">
              <h4 className="text-[#1e1b4b] font-semibold mb-4 sm:mb-5 text-sm sm:text-base inline-flex items-center">
                <span className="w-1 h-5 bg-gradient-to-b from-purple-600 via-indigo-600 to-purple-600 rounded-full mr-2"></span>
                <span>Contact</span>
              </h4>
            </div>
            <ul className="space-y-4 text-xs sm:text-sm">
              {/* Email and Phone on the same line - Now first in the list */}
              <li className="flex flex-col space-y-4">
                <div className="flex flex-wrap gap-4">
                  {/* Email */}
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-purple-100 transition-colors">
                      <svg className="h-4 w-4 text-[#7c3aed]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-[#4b5563] text-xs sm:text-sm font-medium block mb-0.5">Email Us</span>
                      <div className="flex flex-col">
                        <a href="mailto:founder@botlane.io" className="text-[#64748b] hover:text-[#7c3aed] transition-colors">
                          founder@botlane.io
                        </a>
                        <a href="mailto:support@botlane.io" className="text-[#64748b] hover:text-[#7c3aed] transition-colors">
                          support@botlane.io
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Phone */}
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-purple-100 transition-colors">
                      <svg className="h-4 w-4 text-[#7c3aed]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-[#4b5563] text-xs sm:text-sm font-medium block mb-0.5">Call Us</span>
                      <a href="tel:+919979972714" className="text-[#64748b] hover:text-[#7c3aed] transition-colors">
                        +91 9979972714
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              
              {/* Address - Now below email and phone */}
              <li className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-purple-100 transition-colors">
                  <svg className="h-4 w-4 text-[#7c3aed]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[#4b5563] text-xs sm:text-sm font-medium block mb-0.5">Registered Address</span>
                  <span className="text-[#64748b] text-xs sm:text-sm leading-relaxed block">
                    #17, 2nd Floor, Vedanta Ventures,<br />7th Main Road, Indiranagar,<br />Bangalore - 560038, India
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section - Improved spacing and alignment */}
        <div className="relative mt-12 sm:mt-16 pt-8 border-t border-purple-100/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[#64748b] text-xs sm:text-sm text-center md:text-left flex items-center">
              <span className="inline-block w-4 h-4 mr-2 opacity-70">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </span>
              © {currentYear} BotLane | Vedanta Ventures. All rights reserved.
            </p>
            <div>
              <ul className="flex flex-wrap justify-center md:justify-end gap-6">
                <li>
                  <Link href="/privacy-policy" className="text-[#64748b] hover:text-[#7c3aed] text-xs sm:text-sm transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="text-[#64748b] hover:text-[#7c3aed] text-xs sm:text-sm transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/sitemap" className="text-[#64748b] hover:text-[#7c3aed] text-xs sm:text-sm transition-colors">
                    Sitemap
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;