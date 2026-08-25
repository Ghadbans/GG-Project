const fs = require('fs');

const files = [
    'src/js/AdminView1/PageView/EstimateView/EstimateInvoiceFormUpdate.js',
    'src/js/AdminView1/PageView/InvoiceView/InvoiceFormUpdate.js',
    'src/js/AdminView1/PageView/ItemOutView/ItemOutViewUpdate.js',
    'src/js/AdminView1/PageView/ItemPurchase/ItemPurchaseUpdateForm.js',
    'src/js/AdminView1/PageView/MaintenanceView/MaintenanceUpdateView.js',
    'src/js/AdminView1/PageView/ProjectView/ProjectUpdateView.js',
    'src/js/AdminView1/PageView/PurchaseOrder/PurchaseUpdateOrder.js',
    'src/js/AdminView1/PageView/PurchasesView/PurchaseFormUpdate.js'
];

for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    // Remove the bad import I added
    content = content.replace("import useDocumentLock from '../../../hooks/useDocumentLock';\n", "");
    fs.writeFileSync(file, content);
    console.log(`Cleaned ${file}`);
}
