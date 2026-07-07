const mongoose = require('mongoose');

async function migrateData() {
  const url = 'mongodb://127.0.0.1:27017/globalgatedb';
  await mongoose.connect(url);
  console.log('Connected to MongoDB');

  const db = mongoose.connection.db;
  const collectionsList = await db.listCollections().toArray();
  const collectionNames = collectionsList.map(c => c.name);
  console.log(`Found ${collectionNames.length} collections. Running migration...`);

  const filter = {
    $or: [
      { branchId: { $exists: false } },
      { branchId: null },
      { branchId: '' }
    ]
  };

  const update = {
    $set: { branchId: 'HQ' }
  };

  let totalUpdated = 0;
  for (const collName of collectionNames) {
    try {
      const collection = db.collection(collName);
      const result = await collection.updateMany(filter, update);
      if (result.modifiedCount > 0) {
        console.log(`Collection '${collName}': Modified ${result.modifiedCount} documents.`);
        totalUpdated += result.modifiedCount;
      }
    } catch (err) {
      console.log(`Collection '${collName}': Error skipping...`);
    }
  }

  console.log(`Migration completed successfully. Total documents updated: ${totalUpdated}`);
  process.exit(0);
}

migrateData().catch(err => {
  console.error('Migration failed:', err);
  process.exit(1);
});
