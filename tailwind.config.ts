/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#7e7e7e",
          "200": "#757575",
          "300": "#111",
        },
        whitesmoke: "#f5f5f5",
        black: "#000",
        lightgray: "#ccc",
      },
      fontFamily: {
        "helvetica-neue": "'Helvetica Neue'",
      },
      borderRadius: {
        "11xl": "30px",
        "81xl": "100px",
      },
    },
    fontSize: {
      "2xs": "11px",
      xs: "12px",
      "3xs": "10px",
      mini: "15px",
      sm: "14px",
      "4xl": "23px",
      lg: "18px",
      base: "16px",
      "3xl": "22px",
      "24xl": "43px",
      "35xl": "54px",
      "13xl": "32px",
      "37xl": "56px",
      "15xl": "34px",
      "26xl": "45px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};