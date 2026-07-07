const mongoose = require('mongoose');

async function linkEstimations() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect('mongodb://127.0.0.1:27017/globalgatedb');
    console.log('Connected to MongoDB successfully.\n');
    
    const db = mongoose.connection.db;
    const collection = db.collection('estimation');
    
    const query = { 
        $or: [
          { branchId: { $exists: false } },
          { branchId: null },
          { branchId: "" }
        ]
    };
    
    const result = await collection.updateMany(query, { $set: { branchId: 'HQ' } });
    console.log(`Successfully updated ${result.modifiedCount} estimation records to branchId: 'HQ'.`);
    
  } catch (err) {
    console.error('Error:', err);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB.');
  }
}

linkEstimations();
