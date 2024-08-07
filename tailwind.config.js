// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '120': '30rem',
        '128': '32rem',
        '144': '36rem',  // Example custom height
        '160': '40rem',  // Example custom height
      },
      width:{
        '600':'37.5rem',
        '1000':'56.25rem',
      },
      boxShadow: {
        'custom': '0px 4px 20px 10px rgba(0, 0, 0, 0.1)',
      },
      colors: {
        customPurple: '#8910F1',
        inputColor: '#F0F0F0',
        inputBorder:'#B1B1B1',
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
