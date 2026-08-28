const fs = require('fs');
let code = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate.js', 'utf8');

// Find and remove the top + button
code = code.replace(/<span hidden=\{user\.data\.role === 'User'\}\>\s*<span className='btn2' onClick=\{\(\) => handleAddField\(\)\}>\s*<Add className='btn1' style=\{\{ fontSize: '40px' \}\} \/>\s*<\/span>\s*<\/span>/, "");

// Find and remove the middle + button
code = code.replace(/<span hidden=\{user\.data\.role === 'User'\}\>\s*<span className='btn2' onClick=\{\(\) => handleAddField1\(\)\}>\s*<Add className='btn1' style=\{\{ backgroundColor: 'gray', fontSize: '40px' \}\} \/>\s*<\/span>\s*<\/span>/, "");

// Wait, the regex might be slightly off. Let's just remove anything with <Add className='btn1'
code = code.replace(/<span hidden=\{user\.data\.role === 'User'\}\>[\s\S]*?<Add className='btn1'[\s\S]*?<\/span>\s*<\/span>/g, "");
code = code.replace(/<span hidden=\{user\.data\.role === 'User'\}\>[\s\S]*?<Add style=\{\{ color: '#202a5a' \}\}[\s\S]*?<\/span>\s*<\/span>/g, "");

fs.writeFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate.js', code);
console.log('Removed + buttons');
