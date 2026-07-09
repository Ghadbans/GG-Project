const fs = require('fs');
const path = require('path');

const modelsDir = path.join(__dirname, 'server', 'model');

const indexesToAdd = {
  'invoiceSchema.js': 'invoiceSchema.index({ invoiceDate: -1 });',
  'estimationSchema.js': 'estimationSchema.index({ estimateDate: -1 });',
  'purchaseSchema.js': 'purchaseSchema.index({ purchaseDate: -1 });',
  'posSchema.js': 'posSchema.index({ invoiceDate: -1 });',
  'ExpenseSchema.js': 'expenseSchema.index({ expenseDate: -1 });',
  'itemPurchaseSchema.js': 'itemPurchaseSchema.index({ itemPurchaseDate: -1 });',
  'maintenanceSchema.js': 'maintenanceSchema.index({ serviceDate: -1 });',
  'paymentSchema.js': 'paymentSchema.index({ paymentDate: -1 });',
  'cashSchema.js': 'cashSchema.index({ cashDate: -1 });',
  'itemOutSchema.js': 'itemOutSchema.index({ itemOutDate: -1 });',
  'purchaseOrderSchema.js': 'purchaseOrderSchema.index({ purchaseOrderDate: -1 });',
  'itemReturnSchema.js': 'itemReturnSchema.index({ itemReturnDate: -1 });',
  'payRollSchema.js': 'payRollSchema.index({ payDate: -1 });'
};

Object.entries(indexesToAdd).forEach(([filename, indexStr]) => {
  try {
    const p = path.join(modelsDir, filename);
    if (!fs.existsSync(p)) {
      console.log(`Skipping ${filename}, file not found.`);
      return;
    }
    let c = fs.readFileSync(p, 'utf8');
    
    // Check if the index already exists
    if (c.includes(indexStr)) {
      console.log(`Index already exists in ${filename}`);
      return;
    }
    
    // Insert the index just before module.exports
    c = c.replace(/module\.exports\s*=\s*mongoose\.model/g, `${indexStr}\nmodule.exports = mongoose.model`);
    fs.writeFileSync(p, c, 'utf8');
    console.log(`Added index to ${filename}`);
  } catch (err) {
    console.error(`Error on ${filename}:`, err);
  }
});
