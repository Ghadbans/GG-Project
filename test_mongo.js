const mongoose = require('mongoose');
const expenseSchema = require('./server/model/ExpenseSchema');

mongoose.connect('mongodb://127.0.0.1:27017/GlobalGate', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    const escapedSearch = '1538'.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const query = {
      $or: [
        { description: new RegExp(escapedSearch, 'i') },
        { $expr: { $regexMatch: { input: { $toString: "$expenseNumber" }, regex: escapedSearch, options: 'i' } } }
      ]
    };
    
    const docs = await expenseSchema.find(query).limit(5);
    console.log("Found:", docs.length);
    if(docs.length > 0) {
       console.log(docs[0].expenseNumber);
    }
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
