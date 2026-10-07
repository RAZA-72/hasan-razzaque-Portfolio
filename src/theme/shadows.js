// -----------------------------------------------------------------------
// shadows.js
// Single source of truth for box-shadows. Shadow tints are derived from
// colors.js rather than hardcoded, so they stay in sync with the palette.
// -----------------------------------------------------------------------

import { colors } from './colors'

// Convert a hex color to an "r, g, b" string for use inside rgba().
const hexToRgbString = (hex) => {
  const clean = hex.replace('#', '')
  const bigint = parseInt(clean, 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255
  return `${r}, ${g}, ${b}`
}

const neutralRgb = hexToRgbString(colors.neutral[900])
const primaryRgb = hexToRgbString(colors.primary[500])
const secondaryRgb = hexToRgbString(colors.secondary[500])

export const shadows = {
  none: 'none',
  xs: `0 1px 2px 0 rgba(${neutralRgb}, 0.05)`,
  sm: `0 1px 3px 0 rgba(${neutralRgb}, 0.1), 0 1px 2px -1px rgba(${neutralRgb}, 0.1)`,
  md: `0 4px 6px -1px rgba(${neutralRgb}, 0.1), 0 2px 4px -2px rgba(${neutralRgb}, 0.1)`,
  lg: `0 10px 15px -3px rgba(${neutralRgb}, 0.1), 0 4px 6px -4px rgba(${neutralRgb}, 0.1)`,
  xl: `0 20px 25px -5px rgba(${neutralRgb}, 0.1), 0 8px 10px -6px rgba(${neutralRgb}, 0.1)`,
  '2xl': `0 25px 50px -12px rgba(${neutralRgb}, 0.25)`,
  inner: `inset 0 2px 4px 0 rgba(${neutralRgb}, 0.06)`,

  // Colored "glow" shadows, handy for CTAs, active nav links, hover states
  glowPrimary: `0 8px 24px 0 rgba(${primaryRgb}, 0.35)`,
  glowSecondary: `0 8px 24px 0 rgba(${secondaryRgb}, 0.35)`,

  // Soft elevation used for cards sitting on a light/dark surface
  card: `0 2px 8px 0 rgba(${neutralRgb}, 0.08)`,
  cardHover: `0 12px 28px 0 rgba(${neutralRgb}, 0.16)`,
}

export default shadows
