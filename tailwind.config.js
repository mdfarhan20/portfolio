/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "tech": ["Chakra Petch", "system-ui", "sans-serif"],
      "mono": ["Share Tech Mono", "ui-monospace", "monospace"],
    },
    extend: {
      colors: {
        blueprint: {
          muted: "#6b6f76",
          line: "#34343b",
          ink: "#17171c",
        },
        amber: {
          paper: "#c98a2b",
          deep: "#a06a1c",
        },
        paper: "#f6f4ec",
      },
      borderWidth: {
        "1": "1px"
      },
      boxShadow: {
        "sheet": "0 1px 0 0 rgba(23,23,28,0.12), 0 2px 0 0 rgba(23,23,28,0.05)"
      },
      backgroundImage: {
        "paper-grid": "linear-gradient(rgba(23,23,28,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(23,23,28,0.045) 1px, transparent 1px)"
      },
    },
  },
  plugins: [],
}
