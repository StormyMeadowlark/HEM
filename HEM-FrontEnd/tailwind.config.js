const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
    flowbite.content(),
  ],
  theme: {
    screens: {
      dxl: "2560px",
      dlg: "1920px",
      dmd: "1536px",
      dsm: "1366px",
      dxs: "1280px",
      tlg: "810px",
      tsm: "768px",
      mlg: "390px",
      msm: "360px",
    },
    colors: {
      hemautoWhite: "#f5fff5",
      hemautoLightGray: "#cdcdcd",
      hemautoMediumGray: "#7f7f7f",
      hemautoDarkGray: "#141414",
      hemautoGray: "#333333",
      hemautoBlack: "#0a0f0a",
      hemautoGreen: "#00ff00",
      hemautoLightGreen: "#afffaf",
      hemautoMediumGreen: "#007f00",
      hemautoDarkGreen: "#003300",
      hemautoTrueWhite: "#ffffff",
      hemautoTrueBlack: "#000000",
      hemautoTransparent: "#00000000",
    },
    container: {
      center: true,
    },
    fontFamily: {
      hemautoFontPlay: "Play",
      hemautoFontUrbanist: "Urbanist",
      hemautoFontRoadRage: "Road Rage",
      hemautoFontTiltWarp: "Tilt Warp",
    },
    extend: {
      backgroundImage: {
        serviceBackground:
          "url(./src/assets/Images/Background/greenLitHexagons.svg)",
        PlatformBackground: "url(./src/assets/Images/Background/Platform.png)",
        reasonsBackground:
          "url(./src/assets/Images/Background/ReasonsWhyBackground.png)",
        TestimonialBackground:
          "url(./src/assets/Images/Background/TestimonialBackground.png)",
        ShoutOutBackground:
          "url(./src/assets/Images/Background/ShoutOutBackground.png)",
        ServicesBackground:
          "url(./src/assets/Images/Background/ServicesBackground.png)",
      },
    },
    variants: {
      display: ["group-hover"],
    },
    plugins: ["flowbite/plugin", flowbite.plugin()],
  },
};
