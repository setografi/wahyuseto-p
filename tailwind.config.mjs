/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        neutral: {
          100: '#FFFFFF',
          200: '#F5F5F5',
          300: '#E0E0E0',
          400: '#BDBDBD',
          500: '#9E9E9E',
          600: '#757575',
          700: '#424242',
          800: '#1E1E1E',
          900: '#0A0A0A',
        },
        border: {
          100: '#E0E0E0',
          200: '#757575',
          300: '#424242',
        },
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
          purple: {
            100: '#F3E5F5',
            200: '#E1BEE7',
            300: '#CE93D8',
            400: '#BA68C8',
            500: '#AB47BC',
            600: '#9C27B0',
            700: '#8E24AA',
            800: '#7B1FA2',
            900: '#4A148C',
          },
          lavender: {
            100: '#E6E6FA',
            200: '#D8BFD8',
            300: '#DDA0DD',
            400: '#DA70D6',
            500: '#BA55D3',
            600: '#9932CC',
            700: '#8A2BE2',
            800: '#6A5ACD',
            900: '#483D8B',
          },
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
