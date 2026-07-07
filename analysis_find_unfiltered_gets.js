const fs = require('fs');
const path = require('path');
const content = fs.readFileSync(path.join(__dirname, 'routes', 'Routes.js'), 'utf8');
const lines = content.split(/\r?\n/);
let currentRoute = null;
let collecting = false;
let braceDepth = 0;
let routeBlock = [];
let results = [];
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const routeMatch = line.match(/Route\.route\("([^"]+)"\)/);
  if (routeMatch) {
    currentRoute = routeMatch[1];
  }
  if (currentRoute && /\.get\(async \(req, res, next\) => \{/.test(line)) {
    collecting = true;
    braceDepth = 1;
    routeBlock = [line];
    continue;
  }
  if (collecting) {
    routeBlock.push(line);
    braceDepth += (line.match(/\{/g) || []).length;
    braceDepth -= (line.match(/\}/g) || []).length;
    if (braceDepth === 0) {
      const block = routeBlock.join('\n');
      const findMatches = [...block.matchAll(/\.find\(/g)];
      if (findMatches.length > 0) {
        const hasBranchFilter = /branchId\s*=\s*req\.query\.branchId|branchId\s*=\s*req\.query\.branchId|branchId\s*=\s*\(req\.query\.branchId|req\.query\.branchId\s*!==\s*['\"]ALL['\"]|query\.branchId\s*=\s*req\.query\.branchId|filter\.branchId\s*=\s*branchId|query\.branchId\s*=\s*branchId/.test(block);
        const hasBranchUsage = /branchId/.test(block);
        if (!hasBranchFilter) {
          results.push({ route: currentRoute, line: i+1, hasBranchUsage, blockSnippet: routeBlock.slice(0,20).join(' ') });
        }
      }
      collecting = false;
      currentRoute = null;
    }
  }
}
console.log(JSON.stringify(results, null, 2));
