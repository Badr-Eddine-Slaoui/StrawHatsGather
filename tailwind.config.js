/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'plan': "url('./images/plan.jpg')",
      }
    },
  },
  plugins: [],
}

