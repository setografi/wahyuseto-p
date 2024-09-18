/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bodyPrimary: '#121418',
        grayNetral: '#736F70',
        whiteText: '#e9e6e4',
        blueButton: '#06B6D4',
        magentaC: '#F06292',
      },
      fontFamily: {
        lexendDeca: ['Lexend Deca', 'sans-serif'],
        ibmPlexmono: ['IBM Plex Mono', 'monospace'],
        offBit: ['OffBit-Regular', 'sans-serif'],
        offBitdotbold: ['OffBit-DotBold', 'sans-serif'],
      },
      rotate: {
        360: '360deg',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        rotate: 'rotate 2s linear infinite',
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};
