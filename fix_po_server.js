const fs = require('fs');
let content = fs.readFileSync('server/routes/Routes.js', 'utf8');

// Find the PO route search/sort section and replace it
const oldSearch = `    if (search) {
      const regex = new RegExp(search.split(' ').join('|'), 'i');
      query.$or = [
        { outNumber: isNaN(Number(search)) ? null : Number(search) },
        { reason: regex },
        { 'itemsQtyArray.itemName': regex },
        { 'itemsQtyArray.itemBrand': regex },
        { 'itemsQtyArray.itemDescription': regex },
        { 'reference.referenceName': regex },
      ].filter(condition => condition !== null);
    }`;

const newSearch = `    if (search) {
      const regex = new RegExp(search, 'i');
      const conditions = [
        { reason: regex },
        { 'itemsQtyArray.itemName': regex },
        { 'itemsQtyArray.itemBrand': regex },
        { 'itemsQtyArray.itemDescription': regex },
        { 'reference.referenceName': regex },
      ];
      if (!isNaN(Number(search))) {
        conditions.push({ outNumber: Number(search) });
      }
      // Date search: match year, or dd/mm/yyyy style
      conditions.push({ $expr: { $regexMatch: { input: { $dateToString: { format: "%Y", date: { $ifNull: ["$itemOutDate", new Date(0)] } } }, regex: search, options: "i" } } });
      conditions.push({ $expr: { $regexMatch: { input: { $dateToString: { format: "%d/%m/%Y", date: { $ifNull: ["$itemOutDate", new Date(0)] } } }, regex: search, options: "i" } } });
      conditions.push({ $expr: { $regexMatch: { input: { $dateToString: { format: "%Y-%m-%d", date: { $ifNull: ["$itemOutDate", new Date(0)] } } }, regex: search, options: "i" } } });
      query.$or = conditions;
    }`;

// Fix sort: use outNumber: -1 (newest PO number = newest entry) instead of non-existent purchaseOrderDate
const oldSort = `.sort({ purchaseOrderDate: -1 })`;
const newSort = `.sort({ outNumber: -1 })`;

let newContent = content.replace(oldSearch, newSearch);
if (newContent === content) {
  console.log('ERROR: search block not found!');
  process.exit(1);
}

newContent = newContent.replace(oldSort, newSort);
if (newContent === content) {
  console.log('WARNING: sort not changed (may already be correct)');
}

fs.writeFileSync('server/routes/Routes.js', newContent);
console.log('Done!');
