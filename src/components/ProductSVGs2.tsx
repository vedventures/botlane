// AI Marketing Audit SVG
export const MarketingAuditImage = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full">
    <rect width="400" height="300" fill="#0f172a" rx="20" />
    
    {/* Audit Dashboard */}
    <g transform="translate(40, 40)">
      <rect x="0" y="0" width="320" height="200" fill="#1e293b" rx="12" stroke="#6366f1" strokeWidth="2" />
      
      {/* Score Circle */}
      <g transform="translate(50, 50)">
        <circle cx="50" cy="50" r="35" fill="none" stroke="#334155" strokeWidth="6" />
        <circle cx="50" cy="50" r="35" fill="none" stroke="#10b981" strokeWidth="6" 
                strokeDasharray="220" strokeDashoffset="66" transform="rotate(-90 50 50)" />
        <text x="50" y="45" textAnchor="middle" fill="#10b981" fontSize="16" fontWeight="bold">85</text>
        <text x="50" y="60" textAnchor="middle" fill="#10b981" fontSize="8">Score</text>
      </g>
      
      {/* Metrics */}
      <g transform="translate(150, 30)">
        <rect x="0" y="0" width="150" height="140" fill="#0f172a" rx="8" />
        
        {/* Metric Bars */}
        <rect x="20" y="20" width="80" height="8" fill="#334155" rx="4" />
        <rect x="20" y="20" width="60" height="8" fill="#10b981" rx="4" />
        <text x="110" y="27" fill="#10b981" fontSize="8">SEO: 75%</text>
        
        <rect x="20" y="40" width="80" height="8" fill="#334155" rx="4" />
        <rect x="20" y="40" width="70" height="8" fill="#6366f1" rx="4" />
        <text x="110" y="47" fill="#6366f1" fontSize="8">Content: 88%</text>
        
        <rect x="20" y="60" width="80" height="8" fill="#334155" rx="4" />
        <rect x="20" y="60" width="50" height="8" fill="#f59e0b" rx="4" />
        <text x="110" y="67" fill="#f59e0b" fontSize="8">Social: 63%</text>
        
        <rect x="20" y="80" width="80" height="8" fill="#334155" rx="4" />
        <rect x="20" y="80" width="75" height="8" fill="#8b5cf6" rx="4" />
        <text x="110" y="87" fill="#8b5cf6" fontSize="8">Email: 94%</text>
      </g>
    </g>
    
    {/* Recommendations */}
    <g transform="translate(60, 250)">
      <circle cx="5" cy="5" r="3" fill="#f59e0b" />
      <text x="15" y="8" fill="#f59e0b" fontSize="8">3 Critical Issues</text>
      <circle cx="120" cy="5" r="3" fill="#10b981" />
      <text x="130" y="8" fill="#10b981" fontSize="8">12 Opportunities</text>
    </g>
  </svg>
)

