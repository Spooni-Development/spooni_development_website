import { computed, type Ref, type ComputedRef, unref } from "vue";
import type { Prop } from '../types';

/**
 * Composable für Filter-Logik (Suche, Kategorie, Subkategorie)
 * 
 * @param propData - Array von Props (kann ein Ref sein)
 * @param searchQuery - Ref mit Suchtext
 * @param selectedCategory - Ref mit ausgewählter Kategorie
 * @param selectedSubcategory - Ref mit ausgewählter Subkategorie
 * @returns Computed-Property mit gefilterten Props
 */
export function usePropFilter(
  propData: Prop[] | Ref<Prop[]>,
  searchQuery: Ref<string>,
  selectedCategory: Ref<string>,
  selectedSubcategory: Ref<string>
): {
  filteredProps: ComputedRef<Prop[]>;
} {
  const filteredProps = computed((): Prop[] => {
    const data = unref(propData);
    return data.filter((prop: Prop): boolean => {
      // Such-Filter
      const searchTerm = searchQuery.value.toLowerCase().trim();
      const matchesSearch = searchQuery.value === "" || 
        prop.id.toLowerCase().includes(searchTerm);
      
      // Subkategorie-Filter
      const matchesSubcategory = selectedSubcategory.value === "all" || 
        prop.subcategory === selectedSubcategory.value;
      
      // Kategorie-Filter entfernt - wird bereits durch dynamisches Laden der JSON-Datei gefiltert
      return matchesSearch && matchesSubcategory;
    });
  });

  return {
    filteredProps
  };
}

