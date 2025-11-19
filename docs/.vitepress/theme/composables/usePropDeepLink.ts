import { watch, ref, type Ref } from 'vue';
import type { Category } from '../types';

interface UsePropDeepLinkOptions {
  categories: Ref<Category[]>;
  selectedCategory: Ref<string>;
  selectedSubcategory: Ref<string>;
}

/**
 * Synchronizes the gallery category/subcategory state with query parameters.
 * - Reads ?cat / ?sub once the category metadata is available
 * - Updates the URL (without adding history entries) whenever the selection changes
 */
export function usePropDeepLink({
  categories,
  selectedCategory,
  selectedSubcategory
}: UsePropDeepLinkOptions): void {
  const hasAppliedInitialState = ref(false);

  function parseFromUrl(): void {
    if (typeof window === 'undefined') return;
    if (!categories.value.length) return;

    const url = new URL(window.location.href);
    const catParam = url.searchParams.get('cat') ?? 'all';
    const subParam = url.searchParams.get('sub') ?? 'all';

    const isFavorites = catParam === 'favorites';
    const isValidCategory =
      isFavorites || categories.value.some((category) => category.slug === catParam);

    selectedCategory.value = isValidCategory ? catParam : 'all';

    if (isFavorites) {
      selectedSubcategory.value = 'all';
      return;
    }

    const category = categories.value.find((item) => item.slug === selectedCategory.value);
    const isValidSubcategory = category?.subcategories.some((sub) => sub.slug === subParam);
    selectedSubcategory.value = isValidSubcategory ? subParam : 'all';
  }

  function syncToUrl(): void {
    if (typeof window === 'undefined') return;

    const url = new URL(window.location.href);

    if (selectedCategory.value === 'all') {
      url.searchParams.delete('cat');
    } else {
      url.searchParams.set('cat', selectedCategory.value);
    }

    const shouldClearSub =
      selectedSubcategory.value === 'all' || selectedCategory.value === 'favorites';

    if (shouldClearSub) {
      url.searchParams.delete('sub');
    } else {
      url.searchParams.set('sub', selectedSubcategory.value);
    }

    window.history.replaceState(null, '', url);
  }

  watch(
    categories,
    () => {
      if (hasAppliedInitialState.value) return;
      parseFromUrl();
      hasAppliedInitialState.value = true;
    },
    { immediate: true }
  );

  watch(
    [selectedCategory, selectedSubcategory],
    () => {
      if (!hasAppliedInitialState.value) {
        parseFromUrl();
        hasAppliedInitialState.value = true;
      }
      syncToUrl();
    },
    { flush: 'post' }
  );
}


