/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        'xmas-red': '#942C37',
        'xmas-darkred': 'rgba(60,28,31,0.7)',
        'xmas-white': '#EFEFF1',
        'xmas-reddish': '#BB7571',
        'xmas-pink': '#BB9898',

      }

    },
  },
  plugins: [],
}