#!/usr/bin/env node
/**
 * scripts/sync-releases.js
 * Syncs latest.yml, Windows Setup .exe, Android .apk, and version.json
 * into server/public/downloads/ after building.
 */
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const pkg = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));
const version = pkg.version;
const parts = version.split('.').map(n => parseInt(n, 10) || 0);
const versionCode = (parts[0] || 0) * 10000 + (parts[1] || 0) * 100 + (parts[2] || 0);

const distDir = path.join(root, 'dist');
const downloadsDir = path.join(root, 'server', 'public', 'downloads');
if (!fs.existsSync(downloadsDir)) {
  fs.mkdirSync(downloadsDir, { recursive: true });
}

const copyIfExists = (src, dest) => {
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`[sync-releases] Copied ${path.basename(src)} -> ${dest}`);
    return true;
  }
  return false;
};

copyIfExists(
  path.join(distDir, `Global Gate Setup ${version}.exe`),
  path.join(downloadsDir, `Global Gate Setup ${version}.exe`)
);
copyIfExists(
  path.join(distDir, `Global Gate Setup ${version}.exe`),
  path.join(downloadsDir, 'Global Gate Setup.exe')
);
copyIfExists(
  path.join(distDir, `Global Gate Setup ${version}.exe`),
  path.join(downloadsDir, 'GlobalGateSetup.exe')
);
copyIfExists(
  path.join(distDir, 'latest.yml'),
  path.join(downloadsDir, 'latest.yml')
);

const versionJson = {
  version,
  minSupportedVersion: '3.7.0',
  versionCode,
  updatedAt: new Date().toISOString()
};
fs.writeFileSync(
  path.join(downloadsDir, 'version.json'),
  JSON.stringify(versionJson, null, 2)
);
console.log(`[sync-releases] Wrote version.json (${version}, code ${versionCode})`);
