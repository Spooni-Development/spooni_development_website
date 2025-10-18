<template>
  <div v-if="totalPages > 1" class="pagination">
    <button 
      class="pagination-button" 
      :disabled="currentPage === 1"
      @click="$emit('goToPage', 1)"
    >
      ««
    </button>
    <button 
      class="pagination-button" 
      :disabled="currentPage === 1"
      @click="$emit('goToPage', currentPage - 1)"
    >
      ‹
    </button>

    <template v-for="page in visiblePages" :key="page">
      <button 
        v-if="typeof page === 'number'"
        class="pagination-button" 
        :class="{ active: currentPage === page }"
        @click="$emit('goToPage', page)"
      >
        {{ page }}
      </button>
      <span v-else class="pagination-ellipsis">...</span>
    </template>

    <button 
      class="pagination-button" 
      :disabled="currentPage === totalPages"
      @click="$emit('goToPage', currentPage + 1)"
    >
      ›
    </button>
    <button 
      class="pagination-button" 
      :disabled="currentPage === totalPages"
      @click="$emit('goToPage', totalPages)"
    >
      »»
    </button>

    <span class="pagination-info">
      Page {{ currentPage }} of {{ totalPages }}
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  currentPage: number;
  totalPages: number;
  visiblePages: (number | string)[];
}>();

defineEmits<{
  goToPage: [page: number];
}>();
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--space-2);
  margin: var(--space-8) 0;
  flex-wrap: wrap;
}

.pagination-button {
  min-width: var(--touch-target-min);
  height: var(--touch-target-min);
  padding: var(--space-2) var(--space-3);
  border: 1px solid var(--vp-c-border);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  border-radius: var(--radius-md);
  cursor: pointer;
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  transition: all var(--transition-base) ease;
  font-family: inherit;
}

.pagination-button:hover:not(:disabled) {
  background: var(--vp-c-brand-soft);
  border-color: var(--vp-c-brand);
  color: var(--vp-c-brand);
  transform: translateY(-1px);
}

.pagination-button.active {
  background: var(--vp-c-brand);
  border-color: var(--vp-c-brand);
  color: white;
  cursor: default;
}

.pagination-button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.pagination-ellipsis {
  color: var(--vp-c-text-3);
  padding: var(--space-2);
}

.pagination-info {
  margin-left: var(--space-4);
  color: var(--vp-c-text-2);
  font-size: var(--text-sm);
}

/* Tablets: Adjust spacing */
@media (min-width: 768px) {
  .pagination {
    gap: var(--space-3);
  }
}

/* Mobile: Smaller buttons but still accessible */
@media (max-width: 767px) {
  .pagination {
    gap: var(--space-1);
  }

  .pagination-button {
    min-width: 40px;
    height: 40px;
    padding: var(--space-2) var(--space-2);
    font-size: var(--text-xs);
  }

  .pagination-info {
    width: 100%;
    text-align: center;
    margin: var(--space-2) 0 0 0;
  }
}
</style>

