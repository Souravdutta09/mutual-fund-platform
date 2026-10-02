/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        'brand': {
          50: '#f1f6f4',
          100: '#e3ece9',
          200: '#c6d8d0',
          300: '#9ebdb0',
          400: '#6a9885',
          500: '#3c7960',
          600: '#196144',
          700: '#155038',
          800: '#103f2c',
          900: '#0c2f21',
          950: '#081d14',
        },
        'accent-blue': '#3B82F6',
        'accent-blue-light': '#60A5FA',
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgba(25, 97, 68, 0.08), 0 1px 2px -1px rgba(25, 97, 68, 0.08)',
        'card-hover': '0 10px 25px -3px rgba(25, 97, 68, 0.1), 0 4px 6px -4px rgba(25, 97, 68, 0.08)',
        'btn': '0 1px 2px 0 rgba(25, 97, 68, 0.2)',
        'btn-hover': '0 4px 12px 0 rgba(25, 97, 68, 0.3)',
        'nav': '0 1px 3px 0 rgba(25, 97, 68, 0.15)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0c2f21 0%, #103f2c 40%, #155038 70%, #196144 100%)',
        'cta-gradient': 'linear-gradient(135deg, #196144 0%, #3c7960 100%)',
        'card-shine': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)',
      },
    },
  },
  plugins: [],
}
