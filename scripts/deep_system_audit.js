/**
 * Global Gate Enterprise Comprehensive Deep System Audit (v3.6.7)
 * Scans all frontend components, routes, backend APIs, and utility engines.
 */

const fs = require('fs');
const path = require('path');
const babel = require('@babel/parser');
const traverse = require('@babel/traverse').default;

const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(ROOT, 'src', 'js');
const SERVER = path.join(ROOT, 'server');

let totalFilesScanned = 0;
let issues = [];
let warnings = [];
let passedChecks = [];

function walk(dir, extFilter = ['.js', '.jsx']) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (!full.includes('node_modules') && !full.includes('.git') && !full.includes('dist') && !full.includes('dist_web') && !full.includes('build')) {
        results = results.concat(walk(full, extFilter));
      }
    } else if (extFilter.some(ext => file.endsWith(ext))) {
      results.push(full);
    }
  }
  return results;
}

console.log('================================================================');
console.log('🔍 GLOBAL GATE ENTERPRISE DEEP AUDIT & TEST SUITE (v3.6.7)');
console.log('================================================================\n');

// 1. Gather all files
const frontendFiles = walk(SRC);
const backendFiles = walk(SERVER);
totalFilesScanned = frontendFiles.length + backendFiles.length;
console.log(`📁 Found ${frontendFiles.length} frontend files and ${backendFiles.length} backend files (${totalFilesScanned} total).\n`);

// CHECK 1: AST Parsing & Syntax Verification
console.log('--- CHECK 1: Syntax & AST Parsing ---');
let parseErrors = 0;
[...frontendFiles, ...backendFiles].forEach(file => {
  const code = fs.readFileSync(file, 'utf8');
  try {
    babel.parse(code, {
      sourceType: 'module',
      plugins: ['jsx', 'classProperties', 'optionalChaining', 'nullishCoalescingOperator', 'dynamicImport']
    });
  } catch (err) {
    parseErrors++;
    issues.push({
      type: 'SYNTAX_ERROR',
      file: path.relative(ROOT, file),
      detail: err.message
    });
  }
});
if (parseErrors === 0) {
  passedChecks.push(`All ${totalFilesScanned} source files successfully parsed with zero syntax errors.`);
  console.log(`✅ AST Check Passed: 0 syntax errors across ${totalFilesScanned} files.`);
} else {
  console.log(`❌ AST Check Failed with ${parseErrors} error(s).`);
}

// CHECK 2: Known White Screen Triggers & Undeclared References
console.log('\n--- CHECK 2: Reference & Runtime Crash Scanners ---');
// Scan for isDesktopApp, undefined functions, mismatched event handlers
frontendFiles.forEach(file => {
  const code = fs.readFileSync(file, 'utf8');
  const relPath = path.relative(ROOT, file);

  // Check for isDesktopApp without declaration
  if (code.includes('isDesktopApp') && !code.includes('const isDesktopApp') && !code.includes('let isDesktopApp') && !code.includes('var isDesktopApp') && !code.includes('import') && !code.includes('function isDesktopApp')) {
    issues.push({
      type: 'UNDECLARED_REFERENCE',
      file: relPath,
      detail: 'Uses isDesktopApp without declaration (causes ReferenceError white screen)'
    });
  }

  // Check for mismatched menu click handlers (e.g., onClick={handleClickMenu} when only handleClick defined)
  if (code.includes('onClick={handleClickMenu}') && !code.includes('handleClickMenu =') && !code.includes('function handleClickMenu')) {
    issues.push({
      type: 'EVENT_HANDLER_MISMATCH',
      file: relPath,
      detail: 'onClick={handleClickMenu} used but handleClickMenu is not defined in component'
    });
  }

  // Check for raw parse errors
  if (code.includes('parseFloat()') || code.includes('parseFloat( )')) {
    issues.push({
      type: 'INVALID_MATH_PARSE',
      file: relPath,
      detail: 'Empty parseFloat() call detected'
    });
  }
  if (code.includes('parseInt()') || code.includes('parseInt( )')) {
    issues.push({
      type: 'INVALID_MATH_PARSE',
      file: relPath,
      detail: 'Empty parseInt() call detected'
    });
  }
});

