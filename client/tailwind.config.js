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
          1: '#FC2207',
          2: '#39FF14'
        },
        n:{
          3: "#ADA8C3",
          6: "#252134"
        }
      },
      letterSpacing: {
        tagline: ".15em",
      },
      borderWidth: {
        '1': '1px',
      },
      fontFamily: {
        'poppins': ['Poppins','sans-serif']
      }
    },
  },
  spacing: {
    0.25: "0.0625rem",
    7.5: "1.875rem",
    15: "3.75rem",
  },
  plugins: [
    require("flowbite/plugin"), 
    require('tailwind-scrollbar'),
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-transparent': {
          color: 'transparent',
        },
        '.text-stroker-1': {
          '-webkit-text-stroke-width': '1px',
        },
        '.text-stroker-2': {
          '-webkit-text-stroke-width': '2px',
        },
        '.text-stroke-black': {
          '-webkit-text-stroke-color': '#000',
        },
        '.text-stroke-custom': {
          '-webkit-text-stroke-color': '#FC2207',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}