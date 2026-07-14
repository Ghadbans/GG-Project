const fs = require('fs');
let content = fs.readFileSync('routes/Routes.js', 'utf8');

// Find create-estimation route handler opening
const marker = 'Route.route("/create-estimation").post(async (req, res, next) => {';
const idx = content.indexOf(marker);
if (idx === -1) {
  console.log('Marker not found');
  process.exit(1);
}

// Insert the dropIndex code right after the opening brace
const insertAfter = marker;
const dropCode = `
  // One-time fix: drop broken estimateName_1 unique index
  try {
    const db = require('mongoose').connection.db;
    const indexes = await db.collection('estimation').indexes();
    const hasOldIndex = indexes.some(i => i.name === 'estimateName_1');
    if (hasOldIndex) {
      await db.collection('estimation').dropIndex('estimateName_1');
      console.log('SUCCESS: Dropped estimateName_1 index from estimation');
    }
  } catch (e) { console.log('estimateName_1 drop attempt:', e.message); }
`;

const newContent = content.replace(insertAfter, insertAfter + dropCode);
if (newContent === content) {
  console.log('No change made');
} else {
  fs.writeFileSync('routes/Routes.js', newContent);
  console.log('Done! Inserted drop code into create-estimation route');
}
