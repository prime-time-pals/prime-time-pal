/** @type {import('tailwindcss').Config} */
// import withMT from "@material-tailwind/react/utils/withMT";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'saeada-regular': ['LTSaeada-regular', 'sans-serif'],
        'saeada-thin': ['LTSaeada-thin', 'sans-serif'],
        'saeada-light': ['LTSaeada-light', 'sans-serif'],
        'saeada-extraLight': ['LTSaeada-extraLight', 'sans-serif'],
      },
      keyframes: {
        pulsate: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
      },
      animation: {
        pulsate: 'pulsate 1.5s infinite',
      },
    },
  },
  plugins: [],
}

