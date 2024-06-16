/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Spartan: ['"League Spartan"', "sans-serif"],
      },
      colors: {
        purple: "#7c5dfa",
        light_bg: "#f8f8fb",
        primary_text_color: "#858bb2",
        text_dark: "#212529",
        light_green_bg: "#33d69f0d",
        green: "#33d69f",
        orange_yellow: "#ff8f00",
        light_orange_yellow: "#ff8f000d",
        gray: "#373b530d",
        red: "#ec5757",
        dark_blue: "#373b53",
      },
    },
  },
  plugins: [],
};
