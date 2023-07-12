/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    colors: {
      sixtyAlu: '#B7C4CF',
      sixty: '#FFF4E0',
      thirthyAlu: '#EEE3CB',
      thirty: '#FFBF9B',
      tenAlu: '#D7C0AE',
      ten: '#B46060',
      contrastAlu: '#967E76',
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
