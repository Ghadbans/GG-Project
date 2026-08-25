const fs = require('fs');
let content = fs.readFileSync('src/js/App.js', 'utf8');

if (!content.includes('const StoreItemDisplay = React.lazy')) {
  content = content.replace(
    "const PointOfSale = React.lazy(() => import('./AdminView1/PointOfSale'))",
    "const PointOfSale = React.lazy(() => import('./AdminView1/PointOfSale'))\nconst StoreItemDisplay = React.lazy(() => import('./AdminView1/StoreItemDisplay'))"
  );
}

if (!content.includes('<Route path=\'StoreItemDisplay\'')) {
  content = content.replace(
    "<Route path='PointOfSale' element={<PointOfSale />}></Route>",
    "<Route path='PointOfSale' element={<PointOfSale />}></Route>\n            <Route path='StoreItemDisplay' element={<StoreItemDisplay />}></Route>"
  );
}

fs.writeFileSync('src/js/App.js', content);
