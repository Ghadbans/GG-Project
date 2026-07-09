const mongoose = require("mongoose");
const mongoUri = "mongodb://127.0.0.1:27017/globalgatedb";

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(async () => {
  console.log("Connected to MongoDB for dropping indexes.");

  const collectionsToDrop = [
    { collection: 'projectschemas', index: 'branchId_1_projectName_1' },
    { collection: 'projectschemas', index: 'budget_1' },
    { collection: 'purchaseschemas', index: 'branchId_1_purchaseName_1' },
    { collection: 'itemoutschemas', index: 'branchId_1_outNumber_1' },
    { collection: 'itempurchaseschemas', index: 'branchId_1_itemPurchaseNumber_1' }
  ];

  for (const { collection, index } of collectionsToDrop) {
    try {
      await mongoose.connection.db.collection(collection).dropIndex(index);
      console.log(`Dropped index ${index} from ${collection}`);
    } catch (e) {
      console.log(`Could not drop ${index} from ${collection}: ${e.message}`);
    }
  }

  mongoose.connection.close();
}).catch(console.error);
