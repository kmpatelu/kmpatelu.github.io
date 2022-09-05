module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        archivo: "Archivo Black",
        sedgwick: "Sedgwick Ave",
        roboto: "Roboto"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
