# Reframe Studio, website redesign

Astro static site. Same pages and content as reframestudio.es/en, rebuilt with a new design system and motion layer.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Pages

Every page exists in English, Spanish and French: `/en/…`, `/es/…`, `/fr/…`, the same addresses as the live site. The root `/` sends visitors to their browser's language, with Spanish as the fallback (the live site's default).

| Route | Content |
|---|---|
| `/{lang}/` | Hero, website directions, before/after, pricing + extra services, friction, audit CTA |
| `/{lang}/work/` | Four redesign studies |
| `/{lang}/work/[slug]/` | Case study: meta, cover, views (lightbox), what changed |
| `/{lang}/services/` | Service index, six services in varied layouts, process timeline, pricing link |
| `/{lang}/contact/` | Enquiry form |
| `/design-system/` | Living reference for tokens, type, grid, components, motion (English only) |

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

## Not done yet

- **Analytics:** the cookie choice is stored in `localStorage` under `reframe:cookies`. Load analytics only when it's `all`.
