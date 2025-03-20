/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",],
  theme: {
    extend: {
      colors:{
        'bgColor': 'var(--background)',
        'tertiary': 'var(--tertiary)',
        'header':'var(--header)',
        'card':"var(--card)",
        'text' :'var(--text)',
        
      },
      gridTemplateColumns:{ 
        'cart':'4fr 3fr 1fr 1fr 1fr 1fr',
      },
      backgroundImage:{
        'promobg':"url('/src/assets/promo.avif')",
        'biobg':"url('/src/assets/bgBio.jpg')",
        'loginbg':"url('/src/assets/loginbg.jpeg')",
        'signupBg':"url('/src/assets/signupBg.jpeg')",
      },
      fontFamily:{
        'default':["Inconsolata"],
      }
    },

  },
  plugins: [
  ],
}

