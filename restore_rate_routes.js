/**
 * restore_rate_routes.js
 * 
 * The rate/rateReturn/paymentRate GET routes were accidentally deleted.
 * This script restores them by finding the broken insertion point and fixing it.
 */
const fs = require('fs');
const path = require('path');

const ROUTES_PATH = path.join(__dirname, 'routes', 'Routes.js');
let content = fs.readFileSync(ROUTES_PATH, 'utf8');

// The broken section: lines 3520-3534 contain a mangled block that needs to be replaced.
// Strategy: find the marker "// Delete all department" block end + the start of "// Update single paymentRate"
// and insert the full rate route blocks in between.

const BROKEN_MARKER = `    });\r\n    .then((result) => {\r\n      res.json({\r\n        data: result,\r\n        message: "Data successfully added.",\r\n        data: result,\r\n        message: "Data successfully retrieved.",\r\n        status: 200,\r\n      });\r\n    })\r\n    .catch((err) => {\r\n      return next(err);\r\n    });\r\n});\r\n`;

const AFTER_REMOVE_DEPT = `      });\r\n    })\r\n    .then((result) =\u003e {`;

// Find the mangled section — locate via surrounding context
const removeDeptIdx = content.indexOf('Route.route("/remove-department")');
if (removeDeptIdx === -1) {
  // Try without quotes
  const altIdx = content.indexOf("remove-department");
  console.log('remove-department at:', altIdx);
}

// Find "// Update single paymentRate"  
const updatePaymentIdx = content.indexOf('// Update single paymentRate');
// Find the end of "// Delete all department" block (the });  before Update single paymentRate)
// Walk backwards from updatePaymentIdx to find the previous });
let insertAt = updatePaymentIdx;
// Go back to find the broken block
const removeDeptEnd = content.lastIndexOf('\n});\n', updatePaymentIdx);
const removeDeptEnd2 = content.lastIndexOf('\r\n});\r\n', updatePaymentIdx);
const insertPos = Math.max(removeDeptEnd + 4, removeDeptEnd2 + 5);

console.log('updatePaymentRate at char:', updatePaymentIdx);
console.log('Insert after char:', insertPos);
console.log('Content around insert:', JSON.stringify(content.slice(insertPos - 20, insertPos + 20)));

// Cut out the broken garbage between the last valid }); and "// Update single paymentRate"
const badSection = content.slice(insertPos, updatePaymentIdx);
console.log('Bad section to remove:', JSON.stringify(badSection));

