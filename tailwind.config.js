/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a1a1a',
          light: '#2d2d2d',
          dark: '#0a0a0a',
        },
        gray: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        accent: {
          DEFAULT: '#6b7050',
          light: '#8b9155',
          dark: '#4a4e38',
        },
        secondary: {
          DEFAULT: '#b08968',
          light: '#c9a887',
          dark: '#8b6f47',
        },
        success: '#4a5d3a',
        warning: '#8b6914',
        error: '#7f2d2d',
        info: '#2d4a4a',
      },
      boxShadow: {
        'custom-sm': '0 1px 2px 0 rgba(26, 26, 26, 0.05)',
        'custom-md': '0 4px 6px -1px rgba(26, 26, 26, 0.1), 0 2px 4px -1px rgba(26, 26, 26, 0.06)',
        'custom-lg': '0 10px 15px -3px rgba(26, 26, 26, 0.1), 0 4px 6px -2px rgba(26, 26, 26, 0.05)',
        'custom-xl': '0 20px 25px -5px rgba(26, 26, 26, 0.1), 0 10px 10px -5px rgba(26, 26, 26, 0.04)',
      },
    },
  },
  plugins: [],
}
