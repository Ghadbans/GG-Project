const fs = require('fs');

let code = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate.js', 'utf8');

// ---- FIX 1: + Floating buttons - remove 'User' role restriction, show for everyone ----
code = code.replace(
  `<IconButton hidden={user.data.role === 'User'} onClick={addItem}>`,
  `<IconButton onClick={addItem}>`
);
code = code.replace(
  `<IconButton hidden={user.data.role === 'User'} onClick={addItemWhite}>`,
  `<IconButton onClick={addItemWhite}>`
);

// ---- FIX 2: Row + buttons - remove 'User' role restriction ----
code = code.replace(
  `<IconButton hidden={user.data.role === 'User'} onClick={() => addItemRow(i)}>`,
  `<IconButton onClick={() => addItemRow(i)}>`
);
code = code.replace(
  `<IconButton hidden={user.data.role === 'User'} onClick={() => addItemWhiteRow(i)}>`,
  `<IconButton onClick={() => addItemWhiteRow(i)}>`
);

// ---- FIX 3: "ADD NEW Item" button - remove 'User' role restriction ----
code = code.replace(
  `<button onClick={(e) => handleOpenOpenAutocomplete2(e)} disabled={user.data.role === 'User'} onMouseDown={(e) => e.preventDefault()} className='btnCustomer7' style={{ width: '100%' }}>`,
  `<button onClick={(e) => handleOpenOpenAutocomplete2(e)} onMouseDown={(e) => e.preventDefault()} className='btnCustomer7' style={{ width: '100%' }}>`
);

// ---- FIX 4: Stock column - show for non-Technician, hide for Technician ----
// Replace: <td style={{ display: "none" }}><TextField name="stock"...
// With: <td style={{ display: user.data.role === 'Technician' ? 'none' : '' }}>...
code = code.replace(
  `<td style={{ display: "none" }}>\n<TextField name="stock" id='stock'`,
  `<td style={{ display: user.data.role === 'Technician' ? 'none' : '' }}>\n<TextField name="stock" id='stock'`
);

// ---- FIX 5: itemRate column - show for CEO only is wrong, show for non-Technician ----
code = code.replace(
  `<td style={{ display: "none" }}>\n<TextField name="itemRate" id='itemRate'`,
  `<td style={{ display: user.data.role === 'Technician' ? 'none' : '' }}>\n<TextField name="itemRate" id='itemRate'`
);
// The "disabled={user.data.role !== 'CEO'}" on rate - only CEO can edit rate, others can view
// keep that as-is since it was deliberate

// ---- FIX 6: itemDiscount column ----
code = code.replace(
  `<td style={{ display: "none" }}>\n<TextField name="itemDiscount" id='itemDiscount'`,
  `<td style={{ display: user.data.role === 'Technician' ? 'none' : '' }}>\n<TextField name="itemDiscount" id='itemDiscount'`
);

// ---- FIX 7: adjustmentNumber (labor fees price) column ----
code = code.replace(
  `<td style={{ display: "none" }}>\n<TextField id="adjustmentNumber"`,
  `<td style={{ display: user.data.role === 'Technician' ? 'none' : '' }}>\n<TextField id="adjustmentNumber"`
);

// ---- FIX 8: laborDiscount column ----
code = code.replace(
  `<td style={{ display: "none" }}>\n<TextField name="laborDiscount" id='laborDiscount'`,
  `<td style={{ display: user.data.role === 'Technician' ? 'none' : '' }}>\n<TextField name="laborDiscount" id='laborDiscount'`
);

// ---- FIX 9: Labor fees empty column and Total Generale row ----
code = code.replace(
  `<td style={{ display: "none" }}></td>`,
  `<td style={{ display: user.data.role === 'Technician' ? 'none' : '' }}></td>`
);
code = code.replace(
  `<td colSpan={3} style={{ display: "none" }}>Total Generale</td>`,
  `<td colSpan={3} style={{ display: user.data.role === 'Technician' ? 'none' : '' }}>Total Generale</td>`
);
code = code.replace(
  `<td style={{ display: "none" }}><span>$</span><span>{totalInvoice`,
  `<td style={{ display: user.data.role === 'Technician' ? 'none' : '' }}><span>$</span><span>{totalInvoice`
);

// ---- FIX 10: Table headers - show Stock-A, Rate, Discount, Amount for non-Technician ----
// Current headers: #, Item, Quantity, Action
// Should be: #, Item, Stock-A, Quantity, Rate, Discount, Action for non-Technician
code = code.replace(
  `                              <th>#</th>\r\n                               <th>Item</th>\r\n                               \r\n                               <th>Quantity</th>\r\n                               \r\n                               \r\n                               \r\n                               <th>Action</th>`,
  `                              <th>#</th>
                               <th>Item</th>
                               <th style={{ display: user.data.role === 'Technician' ? 'none' : '' }}>Stock-A</th>
                               <th>Quantity</th>
                               <th style={{ display: user.data.role === 'Technician' ? 'none' : '' }}>Rate</th>
                               <th style={{ display: user.data.role === 'Technician' ? 'none' : '' }}>Discount</th>
                               <th>Action</th>`
);

fs.writeFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate.js', code);

// Verify
let verify = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate.js', 'utf8');

const checks = [
  { name: 'No hardcoded User role on + buttons', pass: !verify.includes(`hidden={user.data.role === 'User'}`) },
  { name: 'Stock column uses Technician condition', pass: verify.includes(`user.data.role === 'Technician' ? 'none'`) },
  { name: 'ADD NEW Item no User restriction', pass: !verify.includes(`disabled={user.data.role === 'User'}`) },
  { name: 'addItem click still present', pass: verify.includes(`onClick={addItem}`) },
  { name: 'Table headers with Stock-A', pass: verify.includes('Stock-A') },
];
checks.forEach(c => console.log((c.pass ? 'OK' : 'FAIL') + ': ' + c.name));
