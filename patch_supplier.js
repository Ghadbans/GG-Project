const fs = require('fs');

let content = fs.readFileSync('src/js/component/SideMaintenance.js', 'utf8');

if (!content.includes('const SupplierInfo = grantAccess.filter')) {
  content = content.replace(
    'const ItemInfo = grantAccess.filter((row) => row.moduleName === "Item" && row.access.readM === true);',
    'const ItemInfo = grantAccess.filter((row) => row.moduleName === "Item" && row.access.readM === true);\n  const SupplierInfo = grantAccess.filter((row) => row.moduleName === "Supplier" && row.access.readM === true);'
  );
}

// Ensure the regex properly finds the Supplier button specifically.
content = content.replace(
  /<ListItemButton disabled=\{user\.data\?\.role !== 'CEO' && user\.data\?\.userName !== 'GG' && ItemInfo\.length === 0\} sx=\{\{\s*color:\s*'gray'\s*\}\} component=\{NavLink\} to="\/SupplierAdminView"/g,
  '<ListItemButton disabled={user.data?.role !== \'CEO\' && user.data?.userName !== \'GG\' && SupplierInfo.length === 0} sx={{ color: \'gray\' }} component={NavLink} to="/SupplierAdminView"'
);

fs.writeFileSync('src/js/component/SideMaintenance.js', content);
console.log('Supplier patched');
