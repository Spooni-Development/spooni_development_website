import { ref, watch, type Ref } from 'vue';
import type { Prop } from '../types';

/**
 * Composable zum Laden der Prop-Daten mit Lazy Loading pro Kategorie
 * Lädt dynamisch die entsprechende Kategorie-JSON-Datei
 * 
 * @param selectedCategory - Ref mit der aktuell ausgewählten Kategorie
 * @returns Die geladenen Prop-Daten mit Loading- und Error-States
 */
export function usePropData(selectedCategory: Ref<string>): {
  propData: Ref<Prop[]>;
  isLoading: Ref<boolean>;
  error: Ref<Error | null>;
} {
  const propData = ref<Prop[]>([]);
  const isLoading = ref<boolean>(true);
  const error = ref<Error | null>(null);

  /**
   * Lädt die Props für eine bestimmte Kategorie
   */
  async function loadCategory(category: string): Promise<void> {
    isLoading.value = true;
    error.value = null;

    try {
      // Sanitize category name for filename
      const sanitizedName = category
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
      
      // Dynamic import based on category
      const module = await import(`../propData/${sanitizedName}.json`);
      const data = module.default;
      
      // Support both formats:
      // Old: [prop1, prop2, ...]
      // New: {metadata: {...}, props: [...]}
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

  // Load initial category
  loadCategory(selectedCategory.value);

  // Watch for category changes and reload
  watch(selectedCategory, (newCategory: string) => {
    loadCategory(newCategory);
  });

  return {
    propData,
    isLoading,
    error
  };
}

