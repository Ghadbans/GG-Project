const fs = require('fs');
const path = require('path');
const content = fs.readFileSync(path.join(__dirname, 'routes', 'Routes.js'), 'utf8');
const lines = content.split(/\r?\n/);
let route = null;
let collecting = false;
let braceDepth = 0;
let func = [];
const results = [];
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const routeMatch = line.match(/Route\.route\("([^"]+)"\)/);
  if (routeMatch) {
    route = routeMatch[1];
  }
  if (route && /\.get\(async \(req, res, next\) => \{/.test(line)) {
    collecting = true;
    braceDepth = 1;
    func = [line];
    continue;
  }
  if (collecting) {
    func.push(line);
    braceDepth += (line.match(/\{/g) || []).length;
    braceDepth -= (line.match(/\}/g) || []).length;
    if (braceDepth === 0) {
      const block = func.join('\n');
      const hasFind = /\.[\s\n]*find\(/.test(block) || /find\(/.test(block);
      const hasBranch = /branchId/.test(block);
      const hasQueryBranch = /req\.query\.branchId/.test(block);
      const hasAll = /!==\s*['\"]ALL['\"]/.test(block) || /!=\s*['\"]ALL['\"]/.test(block);
      if (hasFind && !hasBranch) {
        results.push({ route, line: i + 1, reason: 'no branchId filter', hasQueryBranch, hasAll });
      } else if (hasFind && hasQueryBranch && !hasAll) {
        results.push({ route, line: i + 1, reason: 'branch query without ALL guard', hasQueryBranch, hasAll });
      }
      collecting = false;
      route = null;
    }
  }
}
console.log(JSON.stringify(results, null, 2));
