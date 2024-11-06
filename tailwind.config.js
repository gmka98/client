/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        backgroundImage: {
          'custom-gradient': 'linear-gradient(13deg, rgba(153,153,153,1) 0%, rgba(207,207,207,1) 28%, rgba(255,255,255,1) 53%, rgba(255,255,255,1) 68%, rgba(156,156,156,1) 95%)',
        },
      },
    },
  },
  plugins: [],
};
