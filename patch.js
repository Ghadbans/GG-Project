const fs = require('fs');
let file = 'src/js/AdminView1/PageView/ItemOutView/ItemOutViewForm.js';
let content = fs.readFileSync(file, 'utf8');

// The block to replace
const regex1 = /const numericValue = parseInt\(value, 10\);\s*if \(numericValue <= \(relatedItemQty\?\.itemQuantity \|\| 0\)\) \{\s*handleChange\(Item\.idRow, 'newItemOut', value\)\s*\} else \{\s*handleChange\(Item\.idRow, 'newItemOut', 0\)\s*\}/g;

const replacement1 = `const numericValue = parseInt(value, 10);
                            const maxStock = relatedItemQty?.itemQuantity || 0;
                            const maxNeeded = (related?.itemQty !== undefined) ? (related.itemQty - (related.itemOut || 0)) : Infinity;
                            const maxAllowed = Math.min(maxStock, maxNeeded);
                            if (numericValue <= maxAllowed) {
                              handleChange(Item.idRow, 'newItemOut', value)
                            } else {
                              handleChange(Item.idRow, 'newItemOut', '')
                            }`;

let matches = content.match(regex1);
if (matches) {
    console.log("Matched " + matches.length + " times in " + file);
    // Note: The second tableRows2 logic shouldn't have maxNeeded constraint because it's manual without 'related'. 
    // We only want to apply this constraint when 'related' exists, BUT wait, if 'related' doesn't exist, maxNeeded is Infinity!
    // So we can safely apply this logic to both! Wait, does 'related' exist in the scope of tableRows2?
    // In tableRows2, 'related' is NOT defined! It will throw an error: 'related is not defined'.
}
