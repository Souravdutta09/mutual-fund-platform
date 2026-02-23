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
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
          950: '#022C22',
        },
        'accent-blue': '#3B82F6',
        'accent-blue-light': '#60A5FA',
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgba(6, 78, 59, 0.08), 0 1px 2px -1px rgba(6, 78, 59, 0.08)',
        'card-hover': '0 10px 25px -3px rgba(6, 78, 59, 0.1), 0 4px 6px -4px rgba(6, 78, 59, 0.08)',
        'btn': '0 1px 2px 0 rgba(5, 150, 105, 0.2)',
        'btn-hover': '0 4px 12px 0 rgba(5, 150, 105, 0.3)',
        'nav': '0 1px 3px 0 rgba(6, 78, 59, 0.15)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #064E3B 0%, #065F46 40%, #047857 70%, #059669 100%)',
        'cta-gradient': 'linear-gradient(135deg, #059669 0%, #10B981 100%)',
        'card-shine': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)',
      },
    },
  },
  plugins: [],
}
