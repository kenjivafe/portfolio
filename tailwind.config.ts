import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'radial-pattern': 'radial-gradient(#cacaca 5%, transparent 0)',
      },
      backgroundSize: {
        '35': '35px 35px',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-left': 'fadeInLeft 0.8s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'scroll-reveal': 'scrollReveal 0.7s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(30px)',
            filter: 'blur(10px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
            filter: 'blur(0)',
          },
        },
        fadeInLeft: {
          'from': {
            opacity: '0',
            transform: 'translateX(-30px)',
            filter: 'blur(8px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateX(0)',
            filter: 'blur(0)',
          },
        },
        fadeIn: {
          'from': {
            opacity: '0',
            filter: 'blur(4px)',
          },
          'to': {
            opacity: '1',
            filter: 'blur(0)',
          },
        },
        scrollReveal: {
          'from': {
            opacity: '0',
            transform: 'translateY(24px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
}

export default config
