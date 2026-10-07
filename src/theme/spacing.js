// -----------------------------------------------------------------------
// spacing.js
// Single source of truth for spacing, layout widths, and breakpoints.
// -----------------------------------------------------------------------

// Base spacing scale (rem-based, 4px root step)
const space = {
  0: '0',
  px: '1px',
  0.5: '0.125rem', // 2px
  1: '0.25rem', // 4px
  1.5: '0.375rem', // 6px
  2: '0.5rem', // 8px
  3: '0.75rem', // 12px
  4: '1rem', // 16px
  5: '1.25rem', // 20px
  6: '1.5rem', // 24px
  8: '2rem', // 32px
  10: '2.5rem', // 40px
  12: '3rem', // 48px
  16: '4rem', // 64px
  20: '5rem', // 80px
  24: '6rem', // 96px
  32: '8rem', // 128px
  40: '10rem', // 160px
  48: '12rem', // 192px
  56: '14rem', // 224px
  64: '16rem', // 256px
}

// Semantic aliases for common layout use-cases
const layout = {
  sectionPaddingY: space[24], // vertical padding for full page sections
  sectionPaddingX: space[6], // horizontal padding for full page sections
  containerPadding: space[4], // inner padding for cards/containers
  gutter: space[6], // gap between grid/flex items
  navHeight: space[16], // fixed navbar height
}

// Max-widths for content containers
const container = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1440px',
  prose: '65ch',
}

// Responsive breakpoints (mirrors Tailwind defaults, kept explicit here
// so JS-side logic — e.g. useMediaQuery hooks — can reference the same values)
const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
}

export const spacing = {
  space,
  layout,
  container,
  breakpoints,
}

export default spacing
