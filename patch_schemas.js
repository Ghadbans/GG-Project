const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

const modelsDir = path.join(__dirname, 'model');

// 1. Patch Schemas
const patches = [
  {
    file: 'paymentSchema.js',
    fields: ['paymentNumber'],
    modelName: 'paymentSchema'
  },
  {
    file: 'ExpenseSchema.js',
    fields: ['expenseNumber'],
    modelName: 'ExpenseSchema'
  },
  {
    file: 'quotationSchema.js',
    fields: ['quotationNumber', 'quotationName'],
    modelName: 'quotationSchema'
  },
  {
    file: 'maintenanceSchema.js',
    fields: ['serviceName'],
    modelName: 'maintenanceSchema'
  },
  {
    file: 'retainerInvoiceSchema.js',
    fields: ['invoiceNumber'],
    modelName: 'retainerInvoiceSchema'
  }
];

for (const patch of patches) {
  const filePath = path.join(modelsDir, patch.file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Remove unique: true for the specific fields
  // This is a bit tricky, we'll just remove all `unique: true` from these specific files entirely,
  // since they only have legacy sequences.
  content = content.replace(/unique:\s*true\s*,?/g, '');

  // Add compound indexes at the bottom before module.exports
  let indexStrings = '';
  for (const field of patch.fields) {
    indexStrings += `\n${patch.modelName}.index({ branchId: 1, ${field}: 1 }, { unique: true });`;
  }

  if (!content.includes(`${patch.modelName}.index({ branchId: 1`)) {
    content = content.replace(`module.exports = mongoose.model`, `${indexStrings}\nmodule.exports = mongoose.model`);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Patched ${patch.file}`);
  }
}

// 2. Drop MongoDB Indexes
mongoose.connect("mongodb://127.0.0.1:27017/globalgatedb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(async () => {
  console.log("Connected to DB.");

  const collectionsToClean = [
    { model: require('./model/paymentSchema'), index: 'paymentNumber_1' },
    { model: require('./model/ExpenseSchema'), index: 'expenseNumber_1' },
    { model: require('./model/quotationSchema'), index: 'quotationNumber_1' },
    { model: require('./model/quotationSchema'), index: 'quotationName_1' },
    { model: require('./model/maintenanceSchema'), index: 'serviceName_1' },
    { model: require('./model/retainerInvoiceSchema'), index: 'invoiceNumber_1' }
  ];

  for (const item of collectionsToClean) {
    try {
      await item.model.collection.dropIndex(item.index);
      console.log(`Dropped index ${item.index} from ${item.model.collection.name}`);
    } catch (err) {
      if (err.code === 27) {
        console.log(`Index ${item.index} not found in ${item.model.collection.name}, skipping.`);
      } else {
        console.log(`Error dropping ${item.index}:`, err.message);
      }
    }
  }

  // Ensure Mongoose rebuilds the compound indexes defined in the schemas
  for (const patch of patches) {
    try {
      const model = require(`./model/${patch.file}`);
      await model.init();
    } catch(e) {
      console.log(`Init error on ${patch.file}:`, e.message);
    }
  }

  console.log("Compound indexes rebuilt.");
  mongoose.disconnect();
});
