const mongoose = require('mongoose');

// Schemas to load to access collections
const invoiceSchema = require('./model/invoiceSchema');
const paymentSchema = require('./model/paymentSchema');
const purchaseSchema = require('./model/purchaseSchema');
const estimationSchema = require('./model/estimationSchema');
const itemPurchaseSchema = require('./model/itemPurchaseSchema');
const posSchema = require('./model/posSchema');
const projectSchema = require('./model/projectSchema');
const itemOutSchema = require('./model/itemOutSchema');
const itemReturnSchema = require('./model/itemReturnSchema');

mongoose.connect("mongodb://127.0.0.1:27017/globalgatedb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(async () => {
  console.log("Connected to DB.");

  const collectionsToClean = [
    { model: invoiceSchema, index: 'invoiceNumber_1' },
    { model: paymentSchema, index: 'paymentNumber_1' },
    { model: purchaseSchema, index: 'purchaseNumber_1' },
    { model: purchaseSchema, index: 'purchaseName_1' },
    { model: estimationSchema, index: 'estimateNumber_1' },
    { model: itemPurchaseSchema, index: 'itemPurchaseNumber_1' },
    { model: posSchema, index: 'factureNumber_1' },
    { model: projectSchema, index: 'projectNumber_1' },
    { model: projectSchema, index: 'projectName_1' },
    { model: itemOutSchema, index: 'outNumber_1' },
    { model: itemReturnSchema, index: 'outNumber_1' }
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
  await invoiceSchema.init();
  await paymentSchema.init();
  await purchaseSchema.init();
  await estimationSchema.init();
  await itemPurchaseSchema.init();
  await posSchema.init();
  await projectSchema.init();

  console.log("Compound indexes rebuilt.");

  // Fix LUB invoices 2351 and 2352
  const inv1 = await invoiceSchema.findOneAndUpdate({ branchId: 'LUB', invoiceNumber: 2351 }, { $set: { invoiceNumber: 1 } });
  if (inv1) console.log("Updated LUB invoice 2351 to 1");
  const inv2 = await invoiceSchema.findOneAndUpdate({ branchId: 'LUB', invoiceNumber: 2352 }, { $set: { invoiceNumber: 2 } });
  if (inv2) console.log("Updated LUB invoice 2352 to 2");

  mongoose.disconnect();
  console.log("Database fix complete.");
});
