/**
 * Formats category names for display
 * Replaces underscores with spaces and capitalizes first letters
 * 
 * @param category - Category name to format
 * @returns Formatted category name
 */
export function formatCategory(category: string): string {
  if (!category) return '';
  
  return category
    .replace(/_/g, ' ')
    .replace(/\b\w/g, char => char.toUpperCase());
}

