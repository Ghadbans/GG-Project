const fs = require('fs');

// 1. Fix MaintenanceOrderAdmin.js crashes
let adminCode = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderAdmin.js', 'utf8');
adminCode = adminCode.replace(
  /const Name = res\.data\.data\.filter\(row => row\.technicianAssign === storesUserId \|\| row\.technicianAssign === user\?\.data\?\.userName\)\.employeeName;/g,
  'const Name = res.data.data.employeeName;'
);
adminCode = adminCode.replace(
  /<IconButton disabled><Edit style=\{\{ color: '#d3d3d3' \}\} \/><\/IconButton>/g,
  '<IconButton disabled><EditIcon style={{ color: \'#d3d3d3\' }} /></IconButton>'
);
fs.writeFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderAdmin.js', adminCode);

// 2. Fix TechnicianStoreCatalog.js Menu & Title
let storeCode = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/TechnicianStoreCatalog.js', 'utf8');
storeCode = storeCode.replace(
  /import SideMaintenance from '\.\.\/\.\.\/\.\.\/component\/SideMaintenance';/g,
  'import SideMaintenanceMenu from \'../../../component/SideMaintenanceMenu\';'
);
storeCode = storeCode.replace(
  /<SideMaintenance \/>/g,
  '<SideMaintenanceMenu onView={6} />'
);
storeCode = storeCode.replace(
  /Store Item Display/g,
  'Technician Store'
);
fs.writeFileSync('src/js/AdminView1/PageView/MaintenanceOrder/TechnicianStoreCatalog.js', storeCode);

// 3. Fix MaintenanceOrderViewInformation.js Options & Back Button
let viewCode = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderViewInformation.js', 'utf8');
viewCode = viewCode.replace(
  /<NavLink to={`\/MaintenanceFormClone\/\$\{row\._id\}`} className='LinkName'[\s\S]*?<\/NavLink>/g,
  ''
);
viewCode = viewCode.replace(
  /<MenuItem onClick=\{handlePrint2\}[\s\S]*?<span>Export to Excel<\/span>\s*<\/MenuItem>/g,
  ''
);
viewCode = viewCode.replace(
  /<IconButton onClick=\{\(\) => navigate\(-1\)\}>/g,
  '<IconButton onClick={() => navigate(\'/MaintenanceOrderAdmin\')}>'
);
fs.writeFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderViewInformation.js', viewCode);

// 4. Fix MaintenanceOrderUpdate.js Clear buttons
let updateCode = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate.js', 'utf8');
updateCode = updateCode.replace(
  /<BlackTooltip title="Clear" placement='top'>\s*<IconButton onClick=\{handleShowAutocompleteCustomer\} style=\{\{ position: 'relative', float: 'right' \}\}>\s*<RemoveCircleOutline style=\{\{ color: '#202a5a' \}\} \/>\s*<\/IconButton>\s*<\/BlackTooltip>/g,
  ''
);
updateCode = updateCode.replace(
  /<BlackTooltip title="Clear" placement='top'>\s*<IconButton onClick=\{handleShowAutocompleteEmployee\} style=\{\{ position: 'relative', float: 'right' \}\}>\s*<RemoveCircleOutline style=\{\{ color: '#202a5a' \}\} \/>\s*<\/IconButton>\s*<\/BlackTooltip>/g,
  ''
);
fs.writeFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate.js', updateCode);

console.log('Done fixing issues.');
