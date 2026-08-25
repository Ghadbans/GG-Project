const fs = require('fs');

function patchFile(file) {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');

    // Break the file by searching for "tableRows2 = itemsQtyArray.map"
    const splitIndex = content.indexOf('const tableRows2');
    if (splitIndex === -1) {
        console.log("Could not find tableRows2 in " + file);
        return;
    }

    let part1 = content.substring(0, splitIndex); // Contains tableRows
    let part2 = content.substring(splitIndex);    // Contains tableRows2

    // The old logic regex
    const regex1 = /const numericValue = parseInt\(value, 10\);\s*if \(numericValue <= \(relatedItemQty\?\.itemQuantity \|\| 0\)\) \{\s*handleChange\(Item\.idRow, 'newItemOut', value\)\s*\} else \{\s*handleChange\(Item\.idRow, 'newItemOut', 0\)\s*\}/g;

    const replacement1 = `const numericValue = parseInt(value, 10);
                            const maxStock = relatedItemQty?.itemQuantity || 0;
                            const maxNeeded = (typeof related !== 'undefined' && related?.itemQty !== undefined) ? (related.itemQty - (related.itemOut || 0)) : Infinity;
                            const maxAllowed = Math.min(maxStock, maxNeeded);
                            if (numericValue <= maxAllowed) {
                              handleChange(Item.idRow, 'newItemOut', value)
                            } else {
                              handleChange(Item.idRow, 'newItemOut', '')
                            }`;

    const replacement2 = `const numericValue = parseInt(value, 10);
                            const maxStock = relatedItemQty?.itemQuantity || 0;
                            if (numericValue <= maxStock) {
                              handleChange(Item.idRow, 'newItemOut', value)
                            } else {
                              handleChange(Item.idRow, 'newItemOut', '')
                            }`;

    part1 = part1.replace(regex1, replacement1);
    part2 = part2.replace(regex1, replacement2);

    fs.writeFileSync(file, part1 + part2);
    console.log("Patched " + file);
}

patchFile('src/js/AdminView1/PageView/ItemOutView/ItemOutViewForm.js');
patchFile('src/js/AdminView1/PageView/ItemOutView/ItemOutViewUpdate.js');
