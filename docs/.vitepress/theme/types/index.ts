/**
 * Central Type Definitions for SPOONI Development Theme
 * 
 * This file contains all shared type definitions used across the theme.
 * Importing from this central location ensures type consistency and maintainability.
 */

/**
 * Represents a single prop item in the gallery
 */
export interface Prop {
  /** Unique identifier for the prop */
  id: string;
  /** Main category the prop belongs to */
  category: string;
  /** Optional subcategory for more specific classification */
  subcategory?: string;
}

/**
 * Represents a subcategory with metadata
 */
export interface Subcategory {
  /** Name of the subcategory */
  name: string;
  /** Number of props in this subcategory */
  count: number;
}

/**
 * Represents a category with its subcategories and metadata
 */
export interface Category {
  /** Name of the category */
  name: string;
  /** Total number of props in this category */
  count: number;
  /** Array of subcategories belonging to this category */
  subcategories: Subcategory[];
}

/**
 * Page number or ellipsis in pagination
 */
export type PageIndicator = number | '...';

/**
 * Scroll behavior options for navigation
 */
export type ScrollBehaviorOption = 'auto' | 'smooth';

/**
 * Return type for composables that manage loading states
 */
export interface LoadingState<T> {
  /** The loaded data */
  data: T;
  /** Whether the data is currently being loaded */
  isLoading: boolean;
  /** Error object if loading failed */
  error: Error | null;
}

/**
 * Pagination state and controls
 */
export interface PaginationState<T> {
  /** Current active page number (1-indexed) */
  currentPage: number;
  /** Total number of pages */
  totalPages: number;
  /** Items for the current page */
  paginatedItems: T[];
  /** Visible page indicators for pagination UI */
  visiblePages: PageIndicator[];
  /** Function to navigate to a specific page */
  goToPage: (page: number) => void;
}

/**
 * Filter state for prop gallery
 */
export interface FilterState {
  /** Search query string */
  searchQuery: string;
  /** Selected category (or 'all') */
  selectedCategory: string;
  /** Selected subcategory (or 'all') */
  selectedSubcategory: string;
}

/**
 * Gallery control state
 */
export interface GalleryControls {
  /** Number of items to show per page */
  itemsPerPage: number;
  /** Number of columns in the grid layout */
  columnsPerRow: number;
}

/**
 * Constants type extraction helpers
 */
export type ConstantValues<T> = T[keyof T];
export type ReadonlyDeep<T> = {
  readonly [K in keyof T]: T[K] extends Record<string, unknown>
    ? ReadonlyDeep<T[K]>
    : T[K];
};

