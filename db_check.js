const mongoose = require('mongoose');
async function check() {
  // Use the local connection string
  await mongoose.connect('mongodb://127.0.0.1:27017/globalgatedb');
  const stats = await mongoose.connection.db.stats();
  console.log('--- Database Results ---');
  console.log('Size Used:', (stats.storageSize / 1024 / 1024).toFixed(2), 'MB');
  console.log('Collections:', stats.collections);
  process.exit();
}
check().catch(console.error);
