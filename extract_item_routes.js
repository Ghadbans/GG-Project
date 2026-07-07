const fs = require('fs');
const content = fs.readFileSync('routes/Routes.js', 'utf8');

function extractRoute(routeName) {
    const marker = `Route.route("${routeName}"`;
    const startIdx = content.indexOf(marker);
    if (startIdx === -1) {
        console.log(`Route ${routeName} not found`);
        return;
    }
    const nextRouteIdx = content.indexOf('\nRoute.route(', startIdx + 10);
    const endIdx = nextRouteIdx !== -1 ? nextRouteIdx : startIdx + 1000;
    console.log(`=== ${routeName} ===`);
    console.log(content.slice(startIdx, endIdx));
    console.log('\n');
}

extractRoute('/item');
extractRoute('/item-Information');
extractRoute('/item-shop');
