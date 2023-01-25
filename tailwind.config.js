/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#C81E1E",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
