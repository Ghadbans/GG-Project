const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

const schemas = [
  {
    file: 'estimationSchema.js',
    schemaName: 'estimationSchema',
    field: 'estimateNumber'
  },
  {
    file: 'itemPurchaseSchema.js',
    schemaName: 'itemPurchaseSchema',
    field: 'itemPurchaseNumber'
  },
  {
    file: 'posSchema.js',
    schemaName: 'posSchema',
    field: 'factureNumber'
  },
  {
    file: 'purchaseSchema.js',
    schemaName: 'purchaseSchema',
    field: 'purchaseNumber'
  },
  {
    file: 'projectSchema.js',
    schemaName: 'projectSchema',
    field: 'projectNumber'
  },
  {
    file: 'invoiceSchema.js',
    schemaName: 'invoiceSchema',
    field: 'invoiceNumber'
  }
];

function updateSchemaFiles() {
  schemas.forEach(({ file, schemaName, field }) => {
    const filePath = path.join(__dirname, 'model', file);
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }
    let content = fs.readFileSync(filePath, 'utf8');

    // 1. Remove unique constraint from the specific field
    // It can look like:
    // estimateNumber: {
    //   type: Number,
    //   required: true,
    //   trim: true,
    //   unique:true
    // }
    // Or on a single line:
    // itemPurchaseNumber: { type: Number, unique: true }

    // We'll use a regex that matches the field definition block and removes unique:true
    const fieldRegex = new RegExp(`(${field}\\s*:\\s*\\{[^}]*?)unique\\s*:\\s*true,?([^}]*\\})`, 'g');
    content = content.replace(fieldRegex, '$1$2');

    // Remove any trailing commas that might have been left inside the object if unique was the last attribute
    // Example: { type: Number, trim: true, } -> { type: Number, trim: true }
    content = content.replace(/,\s*\}/g, ' }');

    // 2. Add the compound index before module.exports
    const indexCode = `\n${schemaName}.index({ branchId: 1, ${field}: 1 }, { unique: true });\n`;
    if (!content.includes(`${schemaName}.index({ branchId: 1, ${field}: 1 }`)) {
      content = content.replace(/module\.exports/, indexCode + 'module.exports');
    }

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated schema file: ${file}`);
  });
}

async function dropOldIndexes() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/globalgatedb');
    console.log("Connected to MongoDB.");

    const db = mongoose.connection.db;

    // Define the collections and the indexes to drop
    const collectionsToDropIndexes = [
      { coll: 'estimations', index: 'estimateNumber_1' },
      { coll: 'itempurchases', index: 'itemPurchaseNumber_1' }, // Might also be itempurchase or itemPurchase
      { coll: 'pos', index: 'factureNumber_1' },
      { coll: 'purchases', index: 'purchaseNumber_1' },
      { coll: 'projects', index: 'projectNumber_1' }, 
      { coll: 'invoices', index: 'invoiceNumber_1' }
    ];

    for (const { coll, index } of collectionsToDropIndexes) {
      try {
        const collection = db.collection(coll);
        // check if collection exists
        const collections = await db.listCollections({name: coll}).toArray();
        if (collections.length > 0) {
            await collection.dropIndex(index);
            console.log(`Dropped index ${index} from collection ${coll}`);
        } else {
             // Try case insensitive or other common naming patterns if standard plural fails
            const altColl = coll.toLowerCase() === 'itempurchases' ? 'itemPurchase' : coll;
            if (altColl !== coll) {
                const altCollections = await db.listCollections({name: altColl}).toArray();
                if (altCollections.length > 0) {
                    await db.collection(altColl).dropIndex(index);
                    console.log(`Dropped index ${index} from collection ${altColl}`);
                }
            } else {
               console.log(`Collection ${coll} not found, skipping index drop.`);
            }
        }
      } catch (e) {
        if (e.codeName === 'IndexNotFound') {
          console.log(`Index ${index} already dropped or not found in ${coll}`);
        } else {
          console.error(`Error dropping index ${index} in ${coll}:`, e.message);
        }
      }
    }
  } catch (e) {
    console.error("Error connecting to MongoDB:", e);
  } finally {
    await mongoose.disconnect();
  }
}

async function run() {
  updateSchemaFiles();
  await dropOldIndexes();
}

run();
