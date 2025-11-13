//module.exports = {
//  content: ["./src/**/*.{astro,html,js,ts,jsx,tsx}"],
//  theme: {
//    extend: {
//      colors: {
//        brandBg: '#0b1220',
//        brandSurface: '#0f1724',
//        brandText: '#e6eef8',
//        brandMuted: '#94a3b8',
//        brandAccent: '#7c3aed'
//      }
//    }
//  },
//  plugins: [require('@tailwindcss/typography')],
//};

module.exports = {
  content: ["./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}"],
  safelist: [
    // se usi classi costruite dinamicamente
    'bg-surface', 'text-muted', 'rounded-xl', 'p-4', 'card', 'reveal'
  ],
  theme: { extend: {} },
  plugins: []
}
