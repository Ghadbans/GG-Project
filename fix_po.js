const fs = require('fs');
let lines = fs.readFileSync('routes/Routes.js', 'utf8').split('\n');
let s = -1;
let e = -1;
for(let i=0; i<lines.length; i++){
    if(lines[i].includes('if (search) {') && lines[i+1].includes('const regex = new RegExp')) s = i;
    if(s !== -1 && lines[i].includes('const itemI = await purchaseOrderSchema.find')) { e = i; break; }
}
if(s !== -1 && e !== -1){
    const replacement = `      if (search) {
        let dateSearchStr = search;
        const dateParts = search.split('/');
        if (dateParts.length === 3) {
            dateSearchStr = \`\${dateParts[2]}-\${dateParts[1]}-\${dateParts[0]}\`;
        }
        const dateRegex = new RegExp(dateSearchStr, 'i');
        const regex = new RegExp(search.split(' ').join('|'), 'i');
        query.$or = [
          { outNumber: isNaN(Number(search)) ? null : Number(search) },
          { reason: regex },
          { 'itemsQtyArray.itemName': regex },
          { 'itemsQtyArray.itemBrand': regex },
          { 'itemsQtyArray.itemDescription': regex },
          { 'reference.referenceName': regex },
          { itemOutDate: dateRegex },
          { itemOutDate: isNaN(new Date(dateSearchStr).getTime()) ? null : new Date(dateSearchStr) }
        ].filter(condition => condition !== null);
      }
      if (filterField && filterValue) {
        query[\`itemsQtyArray.\${filterField}\`] = new RegExp(filterValue, 'i');
      }
      const itemI = await purchaseOrderSchema.find(query).sort({ itemOutDate: -1 }).skip(skip).limit(Number(limit));`;
    lines.splice(s, e-s+1, replacement);
    fs.writeFileSync('routes/Routes.js', lines.join('\n'));
    console.log('Replaced successfully');
} else {
    console.log('Could not find block', s, e);
}
