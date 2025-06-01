import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Contact Us | BotLane',
  description: 'Get in touch with BotLane for custom AI solutions, web development, and digital marketing services. We\'re here to help your business grow.',
};

export default function ContactPage() {
  return (
    <main className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-20">
  {/* Decorative background elements */}
  <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50"></div>
  <div className="absolute top-0 left-0 w-full h-full opacity-10">
    <div className="absolute top-10 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
    <div className="absolute top-0 -left-4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
    <div className="absolute -bottom-8 left-20 w-72 h-72 bg-violet-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
  </div>
  
  {/* Decorative grid pattern */}
  <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
  
  {/* Content */}
  <div className="container mx-auto px-4 max-w-6xl relative">
    <div className="relative z-10 max-w-3xl mx-auto text-center">
      <div className="inline-block mb-4">
        <div className="flex items-center justify-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-sm border border-purple-100">
          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
          <span className="text-xs font-medium text-gray-600">We're available to help you</span>
        </div>
      </div>
      
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1e1b4b] mb-6 leading-tight">
        Let's Start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Conversation</span>
      </h1>
      
      <p className="text-[#4b5563] text-lg md:text-xl max-w-2xl mx-auto mb-8">
        Have a project in mind or questions about our services? We're here to transform your ideas into reality.
      </p>
      
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <a href="#contact-form" className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-purple-500/20 transition-all transform hover:-translate-y-0.5">
          Send a Message
        </a>
        <a href="tel:+919979972714" className="px-6 py-3 bg-white text-[#1e1b4b] font-medium rounded-lg border border-gray-200 hover:border-purple-200 hover:bg-purple-50 transition-all transform hover:-translate-y-0.5 flex items-center">
          <svg className="w-4 h-4 mr-2 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Call Us
        </a>
      </div>
      
      <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
        <div className="flex items-center">
          <svg className="w-5 h-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>24hr Response Time</span>
        </div>
        <div className="flex items-center">
          <svg className="w-5 h-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Free Consultation</span>
        </div>
        <div className="flex items-center">
          <svg className="w-5 h-5 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Global Clients</span>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="py-16 relative z-10" id="contact-form">
  <div className="container mx-auto px-4 max-w-6xl">
    <div className="flex flex-col lg:flex-row gap-12">
      {/* Left Column - Contact Form */}
      <div className="w-full lg:w-7/12">
        <div className="relative">
          {/* Decorative elements */}
          <div className="absolute -top-6 -left-6 w-12 h-12 bg-purple-100 rounded-lg opacity-70 hidden md:block"></div>
          <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-indigo-100 rounded-lg opacity-70 hidden md:block"></div>
          
          {/* Card */}
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 z-10">
            {/* Gradient top border */}
            <div className="h-1.5 w-full bg-gradient-to-r from-indigo-600 to-purple-600"></div>
            
            <div className="p-8 md:p-10">
              <div className="flex items-center mb-8">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#1e1b4b]">Send Us a Message</h2>
                  <p className="text-gray-500 text-sm">We'll get back to you within 24 hours</p>
                </div>
              </div>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      className="peer w-full px-4 py-3 text-[#1e1b4b] bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all placeholder-transparent"
                      placeholder="Your Name"
                      required
                    />
                    <label 
                      htmlFor="name" 
                      className="absolute left-4 -top-2.5 text-xs font-medium text-gray-500 bg-gray-50 px-1 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:-top-2.5 peer-focus:text-xs transition-all duration-200"
                    >
                      Your Name
                    </label>
                  </div>
                  
                  {/* Email Field */}
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      className="peer w-full px-4 py-3 text-[#1e1b4b] bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all placeholder-transparent"
                      placeholder="Email Address"
                      required
                    />
                    <label 
                      htmlFor="email" 
                      className="absolute left-4 -top-2.5 text-xs font-medium text-gray-500 bg-gray-50 px-1 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:-top-2.5 peer-focus:text-xs transition-all duration-200"
                    >
                      Email Address
                    </label>
                  </div>
                </div>
                
                {/* Phone Field */}
                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    className="peer w-full px-4 py-3 text-[#1e1b4b] bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all placeholder-transparent"
                    placeholder="Phone Number (Optional)"
                  />
                  <label 
                    htmlFor="phone" 
                    className="absolute left-4 -top-2.5 text-xs font-medium text-gray-500 bg-gray-50 px-1 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:-top-2.5 peer-focus:text-xs transition-all duration-200"
                  >
                    Phone Number (Optional)
                  </label>
                </div>
                
                {/* Service Selection */}
                <div className="relative">
                  <select
                    id="service"
                    name="service"
                    className="block w-full px-4 py-3 text-gray-700 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>Select a Service</option>
                    <option value="web-development">Web Development</option>
                    <option value="ai-solutions">AI Solutions</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="automation">Workflow Automation</option>
                    <option value="other">Other Services</option>
                  </select>
                  <label 
                    htmlFor="service" 
                    className="absolute left-4 -top-2.5 text-xs font-medium text-gray-500 bg-gray-50 px-1 z-10"
                  >
                    Service You're Interested In
                  </label>
                  <div className="absolute right-4 top-3.5 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                
                {/* Budget Range */}
                <div className="space-y-2">
                  <label className="text-xs font-medium text-gray-500">Estimated Budget Range</label>
                  <div className="grid grid-cols-4 gap-3">
                    <div className="relative">
                      <input type="radio" id="budget-1" name="budget" value="small" className="peer absolute opacity-0 w-full h-full cursor-pointer z-10" />
                      <label htmlFor="budget-1" className="block text-center px-3 py-2 text-xs border border-gray-200 rounded-lg peer-checked:bg-purple-50 peer-checked:border-purple-300 peer-checked:text-purple-700 transition-all cursor-pointer">
                        &lt; $5k
                      </label>
                    </div>
                    <div className="relative">
                      <input type="radio" id="budget-2" name="budget" value="medium" className="peer absolute opacity-0 w-full h-full cursor-pointer z-10" />
                      <label htmlFor="budget-2" className="block text-center px-3 py-2 text-xs border border-gray-200 rounded-lg peer-checked:bg-purple-50 peer-checked:border-purple-300 peer-checked:text-purple-700 transition-all cursor-pointer">
                        $5k - $10k
                      </label>
                    </div>
                    <div className="relative">
                      <input type="radio" id="budget-3" name="budget" value="large" className="peer absolute opacity-0 w-full h-full cursor-pointer z-10" />
                      <label htmlFor="budget-3" className="block text-center px-3 py-2 text-xs border border-gray-200 rounded-lg peer-checked:bg-purple-50 peer-checked:border-purple-300 peer-checked:text-purple-700 transition-all cursor-pointer">
                        $10k - $25k
                      </label>
                    </div>
                    <div className="relative">
                      <input type="radio" id="budget-4" name="budget" value="enterprise" className="peer absolute opacity-0 w-full h-full cursor-pointer z-10" />
                      <label htmlFor="budget-4" className="block text-center px-3 py-2 text-xs border border-gray-200 rounded-lg peer-checked:bg-purple-50 peer-checked:border-purple-300 peer-checked:text-purple-700 transition-all cursor-pointer">
                        $25k+
                      </label>
                    </div>
                  </div>
                </div>
                
                {/* Message Field */}
                <div className="relative">
                  <textarea
                    id="message"
                    rows={4}
                    className="peer w-full px-4 py-3 text-[#1e1b4b] bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all placeholder-transparent resize-none"
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                  <label 
                    htmlFor="message" 
                    className="absolute left-4 -top-2.5 text-xs font-medium text-gray-500 bg-gray-50 px-1 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:-top-2.5 peer-focus:text-xs transition-all duration-200"
                  >
                    Tell us about your project...
                  </label>
                </div>
                
                {/* File Upload */}
                <div className="relative">
                  <div className="w-full px-4 py-8 text-center border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors">
                    <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                    <svg className="w-10 h-10 mx-auto mb-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <p className="text-sm text-gray-500">
                      <span className="font-medium text-purple-600">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      PDF, DOC, PNG, JPG up to 10MB
                    </p>
                  </div>
                </div>
                
                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-purple-500/20 transition-all transform hover:-translate-y-0.5 flex items-center justify-center"
                  >
                    <span>Send Message</span>
                    <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                  <p className="text-xs text-gray-500 text-center mt-3">
                    By submitting this form, you agree to our <Link href="/privacy-policy" className="text-purple-600 hover:underline">Privacy Policy</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-100">
            <p className="text-xs text-gray-500">
              For urgent inquiries outside business hours, please email us and we'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </div>
      
      {/* Right Column - Contact Information */}
      <div className="w-full lg:w-5/12">
        <div className="space-y-8">
          <div className="relative">
            <h3 className="text-xl font-bold text-[#1e1b4b] mb-6 flex items-center">
              <span className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center mr-3 shadow-md">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Ways to Connect
            </h3>
            
            {/* Contact Cards */}
            <div className="space-y-4">
              {/* Email */}
              <div className="group bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:border-purple-200 transition-all transform hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <svg className="h-6 w-6 text-[#7c3aed]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[#1e1b4b] font-semibold text-base">Email Us</h4>
                    <a href="mailto:founder@botlane.io" className="text-[#4b5563] text-sm hover:text-[#7c3aed] transition-colors flex items-center group-hover:font-medium">
                      founder@botlane.io
                      <svg className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="mt-3 pl-16">
                  <p className="text-xs text-gray-500">For general inquiries and project discussions</p>
                </div>
              </div>
              
              {/* Phone */}
              <div className="group bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:border-purple-200 transition-all transform hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <svg className="h-6 w-6 text-[#7c3aed]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[#1e1b4b] font-semibold text-base">Call Us</h4>
                    <a href="tel:+919979972714" className="text-[#4b5563] text-sm hover:text-[#7c3aed] transition-colors flex items-center group-hover:font-medium">
                      +91 9979972714
                      <svg className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="mt-3 pl-16">
                  <p className="text-xs text-gray-500">Available Monday-Friday, 9:00 AM - 6:00 PM IST</p>
                </div>
              </div>
              
              {/* Address */}
              <div className="group bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:border-purple-200 transition-all transform hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <svg className="h-6 w-6 text-[#7c3aed]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[#1e1b4b] font-semibold text-base">Registered Address</h4>
                    <p className="text-[#4b5563] text-sm leading-relaxed">
                      #17, 2nd Floor, 7th Main Road,<br />
                      Indiranagar, Bangalore - 560038<br />
                      India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Schedule a Call Section */}
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-8 rounded-xl text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('/grid-pattern.svg')]"></div>
            
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Schedule a Consultation
              </h3>
              
              <p className="text-indigo-100 mb-6 text-sm">
                Book a free 30-minute consultation call with our experts to discuss your project needs and explore solutions.
              </p>
              
              <a 
                href="#" 
                className="inline-flex items-center px-5 py-3 bg-white text-indigo-700 font-medium rounded-lg hover:bg-indigo-50 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Book a Time Slot
              </a>
            </div>
          </div>
          
          {/* Working Hours */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <h3 className="text-[#1e1b4b] font-semibold text-base mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Working Hours
            </h3>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                <span className="text-[#4b5563] text-sm">Monday - Friday</span>
                <span className="text-[#1e1b4b] font-medium text-sm bg-indigo-50 px-3 py-1 rounded-full">9:00 AM - 6:00 PM IST</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                <span className="text-[#4b5563] text-sm">Saturday</span>
                <span className="text-[#1e1b4b] font-medium text-sm bg-indigo-50 px-3 py-1 rounded-full">10:00 AM - 4:00 PM IST</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#4b5563] text-sm">Sunday</span>
                <span className="text-[#1e1b4b] font-medium text-sm bg-red-50 text-red-600 px-3 py-1 rounded-full">Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* FAQ Section */}
<section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4 max-w-6xl">
    <div className="text-center mb-12">
      <div className="inline-block mb-4">
        <div className="px-4 py-1.5 rounded-full bg-white shadow-sm border border-purple-100 text-xs font-medium text-gray-600">
          Common Questions
        </div>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-[#1e1b4b] mb-4">
        Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Questions</span>
      </h2>
      <p className="text-[#4b5563] text-lg max-w-2xl mx-auto">
        Find quick answers to common questions about our services and process.
      </p>
    </div>
    
    <div className="max-w-4xl mx-auto">
      {/* FAQ Accordion */}
      <div className="space-y-4">
        {/* FAQ Item 1 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:border-purple-100 transition-colors">
          <details className="group">
            <summary className="flex items-center justify-between p-6 cursor-pointer">
              <h3 className="text-lg font-semibold text-[#1e1b4b] group-open:text-purple-600 transition-colors">How quickly can you respond to inquiries?</h3>
              <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                </svg>
              </span>
            </summary>
            <div className="px-6 pb-6 pt-0">
              <p className="text-[#4b5563]">
                We typically respond to all inquiries within 24 business hours. For urgent matters, please call our support line directly at <a href="tel:+919979972714" className="text-purple-600 font-medium">+91 9979972714</a>.
              </p>
            </div>
          </details>
        </div>
        
        {/* FAQ Item 2 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:border-purple-100 transition-colors">
          <details className="group">
            <summary className="flex items-center justify-between p-6 cursor-pointer">
              <h3 className="text-lg font-semibold text-[#1e1b4b] group-open:text-purple-600 transition-colors">Do you offer consultations?</h3>
              <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                </svg>
              </span>
            </summary>
            <div className="px-6 pb-6 pt-0">
              <p className="text-[#4b5563]">
                Yes, we offer free 30-minute initial consultations to discuss your project requirements and how we can help. You can book a consultation directly through our online calendar or contact us to schedule a time that works for you.
              </p>
            </div>
          </details>
        </div>
        
        {/* FAQ Item 3 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:border-purple-100 transition-colors">
          <details className="group">
            <summary className="flex items-center justify-between p-6 cursor-pointer">
              <h3 className="text-lg font-semibold text-[#1e1b4b] group-open:text-purple-600 transition-colors">What information should I provide for a quote?</h3>
              <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                </svg>
              </span>
            </summary>
            <div className="px-6 pb-6 pt-0">
              <p className="text-[#4b5563]">
                To provide an accurate quote, please share your project scope, timeline, specific requirements, and any existing materials or references. The more details you can provide, the more precise our estimate will be. We can sign an NDA before discussing sensitive project details if required.
              </p>
            </div>
          </details>
        </div>
        
        {/* FAQ Item 4 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:border-purple-100 transition-colors">
          <details className="group">
            <summary className="flex items-center justify-between p-6 cursor-pointer">
              <h3 className="text-lg font-semibold text-[#1e1b4b] group-open:text-purple-600 transition-colors">Do you work with international clients?</h3>
              <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                </svg>
              </span>
            </summary>
            <div className="px-6 pb-6 pt-0">
              <p className="text-[#4b5563]">
                Absolutely! We work with clients globally and have experience managing projects across different time zones. Our team is equipped to handle international collaborations through various communication tools and flexible scheduling to accommodate different time zones.
              </p>
            </div>
          </details>
        </div>
        
        {/* FAQ Item 5 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:border-purple-100 transition-colors">
          <details className="group">
            <summary className="flex items-center justify-between p-6 cursor-pointer">
              <h3 className="text-lg font-semibold text-[#1e1b4b] group-open:text-purple-600 transition-colors">What is your typical project timeline?</h3>
              <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                </svg>
              </span>
            </summary>
            <div className="px-6 pb-6 pt-0">
              <p className="text-[#4b5563]">
                Project timelines vary based on scope and complexity. Simple websites might take 2-4 weeks, while complex web applications or AI solutions can take 2-6 months. During our initial consultation, we'll provide a detailed timeline specific to your project requirements and milestones.
              </p>
            </div>
          </details>
        </div>
      </div>
      
      <div className="text-center mt-10">
        <p className="text-[#4b5563]">
          Don't see your question here?{" "}
          <Link href="#contact-form" className="text-[#7c3aed] font-medium hover:underline">
            Contact us directly
          </Link>{" "}
          and we'll be happy to help.
        </p>
      </div>
    </div>
  </div>
</section>

{/* CTA Section */}
<section className="py-16 bg-white">
  <div className="container mx-auto px-4 max-w-6xl">
    <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 bg-[url('/grid-pattern.svg')]"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mt-10 -mr-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -mb-10 -ml-10"></div>
      
      <div className="relative z-10 px-8 py-12 md:p-16 text-center md:text-left flex flex-col md:flex-row items-center justify-between">
        <div className="mb-8 md:mb-0 md:mr-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to transform your digital presence?
          </h2>
          <p className="text-indigo-100 max-w-xl">
            Let's collaborate to bring your vision to life. Our team is ready to help you achieve your goals.  
          </p>
        </div>
        <div className="flex-shrink-0">
          <a href="#contact-form" className="inline-flex items-center px-6 py-3.5 bg-white text-indigo-700 font-medium rounded-lg hover:bg-indigo-50 transition-colors transform hover:-translate-y-0.5 shadow-lg">
            <span>Start Your Project</span>
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>    </main>
  );
}
