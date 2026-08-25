const mongoose = require("mongoose");
const paymentSchema = require("./server/model/paymentSchema");

mongoose.connect("mongodb://127.0.0.1:27017/global_gate", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    const p = await paymentSchema.findOne();
    console.log(JSON.stringify(p, null, 2));
    process.exit(0);
  })
  .catch(err => console.error(err));
