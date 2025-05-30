import Link from "next/link";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f9fafb] text-[#374151]">
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8 sm:px-14 lg:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#1e1b4b]">Our Premium Services</h2>
            <p className="text-[#64748b] text-lg">Comprehensive digital solutions tailored to elevate your business</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Web Development Service */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-[#8b5cf6]/20 hover:border-[#7c3aed] transition-all duration-300 group">
              <div className="h-14 w-14 bg-[#f5f3ff] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#ede9fe] transition-all duration-300">
                <svg className="h-7 w-7 text-[#7c3aed]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1e1b4b] group-hover:text-[#7c3aed] transition-all duration-300">Web Development</h3>
              <p className="text-[#64748b] mb-6 group-hover:text-[#374151] transition-all duration-300">Custom, responsive websites and web applications built with modern technologies for optimal user experience.</p>
              <Link href="/services/web-development" className="text-[#7c3aed] hover:text-[#6d28d9] inline-flex items-center group-hover:translate-x-1 transition-all duration-300">
                Learn More
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
            
            {/* Digital Marketing Service */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-[#8b5cf6]/20 hover:border-[#7c3aed] transition-all duration-300 group">
              <div className="h-14 w-14 bg-[#f5f3ff] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#ede9fe] transition-all duration-300">
                <svg className="h-7 w-7 text-[#7c3aed]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1e1b4b] group-hover:text-[#7c3aed] transition-all duration-300">Digital Marketing</h3>
              <p className="text-[#64748b] mb-6 group-hover:text-[#374151] transition-all duration-300">Strategic campaigns that drive traffic, leads, and sales through SEO, PPC, social media, and content marketing.</p>
              <Link href="/services/digital-marketing" className="text-[#7c3aed] hover:text-[#6d28d9] inline-flex items-center group-hover:translate-x-1 transition-all duration-300">
                Learn More
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
            
            {/* AI Service */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-[#8b5cf6]/20 hover:border-[#7c3aed] transition-all duration-300 group">
              <div className="h-14 w-14 bg-[#f5f3ff] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#ede9fe] transition-all duration-300">
                <svg className="h-7 w-7 text-[#7c3aed]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1e1b4b] group-hover:text-[#7c3aed] transition-all duration-300">AI Solutions</h3>
              <p className="text-[#64748b] mb-6 group-hover:text-[#374151] transition-all duration-300">Cutting-edge artificial intelligence solutions that automate processes and deliver valuable insights for your business.</p>
              <Link href="/services/ai-solutions" className="text-[#7c3aed] hover:text-[#6d28d9] inline-flex items-center group-hover:translate-x-1 transition-all duration-300">
                Learn More
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-[#f5f3ff] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#8b5cf6]/10 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#7c3aed]/10 rounded-full blur-3xl opacity-20"></div>
        
        <div className="container mx-auto px-8 sm:px-14 lg:px-24 relative z-10">
          <div className="max-w-4xl mx-auto bg-white border border-[#8b5cf6]/20 rounded-2xl shadow-xl p-8 sm:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] text-transparent bg-clip-text">Ready to Transform Your Digital Presence?</h2>
              <p className="text-[#64748b] text-lg mb-8">Join our clients who&apos;ve seen remarkable growth with BotLane&apos;s digital solutions.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="group relative overflow-hidden bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] text-white font-medium py-3 px-8 rounded-lg transition duration-300 transform hover:translate-y-[-2px]">
                  <span className="relative z-10">Schedule a Consultation</span>
                  <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </Link>
                <Link href="/portfolio" className="group relative overflow-hidden bg-white border border-[#8b5cf6]/30 text-[#1e1b4b] font-medium py-3 px-8 rounded-lg transition duration-300 transform hover:translate-y-[-2px]">
                  <span className="relative z-10">View Our Portfolio</span>
                  <span className="absolute inset-0 bg-[#8b5cf6]/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
