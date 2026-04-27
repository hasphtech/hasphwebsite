/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: '#2563EB',
        'blue-light': '#38BDF8',
        'blue-dim': '#1d4ed8',
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
