/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        mainBlue: "#0D3046",
        secondaryBlue: "#429ED8",
        thirdBlue: "#639AB9",
        forthBlue: "#1b2f49",
        orangeMain: "#EE7C13",
        whiteMain: "#F2F9F9",
        mainGray: "#E1ECF2",
      },
      fontFamily: {
        title: ['"PT Serif"', "serif"], // Fuente para los títulos
        body: ["Roboto", "sans-serif"], // Fuente para el contenido general
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(0deg, rgba(255,255,255,0.44861694677871145) 0%, rgba(0,0,0,0.4962359943977591) 0%)",
      },
    },
  },
  plugins: [],
};
