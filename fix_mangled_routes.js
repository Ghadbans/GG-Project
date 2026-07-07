const fs = require('fs');
const path = require('path');

const ROUTES_PATH = path.join(__dirname, 'routes', 'Routes.js');
let content = fs.readFileSync(ROUTES_PATH, 'utf8');

const badSnippet = `    .catch((err) => {
      return next(err);
          { itemName: term },`;

const replacement = `    .catch((err) => {
      return next(err);
    });
});

// get all item
Route.route("/item", cors(corsOptionsDelegate)).get(async (req, res, next) => {
  const rawBranchId = req.query.branchId;
  const branchId = Array.isArray(rawBranchId) ? rawBranchId[0] : rawBranchId;
  const filter = branchId && branchId !== 'ALL' ? { branchId } : {};
  await itemSchema
    .find(filter, {data:0})
    .then((result) => {
      res.json({
        data: result,
        message: "Data successfully fetched!",
        status: 200,
      });
    })
    .catch((err) => {
      return next(err);
    });
});

Route.get('/item-usage', async (req, res) => {
  try {
    const items = await itemSchema.find({});
    const outDocs = await itemOutSchema.find({});
    const returnDocs = await itemReturnSchema.find({});

    // Flatten itemQtyArray from out and return
    const outArray = outDocs.flatMap(doc => doc.itemsQtyArray || []);
    const returnArray = returnDocs.flatMap(doc => doc.itemsQtyArray || []);

    // Helper to aggregate totals
    function aggregateTotals(arr, qtyKey) {
      const totals = {};
      arr.forEach(entry => {
        if (entry.itemName && entry.itemName._id) {
          const id = entry.itemName._id.toString();
          const qty = parseFloat(entry[qtyKey] || "0");

          if (!totals[id]) {
            totals[id] = { count: 1, total: qty };
          } else {
            totals[id].count += 1;
            totals[id].total += qty;
          }
        }
      });
      return totals;
    }

    const outStats = aggregateTotals(outArray, "newItemOut");
    const returnStats = aggregateTotals(returnArray, "newItemOut");

    // Merge data into item catalog
    const result = items.map(item => {
      const id = item._id.toString();

      const out = outStats[id] || { count: 0, total: 0 };
      const ret = returnStats[id] || { count: 0, total: 0 };

      return {
        itemId: id,
        itemUpc:item.itemUpc,
        itemName: item.itemName,
        Sell: item.itemSellingPrice,
        timesOut: out.count,
        totalQtyOut: out.total,
        timesReturn: ret.count,
        totalQtyReturn: ret.total,
        balanceQty: out.total - ret.total
      };
    });

    // Sort by highest balanceQty and return top 200
    const sortedResult = result.sort((a, b) => b.balanceQty - a.balanceQty).slice(0, 1000);

    res.json(sortedResult);

  } catch (error) {
    console.error("Error getting item usage:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

Route.route("/item-Information").get(async (req, res) => {
  try {
    const { page = 1, limit = 100, search = '', filterField, filterValue } = req.query;
    const rawBranchId = req.query.branchId;
    const branchId = Array.isArray(rawBranchId) ? rawBranchId[0] : rawBranchId;
    const skip = (Number(page) - 1) * Number(limit);

    // Build the query object dynamically based on the filters
    const query = {};
    if (branchId && branchId !== 'ALL') query.branchId = branchId;
    if (search.trim()) {
      const searchTerms = search.split(' ').map(term => new RegExp(term, 'i'));
      query.$and = searchTerms.map(term => ({
        $or: [
          { itemName: term },
          { itemBrand: term },
          { itemDescription: term },
          { itemCategory: term },
          { 'itemUpc.newCode': term },
          { 'itemUpc.itemNumber': isNaN(Number(search)) ? null : Number(search)  },
        ],
      }));
    }
    if (filterField && filterValue) {
      query[filterField] = new RegExp(filterValue, 'i');
    }

    const [itemI, totalItem] = await Promise.all([
      itemSchema.find(query).sort({ _id: -1 }).skip(skip).limit(Number(limit)),
      itemSchema.countDocuments(query),
    ]);

    res.status(200).json({ itemI, totalItem, totalPages: Math.ceil(totalItem / Number(limit)) });
  } catch (error) {
    res.status(500).json({ message: "An error occurred while fetching data.", error: error.message });
  }
});

Route.route("/item-shop").get(async (req, res) => {
  try {
    const {page = 1, limit = 60, search = ''} = req.query;
    const rawBranchId = req.query.branchId;
    const branchId = Array.isArray(rawBranchId) ? rawBranchId[0] : rawBranchId;
    const skip = (page - 1) * limit;

    const query = {}
    if (branchId && branchId !== 'ALL') query.branchId = branchId;

    if (search.trim()) {
      const searchTerms = search.split(' ').map(term => new RegExp(term, 'i'));
      query.$and = searchTerms.map(term => ({
        $or: [
          { itemName: term },`;

if (content.includes(badSnippet)) {
    content = content.replace(badSnippet, replacement);
    fs.writeFileSync(ROUTES_PATH, content, 'utf8');
    console.log("Successfully fixed routes/Routes.js");
} else {
    // Windows might have different line endings
    const normalizedBadSnippet = badSnippet.replace(/\\r\\n/g, '\\n');
    const normalizedContent = content.replace(/\\r\\n/g, '\\n');
    
    if (normalizedContent.includes(normalizedBadSnippet)) {
        content = normalizedContent.replace(normalizedBadSnippet, replacement);
        fs.writeFileSync(ROUTES_PATH, content, 'utf8');
        console.log("Successfully fixed routes/Routes.js (normalized)");
    } else {
        console.log("Could not find the snippet to replace.");
    }
}
