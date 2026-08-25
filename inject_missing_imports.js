const fs = require('fs');

const files = [
    'src/js/AdminView1/PageView/ItemOutView/ItemOutViewUpdate.js',
    'src/js/AdminView1/PageView/ItemPurchase/ItemPurchaseUpdateForm.js',
    'src/js/AdminView1/PageView/MaintenanceView/MaintenanceUpdateView.js',
    'src/js/AdminView1/PageView/ProjectView/ProjectUpdateView.js',
    'src/js/AdminView1/PageView/PurchaseOrder/PurchaseUpdateOrder.js',
    'src/js/AdminView1/PageView/PurchasesView/PurchaseFormUpdate.js'
];

for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    if (!content.includes("import { useDocumentLock }")) {
        const importStmt = "import { useDocumentLock } from '../../../hooks/useDocumentLock';\n";
        
        // Insert right at the top!
        content = importStmt + content;
        fs.writeFileSync(file, content);
        console.log(`Patched ${file} (top)`);
    }
}
