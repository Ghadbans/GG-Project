const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/globalgatedb').then(async () => {
    try {
        const Item = require('./model/itemSchema');
        const result = await Item.collection.updateMany(
            { stockOnHand: { $exists: true, $ne: 0, $ne: null } },
            [
                { 
                    $set: { 
                        itemQuantity: { 
                            $add: [
                                { $ifNull: ["$itemQuantity", 0] }, 
                                { $ifNull: ["$stockOnHand", 0] }
                            ] 
                        },
                        stockOnHand: 0 
                    } 
                }
            ]
        );
        console.log(`Matched: ${result.matchedCount}, Modified: ${result.modifiedCount}`);
    } catch (e) {
        console.error(e);
    } finally {
        mongoose.disconnect();
    }
});
