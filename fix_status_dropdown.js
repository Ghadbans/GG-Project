const fs = require('fs');
let code = fs.readFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate.js', 'utf8');

// 1. Remove automatic status logic
const statusLogicRegex = /let status = ''\s*if \(statusInfo === 'Close'\) {[\s\S]*?status = statusInfo\s*\}\s*\}/;
code = code.replace(statusLogicRegex, '');

// 2. We already have `statusInfo` and `setStatusInfo`. We will use them directly.
// And pass `status: statusInfo` instead of `status` to `updateData`.
code = code.replace(/status, action,/g, 'status: statusInfo || "Open", action,');

// 3. Add the Status dropdown UI before the Technician Assign input.
// We'll find Technician Assign and inject it before.
const technicianUI = `<Grid item xs={12} sm={12}>
                  <p style={{ margin: '0px', color: '#688eac', fontSize: '13px', fontWeight: 'bold' }}>Technician Assign</p>
                  <Divider style={{ margin: '0px' }} />
                </Grid>`;

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

code = code.replace(technicianUI, statusDropdown + '\n' + technicianUI);

fs.writeFileSync('src/js/AdminView1/PageView/MaintenanceOrder/MaintenanceOrderUpdate.js', code);
console.log('Added Status dropdown and fixed automatic logic');
