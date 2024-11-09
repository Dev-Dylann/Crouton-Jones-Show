/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans"],
        impact: ["Impact", "sans"],
      },
      colors: {
        bgColor: "#e8dfca",
        textColor: "#0C2150",
        primaryBtn: "#fbac35",
      },
    },
  },
  plugins: [],
};

// --color1: #EDBF2D;
//     --color2: #FCF1B1;
//     --color3: #0C2150;
//     --color4: #AAB2C2;
//     --color5: #e8dfca;
//     --color6: #fbac35;
//     --color7: #dccfaf;
