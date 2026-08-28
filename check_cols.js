const fs = require('fs');
let code = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate.js', 'utf8');
const lines = code.split('\n');
lines.forEach((l, i) => {
  if (l.includes('none') && l.includes('td')) {
    console.log(i + ': ' + l);
  }
});
