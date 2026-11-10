const fs = require('fs');

// 1. root package.json
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
pkg.version = '3.7.0';
fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2) + '\n', 'utf8');

// 2. server/package.json
const serverPkg = JSON.parse(fs.readFileSync('server/package.json', 'utf8'));
serverPkg.version = '3.7.0';
fs.writeFileSync('server/package.json', JSON.stringify(serverPkg, null, 2) + '\n', 'utf8');

// 3. server/routes/downloadRoutes.js
let dl = fs.readFileSync('server/routes/downloadRoutes.js', 'utf8');
dl = dl.replace(/const APP_VERSION = '[^']+';/, "const APP_VERSION = '3.7.0';");
fs.writeFileSync('server/routes/downloadRoutes.js', dl, 'utf8');

// 4. server/index.js
let idx = fs.readFileSync('server/index.js', 'utf8');
idx = idx.replace(/v3\.6\.43[a-zA-Z0-9\-_]*/g, 'v3.7.0-multi-language');
idx = idx.replace(/version:\s*'3\.6\.43'/g, "version: '3.7.0'");
fs.writeFileSync('server/index.js', idx, 'utf8');

console.log('Bumped all version references to 3.7.0 successfully');
