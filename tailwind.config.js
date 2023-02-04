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
        "whatsapp_teal": "#e7ffdb",
        "header_col": "#ededed",
        'font-color': "#51585c",
        "light_gy": " #f6f6f6",
        "op_black": "rgba(0, 0, 0, 0.06)",
        "chat_head": "#111",
      },

      background: {
        "grad": "linear-gradient(#009688 0%, #009688 130px, #d9dbd5 130px, #d9dbd5 100%)",
      }
    },

    fontFamily: {
      'poppins': 'Poppins'

    }
  },
  plugins: [],
}
