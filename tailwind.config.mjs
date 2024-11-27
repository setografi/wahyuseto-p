/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        light: {
          background: {
            primary: '#FFFFFF',
            secondary: '#F7FAFC',
            tertiary: '#E5E7EB',
          },
          text: {
            primary: '#1A1A1A',
            secondary: '#343A40',
            tertiary: '#6C757D',
          },
          border: {
            light: '#DEE2E6',
            medium: '#ADB5BD',
          },
        },
        dark: {
          background: {
            primary: '#121212',
            secondary: '#1A1A1A',
            tertiary: '#2B2B2B',
          },
          text: {
            primary: '#FFFFFF',
            secondary: '#CCCCCC',
            tertiary: '#999999',
          },
          border: {
            light: '#3C3C3C',
            medium: '#5A5A5A',
          },
        },
        accent: {
          magenta: {
            600: '#E91E63',
            500: '#D81B60',
            400: '#C2185B',
          },
          cyan: {
            600: '#00ACC1',
            500: '#0097A7',
            400: '#00838F',
          },
          yellow: {
            600: '#FBC02D',
            500: '#F9A825',
            400: '#F57F17',
          },
        },
      },

      fontFamily: {
        ibmPlexsans: ['IBM Plex Sans', 'sans-serif'],
        ibmPlexmono: ['IBM Plex Mono', 'monospace'],
        silkScreen: ['Silkscreen', 'sans-serif'],
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
