/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height:{
        H10vh:"10vh",
        H90vh:"90vh",
      },
      borderWidth:{
        b05:"1.5px",
      }
    },
  },
  plugins: [],
}