// Marketing Automation Setup SVG
export const AutomationSetupImage = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full">
    <rect width="400" height="300" fill="#0f172a" rx="20" />
    
    {/* Automation Workflow */}
    <g transform="translate(50, 60)">
      {/* Email Sequences */}
      <rect x="0" y="0" width="80" height="50" fill="#1e293b" rx="8" stroke="#6366f1" strokeWidth="2" />
      <text x="40" y="20" textAnchor="middle" fill="#6366f1" fontSize="8">Email</text>
      <text x="40" y="32" textAnchor="middle" fill="#6366f1" fontSize="8">Sequence</text>
      
      {/* Arrow */}
      <line x1="80" y1="25" x2="120" y2="25" stroke="#6366f1" strokeWidth="2" />
      <polygon points="120,22 126,25 120,28" fill="#6366f1" />
      
      {/* CRM Integration */}
      <rect x="130" y="0" width="80" height="50" fill="#1e293b" rx="8" stroke="#8b5cf6" strokeWidth="2" />
      <text x="170" y="20" textAnchor="middle" fill="#8b5cf6" fontSize="8">CRM</text>
      <text x="170" y="32" textAnchor="middle" fill="#8b5cf6" fontSize="8">Integration</text>
      
      {/* Arrow */}
      <line x1="210" y1="25" x2="250" y2="25" stroke="#8b5cf6" strokeWidth="2" />
      <polygon points="250,22 256,25 250,28" fill="#8b5cf6" />
      
      {/* Analytics */}
      <rect x="260" y="0" width="80" height="50" fill="#1e293b" rx="8" stroke="#10b981" strokeWidth="2" />
      <text x="300" y="20" textAnchor="middle" fill="#10b981" fontSize="8">Analytics</text>
      <text x="300" y="32" textAnchor="middle" fill="#10b981" fontSize="8">Dashboard</text>
    </g>
    
    {/* Workflow Steps */}
    <g transform="translate(60, 140)">
      <circle cx="20" cy="20" r="8" fill="#6366f1" opacity="0.3" />
      <text x="20" y="25" textAnchor="middle" fill="#6366f1" fontSize="8">1</text>
      
      <circle cx="80" cy="20" r="8" fill="#8b5cf6" opacity="0.3" />
      <text x="80" y="25" textAnchor="middle" fill="#8b5cf6" fontSize="8">2</text>
      
      <circle cx="140" cy="20" r="8" fill="#10b981" opacity="0.3" />
      <text x="140" y="25" textAnchor="middle" fill="#10b981" fontSize="8">3</text>
      
      <circle cx="200" cy="20" r="8" fill="#f59e0b" opacity="0.3" />
      <text x="200" y="25" textAnchor="middle" fill="#f59e0b" fontSize="8">4</text>
      
      {/* Connecting Lines */}
      <line x1="28" y1="20" x2="72" y2="20" stroke="#6366f1" strokeWidth="1" opacity="0.5" />
      <line x1="88" y1="20" x2="132" y2="20" stroke="#8b5cf6" strokeWidth="1" opacity="0.5" />
      <line x1="148" y1="20" x2="192" y2="20" stroke="#10b981" strokeWidth="1" opacity="0.5" />
    </g>
    
    {/* Performance Metrics */}
    <g transform="translate(60, 200)">
      <text x="0" y="0" fill="#10b981" fontSize="10">+40% Conversion</text>
      <text x="120" y="0" fill="#6366f1" fontSize="10">21-Day Setup</text>
    </g>
  </svg>
)

// Strategic Consulting SVG
export const StrategicConsultingImage = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full">
    <rect width="400" height="300" fill="#0f172a" rx="20" />
    
    {/* Meeting Interface */}
    <g transform="translate(50, 50)">
      <rect x="0" y="0" width="300" height="180" fill="#1e293b" rx="12" stroke="#6366f1" strokeWidth="2" />
      
      {/* Video Call Grid */}
      <rect x="20" y="20" width="120" height="80" fill="#0f172a" rx="8" />
      <circle cx="80" cy="50" r="15" fill="#6366f1" opacity="0.3" />
      <circle cx="80" cy="45" r="3" fill="#6366f1" />
      <path d="M70 55 Q80 65 90 55" stroke="#6366f1" strokeWidth="2" fill="none" />
      
      <rect x="160" y="20" width="120" height="80" fill="#0f172a" rx="8" />
      <circle cx="220" cy="50" r="15" fill="#8b5cf6" opacity="0.3" />
      <circle cx="220" cy="45" r="3" fill="#8b5cf6" />
      <path d="M210 55 Q220 65 230 55" stroke="#8b5cf6" strokeWidth="2" fill="none" />
      
      {/* Strategy Board */}
      <rect x="20" y="120" width="260" height="40" fill="#0f172a" rx="6" />
      
      {/* Strategy Elements */}
      <rect x="40" y="130" width="60" height="8" fill="#6366f1" opacity="0.6" rx="4" />
      <rect x="110" y="130" width="80" height="8" fill="#8b5cf6" opacity="0.6" rx="4" />
      <rect x="200" y="130" width="60" height="8" fill="#10b981" opacity="0.6" rx="4" />
      
      <rect x="40" y="145" width="40" height="8" fill="#6366f1" opacity="0.4" rx="4" />
      <rect x="90" y="145" width="100" height="8" fill="#8b5cf6" opacity="0.4" rx="4" />
      <rect x="200" y="145" width="50" height="8" fill="#10b981" opacity="0.4" rx="4" />
    </g>
    
    {/* Consultation Stats */}
    <g transform="translate(60, 240)">
      <text x="0" y="0" fill="#6366f1" fontSize="10">4 Hours 1:1</text>
      <text x="100" y="0" fill="#8b5cf6" fontSize="10">Custom Strategy</text>
      <text x="220" y="0" fill="#10b981" fontSize="10">3-Month Support</text>
    </g>
  </svg>
)

