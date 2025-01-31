/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class', // or 'media'
  screens: {
    xs: '320px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  theme: {
    extend: {
      colors: {
        primary: "#013B7D",
        "bodyText": "#3C3C3C",
        "backgroundColor": "#F8F8EE",
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