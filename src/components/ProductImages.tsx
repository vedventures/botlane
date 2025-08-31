import React from 'react'

export const MarketingFunnelImage1 = () => (
  <svg viewBox="0 0 600 400" className="w-full h-full">
    <defs>
      <linearGradient id="funnelGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6366f1" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.9" />
      </linearGradient>
      <linearGradient id="bgGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1e293b" />
        <stop offset="100%" stopColor="#0f172a" />
      </linearGradient>
      <filter id="glow1">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge> 
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    
    {/* Background */}
    <rect width="600" height="400" fill="url(#bgGrad1)" />
    
    {/* Grid Pattern */}
    <pattern id="grid1" width="30" height="30" patternUnits="userSpaceOnUse">
      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#6366f1" strokeWidth="0.5" opacity="0.1"/>
    </pattern>
    <rect width="600" height="400" fill="url(#grid1)" />
    
    {/* Funnel Shape */}
    <path d="M 150 80 L 450 80 L 400 160 L 200 160 L 350 240 L 250 240 L 320 320 L 280 320 Z" 
          fill="url(#funnelGrad1)" 
          filter="url(#glow1)" 
          opacity="0.8" />
    
    {/* Funnel Labels */}
    <text x="300" y="100" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">AWARENESS</text>
    <text x="300" y="180" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">INTEREST</text>
    <text x="300" y="260" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">DECISION</text>
    <text x="300" y="340" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">ACTION</text>
    
    {/* Floating Elements */}
    <circle cx="120" cy="120" r="8" fill="#6366f1" opacity="0.6" />
    <circle cx="480" cy="140" r="6" fill="#8b5cf6" opacity="0.6" />
    <circle cx="100" cy="280" r="4" fill="#6366f1" opacity="0.4" />
    <circle cx="500" cy="300" r="5" fill="#8b5cf6" opacity="0.5" />
    
    {/* Title */}
    <text x="300" y="40" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">Marketing Funnel Template</text>
  </svg>
)

export const MarketingFunnelImage2 = () => (
  <svg viewBox="0 0 600 400" className="w-full h-full">
    <defs>
      <linearGradient id="funnelGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#ec4899" stopOpacity="0.9" />
      </linearGradient>
      <linearGradient id="bgGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1e293b" />
        <stop offset="100%" stopColor="#0f172a" />
      </linearGradient>
    </defs>
    
    {/* Background */}
    <rect width="600" height="400" fill="url(#bgGrad2)" />
    
    {/* Dashboard Layout */}
    <rect x="50" y="60" width="500" height="300" fill="rgba(51, 65, 85, 0.6)" rx="15" stroke="#6366f1" strokeWidth="2" />
    
    {/* Header Bar */}
    <rect x="70" y="80" width="460" height="40" fill="url(#funnelGrad2)" rx="8" />
    <text x="300" y="105" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">Conversion Dashboard</text>
    
    {/* Metrics Cards */}
    <rect x="80" y="140" width="100" height="80" fill="rgba(99, 102, 241, 0.2)" rx="8" stroke="#6366f1" strokeWidth="1" />
    <text x="130" y="165" textAnchor="middle" fill="#6366f1" fontSize="12" fontWeight="bold">Visitors</text>
    <text x="130" y="200" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">12.5K</text>
    
    <rect x="200" y="140" width="100" height="80" fill="rgba(139, 92, 246, 0.2)" rx="8" stroke="#8b5cf6" strokeWidth="1" />
    <text x="250" y="165" textAnchor="middle" fill="#8b5cf6" fontSize="12" fontWeight="bold">Leads</text>
    <text x="250" y="200" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">2.1K</text>
    
    <rect x="320" y="140" width="100" height="80" fill="rgba(236, 72, 153, 0.2)" rx="8" stroke="#ec4899" strokeWidth="1" />
    <text x="370" y="165" textAnchor="middle" fill="#ec4899" fontSize="12" fontWeight="bold">Sales</text>
    <text x="370" y="200" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">347</text>
    
    <rect x="440" y="140" width="100" height="80" fill="rgba(34, 197, 94, 0.2)" rx="8" stroke="#22c55e" strokeWidth="1" />
    <text x="490" y="165" textAnchor="middle" fill="#22c55e" fontSize="12" fontWeight="bold">Revenue</text>
    <text x="490" y="200" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">$47K</text>
    
    {/* Chart Area */}
    <rect x="80" y="240" width="460" height="100" fill="rgba(30, 41, 59, 0.8)" rx="8" />
    <polyline points="100,320 150,300 200,280 250,260 300,250 350,240 400,230 450,220 500,210" 
              fill="none" stroke="#6366f1" strokeWidth="3" />
    
    {/* Title */}
    <text x="300" y="30" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">Analytics Template</text>
  </svg>
)

