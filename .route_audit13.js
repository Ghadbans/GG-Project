const fs = require('fs');
const path = require('path');
const source = fs.readFileSync(path.join(__dirname, 'routes', 'Routes.js'), 'utf8');
const lines = source.split(/\r?\n/);
let currentRoute = null;
let currentRouteLine = null;
let currentGet = false;
let foundFind = false;
let foundBranch = false;
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const routeMatch = line.match(/Route\.route\(\s*"([^"]+)"\)/);
  if (routeMatch) {
    currentRoute = routeMatch[1];
    currentRouteLine = i + 1;
    currentGet = false;
    foundFind = false;
    foundBranch = false;
  }
  if (currentRoute && !currentGet && line.includes('.get(')) {
    currentGet = true;
  }
  if (currentGet) {
    if (/\.find\(/.test(line)) foundFind = true;
    if (/branchId/.test(line) || /getBranchFilter\(/.test(line) || /find\(filter\)/.test(line) || /find\(query\)/.test(line)) foundBranch = true;
    if (line.includes('});') || line.includes('})') || line.endsWith(');')) {
      if (foundFind && !foundBranch) {
        console.log(`${currentRouteLine}:${currentRoute}`);
      }
      currentRoute = null;
      currentGet = false;
      foundFind = false;
      foundBranch = false;
    }
  }
}
