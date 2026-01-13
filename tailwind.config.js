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
        'primary-navy': '#0f172a', /* Deep navy from image */
        'primary-navy-light': '#1e293b',
        'primary-navy-dark': '#020617',
        'secondary-blue': '#3b82f6', /* Bright blue accent */
        'secondary-blue-light': '#60a5fa',
        'secondary-blue-dark': '#2563eb',
        'bg-primary': '#f8fafc', /* Light background */
        'bg-secondary': '#f1f5f9',
        'bg-tertiary': '#e2e8f0',
        'text-primary': '#0f172a', /* Navy text */
        'text-secondary': '#334155',
        'text-muted': '#64748b',
        'text-light': '#94a3b8',
        'accent-blue': '#3b82f6', /* Bright accent blue */
        'accent-blue-light': '#60a5fa',
        'accent-blue-dark': '#2563eb',
        'accent-green': '#10b981', /* Success green */
        'accent-orange': '#f59e0b', /* Warning orange */
        'border-light': '#e2e8f0',
        'border-medium': '#cbd5e1',
        'border-dark': '#94a3b8',
      },
      boxShadow: {
        'custom-sm': '0 1px 3px 0 rgba(15, 23, 42, 0.1)',
        'custom-md': '0 4px 6px -1px rgba(15, 23, 42, 0.1), 0 2px 4px -1px rgba(15, 23, 42, 0.06)',
        'custom-lg': '0 10px 15px -3px rgba(15, 23, 42, 0.1), 0 4px 6px -2px rgba(15, 23, 42, 0.05)',
      },
    },
  },
  plugins: [],
}
