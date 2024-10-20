/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: 'class', // Enable dark mode via class
  theme: {
    extend: {
      colors: {
        lightBackground: '#f0f4f8',
        darkBackground: '#1a202c',
      },
    },
  },
  plugins: [],
};