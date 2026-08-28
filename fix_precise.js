const fs = require('fs');

// ─── FIX A: MaintenanceOrderUpdate.js ───────────────────────────────────────
// Stock-A, Rate, Discount hidden for ALL users (not role-conditional)
// ─────────────────────────────────────────────────────────────────────────────
let update = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate.js', 'utf8');

// Column headers: always hide Stock-A, Rate, Discount
update = update.replace(
  /<th style={{ display: user\.data\.role === 'Technician' \? 'none' : '' }}>Stock-A<\/th>/g,
  `<th style={{ display: 'none' }}>Stock-A</th>`
);
update = update.replace(
  /<th style={{ display: user\.data\.role === 'Technician' \? 'none' : '' }}>Rate<\/th>/g,
  `<th style={{ display: 'none' }}>Rate</th>`
);
update = update.replace(
  /<th style={{ display: user\.data\.role === 'Technician' \? 'none' : '' }}>Discount<\/th>/g,
  `<th style={{ display: 'none' }}>Discount</th>`
);

// Data cells: always hide
update = update.replace(
  /style={{ display: user\.data\.role === 'Technician' \? 'none' : '' }}/g,
  `style={{ display: 'none' }}`
);

fs.writeFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate.js', update);

let vu = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate.js', 'utf8');
const uChecks = [
  ['No Technician role conditions', !vu.includes("role === 'Technician' ? 'none'")],
  ['Stock still display none', vu.includes('display: \'none\' }}>Stock-A</th>')],
  ['+ addItem intact', vu.includes('onClick={addItem}')],
  ['DragDropContext intact', vu.includes('<DragDropContext')],
];
uChecks.forEach(([n, p]) => console.log('[Update] ' + (p ? 'OK  ' : 'FAIL') + ': ' + n));

// ─── FIX B: MaintenanceOrderAdmin.js ────────────────────────────────────────
// Status modal: use ternary (? : null) not && so MUI Select doesn't get false
// ─────────────────────────────────────────────────────────────────────────────
let admin = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderAdmin.js', 'utf8');

// Replace && conditional with ternary for Reschedule
admin = admin.replace(
  `{user.data.role !== 'Technician' && <MenuItem value="Reschedule">Reschedule</MenuItem>}`,
  `{user.data.role !== 'Technician' ? <MenuItem value="Reschedule">Reschedule</MenuItem> : null}`
);
// Replace && conditional with ternary for Cancel
admin = admin.replace(
  `{user.data.role !== 'Technician' && <MenuItem value="Cancel">Cancel</MenuItem>}`,
  `{user.data.role !== 'Technician' ? <MenuItem value="Cancel">Cancel</MenuItem> : null}`
);
// Change "Complete" label to "Close" - keep same value, just remove the ternary label
admin = admin.replace(
  `<MenuItem value="Close">{user.data.role === 'Technician' ? 'Complete' : 'Close'}</MenuItem>`,
  `<MenuItem value="Close">Close</MenuItem>`
);

fs.writeFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderAdmin.js', admin);

let va = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderAdmin.js', 'utf8');
const aChecks = [
  ['Reschedule uses ternary', va.includes("? <MenuItem value=\"Reschedule\">Reschedule</MenuItem> : null")],
  ['Cancel uses ternary', va.includes("? <MenuItem value=\"Cancel\">Cancel</MenuItem> : null")],
  ['Close label is plain', va.includes('<MenuItem value="Close">Close</MenuItem>')],
  ['Edit Status tooltip', va.includes('Edit Status')],
  ['Technician row filter', va.includes('r.technicianAssign === user.data.userName')],
  ['Delete hidden for Technician', va.includes("role === 'Technician' ? <span></span>")],
];
aChecks.forEach(([n, p]) => console.log('[Admin ] ' + (p ? 'OK  ' : 'FAIL') + ': ' + n));

// ─── FIX C: MaintenanceOrderViewInformation.js ──────────────────────────────
// Hide: Labor Fees row + Row2 (Employee row) from Items Used table
// ─────────────────────────────────────────────────────────────────────────────
let view = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderViewInformation.js', 'utf8');

// Hide the Labor Fees row entirely (4-col table in Maintenance Order view)
view = view.replace(
  `<tr>\r\n                                                <td style={{ border: '1px solid black' }} colSpan={3}>Labor Fees</td>\r\n                                                <td style={{ border: '1px solid black' }}>{row.laborQty !== undefined ? row.laborQty : 0}</td>\r\n                                              </tr>`,
  `<tr style={{ display: 'none' }}>\r\n                                                <td style={{ border: '1px solid black' }} colSpan={3}>Labor Fees</td>\r\n                                                <td style={{ border: '1px solid black' }}>{row.laborQty !== undefined ? row.laborQty : 0}</td>\r\n                                              </tr>`
);

// Hide Row2 (CEO employee row) - replace the conditional entirely so it never renders
view = view.replace(
  `{\r\n                                                user.data.role === 'CEO' ?\r\n                                                  <Row2 totalAmountPlaning={totalAmountPlaning} totalAmount2={totalAmount2} /> :\r\n                                                  <tr></tr>\r\n                                              }`,
  `<tr style={{ display: 'none' }}></tr>`
);

fs.writeFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderViewInformation.js', view);

let vv = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderViewInformation.js', 'utf8');
const vChecks = [
  ['Labor Fees row hidden', vv.includes("<tr style={{ display: 'none' }}>\r\n                                                <td style={{ border: '1px solid black' }} colSpan={3}>Labor Fees</td>")],
  ['Row2 removed', !vv.includes('<Row2 totalAmountPlaning={totalAmountPlaning}')],
  ['Options Edit route intact', vv.includes('/MaintenanceOrderUpdate/${row._id}')],
];
vChecks.forEach(([n, p]) => console.log('[View  ] ' + (p ? 'OK  ' : 'FAIL') + ': ' + n));

console.log('\nAll done.');
