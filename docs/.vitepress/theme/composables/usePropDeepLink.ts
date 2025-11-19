import { watch, ref, onMounted, onUnmounted, type Ref } from 'vue';
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
  const pendingCategory = ref<string>('all');
  const pendingSubcategory = ref<string>('all');
  const isMounted = ref(false);

  function readQueryFromUrl(): void {
    if (typeof window === 'undefined') return;

    const url = new URL(window.location.href);
    pendingCategory.value = url.searchParams.get('cat') ?? 'all';
    pendingSubcategory.value = url.searchParams.get('sub') ?? 'all';
  }

  function applyPendingQuery(): void {
    if (!categories.value.length) return;

    const catParam = pendingCategory.value;
    const subParam = pendingSubcategory.value;

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
      applyPendingQuery();
    },
    { immediate: true }
  );

  watch(
    [pendingCategory, pendingSubcategory],
    () => {
      applyPendingQuery();
    }
  );

  watch(
    [selectedCategory, selectedSubcategory],
    () => {
      syncToUrl();
    },
    { flush: 'post' }
  );

  onMounted(() => {
    isMounted.value = true;
    readQueryFromUrl();
    window.addEventListener('popstate', readQueryFromUrl);
  });

  onUnmounted(() => {
    if (!isMounted.value || typeof window === 'undefined') return;
    window.removeEventListener('popstate', readQueryFromUrl);
  });
}


