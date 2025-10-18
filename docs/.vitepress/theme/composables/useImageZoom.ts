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
          zoomInstance = mediumZoom(loadedImages as NodeListOf<HTMLElement>, {
            background: IMAGE_LOADING.ZOOM_BACKGROUND,
            margin: IMAGE_LOADING.ZOOM_MARGIN,
            scrollOffset: IMAGE_LOADING.ZOOM_SCROLL_OFFSET,
          });
        }
      });
    });
  }

  function cleanup() {
    if (zoomInstance) {
      try {
        zoomInstance.detach();
      } catch (e) {
        // Ignore errors
      }
      zoomInstance = null;
    }
  }

  onUnmounted(() => {
    cleanup();
  });

  return {
    initializeZoom,
    cleanup
  };
}

