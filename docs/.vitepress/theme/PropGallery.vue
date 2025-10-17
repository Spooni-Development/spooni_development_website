<template>
  <div class="prop-gallery-wrapper">
    <!-- Sidebar -->
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
          <span class="category-count">{{ propData.length }}</span>
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

    <!-- Main Content -->
    <main class="prop-main">
      <!-- Gallery Title -->
      <h1 class="gallery-title">Props Gallery</h1>

      <!-- Search Section -->
      <div class="search-container">
        <div class="search-wrapper">
          <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
          <input 
            type="text" 
            v-model="searchQuery" 
            placeholder="Search props by name..." 
            class="search-input"
            @input="onSearchInput"
          />
          <button v-if="searchQuery" @click="clearSearch" class="clear-button" title="Clear search">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      <!-- Results Info & Pagination Controls -->
      <div class="controls-bar">
        <div class="results-info">
          <span v-if="searchQuery">
            Found {{ filteredProps.length }} prop{{ filteredProps.length !== 1 ? "s" : "" }} matching "{{ searchQuery }}"
          </span>
          <span v-else-if="selectedSubcategory !== 'all'">
            Showing {{ paginatedProps.length }} of {{ filteredProps.length }} prop{{ filteredProps.length !== 1 ? "s" : "" }} 
            from subcategory <strong>"{{ formatCategory(selectedSubcategory) }}"</strong>
          </span>
          <span v-else-if="selectedCategory !== 'all'">
            Showing {{ paginatedProps.length }} of {{ filteredProps.length }} prop{{ filteredProps.length !== 1 ? "s" : "" }} 
            from category <strong>"{{ formatCategory(selectedCategory) }}"</strong>
          </span>
          <span v-else>
            Showing {{ paginatedProps.length }} of {{ filteredProps.length }} prop{{ filteredProps.length !== 1 ? "s" : "" }}
          </span>
        </div>

        <!-- Items per page selector -->
        <div class="per-page-selector">
          <label for="per-page">Per page:</label>
          <select id="per-page" v-model="itemsPerPage" class="per-page-select">
            <option :value="25">25</option>
            <option :value="50">50</option>
            <option :value="100">100</option>
            <option :value="200">200</option>
          </select>
        </div>
      </div>

      <!-- Gallery Grid -->
      <div v-if="paginatedProps.length > 0" class="gallery-grid">
        <div v-for="prop in paginatedProps" :key="prop.id" class="gallery-item">
          <div class="image-container">
            <img 
              :data-src="`https://spooni.de/docs-props-img/${prop.id}.png`" 
              :alt="prop.id" 
              class="prop-image lazy-image" 
              loading="lazy"
            />
          </div>
          <div class="prop-info">
            <h4 :title="prop.id">{{ prop.id }}</h4>
            <button @click="copyToClipboard(prop.id)" class="copy-button" :class="{ copied: copiedId === prop.id }">
              {{ copiedId === prop.id ? 'Copied!' : 'Copy Name' }}
            </button>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="empty-state">
        <p v-if="searchQuery">No props found matching "{{ searchQuery }}"</p>
        <p v-else>No props match the selected filters.</p>
      </div>

      <!-- Pagination -->
      <div v-if="totalPages > 1" class="pagination">
        <button 
          class="pagination-button" 
          :disabled="currentPage === 1"
          @click="goToPage(1)"
        >
          ««
        </button>
        <button 
          class="pagination-button" 
          :disabled="currentPage === 1"
          @click="goToPage(currentPage - 1)"
        >
          ‹
        </button>

        <template v-for="page in visiblePages" :key="page">
          <button 
            v-if="page !== '...'"
            class="pagination-button" 
            :class="{ active: currentPage === page }"
            @click="goToPage(page)"
          >
            {{ page }}
          </button>
          <span v-else class="pagination-ellipsis">...</span>
        </template>

        <button 
          class="pagination-button" 
          :disabled="currentPage === totalPages"
          @click="goToPage(currentPage + 1)"
        >
          ›
        </button>
        <button 
          class="pagination-button" 
          :disabled="currentPage === totalPages"
          @click="goToPage(totalPages)"
        >
          »»
        </button>

        <span class="pagination-info">
          Page {{ currentPage }} of {{ totalPages }}
        </span>
      </div>

      <!-- Footer -->
      <div class="gallery-footer">
        <p>Credits: Jump on Studios</p>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, nextTick, onUnmounted } from "vue";
import propDataJson from "./propData.json";

// Import prop data
const propData = propDataJson;

