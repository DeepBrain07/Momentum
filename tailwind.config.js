/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html" // Add this in case you have HTML files in public
  ],
  darkMode: 'class', // or 'media'
  theme: {
    extend: {
      colors: {
        primary: "#013B7D",
        bodyText: "#3C3C3C",
        backgroundColor: "#F8F8EE",
        secondary: "#5B88FE",
        tertiary: "#0D2154"
      },
      fontFamily: {
        'gilroy-semi-bold': ['Gilroy-SemiBold', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
