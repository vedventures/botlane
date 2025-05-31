import Link from "next/link";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f9fafb] text-[#374151]">
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#f9fafb] to-white"></div>
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#8b5cf6]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#7c3aed]/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-5 sm:px-8 md:px-14 lg:px-24 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-[#1e1b4b]">Our Service Stacks</h2>
            <p className="text-[#64748b] text-base sm:text-lg">Comprehensive solutions designed to elevate your digital presence</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* DevStack Card */}
            <div className="bg-white border border-[#8b5cf6]/20 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="h-2 bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed]"></div>
              <div className="p-6 sm:p-8">
                <div className="flex items-center mb-4">
                  <span className="text-2xl sm:text-3xl mr-3">🛠️</span>
                  <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] text-transparent bg-clip-text">DevStack</h3>
                </div>
                <p className="text-[#64748b] text-sm sm:text-base mb-5 sm:mb-6">Professional web development services that transform your ideas into powerful, scalable digital solutions.</p>
                <ul className="space-y-2 mb-6 sm:mb-8 text-sm sm:text-base">
                  <li className="flex items-start">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#7c3aed] mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#374151]">Custom Web Applications</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#7c3aed] mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#374151]">E-commerce Solutions</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#7c3aed] mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#374151]">API Development & Integration</span>
                  </li>
                </ul>
                <Link href="/services/devstack" className="inline-flex items-center text-[#7c3aed] hover:text-[#6d28d9] font-medium transition-all duration-300 group text-sm sm:text-base">
                  <span>Explore DevStack</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* FlowStack Card */}
            <div className="bg-white border border-[#8b5cf6]/20 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="h-2 bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed]"></div>
              <div className="p-6 sm:p-8">
                <div className="flex items-center mb-4">
                  <span className="text-2xl sm:text-3xl mr-3">⚡</span>
                  <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] text-transparent bg-clip-text">FlowStack</h3>
                </div>
                <p className="text-[#64748b] text-sm sm:text-base mb-5 sm:mb-6">Strategic digital marketing services that drive traffic, engagement, and conversions for your business.</p>
                <ul className="space-y-2 mb-6 sm:mb-8 text-sm sm:text-base">
                  <li className="flex items-start">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#7c3aed] mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#374151]">Search Engine Optimization</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#7c3aed] mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#374151]">Content Marketing</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#7c3aed] mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#374151]">Social Media Management</span>
                  </li>
                </ul>
                <Link href="/services/flowstack" className="inline-flex items-center text-[#7c3aed] hover:text-[#6d28d9] font-medium transition-all duration-300 group text-sm sm:text-base">
                  <span>Explore FlowStack</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* ScaleStack Card */}
            <div className="bg-white border border-[#8b5cf6]/20 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="h-2 bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed]"></div>
              <div className="p-6 sm:p-8">
                <div className="flex items-center mb-4">
                  <span className="text-2xl sm:text-3xl mr-3">🚀</span>
                  <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] text-transparent bg-clip-text">ScaleStack</h3>
                </div>
                <p className="text-[#64748b] text-sm sm:text-base mb-5 sm:mb-6">Advanced AI and automation solutions that optimize operations and drive business growth.</p>
                <ul className="space-y-2 mb-6 sm:mb-8 text-sm sm:text-base">
                  <li className="flex items-start">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#7c3aed] mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#374151]">AI-Powered Automation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#7c3aed] mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#374151]">Business Intelligence</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#7c3aed] mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#374151]">Workflow Optimization</span>
                  </li>
                </ul>
                <Link href="/services/scalestack" className="inline-flex items-center text-[#7c3aed] hover:text-[#6d28d9] font-medium transition-all duration-300 group text-sm sm:text-base">
                  <span>Explore ScaleStack</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-[#f9fafb] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-40 sm:w-64 h-40 sm:h-64 bg-[#8b5cf6]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 sm:w-64 h-40 sm:h-64 bg-[#7c3aed]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl max-h-6xl bg-[url('/grid-pattern.svg')] bg-center opacity-5"></div>
        
        <div className="container mx-auto px-5 sm:px-8 md:px-14 lg:px-24 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-[#1e1b4b]">Why Choose BotLane</h2>
            <p className="text-[#64748b] text-base sm:text-lg">Our commitment to excellence sets us apart from the competition</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-8 sm:mt-12">
            {/* Results-Driven Strategy */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-[#8b5cf6]/10 hover:border-[#7c3aed] transition-all duration-300 group hover:translate-y-[-4px]">
              <div className="mb-5 sm:mb-6 relative">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                <div className="relative h-12 w-12 sm:h-14 sm:w-14 bg-[#f5f3ff] rounded-lg flex items-center justify-center group-hover:bg-[#ede9fe] transition-all duration-300 shadow-sm border border-violet-100">
                  <svg className="h-6 w-6 sm:h-7 sm:w-7 text-[#7c3aed]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-[#1e1b4b] group-hover:text-[#7c3aed] transition-all duration-300">Results-Driven Strategy</h3>
              <p className="text-sm sm:text-base text-[#64748b] group-hover:text-[#374151] transition-all duration-300">We focus on measurable outcomes and ROI, ensuring every dollar you invest drives tangible business growth.</p>
            </div>
            
            {/* AI-Powered Tools */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-[#8b5cf6]/10 hover:border-[#7c3aed] transition-all duration-300 group hover:translate-y-[-4px]">
              <div className="mb-5 sm:mb-6 relative">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                <div className="relative h-12 w-12 sm:h-14 sm:w-14 bg-[#f5f3ff] rounded-lg flex items-center justify-center group-hover:bg-[#ede9fe] transition-all duration-300 shadow-sm border border-violet-100">
                  <svg className="h-6 w-6 sm:h-7 sm:w-7 text-[#7c3aed]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-[#1e1b4b] group-hover:text-[#7c3aed] transition-all duration-300">AI-Powered Tools</h3>
              <p className="text-sm sm:text-base text-[#64748b] group-hover:text-[#374151] transition-all duration-300">Leverage cutting-edge artificial intelligence to automate processes, gain insights, and stay ahead of the competition.</p>
            </div>
            
            {/* On-Time Delivery */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-[#8b5cf6]/10 hover:border-[#7c3aed] transition-all duration-300 group hover:translate-y-[-4px]">
              <div className="mb-5 sm:mb-6 relative">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                <div className="relative h-12 w-12 sm:h-14 sm:w-14 bg-[#f5f3ff] rounded-lg flex items-center justify-center group-hover:bg-[#ede9fe] transition-all duration-300 shadow-sm border border-violet-100">
                  <svg className="h-6 w-6 sm:h-7 sm:w-7 text-[#7c3aed]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-[#1e1b4b] group-hover:text-[#7c3aed] transition-all duration-300">On-Time Delivery</h3>
              <p className="text-sm sm:text-base text-[#64748b] group-hover:text-[#374151] transition-all duration-300">We respect your timelines and deliver projects on schedule without compromising on quality or attention to detail.</p>
            </div>
            
            {/* Dedicated Support */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-[#8b5cf6]/10 hover:border-[#7c3aed] transition-all duration-300 group hover:translate-y-[-4px]">
              <div className="mb-5 sm:mb-6 relative">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                <div className="relative h-12 w-12 sm:h-14 sm:w-14 bg-[#f5f3ff] rounded-lg flex items-center justify-center group-hover:bg-[#ede9fe] transition-all duration-300 shadow-sm border border-violet-100">
                  <svg className="h-6 w-6 sm:h-7 sm:w-7 text-[#7c3aed]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-[#1e1b4b] group-hover:text-[#7c3aed] transition-all duration-300">Dedicated Support</h3>
              <p className="text-sm sm:text-base text-[#64748b] group-hover:text-[#374151] transition-all duration-300">Our team provides responsive, personalized support throughout your project and beyond to ensure your continued success.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Preview Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#f9fafb] to-white"></div>
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#8b5cf6]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#7c3aed]/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-5 sm:px-8 md:px-14 lg:px-24 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-[#1e1b4b]">Our Proven Approach to Success</h2>
            <p className="text-[#64748b] text-base sm:text-lg">A transparent, methodical process that delivers consistent results</p>
          </div>
          
          <div className="relative mt-12 sm:mt-16 md:mt-20">
            {/* Process Connection Line */}
            <div className="absolute top-24 left-0 w-full h-1 bg-gradient-to-r from-violet-200 via-violet-400 to-violet-200 hidden lg:block"></div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 sm:gap-8 relative z-10">
              {/* Step 1: Discovery */}
              <div className="flex flex-col items-center text-center group">
                <div className="relative mb-4 sm:mb-6">
                  <div className="absolute -inset-3 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                  <div className="relative h-14 w-14 sm:h-16 sm:w-16 bg-white rounded-full flex items-center justify-center shadow-lg border border-violet-100 group-hover:border-violet-300 transition-all duration-300 z-10">
                    <span className="text-2xl sm:text-3xl">🔍</span>
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-xs font-bold rounded-full h-5 w-5 sm:h-6 sm:w-6 flex items-center justify-center">1</div>
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-[#1e1b4b] group-hover:text-[#7c3aed] transition-all duration-300">Discovery</h3>
                <p className="text-sm sm:text-base text-[#64748b] group-hover:text-[#374151] transition-all duration-300 max-w-xs mx-auto">We analyze your business needs, goals, and target audience to create a solid foundation.</p>
              </div>
              
              {/* Step 2: Strategy */}
              <div className="flex flex-col items-center text-center group">
                <div className="relative mb-4 sm:mb-6">
                  <div className="absolute -inset-3 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                  <div className="relative h-14 w-14 sm:h-16 sm:w-16 bg-white rounded-full flex items-center justify-center shadow-lg border border-violet-100 group-hover:border-violet-300 transition-all duration-300 z-10">
                    <span className="text-2xl sm:text-3xl">🧠</span>
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-xs font-bold rounded-full h-5 w-5 sm:h-6 sm:w-6 flex items-center justify-center">2</div>
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-[#1e1b4b] group-hover:text-[#7c3aed] transition-all duration-300">Strategy</h3>
                <p className="text-sm sm:text-base text-[#64748b] group-hover:text-[#374151] transition-all duration-300 max-w-xs mx-auto">We develop a tailored plan with clear objectives, timelines, and deliverables for your project.</p>
              </div>
              
              {/* Step 3: Build */}
              <div className="flex flex-col items-center text-center group">
                <div className="relative mb-4 sm:mb-6">
                  <div className="absolute -inset-3 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                  <div className="relative h-14 w-14 sm:h-16 sm:w-16 bg-white rounded-full flex items-center justify-center shadow-lg border border-violet-100 group-hover:border-violet-300 transition-all duration-300 z-10">
                    <span className="text-2xl sm:text-3xl">🔨️</span>
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-xs font-bold rounded-full h-5 w-5 sm:h-6 sm:w-6 flex items-center justify-center">3</div>
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-[#1e1b4b] group-hover:text-[#7c3aed] transition-all duration-300">Build</h3>
                <p className="text-sm sm:text-base text-[#64748b] group-hover:text-[#374151] transition-all duration-300 max-w-xs mx-auto">Our expert team executes the strategy with precision, keeping you informed every step of the way.</p>
              </div>
              
              {/* Step 4: Launch */}
              <div className="flex flex-col items-center text-center group">
                <div className="relative mb-4 sm:mb-6">
                  <div className="absolute -inset-3 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                  <div className="relative h-14 w-14 sm:h-16 sm:w-16 bg-white rounded-full flex items-center justify-center shadow-lg border border-violet-100 group-hover:border-violet-300 transition-all duration-300 z-10">
                    <span className="text-2xl sm:text-3xl">🚀</span>
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-xs font-bold rounded-full h-5 w-5 sm:h-6 sm:w-6 flex items-center justify-center">4</div>
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-[#1e1b4b] group-hover:text-[#7c3aed] transition-all duration-300">Launch</h3>
                <p className="text-sm sm:text-base text-[#64748b] group-hover:text-[#374151] transition-all duration-300 max-w-xs mx-auto">We deploy your solution with thorough testing and ensure a smooth transition to the live environment.</p>
              </div>
              
              {/* Step 5: Optimize */}
              <div className="flex flex-col items-center text-center group">
                <div className="relative mb-4 sm:mb-6">
                  <div className="absolute -inset-3 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                  <div className="relative h-14 w-14 sm:h-16 sm:w-16 bg-white rounded-full flex items-center justify-center shadow-lg border border-violet-100 group-hover:border-violet-300 transition-all duration-300 z-10">
                    <span className="text-2xl sm:text-3xl">📈</span>
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-xs font-bold rounded-full h-5 w-5 sm:h-6 sm:w-6 flex items-center justify-center">5</div>
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-[#1e1b4b] group-hover:text-[#7c3aed] transition-all duration-300">Optimize</h3>
                <p className="text-sm sm:text-base text-[#64748b] group-hover:text-[#374151] transition-all duration-300 max-w-xs mx-auto">We continuously analyze performance data to refine and improve your solution for maximum results.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10 sm:mt-16">
            <Link href="/process" className="inline-flex items-center text-[#7c3aed] hover:text-[#6d28d9] font-medium transition-all duration-300 group text-sm sm:text-base">
              <span>Learn more about our process</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-28 bg-gradient-to-b from-white to-[#f5f3ff] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute -top-20 right-0 w-60 sm:w-96 h-60 sm:h-96 bg-[#8b5cf6]/10 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-60 sm:w-96 h-60 sm:h-96 bg-[#7c3aed]/10 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl bg-[url('/grid-pattern.svg')] bg-center opacity-5"></div>
        
        <div className="container mx-auto px-5 sm:px-8 md:px-14 lg:px-24 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white border border-[#8b5cf6]/20 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl overflow-hidden">
              <div className="relative">
                {/* Decorative top accent */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-violet-600 via-indigo-600 to-violet-600"></div>
                
                <div className="grid md:grid-cols-5 gap-0">
                  {/* Left content area */}
                  <div className="md:col-span-3 p-6 sm:p-8 md:p-12 lg:p-16">
                    <div className="max-w-lg">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] text-transparent bg-clip-text leading-tight">Ready to Transform Your Digital Presence?</h2>
                      <p className="text-[#64748b] text-base sm:text-lg mb-6 sm:mb-8">Join our clients who&apos;ve seen remarkable growth with BotLane&apos;s digital solutions. Let&apos;s create something extraordinary together.</p>
                      
                      <div className="space-y-3 sm:space-y-4 md:space-y-0 md:flex md:gap-4">
                        <Link href="/contact" className="group relative overflow-hidden bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] text-white font-medium py-3 sm:py-3.5 px-6 sm:px-8 rounded-lg transition duration-300 transform hover:translate-y-[-2px] hover:shadow-lg hover:shadow-violet-500/20 inline-flex items-center justify-center text-sm sm:text-base w-full md:w-auto">
                          <span className="relative z-10">Schedule a Consultation</span>
                          <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 relative z-10 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </Link>
                        <Link href="/portfolio" className="group relative overflow-hidden bg-white border border-[#8b5cf6]/30 text-[#1e1b4b] font-medium py-3 sm:py-3.5 px-6 sm:px-8 rounded-lg transition duration-300 transform hover:translate-y-[-2px] hover:shadow-lg hover:shadow-violet-500/10 inline-flex items-center justify-center text-sm sm:text-base w-full md:w-auto">
                          <span className="relative z-10">View Our Portfolio</span>
                          <span className="absolute inset-0 bg-[#8b5cf6]/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right decorative area */}
                  <div className="md:col-span-2 bg-gradient-to-br from-[#8b5cf6]/10 to-[#7c3aed]/5 relative hidden md:block">
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-10"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-48 h-48">
                        {/* Decorative circles */}
                        <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-dashed border-violet-300/30 animate-spin-slow"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-4 border-dashed border-violet-400/40 animate-spin-reverse-slow"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 opacity-20 blur-lg"></div>
                        
                        {/* Center logo or icon */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-violet-100">
                          <svg className="w-6 h-6 text-[#7c3aed]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-8 sm:mt-10 md:mt-12 text-center">
              <p className="text-xs sm:text-sm font-medium text-[#64748b] mb-4 sm:mb-6">TRUSTED BY INNOVATIVE COMPANIES</p>
              <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 opacity-70">
                <div className="h-4 sm:h-5 md:h-6 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                  <svg className="h-full w-auto" viewBox="0 0 124 24" fill="#1e1b4b">
                    <path d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12zm-9.6 5.6H9.6V6.4h4.8v11.2zm20.4-9.6h-4.8V16c0 1.6.8 2.4 2.4 2.4h2.4v3.2h-2.4c-3.2 0-5.6-1.6-5.6-5.6V8h-2.4V4.8h2.4V0h4.8v4.8h4.8V8zm9.6 0h-4.8v1.6c-1.6-1.6-3.2-2.4-5.6-2.4-4.8 0-8 3.2-8 8s3.2 8 8 8c2.4 0 4-.8 5.6-2.4v1.6h4.8V8zm-8.8 11.2c-2.4 0-4.8-1.6-4.8-4.8s2.4-4.8 4.8-4.8 4.8 1.6 4.8 4.8-2.4 4.8-4.8 4.8zM70.4 8h-4.8v1.6c-1.6-1.6-3.2-2.4-5.6-2.4-4.8 0-8 3.2-8 8s3.2 8 8 8c2.4 0 4-.8 5.6-2.4v1.6h4.8V8zm-8.8 11.2c-2.4 0-4.8-1.6-4.8-4.8s2.4-4.8 4.8-4.8 4.8 1.6 4.8 4.8-2.4 4.8-4.8 4.8zM88 8h-4.8v1.6c-1.6-1.6-3.2-2.4-5.6-2.4-4.8 0-8 3.2-8 8s3.2 8 8 8c2.4 0 4-.8 5.6-2.4v1.6h4.8V8zm-8.8 11.2c-2.4 0-4.8-1.6-4.8-4.8s2.4-4.8 4.8-4.8 4.8 1.6 4.8 4.8-2.4 4.8-4.8 4.8zM92 0h4.8v22.4H92V0zm24-3.2h-4.8v4.8h-4.8V6.4h-2.4v4.8h2.4v5.6c0 4 2.4 5.6 5.6 5.6h2.4v-3.2h-2.4c-1.6 0-2.4-.8-2.4-2.4v-5.6h4.8V6.4h-4.8v-4.8h6.4V-4z"/>
                  </svg>
                </div>
                <div className="h-3.5 sm:h-4 md:h-5 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                  <svg className="h-full w-auto" viewBox="0 0 124 24" fill="#1e1b4b">
                    <path d="M20.624 0c-3.037 0-5.888 1.073-8.095 3.069-2.208 1.996-3.424 4.65-3.424 7.479 0 2.828 1.216 5.483 3.424 7.479 2.207 1.996 5.058 3.069 8.095 3.069 3.037 0 5.888-1.073 8.095-3.069 2.207-1.996 3.424-4.65 3.424-7.479 0-2.828-1.217-5.483-3.424-7.479C26.512 1.073 23.661 0 20.624 0zm0 18.04c-2.187 0-4.239-.773-5.824-2.211-1.584-1.438-2.464-3.346-2.464-5.281 0-1.935.88-3.844 2.464-5.281 1.585-1.438 3.637-2.211 5.824-2.211 2.186 0 4.239.773 5.824 2.211 1.584 1.438 2.464 3.346 2.464 5.281 0 1.935-.88 3.844-2.464 5.281-1.585 1.438-3.638 2.211-5.824 2.211zM6.5 3.5h-6v18h6v-18zm58 0h-6v18h6v-18zm-29 0h-6v18h6v-18zm58 0h-6v18h6v-18zm-29 0h-6v18h6v-18z"/>
                  </svg>
                </div>
                <div className="h-4 sm:h-5 md:h-6 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                  <svg className="h-full w-auto" viewBox="0 0 124 24" fill="#1e1b4b">
                    <path d="M24 0H0v24h24V0zm29 0h-6v24h6V0zm29 0h-6v24h6V0zm29 0h-6v24h6V0zm6 0h7v24h-7V0z"/>
                  </svg>
                </div>
                <div className="h-3.5 sm:h-4 md:h-5 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                  <svg className="h-full w-auto" viewBox="0 0 124 24" fill="#1e1b4b">
                    <path d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm12-8v16h6V4h-6zm12 0v16h6V4h-6zm12 0v16h6V4h-6zm12 0v16h6V4h-6zm12 0v16h6V4h-6zm12 0v16h6V4h-6zm12 0v16h6V4h-6z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
