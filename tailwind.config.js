/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        '700': '700ms',
        '1000': '1000ms',
        '2000': '2000ms', // Add this for the smooth 2-second animations
      },
      fontFamily: {
        'cal-sans': ['Cal Sans', 'sans-serif'],
        'funnel-display': ['Funnel Display', 'sans-serif'],
      },
      keyframes: {
        'draw-arrow': {
          'from': {
            strokeDashoffset: '1000',
            opacity: '0'
          },
          '50%': {
            opacity: '1'
          },
          'to': {
            strokeDashoffset: '0',
            opacity: '1'
          }
        },
        'grow-bar': {
          'from': {
            transform: 'scaleY(0)',
            transformOrigin: 'bottom',
            opacity: '0'
          },
          'to': {
            transform: 'scaleY(1)',
            transformOrigin: 'bottom',
            opacity: '1'
          }
        }
      },
      animation: {
        'arrow': 'draw-arrow 1.5s ease-out 0.8s forwards',
        'bar-1': 'grow-bar 0.6s ease-out 0.2s forwards',
        'bar-2': 'grow-bar 0.6s ease-out 0.4s forwards',
        'bar-3': 'grow-bar 0.6s ease-out 0.6s forwards'
      }
    },
  },
  plugins: [require('tailwindcss-motion')],
}
