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
      <div class="prop-name-container">
        <h4 class="prop-name">{{ prop.id }}</h4>
        <span class="prop-name-tooltip">{{ prop.id }}</span>
        <button 
          @click="handleCopy" 
          class="copy-icon-button"
          :class="{ copied: copiedId === prop.id }"
          :title="copiedId === prop.id ? 'Copied!' : 'Copy to clipboard'"
        >
          <svg 
            v-if="copiedId !== prop.id"
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round"
          >
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
          <svg 
            v-else
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCopyToClipboard } from '../composables/useCopyToClipboard';
import { PROPS_GALLERY } from '../constants';
import type { Prop } from '../types';

const props = defineProps<{
  prop: Prop;
}>();

const { copiedId, copyToClipboard } = useCopyToClipboard();

function handleCopy(): void {
  void copyToClipboard(props.prop.id);
}
</script>

<style scoped>
.gallery-item {
  background: var(--vp-c-bg-soft);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
}

.gallery-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
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
  transition: all 0.2s ease;
  opacity: 0;
  border: 2px solid transparent;
  border-radius: var(--radius-lg);
}

.prop-image.loaded {
  opacity: 1;
}

.image-container:hover .prop-image.loaded {
  transform: scale(1.05);
  border-color: var(--vp-c-brand);
}

.prop-info {
  padding: var(--space-4);
  display: flex;
  flex-direction: column;
}

.prop-name-container {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  background: var(--vp-c-bg);
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-lg);
  transition: all var(--transition-base) ease;
  position: relative;
}

.prop-name-container:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.prop-name {
  margin: 0;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  text-align: center;
  flex: 1;
  
  /* Single line with ellipsis */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
}

/* Tooltip for full name */
.prop-name-tooltip {
  position: absolute;
  bottom: calc(100% + var(--space-2));
  left: 50%;
  transform: translateX(-50%);
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-lg);
  font-size: 0.875rem;
  font-weight: 600;
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  visibility: hidden;
  transition: all var(--transition-base) ease;
  z-index: 100;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  text-align: center;
}

.prop-name-container:hover .prop-name-tooltip {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(-4px);
}

.copy-icon-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-1);
  background: var(--vp-c-brand);
  border: none;
  border-radius: var(--radius-lg);
  cursor: pointer;
  color: white;
  transition: all var(--transition-base) ease;
  flex-shrink: 0;
  width: 28px;
  height: 28px;
}

.copy-icon-button:hover {
  background: var(--vp-c-brand-dark, #d64d00);
  transform: scale(1.1);
  box-shadow: 0 2px 6px rgba(242, 92, 5, 0.4);
}

.copy-icon-button:active {
  transform: scale(0.95);
}

.copy-icon-button.copied {
  background: #10b981;
  color: white;
  animation: iconPulse 0.3s ease-in-out;
}

@keyframes iconPulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}

/* Tablets: slightly larger images (BREAKPOINTS.TABLET_MIN) */
@media (min-width: 768px) {
  .image-container {
    height: 220px;
  }
}

/* Desktop: larger images (BREAKPOINTS.DESKTOP_MIN) */
@media (min-width: 1024px) {
  .image-container {
    height: 240px;
  }
}

/* Large Desktop: maximum image size (BREAKPOINTS.LARGE_DESKTOP_MIN) */
@media (min-width: 1200px) {
  .image-container {
    height: 260px;
  }
}
</style>

