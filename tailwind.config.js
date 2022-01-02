module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat"],
      },
      spacing: {
        14: "3.5rem",
        "125px": "125px",
      },
      colors: {
        hoverspt: "#18D760",
        "purple-main": "#2D46B9",
        "btn-premium": "#202F72",
        "green-main": "#1ED760",
        "green-premium": "#96F0B6",
      },
      backgroundImage: {
        "spotify-theme": "url('/img/bgcontainer.svg')",
        "spotify-theme-mobile": "url('/src/img/bursts-mobile.svg')",
      },
      backgroundSize: {
        "175%": "175%",
        "195%": "195%",
      },
      backgroundPosition: {
        "banner": "46% 4%",
        "banner-mobile": "top 25% center",
      },
      fontSize: {
        "9xl": "9rem",
      },
      screens: {
        'mdq': {'max': '867px'},
        // => @media (max-width: 867px) { ... }
        'smq': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
        'lgq': {'max': '1224px'},
      }
    },
  },
  variants: {},
  plugins: [],
};
