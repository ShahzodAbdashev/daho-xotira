/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f2edfb',
          100: '#e5dcf7',
          200: '#cbb9ef',
          300: '#b196e7',
          400: '#9773df',
          500: '#7d50d7',
          600: '#4A2A75', // Main primary
          700: '#3a2260',
          800: '#2d1a4c',
          900: '#1f1238',
        },
        secondary: {
          50: '#eaf7ff',
          100: '#d5efff',
          200: '#b5e3ff',
          300: '#8ed5ff',
          400: '#57c0ff',
          500: '#1E90FF', // Main secondary
          600: '#0070cc',
          700: '#0059a3',
          800: '#004580',
          900: '#003566',
        },
        accent: {
          50: '#fff1f1',
          100: '#ffe1e1',
          200: '#ffc7c7',
          300: '#ffa3a3',
          400: '#ff8787',
          500: '#FF6B6B', // Main accent
          600: '#e53e3e',
          700: '#c53030',
          800: '#9b2c2c',
          900: '#742a28',
        },
      },
      fontFamily: {
        sans: [
          '"Inter"',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
      spacing: {
        '18': '4.5rem',
      },
    },
  },
  plugins: [],
};