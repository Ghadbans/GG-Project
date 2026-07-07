const fs = require('fs');
const path = require('path');
const source = fs.readFileSync(path.join(__dirname, 'routes', 'Routes.js'), 'utf8');
const lines = source.split(/\r?\n/);
let route = null;
let inGet = false;
let brace = 0;
let block = [];
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const routeMatch = line.match(/Route\.route\(\s*"([^"]+)"\)/);
  if (routeMatch) {
    route = routeMatch[1];
    inGet = false;
    brace = 0;
    block = [];
  }
  if (route && !inGet && line.includes('.get(')) {
    inGet = true;
    brace = (line.match(/\{/g) || []).length - (line.match(/\}/g) || []).length;
    block = [line];
    continue;
  }
  if (inGet) {
    block.push(line);
    brace += (line.match(/\{/g) || []).length - (line.match(/\}/g) || []).length;
    if (brace <= 0) {
      const text = block.join('\n');
      const hasFindNoArgs = /\.find\(\s*\)/.test(text);
      const hasBranch = /branchId/.test(text) || /getBranchFilter\(/.test(text) || /find\(filter\)/.test(text) || /find\(query\)/.test(text) || /find\(\{\s*\}/.test(text);
      if (hasFindNoArgs && !hasBranch) {
        console.log(`UNFILTERED: ${route} lines ${i - block.length + 2}-${i + 1}`);
      }
      route = null;
      inGet = false;
    }
  }
}
