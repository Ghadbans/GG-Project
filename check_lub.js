const mongoose = require('mongoose');
const invoiceSchema = require('./model/invoiceSchema');

mongoose.connect("mongodb://127.0.0.1:27017/globalgatedb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(async () => {
  console.log("Connected to DB.");

  try {
    const highestLUB = await invoiceSchema.find({ branchId: 'LUB', invoiceNumber: { $lt: 2351 } }).sort({ invoiceNumber: -1 }).limit(1);
    console.log("Highest LUB invoice number before 2351:", highestLUB.length ? highestLUB[0].invoiceNumber : 'None');

    if (highestLUB.length) {
      const nextSeq1 = highestLUB[0].invoiceNumber + 1;
      const nextSeq2 = highestLUB[0].invoiceNumber + 2;
      console.log("Setting 2351 to", nextSeq1, "and 2352 to", nextSeq2);

      await invoiceSchema.updateOne({ branchId: 'LUB', invoiceNumber: 2351 }, { $set: { invoiceNumber: nextSeq1 } });
      await invoiceSchema.updateOne({ branchId: 'LUB', invoiceNumber: 2352 }, { $set: { invoiceNumber: nextSeq2 } });
      console.log("Successfully fixed LUB invoices.");
    }
  } catch (err) {
    console.error(err);
  } finally {
    mongoose.disconnect();
  }
});
