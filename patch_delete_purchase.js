const fs = require('fs');
let content = fs.readFileSync('server/routes/purchaseRoutes.js', 'utf8');

const deleteRegex = /Route\.route\("\/delete-purchase\/:id"\)\.delete\(async \(req, res, next\) => \{[\s\S]*?Route\.route\("\/purchase-Information"\)/;
const newDelete = `Route.route("/delete-purchase/:id").delete(async (req, res, next) => {
    const id = req.params.id;
    try {
        const itemPurchaseLink = await itemPurchaseSchema.findOne({ ReferenceName: id });
        if (itemPurchaseLink) return res.status(400).json({ error: "Cannot delete Purchase Request because it has linked Item Purchases. Please delete the Item Purchases first." });

        const invoiceLink = await invoiceSchema.findOne({ ReferenceName2: id }); // Purchase creates Invoice with ReferenceName2
        if (invoiceLink) return res.status(400).json({ error: "Cannot delete Purchase Request because it has linked Invoices. Please delete the Invoices first." });

        const purchase = await purchaseSchema.findById(id);
        if (purchase && purchase.ReferenceName) {
            // Revert parent estimation
            await estimationSchema.findByIdAndUpdate(purchase.ReferenceName, {
                $set: { status: 'Approved' },
                $unset: { ReferenceName: 1 }
            });
        }

        await purchaseSchema.findByIdAndRemove(id);
        res.json({ msg: "Data successfully deleted." });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
});

Route.route("/purchase-Information")`;

content = content.replace(deleteRegex, newDelete);
fs.writeFileSync('server/routes/purchaseRoutes.js', content);
console.log('Updated delete-purchase');
