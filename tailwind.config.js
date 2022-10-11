const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["public/**/*.html"],
  theme: {
    extend: {
      colors: {
        primary: colors.lime,
        secondary: colors.sky,
        neutral: colors.neutral,
        gray: colors.gray,
        white: colors.white,
        black: colors.black,
        transparent: colors.transparent,
        green: colors.green,
      },
    },
    fontFamily: {
      sans: ["Inter", "system-ui"],
      display: ["Outfit", "Inter", "system-ui"],
    },
  },
  plugins: [],
};
