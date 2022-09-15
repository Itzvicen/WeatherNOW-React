/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      extend: {
        colors: {
        // Configure your color palette here
          'custom-blue':'#0FA5E9',
        },
      },
    },
  },
  plugins: [],
}