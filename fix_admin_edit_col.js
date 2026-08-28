const fs = require('fs');

// ===== Fix MaintenanceOrderAdmin.js =====
let adminCode = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderAdmin.js', 'utf8');

// Replace the entire edit column renderCell - exact match on the old block
const oldEditColumn = `    {\r\n      field: 'edit', headerName: 'Edit', width: 40, renderCell: (params) => (\r\n        <EditTooltip title=\"Edit Order\">\r\n          <span>\r\n            <IconButton disabled={params.row.status === 'Converted' || params.row.status === 'Close'}>\r\n              \r\n  { (user?.data?.userName === params.row.technicianAssign) ? (\r\n    <NavLink to={\`/MaintenanceOrderUpdate/\${params.row._id}\`} className='LinkName'>\r\n                <EditIcon style={{ color: (params.row.status === 'Converted' || params.row.status === 'Close') ? 'lightgray' : 'gray' }} />\r\n              </NavLink>\r\n  ) : (\r\n    <IconButton disabled><Edit style={{ color: '#d3d3d3' }} /></IconButton>\r\n  )}\r\n\r\n            </IconButton>\r\n          </span>\r\n        </EditTooltip>\r\n      )\r\n    },`;

const newEditColumn = `    {
      field: 'edit', headerName: 'Edit', width: 40, renderCell: (params) => (
        <EditTooltip title="Edit Status">
          <span>
            <IconButton
              disabled={params.row.status === 'Converted' || params.row.status === 'Close'}
              onClick={() => handleOpenUpdate(params.row._id)}
            >
              <EditIcon style={{ color: (params.row.status === 'Converted' || params.row.status === 'Close') ? 'lightgray' : 'gray' }} />
            </IconButton>
          </span>
        </EditTooltip>
      )
    },`;

if (adminCode.includes(oldEditColumn)) {
  adminCode = adminCode.replace(oldEditColumn, newEditColumn);
  console.log('OK: Edit column replaced with status-only modal trigger');
} else {
  // Try without \r
  const oldNoR = oldEditColumn.replace(/\r/g, '');
  if (adminCode.replace(/\r/g, '').includes(oldNoR)) {
    // Replace character by character
    adminCode = adminCode.replace(
      /field: 'edit', headerName: 'Edit'[\s\S]*?<\/EditTooltip>\s*\)\s*\},\s*\{\s*field: 'Delete'/,
      newEditColumn + `\n    {\n      field: 'Delete'`
    );
    console.log('OK: Edit column replaced via regex');
  } else {
    console.log('FAIL: Could not match edit column - manual inspect needed');
    // show what lines 514-535 look like
    const lines = adminCode.split('\n');
    console.log(lines.slice(514, 535).join('\n'));
  }
}

fs.writeFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderAdmin.js', adminCode);

// Verify
let verify = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderAdmin.js', 'utf8');
const checks = [
  { name: 'Edit Status tooltip present', pass: verify.includes('Edit Status') },
  { name: 'handleOpenUpdate used', pass: verify.includes('onClick={() => handleOpenUpdate(params.row._id)}') },
  { name: 'No "Edit Order" tooltip', pass: !verify.includes('Edit Order') },
  { name: 'No NavLink in edit column (no more navigate to update page)', pass: !verify.includes('MaintenanceOrderUpdate/${params.row._id}') },
];
checks.forEach(c => console.log((c.pass ? 'OK  ' : 'FAIL') + ': ' + c.name));
