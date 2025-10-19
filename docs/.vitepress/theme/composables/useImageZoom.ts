import { onUnmounted, nextTick } from "vue";
import type mediumZoom from "medium-zoom";
import { IMAGE_LOADING } from "../constants";

type Zoom = ReturnType<typeof mediumZoom>;

/**
 * Image zoom composable using MediumZoom
 * 
 * @returns Initialization function and cleanup
 */
export function useImageZoom(): {
  initializeZoom: () => void;
  cleanup: () => void;
} {
  let zoomInstance: Zoom | null = null;

  function initializeZoom(): void {
    if (typeof window === 'undefined') return;
    
    void nextTick((): void => {
      void import("medium-zoom").then(({ default: mediumZoom }): void => {
        // Detach previous instance
        if (zoomInstance) {
          try {
            zoomInstance.detach();
          } catch (e) {
            // Ignore errors - instance might already be detached
            console.debug("Failed to detach zoom instance:", e);
          }
        }
        
        // Only attach to loaded images
        const loadedImages = document.querySelectorAll('.prop-image.loaded');
        
        if (loadedImages.length > 0) {
          zoomInstance = mediumZoom(loadedImages as NodeListOf<HTMLElement>, {
            background: IMAGE_LOADING.ZOOM_BACKGROUND,
            margin: IMAGE_LOADING.ZOOM_MARGIN,
            scrollOffset: IMAGE_LOADING.ZOOM_SCROLL_OFFSET,
          });
        }
      }).catch((error: unknown): void => {
        console.error("Failed to load medium-zoom:", error);
      });
    });
  }

  function cleanup(): void {
    if (zoomInstance) {
      try {
        zoomInstance.detach();
      } catch (e) {
        // Ignore errors - instance might already be detached
        console.debug("Failed to cleanup zoom instance:", e);
      }
      zoomInstance = null;
    }
  }

  onUnmounted((): void => {
    cleanup();
  });

  return {
    initializeZoom,
    cleanup
  };
}

