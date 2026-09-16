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
  const url = response.config?.url || '';

  // --- Global GG God Mode Bypass ---
  if (url.includes('grantAccess')) {
    const currentState = store.getState();
    const isGG = (currentState.user?.data?.userName === 'GG') || (localStorage.getItem('Name') === 'GG');
    if (isGG && response.data && response.data.data) {
        
        // Ensure the current user has a document in the array
        const currentUserId = currentState.user?.data?.id || localStorage.getItem('user') || 'GG-Admin-ID';
        if (Array.isArray(response.data.data)) {
           let currentUserAccess = response.data.data.find(row => row.userID === currentUserId);
           if (!currentUserAccess) {
              currentUserAccess = { userID: currentUserId, modules: [] };
              response.data.data.push(currentUserAccess);
           }
        }
        
        const modifyModules = (modules) => {
          if (Array.isArray(modules)) {
            const allModules = ["Dashboard", "Customer", "Expenses", "Estimate", "Fleet Management", "Invoice", "Item-Out", "Item-Purchase", "Item-Return", "Item", "Maintenance", "Pay-Roll", "Payment", "Purchase", "Project", "Rate", "Employee", "Admin", "User", "Role", "Company Profile", "Branch", "Location", "Item-Group", "Item-Category", "Supplier", "Stock", "Transfer", "Reports", "Settings", "Account", "Asset", "Grant Access", "Purchase-Order", "Point-Of-Sell", "Block-Factory", "Block-Mixer", "Backup", "Layout-Print"];
            allModules.forEach(modName => {
              let m = modules.find(x => x && x.moduleName === modName);
              if (!m) {
                m = { moduleName: modName, access: {} };
                modules.push(m);
              }
              if (!m.access) m.access = {};
              m.access.readM = true;
              m.access.createM = true;
              m.access.viewM = true;
              m.access.editM = true;
              m.access.deleteM = true;
            });
          }
        };

        if (response.data.data.modules) {
          if (response.data.data.userID === currentUserId) {
            modifyModules(response.data.data.modules);
          }
        } else if (Array.isArray(response.data.data)) {
          response.data.data.forEach(userAccess => {
            if (userAccess && userAccess.userID === currentUserId) {
              modifyModules(userAccess.modules);
            }
          });
        }
    }
  }
  // ---------------------------------

  const selectedBranch = localStorage.getItem('selectedBranch');
  
  if (selectedBranch && selectedBranch !== 'ALL' && response.data && Array.isArray(response.data.data)) {
    const bypassEndpoints = ['/companyProfile', '/grantAccess', '/itemCode', '/itemUnit', '/get-employeeuser', '/get-adminuser', '/expensesCategory'];
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

// Self-healing page interaction lock & keyboard focus watcher
if (typeof window !== 'undefined') {
  const unlockPageIfNoModals = () => {
    // Check if there are any genuinely active, visible MUI modals or dialogs in the DOM
    const allModals = document.querySelectorAll('.MuiModal-root, .MuiDialog-root');
    const activeModals = Array.from(allModals).filter(el => {
      if (el.getAttribute('aria-hidden') === 'true') return false;
      const style = window.getComputedStyle ? window.getComputedStyle(el) : el.style;
      return style.visibility !== 'hidden' && style.display !== 'none';
    });

    // If no active modals are present in the DOM, ensure the page and all inputs are completely unlocked
    if (activeModals.length === 0) {
      if (document.body) {
        if (document.body.style.overflow === 'hidden') document.body.style.overflow = '';
        if (document.body.style.pointerEvents === 'none') document.body.style.pointerEvents = '';
        if (document.body.style.paddingRight) document.body.style.paddingRight = '';
        if (document.body.classList.contains('MuiModal-open')) document.body.classList.remove('MuiModal-open');
      }

      const rootEl = document.getElementById('root');
      if (rootEl) {
        if (rootEl.getAttribute('aria-hidden') === 'true') rootEl.removeAttribute('aria-hidden');
        if (rootEl.style.pointerEvents === 'none') rootEl.style.pointerEvents = '';
      }

      const bodyChildren = document.body ? document.body.children : [];
      for (let i = 0; i < bodyChildren.length; i++) {
        const child = bodyChildren[i];
        if (child && child.id === 'root' && child.getAttribute('aria-hidden') === 'true') {
          child.removeAttribute('aria-hidden');
        }
      }
    }
  };

  const observer = new MutationObserver(unlockPageIfNoModals);
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['class', 'style', 'aria-hidden']
  });

  // Global click & focus rescue listener: ensures inputs and textareas always receive focus and typing
  document.addEventListener('click', (e) => {
    const target = e.target;
    if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable || (target.closest && target.closest('input, textarea, [contenteditable="true"]')))) {
      unlockPageIfNoModals();
      const inputEl = target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' ? target : target.closest('input, textarea');
      if (inputEl && typeof inputEl.focus === 'function' && document.activeElement !== inputEl) {
        inputEl.focus();
      }
    }
  }, true);

  document.addEventListener('focusin', (e) => {
    const target = e.target;
    if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) {
      const rootEl = document.getElementById('root');
      if (rootEl && rootEl.getAttribute('aria-hidden') === 'true') {
        rootEl.removeAttribute('aria-hidden');
      }
    }
  }, true);
}

// Render your React component instead
const root = createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);