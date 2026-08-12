import { createRoot } from "react-dom/client";
import React from 'react';
import App from './App'
import { Provider } from "react-redux";
import { store } from "./app/store";
import axios from 'axios';

// --- Axios Request Interceptor for Branch Prefixing ---
axios.interceptors.request.use((config) => {
  const selectedBranch = localStorage.getItem('selectedBranch') || 'ALL';
  
  if (selectedBranch && selectedBranch !== 'ALL') {
    const bypassEndpoints = ['/create-notification', '/login', '/grantAccess', '/companyProfile', '/employeeuser', '/rename-branch', '/transfer-item', '/expensesCategory'];
    const url = config.url || '';
    const shouldBypass = bypassEndpoints.some(endpoint => url.includes(endpoint));

    if (!shouldBypass) {
      if (['post', 'put', 'patch'].includes(config.method) && config.data && typeof config.data === 'object' && !(config.data instanceof FormData)) {
        if (config.data.branchId === undefined) {
          config.data.branchId = selectedBranch;
        }
      } else if (config.method === 'get') {
        config.params = config.params || {};
        if (!config.params.branchId) {
          config.params.branchId = selectedBranch;
        }
      }
    }
  }
  return config;
}, (error) => Promise.reject(error));

// --- Axios Response Interceptor for Branch Filtering ---
axios.interceptors.response.use((response) => {
  const selectedBranch = localStorage.getItem('selectedBranch');
  
  if (selectedBranch && selectedBranch !== 'ALL' && response.data && Array.isArray(response.data.data)) {
    const bypassEndpoints = ['/companyProfile', '/grantAccess', '/itemCode', '/itemUnit', '/get-employeeuser', '/get-adminuser', '/expensesCategory'];
    const url = response.config.url || '';
    const shouldBypass = bypassEndpoints.some(endpoint => url.includes(endpoint));
    
    if (!shouldBypass) {
      try {
        response.data.data = response.data?.data?.filter(item => {
          if (!item) return false;
          const itemBranch = item.branchId || 'HQ';
          if (selectedBranch === 'HQ') {
            return itemBranch === 'HQ';
          }
          return itemBranch === selectedBranch;
        });
      } catch (e) {
        console.error("Interceptor error", e);
      }
    }
  }
  return response;
}, (error) => Promise.reject(error));

// Self-healing page interaction lock watcher
if (typeof window !== 'undefined') {
  const observer = new MutationObserver(() => {
    // Check if there are any active MUI modals, dialogs, or presentation popups in the document body
    const activeModals = document.querySelectorAll('.MuiModal-root, .MuiDialog-root, [role="presentation"]');
    
    // If no modals are active in the DOM, ensure the page is completely unlocked
    if (activeModals.length === 0) {
      let madeChanges = false;
      
      // 1. Clean up body overflow & pointer-events
      if (document.body) {
        if (document.body.style.overflow === 'hidden') {
          document.body.style.overflow = '';
          madeChanges = true;
        }
        if (document.body.style.pointerEvents === 'none') {
          document.body.style.pointerEvents = '';
          madeChanges = true;
        }
        if (document.body.style.paddingRight) {
          document.body.style.paddingRight = '';
          madeChanges = true;
        }
        if (document.body.classList.contains('MuiModal-open')) {
          document.body.classList.remove('MuiModal-open');
          madeChanges = true;
        }
      }
      
      // 2. Remove aria-hidden & styles from the React root container
      const rootEl = document.getElementById('root');
      if (rootEl) {
        if (rootEl.getAttribute('aria-hidden') === 'true') {
          rootEl.removeAttribute('aria-hidden');
          madeChanges = true;
        }
        if (rootEl.style.pointerEvents === 'none') {
          rootEl.style.pointerEvents = '';
          madeChanges = true;
        }
      }
      
      // 3. Scan other siblings of root to ensure they are not blocking focus or input
      const bodyChildren = document.body.children;
      for (let i = 0; i < bodyChildren.length; i++) {
        const child = bodyChildren[i];
        if (child.id !== 'root' && child.tagName !== 'SCRIPT') {
          if (child.getAttribute('aria-hidden') === 'true') {
            child.removeAttribute('aria-hidden');
            madeChanges = true;
          }
        }
      }
      
      if (madeChanges) {
        console.log('[LockWatcher] Self-healed lingering modal locks successfully!');
      }
    }
  });

  // Watch for mutations (child additions/removals and attribute changes) on body
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['class', 'style', 'aria-hidden']
  });
}

// Render your React component instead
const root = createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);