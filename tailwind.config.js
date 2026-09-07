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
          muted: "#3a5aa0",
          line: "#1f3a8f",
          ink: "#0f1b3d",
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
        "sheet": "0 1px 0 0 rgba(15,27,61,0.12), 0 2px 0 0 rgba(15,27,61,0.05)"
      },
      backgroundImage: {
        "paper-grid": "linear-gradient(rgba(31,58,143,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(31,58,143,0.045) 1px, transparent 1px)"
      },
    },
  },
  plugins: [],
}
