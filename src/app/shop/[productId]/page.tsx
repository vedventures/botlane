'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MarketingFunnelImage1, MarketingFunnelImage2, MarketingFunnelImage3, MarketingFunnelImage4 } from '../../../components/ProductImages'

// Import the products data from the shop page
const products = [
  {
    id: 'marketing-funnel-templates',
    name: 'Marketing Funnel Templates Pack',
    price: '$297',
    originalPrice: '$497',
    rating: 4.9,
    reviews: 127,
    badge: 'Best Seller',
    type: 'Template',
    format: 'Figma, Sketch, Adobe XD',
    deliverables: 'Instant Download',
    description: 'Complete collection of high-converting marketing funnel templates designed by conversion experts.',
    longDescription: 'Transform your marketing campaigns with our comprehensive collection of professionally designed funnel templates. Each template has been crafted by conversion optimization experts and tested across multiple industries to ensure maximum performance. Perfect for agencies, marketers, and businesses looking to accelerate their funnel creation process.',
    features: [
      '25+ High-Converting Funnel Templates',
      'Multi-Format Support (Figma, Sketch, Adobe XD)',
      'Mobile-Responsive Designs',
      'Conversion-Optimized Layouts',
      'Industry-Specific Variations',
      'Color Scheme Customizations',
      'Typography Guidelines',
      'A/B Testing Variations',
      'Video Tutorial Included',
      'Lifetime Updates'
    ],
    specifications: {
      'File Formats': 'Figma, Sketch, Adobe XD, PNG, SVG',
      'Total Templates': '25+ Unique Designs',
      'Industries Covered': 'SaaS, E-commerce, Lead Gen, Coaching',
      'Device Support': 'Desktop, Tablet, Mobile',
      'License': 'Commercial Use Allowed',
      'Support': 'Email + Video Tutorials'
    },
    gallery: [
      'marketing-funnel-1',
      'marketing-funnel-2', 
      'marketing-funnel-3',
      'marketing-funnel-4'
    ],
    testimonials: [
      {
        name: 'Sarah Johnson',
        role: 'Marketing Director',
        company: 'TechFlow Inc.',
        content: 'These templates saved us weeks of design work. Our conversion rates increased by 34% after implementing them.',
        rating: 5
      },
      {
        name: 'Mike Chen',
        role: 'Founder',
        company: 'GrowthLab',
        content: 'Professional quality templates that actually convert. Worth every penny for the time saved.',
        rating: 5
      }
    ]
  },
  {
    id: 'ai-marketing-prompts',
    name: 'AI Marketing Prompts Library',
    price: '$127',
    originalPrice: '$197',
    rating: 4.8,
    reviews: 89,
    badge: 'Hot',
    type: 'Digital Product',
    format: 'PDF, Notion Template',
    deliverables: 'Instant Access',
    description: 'Comprehensive library of AI prompts for marketing campaigns, content creation, and strategy development.',
    longDescription: 'Unlock the power of AI in your marketing with our extensive library of proven prompts. From content creation to campaign strategy, these prompts have been tested and refined to deliver exceptional results across various marketing channels and industries.',
    features: [
      '500+ Marketing AI Prompts',
      'Content Creation Templates',
      'Campaign Strategy Prompts',
      'Social Media Automation',
      'Email Marketing Scripts',
      'Ad Copy Generators',
      'SEO Content Prompts',
      'Brand Voice Development',
      'Competitor Analysis Templates',
      'Monthly Updates'
    ],
    specifications: {
      'Total Prompts': '500+ Categorized Prompts',
      'Categories': '12 Marketing Disciplines',
      'Format': 'PDF + Notion Template',
      'AI Platforms': 'ChatGPT, Claude, Gemini Compatible',
      'Updates': 'Monthly New Prompts',
      'License': 'Personal & Commercial Use'
    },
    gallery: [
      '/api/placeholder/600/400',
      '/api/placeholder/600/400',
      '/api/placeholder/600/400'
    ],
    testimonials: [
      {
        name: 'Emma Rodriguez',
        role: 'Content Manager',
        company: 'Digital Dynamics',
        content: 'This prompt library has revolutionized our content creation process. We\'re producing 3x more content in half the time.',
        rating: 5
      }
    ]
  }
]

