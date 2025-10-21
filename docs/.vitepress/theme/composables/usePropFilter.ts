import { computed, type Ref, type ComputedRef, unref } from "vue";
import Fuse from 'fuse.js';
import type { Prop } from '../types';

/**
 * Fuse.js configuration for optimal fuzzy search
 */
const fuseOptions = {
  keys: ['id'],
  threshold: 0.4,
  distance: 100,
  minMatchCharLength: 2,
  ignoreLocation: true,
  useExtendedSearch: false,
  findAllMatches: false,
  includeScore: true,
  shouldSort: true,
};

/**
 * Composable for prop filtering with fuzzy search support
 * 
 * Uses Fuse.js for error-tolerant search:
 * - Finds props even with typos
 * - Partial matching (e.g. "barel" finds "barrel")
 * - Results sorted by relevance
 */
export function usePropFilter(
  propData: Prop[] | Ref<Prop[]>,
  searchQuery: Ref<string>,
  _selectedCategory: Ref<string>,
  selectedSubcategory: Ref<string>
): {
  filteredProps: ComputedRef<Prop[]>;
} {
  const filteredProps = computed((): Prop[] => {
    const data = unref(propData);
    
    const subcategoryFiltered = data.filter((prop: Prop): boolean => {
      return selectedSubcategory.value === "all" || 
        prop.subcategory === selectedSubcategory.value;
    });
    
    const searchTerm = searchQuery.value.trim();
    if (searchTerm === "") {
      return subcategoryFiltered;
    }
    
    // Use simple string search for very short queries (performance)
    if (searchTerm.length <= 2) {
      const lowerSearch = searchTerm.toLowerCase();
      return subcategoryFiltered.filter((prop: Prop): boolean => 
        prop.id.toLowerCase().includes(lowerSearch)
      );
    }
    
    // Use fuzzy search for 3+ characters
    const fuse = new Fuse(subcategoryFiltered, fuseOptions);
    const results = fuse.search(searchTerm);
    
    return results.map(result => result.item);
  });

  return {
    filteredProps
  };
}

