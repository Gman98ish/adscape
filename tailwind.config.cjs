/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        chakra: ['Chakra Petch', 'sans-serif'],
        anton: ['Anton', 'sans-serif']
      }
    },
  },
  plugins: [],
}