interface ProductPageProps {
  params: {
    productId: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  
  const product = products.find(p => p.id === params.productId)
  
  if (!product) {
    notFound()
  }

  const priceValue = parseInt(product.price.replace(/[$,]/g, ''))
  const isHighValue = priceValue >= 1000
  const isService = product.type === 'Service' || product.type === 'Consulting'
  const shouldSchedule = isHighValue || isService

  return (
    <div className="min-h-screen bg-dark-bg text-white">
      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-8">
        <nav className="flex items-center gap-2 text-sm text-premium-silver/70">
          <Link href="/" className="hover:text-premium-blue transition-colors">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-premium-blue transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-white">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Product Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Main Image */}
            <div className="relative aspect-[4/3] bg-gradient-to-br from-slate-800/40 to-slate-900/60 rounded-3xl overflow-hidden border border-premium-blue/10">
              <div className="w-full h-full flex items-center justify-center p-4">
                {(() => {
                  const imageId = product.gallery[selectedImage]
                  switch (imageId) {
                    case 'marketing-funnel-1':
                      return <MarketingFunnelImage1 />
                    case 'marketing-funnel-2':
                      return <MarketingFunnelImage2 />
                    case 'marketing-funnel-3':
                      return <MarketingFunnelImage3 />
                    case 'marketing-funnel-4':
                      return <MarketingFunnelImage4 />
                    default:
                      return <MarketingFunnelImage1 />
                  }
                })()}
              </div>
              {product.badge && (
                <div className="absolute top-4 left-4 px-3 py-1 bg-premium-blue text-white text-xs font-medium rounded-full">
                  {product.badge}
                </div>
              )}
            </div>

            {/* Thumbnail Gallery */}
            <div className="flex gap-4 overflow-x-auto">
              {product.gallery.map((imageId, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? 'border-premium-blue'
                      : 'border-slate-700 hover:border-slate-600'
                  } bg-gradient-to-br from-slate-800/40 to-slate-900/60 p-2`}
                >
                  <div className="w-full h-full">
                    {(() => {
                      switch (imageId) {
                        case 'marketing-funnel-1':
                          return <MarketingFunnelImage1 />
                        case 'marketing-funnel-2':
                          return <MarketingFunnelImage2 />
                        case 'marketing-funnel-3':
                          return <MarketingFunnelImage3 />
                        case 'marketing-funnel-4':
                          return <MarketingFunnelImage4 />
                        default:
                          return <MarketingFunnelImage1 />
                      }
                    })()}
                  </div>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Product Header */}
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                {product.name}
              </h1>
              
              {/* Rating & Reviews */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-600'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-premium-silver/70">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-4xl font-light text-premium-blue">{product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-premium-silver/50 line-through">{product.originalPrice}</span>
                )}
              </div>

              {/* Product Type & Format */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2 px-3 py-1 bg-premium-blue/10 border border-premium-blue/20 rounded-full">
                  <div className="w-2 h-2 bg-premium-blue rounded-full"></div>
                  <span className="text-sm text-premium-blue font-light">{product.type}</span>
                </div>
                {product.format && (
                  <div className="flex items-center gap-2 px-3 py-1 bg-slate-800/50 border border-slate-700/30 rounded-full">
                    <svg className="w-3 h-3 text-premium-silver/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-sm text-premium-silver/70 font-light">{product.format}</span>
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="text-premium-silver/80 leading-relaxed mb-8">
                {product.longDescription}
              </p>
            </div>

            {/* Add to Cart Section */}
            <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/60 backdrop-blur-sm border border-premium-blue/10 rounded-3xl p-6">
              {!shouldSchedule && (
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-premium-silver/70">Quantity:</span>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-8 h-8 rounded-lg bg-slate-700 hover:bg-slate-600 flex items-center justify-center transition-colors"
                    >
                      -
                    </button>
                    <span className="w-12 text-center">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-8 h-8 rounded-lg bg-slate-700 hover:bg-slate-600 flex items-center justify-center transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
              )}

              <div className="space-y-4">
                <motion.button
                  className="w-full group/btn relative px-6 py-4 bg-gradient-to-r from-premium-blue/80 to-premium-purple/80 border border-premium-blue/50 text-white font-medium text-lg tracking-wide backdrop-blur-md overflow-hidden transition-all duration-700 hover:border-premium-blue/70 hover:shadow-lg hover:shadow-premium-blue/20 rounded-xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-premium-blue/20 to-premium-purple/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-700" />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {shouldSchedule ? 'Schedule Consultation' : 'Add to Cart'}
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {shouldSchedule ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h8" />
                      )}
                    </svg>
                  </span>
                </motion.button>

                {!shouldSchedule && (
                  <button className="w-full px-6 py-3 border border-premium-blue/30 text-premium-blue hover:bg-premium-blue/10 transition-colors rounded-xl">
                    Buy Now - Instant Download
                  </button>
                )}
              </div>

              {/* Deliverables Info */}
              <div className="flex items-center gap-2 mt-4 text-premium-blue/70">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm">{product.deliverables}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Product Details Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/60 backdrop-blur-sm border border-premium-blue/10 rounded-3xl p-8">
            {/* Features Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">What&apos;s Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-premium-blue mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-premium-silver/90">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specifications */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">Specifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-start">
                    <span className="text-premium-silver/70 font-medium">{key}:</span>
                    <span className="text-white text-right ml-4">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            {product.testimonials && product.testimonials.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Customer Reviews</h2>
                <div className="space-y-6">
                  {product.testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-slate-800/40 rounded-2xl p-6">
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-600'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-premium-silver/90 mb-4 italic">&ldquo;{testimonial.content}&rdquo;</p>
                      <div className="text-sm">
                        <div className="text-white font-medium">{testimonial.name}</div>
                        <div className="text-premium-silver/70">{testimonial.role} at {testimonial.company}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
