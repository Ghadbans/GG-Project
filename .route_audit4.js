const fs = require('fs');
const path = require('path');
const source = fs.readFileSync(path.join(__dirname, 'routes', 'Routes.js'), 'utf8');
const lines = source.split(/\r?\n/);
let routeName = null;
let recording = false;
let braceDepth = 0;
let block = [];
const issues = [];
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const routeMatch = line.match(/Route\.route\(\s*"([^"]+)"/);
  if (routeMatch) {
    routeName = routeMatch[1];
    recording = false;
    block = [];
    braceDepth = 0;
  }
  if (routeName && !recording && line.includes('.get(')) {
    recording = true;
    block = [line];
    braceDepth = (line.match(/\{/g) || []).length - (line.match(/\}/g) || []).length;
    continue;
  }
  if (recording) {
    block.push(line);
    braceDepth += (line.match(/\{/g) || []).length - (line.match(/\}/g) || []).length;
    if (braceDepth === 0) {
      const text = block.join('\n');
      const hasFind = /\.find\(/.test(text);
      const hasBranch = /branchId/.test(text);
      const hasFindById = /findById\(/.test(text);
      const hasFindByIdAndUpdate = /findByIdAndUpdate\(/.test(text);
      const isList = hasFind && !hasFindById && !hasFindByIdAndUpdate;
      if (isList && !hasBranch) {
        issues.push({ route: routeName, startLine: i - block.length + 2, snippet: text.slice(0, 300) });
      }
      routeName = null;
      recording = false;
      block = [];
    }
  }
}
console.log(JSON.stringify(issues, null, 2));
