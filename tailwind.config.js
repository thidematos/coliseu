/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontFamily: {
      garamond: 'EB Garamond',
      bodoni: 'Bodoni Moda',
      montserrat: 'Montserrat',
    },
    extend: {
      colors: {
        sixtyAlu: '#F6F1F1',
        sixty: '#FFF4E0',
        thirthyAlu: '#AFD3E2',
        thirty: '#FFBF9B',
        tenAlu: '#19A7CE',
        ten: '#B46060',
        contrastAlu: '#146C94',
        contrast: '#4D4D4D',
        white: '#fff',
        cta: '#B46060',
      },
    },
  },
  plugins: [],
};
