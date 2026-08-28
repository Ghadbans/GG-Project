const fs = require('fs');

// ─────────────────────────────────────────────────────────────
// ADMIN FILE
// ─────────────────────────────────────────────────────────────
let admin = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderAdmin.js', 'utf8');

// 1. Edit column → status-only modal for ALL users (no NavLink)
admin = admin.replace(
  /(\{\s*field: 'edit'[\s\S]*?renderCell: \(params\) => \([\s\S]*?<\/EditTooltip>\s*\)\s*\},)/,
  `{
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
    },`
);

// 2. Delete column → hidden for Technicians
admin = admin.replace(
  /(\{\s*field: 'Delete'[\s\S]*?renderCell: \(params\) => \([\s\S]*?<\/DeleteTooltip>\s*\)\s*\},)/,
  `{
      field: 'Delete', headerName: 'Delete', width: 40, renderCell: (params) => (
        user.data.role === 'Technician' ? <span></span> : (
          <DeleteTooltip title="Delete">
            <span>
              <IconButton onClick={handleOpenAll} disabled={MaintenanceInfoD.length === 0}>
                <DeleteIcon style={{ cursor: 'pointer', color: 'red' }} />
              </IconButton>
            </span>
          </DeleteTooltip>
        )
      )
    },`
);

// 3. DataGrid rows → filter for Technicians to only see their own non-converted orders
admin = admin.replace(
  'rows={maintenance}',
  "rows={user.data.role === 'Technician' ? maintenance.filter(r => r.technicianAssign === user.data.userName && r.status !== 'Converted') : maintenance}"
);

// 4. Status modal title
admin = admin.replace('Update Estimate Status', 'Update Maintenance Status');

// 5. Status modal options — role-conditional
admin = admin.replace(
  /<MenuItem value="Open">Open<\/MenuItem>\s*<MenuItem value="Reschedule">Reschedule<\/MenuItem>\s*<MenuItem value="Pending">Pending<\/MenuItem>\s*<MenuItem value="Cancel">Cancel<\/MenuItem>\s*<MenuItem disabled={action === undefined \|\| action === 'Carry-In'} value="Close">Close<\/MenuItem>/,
  `<MenuItem value="Open">Open</MenuItem>
                    {user.data.role !== 'Technician' && <MenuItem value="Reschedule">Reschedule</MenuItem>}
                    <MenuItem value="Pending">Pending</MenuItem>
                    {user.data.role !== 'Technician' && <MenuItem value="Cancel">Cancel</MenuItem>}
                    <MenuItem value="Close">{user.data.role === 'Technician' ? 'Complete' : 'Close'}</MenuItem>`
);

fs.writeFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderAdmin.js', admin);

// Verify Admin
let va = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderAdmin.js', 'utf8');
const adminOK = [
  ['Edit Status tooltip', va.includes('Edit Status')],
  ['handleOpenUpdate on click', va.includes('onClick={() => handleOpenUpdate(params.row._id)}')],
  ['No Edit Order tooltip', !va.includes('Edit Order')],
  ['Technician row filter', va.includes('r.technicianAssign === user.data.userName')],
  ['Status title updated', va.includes('Update Maintenance Status')],
  ['Complete option for Technician', va.includes("'Technician' ? 'Complete'")],
  ['Reschedule hidden for Technician', va.includes("role !== 'Technician' && <MenuItem value=\"Reschedule\"")],
  ['Delete hidden for Technician', va.includes("role === 'Technician' ? <span></span>")],
];
adminOK.forEach(([n, p]) => console.log('[Admin] ' + (p ? 'OK  ' : 'FAIL') + ': ' + n));

// ─────────────────────────────────────────────────────────────
// UPDATE FILE
// ─────────────────────────────────────────────────────────────
let update = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate.js', 'utf8');

