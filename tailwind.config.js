module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    rotate: {
      '0': '0deg',
      '45':'45deg',
      '-45':'-45deg',
      '360' : '360deg',
    },
    extend: {
      fontFamily: {
        'kaiseiharuno': ['Kaisei HarunoUmi'],
        'allison': ['Allison'],
        'notosans' : ['Noto Sans JP'],
      },
      backgroundImage: theme => ({
        'food': "url('./foodBackground.jpg')",
        'table': "url('./tableBackground.jpg')",
      }),
     
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
