const fs = require('fs');

function patchFile(file, isReturn) {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');
    
    // First onChange inside tableRows (with related.itemQty)
    const oldLogic1 = `onChange={(e) => {
                          const value = e.target.value
                          if (!isNaN(value) && value !== '') {
                            const numericValue = parseInt(value, 10);
                            if (numericValue <= (relatedItemQty?.itemQuantity || 0)) {
                              handleChange(Item.idRow, 'newItemOut', value)
                            } else {
                              handleChange(Item.idRow, 'newItemOut', 0)
                            }
                          } else {
                            handleChange(Item.idRow, 'newItemOut', '')
                          }
                        }}`;
                        
    const newLogic1 = `onChange={(e) => {
                          const value = e.target.value
                          if (!isNaN(value) && value !== '') {
                            const numericValue = parseInt(value, 10);
                            const maxStock = relatedItemQty?.itemQuantity || 0;
                            const maxNeeded = (related?.itemQty !== undefined) ? (related.itemQty - (related.itemOut || 0)) : Infinity;
                            const maxAllowed = Math.min(maxStock, maxNeeded);
                            
                            if (numericValue <= maxAllowed) {
                              handleChange(Item.idRow, 'newItemOut', value)
                            } else {
                              handleChange(Item.idRow, 'newItemOut', '')
                            }
                          } else {
                            handleChange(Item.idRow, 'newItemOut', '')
                          }
                        }}`;
                        
    // Second onChange inside tableRows2 (manual item, no related)
    const oldLogic2 = `onChange={(e) => {
              const value = e.target.value
              if (!isNaN(value) && value !== '') {
                const numericValue = parseInt(value, 10);
                if (numericValue <= (relatedItemQty?.itemQuantity || 0)) {
                  handleChange(Item.idRow, 'newItemOut', value)
                } else {
                  handleChange(Item.idRow, 'newItemOut', 0)
                }
              } else {
                handleChange(Item.idRow, 'newItemOut', '')
              }
            }}`;

    const newLogic2 = `onChange={(e) => {
              const value = e.target.value
              if (!isNaN(value) && value !== '') {
                const numericValue = parseInt(value, 10);
                if (numericValue <= (relatedItemQty?.itemQuantity || 0)) {
                  handleChange(Item.idRow, 'newItemOut', value)
                } else {
                  handleChange(Item.idRow, 'newItemOut', '')
                }
              } else {
                handleChange(Item.idRow, 'newItemOut', '')
              }
            }}`;

    // Try to replace
    content = content.replace(oldLogic1, newLogic1);
    content = content.replace(oldLogic2, newLogic2);
    
    fs.writeFileSync(file, content);
    console.log("Patched " + file);
}

patchFile('src/js/AdminView1/PageView/ItemOutView/ItemOutViewForm.js', false);
patchFile('src/js/AdminView1/PageView/ItemOutView/ItemOutViewUpdate.js', false);
