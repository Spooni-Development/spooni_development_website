<template>
  <div class="controls-bar">
    <div class="results-info">
      <span v-if="searchQuery">
        Found {{ filteredPropsLength }} prop{{ filteredPropsLength !== 1 ? "s" : "" }} matching "{{ searchQuery }}"
      </span>
      <span v-else-if="selectedSubcategory !== 'all'">
        Showing {{ paginatedPropsLength }} of {{ filteredPropsLength }} prop{{ filteredPropsLength !== 1 ? "s" : "" }} 
        from subcategory <strong>"{{ formatCategory(selectedSubcategory) }}"</strong>
      </span>
      <span v-else-if="selectedCategory !== 'all'">
        Showing {{ paginatedPropsLength }} of {{ filteredPropsLength }} prop{{ filteredPropsLength !== 1 ? "s" : "" }} 
        from category <strong>"{{ formatCategory(selectedCategory) }}"</strong>
      </span>
      <span v-else>
        Showing {{ paginatedPropsLength }} of {{ filteredPropsLength }} prop{{ filteredPropsLength !== 1 ? "s" : "" }}
      </span>
    </div>

    <div class="per-page-selector">
      <label for="per-page">Per page:</label>
      <select 
        id="per-page" 
        :value="itemsPerPage" 
        @change="onItemsPerPageChange"
        class="per-page-select"
      >
        <option 
          v-for="option in PAGINATION.ITEMS_PER_PAGE_OPTIONS" 
          :key="option" 
          :value="option"
        >
          {{ option }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatCategory } from '../utils/formatCategory';
import { PAGINATION } from '../constants';

defineProps<{
  paginatedPropsLength: number;
  filteredPropsLength: number;
  searchQuery: string;
  selectedCategory: string;
  selectedSubcategory: string;
  itemsPerPage: number;
}>();

const emit = defineEmits<{
  'update:itemsPerPage': [value: number];
}>();

function onItemsPerPageChange(event: Event) {
  const target = event.target as HTMLSelectElement;
  emit('update:itemsPerPage', Number(target.value));
}
</script>

<style scoped>
.controls-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-6);
  flex-wrap: wrap;
  gap: var(--space-4);
}

.results-info {
  color: var(--vp-c-text-2);
  font-size: var(--text-sm);
}

.per-page-selector {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-sm);
  color: var(--vp-c-text-2);
}

.per-page-select {
  padding: var(--space-2) var(--space-3);
  border: 1px solid var(--vp-c-border);
  border-radius: var(--radius-sm);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: var(--text-sm);
  cursor: pointer;
  transition: all var(--transition-base) ease;
  min-height: var(--touch-target-min);
}

.per-page-select:hover {
  border-color: var(--vp-c-brand);
}

.per-page-select:focus {
  outline: none;
  border-color: var(--vp-c-brand);
  box-shadow: 0 0 0 2px var(--vp-c-brand-soft);
}

/* Tablets: Adjust layout */
@media (min-width: 768px) {
  .results-info {
    font-size: var(--text-base);
  }
  
  .per-page-selector {
    font-size: var(--text-base);
  }
}

/* Mobile: Stack vertically */
@media (max-width: 767px) {
  .controls-bar {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-3);
  }
}
</style>

