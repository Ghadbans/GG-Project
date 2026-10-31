const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

const APP_VERSION = '3.5.98';

// Potential paths for APK file
function getAndroidApkPath() {
  const candidates = [
    path.join(__dirname, '../public/downloads/GlobalGate.apk'),
    path.join(__dirname, '../public/downloads/app-debug.apk'),
    path.join(__dirname, '../../android/app/build/outputs/apk/debug/app-debug.apk'),
    path.join(__dirname, '../../android/app/build/outputs/apk/debug/app-universal-debug.apk'),
  ];
  for (const c of candidates) {
    if (fs.existsSync(c)) return c;
  }
  return null;
}

// Potential paths for Windows Setup EXE
function getWindowsExePath() {
  const candidates = [
    path.join(__dirname, `../public/downloads/Global Gate Setup ${APP_VERSION}.exe`),
    path.join(__dirname, '../public/downloads/GlobalGateSetup.exe'),
    path.join(__dirname, `../../dist/Global Gate Setup ${APP_VERSION}.exe`),
    path.join(__dirname, '../../dist/GlobalGateSetup.exe')
  ];
  for (const c of candidates) {
    if (fs.existsSync(c)) return c;
  }
  return null;
}

// 1. Download Android APK
router.get('/android', (req, res) => {
  const apkPath = getAndroidApkPath();
  if (apkPath) {
    return res.download(apkPath, `GlobalGate-v${APP_VERSION}.apk`, (err) => {
      if (err && !res.headersSent) {
        res.status(500).send('Error downloading Android APK: ' + err.message);
      }
    });
  }

  // Fallback: If hosted on external CDN or GitHub Releases
  const githubFallback = `https://github.com/Ghadbans/GG-Project/releases/download/v${APP_VERSION}/GlobalGate-v${APP_VERSION}.apk`;
  return res.redirect(githubFallback);
});

