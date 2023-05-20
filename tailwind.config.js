/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function container({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          marginRight: "auto",
          marginLeft: "auto",
          padding: "0 16px",
          "@screen sm": {
            maxWidth: "544px",
          },
          "@screen md": {
            maxWidth: "688px",
          },
          "@screen lg": {
            maxWidth: "928px",
          },
          "@screen xl": {
            maxWidth: "1120px",
          },
          "@screen 2xl": {
            maxWidth: "1168px",
          },
        },
      });
    },
  ],
};
