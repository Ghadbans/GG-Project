const { ipcRenderer, contextBridge } = require('electron');

const electronAPI = {
  sendNotification: (message) => ipcRenderer.send('notify', message),
  runMarketing: (payload) => ipcRenderer.invoke('run-marketing', payload),
  sendInvoiceWhatsApp: (payload) => ipcRenderer.invoke('send-invoice-whatsapp', payload),
  getWhatsAppStatus: () => ipcRenderer.invoke('get-whatsapp-status'),
  reconnectWhatsApp: () => ipcRenderer.invoke('reconnect-whatsapp'),
  updater: {
    getVersion: () => ipcRenderer.invoke('updater-get-version'),
    checkForUpdates: () => ipcRenderer.invoke('updater-check'),
    downloadUpdate: () => ipcRenderer.invoke('updater-download'),
    installUpdate: () => ipcRenderer.invoke('updater-install'),
    openDownloadUrl: (url) => ipcRenderer.invoke('updater-open-external', url),
    onStatus: (callback) => {
      if (typeof callback !== 'function') return () => {};
      const listener = (_event, payload) => callback(payload);
      ipcRenderer.on('updater-status', listener);
      return () => ipcRenderer.removeListener('updater-status', listener);
    },
  },
};

try {
  contextBridge.exposeInMainWorld('electron', electronAPI);
} catch (_) {
  if (typeof window !== 'undefined') {
    window.electron = electronAPI;
  }
}
