const fs = require('fs');

let c = fs.readFileSync('src/js/component/MobileLayout.js', 'utf8');

// 1. Add imports
c = c.replace(
  "import MobileDrawer from './MobileDrawer';",
  "import MobileDrawer from './MobileDrawer';\r\nimport { useTranslation } from '../context/LanguageContext';\r\nimport LanguageSelector from './LanguageSelector';"
);

// 2. Add hook in component
c = c.replace(
  'function MobileLayout({ children }) {',
  'function MobileLayout({ children }) {\r\n  const { t } = useTranslation();'
);

// 3. Update candidate tabs
c = c.replace(
  "{ label: 'Dashboard', path: '/AdminHome', icon: <DashboardIcon fontSize=\"small\" />, module: 'Dashboard', always: true },",
  "{ label: t('sidebar.dashboard', 'Dashboard'), path: '/AdminHome', icon: <DashboardIcon fontSize=\"small\" />, module: 'Dashboard', always: true },"
);
c = c.replace(
  "{ label: 'Invoices', path: '/InvoiceViewAdmin', icon: <ReceiptIcon fontSize=\"small\" />, module: 'Invoice' },",
  "{ label: t('sidebar.invoices', 'Invoices'), path: '/InvoiceViewAdmin', icon: <ReceiptIcon fontSize=\"small\" />, module: 'Invoice' },"
);
c = c.replace(
  "{ label: 'Customers', path: '/CustomerViewAdmin', icon: <PeopleIcon fontSize=\"small\" />, module: 'Customer' },",
  "{ label: t('sidebar.customers', 'Customers'), path: '/CustomerViewAdmin', icon: <PeopleIcon fontSize=\"small\" />, module: 'Customer' },"
);
c = c.replace(
  "{ label: 'Maintenance', path: '/MaintenanceViewAdmin', icon: <BuildIcon fontSize=\"small\" />, module: 'Maintenance' },",
  "{ label: t('sidebar.maintenance', 'Maintenance'), path: '/MaintenanceViewAdmin', icon: <BuildIcon fontSize=\"small\" />, module: 'Maintenance' },"
);
c = c.replace(
  "{ label: 'Store', path: '/ItemViewAdmin', icon: <InventoryIcon fontSize=\"small\" />, module: 'Item' },",
  "{ label: t('sidebar.store', 'Store'), path: '/ItemViewAdmin', icon: <InventoryIcon fontSize=\"small\" />, module: 'Item' },"
);
c = c.replace(
  "{ label: 'Expenses', path: '/DailyExpenses', icon: <MonetizationOnIcon fontSize=\"small\" />, module: 'Expenses' },",
  "{ label: t('sidebar.dailyExpenses', 'Expenses'), path: '/DailyExpenses', icon: <MonetizationOnIcon fontSize=\"small\" />, module: 'Expenses' },"
);

// 4. Add LanguageSelector to header actions
c = c.replace(
  '<NotificationVIewInfo />',
  '<LanguageSelector variant="mobile" />\r\n            <NotificationVIewInfo />'
);

fs.writeFileSync('src/js/component/MobileLayout.js', c, 'utf8');
console.log('MobileLayout.js successfully updated with i18n');
