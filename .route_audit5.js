const fs = require('fs');
const path = require('path');
const file = path.join(__dirname,'routes','Routes.js');
const content = fs.readFileSync(file,'utf8');
const lines = content.split(/\r?\n/);
let routeName = null;
let inGet = false;
let braceDepth = 0;
let block = [];
const issues = [];
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const routeMatch = line.match(/Route\.route\(\s*"([^"]+)"/);
  if (routeMatch) {
    routeName = routeMatch[1];
    inGet = false;
    braceDepth = 0;
    block = [];
  }
  if (routeName && !inGet && line.includes('.get(')) {
    inGet = true;
    block = [line];
    braceDepth = (line.match(/\{/g) || []).length - (line.match(/\}/g) || []).length;
    continue;
  }
  if (inGet) {
    block.push(line);
    braceDepth += (line.match(/\{/g) || []).length - (line.match(/\}/g) || []).length;
    if (braceDepth === 0) {
      const text = block.join('\n');
      const hasFind = /\b\.find\(/.test(text) || /\bfind\(/.test(text);
      const hasBranch = /branchId/.test(text);
      const hasFindById = /\bfindById\(/.test(text);
      const hasFindByIdAndUpdate = /\bfindByIdAndUpdate\(/.test(text);
      const isList = hasFind && !hasFindById && !hasFindByIdAndUpdate;
      if (isList && !hasBranch) {
        issues.push({ route: routeName, startLine: i - block.length + 2, snippet: text.slice(0, 360) });
      }
      routeName = null;
      inGet = false;
      block = [];
    }
  }
}
console.log(JSON.stringify(issues,null,2));
