/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        main: ['Space Grotesk', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors:{
        primary: '#FFE84B',
        secondary: '#327DFF',
      },
      fontSize:{
        heading: '56px',
        subhead: '40px',
        body: '1rem',
      },
    },
  },
  plugins: [],
}