// CHECK 3: DataGrid Pagination & Server Filtering Compliance
console.log('\n--- CHECK 3: DataGrid Server Pagination & Filter Compliance ---');
frontendFiles.forEach(file => {
  const code = fs.readFileSync(file, 'utf8');
  const relPath = path.relative(ROOT, file);

  if (code.includes('<DataGrid') || code.includes('<DataGridPro') || code.includes('<DataGridPremium')) {
    // If paginationMode="server" is used, filterMode should also be "server"
    if (code.includes('paginationMode="server"') && !code.includes('filterMode="server"')) {
      warnings.push({
        type: 'DATAGRID_CONFIG',
        file: relPath,
        detail: 'DataGrid has paginationMode="server" but missing filterMode="server" (may drop filtered records)'
      });
    }

    // Check for bad Pagination onChange: onChange={setPage} instead of onChange={(e, val) => setPage(val - 1)}
    if (code.includes('onChange={setPage}') || code.includes('onChange={handleChangePage}')) {
      const match = code.match(/<Pagination[^>]*onChange=\{([^}]+)\}/);
      if (match && (match[1] === 'setPage' || match[1] === 'handleChangePage')) {
        warnings.push({
          type: 'PAGINATION_EVENT',
          file: relPath,
          detail: `Pagination onChange passes event object directly: ${match[0]}`
        });
      }
    }
  }
});

// CHECK 4: Section Divider & Custom "EMPTY" Box Invariants
console.log('\n--- CHECK 4: Section Divider & Custom Item Preservation Invariants ---');
frontendFiles.forEach(file => {
  const code = fs.readFileSync(file, 'utf8');
  const relPath = path.relative(ROOT, file);

  // Flag dangerous "item.newDescription !== undefined" which hides normal items
  if (code.includes('Item.newDescription !== undefined') || code.includes('item.newDescription !== undefined') || code.includes('it.newDescription !== undefined')) {
    issues.push({
      type: 'BRITTLE_DIVIDER_CHECK',
      file: relPath,
      detail: 'Uses dangerous !== undefined check on newDescription which causes items to disappear'
    });
  }

  // Flag case-sensitive "=== 'empty'" on itemName
  if (code.includes("itemName === 'empty'") || code.includes("itemName.itemName === 'empty'")) {
    warnings.push({
      type: 'CASE_SENSITIVE_EMPTY_CHECK',
      file: relPath,
      detail: "Uses exact lowercase === 'empty' check instead of case-insensitive check"
    });
  }
});

// CHECK 5: Caret & Cursor Preservation in SmartTextInput & Uppercase Inputs
console.log('\n--- CHECK 5: Caret & Cursor Position Preservation ---');
const smartTextInputCode = fs.readFileSync(path.join(SRC, 'component', 'SmartTextInput.js'), 'utf8');
if (smartTextInputCode.includes('useLayoutEffect') && smartTextInputCode.includes('setSelectionRange') && smartTextInputCode.includes('selectionRef')) {
  passedChecks.push('SmartTextInput has synchronous useLayoutEffect caret restoration and selectionRef.');
  console.log('✅ SmartTextInput caret preservation confirmed.');
} else {
  issues.push({
    type: 'CARET_PRESERVATION_MISSING',
    file: 'src/js/component/SmartTextInput.js',
    detail: 'SmartTextInput missing useLayoutEffect / setSelectionRange'
  });
}

