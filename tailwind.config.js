/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'cognio-primary': '#2f6fd5',
        'cognio-dark': '#0e1020',
        'cognio-light': '#f6f3f0',
        'cognio-section': '#ebe7e4',
      },
      fontFamily: {
        primary: ['GT Standard Extended', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
