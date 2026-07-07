const mongoose = require('mongoose');
const invoiceSchema = require('./model/invoiceSchema');

mongoose.connect("mongodb://127.0.0.1:27017/globalgatedb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(async () => {
  console.log("Connected to DB.");

  try {
    // Fix LUB invoices 2351 and 2352
    const inv1 = await invoiceSchema.findOneAndUpdate({ branchId: 'LUB', invoiceNumber: 2351 }, { $set: { invoiceNumber: 1 } });
    if (inv1) console.log("Updated LUB invoice 2351 to 1");
    const inv2 = await invoiceSchema.findOneAndUpdate({ branchId: 'LUB', invoiceNumber: 2352 }, { $set: { invoiceNumber: 2 } });
    if (inv2) console.log("Updated LUB invoice 2352 to 2");

    console.log("LUB fix complete.");
  } catch (err) {
    console.error(err);
  } finally {
    mongoose.disconnect();
  }
});
