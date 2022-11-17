/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tc-green': '#4EE1A0',
        'tc-black': '#151515',
        'tc-dark-grey': '#242424',
        'tc-grey': '#D9D9D9',
      },
      fontFamily: {
        sans: [
          'Space Grotesk', 'sans'
        ]
      },
      fontSize: {
        '8xl': ['5.5rem', {
          lineHeight: '5.5rem',
          letterSpacing: '-2.5px',
        }],
        '4xl': ['3rem', {
          lineHeight: '3.5rem',
          letterSpacing: '-1.5px',
        }],
      }
    },



  },
  plugins: [],
}