// CHECK 6: Backend Route Collisions & Shadowing
console.log('\n--- CHECK 6: Backend Route Collision & Duplicate Inspection ---');
const routesPath = path.join(SERVER, 'routes', 'Routes.js');
if (fs.existsSync(routesPath)) {
  const routesCode = fs.readFileSync(routesPath, 'utf8');
  const routeRegex = /(router|app)\.(get|post|put|delete|patch)\(\s*['"`]([^'"`]+)['"`]/g;
  let definedRoutes = {};
  let match;
  while ((match = routeRegex.exec(routesCode)) !== null) {
    const method = match[2].toUpperCase();
    const endpoint = match[3];
    const key = `${method} ${endpoint}`;
    if (definedRoutes[key]) {
      definedRoutes[key]++;
      warnings.push({
        type: 'DUPLICATE_BACKEND_ROUTE',
        file: 'server/routes/Routes.js',
        detail: `Route ${key} is defined ${definedRoutes[key]} times (Express only uses the first matching definition)`
      });
    } else {
      definedRoutes[key] = 1;
    }
  }
  console.log(`✅ Scanned ${Object.keys(definedRoutes).length} unique backend route definitions in Routes.js.`);
}

// CHECK 7: Version Number Consistency Across All Configs
console.log('\n--- CHECK 7: Version Number Consistency Across Multi-Platform Configs ---');
const pkgRoot = JSON.parse(fs.readFileSync(path.join(ROOT, 'package.json'), 'utf8'));
const pkgServer = JSON.parse(fs.readFileSync(path.join(SERVER, 'package.json'), 'utf8'));
const serverIndexCode = fs.readFileSync(path.join(SERVER, 'index.js'), 'utf8');
const downloadRoutesCode = fs.readFileSync(path.join(SERVER, 'routes', 'downloadRoutes.js'), 'utf8');

const targetVersion = pkgRoot.version;
console.log(`Target Version: ${targetVersion}`);

if (pkgServer.version !== targetVersion) {
  issues.push({
    type: 'VERSION_MISMATCH',
    file: 'server/package.json',
    detail: `server/package.json has version ${pkgServer.version}, expected ${targetVersion}`
  });
}
if (!serverIndexCode.includes(`version: '${targetVersion}'`)) {
  issues.push({
    type: 'VERSION_MISMATCH',
    file: 'server/index.js',
    detail: `server/index.js /status endpoint does not match ${targetVersion}`
  });
}
if (!downloadRoutesCode.includes(`APP_VERSION = '${targetVersion}'`)) {
  issues.push({
    type: 'VERSION_MISMATCH',
    file: 'server/routes/downloadRoutes.js',
    detail: `server/routes/downloadRoutes.js APP_VERSION does not match ${targetVersion}`
  });
}

// Check if binaries match version
const exePath = path.join(SERVER, 'public', 'downloads', `GlobalGate-v${targetVersion}.exe`);
const apkPath = path.join(SERVER, 'public', 'downloads', `GlobalGate-v${targetVersion}.apk`);

if (fs.existsSync(exePath)) {
  const stat = fs.statSync(exePath);
  passedChecks.push(`Windows executable GlobalGate-v${targetVersion}.exe verified (${(stat.size / 1024 / 1024).toFixed(2)} MB).`);
} else {
  issues.push({
    type: 'MISSING_BINARY',
    file: path.relative(ROOT, exePath),
    detail: `Target Windows binary GlobalGate-v${targetVersion}.exe does not exist in downloads`
  });
}

if (fs.existsSync(apkPath)) {
  const stat = fs.statSync(apkPath);
  passedChecks.push(`Android APK GlobalGate-v${targetVersion}.apk verified (${(stat.size / 1024 / 1024).toFixed(2)} MB).`);
} else {
  issues.push({
    type: 'MISSING_BINARY',
    file: path.relative(ROOT, apkPath),
    detail: `Target Android APK GlobalGate-v${targetVersion}.apk does not exist in downloads`
  });
}

// CHECK 8: Client-Side Filter Unchecked Property Access (White Screen Risk)
console.log('\n--- CHECK 8: Unchecked Null-Property Invocations in Filters ---');
frontendFiles.forEach(file => {
  const code = fs.readFileSync(file, 'utf8');
  const relPath = path.relative(ROOT, file);

  // Look for unsafe row.xyz.toLowerCase() without null check in .filter()
  const unsafePatterns = [
    /\.filter\([^)]*\b(row|item|val)\.[a-zA-Z0-9_]+\.toLowerCase\(\)/g,
    /\.filter\([^)]*\b(row|item|val)\.[a-zA-Z0-9_]+\.toString\(\)/g
  ];

  unsafePatterns.forEach(pattern => {
    let match;
    while ((match = pattern.exec(code)) !== null) {
      // Check if guarded with optional chaining ?. or conditional
      if (!match[0].includes('?.') && !match[0].includes(' && ')) {
        warnings.push({
          type: 'POTENTIAL_NULL_PROPERTY_ACCESS',
          file: relPath,
          detail: `Potentially unguarded string method in filter: ${match[0].slice(0, 80)}`
        });
      }
    }
  });
});

console.log('\n================================================================');
console.log('📊 AUDIT RESULTS SUMMARY');
console.log('================================================================');
console.log(`Passed Checks: ${passedChecks.length}`);
console.log(`Critical Issues: ${issues.length}`);
console.log(`Warnings / Advisory Notes: ${warnings.length}\n`);

if (issues.length > 0) {
  console.log('❌ CRITICAL ISSUES FOUND:');
  issues.forEach((iss, i) => {
    console.log(`  ${i + 1}. [${iss.type}] in ${iss.file}:`);
    console.log(`     ${iss.detail}`);
  });
} else {
  console.log('🎉 ZERO CRITICAL ISSUES! System is robust, safe, and ready.');
}

if (warnings.length > 0) {
  console.log('\n⚠️ ADVISORY / WARNINGS:');
  warnings.forEach((warn, i) => {
    console.log(`  ${i + 1}. [${warn.type}] in ${warn.file}:`);
    console.log(`     ${warn.detail}`);
  });
}

// Save detailed report
const reportData = {
  version: targetVersion,
  timestamp: new Date().toISOString(),
  totalFilesScanned,
  passedChecks,
  criticalIssuesCount: issues.length,
  criticalIssues: issues,
  warningsCount: warnings.length,
  warnings
};

fs.writeFileSync(path.join(ROOT, 'audit_report.json'), JSON.stringify(reportData, null, 2), 'utf8');
console.log('\nSaved full structured report to audit_report.json');
