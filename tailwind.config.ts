import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1rem', md: '2rem', lg: '3rem' },
      screens: { '2xl': '1400px' },
    },
    extend: {
      colors: {
        gold: {
          DEFAULT: '#D4AF37',
          50: '#FBF6E4',
          100: '#F5E9B8',
          200: '#EBD27D',
          300: '#E0BB55',
          400: '#D4AF37',
          500: '#B8932A',
          600: '#8F711E',
          700: '#6B5417',
          800: '#473810',
          900: '#231C08',
        },
        crimson: {
          DEFAULT: '#A00000',
          50: '#FBE5E5',
          100: '#F4BABA',
          200: '#E97373',
          300: '#D33B3B',
          400: '#A00000',
          500: '#800000',
          600: '#600000',
          700: '#400000',
        },
        charcoal: {
          DEFAULT: '#121212',
          50: '#2A2A2A',
          100: '#1F1F1F',
          200: '#181818',
          300: '#121212',
          400: '#0C0C0C',
          500: '#080808',
        },
        cream: '#F5EBD9',
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        urdu: ['var(--font-noto-nastaliq)', 'serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #F5E9B8 50%, #D4AF37 100%)',
        'gold-radial': 'radial-gradient(circle at 50% 50%, rgba(212,175,55,0.25), transparent 70%)',
        'crimson-gold': 'linear-gradient(135deg, #A00000 0%, #D4AF37 100%)',
        'hero-vignette': 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.85) 100%)',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'gold-glow': '0 0 40px rgba(212,175,55,0.3), 0 0 80px rgba(212,175,55,0.15)',
        'gold-soft': '0 8px 30px rgba(212,175,55,0.2)',
        'crimson-glow': '0 0 40px rgba(160,0,0,0.4)',
        'premium': '0 25px 50px -12px rgba(0,0,0,0.7), 0 0 0 1px rgba(212,175,55,0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'fade-up': 'fadeUp 0.8s ease-out',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
        'steam': 'steam 4s ease-out infinite',
        'scroll-down': 'scrollDown 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(212,175,55,0.7)' },
          '50%': { boxShadow: '0 0 0 16px rgba(212,175,55,0)' },
        },
        steam: {
          '0%': { opacity: '0', transform: 'translateY(0) scale(1)' },
          '50%': { opacity: '0.6' },
          '100%': { opacity: '0', transform: 'translateY(-60px) scale(1.5)' },
        },
        scrollDown: {
          '0%': { transform: 'translateY(-6px)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateY(6px)', opacity: '0' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
