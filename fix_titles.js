const fs = require('fs');

let file = 'src/js/AdminView1/PageView/ItemReturn/ItemReturnViewForm.js';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/UPDATE ITEM OUT/g, "MAKE NEW ITEM RETURN");
content = content.replace(/making item out/g, "making item return");

fs.writeFileSync(file, content);
console.log("Patched titles in ItemReturnViewForm");