export const MarketingFunnelImage3 = () => (
  <svg viewBox="0 0 600 400" className="w-full h-full">
    <defs>
      <linearGradient id="funnelGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#6366f1" stopOpacity="0.9" />
      </linearGradient>
      <linearGradient id="bgGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1e293b" />
        <stop offset="100%" stopColor="#0f172a" />
      </linearGradient>
    </defs>
    
    {/* Background */}
    <rect width="600" height="400" fill="url(#bgGrad3)" />
    
    {/* Landing Page Layout */}
    <rect x="100" y="50" width="400" height="300" fill="rgba(51, 65, 85, 0.6)" rx="12" stroke="#06b6d4" strokeWidth="2" />
    
    {/* Header */}
    <rect x="120" y="70" width="360" height="50" fill="url(#funnelGrad3)" rx="8" />
    <text x="300" y="100" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">Landing Page Template</text>
    
    {/* Hero Section */}
    <rect x="130" y="140" width="340" height="60" fill="rgba(6, 182, 212, 0.2)" rx="6" stroke="#06b6d4" strokeWidth="1" />
    <text x="300" y="165" textAnchor="middle" fill="#06b6d4" fontSize="14" fontWeight="bold">Hero Section</text>
    <text x="300" y="185" textAnchor="middle" fill="white" fontSize="12">Compelling headline and CTA</text>
    
    {/* Features Section */}
    <rect x="130" y="220" width="100" height="40" fill="rgba(99, 102, 241, 0.2)" rx="4" stroke="#6366f1" strokeWidth="1" />
    <text x="180" y="245" textAnchor="middle" fill="white" fontSize="10">Feature 1</text>
    
    <rect x="250" y="220" width="100" height="40" fill="rgba(99, 102, 241, 0.2)" rx="4" stroke="#6366f1" strokeWidth="1" />
    <text x="300" y="245" textAnchor="middle" fill="white" fontSize="10">Feature 2</text>
    
    <rect x="370" y="220" width="100" height="40" fill="rgba(99, 102, 241, 0.2)" rx="4" stroke="#6366f1" strokeWidth="1" />
    <text x="420" y="245" textAnchor="middle" fill="white" fontSize="10">Feature 3</text>
    
    {/* CTA Button */}
    <rect x="200" y="280" width="200" height="40" fill="url(#funnelGrad3)" rx="20" />
    <text x="300" y="305" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Get Started Now</text>
    
    {/* Decorative Elements */}
    <circle cx="80" cy="100" r="6" fill="#06b6d4" opacity="0.6" />
    <circle cx="520" cy="120" r="4" fill="#6366f1" opacity="0.6" />
    <circle cx="60" cy="250" r="3" fill="#06b6d4" opacity="0.4" />
    <circle cx="540" cy="280" r="5" fill="#6366f1" opacity="0.5" />
    
    {/* Title */}
    <text x="300" y="30" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">Landing Page Design</text>
  </svg>
)

export const MarketingFunnelImage4 = () => (
  <svg viewBox="0 0 600 400" className="w-full h-full">
    <defs>
      <linearGradient id="funnelGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#ef4444" stopOpacity="0.9" />
      </linearGradient>
      <linearGradient id="bgGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1e293b" />
        <stop offset="100%" stopColor="#0f172a" />
      </linearGradient>
    </defs>
    
    {/* Background */}
    <rect width="600" height="400" fill="url(#bgGrad4)" />
    
    {/* Email Template Layout */}
    <rect x="150" y="60" width="300" height="280" fill="rgba(51, 65, 85, 0.7)" rx="10" stroke="#f59e0b" strokeWidth="2" />
    
    {/* Email Header */}
    <rect x="170" y="80" width="260" height="30" fill="url(#funnelGrad4)" rx="6" />
    <text x="300" y="100" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Email Campaign</text>
    
    {/* Email Content */}
    <rect x="180" y="130" width="240" height="15" fill="rgba(245, 158, 11, 0.3)" rx="2" />
    <rect x="180" y="155" width="200" height="10" fill="rgba(245, 158, 11, 0.2)" rx="2" />
    <rect x="180" y="175" width="220" height="10" fill="rgba(245, 158, 11, 0.2)" rx="2" />
    <rect x="180" y="195" width="180" height="10" fill="rgba(245, 158, 11, 0.2)" rx="2" />
    
    {/* Email CTA */}
    <rect x="220" y="230" width="160" height="30" fill="url(#funnelGrad4)" rx="15" />
    <text x="300" y="250" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Learn More</text>
    
    {/* Email Footer */}
    <rect x="180" y="280" width="240" height="40" fill="rgba(30, 41, 59, 0.8)" rx="4" />
    <text x="300" y="300" textAnchor="middle" fill="white" fontSize="8">Footer Information</text>
    
    {/* Flow Arrows */}
    <path d="M 120 200 L 140 200" stroke="#f59e0b" strokeWidth="3" markerEnd="url(#arrowhead)" />
    <path d="M 460 200 L 480 200" stroke="#f59e0b" strokeWidth="3" markerEnd="url(#arrowhead)" />
    
    <defs>
      <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="#f59e0b" />
      </marker>
    </defs>
    
    {/* Side Elements */}
    <circle cx="100" cy="200" r="15" fill="rgba(245, 158, 11, 0.3)" stroke="#f59e0b" strokeWidth="2" />
    <text x="100" y="206" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">IN</text>
    
    <circle cx="500" cy="200" r="15" fill="rgba(239, 68, 68, 0.3)" stroke="#ef4444" strokeWidth="2" />
    <text x="500" y="206" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">OUT</text>
    
    {/* Title */}
    <text x="300" y="30" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">Email Marketing Flow</text>
  </svg>
)
