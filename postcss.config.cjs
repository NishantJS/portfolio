const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const tailwind="./tailwind.config.js";

module.exports = {
  plugins: {
    autoprefixer,
    tailwindcss(tailwind)
  },
};
