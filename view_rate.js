const fs = require('fs');
const lines = fs.readFileSync('routes/Routes.js', 'utf8').split('\n');
const starts = [];
lines.forEach((l, i) => {
  if (l.includes('Route.route("/rate",') || l.includes("Route.route('/rate',") ||
      l.includes('Route.route("/rateReturn",') || l.includes('Route.route("/paymentRate",')) {
    starts.push(i);
  }
});
starts.forEach(s => {
  console.log('=== L' + (s + 1));
  console.log(lines.slice(s, s + 30).join('\n'));
  console.log();
});
