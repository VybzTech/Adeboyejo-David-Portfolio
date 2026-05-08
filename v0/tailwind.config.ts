import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        surface: 'var(--surface)',
        'accent-primary': 'var(--accent-primary)',
        'accent-secondary': 'var(--accent-secondary)',
        'text-primary': 'var(--text-primary)',
        'text-muted': 'var(--text-muted)',
        'text-subtle': 'var(--text-subtle)',
        border: 'var(--border)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
        display: ['var(--font-clash)', ...defaultTheme.fontFamily.serif],
      },
      borderRadius: {
        sm: '0.5rem',
        DEFAULT: '0.75rem',
        md: '0.875rem',
        lg: '1rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        sm: '0 2px 8px rgba(0, 0, 0, 0.1)',
        DEFAULT: '0 10px 30px rgba(0, 0, 0, 0.3)',
        lg: '0 20px 50px rgba(0, 0, 0, 0.4)',
        glow: '0 0 20px rgba(0, 217, 255, 0.3)',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
      },
      animation: {
        'scroll-left': 'scroll-left 30s linear infinite',
        'fade-up': 'fade-up 600ms ease-out forwards',
      },
      keyframes: {
        'scroll-left': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      spacing: {
        '13': '3.25rem',
        '17': '4.25rem',
        '18': '4.5rem',
        '19': '4.75rem',
        '21': '5.25rem',
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.25rem', { lineHeight: '1.75rem' }],
        xl: ['1.5rem', { lineHeight: '2rem' }],
        '2xl': ['1.75rem', { lineHeight: '2.25rem' }],
        '3xl': ['2.25rem', { lineHeight: '2.75rem' }],
        '4xl': ['3.5rem', { lineHeight: '4rem' }],
      },
    },
  },
  plugins: [],
};

export default config;
