// -----------------------------------------------------------------------
// gradients.js
// Single source of truth for gradients. Built from colors.js so gradient
// stops always stay in sync with the palette — never hardcode a color
// inside a gradient string outside of this file.
// -----------------------------------------------------------------------

import { colors } from './colors'

export const gradients = {
  // Primary brand gradient — hero headings, CTA buttons
  primary: `linear-gradient(135deg, ${colors.primary[500]} 0%, ${colors.secondary[500]} 100%)`,

  // Subtle version for large backgrounds / section washes
  primarySoft: `linear-gradient(135deg, ${colors.primary[100]} 0%, ${colors.secondary[100]} 100%)`,

  // Radial glow, useful behind hero art or avatar
  radialGlow: `radial-gradient(circle at center, ${colors.primary[400]} 0%, transparent 70%)`,

  // Text gradient (pair with bg-clip-text in the component)
  text: `linear-gradient(90deg, ${colors.primary[400]} 0%, ${colors.secondary[400]} 100%)`,

  // Dark-mode page background wash
  darkSurface: `linear-gradient(180deg, ${colors.neutral[950]} 0%, ${colors.neutral[900]} 100%)`,

  // Light-mode page background wash
  lightSurface: `linear-gradient(180deg, ${colors.neutral[0]} 0%, ${colors.neutral[50]} 100%)`,

  // Fade-to-transparent overlay, e.g. over hero images for text legibility
  overlayFade: `linear-gradient(180deg, transparent 0%, ${colors.overlay.scrim} 100%)`,

  // Border gradient (use as background on a wrapper with padding, mask-composite trick)
  border: `linear-gradient(135deg, ${colors.primary[500]} 0%, ${colors.secondary[500]} 100%)`,
}

export default gradients
