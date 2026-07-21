/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        accent: {
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
        },
        surface: {
          light: "#fafaf9",
          dark: "#0c0e12",
          card: "#13161c",
        },
        // legacy tokens still referenced in a few places
        "primary-300": "#f59e0b",
        "primary-500": "#fbbf24",
        "secondary-500": "#27272a",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
        montserrat: ["Inter", "system-ui", "sans-serif"],
        dmsans: ["Inter", "system-ui", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
