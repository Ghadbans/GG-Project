const fs = require('fs');
const path = require('path');
const modelFiles = fs.readdirSync(path.join(__dirname,'model')).filter(f=>f.endsWith('.js'));
const missing = [];
for(const file of modelFiles){
  const text = fs.readFileSync(path.join(__dirname,'model',file),'utf8');
  if(!/branchId\s*[:=]/.test(text) && !/branchId\s*\)/.test(text)){
    missing.push(file);
  }
}
console.log('models missing branchId:', missing);
