const mongoose = require('mongoose');

async function run() {
  await mongoose.connect('mongodb+srv://admin:123@cluster0.zoxshh9.mongodb.net/globalgatedb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('Connected to DB');

  const collections = ['purchase', 'purchases', 'itemPurchase', 'itempurchases'];
  
  for (const collName of collections) {
    try {
      const coll = mongoose.connection.db.collection(collName);
      const indexes = await coll.indexes();
      console.log('Indexes for', collName, ':');
      for (const idx of indexes) {
        console.log(' -', idx.name, 'unique:', !!idx.unique);
        if (idx.unique && idx.name !== '_id_') {
          if (idx.name === 'purchaseNumber_1' || idx.name === 'itemPurchaseNumber_1' || !idx.name.includes('purchaseNumber')) {
            console.log('   Dropping', idx.name, '...');
            await coll.dropIndex(idx.name);
            console.log('   Dropped successfully.');
          }
        }
      }
    } catch (err) {
      console.log('Error processing', collName, err.message);
    }
  }

  mongoose.disconnect();
}
run();
