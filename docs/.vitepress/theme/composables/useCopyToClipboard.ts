import { ref, type Ref } from "vue";
import { CLIPBOARD } from "../constants";

/**
 * Copy-to-clipboard composable with fallback for older browsers
 * 
 * @returns Copied state and copy function
 */
export function useCopyToClipboard(): {
  copiedId: Ref<string | null>;
  copyToClipboard: (id: string) => Promise<void>;
} {
  const copiedId = ref<string | null>(null);

  async function copyToClipboard(id: string) {
    try {
      // Modern Clipboard API
      await navigator.clipboard.writeText(id);
      copiedId.value = id;
      setTimeout(() => {
        copiedId.value = null;
      }, CLIPBOARD.COPIED_FEEDBACK_DURATION);
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
      }, CLIPBOARD.COPIED_FEEDBACK_DURATION);
    }
  }

  return {
    copiedId,
    copyToClipboard
  };
}

