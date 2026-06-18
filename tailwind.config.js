export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          50: '#FAF8F5',
          100: '#F8F5F0',
          200: '#F1EDE7',
          300: '#E5DFD6',
          400: '#D6CEC1',
          500: '#C8A96A',
          600: '#B89960',
          700: '#9D8040',
          800: '#6B5B3F',
          900: '#3A311E'
        },
        dark: {
          950: '#000000',
          900: '#080808',
          800: '#0d0d0d',
          700: '#111111',
          600: '#1a1a1a',
          500: '#222222',
          400: '#333333',
          300: '#555555',
          200: '#888888',
          100: '#aaaaaa'
        },
        neural: {
          accent: '#00fff7',
          pink: '#ff2d78',
          purple: '#a855f7',
          glow: '#00fff740'
        }
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
      },
      fontFamily: {
        'sans': ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'base': '0 4px 12px 0 rgba(0, 0, 0, 0.08)',
        'md': '0 8px 16px 0 rgba(0, 0, 0, 0.1)',
        'lg': '0 12px 24px 0 rgba(0, 0, 0, 0.12)',
        'premium': '0 20px 40px 0 rgba(0, 255, 247, 0.08)',
        'neural': '0 0 30px 0 rgba(0, 255, 247, 0.15)',
        'neural-pink': '0 0 30px 0 rgba(255, 45, 120, 0.2)',
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(10px)',
        'blur-md': 'blur(12px)',
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #000000 0%, #0d0d0d 100%)',
        'gradient-neural': 'linear-gradient(135deg, #ff2d78 0%, #a855f7 50%, #00fff7 100%)',
        'gradient-text': 'linear-gradient(135deg, #00fff7 0%, #a855f7 50%, #ff2d78 100%)',
      }
    }
  },
  plugins: []
}
