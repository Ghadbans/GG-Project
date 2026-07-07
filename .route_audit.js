const fs = require('fs');
const path = require('path');
const content = fs.readFileSync(path.join(__dirname,'routes','Routes.js'),'utf8');
const lines = content.split(/\r?\n/);
let route = null;
let collecting = false;
let braceDepth = 0;
let func = [];
const issues=[];
for(let i=0;i<lines.length;i++){
  const line=lines[i];
  const routeMatch=line.match(/Route\.route\("([^"]+)"\)/);
  if(routeMatch){ route=routeMatch[1]; }
  if(route && /\.get\(/.test(line) && /async \(req, res/.test(line)){
    collecting=true;
    braceDepth=(line.match(/\{/g)||[]).length - (line.match(/\}/g)||[]).length;
    func=[line];
    continue;
  }
  if(collecting){
    func.push(line);
    braceDepth += (line.match(/\{/g)||[]).length;
    braceDepth -= (line.match(/\}/g)||[]).length;
    if(braceDepth===0){
      const block=func.join('\n');
      if(/\.find\(/.test(block) && !/branchId/.test(block)){
        issues.push({route,line:i-func.length+2,block: block.slice(0,400)});
      }
      collecting=false;
      route=null;
      func=[];
    }
  }
}
console.log(JSON.stringify(issues,null,2));
