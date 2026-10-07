// -----------------------------------------------------------------------
// colors.js
// Single source of truth for every color used in the app.
// No component should ever hardcode a hex/rgb/hsl value — import
// colors from `theme` (see src/theme/index.js) instead.
//
// These values are mirrored as CSS variables in `src/styles/index.css`
// (inside the Tailwind `@theme` block) so that both plain JS usage
// (inline styles, Framer Motion, canvas, etc.) and Tailwind utility
// classes (bg-primary-500, text-neutral-900, ...) stay in sync.
// If you change a value here, update it there too.
// -----------------------------------------------------------------------

// Brand / primary scale
const primary = {
  50: '#eef2ff',
  100: '#e0e7ff',
  200: '#c7d2fe',
  300: '#a5b4fc',
  400: '#818cf8',
  500: '#6366f1',
  600: '#4f46e5',
  700: '#4338ca',
  800: '#3730a3',
  900: '#312e81',
  950: '#1e1b4b',
}

// Secondary / accent scale (used for highlights, CTAs, gradients)
const secondary = {
  50: '#fdf4ff',
  100: '#fae8ff',
  200: '#f5d0fe',
  300: '#f0abfc',
  400: '#e879f9',
  500: '#d946ef',
  600: '#c026d3',
  700: '#a21caf',
  800: '#86198f',
  900: '#701a75',
  950: '#4a044e',
}

// Neutral / gray scale (text, borders, backgrounds)
const neutral = {
  0: '#ffffff',
  50: '#fafafa',
  100: '#f4f4f5',
  200: '#e4e4e7',
  300: '#d4d4d8',
  400: '#a1a1aa',
  500: '#71717a',
  600: '#52525b',
  700: '#3f3f46',
  800: '#27272a',
  900: '#18181b',
  950: '#09090b',
  1000: '#000000',
}

// Semantic / status colors
const semantic = {
  success: {
    light: '#4ade80',
    DEFAULT: '#22c55e',
    dark: '#15803d',
  },
  warning: {
    light: '#fbbf24',
    DEFAULT: '#f59e0b',
    dark: '#b45309',
  },
  error: {
    light: '#f87171',
    DEFAULT: '#ef4444',
    dark: '#b91c1c',
  },
  info: {
    light: '#38bdf8',
    DEFAULT: '#0ea5e9',
    dark: '#0369a1',
  },
}

// Surface / background tokens, split by theme mode
const surface = {
  light: {
    background: neutral[0],
    backgroundAlt: neutral[50],
    surface: neutral[0],
    surfaceAlt: neutral[100],
    border: neutral[200],
  },
  dark: {
    background: neutral[950],
    backgroundAlt: neutral[900],
    surface: neutral[900],
    surfaceAlt: neutral[800],
    border: neutral[700],
  },
}

// Text tokens, split by theme mode
const text = {
  light: {
    primary: neutral[900],
    secondary: neutral[600],
    muted: neutral[400],
    inverted: neutral[0],
  },
  dark: {
    primary: neutral[50],
    secondary: neutral[300],
    muted: neutral[500],
    inverted: neutral[950],
  },
}

// Overlay / misc utility colors (modals, glass panels, scrims)
const overlay = {
  scrim: 'rgba(9, 9, 11, 0.6)',
  glassLight: 'rgba(255, 255, 255, 0.08)',
  glassDark: 'rgba(0, 0, 0, 0.25)',
  transparent: 'transparent',
  currentColor: 'currentColor',
}

// Social / brand icon colors (for React Icons, if ever needed at brand color)
const social = {
  github: '#181717',
  linkedin: '#0a66c2',
  twitter: '#1da1f2',
  instagram: '#e4405f',
  youtube: '#ff0000',
  dribbble: '#ea4c89',
}

export const colors = {
  primary,
  secondary,
  neutral,
  semantic,
  surface,
  text,
  overlay,
  social,
}

export default colors
