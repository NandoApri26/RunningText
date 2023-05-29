/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          DEFAULT: '720px',
        },
      },
    },
  },
  plugins: [],
}