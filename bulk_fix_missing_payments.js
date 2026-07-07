const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

async function main() {
  const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/globalgatedb';
  await mongoose.connect(mongoUri);

  const itemPurchaseSchema = require('./model/itemPurchaseSchema'); 

  // Find ALL purchases across all years where the text status says "Paid"
  const purchases = await itemPurchaseSchema.find({ 
    status: { $regex: /^paid$/i } 
  });
  
  let updatedCount = 0;

  for (const doc of purchases) {
    // 1. Try to get the total from the top level
    let totalWithTax = parseFloat(doc.totalUSD || doc.total || 0);
    
    // 2. If it's missing at the top level, calculate it from the individual items
    if (totalWithTax === 0 && Array.isArray(doc.items)) {
      totalWithTax = doc.items.reduce((sum, item) => {
        let itemTotal = parseFloat(item.totalAmountUSD || item.totalAmount || 0);
        if (itemTotal === 0 && item.itemRate && item.itemQty) {
          itemTotal = parseFloat(item.itemRate) * parseFloat(item.itemQty);
        }
        return sum + itemTotal;
      }, 0);
    }
    
    const currentPaidUSD = (doc.payments || []).reduce((sum, p) => {
      const rate = parseFloat(p.rate) || 2800; 
      const pUSD = parseFloat(p.amount) || 0;
      const pFC = parseFloat(p.amountFC) || 0;
      return sum + (p.totalUSD || (pUSD + (pFC / rate)));
    }, 0);

    const remaining = totalWithTax - currentPaidUSD;

    // If there is ANY missing balance on an item marked as "Paid", fix it!
    if (remaining > 0.01) {
      const newPayment = {
        id: uuidv4(),
        amount: remaining,
        amountFC: 0,
        rate: 2800, 
        date: doc.itemPurchaseDate, 
        mode: 'Cash',
        reference: `Auto-Paid for IP-${doc.itemPurchaseNumber}`,
        note: 'Bulk fix for glitchy Paid items',
        totalUSD: remaining
      };

      doc.payments = doc.payments || [];
      doc.payments.push(newPayment);
      doc.status = 'Paid'; 

      await doc.save();
      updatedCount++;
    }
  }

  console.log(`Successfully fixed and updated ${updatedCount} glitchy Item Purchases!`);
  process.exit(0);
}

main().catch(console.error);