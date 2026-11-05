import en, { type Content } from './en';
import es from './es';
import fr from './fr';

export const langs = ['en', 'es', 'fr'] as const;
export type Lang = (typeof langs)[number];
/** Matches the live site: Spanish is the x-default. */
export const defaultLang: Lang = 'es';

const content: Record<Lang, Content> = { en, es, fr };
export const useContent = (lang: Lang) => content[lang];

/** For getStaticPaths in every [lang] route. */
export const langPaths = () => langs.map((lang) => ({ params: { lang } }));

/** Prefix a site path with a language: href(lang, '/work/') → '/es/work/' */
export const href = (lang: Lang, path = '/') => `/${lang}${path === '/' ? '/' : path}`;

/** Same page in another language: '/en/work/x/' → '/fr/work/x/' */
export const swapLang = (pathname: string, to: Lang) =>
  /^\/(en|es|fr)(\/|$)/.test(pathname) ? pathname.replace(/^\/(en|es|fr)/, `/${to}`) : `/${to}/`;

export type { Content };

/** Copy may mark an accent word as *word*; this escapes the text and turns it into <em>. */
export const rich = (text: string) =>
  text.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!)
      .replace(/\*([^*]+)\*/g, '<em>$1</em>');

/** Same copy without the accent markers (titles, alt text, meta). */
export const plain = (text: string) => text.replace(/\*/g, '');
