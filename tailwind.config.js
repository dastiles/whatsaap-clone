/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "whatsApp_blue": "#008069",
        "whatsApp_gray": "#eee7df",
        "whatsapp_teal": "#e7ffdb"
      },
    },

    fontFamily: {
      'poppins': 'Poppins'

    }
  },
  plugins: [],
}
