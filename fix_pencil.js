const fs = require('fs');
let code = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderAdmin.js', 'utf8');

// Find the pencil icon: <Edit style={{ color: 'gray' }} />
// It is inside: <NavLink to={`/MaintenanceOrderUpdate/${params.row._id}`} ...
const pencilRegex = /<NavLink to=\{\`\/MaintenanceOrderUpdate\/\$\{params\.row\._id\}\`\}[\s\S]*?<Edit[\s\S]*?<\/NavLink>/g;

// Replace it with a conditional rendering:
code = code.replace(pencilRegex, `
  { (user?.data?.userName === params.row.technicianAssign) ? (
    $&
  ) : (
    <IconButton disabled><Edit style={{ color: '#d3d3d3' }} /></IconButton>
  )}
`);

fs.writeFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderAdmin.js', code);
console.log('Conditionally rendered Pencil icon');
