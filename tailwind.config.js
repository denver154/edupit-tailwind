/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary: "#0EB582",
        dark:"#18406B",
        textcolor:"#2A374C",
        green:"#31AF36",
        grayy:"#777777",
        edupit:"#123A67",
        lightpri:'#dbf4ec',
      },
      keyframes: {
        sliding1:{
          from: {
            left:'0',
          },
          to: {
            left:'100%',
          },
        },
        sliding2:{
          from: {
            right:'0',
          },
          to: {
            right:'100%',
          },
        }
      },
      animation:{
        sliding1: 'sliding1 3s linear infinite',
        sliding2: 'sliding2 3s linear infinite',
      },

      backgroundImage:{
        'bannerbg': 'url("./img/slider__bg.jpg")',
        'bannerimg1': 'url("./img/bannerlogo.jpg")',
        'bannerimg2': 'url("./img/bannerlogo2)'
      },

      fontFamily:{
        'Raleway' :['Raleway', 'sans-serif']
      }



    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

