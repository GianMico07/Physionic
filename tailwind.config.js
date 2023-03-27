/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#23A6F0",
        secondary: "#252B42",
        tertiary: "#FAFAFA",
        gray: "#737373",
        accent:"#50A584",
      },


      fontFamily:{
        montserrat: ['Montserrat', 'sans-serif'],
      },

      fontSize: {
        huge: 'clamp(3rem, 6vw, 4rem)',
        med: '36px'
      },


      screens: {
          xs: '340px',
        }
    },



    container: {
      center: true,
      padding: '1rem',
      screens: {
        xs: '',
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
       '2xl': '1496px',
      },
    }
  },
  plugins: [],
}