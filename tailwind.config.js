/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        lime: '#b8f000',
        'lime-dim': '#8ab800',
        jet: '#0a0a0a',
        surface: '#141414',
        panel: '#1c1c1c',
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'cursive'],
        epilogue: ['Epilogue', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
