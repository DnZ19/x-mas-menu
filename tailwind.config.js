/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    fontFamily: {
      'xmas': 'Dancing Script, cursive',
      'xmas_jost': 'Jost, sans-serif',
    },

    extend: {

      colors: {
        'xmas-red': '#942C37',
        // 'xmas-darkred': 'rgba(60,28,31,0.7)',
        'xmas-lightGrey': '#DCE1E3',
        'xmas-white': '#EFEFF1',
        'xmas-reddish': '#BB7571',
        'xmas-pink': '#BB9898',
        'xmas-lilac': '#f6ebf4',
        'xmas-greyWater': '#5C5F58',
        'xmas-blueMinded': '#004E7C',

      }

    },
  },
  plugins: [],
}