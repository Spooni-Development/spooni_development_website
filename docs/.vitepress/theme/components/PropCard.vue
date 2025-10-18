<template>
  <div class="gallery-item">
    <div class="image-container">
      <img 
        :data-src="`${PROPS_GALLERY.PROPS_API_BASE_URL}/${prop.id}.png`" 
        :alt="prop.id" 
        class="prop-image lazy-image" 
        loading="lazy"
      />
    </div>
    <div class="prop-info">
      <h4 :title="prop.id">{{ prop.id }}</h4>
      <button 
        @click="handleCopy" 
        class="copy-button" 
        :class="{ copied: copiedId === prop.id }"
      >
        {{ copiedId === prop.id ? 'Copied!' : 'Copy Name' }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCopyToClipboard } from '../composables/useCopyToClipboard';
import { PROPS_GALLERY } from '../constants';
import type { Prop } from '../composables/usePropData';

const props = defineProps<{
  prop: Prop;
}>();

const { copiedId, copyToClipboard } = useCopyToClipboard();

function handleCopy() {
  copyToClipboard(props.prop.id);
}
</script>

<style scoped>
.gallery-item {
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
}

.gallery-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.image-container {
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--vp-c-bg-soft);
  overflow: hidden;
  padding: var(--space-4);
  box-sizing: border-box;
}

.prop-image {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  cursor: zoom-in;
  transition: transform 0.2s ease, opacity 0.3s ease;
  opacity: 0;
}

.prop-image.loaded {
  opacity: 1;
}

.image-container:hover .prop-image.loaded {
  transform: scale(1.05);
}

.prop-info {
  padding: var(--space-4);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.prop-info h4 {
  margin: 0;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}

.copy-button {
  padding: var(--space-2) var(--space-4);
  background: var(--vp-c-brand);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  cursor: pointer;
  transition: all var(--transition-base) ease;
  font-family: inherit;
  min-height: var(--touch-target-min);
}

.copy-button:hover {
  background: var(--vp-c-brand-dark, #1a6f3a);
  transform: translateY(-1px);
}

.copy-button.copied {
  background: #10b981;
  animation: pulse 0.3s ease-in-out;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

/* Tablets: slightly larger images */
@media (min-width: 768px) {
  .image-container {
    height: 220px;
  }
}

/* Desktop: larger images */
@media (min-width: 1024px) {
  .image-container {
    height: 240px;
  }
}

/* Large Desktop: maximum image size */
@media (min-width: 1200px) {
  .image-container {
    height: 260px;
  }
}
</style>

