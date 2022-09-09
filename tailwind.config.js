/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'dark-blue': '#031c30',
        'orange': '#45a15d',
        'hover-orange': '#2a7d3e',
        'background' : '#c1c9c8'
      }
    },
  },
  plugins: [],
}
