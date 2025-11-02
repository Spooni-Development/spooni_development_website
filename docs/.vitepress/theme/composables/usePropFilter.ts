import { computed, ref, watch, type Ref, type ComputedRef, unref } from "vue";
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

// Lazy-loaded Fuse.js instance (loaded only when first needed)
let FuseClass: typeof import('fuse.js').default | null = null;
let fuseLoadPromise: Promise<typeof import('fuse.js').default> | null = null;

/**
 * Load Fuse.js lazily (only when fuzzy search is actually needed)
 */
function loadFuse(): Promise<typeof import('fuse.js').default> {
  if (FuseClass) {
    return Promise.resolve(FuseClass);
  }
  if (!fuseLoadPromise) {
    fuseLoadPromise = import('fuse.js').then(module => {
      FuseClass = module.default;
      return FuseClass;
    });
  }
  return fuseLoadPromise;
}

/**
 * Composable for prop filtering with fuzzy search support
 * 
 * Uses Fuse.js for error-tolerant search:
 * - Finds props even with typos
 * - Partial matching (e.g. "barel" finds "barrel")
 * - Results sorted by relevance
 * - Fuse.js is lazy-loaded only when fuzzy search is actually used (3+ char queries)
 */
export function usePropFilter(
  propData: Prop[] | Ref<Prop[]>,
  searchQuery: Ref<string>,
  _selectedCategory: Ref<string>,
  selectedSubcategory: Ref<string>
): {
  filteredProps: ComputedRef<Prop[]>;
} {
  // Track if Fuse.js is loaded (for reactivity)
  const fuseLoaded = ref(false);
  
  // Pre-load Fuse.js when search query is 3+ characters (proactive loading)
  watch(searchQuery, (searchTerm) => {
    const trimmed = searchTerm.trim();
    if (trimmed.length >= 3 && !FuseClass) {
      loadFuse().then(() => {
        fuseLoaded.value = true;
      });
    }
  }, { immediate: true });
  
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
    // If Fuse.js is not loaded yet, fall back to simple search temporarily
    if (!FuseClass) {
      // Trigger loading (will update fuseLoaded when ready, causing recomputation)
      loadFuse().then(() => {
        fuseLoaded.value = true;
      });
      
      // Fallback to simple search while Fuse.js loads
      const lowerSearch = searchTerm.toLowerCase();
      return subcategoryFiltered.filter((prop: Prop): boolean => 
        prop.id.toLowerCase().includes(lowerSearch)
      );
    }
    
    // Fuse.js is loaded, use fuzzy search
    const fuse = new FuseClass(subcategoryFiltered, fuseOptions);
    const results = fuse.search(searchTerm);
    
    return results.map(result => result.item);
  });

  return {
    filteredProps
  };
}

