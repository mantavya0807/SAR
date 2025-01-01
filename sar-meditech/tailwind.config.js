/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4F46E5', // Indigo-600
          DEFAULT: '#4338CA', // Indigo-700
          dark: '#3730A3', // Indigo-800
        },
        secondary: {
          light: '#10B981', // Emerald-500
          DEFAULT: '#059669', // Emerald-600
          dark: '#047857', // Emerald-700
        },
        accent: {
          light: '#F59E0B', // Amber-500
          DEFAULT: '#D97706', // Amber-600
          dark: '#B45309', // Amber-700
        },
        neutral: {
          50: '#F9FAFB', // Added lighter shades
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      keyframes: {
        gradientAnimation: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.7' },
        },
      },
      backgroundSize: {
        'gradient-size': '200% 200%',
      },
      animation: {
        gradientAnimation: 'gradientAnimation 15s ease infinite',
        pulse: 'pulse 2s infinite',
      },
    },
  },
  plugins: [],
};
