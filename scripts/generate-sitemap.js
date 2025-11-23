import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";
import { cwd } from "process";

const siteUrl = "https://mirkodonnarumma.it";

const out = join(cwd(), "dist", "sitemap.xml");

const pages = ["/"];

const urls = pages
  .map(
    (p) => `
  <url>
    <loc>${siteUrl}${p}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`,
  )
  .join("");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

mkdirSync(join(cwd(), "dist"), { recursive: true });
writeFileSync(out, xml, "utf8");

console.log("sitemap.xml generated:", out);
