/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        'coresens': ["CoreSens, sans-serif"],
        'kiro': ["Kiro, sans-serif"],
      }
    },
  },
  daisyui: {
    // themes: ["light"],
    themes: [ 
      {
        mytheme: {
          "primary": "#BB9A01",
          "secondary": "#262626",
          "accent": "#63D2D9",
          "neutral": "#ECF5F4",
          "info": "#F8F8FA",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}