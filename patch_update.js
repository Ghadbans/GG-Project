const fs = require('fs');
let content = fs.readFileSync('server/routes/estimationRoutes.js', 'utf8');

const updateRegex = /Route\.route\("\/update-estimation\/:id"\)\.put\(async \(req, res, next\) => \{[\s\S]*?Route\.route\("\/delete-estimation\/:id"\)/;
const newUpdate = `Route.route("/update-estimation/:id").put(async (req, res, next) => {
    try {
        const est = await estimationSchema.findById(req.params.id);
        if (est && (est.ReferenceName || (est.Ref && est.Ref._id))) {
            req.body.status = 'Converted';
        }
        
        const result = await estimationSchema.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, { new: true });
        
        res.json({
            data: result,
            msg: "Data successfully updated.",
        });
    } catch (err) {
        return next(err);
    }
});

Route.route("/delete-estimation/:id")`;

content = content.replace(updateRegex, newUpdate);
fs.writeFileSync('server/routes/estimationRoutes.js', content);
console.log('Updated update-estimation');
