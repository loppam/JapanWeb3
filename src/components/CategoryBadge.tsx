import React from 'react';
import type { Category } from '../data/categories';

interface CategoryBadgeProps {
  category: Category;
}

export function CategoryBadge({ category }: CategoryBadgeProps) {
  return (
    <span className="inline-block px-3 py-1 mt-2 text-sm font-medium text-indigo-800 bg-indigo-100 rounded-full">
      {category}
    </span>
  );
}