// AI Marketing Prompts SVG
export const AIPromptsImage = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full">
    <defs>
      <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6366f1" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
    
    <rect width="400" height="300" fill="#0f172a" rx="20" />
    
    {/* AI Brain */}
    <g transform="translate(50, 50)">
      <circle cx="150" cy="100" r="60" fill="none" stroke="url(#aiGradient)" strokeWidth="2" opacity="0.5" />
      <circle cx="150" cy="100" r="30" fill="url(#aiGradient)" opacity="0.2" />
      
      {/* Neural Nodes */}
      <circle cx="120" cy="80" r="3" fill="#6366f1" />
      <circle cx="180" cy="80" r="3" fill="#6366f1" />
      <circle cx="150" cy="60" r="3" fill="#8b5cf6" />
      <circle cx="130" cy="120" r="3" fill="#6366f1" />
      <circle cx="170" cy="120" r="3" fill="#6366f1" />
      
      {/* Connections */}
      <line x1="120" y1="80" x2="150" y2="60" stroke="#6366f1" strokeWidth="1" opacity="0.6" />
      <line x1="180" y1="80" x2="150" y2="60" stroke="#6366f1" strokeWidth="1" opacity="0.6" />
    </g>
    
    {/* Prompt Lines */}
    <g transform="translate(320, 60)">
      <rect x="0" y="0" width="60" height="3" fill="#6366f1" opacity="0.8" rx="1.5" />
      <rect x="0" y="10" width="45" height="3" fill="#8b5cf6" opacity="0.6" rx="1.5" />
      <rect x="0" y="20" width="55" height="3" fill="#6366f1" opacity="0.4" rx="1.5" />
    </g>
  </svg>
)

// Social Media Calendar SVG
export const SocialCalendarImage = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full">
    <rect width="400" height="300" fill="#0f172a" rx="20" />
    
    {/* Calendar */}
    <g transform="translate(50, 50)">
      <rect x="0" y="0" width="300" height="180" fill="#1e293b" rx="12" stroke="#6366f1" strokeWidth="2" />
      <rect x="0" y="0" width="300" height="30" fill="#6366f1" rx="12" />
      <text x="150" y="20" textAnchor="middle" fill="white" fontSize="12">Content Calendar</text>
      
      {/* Calendar Grid */}
      {Array.from({ length: 21 }, (_, i) => {
        const row = Math.floor(i / 7)
        const col = i % 7
        const x = col * 40 + 10
        const y = row * 30 + 40
        const isActive = i % 3 === 0
        
        return (
          <rect 
            key={i}
            x={x} y={y} width="35" height="25" 
            fill={isActive ? "#6366f1" : "#334155"} 
            opacity={isActive ? "0.6" : "0.2"}
            rx="3" 
          />
        )
      })}
    </g>
    
    {/* Social Icons */}
    <g transform="translate(60, 240)">
      <rect x="0" y="0" width="15" height="15" fill="#E4405F" rx="4" />
      <rect x="20" y="0" width="15" height="15" fill="#1877F2" rx="4" />
      <rect x="40" y="0" width="15" height="15" fill="#0A66C2" rx="4" />
      <rect x="60" y="0" width="15" height="15" fill="#1DA1F2" rx="4" />
    </g>
  </svg>
)

// AI Marketing Course SVG
export const AICourseImage = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full">
    <rect width="400" height="300" fill="#0f172a" rx="20" />
    
    {/* Video Player */}
    <g transform="translate(50, 50)">
      <rect x="0" y="0" width="300" height="160" fill="#1e293b" rx="12" stroke="#6366f1" strokeWidth="2" />
      
      {/* Play Button */}
      <circle cx="150" cy="80" r="25" fill="#6366f1" opacity="0.8" />
      <polygon points="140,70 140,90 165,80" fill="white" />
      
      {/* Progress Bar */}
      <rect x="20" y="140" width="260" height="3" fill="#334155" rx="1.5" />
      <rect x="20" y="140" width="100" height="3" fill="#6366f1" rx="1.5" />
    </g>
    
    {/* Course Modules */}
    <g transform="translate(60, 220)">
      <rect x="0" y="0" width="70" height="25" fill="#6366f1" opacity="0.2" rx="4" />
      <text x="35" y="16" textAnchor="middle" fill="#6366f1" fontSize="8">Week 1</text>
      
      <rect x="80" y="0" width="70" height="25" fill="#8b5cf6" opacity="0.2" rx="4" />
      <text x="115" y="16" textAnchor="middle" fill="#8b5cf6" fontSize="8">Week 2</text>
      
      <rect x="160" y="0" width="70" height="25" fill="#6366f1" opacity="0.2" rx="4" />
      <text x="195" y="16" textAnchor="middle" fill="#6366f1" fontSize="8">Week 3</text>
    </g>
  </svg>
)

