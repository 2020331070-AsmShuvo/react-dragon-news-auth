/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        newsTitle: "'Calligraffitti', cursive",
      }
    },
  },
  plugins: [require("daisyui")],
}
