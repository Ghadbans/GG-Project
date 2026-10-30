// Automated Verification Test for Language Quality Suite & Mobile Navigation Integrity
const assert = require('assert');
const fs = require('fs');
const path = require('path');

console.log('🧪 Starting Language Quality Suite & Navigation Integrity Tests...\n');

// 1. Text Assist Tests
const {
  COMMON_PRESETS,
  TYPO_DICTIONARY,
  normalizeSpaces,
  correctTypos,
  toSentenceCase,
  toTitleCase,
  toUpperCaseCode,
  polishText
} = require('../src/js/utils/textAssistUtils.js');

// Test Presets
assert(Array.isArray(COMMON_PRESETS.defects) && COMMON_PRESETS.defects.length > 5, 'Presets.defects must be array');
assert(Array.isArray(COMMON_PRESETS.appliances) && COMMON_PRESETS.appliances.length > 5, 'Presets.appliances must be array');
assert(Array.isArray(COMMON_PRESETS.actions) && COMMON_PRESETS.actions.length > 5, 'Presets.actions must be array');
assert(Array.isArray(COMMON_PRESETS.subjects) && COMMON_PRESETS.subjects.length > 5, 'Presets.subjects must be array');
console.log('✅ COMMON_PRESETS validated (defects, appliances, actions, subjects).');

// Test Typo Dictionary
assert(Array.isArray(TYPO_DICTIONARY) && TYPO_DICTIONARY.length > 20, 'TYPO_DICTIONARY must contain rules');
TYPO_DICTIONARY.forEach((rule, idx) => {
  assert(rule.pattern instanceof RegExp, `Rule ${idx} pattern must be RegExp`);
  assert(typeof rule.replacement === 'string' && rule.replacement.length > 0, `Rule ${idx} replacement must be non-empty string`);
});
console.log(`✅ TYPO_DICTIONARY validated with ${TYPO_DICTIONARY.length} active correction rules.`);

// Test Normalization
assert.strictEqual(normalizeSpaces('   hello    world   '), 'hello world');
assert.strictEqual(normalizeSpaces('no\u00a0break\u00a0space'), 'no break space');
console.log('✅ normalizeSpaces() passed.');

// Test Typo Correction
assert.strictEqual(correctTypos('not charch'), 'Not Charging');
assert.strictEqual(correctTypos('pas de courant'), 'No Power');
assert.strictEqual(correctTypos('four elec'), 'Electric Oven');
assert.strictEqual(correctTypos('pompe a eau'), 'Water Pump');
assert.strictEqual(correctTypos('moteur motuer'), 'Motor Motor');
console.log('✅ correctTypos() passed for bilingual & technical terms.');

// Test Sentence Case
assert.strictEqual(toSentenceCase('motor is overheating. please check capacitor.'), 'Motor is overheating. Please check capacitor.');
console.log('✅ toSentenceCase() passed.');

// Test Title Case
assert.strictEqual(toTitleCase('john doe junior transport'), 'John Doe Junior Transport');
console.log('✅ toTitleCase() passed.');

// Test Uppercase Code
assert.strictEqual(toUpperCaseCode('gg-sn1234-ab'), 'GG-SN1234-AB');
console.log('✅ toUpperCaseCode() passed.');

// Test polishText Master Function
assert.strictEqual(polishText('  four elec   avec  surchauffe .  condo a changer '), 'Electric Oven avec Overheating. Capacitor a changer');
assert.strictEqual(polishText('ahmed ali transport', 'title'), 'Ahmed Ali Transport');
assert.strictEqual(polishText('xyz-987-a', 'upper'), 'XYZ-987-A');
console.log('✅ polishText() passed master integration tests.');

// 2. Navigation & Route Audit
const filesToCheck = [
  { file: 'src/js/AdminView1/PageView/MaintenanceView/MaintenanceUpdateView.js', mobileTarget: '/MaintenanceViewAdmin' },
  { file: 'src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate.js', mobileTarget: '/MaintenanceOrderAdmin' },
  { file: 'src/js/AdminView1/PageView/InvoiceView/InvoiceFormUpdate.js', mobileTarget: '/InvoiceViewAdmin' },
  { file: 'src/js/AdminView1/PageView/EstimateView/EstimateInvoiceFormUpdate.js', mobileTarget: '/EstimateViewAdmin' },
  { file: 'src/js/AdminView1/PageView/Payment/PaymentInformationUpdate.js', mobileTarget: '/PaymentView' },
  { file: 'src/js/AdminView1/PageView/MaintenanceView/MaintenanceFormView.js', mobileTarget: '/MaintenanceViewAdmin' },
  { file: 'src/js/AdminView1/PageView/InvoiceView/InvoiceForm.js', mobileTarget: '/InvoiceViewAdmin' },
  { file: 'src/js/AdminView1/PageView/EstimateView/EstimateInvoiceForm.js', mobileTarget: '/EstimateViewAdmin' },
  { file: 'src/js/AdminView1/PageView/CustomerVIew/CustomerForm.js', mobileTarget: '/CustomerViewAdmin' },
  { file: 'src/js/AdminView1/PageView/CustomerVIew/CustomerFormUpdate.js', mobileTarget: '/CustomerViewAdmin' },
  { file: 'src/js/AdminView1/PageView/DailyExpenses/DailyExpenseUpdate.js', mobileTarget: '/DailyExpenses' },
  { file: 'src/js/AdminView1/PageView/ItemView/ItemFormUpdate.js', mobileTarget: '/ItemViewAdmin' },
  { file: 'src/js/AdminView1/PageView/ProjectView/ProjectUpdateView.js', mobileTarget: '/ProjectViewAdmin' },
  { file: 'src/js/AdminView1/PageView/Supplier/SupplierFormUpdate.js', mobileTarget: '/SupplierAdminView' },
  { file: 'src/js/AdminView1/PageView/EmployeeView/EmployeeUpdateView.js', mobileTarget: '/EmployeeViewAdminAll' },
];

filesToCheck.forEach(({ file, mobileTarget }) => {
  const content = fs.readFileSync(path.resolve(__dirname, '..', file), 'utf8');
  assert(content.includes('isNativeMobile'), `${file} must check isNativeMobile`);
  assert(content.includes(mobileTarget), `${file} must contain navigation target ${mobileTarget}`);
  console.log(`✅ ${path.basename(file)} contains valid mobile auto-close navigation to ${mobileTarget}`);
});

console.log('\n🎉 ALL TESTS PASSED! System integrity confirmed for v3.5.93 release.');
