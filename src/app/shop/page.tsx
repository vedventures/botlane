'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import { 
  AIPromptsImage, 
  SocialCalendarImage, 
  AICourseImage, 
  GrowthBootcampImage, 
  ROICalculatorImage, 
  ConversionToolkitImage, 
  AutomationGuideImage, 
  ContentPlaybookImage 
} from '../../components/ProductSVGs'
import { 
  MarketingAuditImage, 
  AutomationSetupImage, 
  StrategicConsultingImage, 
  CompleteStackImage,
  MarketingFunnelImage1
} from '../../components/ProductSVGs2'

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const categories = ['All', 'Digital Products', 'Templates', 'Courses', 'Tools', 'Guides', 'Services', 'Consulting']

  // Product image mapping for shop page
  const shopProductImageMap: Record<string, () => JSX.Element> = {
    "marketing-funnel-templates": MarketingFunnelImage1,
    "ai-marketing-prompts": AIPromptsImage,
    "social-media-calendar": SocialCalendarImage,
    "ai-marketing-course": AICourseImage,
    "growth-hacking-bootcamp": GrowthBootcampImage,
    "marketing-roi-calculator": ROICalculatorImage,
    "conversion-toolkit": ConversionToolkitImage,
    "automation-guide": AutomationGuideImage,
    "content-playbook": ContentPlaybookImage,
    "marketing-audit": MarketingAuditImage,
    "automation-setup": AutomationSetupImage,
    "strategic-consulting": StrategicConsultingImage,
    "complete-stack": CompleteStackImage
  }

  const products = [
    // Digital Templates & Resources
    {
      id: "marketing-funnel-templates",
      name: "Marketing Funnel Templates Pack",
      price: "$97",
      originalPrice: "$197",
      category: "Templates",
      badge: "Best Seller",
      type: "Digital Download",
      description: "Complete collection of high-converting marketing funnel templates with drag-and-drop customization for any industry.",
      features: ["50+ funnel templates", "Conversion-optimized designs", "Mobile responsive", "A/B test variations", "Industry-specific versions", "Lifetime updates"],
      deliverables: "Instant download",
      rating: 4.9,
      reviews: 342,
      format: "Figma, Sketch, PSD files"
    },
    {
      id: "ai-marketing-prompts",
      name: "AI Marketing Prompts Library",
      price: "$47",
      originalPrice: "$97",
      category: "Digital Products",
      badge: "Hot",
      type: "Digital Download",
      description: "1000+ proven AI prompts for marketing copy, content creation, strategy development, and campaign optimization.",
      features: ["1000+ marketing prompts", "ChatGPT & Claude optimized", "Category organized", "Copy-paste ready", "Regular updates", "Bonus prompt engineering guide"],
      deliverables: "Instant download",
      rating: 4.8,
      reviews: 567,
      format: "PDF, Notion template"
    },
    {
      id: "social-media-calendar",
      name: "Social Media Content Calendar",
      price: "$67",
      originalPrice: "$127",
      category: "Templates",
      badge: "Popular",
      type: "Digital Download",
      description: "12-month social media content calendar with 365 post ideas, templates, and scheduling strategies for maximum engagement.",
      features: ["365 content ideas", "Platform-specific templates", "Hashtag research sheets", "Analytics tracking", "Content pillars guide", "Canva templates included"],
      deliverables: "Instant download",
      rating: 4.7,
      reviews: 289,
      format: "Excel, Google Sheets, Canva"
    },
    
    // Online Courses
    {
      id: "ai-marketing-course",
      name: "AI Marketing Mastery Course",
      price: "$497",
      originalPrice: "$797",
      category: "Courses",
      badge: "Most Popular",
      type: "Online Course",
      description: "Complete 8-week course teaching you how to leverage AI for marketing automation, content creation, and growth optimization.",
      features: ["8 weeks of content", "20+ video lessons", "AI tools masterclass", "Live Q&A sessions", "Private community access", "Certificate of completion"],
      deliverables: "Lifetime access",
      rating: 4.9,
      reviews: 156,
      format: "Video lessons + resources"
    },
    {
      id: "growth-hacking-bootcamp",
      name: "Growth Hacking Bootcamp",
      price: "$297",
      originalPrice: "$497",
      category: "Courses",
      badge: "New",
      type: "Online Course",
      description: "Intensive 30-day bootcamp covering advanced growth hacking strategies, viral marketing techniques, and scaling frameworks.",
      features: ["30-day curriculum", "Daily challenges", "Growth experiments", "Case study analysis", "Peer networking", "Bonus tool stack"],
      deliverables: "30-day access + lifetime resources",
      rating: 4.8,
      reviews: 89,
      format: "Video + interactive exercises"
    },
    
    // Software Tools & Apps
    {
      id: "marketing-roi-calculator",
      name: "Marketing ROI Calculator Pro",
      price: "$127",
      originalPrice: "$197",
      category: "Tools",
      badge: "Essential",
      type: "Software Tool",
      description: "Advanced calculator tool for measuring marketing ROI, campaign performance, and budget allocation across multiple channels.",
      features: ["Multi-channel tracking", "Real-time calculations", "Export reports", "Custom metrics", "Team collaboration", "API integrations"],
      deliverables: "Instant access",
      rating: 4.6,
      reviews: 134,
      format: "Web app + mobile"
    },
    {
      id: "conversion-toolkit",
      name: "Conversion Optimization Toolkit",
      price: "$197",
      originalPrice: "$297",
      category: "Tools",
      badge: "Pro",
      type: "Software Tool",
      description: "Complete toolkit for A/B testing, heatmap analysis, and conversion rate optimization with built-in analytics dashboard.",
      features: ["A/B testing suite", "Heatmap analytics", "User session recordings", "Conversion funnels", "Statistical significance", "Integration ready"],
      deliverables: "Instant setup",
      rating: 4.7,
      reviews: 78,
      format: "SaaS platform"
    },
    
    // Comprehensive Guides & Ebooks
    {
      id: "marketing-automation-guide",
      name: "Complete Marketing Automation Guide",
      price: "$77",
      originalPrice: "$147",
      category: "Guides",
      badge: "Comprehensive",
      type: "Digital Guide",
      description: "200-page comprehensive guide covering marketing automation strategies, tool comparisons, and implementation frameworks.",
      features: ["200+ pages", "Step-by-step tutorials", "Tool comparisons", "Case studies", "Templates included", "Video walkthroughs"],
      deliverables: "Instant download",
      rating: 4.8,
      reviews: 223,
      format: "PDF + bonus videos"
    },
    {
      id: "ai-content-playbook",
      name: "AI Content Creation Playbook",
      price: "$87",
      originalPrice: "$167",
      category: "Guides",
      badge: "Updated",
      type: "Digital Guide",
      description: "Ultimate playbook for creating high-converting content using AI tools, with prompts, workflows, and optimization strategies.",
      features: ["150+ AI prompts", "Content workflows", "Tool recommendations", "Quality frameworks", "SEO optimization", "Brand voice training"],
      deliverables: "Instant download",
      rating: 4.9,
      reviews: 187,
      format: "PDF + Notion workspace"
    },
    
    // Premium Services
    {
      id: "ai-marketing-audit",
      name: "AI Marketing Audit",
      price: "$497",
      originalPrice: "$697",
      category: "Services",
      badge: "Professional",
      type: "Service",
      description: "Comprehensive analysis of your current marketing infrastructure with AI-powered recommendations and actionable insights.",
      features: ["Complete funnel analysis", "AI optimization recommendations", "Growth strategy roadmap", "30-day implementation plan", "Competitor analysis", "ROI projections"],
      deliverables: "14-day delivery",
      rating: 4.9,
      reviews: 127,
      format: "Custom report + consultation"
    },
    {
      id: "marketing-automation-setup",
      name: "Marketing Automation Setup",
      price: "$1,997",
      originalPrice: "$2,497",
      category: "Services",
      badge: "Enterprise",
      type: "Service",
      description: "Full marketing automation system setup with AI-driven workflows, customer journey mapping, and advanced segmentation.",
      features: ["Email automation sequences", "Lead scoring system", "CRM integration", "Performance tracking dashboard", "A/B testing framework", "Multi-channel workflows"],
      deliverables: "21-day delivery",
      rating: 4.8,
      reviews: 89,
      format: "Done-for-you service"
    },
    {
      id: "strategic-consulting",
      name: "Strategic Consulting Package",
      price: "$2,497",
      originalPrice: "$2,997",
      category: "Consulting",
      badge: "Premium",
      type: "Consulting",
      description: "One-on-one strategic consulting with our senior marketing experts to develop a comprehensive growth strategy.",
      features: ["4 hours of 1:1 consulting", "Custom strategy development", "Market analysis", "Competitive positioning", "Implementation roadmap", "3-month follow-up"],
      deliverables: "Ongoing support",
      rating: 5.0,
      reviews: 42,
      format: "Video calls + deliverables"
    },
    {
      id: "complete-marketing-stack",
      name: "Complete Marketing Stack",
      price: "$3,997",
      originalPrice: "$5,497",
      category: "All",
      badge: "Bundle",
      description: "Everything you need to build a world-class marketing operation. Includes audit, automation, content engine, and analytics.",
      features: ["All individual services", "Priority support", "Dedicated account manager", "Monthly optimization calls", "Custom integrations", "1-year maintenance"],
      deliverables: "30-day delivery",
      rating: 4.9,
      reviews: 34
    }
  ]

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory || product.category === 'All')

  return (
    <div className="min-h-screen bg-dark-bg">
      <Navbar />
      
      {/* Background Elements */}
      <div className="absolute inset-0 cyber-grid opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-premium-blue/5 to-transparent" />
      
      <div className="relative z-10 pt-32 sm:pt-40 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Enhanced Hero Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-20"
          >
            <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight leading-tight text-white mb-4 sm:mb-6">
                <span className="text-white">Premium </span>
                <span className="bg-premium-gradient bg-clip-text text-transparent font-medium animate-glow">Marketing </span>
                <span className="text-premium-silver">Solutions</span>
              </h1>
              <div className="h-px w-24 sm:w-32 md:w-40 bg-gradient-to-r from-transparent via-premium-blue to-transparent mx-auto" />
            </motion.div>

            <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-premium-platinum font-light tracking-wide leading-relaxed max-w-4xl mx-auto mb-3 sm:mb-4 px-4">
                Transform your business with AI-powered marketing infrastructure
              </p>
              <p className="text-base sm:text-lg text-premium-silver/80 font-light max-w-2xl mx-auto px-4">
                From comprehensive audits to complete automation - everything you need to scale your marketing operations
              </p>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 px-4">
              <div className="flex items-center gap-2 text-premium-silver/60">
                <svg className="w-5 h-5 text-premium-blue" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-light">500+ Clients Served</span>
              </div>
              <div className="flex items-center gap-2 text-premium-silver/60">
                <svg className="w-5 h-5 text-premium-blue" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-light">30-Day Money Back</span>
              </div>
              <div className="flex items-center gap-2 text-premium-silver/60">
                <svg className="w-5 h-5 text-premium-blue" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-light">Expert Support</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 sm:mb-16 px-4"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                variants={itemVariants}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-light border backdrop-blur-md transition-all duration-300 hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-premium-blue/20 border-premium-blue/60 text-premium-blue shadow-lg shadow-premium-blue/20'
                    : 'border-premium-blue/30 text-premium-silver hover:border-premium-blue/50 hover:bg-premium-blue/10'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Products Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                className="group relative bg-gradient-to-br from-slate-800/40 to-slate-900/60 backdrop-blur-sm border border-premium-blue/10 hover:border-premium-blue/30 rounded-3xl p-6 sm:p-8 transition-all duration-700 hover:shadow-lg hover:shadow-premium-blue/10 overflow-visible flex flex-col h-full"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Badge */}
                {product.badge && (
                  <div className="absolute -top-2 sm:-top-3 left-4 sm:left-6 px-2 sm:px-3 py-1 bg-premium-blue text-white text-xs font-medium rounded-full z-10">
                    {product.badge}
                  </div>
                )}

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-premium-blue/5 to-premium-purple/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  {/* Product Image */}
                  <div className="mb-4 sm:mb-6 aspect-[4/3] bg-gradient-to-br from-slate-800/40 to-slate-900/60 rounded-2xl overflow-hidden border border-premium-blue/10">
                    <div className="w-full h-full flex items-center justify-center p-4">
                      {(() => {
                        const ImageComponent = shopProductImageMap[product.id] || MarketingFunnelImage1
                        return <ImageComponent />
                      })()}
                    </div>
                  </div>

                  {/* Price Section */}
                  <div className="mb-3 sm:mb-4 flex items-baseline gap-2 sm:gap-3">
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-light text-premium-blue">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm sm:text-lg text-premium-silver/50 line-through">{product.originalPrice}</span>
                    )}
                  </div>

                  {/* Rating & Reviews */}
                  <div className="flex items-center gap-2 mb-3 sm:mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs sm:text-sm text-premium-silver/70">{product.rating} ({product.reviews} reviews)</span>
                  </div>

                  {/* Product Name */}
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-white mb-3 sm:mb-4 group-hover:text-premium-blue transition-colors duration-300">
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-premium-silver/80 font-light mb-4 sm:mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Deliverables */}
                  <div className="flex items-center gap-2 mb-4 sm:mb-6 text-premium-blue">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-xs sm:text-sm font-light">{product.deliverables}</span>
                  </div>

                  {/* Product Type & Format */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2 px-3 py-1 bg-premium-blue/10 border border-premium-blue/20 rounded-full">
                      <div className="w-2 h-2 bg-premium-blue rounded-full"></div>
                      <span className="text-xs text-premium-blue font-light">{product.type}</span>
                    </div>
                    {product.format && (
                      <div className="flex items-center gap-2 px-3 py-1 bg-slate-800/50 border border-slate-700/30 rounded-full">
                        <svg className="w-3 h-3 text-premium-silver/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-xs text-premium-silver/70 font-light">{product.format}</span>
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 flex-grow">
                    {product.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-premium-blue mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-premium-silver/90 font-light text-xs sm:text-sm">{feature}</span>
                      </li>
                    ))}
                    {product.features.length > 4 && (
                      <li className="text-premium-blue/70 text-xs sm:text-sm font-light ml-6 sm:ml-8">
                        +{product.features.length - 4} more features
                      </li>
                    )}
                  </ul>

                  {/* Dynamic CTA Button */}
                  <div className="mt-auto">
                    {(() => {
                      const priceValue = parseInt(product.price.replace(/[$,]/g, ''))
                      const isHighValue = priceValue >= 1000
                      const isService = product.type === 'Service' || product.type === 'Consulting'
                      const shouldSchedule = isHighValue || isService
                      
                      return (
                        <Link href={`/shop/${product.id}`}>
                          <motion.button
                            className="w-full group/btn relative px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-premium-blue/80 to-premium-purple/80 border border-premium-blue/50 text-white font-light text-xs sm:text-sm tracking-wide backdrop-blur-md overflow-hidden transition-all duration-700 hover:border-premium-blue/70 hover:shadow-lg hover:shadow-premium-blue/20 min-h-[48px] flex items-center justify-center"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-premium-blue/20 to-premium-purple/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-700" />
                            <span className="relative z-10 flex items-center justify-center gap-2 whitespace-nowrap">
                              View Details
                              <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </span>
                          </motion.button>
                        </Link>
                      )
                    })()}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Social Proof Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mt-16 sm:mt-20 mb-12 sm:mb-16 text-center px-4"
          >
            <motion.div variants={itemVariants} className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-light text-white mb-3 sm:mb-4">
                Trusted by <span className="text-premium-blue">500+</span> Growing Businesses
              </h2>
              <p className="text-sm sm:text-base text-premium-silver/80 font-light">Join companies that have transformed their marketing with our solutions</p>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
              {[
                { metric: "300%", label: "Average ROI Increase", icon: "📈" },
                { metric: "45 Days", label: "Average Payback Period", icon: "⚡" },
                { metric: "98%", label: "Client Satisfaction Rate", icon: "⭐" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl sm:text-3xl font-light text-premium-blue mb-2">{stat.metric}</div>
                  <div className="text-premium-silver/70 font-light text-xs sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mt-16 sm:mt-20 mb-12 sm:mb-16 px-4"
          >
            <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-light text-white mb-3 sm:mb-4">
                Frequently Asked <span className="text-premium-blue">Questions</span>
              </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
              {[
                {
                  q: "How quickly can I see results?",
                  a: "Most clients see initial improvements within 2-4 weeks of implementation. Full optimization typically takes 60-90 days."
                },
                {
                  q: "Do you offer refunds?",
                  a: "Yes, we offer a 30-day money-back guarantee if you're not satisfied with our service quality."
                },
                {
                  q: "Can I upgrade or downgrade my package?",
                  a: "Absolutely. You can adjust your package at any time to better fit your evolving business needs."
                },
                {
                  q: "What kind of support do you provide?",
                  a: "All packages include email support. Premium packages include dedicated account management and priority phone support."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-slate-900/30 border border-premium-blue/20 rounded-lg sm:rounded-xl p-4 sm:p-6 backdrop-blur-md">
                  <h3 className="text-sm sm:text-base text-white font-medium mb-2 sm:mb-3">{faq.q}</h3>
                  <p className="text-xs sm:text-sm text-premium-silver/80 font-light leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="text-center mt-16 sm:mt-20 bg-gradient-to-br from-slate-900/50 to-slate-800/30 border border-premium-blue/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 backdrop-blur-md mx-4 sm:mx-0"
          >
            <h2 className="text-2xl sm:text-3xl font-light text-white mb-4">
              Ready to <span className="text-premium-blue">Transform</span> Your Marketing?
            </h2>
            <p className="text-sm sm:text-base text-premium-silver font-light mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Join hundreds of businesses that have accelerated their growth with our AI-powered marketing solutions. 
              Get started today with a custom consultation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <motion.button
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-premium-blue/80 to-premium-purple/80 border border-premium-blue/50 text-white font-light text-sm sm:text-base tracking-wide backdrop-blur-md overflow-hidden transition-all duration-700 hover:border-premium-blue/70 hover:shadow-lg hover:shadow-premium-blue/20 w-full sm:w-auto"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-premium-blue/20 to-premium-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <span className="relative z-10 flex items-center gap-2">
                  Get Free Consultation
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </motion.button>
              
              <motion.button
                className="group px-6 sm:px-8 py-3 sm:py-4 border border-premium-blue/50 text-premium-blue font-light text-sm sm:text-base tracking-wide backdrop-blur-md hover:bg-premium-blue/10 transition-all duration-300 w-full sm:w-auto"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                View Case Studies
              </motion.button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-premium-blue/20">
              <div className="flex items-center gap-2 text-premium-silver/60">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-xs sm:text-sm">SSL Secured</span>
              </div>
              <div className="flex items-center gap-2 text-premium-silver/60">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-xs sm:text-sm">Money Back Guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-premium-silver/60">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span className="text-xs sm:text-sm">24/7 Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
