const fs = require('fs');
let content = fs.readFileSync('src/js/component/SideShop.js', 'utf8');

if (!content.includes('const POSInfo = grantAccess')) {
  content = content.replace(
    'const IPurchaseInfo = grantAccess.filter((row) => row.moduleName === "Item-Purchase" && row.access.readM === true);',
    'const IPurchaseInfo = grantAccess.filter((row) => row.moduleName === "Item-Purchase" && row.access.readM === true);\n  const POSInfo = grantAccess.filter((row) => row.moduleName === "Point-Of-Sell" && row.access.readM === true);'
  );
}

// In SideShop, the CEO bypass is: user.data?.role !== 'CEO' && user.data?.userName !== 'GG'
const disabledAttr = `disabled={user.data?.role !== 'CEO' && user.data?.userName !== 'GG' && POSInfo.length === 0}`;

content = content.replace(
  /<ListItemButton sx={{ color: 'gray' }} component={NavLink} to="\/PointOfSale"/g,
  `<ListItemButton ${disabledAttr} sx={{ color: 'gray' }} component={NavLink} to="/PointOfSale"`
);

content = content.replace(
  /<ListItemButton sx={{ color: 'gray' }} component={NavLink} to="\/SellShopInvoiceView"/g,
  `<ListItemButton ${disabledAttr} sx={{ color: 'gray' }} component={NavLink} to="/SellShopInvoiceView"`
);

content = content.replace(
  /<ListItemButton sx={{ color: 'gray' }} component={NavLink} to="\/ReportPos"/g,
  `<ListItemButton ${disabledAttr} sx={{ color: 'gray' }} component={NavLink} to="/ReportPos"`
);

// Don't forget the Main button in SideShop:
content = content.replace(
  /<ListItemButton sx={{ color: 'gray' }} onClick={\(\) => handleShow\(2\)}>/g,
  `<ListItemButton ${disabledAttr} sx={{ color: 'gray' }} onClick={() => handleShow(2)}>`
);

fs.writeFileSync('src/js/component/SideShop.js', content);
console.log('SideShop.js patched');
