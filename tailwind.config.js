/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        white: '#fff',
        body: '#fff',
        bg:'#1AAB7B',
        black: '#101010',
        gray: '#636F87',
        'dark-blue': '#2B3844',
        'body-dark': '#202C36',
      },
    },
  },
  plugins: [],
}