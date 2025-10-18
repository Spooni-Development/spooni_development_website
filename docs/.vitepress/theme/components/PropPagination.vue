<template>
  <div v-if="totalPages > 1" class="pagination">
    <button 
      class="pagination-button pagination-arrow" 
      :disabled="currentPage === 1"
      @click="$emit('goToPage', currentPage - 1)"
      title="Previous page"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
    </button>

    <template v-for="(page, index) in visiblePages" :key="`${page}-${index}`">
      <button 
        v-if="typeof page === 'number'"
        class="pagination-button" 
        :class="{ active: currentPage === page }"
        @click="$emit('goToPage', page)"
      >
        {{ page }}
      </button>
    </template>

    <button 
      class="pagination-button pagination-arrow" 
      :disabled="currentPage === totalPages"
      @click="$emit('goToPage', currentPage + 1)"
      title="Next page"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </button>

    <div v-if="hasEllipsis" class="pagination-separator"></div>

    <div v-if="hasEllipsis" class="pagination-jump">
      <input 
        id="page-jump"
        v-model.number="jumpToPage"
        type="number"
        :min="1"
        :max="totalPages"
        placeholder="Jump to page..."
        class="pagination-input"
        :class="{ 'shake': showError }"
        @keyup.enter="handleJumpToPage"
        @blur="handleJumpToPage"
        title="Type page number and press Enter"
      />
    </div>

    <span class="pagination-info">
      Page {{ currentPage }} of {{ totalPages }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const props = defineProps<{
  currentPage: number;
  totalPages: number;
  visiblePages: (number | string)[];
}>();

const emit = defineEmits<{
  goToPage: [page: number];
}>();

const jumpToPage = ref<number | null>(null);
const showError = ref(false);

// Check if there are any ellipsis in the visible pages
const hasEllipsis = computed(() => {
  return props.visiblePages.some(page => typeof page === 'string');
});

const handleJumpToPage = () => {
  if (jumpToPage.value && jumpToPage.value >= 1 && jumpToPage.value <= props.totalPages) {
    emit('goToPage', jumpToPage.value);
    jumpToPage.value = null;
    showError.value = false;
  } else if (jumpToPage.value) {
    // Show error animation for invalid input
    showError.value = true;
    setTimeout(() => {
      showError.value = false;
    }, 500);
  }
};
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
  border: none;
  background: var(--vp-c-bg-alt);
  color: var(--vp-c-text-1);
  border-radius: var(--radius-lg);
  cursor: pointer;
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  transition: all var(--transition-base) ease;
  font-family: inherit;
}

.pagination-button:hover:not(:disabled):not(.active) {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-dark);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.pagination-button.active {
  background: var(--vp-c-brand);
  color: white;
  cursor: default;
}

.pagination-button.active:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.pagination-button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.pagination-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--vp-c-bg-soft);
}

.pagination-arrow svg {
  display: block;
}

.pagination-separator {
  width: 1px;
  height: 24px;
  background: var(--vp-c-divider);
  margin: 0 var(--space-2);
}

.pagination-jump {
  display: flex;
  align-items: center;
}

.pagination-input {
  min-width: var(--touch-target-min);
  width: 140px;
  height: var(--touch-target-min);
  padding: var(--space-3) var(--space-4);
  border: none;
  background: var(--vp-c-bg-alt);
  color: var(--vp-c-text-1);
  border-radius: var(--radius-lg);
  font-size: var(--text-base);
  font-family: inherit;
  text-align: center;
  cursor: text;
  outline: none;
  transition: all var(--transition-base) ease;
}

.pagination-input:focus {
  box-shadow: 0 0 0 3px var(--vp-c-brand-soft);
}

.pagination-input:hover {
  background: var(--vp-c-bg-soft);
}

.pagination-input::placeholder {
  color: var(--vp-c-text-3);
}

.pagination-input.shake {
  animation: shake 0.5s;
  box-shadow: 0 0 0 3px rgba(244, 63, 94, 0.3);
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
  20%, 40%, 60%, 80% { transform: translateX(5px); }
}

/* Remove number input arrows */
.pagination-input::-webkit-outer-spin-button,
.pagination-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.pagination-input[type=number] {
  -moz-appearance: textfield;
  appearance: textfield;
}

.pagination-info {
  margin-left: var(--space-4);
  color: var(--vp-c-text-2);
  font-size: var(--text-sm);
}

/* Tablets: Adjust spacing (BREAKPOINTS.TABLET_MIN) */
@media (min-width: 768px) {
  .pagination {
    gap: var(--space-3);
  }
}

/* Mobile: Smaller buttons but still accessible (BREAKPOINTS.MOBILE_MAX) */
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

  .pagination-separator {
    display: none;
  }

  .pagination-input {
    width: 120px;
    height: 40px;
    font-size: var(--text-sm);
    padding: var(--space-2) var(--space-3);
  }

  .pagination-info {
    width: 100%;
    text-align: center;
    margin: var(--space-2) 0 0 0;
  }

  .pagination-jump {
    width: 100%;
    justify-content: center;
    order: 10;
    margin-top: var(--space-2);
  }
}
</style>

