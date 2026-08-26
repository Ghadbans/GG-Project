const fs = require('fs');

const mapping = {
  'CustomerViewAdmin.js': 'QuickFilterCustomer',
  'DailyExpenses.js': 'QuickFilterDailyExpenses',
  'EstimateViewAdmin.js': 'QuickFilterEstimate',
  'ExpensesViewAdmin.js': 'QuickFilterInvExpenses',
  'InvoiceViewAdmin.js': 'QuickFilterInvoice',
  'ItemViewAdmin.js': 'QuickFilterItem',
  'MaintenanceViewAdmin.js': 'QuickFilterMaintenance',
  'PayRollViewAdmin.js': 'QuickFilterPayRoll',
  'ProjectViewAdmin.js': 'QuickFilterProject',
  'PurchasesViewAdmin.js': 'QuickFilterPurchase',
  'SellShopInvoiceView.js': 'QuickFilterInvoice',
  'SupplierAdminView.js': 'QuickFilterCustomer',
  'TewmViewAdmin.js': 'QuickFilterEmployee',
  'PurchaseOrderViewAdmin.js': 'QuickFilterPurchaseOrder',
  'ItemPurchaseViewAdmin.js': 'QuickFilterItemPurchase',
  'ItemOutViewAdmin.js': 'QuickFilterItemOut',
  'ItemReturnAdminView.js': 'QuickFilterItemReturn'
};

const files = fs.readdirSync('src/js/AdminView1/');
files.forEach(file => {
  if (file.endsWith('.js')) {
    const path = 'src/js/AdminView1/' + file;
    let content = fs.readFileSync(path, 'utf8');
    
    if (mapping[file]) {
      content = content.replace(/const storedValue = \s*\n/g, `const storedValue = localStorage.getItem('${mapping[file]}');\n`);
    } else if (file === 'PaymentView.js') {
       content = content.replace(/const storedValue = \s*\n\s*if \(storedValue\) \{\s*setSearchInvoicePayment\(storedValue\)/g, 
          `const storedValue = localStorage.getItem('QuickFilterInvoicePayment');\n    if (storedValue) {\n      setSearchInvoicePayment(storedValue)`);
       content = content.replace(/const storedValue = \s*\n\s*if \(storedValue\) \{\s*setSearchPayment\(storedValue\)/g, 
          `const storedValue = localStorage.getItem('QuickFilterPayment');\n    if (storedValue) {\n      setSearchPayment(storedValue)`);
    }
    
    if (mapping[file]) {
      content = content.replace(/const storedQuick = \s*\n/g, `const storedQuick = JSON.parse(localStorage.getItem('${mapping[file]}Tst'));\n`);
    } else if (file === 'PaymentView.js') {
       content = content.replace(/const storedQuick = \s*\n\s*if \(storedQuick\) \{\s*setFilterModel\(storedQuick\)/g, 
          `const storedQuick = JSON.parse(localStorage.getItem('QuickFilterInvoicePaymentTst'));\n    if (storedQuick) {\n      setFilterModel(storedQuick)`);
       content = content.replace(/const storedQuick = \s*\n\s*if \(storedQuick\) \{\s*setFilterModel1\(storedQuick\)/g, 
          `const storedQuick = JSON.parse(localStorage.getItem('QuickFilterPaymentTst'));\n    if (storedQuick) {\n      setFilterModel1(storedQuick)`);
    }

    fs.writeFileSync(path, content);
  }
});
