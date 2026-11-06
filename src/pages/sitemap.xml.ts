/** sitemap.xml: every real page in all three languages, with hreflang alternates.
    Redirect pages and the 404 are left out on purpose. */
import type { APIRoute } from 'astro';
import { langs, defaultLang } from '../i18n';
import { legalDocs } from '../i18n/legal';
import { projects } from '../data/site';

const paths = [
  '/', '/services/', '/work/', '/contact/',
  ...projects.map((p) => `/work/${p.slug}/`),
  ...legalDocs.map((d) => `/legal/${d}/`),
];

export const GET: APIRoute = ({ site }) => {
  const url = (lang: string, path: string) => new URL(`/${lang}${path}`, site).href;
  const today = new Date().toISOString().slice(0, 10);
  const entries = paths.flatMap((path) => langs.map((lang) => {
    const alts = langs.map((l) => `<xhtml:link rel="alternate" hreflang="${l}" href="${url(l, path)}"/>`).join('')
      + `<xhtml:link rel="alternate" hreflang="x-default" href="${url(defaultLang, path)}"/>`;
    const priority = path === '/' ? '1.0' : path.startsWith('/legal') ? '0.3' : '0.8';
    return `<url><loc>${url(lang, path)}</loc>${alts}<lastmod>${today}</lastmod><priority>${priority}</priority></url>`;
  }));
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${entries.join('\n')}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
};
