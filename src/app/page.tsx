import Link from "next/link";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f9fafb] text-[#374151]">
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#8b5cf6]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#7c3aed]/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-8 sm:px-14 lg:px-24 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#1e1b4b]">Our Service Stacks</h2>
            <p className="text-[#64748b] text-lg">Comprehensive digital solutions tailored to elevate your business at every stage</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            {/* DevStack */}
            <div className="relative bg-white p-8 rounded-xl shadow-lg border border-[#8b5cf6]/20 hover:border-[#7c3aed] transition-all duration-300 group overflow-hidden">
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-80"></div>
              
              <div className="flex items-center gap-3 mb-6">
                <div className="h-14 w-14 bg-[#f5f3ff] rounded-lg flex items-center justify-center group-hover:bg-[#ede9fe] transition-all duration-300 shadow-sm border border-violet-100">
                  <span className="text-2xl">💻</span>
                </div>
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">DevStack</h3>
              </div>
              
              <p className="text-[#64748b] mb-6 group-hover:text-[#374151] transition-all duration-300">Custom Web Experiences That Perform. Our development team creates beautiful, functional websites and applications that drive results.</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600"></span>
                  <span className="text-[#1e1b4b] font-medium">WordPress Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600"></span>
                  <span className="text-[#1e1b4b] font-medium">Shopify Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600"></span>
                  <span className="text-[#1e1b4b] font-medium">Full-Stack Web Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600"></span>
                  <span className="text-[#1e1b4b] font-medium">UI/UX Design Systems</span>
                </div>
              </div>
              
              <Link href="/services#devstack" className="text-[#7c3aed] hover:text-[#6d28d9] inline-flex items-center group-hover:translate-x-1 transition-all duration-300 font-medium">
                Explore DevStack
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
            
            {/* FlowStack */}
            <div className="relative bg-white p-8 rounded-xl shadow-lg border border-[#8b5cf6]/20 hover:border-[#7c3aed] transition-all duration-300 group overflow-hidden">
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-80"></div>
              
              <div className="flex items-center gap-3 mb-6">
                <div className="h-14 w-14 bg-[#f5f3ff] rounded-lg flex items-center justify-center group-hover:bg-[#ede9fe] transition-all duration-300 shadow-sm border border-violet-100">
                  <span className="text-2xl">⚙️</span>
                </div>
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">FlowStack</h3>
              </div>
              
              <p className="text-[#64748b] mb-6 group-hover:text-[#374151] transition-all duration-300">Automate Everything. Operate Smarter. Our automation solutions streamline your business processes and improve efficiency.</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600"></span>
                  <span className="text-[#1e1b4b] font-medium">AI Chatbot Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600"></span>
                  <span className="text-[#1e1b4b] font-medium">Workflow Automation</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600"></span>
                  <span className="text-[#1e1b4b] font-medium">API & CRM Integrations</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600"></span>
                  <span className="text-[#1e1b4b] font-medium">AI-Powered Internal Tools</span>
                </div>
              </div>
              
              <Link href="/services#flowstack" className="text-[#7c3aed] hover:text-[#6d28d9] inline-flex items-center group-hover:translate-x-1 transition-all duration-300 font-medium">
                Explore FlowStack
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
            
            {/* ScaleStack */}
            <div className="relative bg-white p-8 rounded-xl shadow-lg border border-[#8b5cf6]/20 hover:border-[#7c3aed] transition-all duration-300 group overflow-hidden">
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 to-violet-600 opacity-80"></div>
              
              <div className="flex items-center gap-3 mb-6">
                <div className="h-14 w-14 bg-[#f5f3ff] rounded-lg flex items-center justify-center group-hover:bg-[#ede9fe] transition-all duration-300 shadow-sm border border-violet-100">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">ScaleStack</h3>
              </div>
              
              <p className="text-[#64748b] mb-6 group-hover:text-[#374151] transition-all duration-300">Grow Faster. Smarter. Sharper. Our marketing solutions help you reach your target audience and drive conversions.</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600"></span>
                  <span className="text-[#1e1b4b] font-medium">Performance Marketing</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600"></span>
                  <span className="text-[#1e1b4b] font-medium">SEO & Content Strategy</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600"></span>
                  <span className="text-[#1e1b4b] font-medium">Social Media Management</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600"></span>
                  <span className="text-[#1e1b4b] font-medium">Email & Funnel Automation</span>
                </div>
              </div>
              
              <Link href="/services#scalestack" className="text-[#7c3aed] hover:text-[#6d28d9] inline-flex items-center group-hover:translate-x-1 transition-all duration-300 font-medium">
                Explore ScaleStack
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
