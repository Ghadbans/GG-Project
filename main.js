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
    { pattern: /^(on[\s\-_/]+off)$/i, replacement: 'ON/OFF' },
    { pattern: /^(ari)$/i, replacement: 'AIR' },
    { pattern: /^(contoner|condoner|condishioner|conditionner)$/i, replacement: 'CONDITIONER' },
    { pattern: /^(uot)$/i, replacement: 'OUT' },
    { pattern: /^(ordder|ordr)$/i, replacement: 'ORDER' },
    { pattern: /^(fullow|fllow)$/i, replacement: 'FOLLOW' },
    { pattern: /^(tste|tset|tesst|tst)$/i, replacement: 'TEST' },
    { pattern: /^(lfie|lyfe)$/i, replacement: 'LIFE' },
    { pattern: /^(ihis|isi)$/i, replacement: 'IS' },
    { pattern: /^(machin|mashin|machiene|machne)$/i, replacement: 'MACHINE' },
    { pattern: /^(camra|camer|kamra)$/i, replacement: 'CAMERA' },
    { pattern: /^(cc\s+tv)$/i, replacement: 'CCTV' },
    { pattern: /^(wronge|rong|wrog|wrng)$/i, replacement: 'WRONG' },
    { pattern: /^(powre|powr|pwer|poer)$/i, replacement: 'POWER' },
    { pattern: /^(wrkrs|workrs|wrokers)$/i, replacement: 'WORKERS' },
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
          const upperSuggestion = suggestion.toUpperCase();
          menuTemplate.push({
            label: upperSuggestion,
            click: () => targetWin.webContents.replaceMisspelling(upperSuggestion)
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

const fs = require('fs');
const { execFile } = require('child_process');

ipcMain.handle('run-marketing', async (event, payload) => {
  const { brief, whatsappNumber, platforms = {}, productImage = null, previewOnly = false } = payload || {};
  const agentDir = 'C:\\Users\\GG\\fb-whatsapp-agent';
  const agentScript = path.join(agentDir, 'agent.js');
  const flyerPath = path.join(agentDir, 'generated_flyer.png');

  if (!fs.existsSync(agentScript)) {
    return {
      success: false,
      error: `Marketing agent script not found at ${agentScript}`
    };
  }

  // Clear previous flyer before generating new one so stale flyers are never returned
  if (fs.existsSync(flyerPath)) {
    try {
      fs.unlinkSync(flyerPath);
    } catch (_) {}
  }

  const postToFacebook = platforms.facebook !== false;
  const sendWhatsApp = Boolean(platforms.whatsapp && whatsappNumber);
  const sendWhatsAppStatus = Boolean(platforms.whatsappStatus);
  const postToInstagram = Boolean(platforms.instagram);

  let tempProductImagePath = null;
  if (productImage && typeof productImage === 'string' && productImage.startsWith('data:image')) {
    try {
      const base64Data = productImage.replace(/^data:image\/\w+;base64,/, '');
      tempProductImagePath = path.join(agentDir, 'temp_product.png');
      fs.writeFileSync(tempProductImagePath, Buffer.from(base64Data, 'base64'));
    } catch (e) {
      console.warn('Could not write temp product image:', e.message);
    }
  } else {
    const oldTemp = path.join(agentDir, 'temp_product.png');
    if (fs.existsSync(oldTemp)) {
      try { fs.unlinkSync(oldTemp); } catch (_) {}
    }
  }

  const args = [
    agentScript,
    brief || 'Special Promotion',
    `--wa=${whatsappNumber || ''}`
  ];

  if (previewOnly) {
    args.push('--preview-only');
  } else {
    args.push(postToFacebook ? '--fb' : '--no-fb');
    args.push(sendWhatsApp ? '--send-wa' : '--no-wa');
    if (sendWhatsAppStatus) args.push('--wa-status');
    args.push(postToInstagram ? '--send-ig' : '--no-ig');
  }

  if (tempProductImagePath && fs.existsSync(tempProductImagePath)) {
    args.push(`--product-image=${tempProductImagePath}`);
  }

  const waCount = String(whatsappNumber || '').split(/[,;]+/).filter((s) => s.trim()).length;
  const execTimeout = 120000 + Math.max(0, waCount - 1) * 35000;

  return new Promise((resolve) => {
    execFile('node', args, { cwd: agentDir, timeout: execTimeout, maxBuffer: 20 * 1024 * 1024 }, (error, stdout, stderr) => {
      let waReport = null;
      const reportMatch = (stdout || '').match(/WA_REPORT_JSON:(\{.*\})/);
      if (reportMatch) {
        try { waReport = JSON.parse(reportMatch[1]); } catch (_) {}
      }
      let flyerBase64 = null;
      if (fs.existsSync(flyerPath)) {
        try {
          const buf = fs.readFileSync(flyerPath);
          flyerBase64 = `data:image/png;base64,${buf.toString('base64')}`;
        } catch (e) {
          console.warn('Could not read flyer file:', e.message);
        }
      }

      let fbPostId = null;
      const fbMatch = (stdout || '').match(/Main Timeline Feed Post Created:\s*([^\s\n\r]+)/i) || (stdout || '').match(/Live Feed Post Published ID:\s*([^\s\n\r]+)/i) || (stdout || '').match(/Facebook post published! Post ID:\s*([^\s\n\r]+)/i) || (stdout || '').match(/Post ID:\s*([^\s\n\r]+)/i);
      if (fbMatch) {
        fbPostId = fbMatch[1];
      }

      let igPostId = null;
      const igMatch = (stdout || '').match(/Instagram post published! Post ID:\s*([^\s\n\r]+)/i) || (stdout || '').match(/"instagram":\s*\{\s*"success":\s*true,\s*"postId":\s*"([^"]+)"/i);
      if (igMatch) {
        igPostId = igMatch[1];
      }

      const fbSuccess = Boolean(fbPostId) || (stdout || '').includes('[SUCCESS] Facebook post published');
      const waSuccess = (stdout || '').includes('[SUCCESS] Flyer & caption delivered to WhatsApp');
      const waStatusSuccess = (stdout || '').includes('[SUCCESS] Flyer & caption published to WhatsApp Status');
      const igSuccess = Boolean(igPostId) || (stdout || '').includes('[SUCCESS] Instagram post published');

      let igError = null;
      if (!igSuccess && postToInstagram && !previewOnly) {
        const igErrMatch = (stdout || '').match(/Instagram posting failed:\s*([^\n\r]+)/i) || (stdout || '').match(/Instagram Permission Missing:\s*([^\n\r]+)/i);
        igError = igErrMatch ? igErrMatch[1] : 'Instagram publication failed or requires permissions';
      }

      const headlineMatch = (stdout || '').match(/"headline":\s*"([^"]+)"/i);
      const parsedHeadline = headlineMatch ? headlineMatch[1] : null;

      resolve({
        success: Boolean(flyerBase64) || fbSuccess || waSuccess || igSuccess,
        previewOnly: Boolean(previewOnly),
        brief,
        headline: parsedHeadline,
        flyerBase64,
        facebook: {
          success: fbSuccess,
          postId: fbPostId,
          postUrl: fbPostId ? `https://www.facebook.com/${fbPostId}` : null,
          error: !fbSuccess && postToFacebook && !previewOnly ? 'Facebook posting failed' : null
        },
        whatsapp: {
          success: waSuccess || waStatusSuccess,
          target: whatsappNumber,
          statusStory: waStatusSuccess,
          report: waReport,
          message: (waReport && waReport.details && waReport.details.length === 1 && waReport.details[0].self && waReport.sent === 1)
            ? 'Delivered to "Message yourself" (Your own WhatsApp)'
            : waReport
            ? `WhatsApp: ${waReport.sent} sent` + (waReport.failed ? `, ${waReport.failed} failed` : '') + (waReport.skipped ? `, ${waReport.skipped} skipped (daily limit)` : '')
            : ((waSuccess && waStatusSuccess)
              ? 'WhatsApp Delivered to Contact & Status Story'
              : (waStatusSuccess ? 'WhatsApp Published to Status Story' : (waSuccess ? 'WhatsApp Delivered Successfully' : null))),
          error: (!waSuccess && !waStatusSuccess && (sendWhatsApp || sendWhatsAppStatus) && !previewOnly)
            ? 'WhatsApp automated dispatch timed out or was not delivered'
            : null
        },
        instagram: {
          success: igSuccess,
          postId: igPostId,
          postUrl: igPostId ? `https://www.instagram.com/p/${igPostId}` : null,
          error: igError
        },
        output: stdout || stderr
      });
    });
  });
});
