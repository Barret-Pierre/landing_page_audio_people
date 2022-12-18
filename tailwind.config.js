/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "cta-image": "url(../public/cta_image.png)",
        "cta-image2": "url(../public/cta_image_2.png)",
        "cta-image3": "url(../public/cta_image_3.png)",
      },
      colors: {
        primary: "#ed7f39",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
