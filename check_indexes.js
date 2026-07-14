const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admin@cluster0.oay6q.mongodb.net/globalgatedb?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(async () => {
  try {
    const indexes = await mongoose.connection.db.collection('purchase').indexes();
    console.log(indexes.map(i => i.name));
  } catch (err) {
    console.error('Error:', err.message);
  }
  process.exit(0);
}).catch(console.error);
