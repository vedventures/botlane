import React from 'react';

import Link from 'next/link';

export const metadata = {
  title: 'About Us | BotLane',
  description: 'Learn about BotLane, our mission, values, and the team behind our innovative AI solutions and web development services.',
};

export default function AboutPage() {
  return (
    <main className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 -left-4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-violet-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 max-w-6xl relative">
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="inline-block mb-4">
              <div className="flex items-center justify-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-sm border border-purple-100">
                <span className="h-2 w-2 rounded-full bg-purple-400 animate-pulse"></span>
                <span className="text-xs font-medium text-gray-600">Established in 2022</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1e1b4b] mb-6 leading-tight">
              We Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">BotLane</span>
            </h1>
            <p className="text-[#4b5563] text-lg max-w-3xl mx-auto mb-8">
              Pioneering the future of AI solutions and web development to transform how businesses connect with their customers in the digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-100 rounded-full opacity-70"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-indigo-100 rounded-full opacity-70"></div>
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                <div className="aspect-w-4 aspect-h-3 bg-gradient-to-br from-indigo-500 to-purple-600 p-1">
                  <div className="w-full h-full bg-cover bg-center rounded-xl" style={{ backgroundImage: "url('/images/team-meeting.jpg')" }}></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent mix-blend-overlay"></div>
              </div>
              <div className="absolute -right-4 bottom-20 bg-white rounded-lg shadow-lg p-4 w-40 transform rotate-3">
                <div className="flex items-center justify-center">
                  <span className="text-2xl font-bold text-purple-600 mr-1">3+</span>
                  <span className="text-xs text-gray-600 leading-tight">Years of Excellence</span>
                </div>
              </div>
            </div>
            <div>
              <div className="inline-block mb-4">
                <div className="px-3 py-1 text-xs font-semibold text-purple-700 bg-purple-100 rounded-full">Our Story</div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e1b4b] mb-6">From Vision to Reality</h2>
              <div className="space-y-6 text-[#4b5563]">
                <p>
                  Founded in 2022, BotLane began with a simple yet powerful vision: to bridge the gap between cutting-edge AI technology and practical business applications.
                </p>
                <p>
                  What started as a small team of passionate innovators has grown into a dynamic company serving clients across industries and continents.
                </p>
                <p>
                  Today, BotLane stands at the forefront of AI integration and web development, helping businesses leverage technology to achieve their goals and transform their digital presence.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-purple-500/20 transition-all transform hover:-translate-y-0.5">
                  Get in Touch
                </Link>
                <Link href="/services" className="px-6 py-3 bg-white text-[#1e1b4b] font-medium rounded-lg border border-gray-200 hover:border-purple-200 hover:bg-purple-50 transition-all transform hover:-translate-y-0.5">
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-20 right-40 w-64 h-64 rounded-full border border-purple-200 opacity-20"></div>
          <div className="absolute bottom-40 left-20 w-80 h-80 rounded-full border border-indigo-200 opacity-20"></div>
          <div className="absolute top-40 left-1/3 w-40 h-40 rounded-full border border-violet-200 opacity-20"></div>
        </div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="px-3 py-1 text-xs font-semibold text-purple-700 bg-purple-100 rounded-full">Why Choose Us</div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e1b4b] mb-6">Our Mission & Values</h2>
            <p className="text-[#4b5563] max-w-3xl mx-auto">
              At the core of BotLane are the principles that guide our work, shape our culture, and define our relationships with clients and partners.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-purple-100/30 transform hover:-translate-y-1">
              <div className="p-8">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1e1b4b] mb-3">Our Mission</h3>
                <p className="text-gray-600 mb-6">We&apos;re passionate about creating intelligent solutions that transform businesses and drive innovation.</p>
                <p className="text-[#4b5563]">
                  To empower businesses with intelligent digital solutions that drive growth, enhance customer experiences, and create lasting value in an increasingly AI-driven world.
                </p>
              </div>
            </div>
            {/* Vision */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-purple-100/30 transform hover:-translate-y-1">
              <div className="p-8">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1e1b4b] mb-3">Our Vision</h3>
                <p className="text-[#4b5563]">
                  To be the leading innovator in AI-powered web solutions, recognized globally for our expertise, integrity, and the transformative impact we create for our clients.
                </p>
              </div>
            </div>
            {/* Values */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-purple-100/30 transform hover:-translate-y-1">
              <div className="p-8">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1e1b4b] mb-3">Our Values</h3>
                <ul className="text-[#4b5563] space-y-2">
                  <li className="flex items-start"><span className="h-5 w-5 text-purple-600 mr-2">•</span><span>Innovation & Excellence</span></li>
                  <li className="flex items-start"><span className="h-5 w-5 text-purple-600 mr-2">•</span><span>Integrity & Transparency</span></li>
                  <li className="flex items-start"><span className="h-5 w-5 text-purple-600 mr-2">•</span><span>Client-Centered Approach</span></li>
                  <li className="flex items-start"><span className="h-5 w-5 text-purple-600 mr-2">•</span><span>Continuous Learning</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="px-3 py-1 text-xs font-semibold text-purple-700 bg-purple-100 rounded-full">Meet Our Team</div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e1b4b] mb-6">The Minds Behind BotLane</h2>
            <p className="text-[#4b5563] max-w-3xl mx-auto">
              Our diverse team of experts brings together skills in AI development, web engineering, design, and business strategy to deliver exceptional solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Members */}
            {[
              {
                name: 'Rahul Sharma',
                title: 'Chief Technology Officer',
                desc: 'With over a decade of experience in AI systems and full-stack development, Rahul leads our technology strategy and product innovation.',
                img: '/images/team-member-1.jpg',
              },
              {
                name: 'Ananya Mehta',
                title: 'Head of Design',
                desc: 'Ananya brings creativity and precision to every project, ensuring that all our products are visually stunning and user-centric.',
                img: '/images/team-member-2.jpg',
              },
              {
                name: 'Siddharth Rao',
                title: 'Strategy & Operations Lead',
                desc: 'Siddharth ensures every project aligns with client goals while optimizing internal processes for excellence and efficiency.',
                img: '/images/team-member-3.jpg',
              },
            ].map((member, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-purple-100/30 transform hover:-translate-y-1 group">
                <div className="aspect-w-3 aspect-h-4 bg-gradient-to-br from-indigo-50 to-purple-50 relative overflow-hidden">
                  <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('${member.img}')` }}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e1b4b]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1e1b4b] mb-1">{member.name}</h3>
                  <p className="text-purple-600 font-medium text-sm mb-3">{member.title}</p>
                  <p className="text-[#4b5563] text-sm">{member.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let&apos;s Build the Future Together</h2>
          <p className="mb-8 text-lg">
            Ready to transform your business with AI and cutting-edge web technology? We&apos;re excited to learn more about your goals and help bring your vision to life.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-white text-indigo-700 font-semibold rounded-lg shadow hover:bg-gray-100 transition-all transform hover:-translate-y-0.5"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
