const fs = require('fs');
let content = fs.readFileSync('routes/Routes.js', 'utf8');

// The broken section: after filterField block, it jumps straight into get-last-saved-purchaseOrder
// We need to insert the find/count/res block
const broken = "query[`itemsQtyArray.${filterField}`] = new RegExp(filterValue, 'i');\n      }\n    const query = branchId && branchId !== 'ALL' ? { branchId } : {};\r\n    const last = await purchaseOrderSchema.findOne(query).sort({\r\n      outNumber: -1\r\n    }).exec();\r\n    res.json(last)\r\n  } catch (error) {\r\n    next(error);\r\n  }\r\n})\r\n// Create purchaseOrder";

const fixed = `query[\`itemsQtyArray.\${filterField}\`] = new RegExp(filterValue, 'i');
      }
      const itemI = await purchaseOrderSchema.find(query).sort({ outNumber: -1 }).skip(skip).limit(Number(limit));
      const totalItem = await purchaseOrderSchema.countDocuments(query);
      res.status(200).json({ itemI, totalItem, totalPages: Math.ceil(totalItem / Number(limit)) });
  } catch (error) {
    console.error("Error fetching purchaseOrder-Information:", error);
    res.status(500).json({ message: error.message });
  }
});
Route.route("/get-last-saved-purchaseOrder").get(async(req,res, next)=>{
  try {
    const rawBranchId = req.query.branchId;
    const branchId = Array.isArray(rawBranchId) ? rawBranchId[0] : rawBranchId;
    const query = branchId && branchId !== 'ALL' ? { branchId } : {};
    const last = await purchaseOrderSchema.findOne(query).sort({
      outNumber: -1
    }).exec();
    res.json(last)
  } catch (error) {
    next(error);
  }
})
// Create purchaseOrder`;

if (content.includes(broken)) {
  content = content.replace(broken, fixed);
  fs.writeFileSync('routes/Routes.js', content);
  console.log('Fixed successfully!');
} else {
  console.log('Broken pattern not found - checking what is there...');
  const idx = content.indexOf("query[`itemsQtyArray.${filterField}`] = new RegExp(filterValue, 'i');\n      }");
  console.log('idx:', idx);
  console.log('around:', JSON.stringify(content.substring(idx, idx + 400)));
}
