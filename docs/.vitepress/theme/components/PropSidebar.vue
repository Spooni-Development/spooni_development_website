<template>
  <aside class="prop-sidebar">
    <div class="sidebar-content">
      <h3 class="sidebar-title">Categories</h3>
      
      <!-- All Props -->
      <div 
        class="category-item" 
        :class="{ active: selectedCategory === 'all' }"
        @click="selectCategory('all')"
      >
        <span class="category-name">
          <svg class="all-props-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="3" width="7" height="7"></rect>
            <rect x="14" y="3" width="7" height="7"></rect>
            <rect x="14" y="14" width="7" height="7"></rect>
            <rect x="3" y="14" width="7" height="7"></rect>
          </svg>
          All Props
        </span>
        <span class="category-count">{{ totalPropsCount }}</span>
      </div>

      <!-- Categories -->
      <div v-for="category in categories" :key="category.name" class="category-group">
        <div 
          class="category-item" 
          :class="{ active: selectedCategory === category.name && selectedSubcategory === 'all' }"
          @click="selectCategory(category.name)"
        >
          <span class="category-name">
            <svg v-if="category.name === 'Spooni Props'" class="spooni-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            {{ formatCategory(category.name) }}
          </span>
          <span class="category-count">{{ category.count }}</span>
        </div>

        <!-- Subcategories -->
        <div v-if="category.subcategories.length > 0 && selectedCategory === category.name" class="subcategory-list">
          <div 
            v-for="sub in category.subcategories" 
            :key="sub.name"
            class="subcategory-item"
            :class="{ active: selectedSubcategory === sub.name }"
            @click.stop="selectSubcategory(sub.name)"
          >
            <span class="subcategory-name">{{ formatCategory(sub.name) }}</span>
            <span class="subcategory-count">{{ sub.count }}</span>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { formatCategory } from '../utils/formatCategory';
import type { Category } from '../composables/usePropCategories';

const props = defineProps<{
  categories: Category[];
  selectedCategory: string;
  selectedSubcategory: string;
  totalPropsCount: number;
}>();

const emit = defineEmits<{
  'update:selectedCategory': [value: string];
  'update:selectedSubcategory': [value: string];
}>();

function selectCategory(category: string) {
  emit('update:selectedCategory', category);
  emit('update:selectedSubcategory', 'all');
}

function selectSubcategory(subcategory: string) {
  emit('update:selectedSubcategory', subcategory);
}
</script>

<style scoped>
/* Sidebar */
.prop-sidebar {
  width: 280px;
  flex-shrink: 0;
  position: sticky;
  top: 80px;
  height: calc(100vh - 100px);
  overflow-y: auto;
  overflow-x: hidden;
}

/* Custom Scrollbar Styling */
.prop-sidebar::-webkit-scrollbar {
  width: 8px;
}

.prop-sidebar::-webkit-scrollbar-track {
  background: transparent;
  border-radius: var(--radius-lg);
}

.prop-sidebar::-webkit-scrollbar-thumb {
  background: var(--vp-c-bg);
  border-radius: var(--radius-lg);
  transition: background var(--transition-base) ease;
}

.prop-sidebar::-webkit-scrollbar-thumb:hover {
  background: var(--vp-c-brand);
}

/* Firefox Scrollbar */
.prop-sidebar {
  scrollbar-width: thin;
  scrollbar-color: var(--vp-c-bg) transparent;
}

.sidebar-content {
  background: var(--vp-c-bg-soft);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
}

.sidebar-title {
  font-size: var(--text-lg);
  font-weight: var(--font-semibold);
  color: var(--vp-c-text-1);
  margin: 0 0 var(--space-4) 0;
  padding-bottom: var(--space-3);
  border-bottom: 2px solid var(--vp-c-divider);
}

.category-group {
  margin-bottom: var(--space-2);
}

.category-item,
.subcategory-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-3) var(--space-4);
  cursor: pointer;
  border-radius: var(--radius-lg);
  transition: all var(--transition-slow) ease;
  user-select: none;
  position: relative;
  min-height: var(--touch-target-min);
}

/* Main categories - default state */
.category-item {
  font-weight: 500;
  background: var(--vp-c-bg);
  margin-bottom: var(--space-2);
}

.category-item .category-name {
  color: var(--vp-c-text-1);
  transition: color var(--transition-slow) ease;
}

.category-item .category-count {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  transition: all var(--transition-slow) ease;
}

