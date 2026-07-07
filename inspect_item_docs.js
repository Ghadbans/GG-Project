const { MongoClient } = require('mongodb');
(async () => {
  const uri = 'mongodb://127.0.0.1:27017/globalgatedb';
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    const db = client.db();
    const names = ['pos', 'itemOut', 'itemReturn', 'itemPurchase'];
    for (const name of names) {
      const doc = await db.collection(name).findOne({});
      console.log('---', name, '---');
      if (!doc) {
        console.log('NO_DOC');
        continue;
      }
      if (name === 'itemPurchase' || name === 'pos') {
        console.log(JSON.stringify((doc.items || []).slice(0, 1), null, 2));
      } else {
        console.log(JSON.stringify((doc.itemsQtyArray || []).slice(0, 1), null, 2));
      }
    }
  } catch (error) {
    console.error(error);
    process.exitCode = 1;
  } finally {
    await client.close();
  }
})();
