/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
      },
      animation: {
        blob: "blob 7s infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        'pulse-slow': "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        'pulse-delay': "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) 2s infinite",
        'pulse-subtle': "pulseSubtle 2s ease-in-out infinite",
        'pulse-slow-delay-1': "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) 1s infinite",
        float: "float 6s ease-in-out infinite",
        'float-slow': "float 8s ease-in-out infinite",
        'float-slower': "float 10s ease-in-out infinite",
        'float-normal': "float 7s ease-in-out infinite",
        'float-delay-1': "float 6s ease-in-out 0.5s infinite",
        'float-delay-2': "float 6s ease-in-out 1s infinite",
        'float-delay-3': "float 6s ease-in-out 1.5s infinite",
        orbit: "orbit 15s linear infinite",
        'orbit-delay-1': "orbit 15s linear 5s infinite",
        'orbit-delay-2': "orbit 15s linear 10s infinite",
        'orbit-delay-3': "orbit 15s linear 15s infinite",
        blink: "blink 1s step-end infinite",
        'blink-delay-1': "blink 1s step-end 0.3s infinite",
        'blink-delay-2': "blink 1s step-end 0.6s infinite",
        'ping-slow': "ping 3s cubic-bezier(0, 0, 0.2, 1) infinite",
        'ping-slow-delay-1': "ping 3s cubic-bezier(0, 0, 0.2, 1) 1s infinite",
        'ping-slow-delay-2': "ping 3s cubic-bezier(0, 0, 0.2, 1) 2s infinite",
        'expand-line': "expandLine 2s ease-in-out infinite",
        'expand-line-delay-1': "expandLine 2s ease-in-out 0.5s infinite",
        'expand-line-delay-2': "expandLine 2s ease-in-out 1s infinite",
        'spin-slow': "spin 15s linear infinite",
        'spin-reverse-slow': "spin-reverse 20s linear infinite",
        'data-flow': "dataFlow 3s ease-in-out infinite",
        'data-flow-reverse': "dataFlow 3s ease-in-out 1.5s infinite",
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.02)' },
        },
        dataFlow: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0' },
        },
        'spin-reverse': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        expandLine: {
          '0%': { transform: 'scaleX(0)', opacity: '0.3' },
          '50%': { transform: 'scaleX(1)', opacity: '1' },
          '100%': { transform: 'scaleX(0)', opacity: '0.3' },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-20px)",
          },
        },
        orbit: {
          "0%": {
            transform: "rotate(0deg) translateX(120px) rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg) translateX(120px) rotate(-360deg)",
          },
        },
        pulse: {
          "0%, 100%": {
            opacity: 1,
          },
          "50%": {
            opacity: 0.5,
          },
        },
      },
    },
  },
  plugins: [],
}