/* Main categories - hover state */
.category-item:hover {
  background: var(--vp-c-brand);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.category-item:hover .category-name {
  color: white;
}

.category-item:hover .category-count {
  background: rgba(255, 255, 255, 0.25);
  color: white;
}

/* Main categories - active state */
.category-item.active {
  background: var(--vp-c-brand);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.category-item.active .category-name {
  color: white;
}

.category-item.active .category-count {
  background: rgba(255, 255, 255, 0.3);
  color: white;
  font-weight: 700;
}

/* Text and badge container */
.category-name,
.subcategory-name {
  flex: 1;
  min-width: 0;
  margin-right: var(--space-3);
  transition: color var(--transition-slow) ease;
  display: flex;
  align-items: center;
  gap: var(--space-2);
  word-wrap: break-word;
  overflow-wrap: break-word;
  line-height: var(--leading-snug);
}

/* All Props Icon */
.all-props-icon {
  flex-shrink: 0;
  transition: all 0.25s ease;
}

.category-item:hover .all-props-icon,
.category-item.active .all-props-icon {
  transform: scale(1.1);
}

/* Spooni Props Icon */
.spooni-icon {
  flex-shrink: 0;
  color: #FFD700;
  filter: drop-shadow(0 1px 2px rgba(255, 215, 0, 0.3));
  transition: all 0.25s ease;
}

.category-item:hover .spooni-icon,
.category-item.active .spooni-icon {
  color: white;
  filter: drop-shadow(0 2px 4px rgba(255, 255, 255, 0.5));
}

.category-count,
.subcategory-count {
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
  padding: var(--space-1) var(--space-2);
  border-radius: var(--radius-xl);
  flex-shrink: 0;
  min-width: 28px;
  text-align: center;
  transition: all var(--transition-slow) ease;
}

/* Subcategories Container */
.subcategory-list {
  margin-left: var(--space-2);
  margin-top: var(--space-1);
  padding-left: var(--space-3);
  border-left: 2px solid var(--vp-c-divider);
}

/* Subcategories - default state */
.subcategory-item {
  font-size: var(--text-sm);
  font-weight: var(--font-normal);
  padding: var(--space-2) var(--space-3);
  margin-bottom: var(--space-1);
  background: transparent;
}

.subcategory-item .subcategory-name {
  color: var(--vp-c-text-2);
}

.subcategory-item .subcategory-count {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-3);
}

/* Subcategories - hover state */
.subcategory-item:hover {
  background: var(--vp-c-bg-soft);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.subcategory-item:hover .subcategory-name {
  color: var(--vp-c-text-1);
}

.subcategory-item:hover .subcategory-count {
  background: var(--vp-c-divider);
  color: var(--vp-c-text-1);
}

/* Subcategories - active state with accent bar */
.subcategory-item.active {
  background: var(--vp-c-brand-soft);
  font-weight: 500;
  position: relative;
  padding-left: 0.75rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Accent bar using ::before pseudo-element */
.subcategory-item.active::before {
  content: '';
  position: absolute;
  left: -0.75rem;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(180deg, var(--vp-c-brand) 0%, var(--vp-c-brand-dark, var(--vp-c-brand)) 100%);
  border-radius: var(--radius-sm);
  box-shadow: 0 0 12px rgba(255, 119, 0, 0.4);
  animation: slideIn 0.3s ease-out;
  transition: all 0.3s ease;
}

@keyframes slideIn {
  from {
    transform: translateX(-4px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.subcategory-item.active .subcategory-name {
  color: white;
  font-weight: 600;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.subcategory-item.active .subcategory-count {
  background: rgba(255, 255, 255, 0.25);
  color: white;
  font-weight: 700;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
}

/* Tablets: Adjust sidebar (BREAKPOINTS.TABLET_MIN to TABLET_MAX) */
@media (min-width: 768px) and (max-width: 1023px) {
  .prop-sidebar {
    width: 100%;
    position: static;
    height: auto;
    margin-bottom: var(--space-8);
  }

  .sidebar-content {
    max-height: min(50vh, 500px);
    overflow-y: auto;
  }
}

/* Below Desktop: Full width sidebar (BREAKPOINTS.TABLET_MAX) */
@media (max-width: 1023px) {
  .prop-sidebar {
    width: 100%;
    position: static;
    height: auto;
    margin-bottom: var(--space-8);
  }

  .sidebar-content {
    max-height: min(60vh, 600px);
    overflow-y: auto;
    padding: var(--space-4);
  }
  
  /* Slightly smaller touch targets on mobile */
  .category-item,
  .subcategory-item {
    padding: var(--space-2) var(--space-3);
  }
}
</style>

