/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        theme:'#2A2A2A',
        primary:'#5F9EA0',
      },
      fontFamily:{
        mont:['Montserrat' , 'sans-serif']
      }
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
  },
  variants:{
    extend:{},
  },
  
  plugins: [],
}

