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
        background: '#F1F1E0',
        title: '#346751',
        text: '#123827',
        error: '#C80100',
        grey: '#808080',
      },
      screens: {
        xs: '420px',
        sm: '600px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [],
};
