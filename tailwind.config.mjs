const sansStack = ['Inter Variable', 'Inter', 'system-ui', 'sans-serif'];
const monoStack = ['JetBrains Mono Variable', 'JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'];

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,md,mdx,js,jsx,ts,tsx}', './public/**/*.html'],
  theme: {
    extend: {
      colors: {
        surface: {
          950: '#020617',
          900: '#0f172a',
          800: '#1e293b',
          700: '#334155'
        },
        primary: {
          300: '#a78bfa',
          400: '#8b5cf6',
          500: '#7c3aed',
          600: '#6d28d9'
        },
        accent: {
          400: '#93c5fd',
          500: '#60a5fa',
          600: '#2563eb'
        },
        neutral: {
          50: '#f8fafc',
          100: '#e2e8f0',
          200: '#cbd5f5',
          300: '#94a3b8',
          400: '#64748b'
        }
      },
      fontFamily: {
        sans: sansStack,
        mono: monoStack,
        display: monoStack
      },
      boxShadow: {
        card: '0 20px 55px rgba(15, 23, 42, 0.45)',
        glow: '0 0 0 4px rgba(124, 58, 237, 0.35)'
      },
      borderRadius: {
        bento: '1.75rem'
      }
    }
  }
};
