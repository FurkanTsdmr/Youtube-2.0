/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xs:'490px',
      sm: '576px',
      // => @media (min-width: 576px) { ... }

      md: '960px',
      // => @media (min-width: 960px) { ... }

      lg: '1440px',
      // => @media (min-width: 1440px) { ... }
      xl:"1280px",
         // => @media (min-width: 1280px) { ... }
      xxl:"1555px",
         // => @media (min-width: 1400px) { ... }
    },
    extend: {},
  },
  plugins: [],
}