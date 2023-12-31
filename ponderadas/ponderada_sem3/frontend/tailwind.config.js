/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'navyblue': '#002D40',
        'green': '#62FFD0'
      }
    },
  },
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
