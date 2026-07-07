const fs = require('fs');
const path = require('path');
const src = fs.readFileSync(path.join(__dirname, 'routes', 'Routes.js'), 'utf8');
const lines = src.split(/\r?\n/);
let route = null;
let lineNumber = 0;
let inGet = false;
let brace = 0;
let block = [];
let results = [];
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const routeMatch = line.match(/Route\.route\(\s*"([^"]+)"\)/);
  if (routeMatch) {
    route = routeMatch[1];
    lineNumber = i + 1;
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
      if (hasFind) {
        const hasFilter = /getBranchFilter\(|filter\s*=|\.find\(filter\)|\.find\(query\)|branchId/.test(text);
        results.push({ route, lineNumber, hasFilter, snippet: text.slice(0,300).replace(/\n/g,' ')});
      }
      route = null;
      inGet = false;
    }
  }
}
console.log(JSON.stringify(results, null, 2));
