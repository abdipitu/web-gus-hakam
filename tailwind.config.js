/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      colors: {
        'primary': '#D6EFD8',
        'secondary': '#22c55e',
        'tertiary': '#4ade80',
        'fourth': '#bbf7d0',
      },
      fontFamily: {
        'karla': ['Karla', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'sora': ['Sora', 'sans-serif'],
        'exo': ['Exo+2', 'sans-serif'],
        'quicksand': ['Quicksand', 'sans-serif'],
      },
    },
  },
  plugins: [],
}