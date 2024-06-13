/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "default": ["Noto Serif", "serif"],
      "heading": ["Libre Baskerville", "serif"]
    },
    extend: {
      "borderWidth": {
        "1": "1px"
      },
      "height": {
        "90v": "90vh"
      },
      "backgroundImage": {
        "vignette": "radial-gradient(circle, white, hsl(5, 0%, 90%))"
      }
    },
  },
  plugins: [],
}