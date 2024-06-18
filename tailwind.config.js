/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        dark : "hsl(240, 38%, 20%)",
        grayishBlue : "hsl(240, 18%, 77%)"
      }
    },
  },
  plugins: [],
}

