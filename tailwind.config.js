/** @type {import('tailwindcss').Config} */

const hideScrollbar = require("./public/utils/hideScrollbar");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        brand: "#21328A",
        complimentary: "#8A7921",
        primary: "#385CA9",
        primaryContainer: "#D9E2FF",
        error: "#BA1A1A",
        errorContainer: "#FFDAD6",
        onPrimary: "#FFFFFF",
        onPrimaryContainer: "#001945",
        surface: "#FEFBFF",
        onSurface: "#001849",
        outline: "#757780",
        darkGrey: "#333333",
        darkBlue: "#003366",
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        slab: ["Roboto Slab", "serif"],
      },
    },
  },
  plugins: [hideScrollbar],
};
