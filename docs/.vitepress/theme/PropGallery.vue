<template>
  <div class="prop-gallery-wrapper">
    <!-- Loading State -->
    <div v-if="isLoading" class="loading-container">
      <div class="loading-content">
        <div class="spinner"></div>
        <h2>Loading Props...</h2>
        <p>Loading {{ totalPropsEstimate }}+ props from the gallery</p>
      </div>
    </div>
    
    <!-- Error State -->
    <div v-else-if="error" class="error-container">
      <div class="error-content">
        <h2>⚠️ Failed to Load Props</h2>
        <p>{{ error.message }}</p>
        <button @click="reloadPage" class="reload-button">Reload Page</button>
      </div>
    </div>
    
    <!-- Main Content -->
    <template v-else>
      <div class="gallery-content">
        <PropSidebar
          :categories="categories"
          :selectedCategory="selectedCategory"
          :selectedSubcategory="selectedSubcategory"
          :totalPropsCount="totalPropsCount"
          @update:selectedCategory="selectedCategory = $event"
          @update:selectedSubcategory="selectedSubcategory = $event"
        />
        
        <main class="prop-main">
          <h1 class="gallery-title">Props Gallery</h1>
          
          <PropSearch v-model="searchQuery" />
          
          <PropControls
            :paginatedPropsLength="paginatedProps.length"
            :filteredPropsLength="filteredProps.length"
            :searchQuery="searchQuery"
            :selectedCategory="selectedCategory"
            :selectedSubcategory="selectedSubcategory"
            :itemsPerPage="itemsPerPage"
            :columnsPerRow="columnsPerRow"
            @update:itemsPerPage="itemsPerPage = $event"
            @update:columnsPerRow="columnsPerRow = $event"
          />
          
          <PropGrid 
            v-if="paginatedProps.length > 0" 
            :paginatedProps="paginatedProps"
            :columnsPerRow="columnsPerRow"
          />
          <PropEmptyState 
            v-else 
            :searchQuery="searchQuery" 
          />
          
          <PropPagination
            v-if="totalPages > 1"
            :currentPage="currentPage"
            :totalPages="totalPages"
            :visiblePages="visiblePages"
            @goToPage="goToPage"
          />
        </main>
      </div>
      
      <div class="gallery-footer">
        <p>Credits: <a href="https://github.com/Jump-On-Studios/Documentation/blob/main/docs/.vitepress/theme/components/InteriorGallery.vue" target="_blank" rel="noopener noreferrer">Jump on Studios</a></p>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { usePropData } from './composables/usePropData';
import { useCategoriesMetadata } from './composables/useCategoriesMetadata';
import { usePropFilter } from './composables/usePropFilter';
import { usePagination } from './composables/usePagination';

import PropSidebar from './components/PropSidebar.vue';
import PropSearch from './components/PropSearch.vue';
import PropControls from './components/PropControls.vue';
import PropGrid from './components/PropGrid.vue';
import PropEmptyState from './components/PropEmptyState.vue';
import PropPagination from './components/PropPagination.vue';
import { PROPS_GALLERY, PAGINATION, GRID_LAYOUT, ANIMATION } from './constants';

// Constants
const totalPropsEstimate = PROPS_GALLERY.TOTAL_PROPS_ESTIMATE;

// State
const selectedCategory = ref('all');
const selectedSubcategory = ref('all');
const searchQuery = ref('');
const itemsPerPage = ref<number>(PAGINATION.DEFAULT_ITEMS_PER_PAGE);
const columnsPerRow = ref<number>(GRID_LAYOUT.DEFAULT_COLUMNS_PER_ROW);

// Data (with dynamic category loading)
const { propData, isLoading, error } = usePropData(selectedCategory);

// Categories (from metadata)
const { categories, totalProps: totalPropsCount } = useCategoriesMetadata();

// Filtering
const { filteredProps } = usePropFilter(
  propData,
  searchQuery,
  selectedCategory,
  selectedSubcategory
);

// Pagination
const { currentPage, totalPages, paginatedItems: paginatedProps, visiblePages, goToPage } = 
  usePagination(filteredProps, itemsPerPage);

// Scroll to top of props list when category or subcategory changes
watch([selectedCategory, selectedSubcategory], () => {
  scrollToTop();
});

