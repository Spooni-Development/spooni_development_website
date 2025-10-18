import { computed, type Ref, type ComputedRef, unref } from "vue";
import type { Prop } from "./usePropData";

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
  const filteredProps = computed(() => {
    const data = unref(propData);
    return data.filter(prop => {
      // Such-Filter
      const searchTerm = searchQuery.value.toLowerCase().trim();
      const matchesSearch = searchQuery.value === "" || 
        prop.id.toLowerCase().includes(searchTerm);
      
      // Kategorie-Filter
      const matchesCategory = selectedCategory.value === "all" || 
        prop.category === selectedCategory.value;
      
      // Subkategorie-Filter
      const matchesSubcategory = selectedSubcategory.value === "all" || 
        prop.subcategory === selectedSubcategory.value;
      
      return matchesSearch && matchesCategory && matchesSubcategory;
    });
  });

  return {
    filteredProps
  };
}

