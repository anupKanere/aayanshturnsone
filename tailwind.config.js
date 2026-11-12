/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Rich Imperial Burgundy & Wine Palette (replacing blue)
        'theme-darkest': '#140508', // Deepest Japanese lacquer black-wine
        'theme-dark': '#1E0A0F',    // Deep imperial burgundy
        'theme-main': '#2A0E15',    // Rich royal wine
        'theme-light': '#3C1520',   // Velvety burgundy
        'theme-surface': '#33111A', // Elevated card surface

        gold: {
          DEFAULT: '#D4AF37', // Authentic Champagne Royal Gold
          light: '#ECD599',   // Radiant light gold
          dark: '#B08B23',    // Antique deep gold
          foil: '#F7E7B4',    // Gold leaf highlight
        },
        ivory: {
          DEFAULT: '#FAF5EC', // Pure washi silk ivory
          warm: '#F4EBDC',    // Antique parchment
          muted: '#E6D9C5',   // Muted cream
        },
        torii: {
          DEFAULT: '#C83737', // Traditional Japanese Torii vermilion red
          dark: '#9A2424',
          glow: '#E24C4C',
        },
        sakura: {
          DEFAULT: '#EAA8B6', // Delicate Japanese cherry blossom
          light: '#F4CDD5',
          deep: '#D68595',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        script: ['Great Vibes', 'cursive'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slower': 'float 12s ease-in-out infinite',
        'petal-fall': 'petalFall 10s linear infinite',
        'sparkle': 'sparkle 2.5s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'lantern-sway': 'lanternSway 4s ease-in-out infinite',
        'crane-fly': 'craneFly 14s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        petalFall: {
          '0%': { transform: 'translateY(-10%) translateX(0) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '0.9' },
          '90%': { opacity: '0.9' },
          '100%': { transform: 'translateY(110vh) translateX(120px) rotate(720deg)', opacity: '0' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 25px rgba(212, 175, 55, 0.25)' },
          '50%': { boxShadow: '0 0 50px rgba(212, 175, 55, 0.55)' },
        },
        lanternSway: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        craneFly: {
          '0%': { transform: 'translateX(-20px) translateY(0) rotate(-4deg)' },
          '50%': { transform: 'translateX(25px) translateY(-20px) rotate(4deg)' },
          '100%': { transform: 'translateX(-20px) translateY(0) rotate(-4deg)' },
        },
      },
    },
  },
  plugins: [],
}
