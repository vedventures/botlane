import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      colors: {
        'premium-blue': '#6366f1',
        'premium-purple': '#8b5cf6',
        'premium-silver': '#e2e8f0',
        'premium-platinum': '#f1f5f9',
        'accent-teal': '#14b8a6',
        'dark-bg': '#0a0a0a',
        'dark-surface': '#1a1a1a',
        'cool-gray': '#64748b',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'grid-move': 'grid-move 20s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { 
            textShadow: '0 0 20px rgba(99, 102, 241, 0.3)',
            filter: 'brightness(1)'
          },
          '100%': { 
            textShadow: '0 0 40px rgba(99, 102, 241, 0.5)',
            filter: 'brightness(1.1)'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'grid-move': {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(-50px, -50px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'premium-gradient': 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #e2e8f0 100%)',
        'subtle-overlay': 'radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.05) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(20, 184, 166, 0.05) 0%, transparent 50%)',
      },
    },
  },
  plugins: [],
}
export default config
