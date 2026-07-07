const fs = require('fs');
const path = require('path');
const modelFiles = fs.readdirSync(path.join(__dirname, 'model')).filter(f => f.endsWith('.js'));
const missing = [];
for (const file of modelFiles) {
  const content = fs.readFileSync(path.join(__dirname, 'model', file), 'utf8');
  if (!/branchId\s*[:=]/.test(content) && !/branchId\s*\)/.test(content)) {
    missing.push(file);
  }
}
console.log('models missing branchId:', missing);
