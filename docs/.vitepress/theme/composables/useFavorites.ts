import { ref, watch, computed, type Ref, type ComputedRef } from 'vue';
import type { Prop } from '../types';

const FAVORITES_STORAGE_KEY = 'spooni-prop-favorites';

/**
 * Composable for favorites management with LocalStorage persistence
 */
export function useFavorites(): {
  favorites: Ref<string[]>;
  favoritesCount: ComputedRef<number>;
  isFavorite: (propId: string) => boolean;
  toggleFavorite: (propId: string) => void;
  addFavorite: (propId: string) => void;
  removeFavorite: (propId: string) => void;
  clearFavorites: () => void;
  exportFavorites: () => string;
  importFavorites: (jsonString: string) => boolean;
  getFavoriteProps: (allProps: Prop[]) => Prop[];
} {
  const favorites = ref<string[]>([]);

  /**
   * Load favorites from LocalStorage
   */
  function loadFavorites(): void {
    if (typeof window === 'undefined') return;
    
    try {
      const stored = localStorage.getItem(FAVORITES_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          favorites.value = parsed;
        }
      }
    } catch (error) {
      console.error('Failed to load favorites from LocalStorage:', error);
      favorites.value = [];
    }
  }

  /**
   * Save favorites to LocalStorage
   */
  function saveFavorites(): void {
    if (typeof window === 'undefined') return;
    
    try {
      localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites.value));
    } catch (error) {
      console.error('Failed to save favorites to LocalStorage:', error);
    }
  }

  /**
   * Check if a prop is favorited
   */
  function isFavorite(propId: string): boolean {
    return favorites.value.includes(propId);
  }

  /**
   * Toggle favorite status of a prop
   */
  function toggleFavorite(propId: string): void {
    if (isFavorite(propId)) {
      removeFavorite(propId);
    } else {
      addFavorite(propId);
    }
  }

  /**
   * Add a prop to favorites
   */
  function addFavorite(propId: string): void {
    if (!isFavorite(propId)) {
      favorites.value.push(propId);
    }
  }

  /**
   * Remove a prop from favorites
   */
  function removeFavorite(propId: string): void {
    const index = favorites.value.indexOf(propId);
    if (index > -1) {
      favorites.value.splice(index, 1);
    }
  }

  /**
   * Clear all favorites (without confirmation - handled by UI)
   */
  function clearFavorites(): void {
    if (typeof window === 'undefined') return;
    favorites.value = [];
  }

  /**
   * Export favorites as JSON string
   */
  function exportFavorites(): string {
    const exportData = {
      version: '1.0',
      exportDate: new Date().toISOString(),
      favorites: favorites.value,
      count: favorites.value.length
    };
    return JSON.stringify(exportData, null, 2);
  }

  /**
   * Import favorites from JSON string
   */
  function importFavorites(jsonString: string): boolean {
    try {
      const data = JSON.parse(jsonString);
      
      // Validate structure
      if (!data.favorites || !Array.isArray(data.favorites)) {
        throw new Error('Invalid favorites data structure');
      }

      // Merge with existing favorites (avoid duplicates)
      const merged = [...new Set([...favorites.value, ...data.favorites])];
      favorites.value = merged;
      
      return true;
    } catch (error) {
      console.error('Failed to import favorites:', error);
      return false;
    }
  }

  /**
   * Filter props to only show favorites
   */
  function getFavoriteProps(allProps: Prop[]): Prop[] {
    return allProps.filter(prop => isFavorite(prop.id));
  }

  // Computed properties
  const favoritesCount = computed(() => favorites.value.length);

  // Load favorites on initialization
  loadFavorites();

  // Watch for changes and save to LocalStorage
  watch(favorites, () => {
    saveFavorites();
  }, { deep: true });

  return {
    favorites,
    favoritesCount,
    isFavorite,
    toggleFavorite,
    addFavorite,
    removeFavorite,
    clearFavorites,
    exportFavorites,
    importFavorites,
    getFavoriteProps
  };
}

