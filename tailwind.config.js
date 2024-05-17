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
      }
    },
  },
  plugins: [],
}

