const mongoose = require('mongoose');

async function forceDelete() {
  await mongoose.connect('mongodb://127.0.0.1:27017/globalgatedb');
  
  // THE ID FROM YOUR SCREENSHOT
  const id = '69c43216cd4ea255bcba56b66'; 
  const objectId = new mongoose.Types.ObjectId(id);

  console.log('--- Attempting RAW DELETE ---');
  
  // Use the raw collection to avoid ANY Mongoose logic
  const result = await mongoose.connection.db.collection('invoice').deleteOne({ _id: objectId });
  
  console.log('Raw MongoDB Result:', result);
  
  if (result.deletedCount === 1) {
    console.log('✅ SUCCESS! MongoDB says it deleted the record.');
  } else {
    console.log('❌ FAILED! MongoDB could not find a record with that ID.');
  }
  
  process.exit();
}
forceDelete().catch(console.error);
