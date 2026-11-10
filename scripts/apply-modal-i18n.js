const fs = require('fs');

let c = fs.readFileSync('src/js/AdminView1/InvoiceViewAdmin.js', 'utf8');

c = c.replace(
  "label={`Send Queue (${whatsAppInvoicesList.length})`}",
  "label={`${t('invoices.sendQueue', 'Send Queue')} (${whatsAppInvoicesList.length})`}"
);

c = c.replace(
  "label={`Sent History (${historyList.length})`}",
  "label={`${t('invoices.sentHistory', 'Sent History')} (${historyList.length})`}"
);

c = c.replace(
  ">Customizable Short Message (English)<",
  ">{t('invoices.customMessage', 'Customizable Short Message (English)')}<"
);

c = c.replace(
  "{savingTemplate ? 'Saving...' : 'Save as Default'}",
  "{savingTemplate ? t('common.saving', 'Saving...') : t('common.saveAsDefault', 'Save as Default')}"
);

c = c.replace(
  "placeholder=\"SEARCH BY CUSTOMER, INVOICE #, PHONE...\"",
  "placeholder={t('invoices.filterPlaceholder', 'SEARCH BY CUSTOMER, INVOICE #, PHONE...')}"
);

c = c.replace(
  "placeholder=\"SEARCH HISTORY BY INVOICE #, CUSTOMER NAME, PHONE, SENT BY...\"",
  "placeholder={t('invoices.historySearchPlaceholder', 'SEARCH HISTORY BY INVOICE #, CUSTOMER NAME, PHONE, SENT BY...')}"
);

fs.writeFileSync('src/js/AdminView1/InvoiceViewAdmin.js', c, 'utf8');
console.log('Invoice modal strings translated successfully');
