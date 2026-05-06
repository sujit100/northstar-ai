/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        surface: '#FFFFFF',
        'text-primary': '#0A0A0A',
        'text-secondary': '#6B6B6B',
        accent: '#C2410C',
        'accent-soft': 'rgba(194, 65, 12, 0.18)',
        'border-subtle': 'rgba(10, 10, 10, 0.08)',
        'border-hover': 'rgba(10, 10, 10, 0.20)',
        'divider': 'rgba(10, 10, 10, 0.06)',
      },
      fontFamily: {
        display: ['"Inter Tight"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'tightest-2': '-0.04em',
        'tightest-3': '-0.05em',
      },
      maxWidth: {
        container: '1200px',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};
