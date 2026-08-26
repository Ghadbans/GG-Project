const fs = require('fs');
let code = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate.js', 'utf8');

code = code.replace(
  /<Autocomplete readOnly disableClearable options=\{customer\}/g,
  '<Autocomplete disabled disableClearable options={customer}'
);

code = code.replace(
  /<Autocomplete readOnly disableClearable options=\{filterEmployee\}/g,
  '<Autocomplete disabled disableClearable options={filterEmployee}'
);

fs.writeFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate.js', code);
console.log('Made autocompletes disabled');
