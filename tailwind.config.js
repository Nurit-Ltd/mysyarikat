/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#05285E",
        // secondary: "#FACC15",
        neutral_300: "#E7E7E7",
        neutral_600: "#9E9E9E",
        neutral_700: "#696969",
        textNeutral_300: "#E7E7E7",
        textNeutral_600: "#9E9E9E",
        textNeutral_700: "#696969",
        green20p: "rgba(0, 174, 28, 0.2)",
        textGreenBase_500: "#00AE1C",
        turqoiseBase_500: "#1ECFCA",
        yellowBase_500: "#FFC700",
        bgPrimary: "#F8F8F8",
      },
      fontSize: {
        text10px: "10px",
      },
    },
  },
  plugins: [],
};
