import React from 'react';
import {
  Grid,
  TextField,
  Typography,
  Divider,
  FormControlLabel,
  Checkbox,
  IconButton,
  Button,
  Box,
  Paper,
  Autocomplete,
  Tooltip,
  styled,
  tooltipClasses
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { v4 } from 'uuid';

const ViewTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#202a5a',
    color: 'white',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

export const COMMON_DEVICE_TYPES = [
  'SPLIT A/C',
  'CASSETTE A/C',
  'FLOOR STANDING A/C',
  'DUCTED A/C',
  'CHILLER',
  'REFRIGERATOR',
  'DEEP FREEZER',
  'WATER DISPENSER',
  'COLD ROOM',
  'ICE MACHINE',
  'GENERATOR',
  'OTHER'
];

export const COMMON_BRANDS = [
  'SAMSUNG',
  'HISENSE',
  'SHARP',
  'WESTPOOL',
  'LG',
  'DAIKIN',
  'CARRIER',
  'GREE',
  'MIDEA',
  'PANASONIC',
  'TCL',
  'BEKO',
  'KLARSTEIN',
  'OTHER'
];

export const createDefaultAssetUnit = (num = 1) => ({
  idRow: v4(),
  itemType: 'SPLIT A/C',
  brand: '',
  modelNo: '',
  serialNo: '',
  dateOfPurchase: 'N/A',
  location: 'HQ',
  repairHistory: 'N/A',
  deepCleaning: false,
  softCleaning: false,
  correctiveMaintenance: false,
  reactiveMaintenance: false,
  cleaningHistory: ''
});

export const DEFAULT_ASSET_CONTROL_REPORT = {
  preparedBy: '',
  refNo: '',
  branchName: '',
  branchManager: '',
  subject: 'Assets Report',
  technicianName: '',
  notes: '',
  customerSignature: '',
  pricingRates: {
    deepCleaningRate: 25,
    softCleaningRate: 15,
    correctiveRate: 20,
    reactiveRate: 25
  },
  units: [createDefaultAssetUnit(1)]
};

function AssetControlReportSection({
  includeAssetControl,
  setIncludeAssetControl,
  assetControlReport,
  setAssetControlReport,
  defaultCustomerName = '',
  defaultTechnician = ''
}) {
  const report = assetControlReport || DEFAULT_ASSET_CONTROL_REPORT;
  const units = Array.isArray(report.units) && report.units.length > 0
    ? report.units
    : [createDefaultAssetUnit(1)];

  const rates = report.pricingRates || DEFAULT_ASSET_CONTROL_REPORT.pricingRates;

  const handleFieldChange = (field, value) => {
    setAssetControlReport(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleRateChange = (field, value) => {
    setAssetControlReport(prev => ({
      ...prev,
      pricingRates: {
        ...(prev.pricingRates || DEFAULT_ASSET_CONTROL_REPORT.pricingRates),
        [field]: Number(value) || 0
      }
    }));
  };

  const handleUnitChange = (index, field, value) => {
    const updated = [...units];
    updated[index] = {
      ...updated[index],
      [field]: value
    };
    setAssetControlReport(prev => ({
      ...prev,
      units: updated
    }));
  };

  const handleAddUnit = () => {
    const newUnit = createDefaultAssetUnit(units.length + 1);
    setAssetControlReport(prev => ({
      ...prev,
      units: [...units, newUnit]
    }));
  };

  const handleAddMultipleUnits = (count = 5) => {
    const newUnits = [];
    for (let i = 0; i < count; i++) {
      newUnits.push(createDefaultAssetUnit(units.length + i + 1));
    }
    setAssetControlReport(prev => ({
      ...prev,
      units: [...units, ...newUnits]
    }));
  };

  const handleDeleteUnit = (index) => {
    if (units.length <= 1) {
      setAssetControlReport(prev => ({
        ...prev,
        units: [createDefaultAssetUnit(1)]
      }));
      return;
    }
    const filtered = units.filter((_, i) => i !== index);
    setAssetControlReport(prev => ({
      ...prev,
      units: filtered
    }));
  };

  // Calculations
  const totalUnitsCount = units.length;
  const deepCleaningCount = units.filter(u => u.deepCleaning).length;
  const softCleaningCount = units.filter(u => u.softCleaning).length;
  const correctiveCount = units.filter(u => u.correctiveMaintenance).length;
  const reactiveCount = units.filter(u => u.reactiveMaintenance).length;

  const deepTotal = deepCleaningCount * (rates.deepCleaningRate || 25);
  const softTotal = softCleaningCount * (rates.softCleaningRate || 15);
  const correctiveTotal = correctiveCount * (rates.correctiveRate || 20);
  const reactiveTotal = reactiveCount * (rates.reactiveRate || 25);
  const totalContractEstimatedValue = deepTotal + softTotal + correctiveTotal + reactiveTotal;

  return (
    <Grid container spacing={2} sx={{ mt: 2 }}>
      <Grid item xs={12}>
        <Divider orientation="horizontal" flexItem sx={{ fontWeight: 'bold', color: '#30368a' }}>
          ASSET CONTROL REPORT (Optional)
        </Divider>
      </Grid>

      <Grid item xs={12}>
        <FormControlLabel
          control={
            <Checkbox
              checked={!!includeAssetControl}
              onChange={(e) => setIncludeAssetControl(e.target.checked)}
              sx={{ color: '#30368a', '&.Mui-checked': { color: '#30368a' } }}
            />
          }
          label={
            <Typography sx={{ fontWeight: 'bold', color: '#30368a', fontSize: '15px' }}>
              Attach Asset Control Report to this Maintenance (Yearly Schedule & Equipment Units Audit)
            </Typography>
          }
        />
      </Grid>

      {includeAssetControl && (
        <Grid item xs={12}>
          <Box component={Paper} sx={{ p: 2.5, backgroundColor: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '8px' }}>
            {/* Header Metadata Grid */}
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#1e293b', mb: 1.5 }}>
              Asset Control Schedule Information
            </Typography>
            <Grid container spacing={2} sx={{ mb: 2 }}>
              <Grid item xs={12} sm={6} md={2}>
                <TextField
                  fullWidth
                  size="small"
                  label="Prepared By"
                  value={report.preparedBy || ''}
                  onChange={(e) => handleFieldChange('preparedBy', e.target.value)}
                  sx={{ backgroundColor: 'white' }}
                  placeholder="e.g. JULIA"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
                <TextField
                  fullWidth
                  size="small"
                  label="Ref. No"
                  value={report.refNo || ''}
                  onChange={(e) => handleFieldChange('refNo', e.target.value)}
                  sx={{ backgroundColor: 'white' }}
                  placeholder="e.g. 1007022"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
                <TextField
                  fullWidth
                  size="small"
                  label="Branch"
                  value={report.branchName || ''}
                  onChange={(e) => handleFieldChange('branchName', e.target.value)}
                  sx={{ backgroundColor: 'white' }}
                  placeholder="e.g. KOLWEZI"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
                <TextField
                  fullWidth
                  size="small"
                  label="Branch Manager"
                  value={report.branchManager || ''}
                  onChange={(e) => handleFieldChange('branchManager', e.target.value)}
                  sx={{ backgroundColor: 'white' }}
                  placeholder="e.g. MR. YATIM"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
                <TextField
                  fullWidth
                  size="small"
                  label="Subject"
                  value={report.subject || 'Assets Report'}
                  onChange={(e) => handleFieldChange('subject', e.target.value)}
                  sx={{ backgroundColor: 'white' }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={2}>
                <TextField
                  fullWidth
                  size="small"
                  label="Technician Name"
                  value={report.technicianName || defaultTechnician || ''}
                  onChange={(e) => handleFieldChange('technicianName', e.target.value)}
                  sx={{ backgroundColor: 'white' }}
                  placeholder="e.g. ADNAN"
                />
              </Grid>
            </Grid>

            {/* Summary KPI & Pricing Multipliers Bar */}
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 2,
                p: 1.5,
                mb: 2,
                backgroundColor: '#e2e8f0',
                borderRadius: '6px',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Box sx={{ p: 1, backgroundColor: '#1e293b', color: 'white', borderRadius: '4px', textAlign: 'center', minWidth: '90px' }}>
                  <Typography variant="caption" sx={{ display: 'block', fontSize: '10px' }}>TOTAL UNITS</Typography>
                  <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{totalUnitsCount}</Typography>
                </Box>
                <Box sx={{ p: 1, backgroundColor: '#0284c7', color: 'white', borderRadius: '4px', textAlign: 'center', minWidth: '120px' }}>
                  <Typography variant="caption" sx={{ display: 'block', fontSize: '10px' }}>DEEP CLEANING</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                    {deepCleaningCount} &times; ${rates.deepCleaningRate || 25} = ${deepTotal}
                  </Typography>
                </Box>
                <Box sx={{ p: 1, backgroundColor: '#0d9488', color: 'white', borderRadius: '4px', textAlign: 'center', minWidth: '120px' }}>
                  <Typography variant="caption" sx={{ display: 'block', fontSize: '10px' }}>SOFT CLEANING</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                    {softCleaningCount} &times; ${rates.softCleaningRate || 15} = ${softTotal}
                  </Typography>
                </Box>
                <Box sx={{ p: 1, backgroundColor: '#d97706', color: 'white', borderRadius: '4px', textAlign: 'center', minWidth: '130px' }}>
                  <Typography variant="caption" sx={{ display: 'block', fontSize: '10px' }}>CORRECTIVE MAINT</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                    {correctiveCount} &times; ${rates.correctiveRate || 20} = ${correctiveTotal}
                  </Typography>
                </Box>
                <Box sx={{ p: 1, backgroundColor: '#dc2626', color: 'white', borderRadius: '4px', textAlign: 'center', minWidth: '130px' }}>
                  <Typography variant="caption" sx={{ display: 'block', fontSize: '10px' }}>REACTIVE MAINT</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                    {reactiveCount} &times; ${rates.reactiveRate || 25} = ${reactiveTotal}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ textAlign: 'right', pr: 1 }}>
                <Typography variant="caption" sx={{ color: '#475569', fontWeight: 'bold', display: 'block' }}>
                  ESTIMATED ASSET CONTRACT VALUE
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#0f172a' }}>
                  ${totalContractEstimatedValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </Typography>
              </Box>
            </Box>

            {/* Units Data Table */}
            <Box sx={{ overflowX: 'auto', mb: 2 }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px', minWidth: '1250px' }}>
                <thead>
                  <tr style={{ backgroundColor: '#1e293b', color: 'white' }}>
                    <th style={{ padding: '8px 4px', border: '1px solid #334155', width: '35px', textAlign: 'center' }}>No.</th>
                    <th style={{ padding: '8px 4px', border: '1px solid #334155', width: '130px', textAlign: 'left' }}>Device Type</th>
                    <th style={{ padding: '8px 4px', border: '1px solid #334155', width: '110px', textAlign: 'left' }}>Brand</th>
                    <th style={{ padding: '8px 4px', border: '1px solid #334155', width: '130px', textAlign: 'left' }}>Model No.</th>
                    <th style={{ padding: '8px 4px', border: '1px solid #334155', width: '120px', textAlign: 'left' }}>Serial No.</th>
                    <th style={{ padding: '8px 4px', border: '1px solid #334155', width: '90px', textAlign: 'left' }}>Purchase Date</th>
                    <th style={{ padding: '8px 4px', border: '1px solid #334155', width: '100px', textAlign: 'left' }}>Location</th>
                    <th style={{ padding: '8px 4px', border: '1px solid #334155', width: '90px', textAlign: 'left' }}>Repair History</th>
                    <th style={{ padding: '8px 4px', border: '1px solid #334155', width: '70px', textAlign: 'center' }}>Deep Clean</th>
                    <th style={{ padding: '8px 4px', border: '1px solid #334155', width: '70px', textAlign: 'center' }}>Soft Clean</th>
                    <th style={{ padding: '8px 4px', border: '1px solid #334155', width: '75px', textAlign: 'center' }}>Corrective</th>
                    <th style={{ padding: '8px 4px', border: '1px solid #334155', width: '75px', textAlign: 'center' }}>Reactive</th>
                    <th style={{ padding: '8px 4px', border: '1px solid #334155', minWidth: '140px', textAlign: 'left' }}>Cleaning History & Notes</th>
                    <th style={{ padding: '8px 4px', border: '1px solid #334155', width: '45px', textAlign: 'center' }}></th>
                  </tr>
                </thead>
                <tbody>
                  {units.map((unit, index) => (
                    <tr key={unit.idRow || index} style={{ backgroundColor: index % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                      <td style={{ padding: '4px', border: '1px solid #cbd5e1', textAlign: 'center', fontWeight: 'bold' }}>
                        {index + 1}
                      </td>
                      <td style={{ padding: '4px', border: '1px solid #cbd5e1' }}>
                        <Autocomplete
                          freeSolo
                          options={COMMON_DEVICE_TYPES}
                          value={unit.itemType || 'SPLIT A/C'}
                          onInputChange={(_, newVal) => handleUnitChange(index, 'itemType', newVal)}
                          renderInput={(params) => (
                            <TextField {...params} size="small" variant="standard" fullWidth sx={{ fontSize: '12px' }} />
                          )}
                        />
                      </td>
                      <td style={{ padding: '4px', border: '1px solid #cbd5e1' }}>
                        <Autocomplete
                          freeSolo
                          options={COMMON_BRANDS}
                          value={unit.brand || ''}
                          onInputChange={(_, newVal) => handleUnitChange(index, 'brand', newVal)}
                          renderInput={(params) => (
                            <TextField {...params} size="small" variant="standard" fullWidth placeholder="e.g. SAMSUNG" />
                          )}
                        />
                      </td>
                      <td style={{ padding: '4px', border: '1px solid #cbd5e1' }}>
                        <TextField
                          size="small"
                          variant="standard"
                          fullWidth
                          value={unit.modelNo || ''}
                          onChange={(e) => handleUnitChange(index, 'modelNo', e.target.value)}
                          placeholder="Model #"
                        />
                      </td>
                      <td style={{ padding: '4px', border: '1px solid #cbd5e1' }}>
                        <TextField
                          size="small"
                          variant="standard"
                          fullWidth
                          value={unit.serialNo || ''}
                          onChange={(e) => handleUnitChange(index, 'serialNo', e.target.value)}
                          placeholder="Serial #"
                        />
                      </td>
                      <td style={{ padding: '4px', border: '1px solid #cbd5e1' }}>
                        <TextField
                          size="small"
                          variant="standard"
                          fullWidth
                          value={unit.dateOfPurchase || 'N/A'}
                          onChange={(e) => handleUnitChange(index, 'dateOfPurchase', e.target.value)}
                        />
                      </td>
                      <td style={{ padding: '4px', border: '1px solid #cbd5e1' }}>
                        <TextField
                          size="small"
                          variant="standard"
                          fullWidth
                          value={unit.location || ''}
                          onChange={(e) => handleUnitChange(index, 'location', e.target.value)}
                          placeholder="Room / Branch"
                        />
                      </td>
                      <td style={{ padding: '4px', border: '1px solid #cbd5e1' }}>
                        <TextField
                          size="small"
                          variant="standard"
                          fullWidth
                          value={unit.repairHistory || 'N/A'}
                          onChange={(e) => handleUnitChange(index, 'repairHistory', e.target.value)}
                        />
                      </td>
                      <td style={{ padding: '4px', border: '1px solid #cbd5e1', textAlign: 'center' }}>
                        <Checkbox
                          size="small"
                          checked={!!unit.deepCleaning}
                          onChange={(e) => handleUnitChange(index, 'deepCleaning', e.target.checked)}
                          sx={{ p: 0.5, color: '#0284c7', '&.Mui-checked': { color: '#0284c7' } }}
                        />
                      </td>
                      <td style={{ padding: '4px', border: '1px solid #cbd5e1', textAlign: 'center' }}>
                        <Checkbox
                          size="small"
                          checked={!!unit.softCleaning}
                          onChange={(e) => handleUnitChange(index, 'softCleaning', e.target.checked)}
                          sx={{ p: 0.5, color: '#0d9488', '&.Mui-checked': { color: '#0d9488' } }}
                        />
                      </td>
                      <td style={{ padding: '4px', border: '1px solid #cbd5e1', textAlign: 'center' }}>
                        <Checkbox
                          size="small"
                          checked={!!unit.correctiveMaintenance}
                          onChange={(e) => handleUnitChange(index, 'correctiveMaintenance', e.target.checked)}
                          sx={{ p: 0.5, color: '#d97706', '&.Mui-checked': { color: '#d97706' } }}
                        />
                      </td>
                      <td style={{ padding: '4px', border: '1px solid #cbd5e1', textAlign: 'center' }}>
                        <Checkbox
                          size="small"
                          checked={!!unit.reactiveMaintenance}
                          onChange={(e) => handleUnitChange(index, 'reactiveMaintenance', e.target.checked)}
                          sx={{ p: 0.5, color: '#dc2626', '&.Mui-checked': { color: '#dc2626' } }}
                        />
                      </td>
                      <td style={{ padding: '4px', border: '1px solid #cbd5e1' }}>
                        <TextField
                          size="small"
                          variant="standard"
                          fullWidth
                          value={unit.cleaningHistory || ''}
                          onChange={(e) => handleUnitChange(index, 'cleaningHistory', e.target.value)}
                          placeholder="Notes on unit..."
                        />
                      </td>
                      <td style={{ padding: '4px', border: '1px solid #cbd5e1', textAlign: 'center' }}>
                        <IconButton
                          size="small"
                          onClick={() => handleDeleteUnit(index)}
                          sx={{ color: '#ef4444', p: 0.5 }}
                        >
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Box>

            {/* Action Buttons to Add Rows */}
            <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
              <Button
                variant="outlined"
                size="small"
                startIcon={<AddIcon />}
                onClick={handleAddUnit}
                sx={{ textTransform: 'none', color: '#30368a', borderColor: '#30368a' }}
              >
                Add Unit Row
              </Button>
              <Button
                variant="outlined"
                size="small"
                startIcon={<PlaylistAddIcon />}
                onClick={() => handleAddMultipleUnits(5)}
                sx={{ textTransform: 'none', color: '#475569', borderColor: '#94a3b8' }}
              >
                Add +5 Rows
              </Button>
            </Box>

            {/* General Notes & Contract Terms */}
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={2}
                  size="small"
                  label="Asset Control Schedule Notes"
                  value={report.notes || ''}
                  onChange={(e) => handleFieldChange('notes', e.target.value)}
                  placeholder="Additional technician observations, recommendations, or customer contract details..."
                  sx={{ backgroundColor: 'white' }}
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      )}
    </Grid>
  );
}

export default AssetControlReportSection;
