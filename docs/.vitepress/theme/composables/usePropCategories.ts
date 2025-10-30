import { computed, type ComputedRef, type Ref, unref } from "vue";
import type { Prop, Category, Subcategory } from '../types';

interface CategoryInternal {
  name: string;
  count: number;
  subcategories: Map<string, { name: string; count: number }>;
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
  const categories = computed((): Category[] => {
    const categoryMap = new Map<string, CategoryInternal>();
    
    const data = unref(propData);
    
    data.forEach((prop: Prop): void => {
      // Skip props without category
      if (!prop.category) return;
      
      if (!categoryMap.has(prop.category)) {
        categoryMap.set(prop.category, {
          name: prop.category,
          count: 0,
          subcategories: new Map(),
        });
      }
      
      const category = categoryMap.get(prop.category);
      if (!category) return; // Type guard
      
      category.count++;
      
      if (prop.subcategory) {
        if (!category.subcategories.has(prop.subcategory)) {
          category.subcategories.set(prop.subcategory, {
            name: prop.subcategory,
            count: 0,
          });
        }
        const subcategory = category.subcategories.get(prop.subcategory);
        if (subcategory) {
          subcategory.count++;
        }
      }
    });
    
    // Konvertiere zu Array und sortiere
    return Array.from(categoryMap.values())
      .map((cat: CategoryInternal): Category => ({
        name: cat.name,
        count: cat.count,
        subcategories: Array.from(cat.subcategories.values()).sort((a: Subcategory, b: Subcategory): number => 
          a.name.localeCompare(b.name)
        ),
      }))
      .sort((a: Category, b: Category): number => {
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

