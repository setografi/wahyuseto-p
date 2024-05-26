/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        vermilionMain: "#F56742",
        scarletSecond: "#EB493F",
        vividOrange: "#F26A1B",
        saffronYellow: "#FFCD25",
        mintGreen: "#7EFFA2",
        aquaGreen: "#10FFBA",
        whiteText: "#F2F2F2",
      },
      fontFamily: {
        lexendDeca: ["Lexend Deca", "sans-serif"],
      },
      rotate: {
        360: "360deg",
      },
    },
  },
  plugins: [],
};