// Scroll to top function with smooth behavior
function scrollToTop(): void {
  if (typeof window === 'undefined') return;
  
  // Scroll the main window to the gallery title
  const galleryTitle = document.querySelector('.gallery-title');
  if (galleryTitle) {
    galleryTitle.scrollIntoView({ 
      behavior: ANIMATION.SMOOTH_SCROLL_BEHAVIOR as ScrollBehavior,
      block: 'start'
    });
  }
}

// Error handling
function reloadPage() {
  window.location.reload();
}
</script>

<style scoped>
/* Layout - Mobile First */
.prop-gallery-wrapper {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  margin: var(--space-6) auto;
  max-width: 1600px;
  width: 100%;
  padding: 0 var(--space-4);
}

/* Gallery Content Container */
.gallery-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  width: 100%;
}

/* Main Content */
.prop-main {
  flex: 1;
  min-width: 0;
}

.gallery-title {
  font-size: var(--text-3xl);
  font-weight: var(--font-bold);
  color: var(--vp-c-text-1);
  margin: 0 0 var(--space-10) 0; /* Increased from space-6 (24px) to space-10 (40px) */
  text-align: center;
  letter-spacing: -0.02em;
}

/* Loading State */
.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  width: 100%;
}

.loading-content {
  text-align: center;
  padding: var(--space-8);
}

.loading-content h2 {
  font-size: var(--text-2xl);
  font-weight: var(--font-semibold);
  color: var(--vp-c-text-1);
  margin: var(--space-6) 0 var(--space-2) 0;
}

.loading-content p {
  font-size: var(--text-base);
  color: var(--vp-c-text-2);
  margin: 0;
}

/* Spinner Animation */
.spinner {
  margin: 0 auto;
  width: 50px;
  height: 50px;
  border: 4px solid var(--vp-c-divider);
  border-top-color: var(--vp-c-brand-1);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Error State */
.error-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  width: 100%;
}

.error-content {
  text-align: center;
  padding: var(--space-8);
  max-width: 500px;
}

.error-content h2 {
  font-size: var(--text-2xl);
  font-weight: var(--font-semibold);
  color: var(--vp-c-danger-1);
  margin: 0 0 var(--space-4) 0;
}

.error-content p {
  font-size: var(--text-base);
  color: var(--vp-c-text-2);
  margin: 0 0 var(--space-6) 0;
}

.reload-button {
  padding: var(--space-3) var(--space-6);
  font-size: var(--text-base);
  font-weight: var(--font-medium);
  color: var(--vp-c-bg);
  background-color: var(--vp-c-brand-1);
  border: none;
  border-radius: var(--radius-lg);
  cursor: pointer;
  transition: background-color var(--transition-base);
  min-height: var(--touch-target-min);
}

.reload-button:hover {
  background-color: var(--vp-c-brand-2);
}

.reload-button:active {
  transform: scale(0.98);
}

/* Footer */
.gallery-footer {
  width: 100%;
  text-align: center;
  padding: var(--space-8) var(--space-4) var(--space-4);
  margin-top: 0;
  border-top: 1px solid var(--vp-c-divider);
}

.gallery-footer p {
  margin: 0;
  font-size: var(--text-sm);
  color: var(--vp-c-text-2);
  font-style: italic;
}

.gallery-footer a {
  color: var(--vp-c-brand);
  text-decoration: none;
  font-weight: var(--font-medium);
  transition: color var(--transition-base);
}

.gallery-footer a:hover {
  color: var(--vp-c-brand-dark);
  text-decoration: underline;
}

/* Tablets: Adjust title size (BREAKPOINTS.TABLET_MIN) */
@media (min-width: 768px) {
  .gallery-title {
    font-size: var(--text-4xl);
  }
}

/* Desktop: Side-by-side layout (BREAKPOINTS.DESKTOP_MIN) */
@media (min-width: 1024px) {
  .gallery-content {
    flex-direction: row;
    gap: var(--space-8);
  }

  .gallery-title {
    font-size: var(--text-4xl);
  }
}

/* Large Desktop: Maximum spacing (BREAKPOINTS.LARGE_DESKTOP_MIN) */
@media (min-width: 1200px) {
  .prop-gallery-wrapper {
    gap: var(--space-8);
    margin: var(--space-8) auto;
  }

  .gallery-title {
    font-size: var(--text-5xl);
  }
}
</style>

