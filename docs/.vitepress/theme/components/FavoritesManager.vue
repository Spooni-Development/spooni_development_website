<template>
  <div class="favorites-manager" v-if="favoritesCount > 0 && showAlways">
    <!-- Clear Button -->
    <button 
      @click="handleClear" 
      class="clear-button"
      title="Remove all favorites"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="3 6 5 6 21 6"></polyline>
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
      </svg>
      Clear All
    </button>

    <!-- Confirmation Dialog -->
    <div v-if="showConfirmation" class="confirmation-overlay" @click="cancelClear">
      <div class="confirmation-dialog" @click.stop>
        <div class="confirmation-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
        </div>
        <h3 class="confirmation-title">Clear All Favorites?</h3>
        <p class="confirmation-message">
          This will remove all {{ favoritesCount }} favorite{{ favoritesCount !== 1 ? 's' : '' }} from your list. This action cannot be undone.
        </p>
        <div class="confirmation-actions">
          <button @click="cancelClear" class="cancel-button">
            Cancel
          </button>
          <button @click="confirmClear" class="confirm-button">
            Clear All
          </button>
        </div>
      </div>
    </div>

    <!-- Success Message -->
    <div v-if="message" class="manager-message" :class="messageType">
      {{ message }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue';

defineProps<{
  favoritesCount: number;
  showAlways?: boolean;
}>();

// Inject clear favorites function
const clearFavoritesAction = inject<() => void>('clearFavorites', () => {});

const showConfirmation = ref<boolean>(false);
const message = ref<string>('');
const messageType = ref<'success' | 'error'>('success');

/**
 * Show confirmation dialog
 */
function handleClear(): void {
  showConfirmation.value = true;
}

/**
 * Cancel clearing favorites
 */
function cancelClear(): void {
  showConfirmation.value = false;
}

function confirmClear(): void {
  showConfirmation.value = false;
  clearFavoritesAction();
  showMessage('All favorites cleared', 'success');
}

/**
 * Show temporary message
 */
function showMessage(text: string, type: 'success' | 'error'): void {
  message.value = text;
  messageType.value = type;
  
  setTimeout(() => {
    message.value = '';
  }, 3000);
}
</script>

<style scoped>
.favorites-manager {
  margin-bottom: var(--space-6);
  position: relative;
}

.clear-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-4);
  background: transparent;
  color: var(--vp-c-text-2);
  border: 2px solid var(--vp-c-divider);
  border-radius: var(--radius-lg);
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
  cursor: pointer;
  transition: all var(--transition-base) ease;
  min-height: var(--touch-target-min);
  font-family: inherit;
  white-space: nowrap;
}

.clear-button:hover {
  background: rgba(244, 63, 94, 0.1);
  color: var(--vp-c-danger-1);
  border-color: var(--vp-c-danger-1);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(244, 63, 94, 0.2);
}

.clear-button:active {
  transform: translateY(0);
}

/* Confirmation Dialog */
.confirmation-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: var(--space-4);
  animation: fadeIn 0.2s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.confirmation-dialog {
  background: var(--vp-c-bg);
  border-radius: var(--radius-lg);
  padding: var(--space-8);
  max-width: 400px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
  animation: slideUp 0.3s ease-out;
  border: 2px solid var(--vp-c-divider);
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.confirmation-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--space-4);
  color: var(--vp-c-warning-1);
}

.confirmation-title {
  font-size: var(--text-xl);
  font-weight: var(--font-bold);
  color: var(--vp-c-text-1);
  margin: 0 0 var(--space-3) 0;
  text-align: center;
}

.confirmation-message {
  font-size: var(--text-base);
  color: var(--vp-c-text-2);
  line-height: var(--leading-relaxed);
  margin: 0 0 var(--space-6) 0;
  text-align: center;
}

.confirmation-actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-3);
}

.cancel-button,
.confirm-button {
  padding: var(--space-3) var(--space-4);
  border: none;
  border-radius: var(--radius-lg);
  font-size: var(--text-base);
  font-weight: var(--font-semibold);
  cursor: pointer;
  transition: all var(--transition-base) ease;
  min-height: var(--touch-target-min);
  font-family: inherit;
}

.cancel-button {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  border: 2px solid var(--vp-c-divider);
}

.cancel-button:hover {
  background: var(--vp-c-bg-alt);
  border-color: var(--vp-c-text-3);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.confirm-button {
  background: var(--vp-c-danger-1);
  color: white;
}

.confirm-button:hover {
  background: var(--vp-c-danger-2);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(244, 63, 94, 0.4);
}

.cancel-button:active,
.confirm-button:active {
  transform: translateY(0);
}

.manager-message {
  margin-top: var(--space-3);
  padding: var(--space-3);
  border-radius: var(--radius-lg);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  text-align: center;
  animation: slideDown 0.3s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.manager-message.success {
  background: rgba(16, 185, 129, 0.1);
  color: #10b981;
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.manager-message.error {
  background: rgba(244, 63, 94, 0.1);
  color: #f43f5e;
  border: 1px solid rgba(244, 63, 94, 0.3);
}

/* Mobile: Adjust dialog */
@media (max-width: 640px) {
  .confirmation-dialog {
    padding: var(--space-6);
  }
  
  .confirmation-actions {
    grid-template-columns: 1fr;
  }
  
  .cancel-button {
    order: 2;
  }
  
  .confirm-button {
    order: 1;
  }
}
</style>