// Complete Marketing Stack SVG
export const CompleteStackImage = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full">
    <rect width="400" height="300" fill="#0f172a" rx="20" />
    
    {/* Stack Layers */}
    <g transform="translate(50, 50)">
      {/* Layer 1 - Analytics */}
      <rect x="0" y="0" width="300" height="35" fill="#1e293b" rx="8" stroke="#10b981" strokeWidth="2" />
      <text x="150" y="23" textAnchor="middle" fill="#10b981" fontSize="12">Analytics & Reporting</text>
      
      {/* Layer 2 - Automation */}
      <rect x="0" y="45" width="300" height="35" fill="#1e293b" rx="8" stroke="#6366f1" strokeWidth="2" />
      <text x="150" y="68" textAnchor="middle" fill="#6366f1" fontSize="12">Marketing Automation</text>
      
      {/* Layer 3 - Content */}
      <rect x="0" y="90" width="300" height="35" fill="#1e293b" rx="8" stroke="#8b5cf6" strokeWidth="2" />
      <text x="150" y="113" textAnchor="middle" fill="#8b5cf6" fontSize="12">Content Management</text>
      
      {/* Layer 4 - CRM */}
      <rect x="0" y="135" width="300" height="35" fill="#1e293b" rx="8" stroke="#f59e0b" strokeWidth="2" />
      <text x="150" y="158" textAnchor="middle" fill="#f59e0b" fontSize="12">CRM Integration</text>
    </g>
    
    {/* Stack Benefits */}
    <g transform="translate(60, 220)">
      <text x="0" y="0" fill="#10b981" fontSize="10">Complete Solution</text>
      <text x="120" y="0" fill="#6366f1" fontSize="10">All-in-One</text>
      <text x="200" y="0" fill="#8b5cf6" fontSize="10">Ready to Deploy</text>
    </g>
  </svg>
)

// Marketing Funnel Templates SVG (original)
export const MarketingFunnelImage1 = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full">
    <rect width="400" height="300" fill="#0f172a" rx="20" />
    
    {/* Funnel Shape */}
    <g transform="translate(100, 50)">
      {/* Top of funnel */}
      <polygon points="0,0 200,0 180,40 20,40" fill="#6366f1" opacity="0.8" />
      <text x="100" y="25" textAnchor="middle" fill="white" fontSize="12">Awareness: 10,000</text>
      
      {/* Middle of funnel */}
      <polygon points="20,50 180,50 160,90 40,90" fill="#8b5cf6" opacity="0.8" />
      <text x="100" y="75" textAnchor="middle" fill="white" fontSize="12">Interest: 2,500</text>
      
      {/* Bottom of funnel */}
      <polygon points="40,100 160,100 140,140 60,140" fill="#10b981" opacity="0.8" />
      <text x="100" y="125" textAnchor="middle" fill="white" fontSize="12">Conversion: 500</text>
      
      {/* Final conversion */}
      <polygon points="60,150 140,150 130,180 70,180" fill="#f59e0b" opacity="0.8" />
      <text x="100" y="170" textAnchor="middle" fill="white" fontSize="10">Purchase: 100</text>
    </g>
    
    {/* Conversion Rate */}
    <g transform="translate(320, 80)">
      <text x="0" y="0" fill="#10b981" fontSize="10">1% CVR</text>
      <text x="0" y="15" fill="#6366f1" fontSize="8">$50 AOV</text>
    </g>
  </svg>
)

