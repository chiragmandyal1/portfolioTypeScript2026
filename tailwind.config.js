/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enable dark mode with class strategy
  theme: {
    extend: {
      colors: {
        "gray-20": "#F8F4EB", //footer bg
        "primary-100": "#F5DF4E", //main
        "primary-300": "#017DC3", //hover nav bar options
        "primary-500": "#1C1F23", // hover
        "secondary-linkedin": "#0A66C2", // logo hover color
        "secondary-whatsapp": "#00E676", // logo hover color
        "secondary-mail": "#DDA605", // logo hover color
        "secondary-github": "#FE0000", // logo hover color
        "secondary-500": "#D3D3D3",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred":
          "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        logotext: "url('./assets/LogoText.png')",
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
