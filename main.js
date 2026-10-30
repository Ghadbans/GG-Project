const { app, BrowserWindow, Menu, ipcMain, Notification, nativeImage } = require('electron')
const path = require('path')
const url = require('url');

let win;
const windows = []; //Array to keep track of all windows
function setupWebContentsSpellcheck(targetWin) {
  if (!targetWin || targetWin.isDestroyed()) return;
  try {
    targetWin.webContents.session.setSpellCheckerLanguages(['fr', 'en-US']);
  } catch (err) {
    console.error('Spellchecker language setup error:', err);
  }

  targetWin.webContents.on('context-menu', (event, params) => {
    const menuTemplate = [];

    // Spelling suggestions for misspelled words (French & English)
    if (params.misspelledWord) {
      if (params.dictionarySuggestions && params.dictionarySuggestions.length > 0) {
        for (const suggestion of params.dictionarySuggestions) {
          menuTemplate.push({
            label: suggestion,
            click: () => targetWin.webContents.replaceMisspelling(suggestion)
          });
        }
      } else {
        menuTemplate.push({ label: 'No Spelling Suggestions', enabled: false });
      }
      menuTemplate.push({
        label: 'Add "' + params.misspelledWord + '" to Dictionary',
        click: () => targetWin.webContents.session.addWordToSpellCheckerDictionary(params.misspelledWord)
      });
      menuTemplate.push({ type: 'separator' });
    }

    if (params.isEditable) {
      menuTemplate.push(
        { role: 'undo' },
        { role: 'redo' },
        { type: 'separator' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' },
        { role: 'selectAll' }
      );
    } else if (params.selectionText) {
      menuTemplate.push(
        { role: 'copy' }
      );
    }

    if (menuTemplate.length > 0) {
      const contextMenu = Menu.buildFromTemplate(menuTemplate);
      contextMenu.popup();
    }
  });
}

function createWindow() {
  win = new BrowserWindow({
    webPreferences: {
      devTools: true,
      nodeIntegration: false,
      worldsafeExecuteJavaScript: true,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
      webSecurity: true,
      spellcheck: true
    },
    icon: 'Icon.png'
  })
  win.maximize();
  setupWebContentsSpellcheck(win);
  win.webContents.on('did-finish-load', () => {
    if (win && !win.isDestroyed()) {
      win.webContents.focus();
    }
  });
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))
  
  win.on('closed', function () {
    win = null;
  })
  const mainMenu = Menu.buildFromTemplate([
    {
      label: 'File',
      submenu: [
        {
          label: 'Clear Cache',
          click: () => {
            win.webContents.send('clear-cache')
            clearAppCache(win)
          }
        }
        ,
        { role: 'quit' }
      ]
    },
    // { role: 'editMenu' }
    {
      label: 'Edit',
      submenu: [
        { role: 'undo' },
        { role: 'redo' },
        { type: 'separator' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' },
        { role: 'delete' },
        { type: 'separator' },
        { role: 'selectAll' }
      ]
    },
    // { role: 'viewMenu' }
    {
      label: 'View',
      submenu: [
        { role: 'reload' },
        { role: 'forceReload' },
        { role: 'toggleDevTools' },
        { type: 'separator' },
        { role: 'resetZoom' },
        { role: 'zoomIn' },
        { role: 'zoomOut' },
        { type: 'separator' }
      ]
    },
    // { role: 'windowMenu' }
    {
      label: 'Window',
      submenu: [
        {
          label: 'New Window',
          click: () => {
            createNewWindow();
          }
        },
        { type: 'separator' },
        { role: 'minimize' },
        { role: 'zoom' },
        { role: 'Close' }
      ]
    }
  ]);
  Menu.setApplicationMenu(mainMenu)
}

function createNewWindow() {
  let newWin = new BrowserWindow({
    webPreferences: {
      devTools: false,
      nodeIntegration: false,
      worldsafeExecuteJavaScript: true,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
      webSecurity: true,
      spellcheck: true
    },
    icon: 'Icon.png'
  })
  newWin.maximize();
  setupWebContentsSpellcheck(newWin);
  newWin.webContents.on('did-finish-load', () => {
    if (newWin && !newWin.isDestroyed()) {
      newWin.webContents.focus();
    }
  });
  newWin.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))
  //new
  newWin.on('closed', function () {
    const index = windows.indexOf(newWin);
    if (index > -1) {
      windows.splice(index, 1)
    }
    newWin = null;
  });
  windows.push(newWin)
}
app.on('ready', () => {
  createWindow();
})
ipcMain.on('notify', (event, message) => {
  new Notification({ title: 'New Notification', body: message }).show();
})
{/*const updateOverlayIcon = (overlayIconUrl) => {
  let overlayIconPath;
  if (overlayIconUrl > 0) {
    overlayIconPath = path.join(__dirname, 'circle.png')
  } else {
    overlayIconPath = ''
  }
  const overlayImage = nativeImage.createFromPath(overlayIconPath);
  win.setOverlayIcon(overlayImage, overlayIconUrl > 0?`${overlayIconUrl}`:'')
}
ipcMain.on('update-badge-count',(event, overlayIconUrl)=>{
  updateOverlayIcon(overlayIconUrl)
})*/}

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
function clearAppCache(win) {
  win.webContents.session.clearStorageData({ storages: ['indexdb', 'localstorage'] })
    .then(() => {
      console.log('clear')
    })
    .catch((error) => {
      console.error('error')
    })
}
