/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    colors: {
      sixty: '#FFF4E0',
      thirty: '#FFBF9B',
      ten: '#B46060',
      contrast: '#4D4D4D',
      white: '#fff',
      cta: '#B46060',
    },
    fontFamily: {
      garamond: 'EB Garamond',
      bodoni: 'Bodoni Moda',
      montserrat: 'Montserrat',
    },
    backgroundImage: {
      inicial: "url('../assets/inicial.jpg')",
    },
    extend: {},
  },
  plugins: [],
};
