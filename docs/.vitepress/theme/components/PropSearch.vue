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
        placeholder="Search props by name..." 
        class="search-input"
      />
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
  border: 2px solid var(--vp-c-border);
  border-radius: var(--radius-lg);
  background: var(--vp-c-bg);
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
  border-color: var(--vp-c-brand);
  box-shadow: 0 0 0 3px var(--vp-c-brand-soft);
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
  border-radius: var(--radius-sm);
  transition: all var(--transition-base) ease;
  min-width: var(--touch-target-min);
  min-height: var(--touch-target-min);
}

.clear-button:hover {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
}

/* Tablets: Slightly larger input */
@media (min-width: 768px) {
  .search-input {
    padding: var(--space-4) var(--space-12);
    font-size: var(--text-lg);
  }
}

/* Mobile: Compact but accessible */
@media (max-width: 767px) {
  .search-input {
    padding: var(--space-3) 2.5rem;
    font-size: var(--text-sm);
  }
  
  .search-icon {
    left: var(--space-3);
  }
}
</style>