// Reactive state
const selectedCategory = ref("all");
const selectedSubcategory = ref("all");
const searchQuery = ref("");
const copiedId = ref(null);
const currentPage = ref(1);
const itemsPerPage = ref(50);

// Lazy loading
let imageObserver = null;

// MediumZoom instance
let zoomInstance = null;

// Compute categories and subcategories
const categories = computed(() => {
  const categoryMap = new Map();
  
  propData.forEach(prop => {
    if (!categoryMap.has(prop.category)) {
      categoryMap.set(prop.category, {
        name: prop.category,
        count: 0,
        subcategories: new Map(),
      });
    }
    
    const category = categoryMap.get(prop.category);
    category.count++;
    
    if (prop.subcategory) {
      if (!category.subcategories.has(prop.subcategory)) {
        category.subcategories.set(prop.subcategory, {
          name: prop.subcategory,
          count: 0,
        });
      }
      category.subcategories.get(prop.subcategory).count++;
    }
  });
  
  // Convert to array and sort
  return Array.from(categoryMap.values())
    .map(cat => ({
      ...cat,
      subcategories: Array.from(cat.subcategories.values()).sort((a, b) => 
        a.name.localeCompare(b.name)
      ),
    }))
    .sort((a, b) => {
      // Prioritize "Spooni Props" category
      if (a.name === "Spooni Props") return -1;
      if (b.name === "Spooni Props") return 1;
      // Sort all other categories alphabetically
      return a.name.localeCompare(b.name);
    });
});

// Filtered props based on search query, category and subcategory
const filteredProps = computed(() => {
  return propData.filter(prop => {
    // Search filter
    const searchTerm = searchQuery.value.toLowerCase().trim();
    const matchesSearch = searchQuery.value === "" || 
      prop.id.toLowerCase().includes(searchTerm);
    
    // Category filter
    const matchesCategory = selectedCategory.value === "all" || 
      prop.category === selectedCategory.value;
    
    // Subcategory filter
    const matchesSubcategory = selectedSubcategory.value === "all" || 
      prop.subcategory === selectedSubcategory.value;
    
    return matchesSearch && matchesCategory && matchesSubcategory;
  });
});

// Pagination
const totalPages = computed(() => {
  return Math.ceil(filteredProps.value.length / itemsPerPage.value);
});

const paginatedProps = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return filteredProps.value.slice(start, end);
});

// Visible page numbers for pagination
const visiblePages = computed(() => {
  const pages = [];
  const total = totalPages.value;
  const current = currentPage.value;
  
  if (total <= 7) {
    // Show all pages if 7 or less
    for (let i = 1; i <= total; i++) {
      pages.push(i);
    }
  } else {
    // Always show first page
    pages.push(1);
    
    if (current > 3) {
      pages.push('...');
    }
    
    // Show pages around current
    const start = Math.max(2, current - 1);
    const end = Math.min(total - 1, current + 1);
    
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    
    if (current < total - 2) {
      pages.push('...');
    }
    
    // Always show last page
    pages.push(total);
  }
  
  return pages;
});

// Category selection
function selectCategory(category) {
  selectedCategory.value = category;
  selectedSubcategory.value = "all";
  currentPage.value = 1;
}

function selectSubcategory(subcategory) {
  selectedSubcategory.value = subcategory;
  currentPage.value = 1;
}

// Search
function onSearchInput() {
  currentPage.value = 1;
}

function clearSearch() {
  searchQuery.value = "";
  currentPage.value = 1;
}

// Pagination
function goToPage(page) {
  if (page < 1 || page > totalPages.value) return;
  currentPage.value = page;
  
  // Scroll to top
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// Watch for items per page change
watch(itemsPerPage, () => {
  currentPage.value = 1;
});

// Watch for filtered props change (reset page if needed)
watch(filteredProps, () => {
  if (currentPage.value > totalPages.value) {
    currentPage.value = Math.max(1, totalPages.value);
  }
});

// Format category name
function formatCategory(category) {
  if (!category) return '';
  // First replace underscores with spaces
  return category
    .replace(/_/g, ' ')
    // Then capitalize the first letter of each word
    .replace(/\b\w/g, char => char.toUpperCase());
}

// Copy to clipboard
async function copyToClipboard(id) {
  try {
    await navigator.clipboard.writeText(id);
    copiedId.value = id;
    setTimeout(() => {
      copiedId.value = null;
    }, 2000);
  } catch (err) {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = id;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    
    copiedId.value = id;
    setTimeout(() => {
      copiedId.value = null;
    }, 2000);
  }
}

// Lazy loading images
function initLazyLoading() {
  if (typeof window === 'undefined') return;
  
  // Disconnect previous observer
  if (imageObserver) {
    imageObserver.disconnect();
  }
  
  // Create new observer
  imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute('data-src');
        
        if (src && !img.src) {
          img.src = src;
          img.classList.add('loaded');
          imageObserver.unobserve(img);
        }
      }
    });
  }, {
    rootMargin: '50px',
  });
  
  // Observe all lazy images
  nextTick(() => {
    document.querySelectorAll('.lazy-image').forEach(img => {
      imageObserver.observe(img);
    });
  });
}

