const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  sendNotification: (message) => ipcRenderer.send('notify', message),
  runMarketing: (payload) => ipcRenderer.invoke('run-marketing', payload),
});
