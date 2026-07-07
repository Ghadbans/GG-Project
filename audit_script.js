const fs = require('fs');
const path = require('path');

const modelsDir = path.join(__dirname, 'model');
const routesFile = path.join(__dirname, 'routes', 'Routes.js');

const report = {
  indexes: [],
  getRoutes: [],
  postRoutes: []
};

// 1. Check Models
const modelFiles = fs.readdirSync(modelsDir).filter(f => f.endsWith('.js'));
for (const file of modelFiles) {
  const content = fs.readFileSync(path.join(modelsDir, file), 'utf8');
  const legacyUnique = [...content.matchAll(/([a-zA-Z0-9_]+):\s*\{\s*[^}]*unique:\s*true/g)];
  const compoundUnique = [...content.matchAll(/\.index\(\s*\{\s*branchId:\s*1,\s*([a-zA-Z0-9_]+):\s*1\s*\}\s*,\s*\{\s*unique:\s*true\s*\}/g)];
  
  if (legacyUnique.length > 0 || compoundUnique.length > 0) {
    report.indexes.push({
      file,
      legacy: legacyUnique.map(m => m[1]),
      compound: compoundUnique.map(m => m[1])
    });
  }
}

// 2. Check Routes
const routesContent = fs.readFileSync(routesFile, 'utf8');
const getRoutes = [...routesContent.matchAll(/Route\.route\("([^"]+)"\)(?:[^\.]*)\.get\(([\s\S]*?)(?=\nRoute\.route|\nmodule\.exports|$)/g)];

for (const match of getRoutes) {
  const routePath = match[1];
  const body = match[2];
  
  const hasBranchId = body.includes('branchId');
  const hasQueryBranchId = body.includes('req.query.branchId') || body.includes('req.params.branchId');
  
  report.getRoutes.push({
    path: routePath,
    hasBranchId,
    hasQueryBranchId,
    length: body.split('\n').length
  });
}

const postRoutes = [...routesContent.matchAll(/Route\.route\("([^"]+)"\)(?:[^\.]*)\.post\(([\s\S]*?)(?=\nRoute\.route|\n\/\/|\nmodule\.exports|$)/g)];

for (const match of postRoutes) {
  const routePath = match[1];
  const body = match[2];
  
  const hasBranchIdAssign = body.includes('branchId');
  const hasFallback = body.includes('req.body.') && body.includes('if (!req.body');
  
  report.postRoutes.push({
    path: routePath,
    hasBranchIdAssign,
    hasFallback,
    length: body.split('\n').length
  });
}

fs.writeFileSync('audit_raw.json', JSON.stringify(report, null, 2), 'utf8');
console.log('Audit generated in audit_raw.json');
