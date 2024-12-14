// Default fallback image for teams without images
export const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800';

// Image loading states
export const IMAGE_STATES = {
  LOADING: 'loading',
  LOADED: 'loaded',
  ERROR: 'error',
} as const;

export type ImageState = typeof IMAGE_STATES[keyof typeof IMAGE_STATES];