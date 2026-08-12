const { MongoClient } = require('mongodb');
async function test() {
  try {
    const client = await MongoClient.connect('mongodb://192.168.0.200:27017/globalgate', { useUnifiedTopology: true });
    const db = client.db('globalgate');
    const countHQ = await db.collection('invoices').countDocuments({ branchId: 'HQ' });
    const countMissing = await db.collection('invoices').countDocuments({ branchId: { $exists: false } });
    const countNull = await db.collection('invoices').countDocuments({ branchId: null });
    const countEmpty = await db.collection('invoices').countDocuments({ branchId: '' });
    console.log('HQ:', countHQ, 'Missing:', countMissing, 'Null:', countNull, 'Empty:', countEmpty);
    client.close();
  } catch(e) {
    console.error(e.message);
  }
}
test();
