const mongoose = require('mongoose');

async function migrateHomeToReceivables(customDb) {
  const shouldDisconnect = !customDb;
  let db = customDb;
  
  if (!db) {
    const mongoUri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/globalgatedb";
    console.log("Connecting to MongoDB for migration:", mongoUri);
    await mongoose.connect(mongoUri);
    db = mongoose.connection.db;
  }

  console.log("Starting migration of 'Home' -> 'Receivables'...");

  // 1. Update expenseSchema collection (accountName and expenseCategory.expensesCategory)
  try {
    const r1 = await db.collection("expenseSchema").updateMany(
      { accountName: /^home$/i },
      { $set: { accountName: "Receivables" } }
    );
    console.log(`Updated ${r1.modifiedCount} documents in expenseSchema (accountName: Home -> Receivables)`);

    const r2 = await db.collection("expenseSchema").updateMany(
      { "expenseCategory.expensesCategory": /^home$/i },
      { $set: { "expenseCategory.expensesCategory": "Receivables" } }
    );
    console.log(`Updated ${r2.modifiedCount} documents in expenseSchema (expenseCategory.expensesCategory: Home -> Receivables)`);
  } catch (err) {
    console.error("Error updating expenseSchema collection:", err.message);
  }

  // 2. Update expensesCategory collection
  try {
    const r3 = await db.collection("expensesCategory").updateMany(
      { expensesCategory: /^home$/i },
      { $set: { expensesCategory: "Receivables" } }
    );
    console.log(`Updated ${r3.modifiedCount} documents in expensesCategory (expensesCategory: Home -> Receivables)`);
  } catch (err) {
    console.error("Error updating expensesCategory collection:", err.message);
  }

  // 3. Update legacy dailyExpense collection
  try {
    const r4 = await db.collection("dailyExpense").updateMany(
      { expenseCategory: /^home$/i },
      { $set: { expenseCategory: "Receivables" } }
    );
    console.log(`Updated ${r4.modifiedCount} documents in dailyExpense (expenseCategory: Home -> Receivables)`);

    const r5 = await db.collection("dailyExpense").updateMany(
      { expenseOption: /^home$/i },
      { $set: { expenseOption: "Receivables" } }
    );
    console.log(`Updated ${r5.modifiedCount} documents in dailyExpense (expenseOption: Home -> Receivables)`);
  } catch (err) {
    console.error("Error updating dailyExpense collection:", err.message);
  }

  console.log("Migration complete!");
  if (shouldDisconnect) {
    await mongoose.disconnect();
  }
}

if (require.main === module) {
  migrateHomeToReceivables().then(() => {
    process.exit(0);
  }).catch((err) => {
    console.error("Migration failed:", err);
    process.exit(1);
  });
}

module.exports = migrateHomeToReceivables;
