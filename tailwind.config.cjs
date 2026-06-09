const path = require('path');

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./app/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#154476', light: '#2cbcee' },
        secondary: { DEFAULT: '#e56026', light: '#fdb517' },
        surface: {
          0: '#ffffff', 1: '#f8fafc', 2: '#f1f5f9', 3: '#e2e8f0',
          dark0: '#0f172a', dark1: '#1e293b', dark2: '#334155',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Inter', 'sans-serif'],
        conthrax: ['"Space Grotesk"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
