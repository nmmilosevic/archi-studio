/**
 * Reframe motion system
 * ---------------------------------------------------------------
 * One vocabulary, applied by data attributes:
 *   data-split            heading lines rise out of a mask
 *   data-fade             element fades up
 *   data-stagger          direct children fade up in sequence
 *   data-reveal           image frame opens with a clip curtain
 *   data-parallax="0.08"  inner image drifts while scrolling (max .12)
 * Adding ="intro" to split/fade/stagger/reveal plays it on page load
 * (as a single choreographed sequence) instead of on scroll.
 *
 * Rules: every element reveals once, from the same direction (up).
 * Only images scrub with scroll. Nothing loops.
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger, SplitText);

declare global {
  interface Window { __reveal?: Promise<boolean>; lenis?: Lenis }
}

const root = document.documentElement;
export const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

export const EASE = 'expo.out';
export const CURTAIN = 'expo.inOut';
const START = 'top 88%';
const $$ = <T extends Element = HTMLElement>(s: string, ctx: ParentNode = document) => Array.from(ctx.querySelectorAll<T>(s));
const isIntro = (el: HTMLElement, attr: string) => el.getAttribute(attr) === 'intro';

/* ---------------------------------------------------------------- scroll */
function smoothScroll() {
  const lenis = new Lenis({ lerp: 0.105, wheelMultiplier: 0.95, anchors: { offset: -80 } });
  window.lenis = lenis;
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
}

/* ---------------------------------------------------------------- text */
function splitLines(el: HTMLElement, tl?: gsap.core.Timeline, at = 0) {
  gsap.set(el, { visibility: 'visible' });
  SplitText.create(el, {
    type: 'lines',
    mask: 'lines',
    linesClass: 'line',
    autoSplit: true,
    onSplit(self) {
      const tween = gsap.from(self.lines, {
        yPercent: 110,
        duration: 1.15,
        ease: EASE,
        stagger: 0.085,
        paused: !!tl,
        scrollTrigger: tl ? undefined : { trigger: el, start: START, toggleActions: 'play none none none' },
      });
      if (tl) tl.add(tween.play(), at);
      return tween;
    },
  });
}

/* ---------------------------------------------------------------- elements */
const fadeVars = { opacity: 1, y: 0, duration: 1.1, ease: EASE };

function fade(el: HTMLElement, tl?: gsap.core.Timeline, at = 0) {
  const tween = gsap.to(el, { ...fadeVars, paused: !!tl, scrollTrigger: tl ? undefined : { trigger: el, start: START } });
  if (tl) tl.add(tween.play(), at);
}

function stagger(el: HTMLElement, tl?: gsap.core.Timeline, at = 0) {
  const kids = Array.from(el.children);
  const tween = gsap.to(kids, { ...fadeVars, stagger: 0.075, paused: !!tl, scrollTrigger: tl ? undefined : { trigger: el, start: START } });
  if (tl) tl.add(tween.play(), at);
}