// 1. Finance columns: role-based visibility (Technician = hidden)
update = update.replace(/<td style={{ display: "none" }}>\r?\n<TextField name="stock"/g,
  `<td style={{ display: user.data.role === 'Technician' ? 'none' : '' }}>\n<TextField name="stock"`);
update = update.replace(/<td style={{ display: "none" }}>\r?\n<TextField name="itemRate"/g,
  `<td style={{ display: user.data.role === 'Technician' ? 'none' : '' }}>\n<TextField name="itemRate"`);
update = update.replace(/<td style={{ display: "none" }}>\r?\n<TextField name="itemDiscount"/g,
  `<td style={{ display: user.data.role === 'Technician' ? 'none' : '' }}>\n<TextField name="itemDiscount"`);
update = update.replace(/<td style={{ display: "none" }}>\r?\n<TextField id="adjustmentNumber"/g,
  `<td style={{ display: user.data.role === 'Technician' ? 'none' : '' }}>\n<TextField id="adjustmentNumber"`);
update = update.replace(/<td style={{ display: "none" }}>\r?\n<TextField name="laborDiscount"/g,
  `<td style={{ display: user.data.role === 'Technician' ? 'none' : '' }}>\n<TextField name="laborDiscount"`);
update = update.replace('<td style={{ display: "none" }}></td>',
  `<td style={{ display: user.data.role === 'Technician' ? 'none' : '' }}></td>`);
update = update.replace('<td colSpan={3} style={{ display: "none" }}>Total Generale</td>',
  `<td colSpan={3} style={{ display: user.data.role === 'Technician' ? 'none' : '' }}>Total Generale</td>`);
update = update.replace(/(<td style={{ display: "none" }}>)<span>\$<\/span><span>\{totalInvoice/,
  `<td style={{ display: user.data.role === 'Technician' ? 'none' : '' }}><span>$</span><span>{totalInvoice`);

// 2. Table headers: role-based
update = update.replace(
  /(<thead>[\s\S]*?)<th>#<\/th>[\s\S]*?<th>Action<\/th>([\s\S]*?<\/thead>)/,
  (m, pre, post) => `${pre}<th>#</th>
                              <th>Item</th>
                              <th style={{ display: user.data.role === 'Technician' ? 'none' : '' }}>Stock-A</th>
                              <th>Quantity</th>
                              <th style={{ display: user.data.role === 'Technician' ? 'none' : '' }}>Rate</th>
                              <th style={{ display: user.data.role === 'Technician' ? 'none' : '' }}>Discount</th>
                              <th>Action</th>${post}`
);

// 3. After save: Technicians go to View page; office users go to list
update = update.replace(
  "const handleClose = () => {\r\n    navigate('/MaintenanceOrderAdmin');\r\n  }",
  `const handleClose = () => {\n    navigate(user.data.role === 'Technician' ? \`/MaintenanceOrderViewInformation/\${id}\` : '/MaintenanceOrderAdmin');\n  }`
);

// 4. Remove 'User' role restriction from ADD NEW Item button
update = update.replace(
  "disabled={user.data.role === 'User'} onMouseDown={(e) => e.preventDefault()}",
  "onMouseDown={(e) => e.preventDefault()}"
);

fs.writeFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate.js', update);

let vu = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate.js', 'utf8');
const updateOK = [
  ['Stock-A Technician condition', vu.includes("role === 'Technician' ? 'none'")],
  ['Table header Stock-A', vu.includes('>Stock-A<')],
  ['+ addItem button', vu.includes('onClick={addItem}')],
  ['handleClose navigates Technician to view', vu.includes("'Technician' ? `/MaintenanceOrderViewInformation/")],
  ['ADD NEW Item no User restriction', !vu.includes("disabled={user.data.role === 'User'}")],
  ['DragDropContext intact', vu.includes('<DragDropContext')],
  ['thead intact', vu.includes('<thead>')],
];
updateOK.forEach(([n, p]) => console.log('[Update] ' + (p ? 'OK  ' : 'FAIL') + ': ' + n));

console.log('\nDone.');
