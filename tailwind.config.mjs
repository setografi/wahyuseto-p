/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bodyPrimary: {
          900: 'hsl(240, 5.88%, 10%)', // Warna utama bodyPrimary
          800: 'hsl(240, 5.88%, 15%)', // Turunan 1, sedikit lebih terang
          700: 'hsl(240, 5.88%, 20%)', // Turunan 2
        },
        textPrimary: {
          100: '#F1EFEF', // Teks terang utama
          200: '#E8E6E4', // Turunan 1
          300: '#DAD7D4', // Turunan 2
        },
        accentOne: {
          600: '#F06292', // Magenta utama
          500: '#D95780', // Magenta Turunan 1
          400: '#C44E71', // Magenta Turunan 2
        },
        accentCyan: {
          600: '#00B8D4', // Cyan utama
          500: '#00A0BD', // Cyan Turunan 1
          400: '#008AA7', // Cyan Turunan 2
        },
        accentYellow: {
          600: '#FFEB3B', // Yellow utama
          500: '#FDD835', // Yellow Turunan 1
          400: '#FBC02D', // Yellow Turunan 2
        },
        grayNetral: '#736F70',
        whiteText: '#e9e6e4',
        blueButton: '#06B6D4',
        magentaC: '#F06292',
      },
      fontFamily: {
        ibmPlexsans: ['IBM Plex Sans', 'sans-serif'],
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
