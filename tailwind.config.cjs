// tailwind.config.cjs
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,ts,jsx,tsx,vue,svelte}",
  ],
  theme: { extend: {
      fontFamily: {
        sans: ['"Inter"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      } 
    },
  plugins: [],
  }
};