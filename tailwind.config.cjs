// tailwind.config.cjs
// module.exports = {
//   content: [
//     "./src/**/*.{astro,html,js,ts,jsx,tsx,vue,svelte}",
//   ],
//   theme: { extend: {
//       fontFamily: {
//         sans: ['"Inter"', "system-ui", "sans-serif"],
//         mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
//       } 
//     },
//   plugins: [],
//   }
// };

module.exports = {
  content: ["./src/**/*.{astro,html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brandBg: '#0b1220',
        brandSurface: '#0f1724',
        brandText: '#e6eef8',
        brandMuted: '#94a3b8',
        brandAccent: '#7c3aed'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')],
};
