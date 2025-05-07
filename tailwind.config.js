/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E88E5',
        secondary: '#1F2937',
        accent: '#FF7E1D',
        light: '#F8FAFC',
        dark: '#111827',
        success: '#22C55E',
        'text-color': '#374151',
        'cta-hover': '#F97316',
        'highlight': '#FEF3C7'
      },
      boxShadow: {
        'card': '0 5px 15px rgba(0,0,0,0.1)',
        'hover': '0 15px 30px rgba(0,0,0,0.15)',
        'cta': '0 10px 25px rgba(255, 126, 29, 0.3)',
      },
      borderRadius: {
        'default': '8px',
      },
      transitionDuration: {
        '300': '300ms',
      },
      fontFamily: {
        sans: ['Helvetica Neue', 'Arial', 'sans-serif'],
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '128': '32rem',
      }
    }
  },
  plugins: [],
} 