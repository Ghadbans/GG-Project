const fs = require('fs');

let content = fs.readFileSync('src/js/component/SideMaintenance.js', 'utf8');

// The new button to insert:
const newItemDisplayButton = `
            <ListItemButton disabled={user.data?.role !== 'CEO' && user.data?.userName !== 'GG' && ItemInfo.length === 0} sx={{ color: 'gray' }} component={NavLink} to="/PointOfSale" style={isActive('/PointOfSale') ? { backgroundColor: '#30368a', color: 'white' } : null}>
              <ListItemIcon sx={{ color: 'gray' }} style={isActive('/PointOfSale') ? { backgroundColor: '#30368a', color: 'white' } : null}>
                <ArtTrack />
              </ListItemIcon>
              <ListItemText primary="Item Display" />
            </ListItemButton>
`;

// Insert directly under Supplier button:
// Search for: <ListItemText primary="Supplier" />\n            </ListItemButton>
const searchString = '<ListItemText primary="Supplier" />\r\n            </ListItemButton>';
const unixSearchString = '<ListItemText primary="Supplier" />\n            </ListItemButton>';

if (content.includes(searchString)) {
  content = content.replace(searchString, searchString + '\n' + newItemDisplayButton);
} else if (content.includes(unixSearchString)) {
  content = content.replace(unixSearchString, unixSearchString + '\n' + newItemDisplayButton);
} else {
  console.log('Supplier button not found!');
}

fs.writeFileSync('src/js/component/SideMaintenance.js', content);
console.log('SideMaintenance.js patched');
