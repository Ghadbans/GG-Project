const mongoose = require("mongoose");
const paymentSchema = require("./server/model/paymentSchema");

mongoose.connect("mongodb://127.0.0.1:27017/globalgatedb")
  .then(async () => {
    const p = await paymentSchema.findOne().lean();
    console.log("Found payment:", p ? JSON.stringify(p.customerName, null, 2) : "None");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
