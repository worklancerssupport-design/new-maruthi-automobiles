/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        automotive: {
          dark: '#0B0C0E',
          surface: '#141619',
          card: '#1A1D21',
          cardHover: '#21252A',
          border: '#262A30',
          borderHover: '#3A3F48',
          red: '#F04432',
          redHover: '#D63424',
          redGlow: 'rgba(240, 68, 50, 0.25)',
          text: '#F5F5F5',
          muted: '#A7ABB1',
          silver: '#D1D5DB'
        }
      },
      fontFamily: {
        heading: ['"Barlow Condensed"', 'Oswald', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'glow-red': '0 0 25px -5px rgba(240, 68, 50, 0.35)',
        'glow-red-lg': '0 0 40px -5px rgba(240, 68, 50, 0.5)',
        'card-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.7)',
      },
      backgroundImage: {
        'carbon-pattern': 'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.05) 1px, transparent 0)',
      }
    },
  },
  plugins: [],
}
