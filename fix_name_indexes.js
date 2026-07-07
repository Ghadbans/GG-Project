const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

const schemas = [
  {
    file: 'purchaseSchema.js',
    schemaName: 'purchaseSchema',
    field: 'purchaseName'
  },
  {
    file: 'projectSchema.js',
    schemaName: 'projectSchema',
    field: 'projectName'
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
    const fieldRegex = new RegExp(`(${field}\\s*:\\s*\\{[^}]*?)unique\\s*:\\s*true,?([^}]*\\})`, 'g');
    content = content.replace(fieldRegex, '$1$2');

    // Remove any trailing commas that might have been left inside the object if unique was the last attribute
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
      { coll: 'purchase', index: 'purchaseName_1' },
      { coll: 'projects', index: 'projectName_1' }
    ];

    for (const { coll, index } of collectionsToDropIndexes) {
      try {
        const collection = db.collection(coll);
        const collections = await db.listCollections({name: coll}).toArray();
        if (collections.length > 0) {
            await collection.dropIndex(index);
            console.log(`Dropped index ${index} from collection ${coll}`);
        } else {
             // Try case insensitive or other common naming patterns if standard plural fails
            const altColl = coll.toLowerCase();
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
