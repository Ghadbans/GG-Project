const fs = require('fs');
let code = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate.js', 'utf8');

const matches = code.match(/<td.*?<\/td>/gs);
if (matches) {
  matches.forEach(m => {
    if (m.includes('<TextField') && !m.includes('display: "none"')) {
      console.log('--- visible td with textfield ---');
      console.log(m.substring(0, 150).replace(/\n/g, ' '));
    }
  });
}
