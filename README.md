# Reframe Studio, website redesign

Astro static site for [reframestudio.es](https://reframestudio.es), in English, Spanish and French.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Pages

Every page exists in English, Spanish and French: `/en/…`, `/es/…`, `/fr/…`, the same addresses as the live site. The root `/` sends visitors to their browser's language, with Spanish as the fallback (the live site's default).

| Route | Content |
|---|---|
| `/{lang}/` | Hero, nine directions, studios, pricing + extra services, FAQ |
| `/{lang}/work/` and `/{lang}/work/[slug]/` | Four redesign studies |
| `/{lang}/services/` | Web, brand, print, social & marketing, everything in between, process |
| `/{lang}/contact/` | Enquiry form |
| `/{lang}/legal/{privacy,terms,cookies}/` | Legal pages |
| `/{lang}/pricing/`, `/audit/`, `/search-visibility/` | Redirects for URLs from the previous site |
| `/404.html`, `/sitemap.xml`, `/robots.txt` | 404 (all three languages), sitemap with hreflang, robots |

`src/pages/_design-system.astro` is an internal design reference and is not published (the underscore keeps it out of the build).

The EN / ES / FR switch keeps you on the same page in the other language.

## Where things live

- `src/i18n/en.ts`, `es.ts`, `fr.ts`: all text, one file per language. ES and FR are typed against EN, so a missing string fails the build.
- `src/data/site.ts`: images, project slugs, form endpoint (no text)
- `src/pages/[lang]/`: one template per page, shared by all three languages
- `src/styles/tokens.css`: colour, type, grid, spacing, motion tokens
- `src/styles/global.css`: base styles, grid, buttons, links, motion start states, page transitions
- `src/scripts/motion.ts`: smooth scroll, reveals, header and menu behaviour
- `DESIGN.md`: the design system spec

## Contact form

Enquiries are emailed to **hello@reframestudio.es** (the Infomaniak mailbox) through [FormSubmit](https://formsubmit.co), the same service the current live site uses. It needs no server, so it works on GitHub Pages.

- **The email:** subject "New enquiry: {studio or name}", fields in a table. Replying goes straight to the visitor (`_replyto`).
- **Spam:** a hidden honeypot field plus a 2.5s minimum fill time. Bots see a fake success and nothing is sent.
- **Without JavaScript:** the form posts directly and FormSubmit redirects back to `/{lang}/contact/?sent=1`, which shows the thank-you state.
- **The endpoint:** set in `src/data/site.ts` under `site.form`. The email subject is tagged with the language, e.g. `New enquiry (ES): Studio name`.
- **First submission from a new domain:** FormSubmit may email hello@reframestudio.es an activation link. Click it once, then submissions arrive normally. Check the Infomaniak spam folder the first time.
- **Optional:** in that activation email FormSubmit offers a random alias. Swap it into `site.form` to keep the address out of the page's code.

## Analytics

Google Analytics 4 is wired in but **off** until you add a measurement ID in `src/data/site.ts` (`analytics.ga4`). It only loads after the visitor clicks "Accept all" in the cookie banner; "Reject all" loads nothing.

## Deploy

Pushing to `main` builds the site with GitHub Actions (`.github/workflows/pages.yml`) and publishes `dist/` to GitHub Pages. The custom domain comes from `public/CNAME` (`reframestudio.es`); HTTPS is enforced in the repository's Pages settings.
