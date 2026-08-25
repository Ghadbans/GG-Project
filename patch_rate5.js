const fs = require('fs');

let content = fs.readFileSync('src/js/AdminView1/AdminHome.js', 'utf8');

const oldState = "const [systemRate, setSystemRate] = useState(1);";
const newState = `const [systemRate, setSystemRate] = useState(() => {
    try {
      const local = localStorage.getItem('Rate');
      if (local) {
        const rateData = JSON.parse(local);
        const selectedBranch = localStorage.getItem('selectedBranch') || 'HQ';
        const branchRate = rateData.find(r => r.branchId === selectedBranch) || rateData.find(r => r.branchId === 'HQ') || rateData[0];
        const fetchedRate = branchRate?.rate || rateData[0]?.rate;
        if (fetchedRate != null && fetchedRate !== 0) return parseFloat(fetchedRate);
      }
    } catch (e) {}
    return '...'; // Show loading dots instead of 1 so it doesn't flash falsely
  });`;

content = content.replace(oldState, newState);

// But wait, if systemRate is '...', math will fail. Let's fix math references to fallback to 1 if it's '...'.
// We can just use `(isNaN(systemRate) ? 1 : systemRate)` anywhere systemRate is used in math.
content = content.replace(/systemRate \|\| 1/g, "(!isNaN(systemRate) ? systemRate : 1)");

fs.writeFileSync('src/js/AdminView1/AdminHome.js', content);
console.log('AdminHome initial state patched to prevent flash');
