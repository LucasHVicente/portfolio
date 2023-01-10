// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        title: 'Sofia sans, sans-serif',
      },
      colors: {
        gray: {
          300: '#A3A3A3',
        },
        blue: {
          500: '#70A4FC',
          700: '#4869A0',
        },
        'bg-dark': '#0D1117',
      },
    },
  },
  plugins: [],
};
