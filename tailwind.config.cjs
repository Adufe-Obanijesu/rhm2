/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      red: colors.red,
      orange: colors.orange,
      blue: colors.blue,
      green: colors.green,
      purple: colors.purple,
      cyan: colors.cyan,
      gray: colors.gray,
      "black": "#000000",
      'white': '#ffffff',
      'primary': "#eb4e17",
      'transparentPrimary': "rgba(235, 78, 23, .5)",
      'secondary': "#596664",
      'lightSecondary': "rgba(89,102,100, .05)"
    },
    fontFamily: {
      'opensans': ['"Open Sans"', 'Georgia']
    },
    extend: {},
  },
  plugins: [],
}