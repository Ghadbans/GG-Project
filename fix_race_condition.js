const fs = require('fs');

function fix(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(
    /disabled=\{\!loadingAccess && (user\.data\?\.role !== 'CEO' && user\.data\?\.userName !== 'GG' && [a-zA-Z0-9_]+\.length === 0)\}/g,
    'disabled={loadingAccess || ($1)}'
  );
  fs.writeFileSync(filePath, content);
  console.log(filePath + ' fixed fail-open race condition.');
}

fix('src/js/component/SidebarDash.js');
fix('src/js/component/SidebarDashE2.js');
