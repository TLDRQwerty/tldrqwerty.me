import colors from"tailwindcss/colors";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: colors.rose,
        gray: colors.neutral,
      },
    },
  },
  plugins: [],
}
