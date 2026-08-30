const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, '../index.html');
const destPath = path.join(__dirname, '../dist_web/index.html');
const buildDestPath = path.join(__dirname, '../build/index.html');

let indexHtml = fs.readFileSync(srcPath, 'utf8');

// Use a timestamp to bust the Cloudflare edge cache and browser cache on every build
const cacheBuster = Date.now();
const webHtml = indexHtml.replace('./build/js/app.js', `./build/js/app.js?v=${cacheBuster}`);

const distWebDir = path.dirname(destPath);
if (!fs.existsSync(distWebDir)) {
  fs.mkdirSync(distWebDir, { recursive: true });
}
fs.writeFileSync(destPath, webHtml);

const buildDir = path.dirname(buildDestPath);
if (!fs.existsSync(buildDir)) {
  fs.mkdirSync(buildDir, { recursive: true });
}
fs.writeFileSync(buildDestPath, webHtml);

console.log('Copied index.html to dist_web/ and build/ with cache busting!');
