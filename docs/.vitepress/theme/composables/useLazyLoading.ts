import { onUnmounted, nextTick } from "vue";
import { IMAGE_LOADING } from "../constants";

/**
 * Lazy loading composable for images using IntersectionObserver
 * 
 * @returns Initialization function and cleanup
 */
export function useLazyLoading(): {
  initLazyLoading: () => void;
  cleanup: () => void;
} {
  let imageObserver: IntersectionObserver | null = null;

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
          const img = entry.target as HTMLImageElement;
          const src = img.getAttribute('data-src');
          
          if (src && !img.src) {
            img.src = src;
            img.classList.add('loaded');
            imageObserver?.unobserve(img);
          }
        }
      });
    }, {
      rootMargin: IMAGE_LOADING.LAZY_LOAD_ROOT_MARGIN,
    });
    
    // Observe all lazy images
    nextTick(() => {
      document.querySelectorAll('.lazy-image').forEach(img => {
        imageObserver?.observe(img);
      });
    });
  }

  function cleanup() {
    if (imageObserver) {
      imageObserver.disconnect();
      imageObserver = null;
    }
  }

  onUnmounted(() => {
    cleanup();
  });

  return {
    initLazyLoading,
    cleanup
  };
}

