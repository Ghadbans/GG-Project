const fs = require('fs');
const path = require('path');
const content = fs.readFileSync(path.join(__dirname, 'routes', 'Routes.js'), 'utf8');
const lines = content.split(/\r?\n/);
let currentRoute = null;
let collecting = false;
let braceDepth = 0;
let funcLines = [];
let startLine = 0;
const issues = [];
for (let idx = 0; idx < lines.length; idx++) {
  const line = lines[idx];
  const routeMatch = line.match(/Route\.route\("([^"]+)"\)/);
  if (routeMatch) {
    currentRoute = routeMatch[1];
  }
  if (currentRoute && /\.get\(/.test(line) && /async/.test(line)) {
    collecting = true;
    braceDepth = (line.match(/\{/g) || []).length - (line.match(/\}/g) || []).length;
    funcLines = [line];
    startLine = idx + 1;
    continue;
  }
  if (collecting) {
    funcLines.push(line);
    braceDepth += (line.match(/\{/g) || []).length;
    braceDepth -= (line.match(/\}/g) || []).length;
    if (braceDepth === 0) {
      const block = funcLines.join('\n');
      if (/\.find\(/.test(block) && !/branchId/.test(block)) {
        issues.push({route: currentRoute, startLine, lines: funcLines.slice(0, 20).join('\n')});
      }
      currentRoute = null;
      collecting = false;
      funcLines = [];
    }
  }
}
console.log(JSON.stringify(issues, null, 2));
