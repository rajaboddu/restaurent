module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    rotate: {
      0: "0deg",
      45: "45deg",
      "-45": "-45deg",
      360: "360deg",
    },
    fontFamily: {
      script: ["Kaushan Script"],
      niconne: ["Niconne"],
      charm: ["Charm"],
      sriracha: ["Sriracha"],
    },
    extend: {
      backgroundImage: (theme) => ({
        food: "url('./foodBackground.jpg')",
        table: "url('./tableBackground.jpg')",
      }),
      animation: {
        'click' : 'click 1s linear'
      },
      keyframes: {
        click: {
          '0% 100%': { transform: 'scale(1, 1)' },
          '50%': { transform: 'scale(0.75, 0.75)' },
        }
      }
    },
  },
  variants: {
    extend: {
      animation: ['focus', 'hover'],
    },
  },
  plugins: [],
};
