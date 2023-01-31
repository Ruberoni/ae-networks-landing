/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto Condensed", ...defaultTheme.fontFamily.sans],
        droid: ["Droid Serif", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
