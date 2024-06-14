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
        text_color: "#858bb2",
      },
    },
  },
  plugins: [],
};
