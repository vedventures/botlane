'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '../../../components/Navbar'
import { MarketingFunnelImage1, MarketingFunnelImage2, MarketingFunnelImage3, MarketingFunnelImage4 } from '../../../components/ProductImages'
import { 
  AIPromptsImage, 
  SocialCalendarImage, 
  AICourseImage, 
  GrowthBootcampImage, 
  ROICalculatorImage, 
  ConversionToolkitImage, 
  AutomationGuideImage, 
  ContentPlaybookImage 
} from '../../../components/ProductSVGs'
import { 
  MarketingAuditImage, 
  AutomationSetupImage, 
  StrategicConsultingImage, 
  CompleteStackImage 
} from '../../../components/ProductSVGs2'

// Product image mapping
const productImageMap: Record<string, (() => JSX.Element)[]> = {
  "marketing-funnel-templates": [MarketingFunnelImage1, MarketingFunnelImage2, MarketingFunnelImage3, MarketingFunnelImage4],
  "ai-marketing-prompts": [AIPromptsImage, AIPromptsImage, AIPromptsImage, AIPromptsImage],
  "social-media-calendar": [SocialCalendarImage, SocialCalendarImage, SocialCalendarImage, SocialCalendarImage],
  "ai-marketing-course": [AICourseImage, AICourseImage, AICourseImage, AICourseImage],
  "growth-hacking-bootcamp": [GrowthBootcampImage, GrowthBootcampImage, GrowthBootcampImage, GrowthBootcampImage],
  "marketing-roi-calculator": [ROICalculatorImage, ROICalculatorImage, ROICalculatorImage, ROICalculatorImage],
  "conversion-toolkit": [ConversionToolkitImage, ConversionToolkitImage, ConversionToolkitImage, ConversionToolkitImage],
  "automation-guide": [AutomationGuideImage, AutomationGuideImage, AutomationGuideImage, AutomationGuideImage],
  "content-playbook": [ContentPlaybookImage, ContentPlaybookImage, ContentPlaybookImage, ContentPlaybookImage],
  "marketing-audit": [MarketingAuditImage, MarketingAuditImage, MarketingAuditImage, MarketingAuditImage],
  "automation-setup": [AutomationSetupImage, AutomationSetupImage, AutomationSetupImage, AutomationSetupImage],
  "strategic-consulting": [StrategicConsultingImage, StrategicConsultingImage, StrategicConsultingImage, StrategicConsultingImage],
  "complete-stack": [CompleteStackImage, CompleteStackImage, CompleteStackImage, CompleteStackImage]
}

