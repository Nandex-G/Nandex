const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}" ],
  theme: {
    extend: {
      colors : {
        red : {
          650 : "rgb(197 34 34)"
        }
      }
    },
  },
  plugins: [],
}

