/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{html,js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily : {
        'josefin' : ['"Josefin Sans", sans-serif']
      } , 
      colors : {
        'dark-gray' : '#9495A5' , 
        'light-gray' : '#D1D2DA' , 
        'pale-gray' : '#F6F7F8' , 
        'light-blue' : '#3A7CFD' , 
        'dark-blue' : '#494C6B' , 
        'very-dark-blue' : '#161721' , 
        'grayish-violet' : '#25273D' , 
        'very-dark-grayish-violet' : '#25273D'
      }
    },
  },
  plugins: [],
}

