/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 6.3s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      lineHeight: {
        unset: "unset",
      },
      textColor: {
        link: "#1976d2",
      },
      fontFamily: {
        project: ["Montserrat", "Roboto", "sans-serif"],
        montserrat: "Montserrat",
        roboto: "Roboto",
      },
      boxShadow: {
        button:
          "0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%)",
      },
      backgroundImage: {
        "gradient-1": "linear-gradient(45deg, #ffda2e 0%, #afc606 100%)",
      },
    },
  },
  plugins: [],
};
