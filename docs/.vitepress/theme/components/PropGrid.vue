<template>
  <div class="gallery-grid">
    <PropCard 
      v-for="prop in paginatedProps" 
      :key="prop.id" 
      :prop="prop"
    />
  </div>
</template>

<script setup lang="ts">
import { watch, nextTick, onMounted } from 'vue';
import PropCard from './PropCard.vue';
import { useLazyLoading } from '../composables/useLazyLoading';
import { useImageZoom } from '../composables/useImageZoom';
import { IMAGE_LOADING } from '../constants';
import type { Prop } from '../types';

const props = defineProps<{
  paginatedProps: Prop[];
  columnsPerRow: number;
}>();

const { initLazyLoading } = useLazyLoading();
const { initializeZoom } = useImageZoom();

// Re-initialize lazy loading and zoom when props change
watch(() => props.paginatedProps, () => {
  nextTick(() => {
    initLazyLoading();
    setTimeout(() => {
      initializeZoom();
    }, IMAGE_LOADING.ZOOM_INIT_DELAY);
  });
}, { flush: 'post' });

// Initialize on mount
onMounted(() => {
  initLazyLoading();
  setTimeout(() => {
    initializeZoom();
  }, IMAGE_LOADING.ZOOM_INIT_DELAY_MOUNT);
});
</script>

<style scoped>
/* Mobile First: 1 column */
.gallery-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-4);
  margin-bottom: var(--space-8);
}

/* Small devices: 2 columns (BREAKPOINTS.SMALL_DEVICES_MIN) */
@media (min-width: 640px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-4);
  }
}

/* Tablets: 3 columns (BREAKPOINTS.TABLET_MIN) */
@media (min-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-5);
  }
}

/* Desktop: Use user-selected columns (BREAKPOINTS.DESKTOP_MIN) */
@media (min-width: 1024px) {
  .gallery-grid {
    grid-template-columns: repeat(v-bind(columnsPerRow), 1fr);
    gap: var(--space-5);
  }
}
</style>

