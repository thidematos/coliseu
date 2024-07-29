/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bodoni: "Bodoni Moda",
        montserrat: "Montserrat",
        garamond: "EB Garamond",
      },
      colors: {
        specialRed: "rgb(180,96,96)",
        creme: "rgb(255,244,224)",
        serralheria: "rgb(246,241,241)",
      },
      screens: {
        "3xl": "1920px",
      },
    },
  },
  plugins: [],
};
