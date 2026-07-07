const mongoose = require('mongoose');
async function cleanLUBData() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect('mongodb://127.0.0.1:27017/globalgatedb');
    console.log('Connected to MongoDB successfully.\n');
    const db = mongoose.connection.db;
    
    // Get all collections in the database
    const collections = await db.listCollections().toArray();
    let totalDeleted = 0;
    console.log('Scanning all collections for orphaned LUB branch data...\n');
    for (let collectionInfo of collections) {
      const collectionName = collectionInfo.name;
      const collection = db.collection(collectionName);
      
      // Delete all documents where branchId is exactly 'LUB'
      const result = await collection.deleteMany({ branchId: 'LUB' });
      
      if (result.deletedCount > 0) {
        console.log(`[DELETED] Removed ${result.deletedCount} documents from collection: ${collectionName}`);
        totalDeleted += result.deletedCount;
      }
    }
    console.log(`\n======================================================`);
    console.log(`✅ SUCCESS: Completely wiped all ${totalDeleted} records associated with the LUB branch from the database!`);
    console.log(`======================================================\n`);
    
  } catch (err) {
    console.error('Error during cleanup:', err);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB. You can safely close this terminal.');
  }
}
cleanLUBData();