// Import the products data from the shop page
const products = [
  {
    id: "marketing-funnel-templates",
    name: "Marketing Funnel Templates Pack",
    price: "$97",
    originalPrice: "$197",
    category: "Templates",
    badge: "Best Seller",
    type: "Digital Download",
    description: "Complete collection of high-converting marketing funnel templates with drag-and-drop customization for any industry.",
    longDescription: "Transform your marketing campaigns with our comprehensive collection of professionally designed funnel templates. Each template has been crafted by conversion optimization experts and tested across multiple industries to ensure maximum performance. Perfect for agencies, marketers, and businesses looking to accelerate their funnel creation process.",
    features: ["50+ funnel templates", "Conversion-optimized designs", "Mobile responsive", "A/B test variations", "Industry-specific versions", "Lifetime updates"],
    deliverables: "Instant download",
    rating: 4.9,
    reviews: 342,
    format: "Figma, Sketch, PSD files",
    specifications: {
      'File Formats': 'Figma, Sketch, PSD, PNG, SVG',
      'Total Templates': '50+ Unique Designs',
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
    id: "ai-marketing-prompts",
    name: "AI Marketing Prompts Library",
    price: "$47",
    originalPrice: "$97",
    category: "Digital Products",
    badge: "Hot",
    type: "Digital Download",
    description: "1000+ proven AI prompts for marketing copy, content creation, strategy development, and campaign optimization.",
    longDescription: "Unlock the power of AI in your marketing with our extensive library of proven prompts. From content creation to campaign strategy, these prompts have been tested and refined to deliver exceptional results across various marketing channels and industries.",
    features: ["1000+ marketing prompts", "ChatGPT & Claude optimized", "Category organized", "Copy-paste ready", "Regular updates", "Bonus prompt engineering guide"],
    deliverables: "Instant download",
    rating: 4.8,
    reviews: 567,
    format: "PDF, Notion template",
    specifications: {
      'Total Prompts': '1000+ Categorized Prompts',
      'Categories': '15 Marketing Disciplines',
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
    longDescription: "Never run out of content ideas again with our comprehensive 12-month social media calendar. Includes 365 unique post ideas, platform-specific templates, and proven scheduling strategies to maximize your social media engagement and growth.",
    features: ["365 content ideas", "Platform-specific templates", "Hashtag research sheets", "Analytics tracking", "Content pillars guide", "Canva templates included"],
    deliverables: "Instant download",
    rating: 4.7,
    reviews: 289,
    format: "Excel, Google Sheets, Canva",
    specifications: {
      'Content Ideas': '365 Unique Posts',
      'Platforms': 'Instagram, Facebook, LinkedIn, Twitter',
      'Format': 'Excel, Google Sheets, Canva',
      'Templates': '50+ Design Templates',
      'License': 'Commercial Use Allowed',
      'Updates': 'Quarterly Content Refreshes'
    },
    gallery: [
      '/api/placeholder/600/400',
      '/api/placeholder/600/400',
      '/api/placeholder/600/400'
    ],
    testimonials: [
      {
        name: 'Alex Thompson',
        role: 'Social Media Manager',
        company: 'BrandBoost',
        content: 'This calendar transformed our social media strategy. Engagement increased by 150% in just 2 months.',
        rating: 5
      }
    ]
  },
  {
    id: "ai-marketing-course",
    name: "AI Marketing Mastery Course",
    price: "$497",
    originalPrice: "$797",
    category: "Courses",
    badge: "Most Popular",
    type: "Online Course",
    description: "Complete 8-week course teaching you how to leverage AI for marketing automation, content creation, and growth optimization.",
    longDescription: "Master the future of marketing with our comprehensive AI Marketing course. Learn to leverage cutting-edge AI tools and strategies to automate your marketing processes, create compelling content at scale, and optimize your growth campaigns for maximum ROI.",
    features: ["8 weeks of content", "20+ video lessons", "AI tools masterclass", "Live Q&A sessions", "Private community access", "Certificate of completion"],
    deliverables: "Lifetime access",
    rating: 4.9,
    reviews: 156,
    format: "Video lessons + resources",
    specifications: {
      'Duration': '8 Weeks',
      'Video Content': '20+ HD Video Lessons',
      'Resources': 'Templates, Worksheets, Tools',
      'Community': 'Private Discord Server',
      'Certificate': 'Completion Certificate',
      'Access': 'Lifetime Access'
    },
    gallery: [
      '/api/placeholder/600/400',
      '/api/placeholder/600/400',
      '/api/placeholder/600/400'
    ],
    testimonials: [
      {
        name: 'Jennifer Kim',
        role: 'Marketing Director',
        company: 'ScaleUp Solutions',
        content: 'This course completely changed how we approach marketing. Our team is now 5x more efficient with AI tools.',
        rating: 5
      }
    ]
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
    longDescription: "Accelerate your business growth with proven growth hacking strategies used by the world's fastest-growing companies. This intensive bootcamp covers everything from viral marketing techniques to advanced scaling frameworks.",
    features: ["30-day curriculum", "Daily challenges", "Growth experiments", "Case study analysis", "Peer networking", "Bonus tool stack"],
    deliverables: "30-day access + lifetime resources",
    rating: 4.8,
    reviews: 89,
    format: "Video + interactive exercises",
    specifications: {
      'Duration': '30 Days',
      'Daily Content': 'Video + Exercises',
      'Experiments': '15+ Growth Experiments',
      'Case Studies': '10+ Real Company Examples',
      'Tools': 'Growth Hacking Tool Stack',
      'Community': 'Peer Network Access'
    },
    gallery: [
      '/api/placeholder/600/400',
      '/api/placeholder/600/400',
      '/api/placeholder/600/400'
    ],
    testimonials: [
      {
        name: 'David Park',
        role: 'Startup Founder',
        company: 'RapidGrow',
        content: 'The growth experiments in this bootcamp helped us achieve 300% user growth in just 60 days.',
        rating: 5
      }
    ]
  },
  {
    id: "marketing-roi-calculator",
    name: "Marketing ROI Calculator Pro",
    price: "$127",
    originalPrice: "$197",
    category: "Tools",
    badge: "Essential",
    type: "Software Tool",
    description: "Advanced calculator tool for measuring marketing ROI, campaign performance, and budget allocation across multiple channels.",
    longDescription: "Make data-driven marketing decisions with our advanced ROI calculator. Track performance across multiple channels, optimize budget allocation, and measure the true impact of your marketing investments with precision.",
    features: ["Multi-channel tracking", "Real-time calculations", "Export reports", "Custom metrics", "Team collaboration", "API integrations"],
    deliverables: "Instant access",
    rating: 4.6,
    reviews: 134,
    format: "Web app + mobile",
    specifications: {
      'Channels': 'All Major Marketing Channels',
      'Reports': 'Custom & Automated Reports',
      'Integration': 'API + Webhook Support',
      'Team Size': 'Unlimited Users',
      'Data Export': 'CSV, PDF, Excel',
      'Support': '24/7 Technical Support'
    },
    gallery: [
      '/api/placeholder/600/400',
      '/api/placeholder/600/400',
      '/api/placeholder/600/400'
    ],
    testimonials: [
      {
        name: 'Lisa Wang',
        role: 'CMO',
        company: 'MetricsMatter',
        content: 'Finally, a tool that gives us clear visibility into our marketing ROI. Game-changer for budget planning.',
        rating: 5
      }
    ]
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
    longDescription: "Optimize your conversion rates with our comprehensive toolkit. Includes A/B testing suite, heatmap analytics, user session recordings, and advanced funnel analysis to maximize your website's performance.",
    features: ["A/B testing suite", "Heatmap analytics", "User session recordings", "Conversion funnels", "Statistical significance", "Integration ready"],
    deliverables: "Instant setup",
    rating: 4.7,
    reviews: 78,
    format: "SaaS platform",
    specifications: {
      'Testing': 'Unlimited A/B Tests',
      'Analytics': 'Real-time Heatmaps',
      'Recordings': 'User Session Playback',
      'Funnels': 'Multi-step Analysis',
      'Integration': '50+ Platform Integrations',
      'Support': 'Priority Support Included'
    },
    gallery: [
      '/api/placeholder/600/400',
      '/api/placeholder/600/400',
      '/api/placeholder/600/400'
    ],
    testimonials: [
      {
        name: 'Tom Bradley',
        role: 'Growth Manager',
        company: 'ConvertMore',
        content: 'This toolkit helped us increase our conversion rate by 67%. The insights are incredibly actionable.',
        rating: 5
      }
    ]
  },
  {
    id: "marketing-automation-guide",
    name: "Complete Marketing Automation Guide",
    price: "$77",
    originalPrice: "$147",
    category: "Guides",
    badge: "Comprehensive",
    type: "Digital Guide",
    description: "200-page comprehensive guide covering marketing automation strategies, tool comparisons, and implementation frameworks.",
    longDescription: "Master marketing automation with our comprehensive 200-page guide. Learn proven strategies, compare top tools, and get step-by-step implementation frameworks to automate your marketing processes effectively.",
    features: ["200+ pages", "Step-by-step tutorials", "Tool comparisons", "Case studies", "Templates included", "Video walkthroughs"],
    deliverables: "Instant download",
    rating: 4.8,
    reviews: 223,
    format: "PDF + bonus videos",
    specifications: {
      'Pages': '200+ Detailed Pages',
      'Chapters': '12 Comprehensive Chapters',
      'Tools Covered': '25+ Marketing Automation Tools',
      'Templates': '15+ Implementation Templates',
      'Videos': '5+ Hours of Walkthroughs',
      'Updates': 'Annual Guide Updates'
    },
    gallery: [
      '/api/placeholder/600/400',
      '/api/placeholder/600/400',
      '/api/placeholder/600/400'
    ],
    testimonials: [
      {
        name: 'Rachel Green',
        role: 'Marketing Automation Specialist',
        company: 'AutoFlow',
        content: 'The most comprehensive automation guide I\'ve ever read. Saved us months of trial and error.',
        rating: 5
      }
    ]
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
    longDescription: "Create compelling content at scale with AI. This playbook includes proven workflows, optimization strategies, and 150+ prompts to help you produce high-quality content consistently across all marketing channels.",
    features: ["150+ AI prompts", "Content workflows", "Tool recommendations", "Quality frameworks", "SEO optimization", "Brand voice training"],
    deliverables: "Instant download",
    rating: 4.9,
    reviews: 187,
    format: "PDF + Notion workspace",
    specifications: {
      'Prompts': '150+ Content Prompts',
      'Workflows': '10+ Proven Workflows',
      'Tools': '20+ AI Tool Reviews',
      'Framework': 'Quality Assessment Framework',
      'SEO': 'AI-Powered SEO Strategies',
      'Bonus': 'Notion Workspace Template'
    },
    gallery: [
      '/api/placeholder/600/400',
      '/api/placeholder/600/400',
      '/api/placeholder/600/400'
    ],
    testimonials: [
      {
        name: 'Marcus Johnson',
        role: 'Content Director',
        company: 'ContentScale',
        content: 'This playbook 10x our content output while maintaining quality. The workflows are pure gold.',
        rating: 5
      }
    ]
  },
  {
    id: "ai-marketing-audit",
    name: "AI Marketing Audit",
    price: "$497",
    originalPrice: "$697",
    category: "Services",
    badge: "Professional",
    type: "Service",
    description: "Comprehensive analysis of your current marketing infrastructure with AI-powered recommendations and actionable insights.",
    longDescription: "Get a complete analysis of your marketing infrastructure with our AI-powered audit. Receive detailed recommendations, growth strategies, and implementation roadmaps to optimize your marketing performance.",
    features: ["Complete funnel analysis", "AI optimization recommendations", "Growth strategy roadmap", "30-day implementation plan", "Competitor analysis", "ROI projections"],
    deliverables: "14-day delivery",
    rating: 4.9,
    reviews: 127,
    format: "Custom report + consultation",
    specifications: {
      'Analysis Depth': 'Complete Marketing Stack',
      'Deliverables': 'Custom 50+ Page Report',
      'Consultation': '2-Hour Strategy Call',
      'Timeline': '14-Day Delivery',
      'Follow-up': '30-Day Implementation Support',
      'Guarantee': 'Satisfaction Guaranteed'
    },
    gallery: [
      '/api/placeholder/600/400',
      '/api/placeholder/600/400',
      '/api/placeholder/600/400'
    ],
    testimonials: [
      {
        name: 'Amanda Foster',
        role: 'CEO',
        company: 'GrowthTech',
        content: 'The audit revealed optimization opportunities we never knew existed. ROI improved by 200% in 3 months.',
        rating: 5
      }
    ]
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
    longDescription: "Get a complete marketing automation system built for your business. Our experts will set up AI-driven workflows, customer journey mapping, and advanced segmentation to maximize your marketing efficiency and results.",
    features: ["Email automation sequences", "Lead scoring system", "CRM integration", "Performance tracking dashboard", "A/B testing framework", "Multi-channel workflows"],
    deliverables: "21-day delivery",
    rating: 4.8,
    reviews: 89,
    format: "Done-for-you service",
    specifications: {
      'Setup Time': '21-Day Implementation',
      'Workflows': 'Custom AI-Driven Sequences',
      'Integration': 'CRM + Marketing Tools',
      'Training': '4 Hours of Team Training',
      'Support': '90-Day Post-Launch Support',
      'Optimization': 'Ongoing Performance Tuning'
    },
    gallery: [
      '/api/placeholder/600/400',
      '/api/placeholder/600/400',
      '/api/placeholder/600/400'
    ],
    testimonials: [
      {
        name: 'Robert Chen',
        role: 'VP Marketing',
        company: 'TechScale',
        content: 'The automation setup transformed our lead nurturing. We\'re now converting 40% more leads with less manual work.',
        rating: 5
      }
    ]
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
    longDescription: "Work directly with our senior marketing strategists to develop a comprehensive growth plan tailored to your business. Includes market analysis, competitive positioning, and a detailed implementation roadmap.",
    features: ["4 hours of 1:1 consulting", "Custom strategy development", "Market analysis", "Competitive positioning", "Implementation roadmap", "3-month follow-up"],
    deliverables: "Ongoing support",
    rating: 5.0,
    reviews: 42,
    format: "Video calls + deliverables",
    specifications: {
      'Consulting Hours': '4 Hours of 1:1 Strategy',
      'Deliverables': 'Custom Strategy Document',
      'Analysis': 'Market + Competitor Research',
      'Roadmap': '90-Day Implementation Plan',
      'Follow-up': '3-Month Progress Reviews',
      'Access': 'Direct Expert Communication'
    },
    gallery: [
      '/api/placeholder/600/400',
      '/api/placeholder/600/400',
      '/api/placeholder/600/400'
    ],
    testimonials: [
      {
        name: 'Michael Torres',
        role: 'Founder',
        company: 'InnovateNow',
        content: 'The strategic insights we gained were invaluable. Revenue increased 250% following their recommendations.',
        rating: 5
      }
    ]
  },
  {
    id: "complete-marketing-stack",
    name: "Complete Marketing Stack",
    price: "$3,997",
    originalPrice: "$5,497",
    category: "All",
    badge: "Bundle",
    type: "Service Bundle",
    description: "Everything you need to build a world-class marketing operation. Includes audit, automation, content engine, and analytics.",
    longDescription: "Get everything you need to build a world-class marketing operation. This comprehensive bundle includes our complete audit, automation setup, content creation system, and ongoing optimization support.",
    features: ["All individual services", "Priority support", "Dedicated account manager", "Monthly optimization calls", "Custom integrations", "1-year maintenance"],
    deliverables: "30-day delivery",
    rating: 4.9,
    reviews: 34,
    format: "Complete service package",
    specifications: {
      'Services Included': 'All Premium Services',
      'Account Manager': 'Dedicated Expert',
      'Support': 'Priority 24/7 Support',
      'Optimization': 'Monthly Strategy Calls',
      'Maintenance': '1-Year Included',
      'Custom Work': 'Tailored Integrations'
    },
    gallery: [
      '/api/placeholder/600/400',
      '/api/placeholder/600/400',
      '/api/placeholder/600/400'
    ],
    testimonials: [
      {
        name: 'Patricia Williams',
        role: 'CMO',
        company: 'Enterprise Solutions',
        content: 'The complete stack transformed our entire marketing operation. Best investment we\'ve made for growth.',
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
      <Navbar />
      
      {/* Background Elements */}
      <div className="absolute inset-0 cyber-grid opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-premium-blue/5 to-transparent" />
      
      {/* Breadcrumb Navigation */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-8">
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
                  const productImages = productImageMap[product.id] || [MarketingFunnelImage1, MarketingFunnelImage2, MarketingFunnelImage3, MarketingFunnelImage4]
                  const ImageComponent = productImages[selectedImage] || productImages[0]
                  return <ImageComponent />
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
