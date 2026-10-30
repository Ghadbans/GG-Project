const { app, BrowserWindow, Menu, ipcMain, Notification, nativeImage } = require('electron')
const path = require('path')
const url = require('url');

let win;
const windows = []; //Array to keep track of all windows
function getGgTypoCorrection(text) {
  if (!text || typeof text !== 'string') return null;
  const trimmed = text.trim();
  if (!trimmed) return null;

  const rules = [
    { pattern: /^(not\s+charch(ing)?|not\s+charg(ing)?|ne\s+charge\s+pas)$/i, replacement: 'NOT CHARGING' },
    { pattern: /^(no\s+powr(e)?|no\s+pwer|no\s+power|pas\s+de\s+courant|pas\s+de\s+tension|coupe\s+courant|ne\s+s['\s]?allume\s+pas)$/i, replacement: 'NO POWER' },
    { pattern: /^(court[\s\-_]circuit|court[\s\-_]circui)$/i, replacement: 'SHORT CIRCUIT' },
    { pattern: /^(four\s+elec(trique)?)$/i, replacement: 'ELECTRIC OVEN' },
    { pattern: /^(pompe\s+a\s+eau|pompe\s+d['\s]?eau)$/i, replacement: 'WATER PUMP' },
    { pattern: /^(groupe\s+electro(gene)?)$/i, replacement: 'GENERATOR' },
    { pattern: /^(chambre\s+froide)$/i, replacement: 'COLD ROOM' },
    { pattern: /^(fuite\s+d['\s]?eau)$/i, replacement: 'WATER LEAK' },
    { pattern: /^(fuite\s+de\s+gaz)$/i, replacement: 'GAS LEAK' },
    { pattern: /^(bruit\s+anormal|bruyant)$/i, replacement: 'ABNORMAL NOISE' },
    { pattern: /^(moteur\s+bloqu[eé])$/i, replacement: 'MOTOR BLOCKED' },
    { pattern: /^(entretien\s+periodique)$/i, replacement: 'PERIODIC MAINTENANCE' },
    { pattern: /^(tset\s+wronge?|test\s+wronge?|tste\s+wronge?)$/i, replacement: 'TEST WRONG' },
    { pattern: /^(lfie\s+ihis\s+good|life\s+ihis\s+good|lfie\s+is\s+good)$/i, replacement: 'LIFE IS GOOD' },
    { pattern: /^(doing\s+on[\s\-_/]*off|fait\s+on[\s\-_/]*off)$/i, replacement: 'INTERMITTENT ON/OFF' },
    { pattern: /^(on[\s\-_/]+off)$/i, replacement: 'ON/OFF' },
    { pattern: /^(tste|tset|tesst|tst)$/i, replacement: 'TEST' },
    { pattern: /^(lfie|lyfe)$/i, replacement: 'LIFE' },
    { pattern: /^(ihis|isi)$/i, replacement: 'IS' },
    { pattern: /^(machin|mashin|machiene|machne)$/i, replacement: 'MACHINE' },
    { pattern: /^(camra|camer|kamra)$/i, replacement: 'CAMERA' },
    { pattern: /^(cctv|cc\s*tv)$/i, replacement: 'CCTV' },
    { pattern: /^(wronge|rong|wrog|wrng)$/i, replacement: 'WRONG' },
    { pattern: /^(powre|powr|pwer|poer)$/i, replacement: 'POWER' },
    { pattern: /^(probl[eèé]me?|problm|prob)$/i, replacement: 'PROBLEM' },
    { pattern: /^(elec|electrique|eletrique)$/i, replacement: 'ELECTRICAL' },
    { pattern: /^(maint|maintenace|mientenace|maintenence)$/i, replacement: 'MAINTENANCE' },
    { pattern: /^(reparation|reparer|reparartion|repar)$/i, replacement: 'REPAIR' },
    { pattern: /^(moteur|motuer|motteur)$/i, replacement: 'MOTOR' },
    { pattern: /^(batteri|batterie|baterie)$/i, replacement: 'BATTERY' },
    { pattern: /^(climatiseur|clim)$/i, replacement: 'AIR CONDITIONER' },
    { pattern: /^(generateur|groupe)$/i, replacement: 'GENERATOR' },
    { pattern: /^(compresseur|compresor)$/i, replacement: 'COMPRESSOR' },
    { pattern: /^(condensateur|condo|capaciter)$/i, replacement: 'CAPACITOR' },
    { pattern: /^(disjoncteur|disjonctuer)$/i, replacement: 'CIRCUIT BREAKER' },
    { pattern: /^(transformateur|transfo)$/i, replacement: 'TRANSFORMER' },
    { pattern: /^(remplac[eé]|remplacment|remplacement)$/i, replacement: 'REPLACED' },
    { pattern: /^(nettoy[eé]|netoyage|nettoyage)$/i, replacement: 'CLEANED' },
    { pattern: /^(costomer|custmer|customr|cleint|clien)$/i, replacement: 'CUSTOMER' },
    { pattern: /^(suplier|suppliar|fourniseur|fournissur)$/i, replacement: 'SUPPLIER' },
    { pattern: /^(invocie|invoce|factur)$/i, replacement: 'INVOICE' },
    { pattern: /^(quattion|quotatn|devis)$/i, replacement: 'QUOTATION' },
    { pattern: /^(payemnt|paymnt|peymnt)$/i, replacement: 'PAYMENT' },
    { pattern: /^(expens|expeses|depense)$/i, replacement: 'EXPENSE' },
    { pattern: /^(projct|progect|porject)$/i, replacement: 'PROJECT' },
    { pattern: /^(employe|emploe|personel)$/i, replacement: 'EMPLOYEE' }
  ];

  for (const { pattern, replacement } of rules) {
    if (pattern.test(trimmed)) {
      return replacement;
    }
  }
  return null;
}

function setupWebContentsSpellcheck(targetWin) {
  if (!targetWin || targetWin.isDestroyed()) return;
  try {
    targetWin.webContents.session.setSpellCheckerLanguages(['en-US', 'fr']);
  } catch (err) {
    console.error('Spellchecker language setup error:', err);
  }

  targetWin.webContents.on('context-menu', (event, params) => {
    const menuTemplate = [];

    // 1. GG Technical & Shop Typo Quick Fix (matches shop terminology)
    const typoWord = params.misspelledWord || (params.selectionText ? params.selectionText.trim() : '');
    const ggFix = getGgTypoCorrection(typoWord);
    if (ggFix) {
      menuTemplate.push({
        label: `✨ GG Quick Fix: "${ggFix}"`,
        click: () => {
          if (params.misspelledWord) {
            targetWin.webContents.replaceMisspelling(ggFix);
          } else {
            targetWin.webContents.insertText(ggFix);
          }
        }
      });
      menuTemplate.push({ type: 'separator' });
    }

    // 2. Standard Dictionary Spelling suggestions (English prioritized + French)
    if (params.misspelledWord) {
      if (params.dictionarySuggestions && params.dictionarySuggestions.length > 0) {
        for (const suggestion of params.dictionarySuggestions) {
          menuTemplate.push({
            label: suggestion,
            click: () => targetWin.webContents.replaceMisspelling(suggestion)
          });
        }
      } else if (!ggFix) {
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
