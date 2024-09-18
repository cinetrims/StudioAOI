/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        nunito: ['Nunito'],
        kanit: ['Kanit'],
        clashdisplay:['clashdisplayvariable']

      },
      gridTemplateColumns:
      {
        '70/30':'70% 28%' ,
      },
      colors:{
        customGreen:'#191D1D',
      },
    },
  },
  plugins: [],
}