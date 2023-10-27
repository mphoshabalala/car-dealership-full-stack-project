/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Bebas: ["Bebas Neue", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        heroImage: "url('/src/images/heroImage.svg')",
        dealerImage: "url('/src/images/dealerImg.svg')",
        carImg: "url('/src/images/moreCars.svg')",
      },
      boxShadow: {
        small: "2px 2px 5px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
