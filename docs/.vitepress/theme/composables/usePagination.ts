import { ref, computed, watch, type Ref, type ComputedRef } from "vue";
import { PAGINATION, ANIMATION } from "../constants";

/**
 * Pagination composable
 * 
 * @param items - Ref containing array of items to paginate
 * @param itemsPerPage - Ref containing number of items per page
 * @returns Pagination state and functions
 */
export function usePagination<T>(
  items: Ref<T[]>,
  itemsPerPage: Ref<number>
): {
  currentPage: Ref<number>;
  totalPages: ComputedRef<number>;
  paginatedItems: ComputedRef<T[]>;
  visiblePages: ComputedRef<(number | string)[]>;
  goToPage: (page: number) => void;
} {
  const currentPage = ref(1);

  // Calculate total number of pages
  const totalPages = computed(() => {
    return Math.ceil(items.value.length / itemsPerPage.value);
  });

  // Calculate items for current page
  const paginatedItems = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value;
    const end = start + itemsPerPage.value;
    return items.value.slice(start, end);
  });

  // Calculate visible page numbers for pagination
  const visiblePages = computed(() => {
    const pages: (number | string)[] = [];
    const total = totalPages.value;
    const current = currentPage.value;
    
    if (total <= PAGINATION.MAX_VISIBLE_PAGES) {
      // Show all pages if 7 or less
      for (let i = 1; i <= total; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);
      
      if (current > 3) {
        pages.push('...');
      }
      
      // Show pages around current page
      const start = Math.max(2, current - 1);
      const end = Math.min(total - 1, current + 1);
      
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      
      if (current < total - 2) {
        pages.push('...');
      }
      
      // Always show last page
      pages.push(total);
    }
    
    return pages;
  });

  // Navigate to a specific page
  function goToPage(page: number) {
    if (page < 1 || page > totalPages.value) return;
    currentPage.value = page;
    
    // Scroll to top
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: ANIMATION.SMOOTH_SCROLL_BEHAVIOR as ScrollBehavior });
    }
  }

  // Reset page when items-per-page changes
  watch(itemsPerPage, () => {
    currentPage.value = 1;
  });

  // Reset page if it's outside valid range
  watch(
    () => items.value.length,
    () => {
      if (currentPage.value > totalPages.value) {
        currentPage.value = Math.max(1, totalPages.value);
      }
    }
  );

  return {
    currentPage,
    totalPages,
    paginatedItems,
    visiblePages,
    goToPage
  };
}

