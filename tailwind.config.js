/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "whatsApp_blue": "#008069"
    },
    fontFamily: {
      'poppins': 'Poppins'

    }
  },
  plugins: [],
}
