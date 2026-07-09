const fs = require('fs');
const path = require('path');

const modelsDir = path.join(__dirname, 'server', 'model');

const indexesToAdd = {
  'payRollSchema.js': 'payRollSchema.index({ payNumber: -1 });',
  'invoiceSchema.js': 'invoiceSchema.index({ invoiceNumber: -1 });',
  'paymentSchema.js': 'paymentSchema.index({ paymentNumber: -1 });',
  'purchaseSchema.js': 'purchaseSchema.index({ purchaseNumber: -1 });',
  'estimationSchema.js': 'estimationSchema.index({ estimateNumber: -1 });',
  'posSchema.js': 'posSchema.index({ factureNumber: -1 });',
  'projectSchema.js': 'projectSchema.index({ projectNumber: -1 });',
  'ExpenseSchema.js': 'expenseSchema.index({ expenseNumber: -1 });',
  'maintenanceSchema.js': 'maintenanceSchema.index({ serviceNumber: -1 });',
  'itemOutSchema.js': 'itemOutSchema.index({ outNumber: -1 });',
  'purchaseOrderSchema.js': 'purchaseOrderSchema.index({ outNumber: -1 });',
  'itemReturnSchema.js': 'itemReturnSchema.index({ outNumber: -1 });',
  'itemPurchaseSchema.js': 'itemPurchaseSchema.index({ itemPurchaseNumber: -1 });'
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
