const fs = require('fs');
const path = require('path');
const p = path.join(__dirname, 'server', 'routes', 'Routes.js');
let c = fs.readFileSync(p, 'utf8');

// We want to match: .sort({ \n somethingNumber: -1 \n }).exec()
// and replace with .allowDiskUse(true).exec() if it isn't already there.
let count = 0;
const regex = /\.sort\(\{\s*([a-zA-Z]+Number)\s*:\s*-1\s*\}\)\.exec\(\)/g;

c = c.replace(regex, (match, fieldName) => {
  count++;
  return `.sort({\n    ${fieldName}: -1\n  }).allowDiskUse(true).exec()`;
});

// Also match the ones that are just on one line
const regex2 = /\.sort\(\{\s*([a-zA-Z]+Number)\s*:\s*-1\s*\}\)\s*\.exec\(\)/g;
c = c.replace(regex2, (match, fieldName) => {
  count++;
  return `.sort({ ${fieldName}: -1 }).allowDiskUse(true).exec()`;
});

// Let's also just aggressively match .sort({ anything: -1 }).exec() that doesn't have allowDiskUse
const regexGeneral = /\.sort\(\{\s*([a-zA-Z]+)\s*:\s*-1\s*\}\)\s*\.exec\(\)/g;
c = c.replace(regexGeneral, (match, fieldName) => {
  count++;
  return `.sort({ ${fieldName}: -1 }).allowDiskUse(true).exec()`;
});

fs.writeFileSync(p, c, 'utf8');
console.log(`Replaced ${count} occurrences.`);
