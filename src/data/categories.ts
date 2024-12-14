export const categories = ['All', 'Startup', 'Artist', 'Designer', 'Developer','Marketplace', 'Community', 'Collectibles'] as const;

export type Category = (typeof categories)[number];

export function isValidCategory(category: string): category is Category {
  return categories.includes(category as Category);
}