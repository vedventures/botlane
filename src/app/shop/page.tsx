import Link from 'next/link';

export const metadata = {
  title: 'Shop | BotLane',
  description: 'Browse our premium digital bundles to supercharge your growth. Instant access. Lifetime value.',
};

export default function ShopPage() {
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
                <span className="text-xs font-medium text-gray-600">Premium Resources</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1e1b4b] mb-6 leading-tight">
              Premium Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Bundles</span> to Supercharge Your Growth
            </h1>
            <p className="text-[#4b5563] text-lg max-w-3xl mx-auto mb-8">
              Browse curated collections of high-impact resources across business, marketing, ecommerce, and AI. Instant access. Lifetime value.
            </p>
            
            {/* Category Filter */}
            <div className="flex justify-center mb-8">
              <div className="relative inline-block w-64">
                <select 
                  className="block appearance-none w-full bg-white border border-gray-200 hover:border-purple-200 px-4 py-3 pr-8 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  defaultValue="all"
                >
                  <option value="all">All Categories</option>
                  <option value="marketing">Marketing</option>
                  <option value="ecommerce">Ecommerce</option>
                  <option value="business">Business</option>
                  <option value="ai">AI</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Product Grid Section */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-purple-100/30 transform hover:-translate-y-1">
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1e1b4b] mb-1">Business Mastery Vault</h3>
                <p className="text-purple-600 font-medium text-sm mb-3">Formerly: Business Intelligence Bundle</p>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <span className="mr-3">23 Courses</span>
                  <span className="mr-3">•</span>
                  <span className="mr-3">41 Books</span>
                  <span className="mr-3">•</span>
                  <span>110 Templates</span>
                </div>
                <p className="text-[#4b5563] mb-6">Master finance, automation, outsourcing, and strategy with over 400 premium resources.</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#1e1b4b]">$29</span>
                  <Link href="#" className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-purple-500/20 transition-all transform hover:-translate-y-0.5">
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-purple-100/30 transform hover:-translate-y-1">
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1e1b4b] mb-1">Marketing Growth Suite</h3>
                <p className="text-purple-600 font-medium text-sm mb-3">Formerly: Digital Marketing Toolkit</p>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <span className="mr-3">35 Courses</span>
                  <span className="mr-3">•</span>
                  <span className="mr-3">28 Books</span>
                  <span className="mr-3">•</span>
                  <span>95 Templates</span>
                </div>
                <p className="text-[#4b5563] mb-6">Elevate your marketing with SEO, social media, email, and content strategies that convert.</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#1e1b4b]">$39</span>
                  <Link href="#" className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-purple-500/20 transition-all transform hover:-translate-y-0.5">
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            {/* Product 3 */}
            <div className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-purple-100/30 transform hover:-translate-y-1">
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1e1b4b] mb-1">E-Commerce Empire</h3>
                <p className="text-purple-600 font-medium text-sm mb-3">Formerly: Online Store Success Pack</p>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <span className="mr-3">19 Courses</span>
                  <span className="mr-3">•</span>
                  <span className="mr-3">32 Books</span>
                  <span className="mr-3">•</span>
                  <span>85 Templates</span>
                </div>
                <p className="text-[#4b5563] mb-6">Build, scale, and optimize your online store with proven strategies and tools.</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#1e1b4b]">$35</span>
                  <Link href="#" className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-purple-500/20 transition-all transform hover:-translate-y-0.5">
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            {/* Product 4 */}
            <div className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-purple-100/30 transform hover:-translate-y-1">
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1e1b4b] mb-1">AI Innovation Toolkit</h3>
                <p className="text-purple-600 font-medium text-sm mb-3">Formerly: Artificial Intelligence Essentials</p>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <span className="mr-3">27 Courses</span>
                  <span className="mr-3">•</span>
                  <span className="mr-3">18 Books</span>
                  <span className="mr-3">•</span>
                  <span>65 Templates</span>
                </div>
                <p className="text-[#4b5563] mb-6">Harness the power of AI for your business with practical guides and implementation tools.</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#1e1b4b]">$45</span>
                  <Link href="#" className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-purple-500/20 transition-all transform hover:-translate-y-0.5">
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            {/* Product 5 */}
            <div className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-purple-100/30 transform hover:-translate-y-1">
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1e1b4b] mb-1">Product Design Mastery</h3>
                <p className="text-purple-600 font-medium text-sm mb-3">Formerly: UX/UI Design Collection</p>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <span className="mr-3">31 Courses</span>
                  <span className="mr-3">•</span>
                  <span className="mr-3">24 Books</span>
                  <span className="mr-3">•</span>
                  <span>120 Templates</span>
                </div>
                <p className="text-[#4b5563] mb-6">Create stunning, user-friendly products with comprehensive design resources and guides.</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#1e1b4b]">$32</span>
                  <Link href="#" className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-purple-500/20 transition-all transform hover:-translate-y-0.5">
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            {/* Product 6 */}
            <div className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-purple-100/30 transform hover:-translate-y-1">
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1e1b4b] mb-1">Real Estate Investor Pro</h3>
                <p className="text-purple-600 font-medium text-sm mb-3">Formerly: Property Investment Guide</p>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <span className="mr-3">15 Courses</span>
                  <span className="mr-3">•</span>
                  <span className="mr-3">22 Books</span>
                  <span className="mr-3">•</span>
                  <span>75 Templates</span>
                </div>
                <p className="text-[#4b5563] mb-6">Navigate the real estate market with confidence using expert strategies and analysis tools.</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#1e1b4b]">$37</span>
                  <Link href="#" className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-purple-500/20 transition-all transform hover:-translate-y-0.5">
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            {/* Product 7 */}
            <div className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-purple-100/30 transform hover:-translate-y-1">
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1e1b4b] mb-1">Productivity Accelerator</h3>
                <p className="text-purple-600 font-medium text-sm mb-3">Formerly: Efficiency Booster Pack</p>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <span className="mr-3">18 Courses</span>
                  <span className="mr-3">•</span>
                  <span className="mr-3">15 Books</span>
                  <span className="mr-3">•</span>
                  <span>90 Templates</span>
                </div>
                <p className="text-[#4b5563] mb-6">Transform your workflow and achieve more with less time using proven productivity systems.</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#1e1b4b]">$25</span>
                  <Link href="#" className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-purple-500/20 transition-all transform hover:-translate-y-0.5">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mega Bundle Promo Section */}
      <section className="py-12 md:py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background gradient with gold accents */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900"></div>
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-10 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-overlay filter blur-3xl"></div>
                <div className="absolute bottom-10 left-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-overlay filter blur-3xl"></div>
              </div>
            </div>
            
            {/* Gold border effect */}
            <div className="absolute inset-0 border border-yellow-300/30 rounded-3xl"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-300/0 via-yellow-300 to-yellow-300/0"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-300/0 via-yellow-300 to-yellow-300/0"></div>
            
            {/* Content */}
            <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
              <div className="mb-8 md:mb-0 md:mr-8 max-w-xl">
                <div className="inline-block mb-4 px-3 py-1 bg-yellow-300/20 backdrop-blur-sm rounded-full border border-yellow-300/30">
                  <span className="text-xs font-semibold text-yellow-300">LIMITED TIME OFFER</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  <span className="text-yellow-300">Full Mega Bundle</span> — Everything. For less.
                </h2>
                <p className="text-indigo-100 mb-6">One-time purchase for lifetime access to all 7 bundles. All-in-one access to the full digital arsenal.</p>
                <div className="flex items-center mb-6">
                  <span className="text-2xl md:text-3xl font-bold text-yellow-300 mr-3">$149</span>
                  <span className="text-lg text-indigo-200 line-through mr-3">$217</span>
                  <span className="px-2 py-1 bg-yellow-300/20 rounded-md text-xs font-semibold text-yellow-300">SAVE $68</span>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link href="#" className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-indigo-900 font-medium rounded-lg hover:shadow-lg hover:shadow-yellow-500/30 transition-all transform hover:-translate-y-0.5">
                    Get Lifetime Access
                  </Link>
                  <Link href="#" className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white border border-white/20 font-medium rounded-lg hover:bg-white/20 transition-all transform hover:-translate-y-0.5">
                    Learn More
                  </Link>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-300/10 rounded-full"></div>
                <div className="relative z-10 bg-gradient-to-br from-indigo-800/80 to-purple-800/80 backdrop-blur-sm p-6 rounded-2xl border border-white/10 shadow-xl">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-8 h-8 text-indigo-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-white mb-1">What&apos;s Included:</h3>
                    <p className="text-indigo-200 text-sm">All 7 premium bundles</p>
                  </div>
                  <ul className="space-y-2 text-sm text-indigo-100">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-yellow-300 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>168 Courses</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-yellow-300 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>180 Books</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-yellow-300 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>640+ Templates</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-yellow-300 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Lifetime Updates</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-20 right-40 w-64 h-64 rounded-full border border-purple-200 opacity-20"></div>
          <div className="absolute bottom-40 left-20 w-80 h-80 rounded-full border border-indigo-200 opacity-20"></div>
          <div className="absolute top-40 left-1/3 w-40 h-40 rounded-full border border-violet-200 opacity-20"></div>
        </div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="px-3 py-1 text-xs font-semibold text-purple-700 bg-purple-100 rounded-full">Customer Success</div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e1b4b] mb-6">What Our Customers Say</h2>
            <p className="text-[#4b5563] max-w-3xl mx-auto">
              Join thousands of satisfied customers who have transformed their businesses with our premium digital bundles.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-purple-100/30 transform hover:-translate-y-1 p-6 relative">
              <div className="absolute top-0 right-0 -mt-2 -mr-2 w-20 h-20 text-purple-100">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M34.6 24.8C32.2667 26.5333 30.4 28.4 29 30.4C27.6667 32.4 26.6667 34.4 26 36.4C25.3333 38.4 25 40.5333 25 42.8C25 46.5333 26.0667 49.4667 28.2 51.6C30.3333 53.7333 33.1333 54.8 36.6 54.8C39.9333 54.8 42.6 53.8 44.6 51.8C46.6667 49.8 47.7 47.2 47.7 44C47.7 41.0667 46.7333 38.6667 44.8 36.8C42.9333 34.9333 40.5333 34 37.6 34C37.0667 34 36.6 34 36.2 34C36.6 32.9333 37.2667 31.8 38.2 30.6C39.1333 29.4 40.4 28.2 42 27L34.6 24.8ZM9.6 24.8C7.26667 26.5333 5.4 28.4 4 30.4C2.66667 32.4 1.66667 34.4 1 36.4C0.333333 38.4 0 40.5333 0 42.8C0 46.5333 1.06667 49.4667 3.2 51.6C5.33333 53.7333 8.13333 54.8 11.6 54.8C14.9333 54.8 17.6 53.8 19.6 51.8C21.6667 49.8 22.7 47.2 22.7 44C22.7 41.0667 21.7333 38.6667 19.8 36.8C17.9333 34.9333 15.5333 34 12.6 34C12.0667 34 11.6 34 11.2 34C11.6 32.9333 12.2667 31.8 13.2 30.6C14.1333 29.4 15.4 28.2 17 27L9.6 24.8Z" fill="currentColor"/>
                </svg>
              </div>
              <div className="mb-4 flex">
                {Array(5).fill(0).map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-[#4b5563] mb-6 italic">
                &ldquo;The Business Mastery Vault completely transformed how I run my company. The templates alone saved me hundreds of hours of work. Worth every penny!&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 flex items-center justify-center text-white font-bold mr-3">JS</div>
                <div>
                  <h4 className="font-semibold text-[#1e1b4b]">James Smith</h4>
                  <p className="text-sm text-gray-500">CEO, TechFlow</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-purple-100/30 transform hover:-translate-y-1 p-6 relative">
              <div className="absolute top-0 right-0 -mt-2 -mr-2 w-20 h-20 text-purple-100">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M34.6 24.8C32.2667 26.5333 30.4 28.4 29 30.4C27.6667 32.4 26.6667 34.4 26 36.4C25.3333 38.4 25 40.5333 25 42.8C25 46.5333 26.0667 49.4667 28.2 51.6C30.3333 53.7333 33.1333 54.8 36.6 54.8C39.9333 54.8 42.6 53.8 44.6 51.8C46.6667 49.8 47.7 47.2 47.7 44C47.7 41.0667 46.7333 38.6667 44.8 36.8C42.9333 34.9333 40.5333 34 37.6 34C37.0667 34 36.6 34 36.2 34C36.6 32.9333 37.2667 31.8 38.2 30.6C39.1333 29.4 40.4 28.2 42 27L34.6 24.8ZM9.6 24.8C7.26667 26.5333 5.4 28.4 4 30.4C2.66667 32.4 1.66667 34.4 1 36.4C0.333333 38.4 0 40.5333 0 42.8C0 46.5333 1.06667 49.4667 3.2 51.6C5.33333 53.7333 8.13333 54.8 11.6 54.8C14.9333 54.8 17.6 53.8 19.6 51.8C21.6667 49.8 22.7 47.2 22.7 44C22.7 41.0667 21.7333 38.6667 19.8 36.8C17.9333 34.9333 15.5333 34 12.6 34C12.0667 34 11.6 34 11.2 34C11.6 32.9333 12.2667 31.8 13.2 30.6C14.1333 29.4 15.4 28.2 17 27L9.6 24.8Z" fill="currentColor"/>
                </svg>
              </div>
              <div className="mb-4 flex">
                {Array(5).fill(0).map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-[#4b5563] mb-6 italic">
                &ldquo;I purchased the E-Commerce Empire bundle and it helped me increase my online store revenue by 215% in just 3 months. The strategies are practical and easy to implement.&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 flex items-center justify-center text-white font-bold mr-3">AP</div>
                <div>
                  <h4 className="font-semibold text-[#1e1b4b]">Aisha Patel</h4>
                  <p className="text-sm text-gray-500">Founder, StyleHub</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-purple-100/30 transform hover:-translate-y-1 p-6 relative">
              <div className="absolute top-0 right-0 -mt-2 -mr-2 w-20 h-20 text-purple-100">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M34.6 24.8C32.2667 26.5333 30.4 28.4 29 30.4C27.6667 32.4 26.6667 34.4 26 36.4C25.3333 38.4 25 40.5333 25 42.8C25 46.5333 26.0667 49.4667 28.2 51.6C30.3333 53.7333 33.1333 54.8 36.6 54.8C39.9333 54.8 42.6 53.8 44.6 51.8C46.6667 49.8 47.7 47.2 47.7 44C47.7 41.0667 46.7333 38.6667 44.8 36.8C42.9333 34.9333 40.5333 34 37.6 34C37.0667 34 36.6 34 36.2 34C36.6 32.9333 37.2667 31.8 38.2 30.6C39.1333 29.4 40.4 28.2 42 27L34.6 24.8ZM9.6 24.8C7.26667 26.5333 5.4 28.4 4 30.4C2.66667 32.4 1.66667 34.4 1 36.4C0.333333 38.4 0 40.5333 0 42.8C0 46.5333 1.06667 49.4667 3.2 51.6C5.33333 53.7333 8.13333 54.8 11.6 54.8C14.9333 54.8 17.6 53.8 19.6 51.8C21.6667 49.8 22.7 47.2 22.7 44C22.7 41.0667 21.7333 38.6667 19.8 36.8C17.9333 34.9333 15.5333 34 12.6 34C12.0667 34 11.6 34 11.2 34C11.6 32.9333 12.2667 31.8 13.2 30.6C14.1333 29.4 15.4 28.2 17 27L9.6 24.8Z" fill="currentColor"/>
                </svg>
              </div>
              <div className="mb-4 flex">
                {Array(5).fill(0).map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-[#4b5563] mb-6 italic">
                &ldquo;The AI Innovation Toolkit gave me a competitive edge in my industry. I implemented the AI strategies and saw immediate improvements in efficiency and customer satisfaction.&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 flex items-center justify-center text-white font-bold mr-3">MK</div>
                <div>
                  <h4 className="font-semibold text-[#1e1b4b]">Michael Kim</h4>
                  <p className="text-sm text-gray-500">Director, InnovateAI</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link href="#" className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700 transition-colors">
              <span>View all customer stories</span>
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}