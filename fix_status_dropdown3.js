const fs = require('fs');
let code = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate.js', 'utf8');

const statusDropdown = `<Grid item xs={12} sm={6}>
                  <FormControl fullWidth variant="outlined" margin="dense">
                    <InputLabel id="status-label">Status</InputLabel>
                    <Select
                      labelId="status-label"
                      value={statusInfo || 'Open'}
                      onChange={(e) => setStatusInfo(e.target.value)}
                      label="Status"
                    >
                      <MenuItem value="Open">Open</MenuItem>
                      <MenuItem value="Pending">Pending</MenuItem>
                      <MenuItem value="Complete">Complete</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>`;

const techRegex = /<Grid item xs=\{12\}>\s*<p style=\{\{ textAlign: 'center' \}\}>Technician Assign<\/p>\s*<\/Grid>/;

if (techRegex.test(code)) {
    code = code.replace(techRegex, statusDropdown + '\n$&');
    fs.writeFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate.js', code);
    console.log('Successfully injected Status dropdown');
} else {
    console.log('Failed to find Technician Assign block');
}
