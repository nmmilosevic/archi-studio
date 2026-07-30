import type { Transition, Variants } from "framer-motion";

export const motionEase = {
  out: [0.19, 1, 0.22, 1],
  expressive: [0.16, 1, 0.3, 1],
  opacity: [0.33, 1, 0.68, 1],
} as const;

export const motionDuration = {
  instant: 0.16,
  fast: 0.24,
  standard: 0.42,
  reveal: 0.72,
  image: 1,
  cinematic: 1.2,
} as const;

export const motionDistance = {
  text: 12,
  section: 18,
  imageScale: 1.035,
  control: 2,
} as const;

export const motionViewport = {
  once: true,
  margin: "0px 0px -12% 0px",
} as const;

export const defaultTransition: Transition = {
  type: "tween",
  duration: motionDuration.standard,
  ease: motionEase.out,
};

type RevealOptions = {
  delay?: number;
  duration?: number;
  distance?: number;
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: (custom: number | RevealOptions = 0) => {
    const options = typeof custom === "number" ? { delay: custom } : custom;

    return {
      opacity: 1,
      y: 0,
      transition: {
        duration: options.duration ?? motionDuration.reveal,
        delay: options.delay ?? 0,
        ease: motionEase.expressive,
      },
    };
  },
};

export const textReveal: Variants = {
  hidden: { opacity: 0, y: motionDistance.text },
  show: (custom: RevealOptions = {}) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: custom.duration ?? motionDuration.reveal,
      delay: custom.delay ?? 0,
      ease: motionEase.expressive,
    },
  }),
};

export const uiReveal: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.992 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.56,
      delay,
      ease: motionEase.out,
    },
  }),
};

export const titleContainer: Variants = {
  hidden: {},
  show: (delay = 0) => ({
    transition: {
      delayChildren: delay,
      staggerChildren: 0.04,
    },
  }),
};

export const titleWord: Variants = {
  hidden: { opacity: 0, y: "72%" },
  show: {
    opacity: 1,
    y: "0%",
    transition: {
      duration: 0.62,
      ease: motionEase.out,
    },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: motionDuration.reveal,
      ease: motionEase.opacity,
    },
  },
};

export const atmosphericFade: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: motionDuration.cinematic,
      ease: motionEase.expressive,
    },
  },
};

export const slowDrift: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionDuration.image,
      ease: motionEase.expressive,
    },
  },
};

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

export const staggerFast: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.065 } },
};

export const staggerSlow: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export const mediaReveal: Variants = {
  hidden: { opacity: 0, scale: 1.025 },
  show: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.82,
      delay,
      ease: motionEase.expressive,
    },
  }),
};

export const scaleReveal = mediaReveal;

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: motionDuration.reveal,
      ease: motionEase.expressive,
    },
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: motionDuration.reveal,
      ease: motionEase.expressive,
    },
  },
};

export const cinematicReveal: Variants = {
  hidden: { opacity: 0, y: 28, scale: 1.015 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: motionDuration.cinematic,
      ease: motionEase.expressive,
    },
  },
};

export const revealLine: Variants = {
  hidden: { scaleX: 0 },
  show: {
    scaleX: 1,
    transition: {
      duration: motionDuration.reveal,
      ease: motionEase.expressive,
      delay: 0.12,
    },
  },
};

export const annotationReveal: Variants = {
  hidden: { opacity: 0, x: -10 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: motionDuration.standard,
      ease: motionEase.out,
    },
  },
};
