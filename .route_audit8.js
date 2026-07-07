const fs = require('fs');
const path = require('path');
const source = fs.readFileSync(path.join(__dirname, 'routes', 'Routes.js'), 'utf8');
const lines = source.split(/\r?\n/);
let route = null;
let inGet = false;
let brace = 0;
let block = [];
let results = [];
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
      const hasFind = /\.find\(/.test(text);
      const usesFilter = /getBranchFilter|filter\s*=|\.find\(filter|\.find\(query|branchId/.test(text);
      if (hasFind) {
        results.push({route, hasFind, usesFilter, snippet: text.slice(0,200)});
      }
      route = null;
      inGet = false;
    }
  }
}
console.log(JSON.stringify(results, null, 2));
