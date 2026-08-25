const fs = require('fs');

let content = fs.readFileSync('src/js/AdminView1/StoreItemDisplay.js', 'utf8');

// 1. Swap SideShop with SideMaintenance
content = content.replace(
  "import SideShop from '../component/SideShop';",
  "import SideMaintenance from '../component/SideMaintenance';"
);
content = content.replace(/<SideShop( [a-zA-Z={}'"]*)?\/>/g, '<SideMaintenance />');

// 2. Remove Shopping Cart Icon from App Bar
content = content.replace(
  /<IconButton color="inherit" onClick=\{handleOpenCart\}>\s*<Badge badgeContent=\{cart\.length\} color="secondary">\s*<ShoppingCartIcon \/>\s*<\/Badge>\s*<\/IconButton>/g,
  ''
);

// 3. Remove Add to Cart button
content = content.replace(
  /<Button variant="contained" color="primary" onClick=\{\(\) => handleAddToCart\(row\)\}>\s*Add to Cart\s*<\/Button>/g,
  '<div></div>'
);

// 4. Change Title to Store Item Display
content = content.replace(
  /<Typography\s+component="h1"\s+variant="h6"\s+color="inherit"\s+noWrap\s+sx=\{\{\s*flexGrow:\s*1\s*\}\}\s*>\s*POS Display\s*<\/Typography>/g,
  '<Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>\n                  Store Item Display\n                </Typography>'
);

fs.writeFileSync('src/js/AdminView1/StoreItemDisplay.js', content);
console.log('StoreItemDisplay.js successfully modified!');
