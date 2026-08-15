const fs = require('fs');
const content = fs.readFileSync('server/routes/Routes.js', 'utf8');

const regexSplit = /const regex = new RegExp\(search\.split\(' '\)\.join\('\|'\), 'i'\);/g;
const regexTrim = /const regex = new RegExp\(search\.trim\(\), 'i'\);/g;
const replacement = 'const escapedSearch = search.trim().replace(/[.*+?^${}()|[\\]\\\\]/g, \'\\\\$&\');\n      const regex = new RegExp(escapedSearch, \'i\');';

let newContent = content.replace(regexSplit, replacement);
newContent = newContent.replace(regexTrim, replacement);

fs.writeFileSync('server/routes/Routes.js', newContent);
console.log('Successfully replaced regex creations in Routes.js');
