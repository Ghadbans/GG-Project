const fs = require('fs');
let code = fs.readFileSync('src/js/App.js', 'utf8');

const importStr = "const MaintenanceOrderViewInformation = React.lazy(() => import('./AdminView1/PageView/MaintenanceOrder/MaintenanceOrderViewInformation'))";
const routeStr = "<Route path='MaintenanceOrderViewInformation/:id' element={<MaintenanceOrderViewInformation />}></Route>";

if (!code.includes('MaintenanceOrderViewInformation')) {
  code = code.replace(
    "const MaintenanceOrderUpdate = React.lazy(() => import('./AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate'))",
    "const MaintenanceOrderUpdate = React.lazy(() => import('./AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate'))\n" + importStr
  );

  code = code.replace(
    "<Route path='MaintenanceOrderUpdate/:id' element={<MaintenanceOrderUpdate />}></Route>",
    "<Route path='MaintenanceOrderUpdate/:id' element={<MaintenanceOrderUpdate />}></Route>\n            " + routeStr
  );

  fs.writeFileSync('src/js/App.js', code);
  console.log('Added route to App.js');
} else {
  console.log('Route already added.');
}
