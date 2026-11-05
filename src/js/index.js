import { createRoot } from "react-dom/client";
import React from 'react';
import App from './App'
import { Provider } from "react-redux";
import { store } from "./app/store";
import axios from 'axios';

// --- Universal Uppercase Data Sanitizer for API Requests ---
function sanitizeUppercasePayload(data, keyPath = '') {
  if (data === null || data === undefined) return data;
  if (typeof data === 'string') {
    const lowerKey = keyPath.toLowerCase();
    // Exclude security / credential / URL / media / binary / identifier fields
    if (
      lowerKey.includes('password') ||
      lowerKey.includes('email') ||
      lowerKey.includes('token') ||
      lowerKey.includes('url') ||
      lowerKey.includes('image') ||
      lowerKey.includes('photo') ||
      lowerKey.includes('icon') ||
      lowerKey.includes('avatar') ||
      lowerKey.includes('file') ||
      lowerKey.includes('path') ||
      lowerKey.includes('hash') ||
      lowerKey.includes('signature') ||
      lowerKey.includes('auth') ||
      data.startsWith('data:') ||
      data.startsWith('http://') ||
      data.startsWith('https://') ||
      data.startsWith('blob:') ||
      data.startsWith('sidecar://') ||
      (/^[0-9a-fA-F]{24}$/.test(data) && (lowerKey.includes('id') || lowerKey.includes('_id'))) ||
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(data)
    ) {
      return data;
    }
    return data.toUpperCase();
  }
  if (Array.isArray(data)) {
    return data.map((item, idx) => sanitizeUppercasePayload(item, `${keyPath}[${idx}]`));
  }
  if (typeof data === 'object') {
    if (typeof FormData !== 'undefined' && data instanceof FormData) return data;
    if (typeof Blob !== 'undefined' && data instanceof Blob) return data;
    const clean = {};
    for (const k of Object.keys(data)) {
      clean[k] = sanitizeUppercasePayload(data[k], k);
    }
    return clean;
  }
  return data;
}

// --- Axios Request Interceptor for Branch Prefixing & Universal Uppercase Sanitization ---
axios.interceptors.request.use((config) => {
  const url = config.url || '';
  const bypassUppercaseEndpoints = ['/login', '/auth', '/employee-login', '/admin-login', '/get-employeeuser', '/get-adminuser'];
  const shouldBypassUppercase = bypassUppercaseEndpoints.some(ep => url.includes(ep));

  if (!shouldBypassUppercase && ['post', 'put', 'patch'].includes((config.method || '').toLowerCase())) {
    if (config.data && typeof config.data === 'object' && !(typeof FormData !== 'undefined' && config.data instanceof FormData)) {
      config.data = sanitizeUppercasePayload(config.data);
    }
  }

  const selectedBranch = localStorage.getItem('selectedBranch') || 'ALL';
  
  if (selectedBranch && selectedBranch !== 'ALL') {
    const bypassEndpoints = ['/create-notification', '/login', '/grantAccess', '/companyProfile', '/employeeuser', '/rename-branch', '/transfer-item', '/expensesCategory', '/itemTransferHistory'];
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
            const allModules = ["Dashboard", "Customer", "Expenses", "Estimate", "Fleet Management", "Invoice", "Item-Out", "Item-Purchase", "Item-Return", "Item", "Maintenance", "Pay-Roll", "Payment", "Purchase", "Project", "Rate", "Employee", "Admin", "User", "Role", "Company Profile", "Branch", "Location", "Item-Group", "Item-Category", "Supplier", "Stock", "Transfer", "Reports", "Settings", "Account", "Asset", "Grant Access", "Purchase-Order", "Point-Of-Sell", "Block-Factory", "Block-Mixer", "Backup", "Layout-Print", "Marketing"];
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
    const bypassEndpoints = ['/companyProfile', '/grantAccess', '/itemCode', '/itemUnit', '/get-employeeuser', '/get-adminuser', '/expensesCategory', '/itemTransferHistory', '/transfer-item'];
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

  // --- Universal Real-Time Uppercase Transformation for all business modules (Exempting Login) ---
  const isExemptInput = (el) => {
    if (!el) return true;
    const tag = (el.tagName || '').toUpperCase();
    if (tag !== 'INPUT' && tag !== 'TEXTAREA') return true;

    // Type exemptions: passwords, emails, files, checkboxes, dates, numbers, etc.
    const type = (el.type || 'text').toLowerCase();
    if (['password', 'email', 'file', 'checkbox', 'radio', 'color', 'range', 'date', 'time', 'datetime-local', 'month', 'week', 'number'].includes(type)) {
      return true;
    }

    // Name / ID exemptions (passwords, emails, tokens, keys)
    const name = (el.name || '').toLowerCase();
    const id = (el.id || '').toLowerCase();
    if (name.includes('password') || name.includes('email') || id.includes('password') || id.includes('email')) {
      return true;
    }

    // Container exemptions: Login page or elements marked no-uppercase
    if (el.closest('.wrap-login100, .login100-form, .container-login100, .no-uppercase, .user-account-container, .user-account-modal, [data-no-uppercase="true"]')) {
      return true;
    }

    // Route exemption for login page
    if (window.location && (window.location.pathname === '/' || window.location.pathname === '/login')) {
      if (el.closest('.limiter, .login100-form, .wrap-login100')) {
        return true;
      }
    }

    return false;
  };

  // 1. Intercept beforeinput to natively insert uppercase characters
  document.addEventListener('beforeinput', (e) => {
    const target = e.target;
    if (isExemptInput(target)) return;

    if (e.inputType === 'insertText' && e.data && typeof e.data === 'string') {
      const upper = e.data.toUpperCase();
      if (upper !== e.data) {
        e.preventDefault();
        if (typeof document.execCommand === 'function' && document.queryCommandSupported && document.queryCommandSupported('insertText')) {
          document.execCommand('insertText', false, upper);
        } else {
          const start = target.selectionStart;
          const end = target.selectionEnd;
          const val = target.value || '';
          const nextVal = val.slice(0, start) + upper + val.slice(end);
          const setter = Object.getOwnPropertyDescriptor(
            target.tagName === 'TEXTAREA' ? window.HTMLTextAreaElement.prototype : window.HTMLInputElement.prototype,
            'value'
          )?.set;
          if (setter) {
            setter.call(target, nextVal);
          } else {
            target.value = nextVal;
          }
          if (start !== null) {
            target.setSelectionRange(start + upper.length, start + upper.length);
          }
          target.dispatchEvent(new Event('input', { bubbles: true }));
        }
      }
    }
  }, true);

  // 2. Intercept input event (handles paste, drag-and-drop, and programmatic input)
  document.addEventListener('input', (e) => {
    const target = e.target;
    if (isExemptInput(target)) return;

    if (typeof target.value === 'string') {
      const upper = target.value.toUpperCase();
      if (target.value !== upper) {
        const start = target.selectionStart;
        const end = target.selectionEnd;
        const setter = Object.getOwnPropertyDescriptor(
          target.tagName === 'TEXTAREA' ? window.HTMLTextAreaElement.prototype : window.HTMLInputElement.prototype,
          'value'
        )?.set;
        if (setter) {
          setter.call(target, upper);
        } else {
          target.value = upper;
        }
        if (start !== null && end !== null) {
          try {
            target.setSelectionRange(start, end);
          } catch (_) {}
        }
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