// Growth Hacking Bootcamp SVG
export const GrowthBootcampImage = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full">
    <rect width="400" height="300" fill="#0f172a" rx="20" />
    
    {/* Growth Chart */}
    <g transform="translate(50, 50)">
      <rect x="0" y="0" width="300" height="180" fill="#1e293b" rx="12" stroke="#10b981" strokeWidth="2" />
      
      {/* Chart Line */}
      <polyline 
        points="30,150 80,130 130,100 180,70 230,40 280,20" 
        fill="none" 
        stroke="#10b981" 
        strokeWidth="3"
      />
      
      {/* Data Points */}
      <circle cx="30" cy="150" r="3" fill="#10b981" />
      <circle cx="130" cy="100" r="3" fill="#6366f1" />
      <circle cx="230" cy="40" r="3" fill="#8b5cf6" />
      
      {/* Growth Arrow */}
      <path d="M260 50 L280 20 L275 30 M280 20 L270 25" stroke="#10b981" strokeWidth="2" fill="none" />
    </g>
    
    {/* Metrics */}
    <g transform="translate(60, 240)">
      <text x="0" y="0" fill="#10b981" fontSize="12">+300% Growth</text>
      <text x="120" y="0" fill="#6366f1" fontSize="12">30 Days</text>
    </g>
  </svg>
)

// Marketing ROI Calculator SVG
export const ROICalculatorImage = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full">
    <rect width="400" height="300" fill="#0f172a" rx="20" />
    
    {/* Calculator */}
    <g transform="translate(50, 40)">
      <rect x="0" y="0" width="300" height="200" fill="#1e293b" rx="12" stroke="#6366f1" strokeWidth="2" />
      
      {/* Display */}
      <rect x="20" y="20" width="260" height="50" fill="#0f172a" rx="6" />
      <text x="40" y="40" fill="#10b981" fontSize="14">ROI: 247%</text>
      <text x="40" y="55" fill="#6366f1" fontSize="10">Revenue: $124,500</text>
      
      {/* Calculator Grid */}
      {Array.from({ length: 12 }, (_, i) => {
        const row = Math.floor(i / 4)
        const col = i % 4
        const x = col * 60 + 30
        const y = row * 35 + 90
        
        return (
          <rect 
            key={i}
            x={x} y={y} width="50" height="25" 
            fill="#334155" 
            rx="4"
            stroke="#6366f1"
            strokeWidth="1"
            opacity="0.6"
          />
        )
      })}
    </g>
    
    {/* Charts */}
    <g transform="translate(320, 60)">
      <rect x="0" y="0" width="3" height="25" fill="#10b981" />
      <rect x="6" y="10" width="3" height="15" fill="#6366f1" />
      <rect x="12" y="5" width="3" height="20" fill="#8b5cf6" />
    </g>
  </svg>
)

// Conversion Toolkit SVG
export const ConversionToolkitImage = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full">
    <rect width="400" height="300" fill="#0f172a" rx="20" />
    
    {/* Dashboard */}
    <g transform="translate(40, 40)">
      <rect x="0" y="0" width="320" height="200" fill="#1e293b" rx="12" stroke="#f59e0b" strokeWidth="2" />
      
      {/* Heatmap */}
      <g transform="translate(20, 20)">
        {Array.from({ length: 24 }, (_, i) => {
          const row = Math.floor(i / 6)
          const col = i % 6
          const x = col * 12
          const y = row * 12
          const intensity = Math.random()
          
          return (
            <rect 
              key={i}
              x={x} y={y} width="10" height="10" 
              fill={intensity > 0.6 ? "#f59e0b" : "#6366f1"}
              opacity={intensity}
              rx="1"
            />
          )
        })}
      </g>
      
      {/* A/B Test */}
      <g transform="translate(150, 30)">
        <rect x="0" y="0" width="140" height="60" fill="#0f172a" rx="6" />
        <text x="70" y="15" textAnchor="middle" fill="#f59e0b" fontSize="10">A/B Results</text>
        <rect x="20" y="25" width="40" height="15" fill="#10b981" opacity="0.3" rx="3" />
        <text x="40" y="35" textAnchor="middle" fill="#10b981" fontSize="8">A: 12%</text>
        <rect x="70" y="25" width="40" height="15" fill="#6366f1" opacity="0.3" rx="3" />
        <text x="90" y="35" textAnchor="middle" fill="#6366f1" fontSize="8">B: 18%</text>
      </g>
      
      {/* Conversion Funnel */}
      <g transform="translate(20, 120)">
        <polygon points="0,0 80,0 70,15 10,15" fill="#6366f1" opacity="0.6" />
        <polygon points="10,20 70,20 60,35 20,35" fill="#8b5cf6" opacity="0.6" />
        <polygon points="20,40 60,40 55,55 25,55" fill="#10b981" opacity="0.6" />
      </g>
    </g>
  </svg>
)

