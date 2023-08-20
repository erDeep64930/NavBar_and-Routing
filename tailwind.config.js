/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        alkatra: ["Alkatra", "cursive"],
        dancing: ["Dancing Script", "cursive"],
        mont: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

