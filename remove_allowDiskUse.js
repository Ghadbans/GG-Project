const fs = require('fs');
const path = require('path');
const p = path.join(__dirname, 'server', 'routes', 'Routes.js');
let c = fs.readFileSync(p, 'utf8');

let count = 0;
// We added it like: }).allowDiskUse(true).exec()
// We need to remove it from findOne queries.

const regex = /\.findOne\((.*?)\)\.sort\((.*?)\)\.allowDiskUse\(true\)\.exec\(\)/gs;

c = c.replace(regex, (match, p1, p2) => {
  count++;
  return `.findOne(${p1}).sort(${p2}).exec()`;
});

fs.writeFileSync(p, c, 'utf8');
console.log(`Removed allowDiskUse from ${count} findOne occurrences.`);
