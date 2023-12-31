/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      height: {
        'screen/90': '90vh',
      },
      width: {
        'screen/90': '90vw',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

