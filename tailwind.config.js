/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily :{
        Poppins: 'Poppins' ,
        Arial: 'Arial' ,
      },
      colors:{
        'Black' : '#0F0F0F'
      },     
       screens: {
        '1nm': '1315px',
        '2nm': '1097px',
        '3nm': '793px',
        '4nm': '700px',
        '5nm': '940px',
      },
    },
  },
  plugins: [],
}

