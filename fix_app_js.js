const fs = require('fs');
let code = fs.readFileSync('src/js/App.js', 'utf8');

const importStr = "const TechnicianStoreDisplay = React.lazy(() => import('./AdminView1/TechnicianStoreDisplay'))";
const routeStr = "<Route path='TechnicianStoreDisplay' element={<TechnicianStoreDisplay />}></Route>";

code = code.replace(
  "const StoreItemDisplay = React.lazy(() => import('./AdminView1/StoreItemDisplay'))",
  "const StoreItemDisplay = React.lazy(() => import('./AdminView1/StoreItemDisplay'))\n" + importStr
);

code = code.replace(
  "<Route path='StoreItemDisplay' element={<StoreItemDisplay />}></Route>",
  "<Route path='StoreItemDisplay' element={<StoreItemDisplay />}></Route>\n            " + routeStr
);

fs.writeFileSync('src/js/App.js', code);
console.log('Added route to App.js');
