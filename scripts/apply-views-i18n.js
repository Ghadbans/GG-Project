const fs = require('fs');

// 1. Update InvoiceViewAdmin.js
let inv = fs.readFileSync('src/js/AdminView1/InvoiceViewAdmin.js', 'utf8');

// Imports
inv = inv.replace(
  "import NotificationVIewInfo from './NotificationVIewInfo';",
  "import NotificationVIewInfo from './NotificationVIewInfo';\r\nimport { useTranslation } from '../context/LanguageContext';\r\nimport LanguageSelector from '../component/LanguageSelector';"
);

// Hook
inv = inv.replace(
  'function InvoiceViewAdmin() {',
  'function InvoiceViewAdmin() {\r\n  const { t } = useTranslation();'
);

// AppBar
inv = inv.replace(
  '<Typography\r\n              component="h1"\r\n              variant="h6"\r\n              color="inherit"\r\n              noWrap\r\n              sx={{ flexGrow: 1 }}\r\n            >\r\n              Invoice\r\n            </Typography>\r\n            <NotificationVIewInfo />',
  '<Typography\r\n              component="h1"\r\n              variant="h6"\r\n              color="inherit"\r\n              noWrap\r\n              sx={{ flexGrow: 1 }}\r\n            >\r\n              {t(\'invoices.title\', \'Invoice\')}\r\n            </Typography>\r\n            <LanguageSelector sx={{ mr: 1.5 }} />\r\n            <NotificationVIewInfo />'
);

// Fallback for LF line endings if CRLF didn't match
if (!inv.includes('<LanguageSelector sx={{ mr: 1.5 }} />')) {
  inv = inv.replace(
    /<Typography[^>]*>\s*Invoice\s*<\/Typography>\s*<NotificationVIewInfo \/>/s,
    '<Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>{t(\'invoices.title\', \'Invoice\')}</Typography>\n            <LanguageSelector sx={{ mr: 1.5 }} />\n            <NotificationVIewInfo />'
  );
}

// WhatsApp button label
inv = inv.replace(
  'Send WhatsApp Invoices',
  "{t('invoices.sendWhatsApp', 'Send WhatsApp Invoices')}"
);

fs.writeFileSync('src/js/AdminView1/InvoiceViewAdmin.js', inv, 'utf8');
console.log('InvoiceViewAdmin.js updated with i18n');


// 2. Update AdminHome.js
let home = fs.readFileSync('src/js/AdminView1/AdminHome.js', 'utf8');

home = home.replace(
  "import NotificationVIewInfo from './NotificationVIewInfo';",
  "import NotificationVIewInfo from './NotificationVIewInfo';\r\nimport { useTranslation } from '../context/LanguageContext';\r\nimport LanguageSelector from '../component/LanguageSelector';"
);

home = home.replace(
  'function AdminHome() {',
  'function AdminHome() {\r\n  const { t } = useTranslation();'
);

home = home.replace(
  '<NotificationVIewInfo />',
  '<LanguageSelector sx={{ mr: 1.5 }} />\r\n                <NotificationVIewInfo />'
);

fs.writeFileSync('src/js/AdminView1/AdminHome.js', home, 'utf8');
console.log('AdminHome.js updated with i18n');
