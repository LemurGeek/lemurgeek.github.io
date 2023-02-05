/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    // Color names get from: https://abouts.co/colors
    colors: {
      black: "#000000",
      white: "#FFFFFF",
      eerie_black: "#1A1919",
      pearl_bush: "#EEE7E1",
      ochre_orange: "#DB7C26",
      tacha: "#D7B05A",
      rock_blue: "#96A8CA",
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ["Beer Googles", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  variants: {},
  plugins: [],
};
