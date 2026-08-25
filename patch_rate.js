const fs = require('fs');

let content = fs.readFileSync('src/js/AdminView1/AdminHome.js', 'utf8');

// Fix the API endpoint case and the 0 || 1 bug
content = content.replace(
  /safeGet\(`\$\{ENDPOINT_URL\}\/Rate`\)\.then\(resRate => \{\s*if \(resRate\.data\?\.data\?\.length > 0\) \{\s*setSystemRate\(parseFloat\(resRate\.data\?\.data\?\.\[0\]\?\.rate \|\| 1\)\);\s*\}\s*\}\);/g,
  `safeGet(\`\${ENDPOINT_URL}/rate\`).then(resRate => {
          if (resRate.data?.data?.length > 0) {
            const fetchedRate = resRate.data.data[0]?.rate;
            setSystemRate(fetchedRate != null && fetchedRate !== 0 ? parseFloat(fetchedRate) : 1);
          }
        });`
);

// Fix the UI display formatting
content = content.replace(
  /<h2>\s*Today's Rate:\s*\{systemRate\}\s*<\/h2>/g,
  `<h2> Today's Rate: $ 1 = FC {systemRate} </h2>`
);

fs.writeFileSync('src/js/AdminView1/AdminHome.js', content);
console.log('AdminHome rate display patched');
