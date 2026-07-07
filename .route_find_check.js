const fs = require('fs');
const path = require('path');
const source = fs.readFileSync(path.join(__dirname, 'routes', 'Routes.js'), 'utf8');
const lines = source.split(/\r?\n/);
const issues = [];
let currentRoute = null;
let currentLine = 0;
let capturing = false;
let depth = 0;
let block = [];
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const routeMatch = line.match(/Route\.route\(\s*"([^"]+)"\s*\)/);
  if (routeMatch) {
    currentRoute = routeMatch[1];
  }
  if (currentRoute && !capturing && line.includes('.get(')) {
    capturing = true;
    depth = (line.match(/\{/g) || []).length - (line.match(/\}/g) || []).length;
    block = [line];
    currentLine = i + 1;
    continue;
  }
  if (capturing) {
    block.push(line);
    depth += (line.match(/\{/g) || []).length - (line.match(/\}/g) || []).length;
    if (depth <= 0) {
      const text = block.join('\n');
      const hasFind = /\.find\(/.test(text);
      const hasBranchFilter = /getBranchFilter\(|\.find\(filter\)|filter\s*=|branchId\s*=|branchId\)/.test(text);
      if (hasFind && !hasBranchFilter) {
        issues.push({route: currentRoute, startLine: currentLine, snippet: text.slice(0,300).replace(/\n/g,' ')});
      }
      capturing = false;
      block = [];
      currentRoute = null;
    }
  }
}
console.log(JSON.stringify(issues, null, 2));
