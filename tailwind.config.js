/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      'white': '#FFF',
      'purple': '#5E54A4',
      'milk-white':'#F2F2F2',
      'light-gray': '#DEDEDE',
      'dark-gray': '#3D3B48',
      'green': '#38CC8B',
      'red':'#FF7979',
      'light-purple': '#BAB7D4',
    },
    extend: {
      fontFamily:{
        'poppins':['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}