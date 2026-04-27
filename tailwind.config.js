/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: '#2563EB',
        'blue-light': '#38BDF8',
        'blue-dark': '#0D1B3E',
        'blue-mid': '#1E3A8A',
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'cursive'],
        epilogue: ['Epilogue', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
