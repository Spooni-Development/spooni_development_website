<template>
  <div class="custom-select" ref="selectRef">
    <button 
      class="select-button" 
      @click="toggleDropdown"
      :aria-expanded="isOpen"
      type="button"
    >
      <span class="select-value">{{ selectedLabel }}</span>
      <svg 
        class="select-arrow" 
        :class="{ open: isOpen }"
        xmlns="http://www.w3.org/2000/svg" 
        width="12" 
        height="12" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round"
      >
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </button>
    
    <transition name="dropdown">
      <div v-if="isOpen" class="select-dropdown">
        <div 
          v-for="option in options" 
          :key="option.value"
          class="select-option"
          :class="{ selected: modelValue === option.value }"
          @click="selectOption(option.value)"
        >
          {{ option.label }}
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

interface SelectOption {
  value: number | string;
  label: string | number;
}

const props = defineProps<{
  modelValue: number | string;
  options: SelectOption[];
}>();

const emit = defineEmits<{
  'update:modelValue': [value: number | string];
}>();

const isOpen = ref(false);
const selectRef = ref<HTMLElement | null>(null);

const selectedLabel = computed(() => {
  const option = props.options.find(opt => opt.value === props.modelValue);
  return option ? option.label : '';
});

function toggleDropdown() {
  isOpen.value = !isOpen.value;
}

function selectOption(value: number | string) {
  emit('update:modelValue', value);
  isOpen.value = false;
}

function handleClickOutside(event: MouseEvent) {
  if (selectRef.value && !selectRef.value.contains(event.target as Node)) {
    isOpen.value = false;
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
.custom-select {
  position: relative;
  display: inline-block;
}

.select-button {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-2) var(--space-4);
  padding-right: var(--space-3);
  border: none;
  border-radius: var(--radius-lg);
  background: var(--vp-c-bg-alt);
  color: var(--vp-c-text-1);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  cursor: pointer;
  transition: all var(--transition-base) ease;
  min-height: var(--touch-target-min);
  font-family: inherit;
  white-space: nowrap;
}

.select-button:hover {
  background: var(--vp-c-bg-soft);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.select-button:hover .select-arrow {
  color: var(--vp-c-brand);
}

.select-value {
  min-width: 20px;
  text-align: center;
}

.select-arrow {
  color: var(--vp-c-text-2);
  transition: all var(--transition-base) ease;
  flex-shrink: 0;
}

.select-arrow.open {
  transform: rotate(180deg);
  color: var(--vp-c-brand);
}

.select-dropdown {
  position: absolute;
  top: calc(100% + var(--space-2));
  left: 0;
  right: 0;
  background: var(--vp-c-bg-alt);
  border-radius: var(--radius-lg);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  z-index: var(--z-popover);
  min-width: 100%;
}

.select-option {
  padding: var(--space-3) var(--space-4);
  color: var(--vp-c-text-1);
  cursor: pointer;
  transition: all var(--transition-base) ease;
  text-align: center;
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
}

.select-option:hover {
  background: var(--vp-c-brand);
  color: white;
}

.select-option.selected {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-brand);
  font-weight: var(--font-bold);
}

.select-option.selected:hover {
  background: var(--vp-c-brand);
  color: white;
}

/* Dropdown animation */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all var(--transition-base) ease;
}

.dropdown-enter-from {
  opacity: 0;
  transform: translateY(-8px);
}

.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>

