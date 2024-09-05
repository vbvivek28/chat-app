/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        primary: "#9333ea",
        secondary:"#0bcbd4"
    }
    },
  },
  plugins: [],
}

