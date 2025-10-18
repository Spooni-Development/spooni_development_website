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

    <div class="controls-right">
      <div class="selector-wrapper">
        <label>Columns:</label>
        <CustomSelect 
          :modelValue="columnsPerRow" 
          :options="columnsOptions"
          @update:modelValue="(value) => $emit('update:columnsPerRow', Number(value))"
        />
      </div>

      <div class="selector-wrapper">
        <label>Per page:</label>
        <CustomSelect 
          :modelValue="itemsPerPage" 
          :options="perPageOptions"
          @update:modelValue="(value) => $emit('update:itemsPerPage', Number(value))"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { formatCategory } from '../utils/formatCategory';
import { PAGINATION, GRID_LAYOUT } from '../constants';
import CustomSelect from './CustomSelect.vue';

defineProps<{
  paginatedPropsLength: number;
  filteredPropsLength: number;
  searchQuery: string;
  selectedCategory: string;
  selectedSubcategory: string;
  itemsPerPage: number;
  columnsPerRow: number;
}>();

defineEmits<{
  'update:itemsPerPage': [value: number];
  'update:columnsPerRow': [value: number];
}>();

const columnsOptions = computed(() => 
  GRID_LAYOUT.COLUMNS_OPTIONS.map(option => ({
    value: option,
    label: option.toString()
  }))
);

const perPageOptions = computed(() => 
  PAGINATION.ITEMS_PER_PAGE_OPTIONS.map(option => ({
    value: option,
    label: option.toString()
  }))
);
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

.controls-right {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  flex-wrap: wrap;
}

.selector-wrapper {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-sm);
  color: var(--vp-c-text-2);
}

.selector-wrapper label {
  white-space: nowrap;
}

/* Tablets: Adjust layout (BREAKPOINTS.TABLET_MIN) */
@media (min-width: 768px) {
  .results-info {
    font-size: var(--text-base);
  }
  
  .selector-wrapper {
    font-size: var(--text-base);
  }
}

/* Mobile: Stack vertically (BREAKPOINTS.MOBILE_MAX) */
@media (max-width: 767px) {
  .controls-bar {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-3);
  }
}
</style>

