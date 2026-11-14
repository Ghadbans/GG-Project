const { ipcRenderer, contextBridge } = require('electron');

const electronAPI = {
  sendNotification: (message) => ipcRenderer.send('notify', message),
  runMarketing: (payload) => ipcRenderer.invoke('run-marketing', payload),
  sendInvoiceWhatsApp: (payload) => ipcRenderer.invoke('send-invoice-whatsapp', payload),
  getWhatsAppStatus: () => ipcRenderer.invoke('get-whatsapp-status'),
  reconnectWhatsApp: () => ipcRenderer.invoke('reconnect-whatsapp'),
};

try {
  contextBridge.exposeInMainWorld('electron', electronAPI);
} catch (_) {
  if (typeof window !== 'undefined') {
    window.electron = electronAPI;
  }
}
