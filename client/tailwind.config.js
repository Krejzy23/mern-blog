/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        stroke: {
          '1': '#26242C'
        },
        n:{
          6: "#252134"
        }
      }
    },
  },
  spacing: {
    0.25: "0.0625rem",
    7.5: "1.875rem",
    15: "3.75rem",
  },
  plugins: [
    require("flowbite/plugin"), require('tailwind-scrollbar')
  ],
}