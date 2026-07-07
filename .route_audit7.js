const fs = require('fs');
const path = require('path');
const source = fs.readFileSync(path.join(__dirname, 'routes', 'Routes.js'), 'utf8');
const lines = source.split(/\r?\n/);
const issues = [];
let route = null;
let mode = null;
let braceLevel = 0;
let inGet = false;
let getStartLine = null;
let getBlock = [];
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const routeMatch = line.match(/Route\.route\(\s*"([^"]+)"\)/);
  if (routeMatch) {
    route = routeMatch[1];
    inGet = false;
    getBlock = [];
    braceLevel = 0;
  }
  if (route && !inGet && line.includes('.get(')) {
    inGet = true;
    getStartLine = i + 1;
    getBlock = [line];
    braceLevel = (line.match(/\{/g) || []).length - (line.match(/\}/g) || []).length;
    continue;
  }
  if (inGet) {
    getBlock.push(line);
    braceLevel += (line.match(/\{/g) || []).length - (line.match(/\}/g) || []).length;
    if (braceLevel <= 0) {
      const text = getBlock.join('\n');
      const hasRawFind = /\.find\s*\(/.test(text);
      const hasFindWithFilter = /\.find\s*\(\s*(?:filter|query)\s*\)/.test(text);
      const hasBranch = /branchId/.test(text);
      const hasAllRoute = route === '/companyProfile' || route === '/grantAccess';
      if (hasRawFind && !hasFindWithFilter && !hasAllRoute) {
        issues.push({ route, startLine: getStartLine, text: text.slice(0, 400), hasBranch });
      }
      route = null;
      inGet = false;
    }
  }
}
console.log(JSON.stringify(issues, null, 2));
