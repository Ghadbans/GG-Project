const fs = require('fs');
let code = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate.js', 'utf8');

// For Customer Name Autocomplete
// It looks like:
// <Autocomplete
//   disableClearable
//   options={customer}
//   getOptionLabel={(option) => option.Customer}
code = code.replace(
  /<Autocomplete\s*disableClearable\s*options=\{customer\}/g,
  '<Autocomplete readOnly disableClearable options={customer}'
);

// For Technician Autocomplete
// It looks like:
// <Autocomplete
//   disableClearable
//   options={filterEmployee}
//   getOptionLabel={(option) => option.employeeName}
code = code.replace(
  /<Autocomplete\s*disableClearable\s*options=\{filterEmployee\}/g,
  '<Autocomplete readOnly disableClearable options={filterEmployee}'
);

fs.writeFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate.js', code);
console.log('Added readOnly to Autocompletes');
