const fs = require('fs');
const path = require('path');
const content = fs.readFileSync(path.join(__dirname,'routes','Routes.js'),'utf8');
const lines = content.split(/\r?\n/);
let routeName = null;
let collecting = false;
let depth = 0;
let funcLines = [];
let startLine = 0;
const issues = [];
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const routeMatch = line.match(/Route\.route\("([^"]+)"\)/);
  if (routeMatch) {
    routeName = routeMatch[1];
  }
  if (routeName && !collecting && /\.get\(/.test(line)) {
    collecting = true;
    startLine = i + 1;
    funcLines = [line];
    depth = (line.match(/\{/g)||[]).length - (line.match(/\}/g)||[]).length;
    continue;
  }
  if (collecting) {
    funcLines.push(line);
    depth += (line.match(/\{/g)||[]).length;
    depth -= (line.match(/\}/g)||[]).length;
    if (depth === 0) {
      const block = funcLines.join('\n');
      if (/\.find\(/.test(block) && !/branchId/.test(block)) {
        issues.push({route: routeName, startLine, summary: block.slice(0, 200)});
      }
      collecting = false;
      routeName = null;
      funcLines = [];
    }
  }
}
console.log(JSON.stringify(issues, null, 2));
