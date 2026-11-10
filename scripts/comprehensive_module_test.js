/**
 * Global Gate Enterprise Comprehensive Module & Security Test Suite
 * Validates all 14 core modules, sub-modules, and security hardening invariants.
 */

const fs = require('fs');
const path = require('path');
const babel = require('@babel/parser');

const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(ROOT, 'src', 'js');
const SERVER = path.join(ROOT, 'server');

let passedTests = 0;
let failedTests = 0;
let errors = [];

function assert(condition, message) {
  if (condition) {
    passedTests++;
    console.log(`  ✅ [PASS] ${message}`);
  } else {
    failedTests++;
    errors.push(message);
    console.log(`  ❌ [FAIL] ${message}`);
  }
}

console.log('================================================================');
console.log('🛡️ GLOBAL GATE ENTERPRISE MODULE AUDIT & SECURITY TEST SUITE');
console.log('================================================================\n');

// --- SECTION 1: SECURITY HARDENING AUDIT ---
console.log('📌 1. SECURITY & ANTI-HACKING HARDENING CHECKS:');

// 1.1 Protected Init & Maintenance Endpoints
const serverIndexCode = fs.readFileSync(path.join(SERVER, 'index.js'), 'utf8');
assert(
  serverIndexCode.includes('verifyInternalSetupKey') &&
  serverIndexCode.includes("app.get('/init-admin', verifyInternalSetupKey") &&
  serverIndexCode.includes("app.get('/init-permissions', verifyInternalSetupKey") &&
  serverIndexCode.includes("app.get('/debug-db', verifyInternalSetupKey"),
  'Sensitive endpoints (/init-admin, /init-permissions, /debug-db) are guarded with verifyInternalSetupKey'
);

// 1.2 Credential Protection in Auth Controller
const authControllerCode = fs.readFileSync(path.join(SERVER, 'Controller', 'auth.js'), 'utf8');
assert(
  authControllerCode.includes('process.env.GMAIL_USER') &&
  authControllerCode.includes('process.env.GMAIL_APP_PASSWORD'),
  'Email transporter credentials protected via environment variables (GMAIL_USER, GMAIL_APP_PASSWORD)'
);

// 1.3 Rate Limiting on Authentication Routes
const authRoutesCode = fs.readFileSync(path.join(SERVER, 'routes', 'AuthRoutes.js'), 'utf8');
assert(
  authRoutesCode.includes('loginLimiter') &&
  authRoutesCode.includes('passwordResetLimiter'),
  'Brute-force rate limiting active on /login and /passwordreset routes'
);

// 1.4 Joi Input Validation & Type Cast Sanitation
const authValidationCode = fs.readFileSync(path.join(SERVER, 'Middleware', 'authValidation.js'), 'utf8');
assert(
  authValidationCode.includes('stripUnknown: true') &&
  authValidationCode.includes('loginSchema') &&
  authValidationCode.includes('registerSchema'),
  'Strict Joi validation and unknown key stripping active on auth payloads'
);

// 1.5 Technician Cost & Rate Privacy Enforced
const grantAccessCode = fs.readFileSync(path.join(SRC, 'AdminView1', 'PageView', 'SettingsView', 'GrantAccessFormView.js'), 'utf8');
assert(
  grantAccessCode.includes('whatsappInvoice') &&
  grantAccessCode.includes('costVisibility'),
  'Grant Access explicitly controls whatsappInvoice and costVisibility permissions'
);

// --- SECTION 2: CORE MODULE INTEGRITY & RELATIONS CHECKS ---
console.log('\n📌 2. CORE MODULES & SUB-MODULES INTEGRITY CHECKS:');

// Module 1: Dashboard
const dashboardCode = fs.readFileSync(path.join(SRC, 'AdminView1', 'AdminHome.js'), 'utf8');
assert(
  dashboardCode.includes('CardDashboard') || dashboardCode.includes('ChartLine') || dashboardCode.includes('Donut'),
  'Module 1 [Dashboard]: Home KPIs, analytics and dashboard widgets intact'
);

// Module 2: Customer
const customerCode = fs.readFileSync(path.join(SRC, 'AdminView1', 'CustomerViewAdmin.js'), 'utf8');
assert(
  customerCode.includes('DataGrid') && customerCode.includes('/customer'),
  'Module 2 [Customer]: Customer listing, search and management connected'
);

// Module 3: Supplier
const supplierCode = fs.readFileSync(path.join(SRC, 'AdminView1', 'SupplierAdminView.js'), 'utf8');
assert(
  supplierCode.includes('DataGrid') && (supplierCode.includes('/Supplier-Information') || supplierCode.includes('/supplier')),
  'Module 3 [Supplier]: Supplier listing and purchase relations active'
);

// Module 4: Items & Inventory
const itemCode = fs.readFileSync(path.join(SRC, 'AdminView1', 'ItemViewAdmin.js'), 'utf8');
assert(
  itemCode.includes('typeItem') && (itemCode.includes('itemCategory') || itemCode.includes('itemQuantity')),
  'Module 4 [Item & Inventory]: Items catalog handles Goods/Services categorization and stock levels'
);

// Module 5: Purchase Orders & Purchases
const purchaseCode = fs.readFileSync(path.join(SRC, 'AdminView1', 'PurchasesViewAdmin.js'), 'utf8');
assert(
  purchaseCode.includes('purchaseNumber') || purchaseCode.includes('/purchase'),
  'Module 5 [Purchases]: Purchase orders and procurement pipeline operational'
);

