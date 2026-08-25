const fs = require('fs');

let content = fs.readFileSync('src/js/AdminView1/AdminHome.js', 'utf8');

const regexRate = /\s*const fetchRateWithRetry = async[\s\S]*?\}\);/;
const match = content.match(regexRate);
if (match) {
    const rateLogic = match[0];
    content = content.replace(regexRate, '');
    
    // Insert it right before the user.data.role !== 'CEO' check
    const insertPoint = "if (!user.data.role) return;";
    content = content.replace(insertPoint, insertPoint + "\n" + rateLogic);
    
    fs.writeFileSync('src/js/AdminView1/AdminHome.js', content);
    console.log('AdminHome rate logic moved above the non-CEO early return!');
} else {
    console.log('Could not find fetchRateWithRetry in AdminHome.js');
}