// Marketing Automation Guide SVG
export const AutomationGuideImage = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full">
    <rect width="400" height="300" fill="#0f172a" rx="20" />
    
    {/* Book */}
    <g transform="translate(80, 40)">
      <rect x="0" y="0" width="240" height="160" fill="#1e293b" rx="12" stroke="#6366f1" strokeWidth="2" />
      <rect x="0" y="0" width="15" height="160" fill="#6366f1" opacity="0.8" rx="12" />
      
      {/* Pages */}
      <rect x="25" y="15" width="190" height="130" fill="#0f172a" rx="6" />
      
      {/* Content Lines */}
      <rect x="40" y="30" width="140" height="2" fill="#6366f1" opacity="0.8" rx="1" />
      <rect x="40" y="40" width="110" height="2" fill="#8b5cf6" opacity="0.6" rx="1" />
      <rect x="40" y="50" width="130" height="2" fill="#6366f1" opacity="0.4" rx="1" />
      <rect x="40" y="70" width="120" height="2" fill="#6366f1" opacity="0.8" rx="1" />
      <rect x="40" y="80" width="100" height="2" fill="#8b5cf6" opacity="0.6" rx="1" />
      <rect x="40" y="100" width="135" height="2" fill="#6366f1" opacity="0.8" rx="1" />
    </g>
    
    {/* Automation Flow */}
    <g transform="translate(60, 220)">
      <circle cx="15" cy="15" r="6" fill="#6366f1" opacity="0.3" />
      <line x1="21" y1="15" x2="39" y2="15" stroke="#6366f1" strokeWidth="2" />
      <polygon points="39,12 45,15 39,18" fill="#6366f1" />
      <circle cx="55" cy="15" r="6" fill="#8b5cf6" opacity="0.3" />
      <line x1="61" y1="15" x2="79" y2="15" stroke="#8b5cf6" strokeWidth="2" />
      <polygon points="79,12 85,15 79,18" fill="#8b5cf6" />
      <circle cx="95" cy="15" r="6" fill="#10b981" opacity="0.3" />
    </g>
  </svg>
)

// AI Content Playbook SVG
export const ContentPlaybookImage = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full">
    <rect width="400" height="300" fill="#0f172a" rx="20" />
    
    {/* Content Interface */}
    <g transform="translate(50, 40)">
      <rect x="0" y="0" width="300" height="180" fill="#1e293b" rx="12" stroke="#8b5cf6" strokeWidth="2" />
      
      {/* Writing Area */}
      <rect x="20" y="20" width="260" height="80" fill="#0f172a" rx="6" />
      
      {/* Typing Animation */}
      <g transform="translate(40, 40)">
        <circle cx="0" cy="0" r="2" fill="#8b5cf6">
          <animate attributeName="opacity" values="0.8;0.3;0.8" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="10" cy="0" r="2" fill="#6366f1">
          <animate attributeName="opacity" values="0.6;0.8;0.6" dur="1.5s" repeatCount="indefinite" begin="0.5s" />
        </circle>
        <circle cx="20" cy="0" r="2" fill="#8b5cf6">
          <animate attributeName="opacity" values="0.4;0.6;0.4" dur="1.5s" repeatCount="indefinite" begin="1s" />
        </circle>
      </g>
      
      {/* Content Lines */}
      <g transform="translate(40, 60)">
        <rect x="0" y="0" width="160" height="2" fill="#8b5cf6" opacity="0.6" rx="1" />
        <rect x="0" y="8" width="140" height="2" fill="#6366f1" opacity="0.4" rx="1" />
        <rect x="0" y="16" width="180" height="2" fill="#8b5cf6" opacity="0.8" rx="1" />
      </g>
    </g>
    
    {/* AI Assistant */}
    <g transform="translate(320, 60)">
      <circle cx="20" cy="20" r="12" fill="#8b5cf6" opacity="0.3" />
      <circle cx="20" cy="20" r="6" fill="#8b5cf6" opacity="0.6" />
      <circle cx="17" cy="17" r="1" fill="#8b5cf6" />
      <circle cx="23" cy="17" r="1" fill="#8b5cf6" />
    </g>
  </svg>
)
