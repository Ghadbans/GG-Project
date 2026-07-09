const fs = require('fs');
const path = require('path');
const p = path.join(__dirname, 'server', 'routes', 'Routes.js');
let c = fs.readFileSync(p, 'utf8');

const replacements = {
  'invoiceSchema': 'invoiceDate',
  'estimationSchema': 'estimateDate',
  'purchaseSchema': 'purchaseDate',
  'posSchema': 'invoiceDate',
  'expenseSchema': 'expenseDate',
  'itemPurchaseSchema': 'itemPurchaseDate',
  'maintenanceSchema': 'serviceDate',
  'paymentSchema': 'paymentDate',
  'cashSchema': 'cashDate',
  'itemOutSchema': 'itemOutDate',
  'purchaseOrderSchema': 'purchaseOrderDate',
  'itemReturnSchema': 'itemReturnDate',
  'payRollSchema': 'payDate'
};

let count = 0;
for (const [schema, dateField] of Object.entries(replacements)) {
  // We match exactly: schema.find(...).sort({ _id: -1 }) or createdAt: -1
  // To be perfectly safe, we match specifically the lines that contain these.
  const regexFind = new RegExp(`(${schema}\\.find\\(.*?\\)\\.sort\\(\\{\\s*)(?:createdAt|_id)(\\s*:\\s*-1\\s*\\})`, 'g');
  const regexFindOne = new RegExp(`(${schema}\\.findOne\\(.*?\\)\\.sort\\(\\{\\s*)(?:createdAt|_id)(\\s*:\\s*-1\\s*\\})`, 'g');
  
  c = c.replace(regexFind, (match, p1, p2) => {
    count++;
    return `${p1}${dateField}${p2}`;
  });
  c = c.replace(regexFindOne, (match, p1, p2) => {
    count++;
    return `${p1}${dateField}${p2}`;
  });
}

fs.writeFileSync(p, c, 'utf8');
console.log(`Replaced ${count} occurrences.`);
