/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily :{
          Sigmar: ['Sigmar'],
          Anuphan: ['Anuphan'],
          Fatface:['Abril Fatface'],
          LilitaOne: ['Lilita One'],
          Mali: ['Mali'],
          Mitr:['Mitr']
      },
    },
    plugins: [],
    }
  
  }