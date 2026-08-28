const fs = require('fs');

// ===== FIX 1: MaintenanceOrderViewInformation.js =====
let viewCode = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderViewInformation.js', 'utf8');

// Fix Labor Fees row - remove the 3 extra columns (price, discount, total)
viewCode = viewCode.replace(
  `<tr>\r\n                                                <td style={{ border: '1px solid black' }} colSpan={3}>Labor Fees</td>\r\n                                                <td style={{ border: '1px solid black' }} >{row.laborQty !== undefined ? row.laborQty : 0}</td>\r\n                                                <td style={{ border: '1px solid black' }} ><span data-prefix>$ </span>{row.adjustmentNumber}</td>\r\n                                                <td style={{ border: '1px solid black' }} ><span data-prefix>% </span>{row.laborDiscount !== undefined ? row.laborDiscount : 0}</td>\r\n                                                <td style={{ border: '1px solid black' }} ><span data-prefix>$ </span>{row.totalLaborFeesGenerale !== undefined ? row.totalLaborFeesGenerale : 0}</td>\r\n                                              </tr>`,
  `<tr>\r\n                                                <td style={{ border: '1px solid black' }} colSpan={3}>Labor Fees</td>\r\n                                                <td style={{ border: '1px solid black' }}>{row.laborQty !== undefined ? row.laborQty : 0}</td>\r\n                                              </tr>`
);

// Fix the Options > Edit button to go to MaintenanceOrderUpdate instead of MaintenanceUpdateView
viewCode = viewCode.replace(
  /to={`\/MaintenanceUpdateView\/\${row\._id}`}/g,
  'to={`/MaintenanceOrderUpdate/${row._id}`}'
);

fs.writeFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderViewInformation.js', viewCode);

// Verify
let verifyCode = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderViewInformation.js', 'utf8');
if (verifyCode.includes('MaintenanceUpdateView')) {
  console.log('WARNING: MaintenanceUpdateView still present');
} else {
  console.log('OK: Options Edit now goes to MaintenanceOrderUpdate');
}
if (!verifyCode.includes('data-prefix>$') && !verifyCode.includes('data-prefix>%')) {
  console.log('OK: Labor Fees extra columns removed');
} else {
  console.log('WARNING: Labor Fees extra columns may still be present - checking...');
  const lines = verifyCode.split('\n');
  lines.forEach((l, i) => {
    if (l.includes('data-prefix')) console.log(i + ': ' + l);
  });
}

// ===== FIX 2: MaintenanceOrderUpdate.js - Restore + buttons with role-based control =====
let updateCode = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate.js', 'utf8');

// Add floating + buttons back, role-restricted: hidden for pure 'User' role
const floatingButtons = `<div style={{ display: 'block', position: 'fixed', zIndex: 1, float: 'right', right: '-5px', top: '400px' }}>
                  <section>
                    <BlackTooltip title="Add Item" placement="top">
                      <IconButton hidden={user.data.role === 'User'} onClick={addItem}>
                        <Add className='btn1' style={{ fontSize: '40px' }} />
                      </IconButton>
                    </BlackTooltip>
                  </section>
                  <section>
                    <BlackTooltip title="Add Blank Row" placement="bottom">
                      <IconButton hidden={user.data.role === 'User'} onClick={addItemWhite}>
                        <Add className='btn1' style={{ backgroundColor: 'gray', fontSize: '40px' }} />
                      </IconButton>
                    </BlackTooltip>
                  </section>
                </div>`;

// Insert floating buttons just before the opening <form onSubmit={handleOpenUpdate}>
updateCode = updateCode.replace(
  `<form onSubmit={handleOpenUpdate}>`,
  floatingButtons + `\n                <form onSubmit={handleOpenUpdate}>`
);

// Restore the per-row add buttons (hidden for User/Technician role)
const rowAddButtons = `<span style={{ display: 'flex' }}>
                                                    <BlackTooltip title="New-Row" placement="bottom">
                                                      <IconButton hidden={user.data.role === 'User'} onClick={() => addItemRow(i)}>
                                                        <Add style={{ color: '#202a5a' }} />
                                                      </IconButton>
                                                    </BlackTooltip>
                                                    <BlackTooltip title="Blank-Row" placement="bottom">
                                                      <IconButton hidden={user.data.role === 'User'} onClick={() => addItemWhiteRow(i)}>
                                                        <Add style={{ color: 'gray' }} />
                                                      </IconButton>
                                                    </BlackTooltip>
                                                  </span>`;

// Find the delete button span and append the row buttons after it
updateCode = updateCode.replace(
  `<span style={{ display: 'flex' }}>
                                                    <LightTooltip title="Delete" placement='top'>
                                                      <IconButton onClick={() => deleteItem(Item.idRow)} >
                                                        <DeleteIcon style={{ cursor: 'pointer', color: 'red' }} />
                                                      </IconButton>
                                                    </LightTooltip>
                                                    {
                                                      related && (`,
  `<span style={{ display: 'flex' }}>
                                                    <LightTooltip title="Delete" placement='top'>
                                                      <IconButton onClick={() => deleteItem(Item.idRow)} >
                                                        <DeleteIcon style={{ cursor: 'pointer', color: 'red' }} />
                                                      </IconButton>
                                                    </LightTooltip>
                                                    <BlackTooltip title="New-Row" placement="bottom">
                                                      <IconButton hidden={user.data.role === 'User'} onClick={() => addItemRow(i)}>
                                                        <Add style={{ color: '#202a5a' }} />
                                                      </IconButton>
                                                    </BlackTooltip>
                                                    <BlackTooltip title="Blank-Row" placement="bottom">
                                                      <IconButton hidden={user.data.role === 'User'} onClick={() => addItemWhiteRow(i)}>
                                                        <Add style={{ color: 'gray' }} />
                                                      </IconButton>
                                                    </BlackTooltip>
                                                    {
                                                      related && (`
);

fs.writeFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate.js', updateCode);

// Verify + buttons back
let updateVerify = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate.js', 'utf8');
if (updateVerify.includes('onClick={addItem}')) {
  console.log('OK: Floating + buttons restored');
} else {
  console.log('WARNING: Floating + buttons NOT restored');
}
if (updateVerify.includes('addItemRow')) {
  console.log('OK: Row add buttons JSX present');
}
