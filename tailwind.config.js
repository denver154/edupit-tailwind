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
      },
    },
  },
  plugins: [],
}

