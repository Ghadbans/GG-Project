const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        const newData = data.replace(/gg-project-productio/g, 'gg-project-production');
        if (data !== newData) {
            fs.writeFileSync(filePath, newData, 'utf8');
            console.log(`Updated: ${filePath}`);
        }
    } catch (err) {
        console.error(`Error reading/writing ${filePath}: ${err}`);
    }
}

function traverseDir(dir) {
    fs.readdirSync(dir).forEach(file => {
        let fullPath = path.join(dir, file);
        if (fs.lstatSync(fullPath).isDirectory()) {
            traverseDir(fullPath);
        } else {
            if (fullPath.endsWith('.js')) {
                replaceInFile(fullPath);
            }
        }
    });
}

traverseDir('./src');
console.log('Replacement complete.');
