const fs = require('fs');

function patchSidebar(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Add POSInfo definition if missing
  if (!content.includes('const POSInfo = grantAccess')) {
    content = content.replace(
      'const IPurchaseInfo = grantAccess.filter((row) => row.moduleName === "Item-Purchase" && row.access.readM === true);',
      'const IPurchaseInfo = grantAccess.filter((row) => row.moduleName === "Item-Purchase" && row.access.readM === true);\n  const POSInfo = grantAccess.filter((row) => row.moduleName === "Point-Of-Sell" && row.access.readM === true);'
    );
  }

  // Protect the POS button
  // It looks like: parseInt(onView4) === 2 ? null : ( <ListItemButton sx={{ color: 'gray' }} onClick={() => handleShow(4)}> ... <ListItemText primary="POS" />
  
  // We'll replace <ListItemButton sx={{ color: 'gray' }} onClick={() => handleShow(4)}>
  // with <ListItemButton disabled={!loadingAccess && user.data?.role !== 'CEO' && user.data?.userName !== 'GG' && POSInfo.length === 0} sx={{ color: 'gray' }} onClick={() => handleShow(4)}>
  
  content = content.replace(
    /<ListItemButton sx={{ color: 'gray' }} onClick={\(\) => handleShow\(4\)}>/g,
    `<ListItemButton disabled={!loadingAccess && user.data?.role !== 'CEO' && user.data?.userName !== 'GG' && POSInfo.length === 0} sx={{ color: 'gray' }} onClick={() => handleShow(4)}>`
  );

  fs.writeFileSync(filePath, content);
  console.log(filePath + ' patched');
}

patchSidebar('src/js/component/SidebarDash.js');
patchSidebar('src/js/component/SidebarDashE2.js');
