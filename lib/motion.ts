const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];
const EASE_SLOW = [0.16, 1, 0.3, 1] as [number, number, number, number];

export const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.0, ease: EASE },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.9, ease: EASE },
  },
};

export const atmosphericFade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 1.6, ease: EASE_SLOW },
  },
};

export const slowDrift = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.4, ease: EASE_SLOW },
  },
};

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.16 } },
};

export const staggerFast = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

export const staggerSlow = {
  hidden: {},
  show: { transition: { staggerChildren: 0.22 } },
};

export const clipReveal = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  show: {
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: 1.2, ease: EASE },
  },
};

export const scaleReveal = {
  hidden: { scale: 1.06, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1.4, ease: EASE_SLOW },
  },
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -24 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.0, ease: EASE },
  },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 24 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.0, ease: EASE },
  },
};

export const cinematicReveal = {
  hidden: { clipPath: "inset(0 0 100% 0)" },
  show: {
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 1.4, ease: EASE_SLOW },
  },
};

export const revealLine = {
  hidden: { scaleX: 0 },
  show: {
    scaleX: 1,
    transition: { duration: 0.9, ease: EASE, delay: 0.3 },
  },
};

export const annotationReveal = {
  hidden: { opacity: 0, x: -10 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};
