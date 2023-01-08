/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {},
    },
  },
  plugins: [require("@tailwindcss/forms"), require('prettier-plugin-tailwindcss')],
};
