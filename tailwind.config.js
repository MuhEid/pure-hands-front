/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-50': '#75846e',
        'primary-100': '#526E3E',
        'primary-200': '#44533c',
        'background-100': '#F1F0EC',
        'background-200': '#EBE9E2',
      },
    },
    container: {
      center: true,
      padding: {
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
};
