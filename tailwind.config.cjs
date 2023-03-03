const plugin = require("tailwindcss/plugin");
const { createThemes } = require("tw-colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ], // Add source that tailwind will read through to generate classname
  darkMode: "class", //Toggle dark mode by adding class "dark" to root
  safelist: [
    {
      pattern: /bg-*-*/, // Always generate css to class name that matched pattern
    },
  ],
  theme: {
    //*note: this will revome all the default colors class and only generate primary color => if we still want to use the default, add to extend
    // colors: {
    //   nashtech: "#e31329",
    // },

    // *note this will reconfig the default fontSize to responsive screen

    //   fontSize: {
    //   '2xl': ['1.5rem', {
    //     lineHeight: '2rem',
    //     letterSpacing: '-0.01em',
    //     fontWeight: '500',
    //   }],
    //   '3xl': ['1.875rem', {
    //     lineHeight: '2.25rem',
    //     letterSpacing: '-0.02em',
    //     fontWeight: '700',
    //   }],
    // },

    //*Note: will disable all responsive break point
    // screens: {
    //   "2k": "2560px",
    // },
    extend: {
      //
      colors: {
        nashtech: "#e31329",
      },
      spacing: {
        nashtech: "199px",
      },
      screens: {
        "2k": "2560px",
      },
    },
  },
  plugins: [
    require("tw-elements/dist/plugin"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    createThemes({
      light: {
        primary: "steelblue",
        secondary: "darkblue",
        brand: "#F3F3F3",
      },
      dark: {
        primary: "turquoise",
        secondary: "tomato",
        brand: "#4A4A4A",
      },
      forest: {
        primary: "#2A9D8F",
        secondary: "#E9C46A",
        brand: "#264653",
      },
    }),
  ],
};