// 2. Download Windows Installer
router.get('/windows', (req, res) => {
  const exePath = getWindowsExePath();
  if (exePath) {
    return res.download(exePath, `GlobalGate-Setup-v${APP_VERSION}.exe`, (err) => {
      if (err && !res.headersSent) {
        res.status(500).send('Error downloading Windows installer: ' + err.message);
      }
    });
  }

  // Graceful response if installer is still syncing
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  return res.status(200).send(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Windows Installer - Global Gate</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    body { font-family: -apple-system, sans-serif; background: #0d1b2a; color: #e0e1dd; text-align: center; padding: 48px 16px; }
    .box { max-width: 500px; margin: 0 auto; background: rgba(255,255,255,0.05); padding: 32px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.1); }
    h2 { color: #ffffff; margin-bottom: 12px; }
    p { color: #90e0ef; font-size: 14px; line-height: 1.6; margin-bottom: 24px; }
    a { display: inline-block; background: #00b4d8; color: #03045e; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; }
  </style>
</head>
<body>
  <div class="box">
    <h2>💻 Windows Installer</h2>
    <p>The Windows Desktop installer (v${APP_VERSION}) is currently syncing with the cloud storage. In the meantime, you can use the Android App or Web Portal.</p>
    <a href="/download">&larr; Back to Downloads</a>
  </div>
</body>
</html>`);
});

// 3. API Version endpoint
router.get('/version', (req, res) => {
  const apkPath = getAndroidApkPath();
  const exePath = getWindowsExePath();
  res.json({
    version: APP_VERSION,
    appName: 'Global Gate Management System',
    android: {
      available: !!apkPath,
      url: '/download/android',
      filename: `GlobalGate-v${APP_VERSION}.apk`,
      sizeMB: apkPath ? (fs.statSync(apkPath).size / 1024 / 1024).toFixed(2) : null
    },
    windows: {
      available: !!exePath,
      url: '/download/windows',
      filename: `GlobalGate-Setup-v${APP_VERSION}.exe`,
      sizeMB: exePath ? (fs.statSync(exePath).size / 1024 / 1024).toFixed(2) : null
    },
    iosWeb: {
      url: 'https://portal.globalgate.sarl',
      instructions: 'Open in Safari and tap Share -> Add to Home Screen'
    }
  });
});

// 4. Download Landing Page (Beautiful Responsive HTML)
router.get('/', (req, res) => {
  const apkPath = getAndroidApkPath();
  const exePath = getWindowsExePath();
  const apkSize = apkPath ? (fs.statSync(apkPath).size / 1024 / 1024).toFixed(1) + ' MB' : 'Direct Download';
  const exeSize = exePath ? (fs.statSync(exePath).size / 1024 / 1024).toFixed(1) + ' MB' : 'Direct Download';

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>Download Global Gate App - Android, iOS & Windows</title>
  <meta name="description" content="Download the official Global Gate Management System for Android, iOS, and Windows PC.">
  <link rel="icon" type="image/png" href="https://portal.globalgate.sarl/favicon.ico">
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    }
    body {
      background: linear-gradient(135deg, #0d1b2a 0%, #1b263b 50%, #0d1b2a 100%);
      color: #e0e1dd;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 24px 16px 48px;
    }
    .header {
      text-align: center;
      max-width: 680px;
      margin-bottom: 32px;
      animation: fadeIn 0.6s ease;
    }
    .logo-badge {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 72px;
      height: 72px;
      background: linear-gradient(135deg, #1a237e 0%, #283593 100%);
      border: 2px solid #3d5afe;
      border-radius: 20px;
      box-shadow: 0 8px 32px rgba(61, 90, 254, 0.35);
      font-size: 36px;
      margin-bottom: 16px;
    }
    h1 {
      font-size: 28px;
      font-weight: 800;
      color: #ffffff;
      letter-spacing: 0.5px;
      margin-bottom: 8px;
      text-transform: uppercase;
    }
    .subtitle {
      font-size: 15px;
      color: #90e0ef;
      line-height: 1.5;
    }
    .version-tag {
      display: inline-block;
      margin-top: 10px;
      background: rgba(61, 90, 254, 0.2);
      border: 1px solid rgba(61, 90, 254, 0.4);
      color: #48cae4;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 1px;
      padding: 4px 12px;
      border-radius: 20px;
    }
    .container {
      width: 100%;
      max-width: 900px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
      margin-bottom: 36px;
    }
    .card {
      background: rgba(255, 255, 255, 0.04);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 20px;
      padding: 24px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
      position: relative;
      overflow: hidden;
    }
    .card:hover {
      transform: translateY(-4px);
      border-color: rgba(61, 90, 254, 0.5);
      box-shadow: 0 16px 40px rgba(61, 90, 254, 0.25);
    }
    .card.featured {
      border: 1.5px solid #00b4d8;
      background: rgba(0, 180, 216, 0.05);
    }
    .featured-ribbon {
      position: absolute;
      top: 14px;
      right: 14px;
      background: #00b4d8;
      color: #03045e;
      font-size: 11px;
      font-weight: 800;
      padding: 3px 8px;
      border-radius: 6px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .card-icon {
      font-size: 40px;
      margin-bottom: 14px;
    }
    .card-title {
      font-size: 20px;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 6px;
    }
    .card-desc {
      font-size: 13px;
      color: #a0aec0;
      line-height: 1.4;
      margin-bottom: 20px;
    }
    .steps-box {
      background: rgba(0, 0, 0, 0.25);
      border-radius: 12px;
      padding: 12px 14px;
      margin-bottom: 20px;
      border-left: 3px solid #3d5afe;
    }
    .steps-title {
      font-size: 12px;
      font-weight: 700;
      color: #caf0f8;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 6px;
    }
    .steps-list {
      list-style-type: none;
      font-size: 12px;
      color: #cbd5e0;
      line-height: 1.6;
    }
    .steps-list li {
      margin-bottom: 4px;
      display: flex;
      align-items: flex-start;
    }
    .step-num {
      background: #1a237e;
      color: #90e0ef;
      font-weight: bold;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin-right: 8px;
      flex-shrink: 0;
      font-size: 10px;
    }
    .btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      width: 100%;
      padding: 14px 20px;
      border-radius: 12px;
      font-size: 15px;
      font-weight: 700;
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      cursor: pointer;
      transition: all 0.2s ease;
      border: none;
    }
    .btn-android {
      background: linear-gradient(135deg, #00b4d8 0%, #0077b6 100%);
      color: #ffffff;
      box-shadow: 0 6px 20px rgba(0, 180, 216, 0.4);
    }
    .btn-android:hover {
      background: linear-gradient(135deg, #48cae4 0%, #0096c7 100%);
      box-shadow: 0 8px 24px rgba(72, 202, 228, 0.5);
    }
    .btn-ios {
      background: linear-gradient(135deg, #3d5afe 0%, #1a237e 100%);
      color: #ffffff;
      box-shadow: 0 6px 20px rgba(61, 90, 254, 0.35);
    }
    .btn-ios:hover {
      background: linear-gradient(135deg, #536dfe 0%, #283593 100%);
      box-shadow: 0 8px 24px rgba(83, 109, 254, 0.45);
    }
    .btn-win {
      background: linear-gradient(135deg, #023e8a 0%, #001233 100%);
      color: #caf0f8;
      border: 1px solid #3d5afe;
    }
    .btn-win:hover {
      background: linear-gradient(135deg, #03045e 0%, #002855 100%);
      color: #ffffff;
    }
    .meta-info {
      text-align: center;
      font-size: 11px;
      color: #6c757d;
      margin-top: 8px;
    }
    .footer {
      text-align: center;
      max-width: 600px;
      font-size: 12px;
      color: #64748b;
      margin-top: auto;
      line-height: 1.6;
    }
    .footer a {
      color: #48cae4;
      text-decoration: none;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  </style>
</head>
<body>
  <div class="header">
    <div class="logo-badge">🏛️</div>
    <h1>Global Gate Management</h1>
    <p class="subtitle">Direct downloads for your phone, tablet, and computer. Instant setup without app store waiting.</p>
    <div class="version-tag">SYSTEM VERSION v${APP_VERSION} (CAPITAL LETTERS EDITION)</div>
  </div>

  <div class="container">
    <!-- Android Card -->
    <div class="card featured">
      <div class="featured-ribbon">Direct APK</div>
      <div>
        <div class="card-icon">🤖</div>
        <div class="card-title">Android Phone & Tablet</div>
        <div class="card-desc">Install directly on any Android smartphone or tablet. Fast, lightweight, and works seamlessly with your camera for receipts and barcode scanning.</div>
        
        <div class="steps-box">
          <div class="steps-title">3-Step Install Guide</div>
          <ul class="steps-list">
            <li><span class="step-num">1</span> Tap "Download Android App" below.</li>
            <li><span class="step-num">2</span> Open downloaded <code>GlobalGate.apk</code>.</li>
            <li><span class="step-num">3</span> If prompted, tap <i>Settings</i> &rarr; enable <i>Allow from this source</i> &rarr; tap <b>Install</b>!</li>
          </ul>
        </div>
      </div>

      <div>
        <a href="/download/android" class="btn btn-android" download>
          <span>⬇️</span> Download Android App (.APK)
        </a>
        <div class="meta-info">File: GlobalGate-v${APP_VERSION}.apk • ${apkSize}</div>
      </div>
    </div>

    <!-- Apple iOS Card -->
    <div class="card">
      <div>
        <div class="card-icon">🍏</div>
        <div class="card-title">iPhone & iPad (iOS)</div>
        <div class="card-desc">Full native-like experience on Apple devices. Runs in full-screen mode without browser tabs or address bar.</div>
        
        <div class="steps-box">
          <div class="steps-title">Instant Setup (No App Store)</div>
          <ul class="steps-list">
            <li><span class="step-num">1</span> Tap "Open on iPhone / iPad" below.</li>
            <li><span class="step-num">2</span> Tap the <b>Share</b> button in Safari (📤).</li>
            <li><span class="step-num">3</span> Scroll down and tap <b>"Add to Home Screen"</b> (➕).</li>
            <li><span class="step-num">4</span> Tap <b>Add</b>. Global Gate appears on your home screen!</li>
          </ul>
        </div>
      </div>

      <div>
        <a href="https://portal.globalgate.sarl" target="_blank" class="btn btn-ios">
          <span>🚀</span> Open on iPhone / iPad
        </a>
        <div class="meta-info">Safari PWA • Instant Cloud Connection</div>
      </div>
    </div>

    <!-- Windows Card -->
    <div class="card">
      <div>
        <div class="card-icon">💻</div>
        <div class="card-title">Windows PC (Desktop)</div>
        <div class="card-desc">Full 64-bit desktop edition with offline sync, native thermal receipt printer support, cash drawer integration, and keyboard shortcuts.</div>
        
        <div class="steps-box">
          <div class="steps-title">Desktop Installation</div>
          <ul class="steps-list">
            <li><span class="step-num">1</span> Download the installer below.</li>
            <li><span class="step-num">2</span> Run <code>GlobalGateSetup.exe</code>.</li>
            <li><span class="step-num">3</span> Global Gate starts immediately with desktop shortcut.</li>
          </ul>
        </div>
      </div>

      <div>
        <a href="/download/windows" class="btn btn-win">
          <span>⬇️</span> Download for Windows (PC)
        </a>
        <div class="meta-info">Installer: GlobalGate-Setup-v${APP_VERSION}.exe • ${exeSize}</div>
      </div>
    </div>
  </div>

  <div class="footer">
    <p>Global Gate S.A.R.L. &copy; 2026. All rights reserved.</p>
    <p>Connected to Live Production Server • <a href="https://portal.globalgate.sarl">Open Web Portal</a> • <a href="https://api.globalgate.sarl/status">API Health</a></p>
  </div>
</body>
</html>`;

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.send(html);
});

module.exports = router;
