const fs = require('fs');
const file = 'd:/GG/GG-Backend-Repo/routes/Routes.js';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/estimationSchema\.find\(([^)]*)\)\.sort\(\{\s*(createdAt|_id)\s*:\s*-1\s*\}\)/g, 'estimationSchema.find($1).sort({ estimateDate: -1 })');
content = content.replace(/itemPurchaseSchema\.find\(([^)]*)\)\.sort\(\{\s*(createdAt|_id)\s*:\s*-1\s*\}\)/g, 'itemPurchaseSchema.find($1).sort({ itemPurchaseDate: -1 })');
content = content.replace(/itemOutSchema\.find\(([^)]*)\)\.sort\(\{\s*(createdAt|_id)\s*:\s*-1\s*\}\)/g, 'itemOutSchema.find($1).sort({ itemOutDate: -1 })');
content = content.replace(/itemReturnSchema\.find\(([^)]*)\)\.sort\(\{\s*(createdAt|_id)\s*:\s*-1\s*\}\)/g, 'itemReturnSchema.find($1).sort({ itemReturnDate: -1 })');

fs.writeFileSync(file, content);
