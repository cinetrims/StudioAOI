/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        clash: ['Clash Display','sans-serif'],
        sans: ['Roboto', 'sans-serif'],
        nunito: ['Nunito'],
        kanit: ['Kanit'],
        figtree: ['Figtree'],
      },
      gridTemplateColumns:
      {
        '70/30':'70% 28%' ,
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
    },
  },
  plugins: [],
}