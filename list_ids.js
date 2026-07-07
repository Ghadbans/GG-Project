const mongoose = require('mongoose');

async function list() {
  await mongoose.connect('mongodb://127.0.0.1:27017/globalgatedb');
  console.log('--- Listing last 5 Invoices ---');
  
  const docs = await mongoose.connection.db.collection('invoice').find({}).sort({_id: -1}).limit(5).toArray();
  
  docs.forEach(d => {
    console.log(`ID: "${d._id}" (Length: ${String(d._id).length}) | Subject: ${d.Subject}`);
  });
  
  process.exit();
}
list().catch(console.error);
