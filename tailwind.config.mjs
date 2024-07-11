/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        mediumVermilion: "#D94E41",
        redOrange: "#F22F1D",
        vividRed: "#F21905",
        grayNetral: "#736F70",
        goldenRod: "#F29727",
        whiteText: "#F2F2F2",
        blueTailwind: "#06B6D4",
        magentaC: "#F06292",
      },
      fontFamily: {
        lexendDeca: ["Lexend Deca", "sans-serif"],
        ibmPlexmono: ["IBM Plex Mono", "monospace"],
      },
      rotate: {
        360: "360deg",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        rotate: "rotate 2s linear infinite",
      },
      keyframes: {
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
