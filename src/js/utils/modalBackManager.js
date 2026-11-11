/**
 * Global Modal & Sheet Back Navigation Manager
 * 
 * Provides a LIFO (last-in, first-out) stack for open modals, sheets, and drawers.
 * When the user triggers a device back action (hardware back button, swipe gesture, etc.):
 * If a modal or sheet is registered in this stack, popAndDismiss() executes the dismiss
 * function and returns true, preventing the router from navigating away to the dashboard.
 */

const dismissStack = [];

export const registerModalDismiss = (dismissFn) => {
  if (typeof dismissFn !== 'function') return () => {};
  dismissStack.push(dismissFn);
  return () => {
    const idx = dismissStack.lastIndexOf(dismissFn);
    if (idx !== -1) {
      dismissStack.splice(idx, 1);
    }
  };
};

export const hasActiveModal = () => dismissStack.length > 0;

export const popAndDismiss = () => {
  if (dismissStack.length > 0) {
    const dismissFn = dismissStack.pop();
    try {
      if (typeof dismissFn === 'function') {
        dismissFn();
        return true;
      }
    } catch (e) {
      console.warn('[ModalBackManager] Error dismissing modal:', e);
    }
  }
  return false;
};

export default {
  registerModalDismiss,
  hasActiveModal,
  popAndDismiss
};
