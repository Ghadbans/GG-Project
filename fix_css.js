const fs = require('fs');
let css = fs.readFileSync('src/js/AdminView1/view.css', 'utf8');

// Strip out everything after the responsive block comment
const marker = '/* ========================================================';
if (css.includes(marker)) {
    css = css.substring(0, css.indexOf(marker));
}

// Add the safe responsive css back
css += `
/* ========================================================
   RESPONSIVE DESIGN FIXES FOR MOBILE
   ======================================================== */

@media (max-width: 768px) {
    /* Make all tables and DataGrids scroll horizontally instead of squishing */
    .MuiTableContainer-root, 
    .MuiDataGrid-root,
    table,
    .overflow-x-auto {
        overflow-x: auto !important;
        -webkit-overflow-scrolling: touch;
        width: 100% !important;
        max-width: 100vw !important;
        display: block; /* Ensure it takes full width and allows inner scrolling */
    }

    /* Override hardcoded min-widths on forms and cards */
    .MuiPaper-root, 
    .MuiCard-root, 
    .MuiBox-root,
    .MuiContainer-root {
        min-width: 0 !important;
        box-sizing: border-box !important;
    }
    
    /* Make App bar title fit */
    .MuiTypography-h6 {
        font-size: 1rem !important;
    }
    
    /* Prevent sidebar from pushing content offscreen, make it an overlay */
    .MuiDrawer-root {
        position: absolute !important;
        z-index: 1300 !important;
    }
}
`;

fs.writeFileSync('src/js/AdminView1/view.css', css);
console.log('Fixed CSS');
