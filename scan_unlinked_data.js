const mongoose = require('mongoose');
async function scanUnlinkedData() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect('mongodb://127.0.0.1:27017/globalgatedb');
    console.log('Connected to MongoDB successfully.\n');
    const db = mongoose.connection.db;
    const collections = await db.listCollections().toArray();
    let totalUnlinked = 0;
    console.log('Scanning all collections for data that is NOT linked to any branch...\n');
    for (let collectionInfo of collections) {
      const collectionName = collectionInfo.name;
      const collection = db.collection(collectionName);
      
      // Find documents where branchId does not exist, is null, or is an empty string
      const query = { 
        $or: [
          { branchId: { $exists: false } },
          { branchId: null },
          { branchId: "" }
        ]
      };
      const unlinkedCount = await collection.countDocuments(query);
      
      if (unlinkedCount > 0) {
        console.log(`[WARNING] Found ${unlinkedCount} unlinked records in collection: ${collectionName}`);
        totalUnlinked += unlinkedCount;
      }
    }
    console.log(`\n======================================================`);
    if (totalUnlinked === 0) {
      console.log(`✅ Great news! ALL data in your database is correctly linked to a branch.`);
    } else {
      console.log(`⚠️ ATTENTION: Found a total of ${totalUnlinked} unlinked records across the database!`);
      console.log(`(These records currently do not belong to HQ or any other branch)`);
    }
    console.log(`======================================================\n`);
    
  } catch (err) {
    console.error('Error during scan:', err);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB.');
  }
}
scanUnlinkedData();
