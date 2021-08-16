const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {

    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        'custom': '15rem 1fr',
      },

      colors: {
        main: {
          DEFAULT: "#FDBA74",
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
