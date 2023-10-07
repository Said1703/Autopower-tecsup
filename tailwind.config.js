/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        "white" : "#FFFFFF",
        "white-skyblue" : "#F1F2F4",
        "white-skyblue-select" : "#d4f4fd",
        "grey-a" : "#E7E7E7",
        "grey-b" : "#CECECE",
        "gold" : "#FFF8E1",
        "skyblue-light" : "#8FC2D3",
        "skyblue" : "#1EBAF3",
        "skyblue-select" : "#41CAFD",
        "darkblue" : "#0e2133",
        "darkblue-select" : "#03416E",

      }
    },
  },
  plugins: [],
}

