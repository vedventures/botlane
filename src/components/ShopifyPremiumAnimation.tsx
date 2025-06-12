'use client';

import React from 'react';

const ShopifyPremiumAnimation: React.FC = () => {
  return (
    <div className="relative w-full h-[320px] sm:h-[450px] md:h-[500px] p-6 bg-[#f5f3ff] rounded-xl shadow-2xl overflow-hidden border border-[#8b5cf6]/30">
      {/* Decorative Gradient Border Effect (Pseudo-element or extra divs) */}
      <div className="absolute inset-0 rounded-xl border-2 border-transparent pointer-events-none animate-pulse-slow"
           style={{ borderColor: 'transparent', backgroundImage: 'linear-gradient(white, white), linear-gradient(to right, #8b5cf6, #7c3aed)', backgroundOrigin: 'border-box', backgroundClip: 'content-box, border-box' }}></div>

      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(10)].map((_, i) => (
          <div key={`grid-h-${i}`} className="absolute bg-[#8b5cf6]/30 h-px w-full animate-grid-horizontal" style={{ top: `${i * 10}%`, animationDelay: `${i * 0.1}s` }}></div>
        ))}
        {[...Array(10)].map((_, i) => (
          <div key={`grid-v-${i}`} className="absolute bg-[#8b5cf6]/30 w-px h-full animate-grid-vertical" style={{ left: `${i * 10}%`, animationDelay: `${i * 0.15}s` }}></div>
        ))}
      </div>

      {/* Central Shopify-esque Element (e.g., stylized store interface) */}
      <div className="relative z-10 w-4/5 h-4/5 mx-auto mt-[5%] bg-white/80 backdrop-blur-md rounded-lg shadow-xl flex flex-col p-4 border border-[#7c3aed]/20">
        {/* Header bar */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-1.5">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] opacity-70 animate-pulse-dot"></div>
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] opacity-50 animate-pulse-dot" style={{animationDelay: '0.2s'}}></div>
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] opacity-30 animate-pulse-dot" style={{animationDelay: '0.4s'}}></div>
          </div>
          <div className="w-1/3 h-2.5 bg-[#8b5cf6]/20 rounded-full"></div>
        </div>

        {/* Mock Content Area */}
        <div className="flex-grow grid grid-cols-3 gap-2">
          {/* Product Card 1 (Animated) */}
          <div className="col-span-2 bg-[#f5f3ff]/80 rounded p-2 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <div className="w-full h-12 bg-gradient-to-br from-[#8b5cf6]/30 to-[#7c3aed]/30 rounded mb-1.5"></div>
            <div className="w-3/4 h-2 bg-[#8b5cf6]/20 rounded-full mb-1"></div>
            <div className="w-1/2 h-2 bg-[#8b5cf6]/20 rounded-full"></div>
          </div>
          {/* Sidebar Element (Animated) */}
          <div className="bg-[#f5f3ff]/80 rounded p-2 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
            <div className="w-full h-4 bg-[#7c3aed]/30 rounded-full mb-1.5"></div>
            <div className="w-full h-4 bg-[#7c3aed]/20 rounded-full mb-1.5"></div>
            <div className="w-2/3 h-4 bg-[#7c3aed]/20 rounded-full"></div>
          </div>
        </div>

        {/* Footer/Action Bar */}
        <div className="mt-3 flex justify-between items-center">
          <div className="w-1/4 h-3 bg-[#8b5cf6]/20 rounded-full animate-fade-in-up" style={{animationDelay: '0.7s'}}></div>
          <div className="w-10 h-5 bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] rounded animate-fade-in-up shadow-md" style={{animationDelay: '0.9s'}}></div>
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-[10%] left-[5%] w-8 h-8 bg-gradient-to-br from-[#8b5cf6]/50 to-[#7c3aed]/50 rounded-full opacity-60 animate-float" style={{animationDuration: '8s'}}></div>
      <div className="absolute bottom-[15%] right-[8%] w-10 h-10 bg-gradient-to-tl from-[#8b5cf6]/40 to-[#7c3aed]/40 rounded-lg opacity-50 animate-float" style={{animationDuration: '10s', animationDelay: '1s'}}></div>
      <div className="absolute top-[20%] right-[15%] w-5 h-5 border-2 border-[#8b5cf6] rounded-full opacity-70 animate-spin-slow"></div>
      <div className="absolute bottom-[25%] left-[10%] w-6 h-6 border-2 border-[#7c3aed] rounded-md opacity-60 animate-spin-slow" style={{animationDelay: '0.5s'}}></div>

      {/* CSS for Animations (could be in a global CSS file or a style tag for simplicity here) */}
      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.02); }
        }
        @keyframes pulse-dot {
          0%, 100% { transform: scale(0.9); opacity: 0.7; }
          50% { transform: scale(1.1); opacity: 1; }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes grid-horizontal {
          0% { transform: scaleX(0); opacity: 0; }
          50% { opacity: 0.3; }
          100% { transform: scaleX(1); opacity: 0; }
        }
        @keyframes grid-vertical {
          0% { transform: scaleY(0); opacity: 0; }
          50% { opacity: 0.3; }
          100% { transform: scaleY(1); opacity: 0; }
        }
        .animate-pulse-slow { animation: pulse-slow 5s infinite ease-in-out; }
        .animate-pulse-dot { animation: pulse-dot 1.5s infinite ease-in-out; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-float { animation: float 6s infinite ease-in-out; }
        .animate-spin-slow { animation: spin-slow 10s linear infinite; }
        .animate-grid-horizontal { animation: grid-horizontal 4s infinite ease-in-out; transform-origin: left; }
        .animate-grid-vertical { animation: grid-vertical 4s infinite ease-in-out; transform-origin: top; }
      `}</style>
    </div>
  );
};

export default ShopifyPremiumAnimation;
