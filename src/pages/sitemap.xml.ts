// The live site's sitemap has always been /sitemap.xml, and search engines know that address.
// The sitemap integration writes sitemap-index.xml and sitemap-0.xml; this serves the same index
// at the old address, so the old hand-written file is replaced and never left behind stale.
import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const loc = new URL('sitemap-0.xml', site).href;
  const body =
    '<?xml version="1.0" encoding="UTF-8"?>' +
    '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' +
    `<sitemap><loc>${loc}</loc></sitemap>` +
    '</sitemapindex>\n';
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
