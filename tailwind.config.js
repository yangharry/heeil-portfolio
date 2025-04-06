/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  safelist: ['bg-green-100', 'bg-red-100', 'bg-yellow-100', 'bg-blue-100', 'bg-purple-100'],
  theme: {
    extend: {},
  },
  plugins: [],
};
