import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-orbitron)', 'sans-serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#04010d',
        cosmos: '#0a0118',
        nebula: '#1a0b3a',
        wa: '#25D366',
        wadark: '#128C7E',
      },
      boxShadow: {
        glow: '0 0 40px rgba(139, 92, 246, 0.45)',
        glowRose: '0 0 30px rgba(244, 63, 94, 0.5)',
        glowWa: '0 0 25px rgba(37, 211, 102, 0.55)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-med': 'float 5s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
