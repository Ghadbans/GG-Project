const mongoose = require('mongoose');
const invoiceSchema = require('./model/invoiceSchema');

mongoose.connect("mongodb://127.0.0.1:27017/globalgatedb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(async () => {
  console.log("Connected to DB.");

  try {
    // Fetch all invoices to manually check, just to be extremely safe
    const invoices = await invoiceSchema.find({});
    
    let updatedCount = 0;
    for (const inv of invoices) {
      if (!inv.customerName || !inv.customerName.customerName) {
        // Fallback for corrupted data
        await invoiceSchema.updateOne(
          { _id: inv._id },
          { $set: { 
              customerName: { 
                customerName: "Unknown Customer (Recovered)", 
                billingAddress: "N/A", 
                billingCity: "N/A" 
              } 
            } 
          }
        );
        updatedCount++;
      }
    }

    console.log(`Successfully updated ${updatedCount} corrupted invoices.`);
  } catch (err) {
    console.error("Error during cleanup:", err);
  } finally {
    mongoose.disconnect();
  }
});
