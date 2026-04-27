/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: '#2563EB',
        'blue-light': '#38BDF8',
        'blue-dim': '#1d4ed8',
        bg: '#F8FAFF',
        surface: '#FFFFFF',
        panel: '#EEF2FF',
        text: '#0A0F1C',
        muted: '#64748B',
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'cursive'],
        epilogue: ['Epilogue', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
