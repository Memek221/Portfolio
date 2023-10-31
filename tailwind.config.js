/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         fontFamily: {
            sans: ['Rubik', 'sans-serif'],
         },
         spacing: {
            '-2/4': '-50%',
         },
         keyframes: {
            fly: {
               '25%': { transform: 'translate(0, 2%);' },
               '50%': { transform: 'translate(0, 0%);' },
               '75%': { transform: 'translate(0, -2%);' },
               '100%': { transform: 'translate(0, 0%);' },
            },
         },
         animation: {
            fly: 'fly 4s linear infinite',
         },
      },
   },
   plugins: [],
};