const RATE_ROUTES = `
// -------------get all rate-------------------
Route.route("/rate", cors(corsOptionsDelegate)).get(
  async (req, res, next) => {
    try {
      const branchId = req.query.branchId;
      const filter = branchId && branchId !== 'ALL' ? { branchId } : {};
      let result = await rateSchema.find(filter);
      if (result.length === 0) {
        const newDoc = await rateSchema.create({ rate: 0, branchId: branchId && branchId !== 'ALL' ? branchId : 'HQ' });
        result = [newDoc];
      }
      res.json({ data: result, message: "Data successfully fetched!", status: 200 });
    } catch (err) { next(err); }
  }
);
// Create rate
Route.route("/create-rate").post(async (req, res, next) => {
  await rateSchema.create(req.body)
    .then((result) => { res.json({ data: result, message: "Data successfully added.", status: 200 }); })
    .catch((err) => { return next(err); });
});
// Get single rate
Route.route("/get-rate/:id").get(async (req, res, next) => {
  await rateSchema.findById(req.params.id, req.body)
    .then((result) => { res.json({ data: result, message: "Data successfully retrieved.", status: 200 }); })
    .catch((err) => { return next(err); });
});
// Update single rate
Route.route("/update-rate/:id").put(async (req, res, next) => {
  await rateSchema.findByIdAndUpdate(req.params.id, { $set: req.body })
    .then((result) => { res.json({ data: result, msg: "Data successfully updated." }); })
    .catch((err) => { return next(err); });
});
// Delete single rate
Route.route("/delete-rate/:id").delete(async (req, res) => {
  await rateSchema.findByIdAndRemove(req.params.id)
    .then(() => { res.json({ msg: "Data successfully updated." }); })
    .catch((err) => { return res.status(400).json(err); });
});
// Delete all rate
Route.route("/remove-rate").delete(async (req, res) => {
  await rateSchema.findByIdAndRemove(req.params.id)
    .then(() => { res.json({ msg: "Data successfully updated." }); })
    .catch((err) => { return res.status(400).json(err); });
});

// -------------get all rateReturn-------------------
Route.route("/rateReturn", cors(corsOptionsDelegate)).get(
  async (req, res, next) => {
    try {
      const branchId = req.query.branchId;
      const filter = branchId && branchId !== 'ALL' ? { branchId } : {};
      let result = await RateReturnSchema.find(filter);
      if (result.length === 0) {
        const newDoc = await RateReturnSchema.create({ rateR: 0, branchId: branchId && branchId !== 'ALL' ? branchId : 'HQ' });
        result = [newDoc];
      }
      res.json({ data: result, message: "Data successfully fetched!", status: 200 });
    } catch (err) { next(err); }
  }
);
// Create rateReturn
Route.route("/create-rateReturn").post(async (req, res, next) => {
  await RateReturnSchema.create(req.body)
    .then((result) => { res.json({ data: result, message: "Data successfully added.", status: 200 }); })
    .catch((err) => { return next(err); });
});
// Get single rateReturn
Route.route("/get-rateReturn/:id").get(async (req, res, next) => {
  await RateReturnSchema.findById(req.params.id, req.body)
    .then((result) => { res.json({ data: result, message: "Data successfully retrieved.", status: 200 }); })
    .catch((err) => { return next(err); });
});
// Update single rateReturn
Route.route("/update-rateReturn/:id").put(async (req, res, next) => {
  await RateReturnSchema.findByIdAndUpdate(req.params.id, { $set: req.body })
    .then((result) => { res.json({ data: result, msg: "Data successfully updated." }); })
    .catch((err) => { return next(err); });
});
// Delete single rateReturn
Route.route("/delete-rateReturn/:id").delete(async (req, res) => {
  await RateReturnSchema.findByIdAndRemove(req.params.id)
    .then(() => { res.json({ msg: "Data successfully updated." }); })
    .catch((err) => { return res.status(400).json(err); });
});
// Delete all rateReturn
Route.route("/remove-rateReturn").delete(async (req, res) => {
  await RateReturnSchema.findByIdAndRemove(req.params.id)
    .then(() => { res.json({ msg: "Data successfully updated." }); })
    .catch((err) => { return res.status(400).json(err); });
});

// -------------get all paymentRate-------------------
Route.route("/paymentRate", cors(corsOptionsDelegate)).get(
  async (req, res, next) => {
    try {
      const branchId = req.query.branchId;
      const filter = branchId && branchId !== 'ALL' ? { branchId } : {};
      let result = await paymentRateSchema.find(filter);
      if (result.length === 0) {
        const newDoc = await paymentRateSchema.create({ paymentRate: 0, branchId: branchId && branchId !== 'ALL' ? branchId : 'HQ' });
        result = [newDoc];
      }
      res.json({ data: result, message: "Data successfully fetched!", status: 200 });
    } catch (err) { next(err); }
  }
);
// Create paymentRate
Route.route("/create-paymentRate").post(async (req, res, next) => {
  await paymentRateSchema.create(req.body)
    .then((result) => { res.json({ data: result, message: "Data successfully added.", status: 200 }); })
    .catch((err) => { return next(err); });
});
// Get single paymentRate
Route.route("/get-paymentRate/:id").get(async (req, res, next) => {
  await paymentRateSchema.findById(req.params.id, req.body)
    .then((result) => { res.json({ data: result, message: "Data successfully retrieved.", status: 200 }); })
    .catch((err) => { return next(err); });
});

`;

// Replace the bad section with the correct rate routes + paymentRate update/delete (which still exist)
const newContent = content.slice(0, insertPos) + RATE_ROUTES + content.slice(updatePaymentIdx);
fs.writeFileSync(ROUTES_PATH, newContent, 'utf8');
console.log('Done! Restored rate routes. File length:', newContent.length);
