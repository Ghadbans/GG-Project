const mongoose = require('mongoose');

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
  const patches = [
      'paymentSchema.js',
      'ExpenseSchema.js',
      'quotationSchema.js',
      'maintenanceSchema.js',
      'retainerInvoiceSchema.js'
  ];
  
  for (const patch of patches) {
    try {
      const model = require(`./model/${patch}`);
      await model.init();
    } catch(e) {
      console.log(`Init error on ${patch}:`, e.message);
    }
  }

  console.log("Compound indexes rebuilt.");
  mongoose.disconnect();
});
