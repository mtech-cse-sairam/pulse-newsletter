/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    colors: {
      black: "#000000",
      white: "#FFFFFF",
      grey: "#EEE2DE",
      peach: "#EA906C",
      maroon: "#BD4B4B",
      navyBlue: "#2B2A4C",
      indigo: "#504099",
      violet: "#4D3C77",
      pink: "#FE7BE5",
      purple: "#974EC3",
      yellow: "#F8DE22",
      offWhite: "#EAEAEA",
      darkGray: "#B9B4C7",
      darkerGray: "#D8D9DA",
    },
    extend: {
      fontFamily: {
        "old-standard": ["Old Standard TT", "serif"],
        quicksand: ["Quicksand", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        "roboto-condensed": ["Roboto Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
};
