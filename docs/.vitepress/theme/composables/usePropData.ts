import { ref, onMounted } from 'vue';

/**
 * Typdefinition für ein einzelnes Prop
 */
export interface Prop {
  id: string;
  category: string;
  subcategory?: string;
}

/**
 * Composable zum Laden der Prop-Daten mit Lazy Loading
 * Lädt die propData.json erst, wenn die Komponente gemountet wird
 * 
 * @returns Die geladenen Prop-Daten mit Loading- und Error-States
 */
export function usePropData() {
  const propData = ref<Prop[]>([]);
  const isLoading = ref(true);
  const error = ref<Error | null>(null);

  onMounted(async () => {
    try {
      // Lazy Loading: JSON wird erst geladen, wenn Komponente gemountet ist
      const module = await import("../propData.json");
      propData.value = module.default as Prop[];
    } catch (e) {
      error.value = e as Error;
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

