const fs = require('fs');
let content = fs.readFileSync('server/routes/projectRoutes.js', 'utf8');

const deleteRegex = /Route\.route\("\/delete-project\/:id"\)\.delete\(async \(req, res, next\) => \{[\s\S]*?Route\.route\("\/project-Information"\)/;
const newDelete = `Route.route("/delete-project/:id").delete(async (req, res, next) => {
    const id = req.params.id;
    try {
        const invoiceLink = await invoiceSchema.findOne({ "Ref._id": id });
        if (invoiceLink) return res.status(400).json({ error: "Cannot delete Project because it has linked Invoices. Please delete the Invoices first." });
        
        const itemOutLink = await itemOutSchema.findOne({ ReferenceName: id });
        if (itemOutLink) return res.status(400).json({ error: "Cannot delete Project because it has linked Item Out entries. Please delete the Item Out entries first." });

        const project = await projectSchema.findById(id);
        if (project && project.Create && project.Create.id) {
            // Wait, how does Project link back to Quotation? projectSchema has no ReferenceName. It might have Create.id
        }

        await projectSchema.findByIdAndRemove(id);
        res.json({ msg: "Data successfully deleted." });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
});

Route.route("/project-Information")`;

content = content.replace(deleteRegex, newDelete);
fs.writeFileSync('server/routes/projectRoutes.js', content);
console.log('Updated delete-project');
