import { computed, type ComputedRef, type Ref, unref } from "vue";
import type { Prop } from "./usePropData";

export interface Subcategory {
  name: string;
  count: number;
}

export interface Category {
  name: string;
  count: number;
  subcategories: Subcategory[];
}

/**
 * Composable zur Berechnung von Kategorien und Subkategorien
 * aus den Prop-Daten
 * 
 * @param propData - Array von Props (kann ein Ref sein)
 * @returns Computed-Property mit aggregierten Kategorien
 */
export function usePropCategories(propData: Prop[] | Ref<Prop[]>): {
  categories: ComputedRef<Category[]>;
} {
  const categories = computed(() => {
    const categoryMap = new Map<string, {
      name: string;
      count: number;
      subcategories: Map<string, { name: string; count: number }>;
    }>();
    
    const data = unref(propData);
    
    data.forEach(prop => {
      if (!categoryMap.has(prop.category)) {
        categoryMap.set(prop.category, {
          name: prop.category,
          count: 0,
          subcategories: new Map(),
        });
      }
      
      const category = categoryMap.get(prop.category)!;
      category.count++;
      
      if (prop.subcategory) {
        if (!category.subcategories.has(prop.subcategory)) {
          category.subcategories.set(prop.subcategory, {
            name: prop.subcategory,
            count: 0,
          });
        }
        category.subcategories.get(prop.subcategory)!.count++;
      }
    });
    
    // Konvertiere zu Array und sortiere
    return Array.from(categoryMap.values())
      .map(cat => ({
        ...cat,
        subcategories: Array.from(cat.subcategories.values()).sort((a, b) => 
          a.name.localeCompare(b.name)
        ),
      }))
      .sort((a, b) => {
        // Priorisiere "Spooni Props" Kategorie
        if (a.name === "Spooni Props") return -1;
        if (b.name === "Spooni Props") return 1;
        // Sortiere alle anderen Kategorien alphabetisch
        return a.name.localeCompare(b.name);
      });
  });

  return {
    categories
  };
}

