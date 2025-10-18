/**
 * Theme Constants
 * Centralized configuration values for the SPOONI Development theme
 */

/* ========================================
   Pagination Constants
   ======================================== */

export const PAGINATION = {
  DEFAULT_ITEMS_PER_PAGE: 50,
  ITEMS_PER_PAGE_OPTIONS: [25, 50, 100, 200],
  MAX_VISIBLE_PAGES: 7,
} as const;

/* ========================================
   Image Loading Constants
   ======================================== */

export const IMAGE_LOADING = {
  LAZY_LOAD_ROOT_MARGIN: '50px',
  ZOOM_INIT_DELAY: 500,
  ZOOM_INIT_DELAY_MOUNT: 1000,
  ZOOM_BACKGROUND: 'rgba(0, 0, 0, 0.8)',
  ZOOM_MARGIN: 24,
  ZOOM_SCROLL_OFFSET: 0,
} as const;

/* ========================================
   Clipboard Constants
   ======================================== */

export const CLIPBOARD = {
  COPIED_FEEDBACK_DURATION: 2000, // 2 seconds
} as const;

/* ========================================
   Props Gallery Constants
   ======================================== */

export const PROPS_GALLERY = {
  TOTAL_PROPS_ESTIMATE: 15000,
  PROPS_API_BASE_URL: 'https://spooni.de/docs-props-img',
} as const;

/* ========================================
   Layout Constants
   ======================================== */

export const LAYOUT = {
  SIDEBAR_WIDTH: 280,
  SIDEBAR_STICKY_TOP_OFFSET: 80,
  SIDEBAR_MAX_HEIGHT_OFFSET: 100,
  MOBILE_BREAKPOINT: 1200,
} as const;

/* ========================================
   Animation Constants
   ======================================== */

export const ANIMATION = {
  DEFAULT_TRANSITION_DURATION: 200, // ms
  SMOOTH_SCROLL_BEHAVIOR: 'smooth',
} as const;

