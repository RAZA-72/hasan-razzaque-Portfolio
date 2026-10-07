// -----------------------------------------------------------------------
// animations.js
// Single source of truth for motion: durations, easings, and reusable
// Framer Motion variants. Import these into components instead of
// writing ad-hoc transition/variant objects inline.
// -----------------------------------------------------------------------

const duration = {
  fast: 0.2,
  base: 0.35,
  slow: 0.6,
  slower: 0.9,
}

const easing = {
  standard: [0.4, 0, 0.2, 1],
  decelerate: [0, 0, 0.2, 1],
  accelerate: [0.4, 0, 1, 1],
  bounce: [0.34, 1.56, 0.64, 1],
}

const transition = {
  fast: { duration: duration.fast, ease: easing.standard },
  base: { duration: duration.base, ease: easing.standard },
  slow: { duration: duration.slow, ease: easing.decelerate },
  spring: { type: 'spring', stiffness: 260, damping: 20 },
  springSoft: { type: 'spring', stiffness: 120, damping: 18 },
}

// Reusable Framer Motion variants — spread these directly into
// <motion.div variants={variants.fadeUp} initial="hidden" animate="visible" />
const variants = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: transition.base },
  },
  fadeUp: {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: transition.base },
  },
  fadeDown: {
    hidden: { opacity: 0, y: -24 },
    visible: { opacity: 1, y: 0, transition: transition.base },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: 24 },
    visible: { opacity: 1, x: 0, transition: transition.base },
  },
  fadeRight: {
    hidden: { opacity: 0, x: -24 },
    visible: { opacity: 1, x: 0, transition: transition.base },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1, transition: transition.spring },
  },
  staggerContainer: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  },
  pageTransition: {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0, transition: transition.base },
    exit: { opacity: 0, y: -12, transition: transition.fast },
  },
}

export const animations = {
  duration,
  easing,
  transition,
  variants,
}

export default animations
