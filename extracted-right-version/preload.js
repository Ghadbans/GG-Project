const {ipcRenderer, contextBridge}=require('electron');


contextBridge.exposeInMainWorld('electron', {
      sendNotification: (message) => ipcRenderer.send('notify', message),
      //send: (overlayIconUrl) =>ipcRenderer.send('update-badge-count', overlayIconUrl)
   });
   