/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#1E2F97',
        'primary-gold': '#E6B800',
        'primary-gold-dark': '#CC9A00',
        'primary-gold-light': '#FFD700',
        'neutral-white': '#FFFFFF',
        'neutral-gray': '#B5B5B5',
        'dark-blue': '#0d1b2a',
        'light-blue': '#1d4ed8',
        'custom-yellow': '#faae1c', // Gold-like yellow
        'custom-maroon': '#810e13', // Maroon
        'custom-darkgreen': '#003d60', // Maroon
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideInUp: {
          '0%': {
            opacity: 0,
            transform: 'translateY(100%)'
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)'
          },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out',
        slideInUp: 'slideInUp 1s ease-out',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
