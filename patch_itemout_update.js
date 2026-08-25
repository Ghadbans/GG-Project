const fs = require('fs');

function patchFile(file) {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');

    // First onChange (inside tableRows)
    const regex1 = /onChange=\{\(e\) => \{\s*handleChange\(e, Item\.idRow\)\s*\}\}/;
    const replacement1 = `onChange={(e) => {
                      const value = e.target.value;
                      if (!isNaN(value) && value !== '') {
                        const numericValue = parseInt(value, 10);
                        const maxStock = relatedItemQty?.itemQuantity || 0;
                        const maxNeeded = (typeof related !== 'undefined' && related?.itemQty !== undefined) ? (related.itemQty - (related.itemOut || 0)) : Infinity;
                        const maxAllowed = Math.min(maxStock, maxNeeded);
                        if (numericValue <= maxAllowed) {
                          handleChange(e, Item.idRow);
                        } else {
                          e.target.value = '';
                          handleChange(e, Item.idRow);
                        }
                      } else {
                        handleChange(e, Item.idRow);
                      }
                    }}`;
                    
    content = content.replace(regex1, replacement1);

    // Second onChange (inside tableRows2)
    const regex2 = /onChange=\{\(e\) => \{\s*let value = e\.target\.value\s*if \(value <= \(relatedItemQty && relatedItemQty\.itemQuantity\)\) \{\s*handleChange\(e, Item\.idRow\)\s*\}\s*\}\}/;
    const replacement2 = `onChange={(e) => {
              const value = e.target.value;
              if (!isNaN(value) && value !== '') {
                const numericValue = parseInt(value, 10);
                const maxStock = relatedItemQty?.itemQuantity || 0;
                if (numericValue <= maxStock) {
                  handleChange(e, Item.idRow);
                } else {
                  e.target.value = '';
                  handleChange(e, Item.idRow);
                }
              } else {
                handleChange(e, Item.idRow);
              }
            }}`;

    content = content.replace(regex2, replacement2);

    fs.writeFileSync(file, content);
    console.log("Patched " + file);
}

patchFile('src/js/AdminView1/PageView/ItemOutView/ItemOutViewUpdate.js');
