const fs = require('fs');
const newLines = fs.readFileSync('server/routes/Routes.js', 'utf8').split('\n');
const oldLines = fs.readFileSync('temp_routes.js', 'utf8').split('\n');

const routes = ['/estimation', '/cash', '/expense', '/maintenance'];

for (const route of routes) {
  const newIdx = newLines.findIndex(l => l.includes(`Route.route("${route}"`));
  const oldIdx = oldLines.findIndex(l => l.includes(`Route.route("${route}"`));
  
  console.log(`\n=== ROUTE: ${route} ===`);
  if (oldIdx !== -1) {
    console.log("OLD:");
    console.log(oldLines.slice(oldIdx, oldIdx + 15).join('\n'));
  }
  if (newIdx !== -1) {
    console.log("NEW:");
    console.log(newLines.slice(newIdx, newIdx + 15).join('\n'));
  }
}
