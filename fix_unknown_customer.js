const mongoose = require('mongoose');
const invoiceSchema = require('./model/invoiceSchema');
const purchaseSchema = require('./model/purchaseSchema');

mongoose.connect("mongodb://127.0.0.1:27017/globalgatedb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(async () => {
  console.log("Connected to DB.");

  try {
    const invoices = await invoiceSchema.find({
      "customerName.customerName": { $regex: /Unknown Customer/i }
    });

    console.log(`Found ${invoices.length} invoices with Unknown Customer. Fixing...`);

    let updatedCount = 0;
    for (const inv of invoices) {
      if (inv.ReferenceName2) {
        const purchase = await purchaseSchema.findById(inv.ReferenceName2);
        if (purchase && purchase.customerName && purchase.customerName.customerName) {
          await invoiceSchema.updateOne(
            { _id: inv._id },
            { $set: { customerName: purchase.customerName } }
          );
          updatedCount++;
        } else {
           console.log(`No valid purchase found for invoice ${inv._id}`);
        }
      }
    }

    console.log(`Successfully updated ${updatedCount} invoices using Purchase data.`);
  } catch (err) {
    console.error("Error during cleanup:", err);
  } finally {
    mongoose.disconnect();
  }
});
