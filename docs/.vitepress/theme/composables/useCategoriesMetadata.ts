import { ref, onMounted, type Ref } from 'vue';
import type { Category } from '../types';

interface CategoriesMetadata {
  totalProps: number;
  categories: Category[];
}

/**
 * Composable zum Laden der Kategorien-Metadata
 * Lädt die automatisch generierte categories-metadata.json
 * (wird beim Build automatisch aus allen JSON-Dateien erstellt)
 * 
 * @returns Die Kategorien mit Loading- und Error-States
 */
export function useCategoriesMetadata(): {
  categories: Ref<Category[]>;
  totalProps: Ref<number>;
  isLoading: Ref<boolean>;
  error: Ref<Error | null>;
} {
  const categories = ref<Category[]>([]);
  const totalProps = ref<number>(0);
  const isLoading = ref<boolean>(true);
  const error = ref<Error | null>(null);

  onMounted(async (): Promise<void> => {
    try {
      // Load categories metadata (auto-generated beim Build)
      const module = await import("../propData/categories-metadata.json");
      const metadata = module.default as CategoriesMetadata;
      
      categories.value = metadata.categories;
      totalProps.value = metadata.totalProps;
    } catch (e) {
      error.value = e instanceof Error ? e : new Error(String(e));
      console.error("Failed to load categories metadata:", e);
    } finally {
      isLoading.value = false;
    }
  });

  return {
    categories,
    totalProps,
    isLoading,
    error
  };
}

