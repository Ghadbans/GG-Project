const fs = require('fs');
let code = fs.readFileSync('src/js/App.js', 'utf8');

const importInsertion = `const MaintenanceViewAdmin = React.lazy(() => import('./AdminView1/MaintenanceViewAdmin'))
const MaintenanceOrderAdmin = React.lazy(() => import('./AdminView1/PageView/MaintenanceOrder/MaintenanceOrderAdmin'))
const MaintenanceOrderUpdate = React.lazy(() => import('./AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate'))
const TechnicianStoreCatalog = React.lazy(() => import('./AdminView1/PageView/MaintenanceOrder/TechnicianStoreCatalog'))`;
code = code.replace(`const MaintenanceViewAdmin = React.lazy(() => import('./AdminView1/MaintenanceViewAdmin'))`, importInsertion);

const routeInsertion = `<Route path='MaintenanceViewAdmin' element={<MaintenanceViewAdmin />}></Route>
              <Route path='MaintenanceOrderAdmin' element={<MaintenanceOrderAdmin />}></Route>
              <Route path='MaintenanceOrderUpdate/:id' element={<MaintenanceOrderUpdate />}></Route>
              <Route path='TechnicianStoreCatalog' element={<TechnicianStoreCatalog />}></Route>`;
code = code.replace(`<Route path='MaintenanceViewAdmin' element={<MaintenanceViewAdmin />}></Route>`, routeInsertion);

fs.writeFileSync('src/js/App.js', code);
