/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      brightness: {
        25: '.25',
        175: '1.75',
      }
    },
  },
  plugins: [
    require("tw-elements/dist/plugin"),
  ],
}
