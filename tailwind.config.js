/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    extend: {

      fontFamily: {
        bodyFont: ["Standerd", "sans-serif"],
      },
      fontSize: {
        "base": "clamp(1rem, 0.34vw + 0.91rem, 1.19rem)",
       " lg": "clamp(0.78rem, 0.21vw + 0.74rem, 1.08rem)",
        "xl": "clamp(0.98rem, 0.33vw + 0.91rem, 1.44rem)",
        "2xl": "clamp(1.22rem, 0.5vw + 1.13rem, 1.92rem)",
        "3xl": "clamp(1.53rem, 0.74vw + 1.39rem, 2.57rem)",
        "4xl": "clamp(1.91rem, 1.07vw + 1.71rem, 3.42rem)",
        "5xl": "clamp(2.38rem, 1.54vw + 2.1rem, 4.56rem)",
        "6xl": "clamp(2.98rem, 2.19vw + 2.57rem, 6.08rem)",
      },
    },
  },
  plugins: [],
};
