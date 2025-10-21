<template>
  <div class="search-container">
    <div class="search-wrapper">
      <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.35-4.35"></path>
      </svg>
      <input 
        type="text" 
        :value="modelValue" 
        @input="onInput"
        placeholder="Search props..." 
        class="search-input"
      />
      
      <!-- Fuzzy Search Badge -->
      <span v-if="modelValue && modelValue.length >= 3" class="fuzzy-badge" title="Fuzzy search active: finds similar matches even with typos">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
          <path d="M2 17l10 5 10-5"></path>
          <path d="M2 12l10 5 10-5"></path>
        </svg>
        Fuzzy
      </span>
      
      <button v-if="modelValue" @click="onClear" class="clear-button" title="Clear search">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string;
}>();

const emit = defineEmits<{
  'update:modelValue': [value: string];
}>();

function onInput(event: Event) {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
}

function onClear() {
  emit('update:modelValue', '');
}
</script>

<style scoped>
.search-container {
  margin-bottom: var(--space-6);
}

.search-wrapper {
  position: relative;
  max-width: 600px;
  margin: 0 auto;
}

.search-icon {
  position: absolute;
  left: var(--space-4);
  top: 50%;
  transform: translateY(-50%);
  color: var(--vp-c-text-2);
  pointer-events: none;
}

.search-input {
  width: 100%;
  padding: var(--space-3) var(--space-12);
  border: none;
  border-radius: var(--radius-lg);
  background: var(--vp-c-bg-alt);
  color: var(--vp-c-text-1);
  font-size: var(--text-base);
  font-family: inherit;
  transition: all var(--transition-base) ease;
  outline: none;
  min-height: var(--touch-target-comfortable);
}

.search-input::placeholder {
  color: var(--vp-c-text-3);
}

.search-input:focus {
  box-shadow: 0 0 0 3px var(--vp-c-brand-soft);
}

.fuzzy-badge {
  position: absolute;
  right: 3.5rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-1) var(--space-2);
  background: linear-gradient(135deg, var(--vp-c-brand-soft) 0%, var(--vp-c-brand-softer) 100%);
  color: var(--vp-c-brand);
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  border-radius: var(--radius-lg);
  pointer-events: none;
  animation: fadeInScale 0.2s ease-out;
  border: 1px solid var(--vp-c-brand-soft);
}

.fuzzy-badge svg {
  flex-shrink: 0;
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: translateY(-50%) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(-50%) scale(1);
  }
}

.clear-button {
  position: absolute;
  right: var(--space-3);
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: var(--vp-c-text-2);
  cursor: pointer;
  padding: var(--space-2);
  display: flex;
  align-items: center;
  border-radius: var(--radius-lg);
  transition: all var(--transition-base) ease;
  min-width: var(--touch-target-min);
  min-height: var(--touch-target-min);
  z-index: 10;
}

.clear-button:hover {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
}

/* Tablets: Slightly larger input (BREAKPOINTS.TABLET_MIN) */
@media (min-width: 768px) {
  .search-input {
    padding: var(--space-4) var(--space-12);
    font-size: var(--text-lg);
  }
}

/* Mobile: Compact but accessible (BREAKPOINTS.MOBILE_MAX) */
@media (max-width: 767px) {
  .search-input {
    padding: var(--space-3) 2.5rem;
    font-size: var(--text-sm);
  }
  
  .search-icon {
    left: var(--space-3);
  }
  
  .fuzzy-badge {
    display: none; /* Hide on mobile to save space */
  }
}

/* Small devices: Show compact badge (BREAKPOINTS.SMALL_DEVICES_MIN) */
@media (min-width: 640px) and (max-width: 767px) {
  .fuzzy-badge {
    padding: var(--space-1) var(--space-1);
    font-size: 0;
    right: 3rem;
  }
  
  .fuzzy-badge svg {
    width: 14px;
    height: 14px;
  }
}
</style>