// Initialize MediumZoom
function initializeZoom() {
  if (typeof window === 'undefined') return;
  
  nextTick(() => {
    import("medium-zoom").then(({ default: mediumZoom }) => {
      // Detach previous instance
      if (zoomInstance) {
        try {
          zoomInstance.detach();
        } catch (e) {
          // Ignore errors
        }
      }
      
      // Only attach to loaded images
      const loadedImages = document.querySelectorAll('.prop-image.loaded');
      
      if (loadedImages.length > 0) {
        zoomInstance = mediumZoom(loadedImages, {
          background: "rgba(0, 0, 0, 0.8)",
          margin: 24,
          scrollOffset: 0,
        });
      }
    });
  });
}

// Watch for paginated props change
watch(paginatedProps, () => {
  nextTick(() => {
    initLazyLoading();
    
    // Initialize zoom after images start loading
    setTimeout(() => {
      initializeZoom();
    }, 500);
  });
}, { flush: 'post' });

// Lifecycle hooks
onMounted(() => {
  initLazyLoading();
  
  // Initialize zoom after initial load
  setTimeout(() => {
    initializeZoom();
  }, 1000);
});

onUnmounted(() => {
  if (imageObserver) {
    imageObserver.disconnect();
  }
  
  if (zoomInstance) {
    try {
      zoomInstance.detach();
    } catch (e) {
      // Ignore errors
    }
  }
});
</script>

<style scoped>
/* Layout */
.prop-gallery-wrapper {
  display: flex;
  gap: 2rem;
  margin: 2rem auto;
  max-width: 1600px;
  width: 100%;
  padding: 0 1rem;
}

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

.sidebar-content {
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  padding: 1.5rem;
  border: 1px solid var(--vp-c-divider);
}

.sidebar-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0 0 1rem 0;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid var(--vp-c-divider);
}

.category-group {
  margin-bottom: 0.5rem;
}

.category-item,
.subcategory-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.25s ease;
  user-select: none;
  position: relative;
}

/* Hauptkategorien - Normal */
.category-item {
  font-weight: 500;
  background: var(--vp-c-bg);
  margin-bottom: 0.25rem;
}

.category-item .category-name {
  color: var(--vp-c-text-1);
  transition: color 0.25s ease;
}

.category-item .category-count {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  transition: all 0.25s ease;
}

/* Hauptkategorien - Hover */
.category-item:hover {
  background: var(--vp-c-brand);
  transform: translateX(2px);
}

.category-item:hover .category-name {
  color: white;
}

.category-item:hover .category-count {
  background: rgba(255, 255, 255, 0.25);
  color: white;
}

/* Hauptkategorien - Active */
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

/* Text und Badge Container */
.category-name,
.subcategory-name {
  flex: 1;
  min-width: 0;
  margin-right: 0.75rem;
  transition: color 0.25s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  word-wrap: break-word;
  overflow-wrap: break-word;
  line-height: 1.4;
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
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  flex-shrink: 0;
  min-width: 28px;
  text-align: center;
  transition: all 0.25s ease;
}

/* Subcategories Container */
.subcategory-list {
  margin-left: 0.5rem;
  margin-top: 0.25rem;
  padding-left: 0.75rem;
  border-left: 2px solid var(--vp-c-divider);
}

/* Subkategorien - Normal */
.subcategory-item {
  font-size: 0.9rem;
  font-weight: 400;
  padding: 0.5rem 0.75rem;
  margin-bottom: 0.125rem;
  background: transparent;
}

.subcategory-item .subcategory-name {
  color: var(--vp-c-text-2);
}

.subcategory-item .subcategory-count {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-3);
}

/* Subkategorien - Hover */
.subcategory-item:hover {
  background: var(--vp-c-bg-soft);
  transform: translateX(2px);
}

.subcategory-item:hover .subcategory-name {
  color: var(--vp-c-text-1);
}

.subcategory-item:hover .subcategory-count {
  background: var(--vp-c-divider);
  color: var(--vp-c-text-1);
}

