/**
 * Language-independent data: images, slugs, endpoints.
 * All text lives in src/i18n/{en,es,fr}.ts.
 */
import type { ImageMetadata } from 'astro';

import hero from '../assets/img/hero.jpg';
import heroMock from '../assets/img/heromock.jpg';
import friction from '../assets/img/imagesection.jpg';
import review from '../assets/img/review-process.jpg';

import sMediterranean from '../assets/img/styles/mediteranean.jpg';
import sOrganic from '../assets/img/styles/organic.jpg';
import sAvantforme from '../assets/img/styles/avantforme.jpg';
import sFuturistic from '../assets/img/styles/futuristic.jpg';
import sJapan from '../assets/img/styles/japan.jpg';
import sLuxury from '../assets/img/styles/luxury.jpg';
import sModernEco from '../assets/img/styles/modern-eco.jpg';
import sParisian from '../assets/img/styles/parisian.jpg';
import sDarkLuxury from '../assets/img/styles/dark-luxury.jpg';

import p01Hero from '../assets/img/work/p01-hero.jpg';
import p01Project from '../assets/img/work/p01-project.jpg';
import p01Mobile from '../assets/img/work/p01-mobileview.jpg';
import p02Hero from '../assets/img/work/p02-hero.jpg';
import p02Project from '../assets/img/work/p02-project.jpg';
import p02Mobile from '../assets/img/work/p02-mobileview.jpg';
import p03Hero from '../assets/img/work/p03-hero.jpg';
import p03Project from '../assets/img/work/p03-project.jpg';
import p03Mobile from '../assets/img/work/p03-mobileview.jpg';
import p04Hero from '../assets/img/work/p04-hero.jpg';
import p04Project from '../assets/img/work/p04-project.jpg';
import p04Mobile from '../assets/img/work/p04-mobileview.jpg';

export const img = { hero, heroMock, friction, review };

export const site = {
  name: 'Reframe Studio',
  email: 'hello@reframestudio.es',
  // Enquiries are relayed by FormSubmit (same service as the current live site)
  // to the Infomaniak mailbox above. Works on static hosting such as GitHub Pages.
  form: {
    ajax: 'https://formsubmit.co/ajax/hello@reframestudio.es',
    action: 'https://formsubmit.co/hello@reframestudio.es',
  },
  // Google Analytics 4 measurement ID (e.g. 'G-XXXXXXXXXX'). Leave empty to keep analytics off.
  // It only ever loads after the visitor clicks "Accept all" in the cookie banner.
  analytics: { ga4: 'G-BN49SL0C3D' },
};

/** Same order as `home.directions.names` in each language file. */
export const directionImages: ImageMetadata[] = [
  sMediterranean, sOrganic, sAvantforme, sFuturistic, sJapan, sLuxury, sModernEco, sParisian, sDarkLuxury,
];

/**
 * Same slugs as `projects` in each language file.
 * `design` describes each redesign as it appears in its mockups: colours were
 * sampled from the screenshots (material swatches where the mockup shows them),
 * names live in the language files (`paletteNames`).
 */
type Design = { palette: string[]; sample: string; family: 'serif' | 'sans'; dark?: boolean };
export const projects: { slug: string; cover: ImageMetadata; gallery: ImageMetadata[]; design: Design }[] = [
  { slug: 'villa-architecture-studio', cover: p01Project, gallery: [p01Hero, p01Mobile],
    design: { palette: ['#F3EEE7', '#DFCFBF', '#BBB1A5', '#977657', '#53412D', '#1C1814'], sample: 'Villa Aurora', family: 'serif' } },
  { slug: 'casa-noma-marbella', cover: p02Hero, gallery: [p02Project, p02Mobile],
    design: { palette: ['#EDE4DD', '#D1C1B2', '#CBBAA8', '#886142', '#27170A'], sample: 'Casa Lunara', family: 'serif' } },
  { slug: 'forma-sur-malaga', cover: p03Hero, gallery: [p03Project, p03Mobile],
    design: { palette: ['#171717', '#24221F', '#6E675E', '#A39B90', '#EFECE5'], sample: 'Casa Bruta', family: 'sans', dark: true } },
  { slug: 'terral-studio-estepona', cover: p04Hero, gallery: [p04Project, p04Mobile],
    design: { palette: ['#E9E5DC', '#C9B48E', '#8A8C6A', '#8F86A8', '#343621'], sample: 'Jardín Verde', family: 'serif' } },
];

/** Homepage "Studios we design for": one case study per studio type, same order as `home.studios.labels`. */
export const studioSlugs = ['villa-architecture-studio', 'casa-noma-marbella', 'terral-studio-estepona'];

export const serviceImages = { redesign: p01Hero, interiors: p02Project };
