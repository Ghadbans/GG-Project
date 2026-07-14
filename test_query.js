const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admin@cluster0.oay6q.mongodb.net/globalgatedb?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(async () => {
  const purchaseOrderSchema = require('./model/purchaseOrderSchema');
  const search = '2026';
  const regex = new RegExp(search, 'i');
  
  const query = {
    $or: [
      { $expr: { $regexMatch: { input: { $dateToString: { format: "%d/%m/%Y", date: { $ifNull: ["$itemOutDate", new Date()] } } }, regex: search, options: "i" } } },
      { $expr: { $regexMatch: { input: { $dateToString: { format: "%Y-%m-%d", date: { $ifNull: ["$itemOutDate", new Date()] } } }, regex: search, options: "i" } } }
    ]
  };

  try {
    const itemI = await purchaseOrderSchema.find(query).limit(5);
    console.log('Found:', itemI.length);
    console.log(itemI.map(i => i.itemOutDate));
  } catch (err) {
    console.error('Error:', err.message);
  }
  process.exit(0);
}).catch(console.error);
