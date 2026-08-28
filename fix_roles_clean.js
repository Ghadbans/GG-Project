const fs = require('fs');

let code = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate.js', 'utf8');

// ---- 1. Table headers: add role-based visibility ----
code = code.replace(
  '                          <thead>\r\n                            <tr>\r\n                              <th>#</th>\r\n                              <th>Item</th>\r\n                              \r\n                              <th>Quantity</th>\r\n                              \r\n                              \r\n                              \r\n                              <th>Action</th>\r\n                            </tr>\r\n                          </thead>',
  `                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Item</th>
                              <th style={{ display: user.data.role === 'Technician' ? 'none' : '' }}>Stock-A</th>
                              <th>Quantity</th>
                              <th style={{ display: user.data.role === 'Technician' ? 'none' : '' }}>Rate</th>
                              <th style={{ display: user.data.role === 'Technician' ? 'none' : '' }}>Discount</th>
                              <th>Action</th>
                            </tr>
                          </thead>`
);

// ---- 2. Stock-A td: show for non-Technician ----
code = code.replace(
  '<td style={{ display: "none" }}>\n<TextField name="stock" id=\'stock\'',
  '<td style={{ display: user.data.role === \'Technician\' ? \'none\' : \'\' }}>\n<TextField name="stock" id=\'stock\''
);

// ---- 3. itemRate td ----
code = code.replace(
  '<td style={{ display: "none" }}>\n<TextField name="itemRate" id=\'itemRate\'',
  '<td style={{ display: user.data.role === \'Technician\' ? \'none\' : \'\' }}>\n<TextField name="itemRate" id=\'itemRate\''
);

// ---- 4. itemDiscount td ----
code = code.replace(
  '<td style={{ display: "none" }}>\n<TextField name="itemDiscount" id=\'itemDiscount\'',
  '<td style={{ display: user.data.role === \'Technician\' ? \'none\' : \'\' }}>\n<TextField name="itemDiscount" id=\'itemDiscount\''
);

// ---- 5. adjustmentNumber (labor fees price) td ----
code = code.replace(
  '<td style={{ display: "none" }}>\n<TextField id="adjustmentNumber"',
  '<td style={{ display: user.data.role === \'Technician\' ? \'none\' : \'\' }}>\n<TextField id="adjustmentNumber"'
);

// ---- 6. laborDiscount td ----
code = code.replace(
  '<td style={{ display: "none" }}>\n<TextField name="laborDiscount" id=\'laborDiscount\'',
  '<td style={{ display: user.data.role === \'Technician\' ? \'none\' : \'\' }}>\n<TextField name="laborDiscount" id=\'laborDiscount\''
);

// ---- 7. empty td after laborDiscount ----
code = code.replace(
  '<td style={{ display: "none" }}></td>',
  '<td style={{ display: user.data.role === \'Technician\' ? \'none\' : \'\' }}></td>'
);

// ---- 8. Total Generale row cells ----
code = code.replace(
  '<td colSpan={3} style={{ display: "none" }}>Total Generale</td>',
  '<td colSpan={3} style={{ display: user.data.role === \'Technician\' ? \'none\' : \'\' }}>Total Generale</td>'
);
code = code.replace(
  '<td style={{ display: "none" }}><span>$</span><span>{totalInvoice',
  '<td style={{ display: user.data.role === \'Technician\' ? \'none\' : \'\' }}><span>$</span><span>{totalInvoice'
);

// ---- 9. "ADD NEW Item" button: remove User role restriction ----
code = code.replace(
  'disabled={user.data.role === \'User\'} onMouseDown={(e) => e.preventDefault()}',
  'onMouseDown={(e) => e.preventDefault()}'
);

fs.writeFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate.js', code);

// === Verify ===
let v = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate.js', 'utf8');
const checks = [
  { name: 'Stock-A header present', pass: v.includes('Stock-A') },
  { name: 'Stock-A uses Technician condition', pass: v.includes("role === 'Technician' ? 'none'") },
  { name: 'No hardcoded display none for stock', pass: !v.includes('<td style={{ display: "none" }}>\n<TextField name="stock"') },
  { name: '+ buttons still present (addItem)', pass: v.includes('onClick={addItem}') },
  { name: 'ADD NEW Item no User restriction', pass: !v.includes("disabled={user.data.role === 'User'}") },
  { name: 'Table structure intact (thead)', pass: v.includes('<thead>') },
  { name: 'DragDropContext intact', pass: v.includes('<DragDropContext') },
];
checks.forEach(c => console.log((c.pass ? 'OK  ' : 'FAIL') + ': ' + c.name));
