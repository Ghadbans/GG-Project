const fs = require('fs');
const path = require('path');
const source = fs.readFileSync(path.join(__dirname, 'routes', 'Routes.js'), 'utf8');
const lines = source.split(/\r?\n/);
const issues = [];
let currentRoute = null;
let inGet = false;
let depth = 0;
let block = [];
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const routeMatch = line.match(/Route\.route\(\s*"([^"]+)"\s*\)/);
  if (routeMatch) {
    currentRoute = routeMatch[1];
    inGet = false;
    depth = 0;
    block = [];
  }
  if (currentRoute && !inGet && line.includes('.get(')) {
    inGet = true;
    block = [line];
    depth = (line.match(/\{/g) || []).length - (line.match(/\}/g) || []).length;
    continue;
  }
  if (inGet) {
    block.push(line);
    depth += (line.match(/\{/g) || []).length - (line.match(/\}/g) || []).length;
    if (depth <= 0) {
      const text = block.join('\n');
      const hasListFind = /\.find\(/.test(text) && !/findById\(/.test(text) && !/findOne\(/.test(text);
      const hasBranchFilter = /getBranchFilter\(|\.find\(filter\)|filter\s*=|query\.branchId|branchId\s*=|branchId\s*\)/.test(text);
      if (hasListFind && !hasBranchFilter) {
        issues.push({route: currentRoute, startLine: i - block.length + 2, snippet: text.slice(0, 400).replace(/\n/g, ' ')});
      }
      inGet = false;
      currentRoute = null;
      block = [];
    }
  }
}
console.log(JSON.stringify(issues, null, 2));
