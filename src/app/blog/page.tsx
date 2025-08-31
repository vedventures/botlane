'use client'

import { motion } from 'framer-motion'
import Navbar from '../../components/Navbar'

export default function Blog() {
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

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI-Driven Marketing Automation",
      excerpt: "Discover how artificial intelligence is revolutionizing marketing workflows and customer engagement strategies for modern businesses.",
      date: "August 28, 2024",
      readTime: "8 min read",
      category: "AI Marketing",
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "Building Scalable Customer Journey Maps",
      excerpt: "Learn the essential framework for creating customer journeys that adapt and scale with your business growth.",
      date: "August 25, 2024",
      readTime: "6 min read",
      category: "Strategy",
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Conversion Rate Optimization in 2024",
      excerpt: "Advanced techniques and tools for maximizing conversion rates across all digital touchpoints.",
      date: "August 22, 2024",
      readTime: "10 min read",
      category: "Optimization",
      image: "/api/placeholder/400/250"
    },
    {
      id: 4,
      title: "Data-Driven Content Strategy",
      excerpt: "How to leverage analytics and AI insights to create content that resonates with your target audience.",
      date: "August 19, 2024",
      readTime: "7 min read",
      category: "Content",
      image: "/api/placeholder/400/250"
    },
    {
      id: 5,
      title: "Marketing Attribution Models Explained",
      excerpt: "Understanding different attribution models and choosing the right one for your business objectives.",
      date: "August 16, 2024",
      readTime: "9 min read",
      category: "Analytics",
      image: "/api/placeholder/400/250"
    },
    {
      id: 6,
      title: "The ROI of Marketing Automation",
      excerpt: "Measuring and maximizing the return on investment from your marketing automation initiatives.",
      date: "August 13, 2024",
      readTime: "5 min read",
      category: "ROI",
      image: "/api/placeholder/400/250"
    }
  ]

  const categories = ["All", "AI Marketing", "Strategy", "Optimization", "Content", "Analytics", "ROI"]

  return (
    <div className="min-h-screen bg-dark-bg">
      <Navbar />
      
      {/* Background Elements */}
      <div className="absolute inset-0 cyber-grid opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-premium-blue/5 to-transparent" />
      
      <div className="relative z-10 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-16"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-tight text-white mb-4">
                <span className="bg-premium-gradient bg-clip-text text-transparent font-medium animate-glow">Marketing </span>
                <span className="text-premium-silver">Insights</span>
              </h1>
              <div className="h-px w-24 sm:w-32 bg-gradient-to-r from-transparent via-premium-blue to-transparent mx-auto" />
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-lg sm:text-xl md:text-2xl text-premium-platinum font-light tracking-wide leading-relaxed max-w-3xl mx-auto">
                Strategic insights and actionable advice for modern marketing leaders
              </p>
            </motion.div>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                variants={itemVariants}
                className={`px-4 py-2 text-sm font-light border border-premium-blue/30 backdrop-blur-md transition-all duration-300 hover:border-premium-blue/60 hover:bg-premium-blue/10 ${
                  index === 0 ? 'bg-premium-blue/20 border-premium-blue/60 text-premium-blue' : 'text-premium-silver'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Blog Posts Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                className="group relative bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-md border border-premium-blue/20 rounded-2xl overflow-hidden hover:border-premium-blue/40 transition-all duration-500 hover:shadow-lg hover:shadow-premium-blue/10"
                whileHover={{ y: -5 }}
              >
                {/* Image Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-premium-blue/20 to-premium-purple/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-premium-blue/10 to-premium-purple/10 group-hover:from-premium-blue/20 group-hover:to-premium-purple/20 transition-all duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-12 h-12 text-premium-blue/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                </div>

                <div className="p-6">
                  {/* Category & Date */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-premium-blue bg-premium-blue/10 px-2 py-1 rounded">
                      {post.category}
                    </span>
                    <span className="text-xs text-premium-silver/60">{post.date}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-medium text-white mb-3 group-hover:text-premium-blue transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-premium-silver/80 font-light text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Read Time & CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-premium-silver/60">{post.readTime}</span>
                    <motion.button
                      className="text-premium-blue text-sm font-light hover:text-premium-blue/80 transition-colors duration-300 flex items-center gap-1"
                      whileHover={{ x: 3 }}
                    >
                      Read More
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.button>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="text-center mt-16 bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-md border border-premium-blue/20 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-medium text-white mb-4">
              Stay Updated with <span className="text-premium-blue">Marketing Insights</span>
            </h3>
            <p className="text-premium-silver/80 font-light mb-6 max-w-2xl mx-auto">
              Get the latest marketing strategies, AI insights, and growth tactics delivered to your inbox weekly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800/50 border border-premium-blue/30 text-white placeholder-premium-silver/50 focus:border-premium-blue/60 focus:outline-none transition-colors duration-300"
              />
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-premium-blue/80 to-premium-purple/80 border border-premium-blue/50 text-white font-light text-sm tracking-wide transition-all duration-300 hover:border-premium-blue/70 hover:shadow-lg hover:shadow-premium-blue/20"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
