/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'gillsanbold': ['gillsanbold', 'sans-serif'],
        'lacquer': ['Lacquer', 'cursive'],
        'lemon': ['Lemon', 'cursive']
      }
    },
  },
  plugins: [],
}