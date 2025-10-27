/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef7ee',
          100: '#fdecd3',
          200: '#fad6a5',
          300: '#f7b96d',
          400: '#f49333',
          500: '#f17513',
          600: '#e25a09',
          700: '#bb420a',
          800: '#95350f',
          900: '#792e10',
          950: '#411506',
        },
        secondary: {
          50: '#f5f7fa',
          100: '#eaeef4',
          200: '#d1dbe6',
          300: '#a9bdd1',
          400: '#7a9ab8',
          500: '#587da1',
          600: '#446387',
          700: '#37506e',
          800: '#31445c',
          900: '#2c3a4e',
          950: '#1d2634',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
