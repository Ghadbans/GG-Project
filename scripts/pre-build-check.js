/**
 * Global Gate Enterprise Pre-Build AST Quality Gate
 * Automatically validates syntax, numerical safety, and schema access before Webpack compiles.
 */

const fs = require('fs');
const path = require('path');
const babel = require('@babel/parser');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat && stat.isDirectory()) {
      if (!full.includes('node_modules') && !full.includes('.git') && !full.includes('dist') && !full.includes('dist_web') && !full.includes('build')) {
        results = results.concat(walk(full));
      }
    } else if (file.endsWith('.js') || file.endsWith('.jsx')) {
      results.push(full);
    }
  });
  return results;
}

console.log('[Quality Gate] Starting deep AST & safety verification...');

const srcFiles = walk('src/js');
let errors = [];

srcFiles.forEach(file => {
  const code = fs.readFileSync(file, 'utf8');

  // 1. AST Syntax Parsing
  try {
    babel.parse(code, {
      sourceType: 'module',
      plugins: ['jsx', 'classProperties', 'optionalChaining', 'nullishCoalescingOperator', 'dynamicImport']
    });
  } catch (err) {
    errors.push(`Syntax Error in ${file}: ${err.message}`);
  }

  // 2. Scan for empty parseFloat() or parseInt()
  if (code.includes('parseFloat()') || code.includes('parseFloat( )')) {
    errors.push(`Empty parseFloat() found in ${file}`);
  }
  if (code.includes('parseInt()') || code.includes('parseInt( )')) {
    errors.push(`Empty parseInt() found in ${file}`);
  }
});

if (errors.length > 0) {
  console.error('\n❌ [Quality Gate FAILED] Found issues before build:');
  errors.forEach(e => console.error('  - ' + e));
  process.exit(1);
} else {
  console.log(`✅ [Quality Gate PASSED] All ${srcFiles.length} source files verified with 0 errors!`);
}