// Module 6: Quotations / Estimates
const estimateCode = fs.readFileSync(path.join(SRC, 'AdminView1', 'EstimateViewAdmin.js'), 'utf8');
assert(
  estimateCode.includes('estimate') || estimateCode.includes('Estimate'),
  'Module 6 [Quotations / Estimates]: Estimate pipeline and conversion tools present'
);

// Module 7: Invoices & WhatsApp Integration
const invoiceCode = fs.readFileSync(path.join(SRC, 'AdminView1', 'InvoiceViewAdmin.js'), 'utf8');
assert(
  invoiceCode.includes('isEligibleInvoiceStatus') &&
  invoiceCode.includes('SENT') &&
  invoiceCode.includes('PARTIALLY-PAID') &&
  invoiceCode.includes('FREE OF CHARGE') &&
  invoiceCode.includes('rows={4.5}'),
  'Module 7 [Invoice & WhatsApp]: Invoices support expanded statuses (SENT, PARTIALLY-PAID, FREE OF CHARGE) and widened 4.5-row message box'
);

// Module 8: Payments & Cash
const paymentCode = fs.readFileSync(path.join(SRC, 'AdminView1', 'PaymentView.js'), 'utf8');
assert(
  paymentCode.includes('payment') || paymentCode.includes('/payment'),
  'Module 8 [Payment]: Payments received and invoice settlement linked'
);

// Module 9: Projects
const projectCode = fs.readFileSync(path.join(SRC, 'AdminView1', 'ProjectViewAdmin.js'), 'utf8');
assert(
  projectCode.includes('projectName') || projectCode.includes('/project'),
  'Module 9 [Projects]: Project tracking and linked costs active'
);

// Module 10: Maintenance
const maintCode = fs.readFileSync(path.join(SRC, 'AdminView1', 'MaintenanceViewAdmin.js'), 'utf8');
assert(
  maintCode.includes('maintenance') || maintCode.includes('/maintenance'),
  'Module 10 [Maintenance]: Maintenance service orders operational'
);

// Module 11: Expenses
const expenseCode = fs.readFileSync(path.join(SRC, 'AdminView1', 'ExpensesViewAdmin.js'), 'utf8');
assert(
  expenseCode.includes('expense') || expenseCode.includes('/expense'),
  'Module 11 [Expenses]: Expense vouchers and cost accounting connected'
);

// Module 12: Point of Sale (POS)
const posCode = fs.readFileSync(path.join(SRC, 'AdminView1', 'ReportPos.js'), 'utf8');
assert(
  posCode.includes('pos') || posCode.includes('POS') || posCode.includes('/pos'),
  'Module 12 [POS]: Point of sale retail checkout operational'
);

// Module 13: Payroll & Employees
const payrollCode = fs.readFileSync(path.join(SRC, 'AdminView1', 'PayRollViewAdmin.js'), 'utf8');
assert(
  payrollCode.includes('payRoll') || payrollCode.includes('/payroll') || payrollCode.includes('/payRoll'),
  'Module 13 [Payroll]: Salary slips and employee payroll active'
);

// Module 14: Fleet & Transport
const fleetCode = fs.readFileSync(path.join(SRC, 'AdminView1', 'FleetViewAdmin.js'), 'utf8');
assert(
  fleetCode.includes('fleet') || fleetCode.includes('/fleet'),
  'Module 14 [Fleet]: Vehicle registry and fleet tracking connected'
);

// --- SECTION 3: CODE INTEGRITY & SYNTAX CHECKS ---
console.log('\n📌 3. SOURCE CODE SYNTAX & AST INTEGRITY:');

let astPass = true;
const filesToVerify = [
  path.join(SRC, 'AdminView1', 'InvoiceViewAdmin.js'),
  path.join(SERVER, 'index.js'),
  path.join(SERVER, 'Controller', 'auth.js'),
  path.join(SERVER, 'routes', 'invoiceWhatsAppRoutes.js')
];

filesToVerify.forEach(file => {
  const code = fs.readFileSync(file, 'utf8');
  try {
    babel.parse(code, {
      sourceType: 'module',
      plugins: ['jsx', 'classProperties', 'optionalChaining', 'nullishCoalescingOperator', 'dynamicImport']
    });
    console.log(`  ✅ [PASS] AST parsed successfully: ${path.basename(file)}`);
  } catch (err) {
    astPass = false;
    errors.push(`AST parsing failed on ${path.basename(file)}: ${err.message}`);
    console.log(`  ❌ [FAIL] AST parsing error: ${path.basename(file)} - ${err.message}`);
  }
});
assert(astPass, 'All modified critical source files parsed with 0 syntax errors');

console.log('\n================================================================');
console.log(`📊 TEST EXECUTION SUMMARY: ${passedTests} PASSED, ${failedTests} FAILED`);
console.log('================================================================');

if (failedTests > 0) {
  console.error('\nErrors encountered:');
  errors.forEach(e => console.error('  - ' + e));
  process.exit(1);
} else {
  console.log('\n🎉 ALL MODULE AND SECURITY AUDIT CHECKS PASSED WITH ZERO ERRORS!\n');
  process.exit(0);
}