/* Subkategorien - Active (mit orangem Balken) */
.subcategory-item.active {
  background: var(--vp-c-brand-soft);
  font-weight: 500;
  position: relative;
  padding-left: 0.75rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Orange Balken als ::before Pseudo-Element (verdeckt KEINEN Text) */
.subcategory-item.active::before {
  content: '';
  position: absolute;
  left: -0.75rem;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(180deg, var(--vp-c-brand) 0%, var(--vp-c-brand-dark, var(--vp-c-brand)) 100%);
  border-radius: 2px;
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

/* Text bleibt vollständig sichtbar */
.subcategory-item.active .subcategory-name {
  color: var(--vp-c-brand);
  font-weight: 600;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

/* Badge bleibt vollständig sichtbar */
.subcategory-item.active .subcategory-count {
  background: var(--vp-c-brand);
  color: white;
  font-weight: 700;
  box-shadow: 0 2px 4px rgba(255, 119, 0, 0.2);
}

/* Main Content */
.prop-main {
  flex: 1;
  min-width: 0;
}

.gallery-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 0 0 2rem 0;
  text-align: center;
  letter-spacing: -0.02em;
}

/* Search */
.search-container {
  margin-bottom: 1.5rem;
}

.search-wrapper {
  position: relative;
  max-width: 600px;
  margin: 0 auto;
}

.search-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--vp-c-text-2);
  pointer-events: none;
}

.search-input {
  width: 100%;
  padding: 0.875rem 3rem;
  border: 2px solid var(--vp-c-border);
  border-radius: 8px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.2s ease;
  outline: none;
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
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: var(--vp-c-text-2);
  cursor: pointer;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  border-radius: 4px;
  transition: all 0.2s ease;
}

.clear-button:hover {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
}

/* Controls Bar */
.controls-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.results-info {
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}

.per-page-selector {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}

.per-page-select {
  padding: 0.375rem 0.75rem;
  border: 1px solid var(--vp-c-border);
  border-radius: 4px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.per-page-select:hover {
  border-color: var(--vp-c-brand);
}

.per-page-select:focus {
  outline: none;
  border-color: var(--vp-c-brand);
  box-shadow: 0 0 0 2px var(--vp-c-brand-soft);
}

/* Gallery Grid */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.25rem;
  margin-bottom: 2rem;
}

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
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--vp-c-bg-soft);
  overflow: hidden;
  padding: 1rem;
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
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
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
  padding: 0.5rem 1rem;
  background: var(--vp-c-brand);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;
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

/* Pagination */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin: 2rem 0;
  flex-wrap: wrap;
}

.pagination-button {
  min-width: 40px;
  height: 40px;
  padding: 0.5rem 0.75rem;
  border: 1px solid var(--vp-c-border);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.2s ease;
  font-family: inherit;
}

.pagination-button:hover:not(:disabled) {
  background: var(--vp-c-brand-soft);
  border-color: var(--vp-c-brand);
  color: var(--vp-c-brand);
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
  padding: 0.5rem;
}

.pagination-info {
  margin-left: 1rem;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}

/* Empty State */
.empty-state {
  text-align: center;
  padding: 4rem 2rem;
  color: var(--vp-c-text-2);
}

.empty-state p {
  font-size: 1.1rem;
  margin: 0;
}

/* Footer */
.gallery-footer {
  text-align: center;
  padding: 3rem 1rem 1rem;
  margin-top: 2rem;
  border-top: 1px solid var(--vp-c-divider);
}

.gallery-footer p {
  margin: 0;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  font-style: italic;
}

/* Mobile Responsiveness */
@media (max-width: 1200px) {
  .prop-gallery-wrapper {
    flex-direction: column;
  }

  .prop-sidebar {
    width: 100%;
    position: static;
    height: auto;
    margin-bottom: 2rem;
  }

  .sidebar-content {
    max-height: 400px;
    overflow-y: auto;
  }

  .gallery-title {
    font-size: 2rem;
  }

  .gallery-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 900px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .image-container {
    height: 200px;
  }
}

@media (max-width: 640px) {
  .prop-gallery-wrapper {
    padding: 0 0.5rem;
  }

  .gallery-title {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }

  .search-input {
    padding: 0.75rem 2.5rem;
    font-size: 0.9rem;
  }

  .controls-bar {
    flex-direction: column;
    align-items: flex-start;
  }

  .gallery-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .image-container {
    height: 240px;
  }

  .pagination {
    gap: 0.25rem;
  }

  .pagination-button {
    min-width: 36px;
    height: 36px;
    padding: 0.375rem 0.5rem;
    font-size: 0.85rem;
  }

  .pagination-info {
    width: 100%;
    text-align: center;
    margin: 0.5rem 0 0 0;
  }
}
</style>

