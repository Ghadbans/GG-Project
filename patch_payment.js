const fs = require('fs');
let content = fs.readFileSync('src/js/AdminView1/PaymentView.js', 'utf8');
content = content.replace(/const storedValue = \s*\n\s*if \(storedValue\) \{\s*setSearchInvoice\(storedValue\)/, 
  `const storedValue = localStorage.getItem('QuickFilterInvoicePayment');\n  if (storedValue) {\n    setSearchInvoice(storedValue)`);
content = content.replace(/const storedValue = \s*\n\s*if \(storedValue\) \{\s*setPaymentInfo\(storedValue\)/, 
  `const storedValue = localStorage.getItem('QuickFilterPaymentInfo');\n  if (storedValue) {\n    setPaymentInfo(storedValue)`);
content = content.replace(/const storedQuick = \s*\n\s*if \(storedQuick\) \{\s*setFilterModelPayment\(storedQuick\)/, 
  `const storedQuick = JSON.parse(localStorage.getItem('QuickFilterPaymentInfoTst'));\n    if (storedQuick) {\n      setFilterModelPayment(storedQuick)`);
fs.writeFileSync('src/js/AdminView1/PaymentView.js', content);
