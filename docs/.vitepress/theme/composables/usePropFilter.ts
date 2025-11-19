import { computed, watch, shallowRef, type Ref, type ComputedRef, unref } from "vue";
import type { Prop } from '../types';
import { slugify } from '../utils/slugify';

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
type FuseConstructor = typeof import('fuse.js').default;
type FuseInstance = import('fuse.js').default<Prop>;

let FuseClass: FuseConstructor | null = null;
let fuseLoadPromise: Promise<FuseConstructor> | null = null;

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
  selectedSubcategory: Ref<string>
): {
  filteredProps: ComputedRef<Prop[]>;
} {
  const fuseInstance = shallowRef<FuseInstance | null>(null);
  const subcategoryFiltered = computed((): Prop[] => {
    const data = unref(propData);
    if (selectedSubcategory.value === 'all') {
      return data;
    }
    return data.filter(
      (prop: Prop): boolean => slugify(prop.subcategory) === selectedSubcategory.value
    );
  });

  function rebuildFuse(): void {
    if (!FuseClass) {
      fuseInstance.value = null;
      return;
    }
    fuseInstance.value = new FuseClass(subcategoryFiltered.value, fuseOptions);
  }

  // Preload Fuse.js when longer queries appear
  watch(
    searchQuery,
    (searchTerm) => {
      const trimmed = searchTerm.trim();
      if (trimmed.length >= 3 && !FuseClass) {
        loadFuse().then(() => {
          rebuildFuse();
        });
      }
    },
    { immediate: true }
  );

  watch(subcategoryFiltered, () => {
    rebuildFuse();
  });

  const filteredProps = computed((): Prop[] => {
    const base = subcategoryFiltered.value;
    const searchTerm = searchQuery.value.trim();

    if (searchTerm === '') {
      return base;
    }

    if (searchTerm.length <= 2) {
      const lowerSearch = searchTerm.toLowerCase();
      return base.filter((prop: Prop): boolean => prop.id.toLowerCase().includes(lowerSearch));
    }

    if (!FuseClass) {
      loadFuse().then(() => {
        rebuildFuse();
      });
      const lowerSearch = searchTerm.toLowerCase();
      return base.filter((prop: Prop): boolean => prop.id.toLowerCase().includes(lowerSearch));
    }

    if (!fuseInstance.value) {
      rebuildFuse();
    }

    return fuseInstance.value?.search(searchTerm).map((result) => result.item) ?? base;
  });

  return {
    filteredProps
  };
}

