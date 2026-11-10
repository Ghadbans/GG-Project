const fs = require('fs');

let c = fs.readFileSync('src/js/component/SidebarDash.js', 'utf8');

// 1. Add imports
c = c.replace(
  "import pkg from '../../../package.json';",
  "import pkg from '../../../package.json';\r\nimport { useTranslation } from '../context/LanguageContext';\r\nimport LanguageSelector from './LanguageSelector';"
);

// 2. Add hook
c = c.replace(
  'function SidebarDash({ onView2, onView3, onView4, onView5, onView6, isSubmenu }) {',
  'function SidebarDash({ onView2, onView3, onView4, onView5, onView6, isSubmenu }) {\r\n  const { t } = useTranslation();'
);

// 3. Menu items translations
c = c.replace('<ListItemText primary="Dashboard" />', '<ListItemText primary={t(\'sidebar.dashboard\', \'Dashboard\')} />');
c = c.replace('<ListItemText primary="Customer" />', '<ListItemText primary={t(\'sidebar.customers\', \'Customer\')} />');
c = c.replace('<ListItemText primary="Store" />', '<ListItemText primary={t(\'sidebar.store\', \'Store\')} />');
c = c.replace('<ListItemText primary="POS" />', '<ListItemText primary={t(\'sidebar.pos\', \'POS\')} />');
c = c.replace('<ListItemText primary="Block Factory" />', '<ListItemText primary={t(\'sidebar.blockFactory\', \'Block Factory\')} />');
c = c.replace('<ListItemText primary="Quotation" />', '<ListItemText primary={t(\'sidebar.quotation\', \'Quotation\')} />');
c = c.replace('<ListItemText primary="Invoice" />', '<ListItemText primary={t(\'sidebar.invoice\', \'Invoice\')} />');
c = c.replace('<ListItemText primary="Payment" />', '<ListItemText primary={t(\'sidebar.payment\', \'Payment\')} />');
c = c.replace('<ListItemText primary="Daily Expenses" />', '<ListItemText primary={t(\'sidebar.dailyExpenses\', \'Daily Expenses\')} />');
c = c.replace('<ListItemText primary="Project" />', '<ListItemText primary={t(\'sidebar.project\', \'Project\')} />');
c = c.replace('<ListItemText primary="Purchases Request" />', '<ListItemText primary={t(\'sidebar.purchases\', \'Purchases Request\')} />');
c = c.replace('<ListItemText primary="Maintenance" />', '<ListItemText primary={t(\'sidebar.maintenance\', \'Maintenance\')} />');
c = c.replace('<ListItemText primary="Reports" />', '<ListItemText primary={t(\'sidebar.reports\', \'Reports\')} />');
c = c.replace('<ListItemText primary="More" />', '<ListItemText primary={t(\'sidebar.more\', \'More\')} />');

// 4. Close buttons
c = c.replaceAll('<ListItemText primary="Close" />', '<ListItemText primary={t(\'sidebar.close\', \'Close\')} />');

// 5. Footer with LanguageSelector
const oldFooter = `<div style={{ position: 'absolute', bottom: 8, left: 10, fontSize: '0.7rem', color: 'lightgray', display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <span>Version: {pkg.version}</span>
            {!isInstalledApp && (
            <a 
              href="https://api.globalgate.sarl/download" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: '#90caf9', textDecoration: 'none', fontSize: '0.68rem', fontWeight: 'bold' }}
              title="Download Mobile & Desktop Apps"
            >
              📲 Mobile & PC Apps
            </a>
            )}
          </div>`;

const newFooter = `<div style={{ position: 'absolute', bottom: 8, left: 10, right: 10, fontSize: '0.7rem', color: 'lightgray', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <LanguageSelector variant="sidebar" sx={{ width: '100%' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>Version: {pkg.version}</span>
              {!isInstalledApp && (
              <a 
                href="https://api.globalgate.sarl/download" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: '#90caf9', textDecoration: 'none', fontSize: '0.68rem', fontWeight: 'bold' }}
                title="Download Mobile & Desktop Apps"
              >
                📲 {t('sidebar.mobileApps', 'Apps')}
              </a>
              )}
            </div>
          </div>`;

// Handle possible CRLF or LF differences
const normalize = s => s.replace(/\r\n/g, '\n');
if (normalize(c).includes(normalize(oldFooter))) {
  // Normalize both for replace
  c = normalize(c).replace(normalize(oldFooter), normalize(newFooter));
} else {
  console.log('Footer not directly matched, trying regex replace');
}

fs.writeFileSync('src/js/component/SidebarDash.js', c, 'utf8');
console.log('SidebarDash.js successfully transformed with i18n');
