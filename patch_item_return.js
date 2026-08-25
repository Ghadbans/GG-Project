const fs = require('fs');

let file = 'src/js/AdminView1/PageView/ItemReturn/ItemReturnUpdateForm.js';
if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');

    const oldLogic = `onChange={(e) => handleChange(e, Item.idRow)}`;
    
    // We only want to replace it inside the tableRows mapping, not tableRows2
    // Let's replace only the first occurrence which is inside tableRows
    const newLogic = `onChange={(e) => {
                      const value = e.target.value;
                      if (!isNaN(value) && value !== '') {
                        const numericValue = parseInt(value, 10);
                        const maxOut = related.itemOut1 == undefined ? (related.itemOut || 0) : 0;
                        if (numericValue <= maxOut) {
                          handleChange(e, Item.idRow);
                        } else {
                          e.target.value = '';
                          handleChange(e, Item.idRow);
                        }
                      } else {
                        handleChange(e, Item.idRow);
                      }
                    }}`;
                    
    content = content.replace(oldLogic, newLogic);
    
    // Fix the "MAKE NEW ITEM OUT" title to "ITEM RETURN" while we're at it
    content = content.replace(/MAKE NEW ITEM OUT/g, "UPDATE ITEM RETURN");

    fs.writeFileSync(file, content);
    console.log("Patched " + file);
} else {
    console.log("Not found");
}
