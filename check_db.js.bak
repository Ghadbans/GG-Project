const axios = require('axios');
axios.get('http://localhost:5000/api/purchase').then(res => {
  const purs = res.data.data.filter(p => p.purchaseNumber == 65 || p.purchaseNumber == '000065' || p.purchaseNumber == 'PUR-000065');
  console.log('Found:', purs.length);
  if (purs.length > 0) {
    console.log(JSON.stringify(purs[0].items, null, 2));
  }
}).catch(err => console.log(err.message));
