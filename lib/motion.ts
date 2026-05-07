const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.5, ease: EASE },
  },
};

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export const staggerFast = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

export const clipReveal = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  show: {
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: 0.9, ease: EASE },
  },
};

export const scaleReveal = {
  hidden: { scale: 1.06 },
  show: {
    scale: 1,
    transition: { duration: 0.9, ease: EASE },
  },
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -32 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 32 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};
