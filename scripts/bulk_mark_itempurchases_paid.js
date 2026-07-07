const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

async function bulkMarkItemPurchasesPaid() {
  // Require the model
  const itemPurchaseSchema = require('../model/itemPurchaseSchema');

  // Filter unpaid purchases for 2023 and 2024
  const start = new Date('2023-01-01T00:00:00.000Z');
  const end = new Date('2024-12-31T23:59:59.999Z');

  const purchases = await itemPurchaseSchema.find({
    status: { $ne: 'Paid' },
    itemPurchaseDate: { $gte: start, $lte: end }
  });

  let updatedCount = 0;

  for (const doc of purchases) {
    const totalWithTax = parseFloat(doc.totalUSD || doc.total || 0) || 0;

    const currentPaidUSD = (doc.payments || []).reduce((sum, p) => {
      const pTotal = parseFloat(p.totalUSD || 0) || 0;
      if (pTotal > 0) return sum + pTotal;
      const amount = parseFloat(p.amount || 0) || 0;
      const amountFC = parseFloat(p.amountFC || 0) || 0;
      const rate = parseFloat(p.rate || 1) || 1;
      return sum + amount + (amountFC / rate);
    }, 0);

    const remaining = Math.max(0, totalWithTax - currentPaidUSD);

    if (remaining > 0 || (totalWithTax === 0 && doc.status !== 'Paid')) {
      const newPayment = {
        id: uuidv4(),
        amount: remaining,
        amountFC: 0,
        rate: 1,
        date: doc.itemPurchaseDate || new Date(),
        mode: 'Cash',
        reference: `Auto-Paid for IP-${doc.itemPurchaseNumber || doc._id}`,
        note: 'Bulk update to fully paid',
        totalUSD: remaining
      };

      doc.payments = doc.payments || [];
      doc.payments.push(newPayment);
      doc.status = 'Paid';

      await doc.save();
      updatedCount++;
    }
  }

  console.log(`Successfully updated ${updatedCount} Item Purchases to PAID.`);
}

async function main() {
  try {
    const mongoUri = 'mongodb://127.0.0.1:27017/globalgatedb';
    await mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB. Running bulk update...');
    await bulkMarkItemPurchasesPaid();
    console.log('Done.');
    process.exit(0);
  } catch (err) {
    console.error('Error running script:', err);
    process.exit(1);
  }
}

main();
