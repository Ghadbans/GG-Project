const fs = require('fs');
let content = fs.readFileSync('routes/Routes.js', 'utf8');

// Find the broken section - after the filterField block, there should be the find/count/res block
// Let's look at what we have
const marker = "query[`itemsQtyArray.${filterField}`] = new RegExp(filterValue, 'i');\n      }";
const idx = content.indexOf(marker);
if (idx === -1) {
  console.log('Marker not found!');
  process.exit(1);
}

// Check what comes after
const after = content.substring(idx + marker.length, idx + marker.length + 300);
console.log('After marker:', JSON.stringify(after));
