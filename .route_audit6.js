const fs = require('fs');
const path = require('path');
const source = fs.readFileSync(path.join(__dirname, 'routes', 'Routes.js'), 'utf8');
const lines = source.split(/\r?\n/);
const issues = [];
let currentRoute = null;
let recording = false;
let depth = 0;
let block = [];
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const routeMatch = line.match(/Route\.route\(\s*"([^"]+)"\)/);
  if (routeMatch) {
    currentRoute = routeMatch[1];
    recording = false;
    depth = 0;
    block = [];
  }
  if (currentRoute && !recording && line.includes('.get(')) {
    recording = true;
    block = [line];
    depth = (line.match(/\{/g) || []).length - (line.match(/\}/g) || []).length;
    continue;
  }
  if (recording) {
    block.push(line);
    depth += (line.match(/\{/g) || []).length - (line.match(/\}/g) || []).length;
    if (depth === 0) {
      const text = block.join('\n');
      const hasFind = /\.find\(/.test(text);
      const hasBranch = /branchId/.test(text);
      const hasFindById = /findById\(/.test(text);
      const hasFindByIdAndUpdate = /findByIdAndUpdate\(/.test(text);
      const isList = hasFind && !hasFindById && !hasFindByIdAndUpdate;
      if (isList && !hasBranch) {
        issues.push({ route: currentRoute, startLine: i - block.length + 2, snippet: text.slice(0, 400) });
      }
      currentRoute = null;
      recording = false;
      block = [];
    }
  }
}
console.log(JSON.stringify(issues, null, 2));
