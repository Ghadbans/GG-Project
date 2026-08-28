const fs = require('fs');
const path = require('path');

const base = 'src/js/AdminView1/PageView/MaintenanceOrder/';
const adminCode    = fs.readFileSync(base + 'MaintenanceOrderAdmin.js', 'utf8');
const viewCode     = fs.readFileSync(base + 'MaintenanceOrderViewInformation.js', 'utf8');
const updateCode   = fs.readFileSync(base + 'MaintenanceOrderUpdate.js', 'utf8');

const checks = [
  // Admin
  { file: 'Admin', name: 'Edit Status tooltip',            pass: adminCode.includes('Edit Status') },
  { file: 'Admin', name: 'handleOpenUpdate on click',      pass: adminCode.includes('onClick={() => handleOpenUpdate(params.row._id)}') },
  { file: 'Admin', name: 'No "Edit Order"',                pass: !adminCode.includes('Edit Order') },
  { file: 'Admin', name: 'No NavLink to edit page in col', pass: !adminCode.includes('MaintenanceOrderUpdate/${params.row._id}') },

  // View
  { file: 'View',  name: 'Labor Fees only 4 cols',         pass: !viewCode.includes('<td style={{ border: \'1px solid black\' }} ><span data-prefix>$') },
  { file: 'View',  name: 'Options Edit → /MaintenanceOrderUpdate', pass: viewCode.includes('to={`/MaintenanceOrderUpdate/${row._id}`}') },
  { file: 'View',  name: 'No MaintenanceUpdateView',       pass: !viewCode.includes('MaintenanceUpdateView') },

  // Update
  { file: 'Update', name: 'Stock-A header (role-based)',   pass: updateCode.includes("role === 'Technician' ? 'none'") },
  { file: 'Update', name: 'Stock-A column header text',    pass: updateCode.includes('>Stock-A<') },
  { file: 'Update', name: '+ addItem button present',      pass: updateCode.includes('onClick={addItem}') },
  { file: 'Update', name: '+ addItemWhite button present', pass: updateCode.includes('onClick={addItemWhite}') },
  { file: 'Update', name: 'Row addItemRow button present', pass: updateCode.includes('onClick={() => addItemRow(i)}') },
  { file: 'Update', name: 'No hardcoded User restriction', pass: !updateCode.includes("role === 'User'") },
  { file: 'Update', name: 'DragDropContext intact',        pass: updateCode.includes('<DragDropContext') },
  { file: 'Update', name: 'Table structure intact',        pass: updateCode.includes('<thead>') && updateCode.includes('</thead>') },
  { file: 'Update', name: 'navigate to /MaintenanceOrderAdmin on save', pass: updateCode.includes("navigate('/MaintenanceOrderAdmin')") },
];

let allPass = true;
checks.forEach(c => {
  const icon = c.pass ? 'OK  ' : 'FAIL';
  if (!c.pass) allPass = false;
  console.log(`[${c.file}] ${icon}: ${c.name}`);
});
console.log('');
console.log(allPass ? '✅ ALL CHECKS PASSED - safe to build' : '❌ SOME CHECKS FAILED - do NOT build');
