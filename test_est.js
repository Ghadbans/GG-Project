const mongoose = require('mongoose');
mongoose.connect('mongodb://mongo:oJbIPJtQhGTVrIeJvjVzCccrRjXpDngD@autorack.proxy.rlwy.net:18239/globalgatedb?authSource=admin');
const Schema = mongoose.Schema;
const Estimation = mongoose.model('estimation', new Schema({}, {strict: false}));

Estimation.findOne({ estimateNumber: 1677 }).then(doc => {
    console.log(JSON.stringify(doc, null, 2));
    process.exit(0);
});
