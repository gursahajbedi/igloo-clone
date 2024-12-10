/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {container:{
      screens: {
        sm: '300px',
        md: '428px',
        lg: '684px',
        xl: '940px',
        '2xl': '1296px',
      }
    }},
  },
  plugins: [],
}

