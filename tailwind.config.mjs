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
      backgroundImage: {
        'radial-gradient':
          'radial-gradient(ellipse at top, transparent 60%, rgba(128, 90, 213, 0.4))',
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
