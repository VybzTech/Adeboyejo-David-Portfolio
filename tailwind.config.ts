import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--color-background) / <alpha-value>)',
        foreground: 'rgb(var(--color-foreground) / <alpha-value>)',
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
      },
      boxShadow: {
        'neumorphic-light': '4px 4px 8px rgba(0, 0, 0, 0.3), -2px -2px 6px rgba(255, 255, 255, 0.05)',
        'neumorphic-dark': '-4px -4px 8px rgba(0, 0, 0, 0.4), 2px 2px 6px rgba(255, 255, 255, 0.08)',
        'glow-cyan': '0 0 20px rgba(0, 240, 255, 0.4)',
        'glow-cyan-strong': '0 0 40px rgba(0, 240, 255, 0.6), inset 0 0 20px rgba(0, 240, 255, 0.1)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};

export default config;
