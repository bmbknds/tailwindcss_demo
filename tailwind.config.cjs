const plugin = require("tailwindcss/plugin");

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}
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
      textColor: {
        skin: {
          base: withOpacity("--color-text-base"),
          muted: withOpacity("--color-text-muted"),
          inverted: withOpacity("--color-text-inverted"),
        },
      },
      backgroundColor: {
        skin: {
          fill: withOpacity("--color-fill"),
          "button-accent": withOpacity("--color-button-accent"),
          "button-accent-hover": withOpacity("--color-button-accent-hover"),
          "button-muted": withOpacity("--color-button-muted"),
        },
      },
      gradientColorStops: {
        skin: {
          hue: withOpacity("--color-fill"),
        },
      },
    },
  },
  plugins: [
    require("tw-elements/dist/plugin"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
  ],
};
