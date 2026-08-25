const fs = require('fs');
let content = fs.readFileSync('src/js/component/SideMaintenance.js', 'utf8');

const newItemDisplayButton = `
            <ListItemButton disabled={user.data?.role !== 'CEO' && user.data?.userName !== 'GG' && ItemInfo.length === 0} sx={{ color: 'gray' }} component={NavLink} to="/PointOfSale" style={isActive('/PointOfSale') ? { backgroundColor: '#30368a', color: 'white' } : null}>
              <ListItemIcon sx={{ color: 'gray' }} style={isActive('/PointOfSale') ? { backgroundColor: '#30368a', color: 'white' } : null}>
                <ArtTrack />
              </ListItemIcon>
              <ListItemText primary="Item Display" />
            </ListItemButton>
`;

content = content.replace(
  /<ListItemText primary="Supplier" \/>\s*<\/ListItemButton>/,
  '<ListItemText primary="Supplier" />\n            </ListItemButton>\n' + newItemDisplayButton
);

// We also need to import ArtTrack if it's not imported in SideMaintenance.js
if (!content.includes('ArtTrack')) {
  content = content.replace(
    "import { AccountBox,",
    "import { AccountBox, ArtTrack,"
  );
}

fs.writeFileSync('src/js/component/SideMaintenance.js', content);
console.log('SideMaintenance patched');