/* ---------------------------------------------------------------- images */
function reveal(el: HTMLElement, tl?: gsap.core.Timeline, at = 0) {
  const img = el.querySelector('img');
  const t = gsap.timeline({ paused: !!tl, scrollTrigger: tl ? undefined : { trigger: el, start: 'top 92%' } });
  t.fromTo(el, { clipPath: 'inset(100% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.3, ease: CURTAIN }, 0);
  if (img) t.fromTo(img, { scale: 1.22 }, { scale: 1, duration: 1.9, ease: EASE }, 0.1);
  if (tl) tl.add(t.play(), at);
}

function parallax(inner: HTMLElement) {
  const amt = Math.min(parseFloat(inner.dataset.parallax || '0'), 0.12) * 50;
  const frame = inner.parentElement!;
  gsap.fromTo(inner, { yPercent: -amt }, {
    yPercent: amt, ease: 'none',
    scrollTrigger: { trigger: frame, start: 'top bottom', end: 'bottom top', scrub: true },
  });
}

/* ---------------------------------------------------------------- header */
function header() {
  const h = document.querySelector<HTMLElement>('[data-header]');
  if (!h) return;
  let last = scrollY;
  const update = () => {
    const y = scrollY;
    h.toggleAttribute('data-scrolled', y > 24);
    if (Math.abs(y - last) < 8) return;
    h.toggleAttribute('data-hidden', y > last && y > 320);
    last = y;
  };
  addEventListener('scroll', update, { passive: true });
  update();
  // Reveal the header when focus enters it from the keyboard
  h.addEventListener('focusin', () => h.removeAttribute('data-hidden'));
}

/* ---------------------------------------------------------------- menu */
function menu() {
  const toggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
  const panel = document.querySelector<HTMLElement>('[data-menu]');
  const h = document.querySelector<HTMLElement>('[data-header]');
  if (!toggle || !panel || !h) return;
  const links = $$('[data-menu-link], [data-menu-foot]', panel);
  let open = false;

  const set = (next: boolean) => {
    open = next;
    toggle.setAttribute('aria-expanded', String(open));
    h.toggleAttribute('data-menu-open', open);
    gsap.killTweensOf([panel, ...links]);
    if (open) {
      panel.hidden = false;
      window.lenis?.stop();
      gsap.fromTo(panel, { clipPath: 'inset(0% 0% 100% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: reduced ? 0 : 0.9, ease: CURTAIN });
      gsap.fromTo(links, { y: 48, opacity: 0 }, { y: 0, opacity: 1, duration: reduced ? 0 : 1, ease: EASE, stagger: 0.06, delay: reduced ? 0 : 0.35 });
    } else {
      window.lenis?.start();
      gsap.to(panel, {
        clipPath: 'inset(0% 0% 100% 0%)', duration: reduced ? 0 : 0.7, ease: CURTAIN,
        onComplete: () => { panel.hidden = true; },
      });
    }
  };
  toggle.addEventListener('click', () => set(!open));
  addEventListener('keydown', (e) => { if (e.key === 'Escape' && open) { set(false); toggle.focus(); } });
  matchMedia('(min-width: 900px)').addEventListener('change', (e) => { if (e.matches && open) set(false); });
}

/* ---------------------------------------------------------------- misc */
function utilities() {
  $$('[data-to-top]').forEach((b) => b.addEventListener('click', () => {
    window.lenis ? window.lenis.scrollTo(0, { duration: 1.6 }) : scrollTo({ top: 0, behavior: 'smooth' });
  }));

  // Shared-element morph: the clicked project image becomes the next page's hero.
  $$<HTMLAnchorElement>('[data-morph-link]').forEach((a) => a.addEventListener('click', (e) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    $$('[data-morph-target]').forEach((m) => (m.style.viewTransitionName = 'none'));
    const media = a.querySelector<HTMLElement>('.media');
    if (media) media.style.viewTransitionName = 'project-hero';
    sessionStorage.setItem('reframe:morph', '1');
  }));
  addEventListener('pageshow', (e) => {
    if (e.persisted) $$('[data-morph-link] .media').forEach((m) => (m.style.viewTransitionName = ''));
  });

  // Design aid: G toggles the 12-column overlay
  const overlay = document.querySelector('.grid-overlay');
  addEventListener('keydown', (e) => {
    const t = e.target as HTMLElement;
    if (e.key.toLowerCase() !== 'g' || e.metaKey || e.ctrlKey || t.closest('input, textarea, [contenteditable]')) return;
    overlay?.classList.toggle('is-on');
  });
}

/* ---------------------------------------------------------------- icons */
function drawIcons() {
  const icons = $$<SVGElement>('[data-draw]');
  if (reduced || !('IntersectionObserver' in window)) { icons.forEach((i) => i.classList.add('is-drawn')); return; }
  const io = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (!e.isIntersecting) return;
    e.target.classList.add('is-drawn');
    io.unobserve(e.target);
  }), { threshold: 1, rootMargin: '0px 0px -22% 0px' }); // start once the icon is well inside the screen, not at the bottom edge
  icons.forEach((i) => io.observe(i));
}

/* ---------------------------------------------------------------- boot */
export const ready: Promise<void> = (async () => {
  header();
  menu();
  utilities();
  drawIcons();
  if (reduced) { root.classList.add('motion-off'); return; }

  smoothScroll();
  const viaTransition = await (window.__reveal ?? Promise.resolve(false));
  await document.fonts.ready;

  // Intro sequence: image curtain → heading lines → supporting copy
  const morphed = root.classList.contains('morph-in');
  const intro = gsap.timeline({ delay: viaTransition ? 0.5 : 0.1 });
  $$('[data-reveal="intro"]').forEach((el, i) => {
    if (morphed && el.hasAttribute('data-morph-target')) return;
    reveal(el, intro, i * 0.35);
  });
  $$('[data-split="intro"]').forEach((el, i) => splitLines(el, intro, 0.12 + i * 0.1));
  $$('[data-fade="intro"]').forEach((el, i) => fade(el, intro, 0.5 + i * 0.08));
  $$('[data-stagger="intro"]').forEach((el) => stagger(el, intro, 0.55));

  // Scroll-driven
  $$('[data-split]').forEach((el) => !isIntro(el, 'data-split') && splitLines(el));
  $$('[data-fade]').forEach((el) => !isIntro(el, 'data-fade') && fade(el));
  $$('[data-stagger]').forEach((el) => !isIntro(el, 'data-stagger') && stagger(el));
  $$('[data-reveal]').forEach((el) => !isIntro(el, 'data-reveal') && reveal(el));
  $$('[data-parallax]').forEach(parallax);

  root.classList.add('motion-ready');
  ScrollTrigger.refresh();
})();

/**
 * Page scripts add their own triggers (pins, demos) after the shared ones.
 * Re-sort by page position once everything is registered, so triggers below
 * a pinned section account for its extra scroll length.
 */
export function settle() {
  ScrollTrigger.sort();
  ScrollTrigger.refresh();
}
addEventListener('load', () => ready.then(() => setTimeout(settle, 0)));

export { gsap, ScrollTrigger };
