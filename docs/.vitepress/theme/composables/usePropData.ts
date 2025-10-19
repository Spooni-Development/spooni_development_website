import { ref, onMounted, type Ref } from 'vue';
import type { Prop } from '../types';

/**
 * Composable zum Laden der Prop-Daten mit Lazy Loading
 * Lädt die propData.json erst, wenn die Komponente gemountet wird
 * 
 * @returns Die geladenen Prop-Daten mit Loading- und Error-States
 */
export function usePropData(): {
  propData: Ref<Prop[]>;
  isLoading: Ref<boolean>;
  error: Ref<Error | null>;
} {
  const propData = ref<Prop[]>([]);
  const isLoading = ref<boolean>(true);
  const error = ref<Error | null>(null);

  onMounted(async (): Promise<void> => {
    try {
      // Lazy Loading: JSON wird erst geladen, wenn Komponente gemountet ist
      const module = await import("../propData.json");
      propData.value = module.default as Prop[];
    } catch (e) {
      error.value = e instanceof Error ? e : new Error(String(e));
      console.error("Failed to load prop data:", e);
    } finally {
      isLoading.value = false;
    }
  });

  return {
    propData,
    isLoading,
    error
  };
}

