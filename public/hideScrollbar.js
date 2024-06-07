const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addUtilities }) {
  addUtilities({
    ".no-scrollbar": {
      "::-webkit-scrollbar": { display: "none" },
      /* For Firefox */
      "-ms-overflow-style": "none",
      "scrollbar-width": "none",
    },
  });
});
