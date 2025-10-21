import { ref, watch, type Ref } from 'vue';
import type { Prop } from '../types';

/**
 * Composable for loading prop data with lazy loading per category
 */
export function usePropData(selectedCategory: Ref<string>): {
  propData: Ref<Prop[]>;
  isLoading: Ref<boolean>;
  error: Ref<Error | null>;
} {
  const propData = ref<Prop[]>([]);
  const isLoading = ref<boolean>(true);
  const error = ref<Error | null>(null);

  async function loadCategory(category: string): Promise<void> {
    isLoading.value = true;
    error.value = null;

    try {
      let categoryToLoad = category;
      if (category === 'favorites') {
        categoryToLoad = 'all';
      }
      
      const sanitizedName = categoryToLoad
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
      
      const module = await import(`../propData/${sanitizedName}.json`);
      const data = module.default;
      
      if (Array.isArray(data)) {
        propData.value = data as Prop[];
      } else if (data.props && Array.isArray(data.props)) {
        propData.value = data.props as Prop[];
      } else {
        throw new Error(`Invalid format in ${sanitizedName}.json`);
      }
    } catch (e) {
      error.value = e instanceof Error ? e : new Error(String(e));
      console.error(`Failed to load prop data for category "${category}":`, e);
      propData.value = [];
    } finally {
      isLoading.value = false;
    }
  }

  loadCategory(selectedCategory.value);

  watch(selectedCategory, (newCategory: string) => {
    loadCategory(newCategory);
  });

  return {
    propData,
    isLoading,
    error
  };
}

