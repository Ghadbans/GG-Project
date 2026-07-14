const fs = require('fs');
let lines = fs.readFileSync('routes/Routes.js', 'utf8').split('\n');
let s = -1;
let e = -1;
for(let i=0; i<lines.length; i++){
    if(lines[i].includes('if (search) {') && lines[i+1].includes('let dateSearchStr')) s = i;
    if(s !== -1 && lines[i].includes('].filter(condition => condition !== null);')) { e = i; break; }
}
if(s !== -1 && e !== -1){
    const replacement = `      if (search) {
        const regex = new RegExp(search.split(' ').join('|'), 'i');
        query.$or = [
          { outNumber: isNaN(Number(search)) ? null : Number(search) },
          { reason: regex },
          { 'itemsQtyArray.itemName': regex },
          { 'itemsQtyArray.itemBrand': regex },
          { 'itemsQtyArray.itemDescription': regex },
          { 'reference.referenceName': regex },
          { $expr: { $regexMatch: { input: { $dateToString: { format: "%d/%m/%Y", date: { $ifNull: ["$itemOutDate", new Date()] } } }, regex: search, options: "i" } } },
          { $expr: { $regexMatch: { input: { $dateToString: { format: "%Y-%m-%d", date: { $ifNull: ["$itemOutDate", new Date()] } } }, regex: search, options: "i" } } }
        ].filter(condition => condition !== null);`;
    lines.splice(s, e-s+1, replacement);
    fs.writeFileSync('routes/Routes.js', lines.join('\n'));
    console.log('Replaced successfully');
} else {
    console.log('Could not find block', s, e);
}
