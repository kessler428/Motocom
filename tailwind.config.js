/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'dark-blue': '#031c30',
        'orange': '#fc6747',
        'hover-orange': '#fa8d3b',
        'background' : '#c1c9c8'
      }
    },
  },
  plugins: [],
}