// Additional funnel variations for gallery
export const MarketingFunnelImage2 = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full">
    <rect width="400" height="300" fill="#0f172a" rx="20" />
    
    {/* Email Funnel */}
    <g transform="translate(50, 50)">
      <rect x="0" y="0" width="300" height="200" fill="#1e293b" rx="12" stroke="#6366f1" strokeWidth="2" />
      
      {/* Email sequence */}
      <rect x="20" y="20" width="260" height="30" fill="#6366f1" opacity="0.2" rx="6" />
      <text x="150" y="40" textAnchor="middle" fill="#6366f1" fontSize="12">Welcome Email</text>
      
      <rect x="30" y="60" width="240" height="30" fill="#8b5cf6" opacity="0.2" rx="6" />
      <text x="150" y="80" textAnchor="middle" fill="#8b5cf6" fontSize="12">Value Email</text>
      
      <rect x="40" y="100" width="220" height="30" fill="#10b981" opacity="0.2" rx="6" />
      <text x="150" y="120" textAnchor="middle" fill="#10b981" fontSize="12">Sales Email</text>
      
      <rect x="50" y="140" width="200" height="30" fill="#f59e0b" opacity="0.2" rx="6" />
      <text x="150" y="160" textAnchor="middle" fill="#f59e0b" fontSize="12">Follow-up</text>
    </g>
  </svg>
)

export const MarketingFunnelImage3 = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full">
    <rect width="400" height="300" fill="#0f172a" rx="20" />
    
    {/* Social Media Funnel */}
    <g transform="translate(50, 50)">
      <rect x="0" y="0" width="300" height="200" fill="#1e293b" rx="12" stroke="#8b5cf6" strokeWidth="2" />
      
      {/* Social platforms */}
      <g transform="translate(50, 30)">
        <rect x="0" y="0" width="60" height="40" fill="#E4405F" opacity="0.3" rx="6" />
        <text x="30" y="25" textAnchor="middle" fill="#E4405F" fontSize="8">Instagram</text>
        
        <rect x="80" y="0" width="60" height="40" fill="#1877F2" opacity="0.3" rx="6" />
        <text x="110" y="25" textAnchor="middle" fill="#1877F2" fontSize="8">Facebook</text>
        
        <rect x="160" y="0" width="60" height="40" fill="#1DA1F2" opacity="0.3" rx="6" />
        <text x="190" y="25" textAnchor="middle" fill="#1DA1F2" fontSize="8">Twitter</text>
      </g>
      
      {/* Funnel flow */}
      <g transform="translate(75, 90)">
        <rect x="0" y="0" width="150" height="25" fill="#8b5cf6" opacity="0.6" rx="4" />
        <text x="75" y="17" textAnchor="middle" fill="white" fontSize="10">Landing Page</text>
        
        <rect x="25" y="35" width="100" height="25" fill="#6366f1" opacity="0.6" rx="4" />
        <text x="75" y="52" textAnchor="middle" fill="white" fontSize="10">Lead Magnet</text>
        
        <rect x="50" y="70" width="50" height="25" fill="#10b981" opacity="0.6" rx="4" />
        <text x="75" y="87" textAnchor="middle" fill="white" fontSize="10">Sale</text>
      </g>
    </g>
  </svg>
)

export const MarketingFunnelImage4 = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full">
    <rect width="400" height="300" fill="#0f172a" rx="20" />
    
    {/* Webinar Funnel */}
    <g transform="translate(50, 50)">
      <rect x="0" y="0" width="300" height="200" fill="#1e293b" rx="12" stroke="#10b981" strokeWidth="2" />
      
      {/* Webinar stages */}
      <g transform="translate(50, 30)">
        <rect x="0" y="0" width="200" height="30" fill="#10b981" opacity="0.3" rx="6" />
        <text x="100" y="20" textAnchor="middle" fill="#10b981" fontSize="12">Webinar Registration</text>
        
        <rect x="25" y="40" width="150" height="30" fill="#6366f1" opacity="0.3" rx="6" />
        <text x="100" y="60" textAnchor="middle" fill="#6366f1" fontSize="12">Webinar Attendance</text>
        
        <rect x="50" y="80" width="100" height="30" fill="#8b5cf6" opacity="0.3" rx="6" />
        <text x="100" y="100" textAnchor="middle" fill="#8b5cf6" fontSize="12">Pitch Presentation</text>
        
        <rect x="75" y="120" width="50" height="30" fill="#f59e0b" opacity="0.3" rx="6" />
        <text x="100" y="140" textAnchor="middle" fill="#f59e0b" fontSize="12">Purchase</text>
      </g>
    </g>
  </svg>
)
