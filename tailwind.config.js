/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        geist: ['Geist', 'system-ui', 'sans-serif'],
        'geist-mono': ['Geist Mono', 'monospace'],
        mona: ['Mona Sans', 'system-ui', 'sans-serif'],
        'ibm-plex': ['IBM Plex Sans', 'system-ui', 'sans-serif'],
        manrope: ['Manrope', 'system-ui', 'sans-serif'],
      },
      colors: {
        sand: {
          50: '#fbf7f0',
          100: '#f5eddc',
          200: '#e8d9b8',
          300: '#d9bf86',
          400: '#c7a65f',
          500: '#b58e45',
          600: '#906d34',
          700: '#70522a',
          800: '#4b3820',
          900: '#2b2115',
        },
        nile: {
          50: '#eef7fb',
          100: '#d5ebf7',
          200: '#a9d6ee',
          300: '#79bee2',
          400: '#4ea6d5',
          500: '#2a8cc3',
          600: '#1c6fa2',
          700: '#16597f',
          800: '#124663',
          900: '#0e3449',
        },
        papyrus: {
          50: '#fcfaf5',
          100: '#f7f1e3',
          200: '#efe1c2',
          300: '#e4c893',
          400: '#d7b06c',
          500: '#c7994d',
          600: '#a1783c',
          700: '#7a5a2e',
          800: '#533e22',
          900: '#2f2315',
        },
        gold: {
          400: '#f3c766',
          500: '#eab308',
          600: '#ca8a04',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-out': 'fadeOut 0.5s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'bounce-in': 'bounceIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        bounceIn: {
          '0%': { opacity: '0', transform: 'scale(0.3)' },
          '50%': { transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
