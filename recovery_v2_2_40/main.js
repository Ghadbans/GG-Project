const { app, BrowserWindow, Menu, ipcMain, Notification, nativeImage } = require('electron')
const path = require('path')
const url = require('url');

let win;
const windows = []; //Array to keep track of all windows
function createWindow() {
  win = new BrowserWindow({
    webPreferences: {
      devTools: false,
      nodeIntegration: false,
      worldsafeExecuteJavaScript: true,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
      webSecurity: true
    },
    icon: nativeImage.createFromPath(path.join(__dirname, 'Icon.png'))
  })
  win.maximize();
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))
  //win.webContents.openDevTools();
  win.on('closed', function () {
    win = null;
  })

  /* handle child windows */
  win.webContents.setWindowOpenHandler(({ url }) => {
    return {
      action: 'allow',
      overrideBrowserWindowOptions: {
        icon: nativeImage.createFromPath(path.join(__dirname, 'Icon.png')),
        autoHideMenuBar: true,
        webPreferences: {
          devTools: false,
          nodeIntegration: false,
          worldsafeExecuteJavaScript: true,
          contextIsolation: true,
          preload: path.join(__dirname, 'preload.js'),
        }
      }
    }
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
      webSecurity: true
    },
    icon: nativeImage.createFromPath(path.join(__dirname, 'Icon.png'))
  })
  newWin.maximize();
  newWin.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))
  //newWin.webContents.openDevTools();
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
