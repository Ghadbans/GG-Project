const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, '../index.html');
const destPath = path.join(__dirname, '../dist_web/index.html');

let indexHtml = fs.readFileSync(srcPath, 'utf8');

// Use a timestamp to bust the Cloudflare edge cache and browser cache on every build
const cacheBuster = Date.now();
indexHtml = indexHtml.replace('./build/js/app.js', `./build/js/app.js?v=${cacheBuster}`);

fs.writeFileSync(destPath, indexHtml);
console.log('Copied index.html to dist_web/ with cache busting!');
