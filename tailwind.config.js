/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        neon: {
          cyan: '#00f5ff',
          purple: '#a855f7',
        },
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        30: '7.5rem',
      },
      borderRadius: {
        '3xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'soft-dark': '0 4px 20px rgba(0, 0, 0, 0.3)',
        'glow-cyan': '0 0 20px rgba(0, 245, 255, 0.4)',
        'glow-purple': '0 0 20px rgba(168, 85, 247, 0.4)',
        'glow-cyan-lg': '0 0 40px rgba(0, 245, 255, 0.5)',
        'glow-purple-lg': '0 0 40px rgba(168, 85, 247, 0.5)',
      },
      animation: {
        'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      transitionDuration: {
        '500': '500ms',
      },
    },
  },
  plugins: [],
}
