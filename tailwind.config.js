/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",],
  theme: {
    extend: {
      colors:{
        'bgColor': '#b182e3',
        'tertiary': '#ff4ac1',
        'header':'#4ee4e4'
      },
      gridTemplateColumns:{ 
        'cart':'4fr 3fr 1fr 1fr 1fr 1fr',
      },
      backgroundImage:{
        'promobg':"url('/src/assets/promo.avif')",
        'biobg':"url('/src/assets/biobg.png')",
        'loginbg':"url('/src/assets/loginbg.jpeg')",
        'signupBg':"url('/src/assets/signupBg.jpeg')",
      },
      fontFamily:{
        'default':["Inconsolata"],
      }
    },

  },
  plugins: [],
}

