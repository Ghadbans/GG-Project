const fs = require("fs");
const path = require("path");

const distWeb = path.join(__dirname, "..", "dist_web");
if (!fs.existsSync(distWeb)) {
    fs.mkdirSync(distWeb, { recursive: true });
}
fs.copyFileSync(path.join(__dirname, "..", "index.html"), path.join(distWeb, "index.html"));
console.log("Copied index.html to dist_web/");
