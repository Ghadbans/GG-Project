const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        // Fix double 'n' typo
        let newData = data.replace(/gg-project-productionn/g, 'gg-project-production');

        // Fix old corrupted domain if it exists anywhere
        newData = newData.replace(/productio\.ay\.app/g, 'production.up.railway.app');

        if (data !== newData) {
            fs.writeFileSync(filePath, newData, 'utf8');
            console.log(`Fixed: ${filePath}`);
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
console.log('Fix complete.');
