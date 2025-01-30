/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        Cooper: ['Cooper', 'sans-serif'],
        Amiko: ['Amiko', 'sans-serif'],
        AmikoSemiBold: ['AmikoSemiBold', 'sans-serif'],
        AmikoBold: ['AmikoBold', 'sans-serif'],
      },
      colors: {
        background: '#F4E2B4',
        title: '#C80100',
        text: '#8C1F1E',
        'grey-1': '#808080',
        'grey-2': '#C6C6C6',
      },
      screens: {
        xs: '480px',
        sm: '600px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [],
};
