import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  TextField,
  Button,
  IconButton,
  Divider,
  MenuItem,
  CircularProgress,
  Alert,
  Tooltip,
  Autocomplete
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import SaveIcon from '@mui/icons-material/Save';
import VisibilityIcon from '@mui/icons-material/Visibility';
import dayjs from 'dayjs';
import { ENDPOINT_URL } from '../../../apiConfig';

function InspectionReportForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = Boolean(id);

  const [loading, setLoading] = useState(isEditing);
  const [saving, setSaving] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Client Selection List
  const [customers, setCustomers] = useState([]);

  // Form Fields
  const [reportTitle, setReportTitle] = useState('Technical Inspection & Corrective Action Report');
  const [subject, setSubject] = useState('');
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [location, setLocation] = useState('');
  const [preparedBy, setPreparedBy] = useState('Global Gate Technical Team');
  const [customerId, setCustomerId] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [branchId, setBranchId] = useState('HQ');
  const [status, setStatus] = useState('DRAFT');

  // Section 1: Findings (Clean & Empty)
  const [findingsIntro, setFindingsIntro] = useState('');
  const [findings, setFindings] = useState([
    { title: '', description: '' }
  ]);
  const [photosSection1, setPhotosSection1] = useState([]);

  // Section 2: Solutions & Action Plan Table (Clean & Empty)
  const [solutionIntro, setSolutionIntro] = useState('');
  const [actionItems, setActionItems] = useState([
    { actionItem: '', scope: '' }
  ]);
  const [photosSection2, setPhotosSection2] = useState([]);

  // Next steps
  const [nextSteps, setNextSteps] = useState('');

  // Fetch Customers (Newest to Oldest) & Initial Report if editing
  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const res = await axios.get(`${ENDPOINT_URL}/customer`);
        const list = Array.isArray(res.data) ? res.data : (res.data?.data || []);
        // Reverse array so newest registered clients appear at top of dropdown
        setCustomers(list.slice().reverse());
      } catch (err) {
        console.error('Error fetching customers:', err);
      }
    };
    fetchCustomers();

    if (isEditing) {
      const fetchReport = async () => {
        try {
          const res = await axios.get(`${ENDPOINT_URL}/inspection-reports/${id}`);
          if (res.data && res.data.success) {
            const r = res.data.data;
            setReportTitle(r.reportTitle || 'Technical Inspection & Corrective Action Report');
            setSubject(r.subject || '');
            setDate(r.date ? dayjs(r.date).format('YYYY-MM-DD') : dayjs().format('YYYY-MM-DD'));
            setLocation(r.location || '');
            setPreparedBy(r.preparedBy || 'Global Gate Technical Team');
            setCustomerId(r.customerId || '');
            setCustomerName(r.customerName || '');
            setCustomerAddress(r.customerAddress || '');
            setCustomerPhone(r.customerPhone || '');
            setBranchId(r.branchId || 'HQ');
            setStatus(r.status || 'DRAFT');
            setFindingsIntro(r.findingsIntro || '');
            setFindings(Array.isArray(r.findings) && r.findings.length > 0 ? r.findings : [{ title: '', description: '' }]);
            setPhotosSection1(Array.isArray(r.photosSection1) ? r.photosSection1 : []);
            setSolutionIntro(r.solutionIntro || '');
            setActionItems(Array.isArray(r.actionItems) && r.actionItems.length > 0 ? r.actionItems : [{ actionItem: '', scope: '' }]);
            setPhotosSection2(Array.isArray(r.photosSection2) ? r.photosSection2 : []);
            setNextSteps(r.nextSteps || '');
          }
        } catch (err) {
          console.error('Error fetching report:', err);
          setErrorMessage('Failed to load report.');
        } finally {
          setLoading(false);
        }
      };
      fetchReport();
    }
  }, [id, isEditing]);

  // Section 1: Findings Row Operations
  const handleAddFinding = () => {
    setFindings((prev) => [...prev, { title: '', description: '' }]);
  };
  const handleUpdateFinding = (index, field, value) => {
    setFindings((prev) => {
      const copy = [...prev];
      copy[index][field] = value;
      return copy;
    });
  };
  const handleDeleteFinding = (index) => {
    setFindings((prev) => prev.filter((_, i) => i !== index));
  };

  // Section 2: Action Items Table Row Operations
  const handleAddActionItem = () => {
    setActionItems((prev) => [...prev, { actionItem: '', scope: '' }]);
  };
  const handleUpdateActionItem = (index, field, value) => {
    setActionItems((prev) => {
      const copy = [...prev];
      copy[index][field] = value;
      return copy;
    });
  };
  const handleDeleteActionItem = (index) => {
    setActionItems((prev) => prev.filter((_, i) => i !== index));
  };

  // Photo Upload Handler (Converts to Base64)
  const handlePhotoUpload = (e, section) => {
    const files = Array.from(e.target.files);
    if (!files || files.length === 0) return;

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newPhoto = {
          url: reader.result,
          caption: file.name.replace(/\.[^/.]+$/, '').toUpperCase()
        };
        if (section === 1) {
          setPhotosSection1((prev) => [...prev, newPhoto]);
        } else {
          setPhotosSection2((prev) => [...prev, newPhoto]);
        }
      };
      reader.readAsDataURL(file);
    });
    e.target.value = '';
  };

  const handleUpdatePhotoCaption = (index, caption, section) => {
    if (section === 1) {
      setPhotosSection1((prev) => {
        const copy = [...prev];
        copy[index].caption = caption;
        return copy;
      });
    } else {
      setPhotosSection2((prev) => {
        const copy = [...prev];
        copy[index].caption = caption;
        return copy;
      });
    }
  };

  const handleDeletePhoto = (index, section) => {
    if (section === 1) {
      setPhotosSection1((prev) => prev.filter((_, i) => i !== index));
    } else {
      setPhotosSection2((prev) => prev.filter((_, i) => i !== index));
    }
  };

  // Save / Submit Form
  const handleSubmit = async (andView = false) => {
    if (!subject.trim()) {
      setErrorMessage('Report Subject is required.');
      return;
    }
    if (!location.trim()) {
      setErrorMessage('Inspection Location is required.');
      return;
    }

    setSaving(true);
    setErrorMessage('');
    setSuccessMessage('');

    const payload = {
      reportTitle,
      subject,
      date,
      location,
      preparedBy,
      customerId,
      customerName,
      customerAddress,
      customerPhone,
      branchId,
      status,
      findingsIntro,
      findings,
      photosSection1,
      solutionIntro,
      actionItems,
      photosSection2,
      nextSteps
    };

    try {
      let savedId = id;
      if (isEditing) {
        const res = await axios.put(`${ENDPOINT_URL}/inspection-reports/${id}`, payload);
        savedId = res.data.data._id;
      } else {
        const res = await axios.post(`${ENDPOINT_URL}/inspection-reports`, payload);
        savedId = res.data.data._id;
      }

      setSuccessMessage('Inspection report saved successfully!');
      if (andView && savedId) {
        navigate(`/InspectionReportPrintView/${savedId}`);
      } else {
        setTimeout(() => navigate('/InspectionReportView'), 800);
      }
    } catch (err) {
      console.error('Error saving inspection report:', err);
      setErrorMessage(err.response?.data?.error || err.message || 'Failed to save report.');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f8fafc' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ backgroundColor: '#f8fafc', minHeight: '100vh', py: { xs: 2, md: 4 } }}>
      <Container maxWidth="lg">
        {/* Top Header Bar */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3, flexWrap: 'wrap', gap: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton onClick={() => navigate('/InspectionReportView')} sx={{ color: '#0f172a' }}>
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="h5" sx={{ fontWeight: 700, color: '#0f172a' }}>
              {isEditing ? 'Edit Inspection Report' : 'New Technical Inspection Report'}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 1.5 }}>
            <Button
              variant="contained"
              startIcon={<SaveIcon />}
              onClick={() => handleSubmit(false)}
              disabled={saving}
              sx={{ backgroundColor: '#30368a', '&:hover': { backgroundColor: '#1e2468' }, textTransform: 'none' }}
            >
              {saving ? 'Saving...' : 'Save'}
            </Button>
            <Button
              variant="contained"
              startIcon={<VisibilityIcon />}
              onClick={() => handleSubmit(true)}
              disabled={saving}
              sx={{ backgroundColor: '#0284c7', '&:hover': { backgroundColor: '#0369a1' }, textTransform: 'none' }}
            >
              Save & View
            </Button>
          </Box>
        </Box>

        {errorMessage && <Alert severity="error" sx={{ mb: 3 }}>{errorMessage}</Alert>}
        {successMessage && <Alert severity="success" sx={{ mb: 3 }}>{successMessage}</Alert>}

        {/* ── CARD 1: REPORT OVERVIEW & CLIENT METADATA ── */}
        <Paper sx={{ p: { xs: 2, sm: 3 }, mb: 3, borderRadius: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, color: '#1e293b', mb: 2 }}>
            1. Report Overview & Client Metadata
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={8}>
              <TextField
                fullWidth
                size="small"
                label="Report Header Title"
                value={reportTitle}
                onChange={(e) => setReportTitle(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                size="small"
                type="date"
                label="Inspection Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                size="small"
                label="Report Subject * *"
                placeholder="e.g. Overheating & Relocation of AC Outdoor Units"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                size="small"
                label="Inspection Location / Room * *"
                placeholder="e.g. Under-Stairway Mechanical Room & Exterior Wall"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </Grid>

            {/* Typeable & Searchable Customer Autocomplete */}
            <Grid item xs={12} sm={6}>
              <Autocomplete
                id="search-customer-select"
                options={customers}
                getOptionLabel={(option) => {
                  if (typeof option === 'string') return option;
                  return (
                    option.customerFullName ||
                    option.companyName ||
                    option.Customer ||
                    `${option.customerFirstName || ''} ${option.customerLastName || ''}`.trim() ||
                    'Unknown Customer'
                  );
                }}
                value={customers.find((c) => c._id === customerId) || null}
                onChange={(event, newValue) => {
                  if (newValue) {
                    setCustomerId(newValue._id);
                    const name =
                      newValue.customerFullName ||
                      newValue.companyName ||
                      newValue.Customer ||
                      `${newValue.customerFirstName || ''} ${newValue.customerLastName || ''}`.trim() ||
                      '';
                    const addr = [newValue.billingAddress, newValue.billingCity].filter(Boolean).join(', ');
                    const phone =
                      newValue.customerCompanyPhone || newValue.customerPhone || newValue.phone || newValue.mobile || '';
                    setCustomerName(name);
                    setCustomerAddress(addr);
                    setCustomerPhone(phone);
                  } else {
                    setCustomerId('');
                    setCustomerName('');
                    setCustomerAddress('');
                    setCustomerPhone('');
                  }
                }}
                isOptionEqualToValue={(option, value) => option._id === value?._id}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    size="small"
                    label="Search & Select Client / Customer"
                    placeholder="Type client or company name..."
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                size="small"
                label="Client Name"
                placeholder="Auto-filled or type direct client name"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                size="small"
                label="Prepared By (Department / Lead)"
                value={preparedBy}
                onChange={(e) => setPreparedBy(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                size="small"
                select
                label="Branch"
                value={branchId}
                onChange={(e) => setBranchId(e.target.value)}
              >
                <MenuItem value="HQ">HQ - KOLWEZI</MenuItem>
                <MenuItem value="LUBUMBASHI">LUBUMBASHI</MenuItem>
                <MenuItem value="LIKASI">LIKASI</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                size="small"
                select
                label="Report Status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <MenuItem value="DRAFT">DRAFT</MenuItem>
                <MenuItem value="COMPLETED">COMPLETED</MenuItem>
                <MenuItem value="SENT TO CLIENT">SENT TO CLIENT</MenuItem>
                <MenuItem value="CONVERTED TO QUOTE">CONVERTED TO QUOTE</MenuItem>
              </TextField>
            </Grid>
          </Grid>
        </Paper>

        {/* ── CARD 2: SECTION 1 FINDINGS & CAUSE ── */}
        <Paper sx={{ p: { xs: 2, sm: 3 }, mb: 3, borderRadius: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, color: '#1e293b' }}>
              2. Section 1 — Current Situation & Root Cause Findings
            </Typography>
            <Button
              size="small"
              startIcon={<AddIcon />}
              onClick={handleAddFinding}
              sx={{ textTransform: 'none', color: '#0284c7', fontWeight: 600 }}
            >
              Add Finding Bullet
            </Button>
          </Box>
          <TextField
            fullWidth
            multiline
            rows={2}
            size="small"
            label="Section 1 Introduction Narrative"
            placeholder="e.g. During our technical inspection of the condenser units housed inside the enclosed room beneath the stairway..."
            value={findingsIntro}
            onChange={(e) => setFindingsIntro(e.target.value)}
            sx={{ mb: 2.5 }}
          />

          {/* Finding Bullets (Clean & Empty) */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 3 }}>
            {findings.map((finding, idx) => (
              <Box
                key={idx}
                sx={{
                  p: 2,
                  border: '1px solid #e2e8f0',
                  borderRadius: 1.5,
                  backgroundColor: '#ffffff',
                  position: 'relative'
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#334155' }}>
                    Bullet Point #{idx + 1}
                  </Typography>
                  {findings.length > 1 && (
                    <IconButton size="small" onClick={() => handleDeleteFinding(idx)} sx={{ color: '#ef4444' }}>
                      <DeleteOutlineIcon fontSize="small" />
                    </IconButton>
                  )}
                </Box>
                <Grid container spacing={1.5}>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      size="small"
                      label="Bold Headline Title"
                      placeholder="e.g. Insufficient Room Volume & Heat Accumulation"
                      value={finding.title}
                      onChange={(e) => handleUpdateFinding(idx, 'title', e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <TextField
                      fullWidth
                      multiline
                      rows={2}
                      size="small"
                      label="Technical Observation & Detail"
                      placeholder="e.g. The enclosed room is too compact to accommodate active units simultaneously with restricted airflow..."
                      value={finding.description}
                      onChange={(e) => handleUpdateFinding(idx, 'description', e.target.value)}
                    />
                  </Grid>
                </Grid>
              </Box>
            ))}
          </Box>

          <Divider sx={{ my: 2 }} />

          {/* Section 1 Photographic Evidence */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#334155' }}>
              Section 1 Inspection Photos ({photosSection1.length})
            </Typography>
            <Button
              component="label"
              size="small"
              variant="outlined"
              startIcon={<PhotoCameraIcon />}
              sx={{ textTransform: 'none', color: '#0284c7', borderColor: '#0284c7' }}
            >
              Upload Photo(s)
              <input
                type="file"
                hidden
                multiple
                accept="image/*"
                onChange={(e) => handlePhotoUpload(e, 1)}
              />
            </Button>
          </Box>
          <Grid container spacing={2}>
            {photosSection1.map((photo, pIdx) => (
              <Grid item xs={12} sm={6} md={4} key={pIdx}>
                <Paper sx={{ p: 1.5, border: '1px solid #e2e8f0', borderRadius: 1.5 }}>
                  <Box
                    component="img"
                    src={photo.url}
                    alt={photo.caption}
                    sx={{ width: '100%', height: 160, objectFit: 'cover', borderRadius: 1, mb: 1 }}
                  />
                  <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                    <TextField
                      fullWidth
                      size="small"
                      label={`Figure ${pIdx + 1} Caption`}
                      value={photo.caption}
                      onChange={(e) => handleUpdatePhotoCaption(pIdx, e.target.value, 1)}
                    />
                    <IconButton size="small" onClick={() => handleDeletePhoto(pIdx, 1)} sx={{ color: '#ef4444' }}>
                      <DeleteOutlineIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* ── CARD 3: SECTION 2 RECOMMENDED CORRECTIVE ACTION PLAN ── */}
        <Paper sx={{ p: { xs: 2, sm: 3 }, mb: 3, borderRadius: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, color: '#1e293b' }}>
              3. Section 2 — Recommended Corrective Solution & Action Plan Table
            </Typography>
            <Button
              size="small"
              startIcon={<AddIcon />}
              onClick={handleAddActionItem}
              sx={{ textTransform: 'none', color: '#0284c7', fontWeight: 600 }}
            >
              Add Action Row
            </Button>
          </Box>
          <TextField
            fullWidth
            multiline
            rows={2}
            size="small"
            label="Section 2 Solution Narrative"
            placeholder="e.g. To permanently resolve the thermal buildup and protect compressor reliability, we recommend the following scope of work:"
            value={solutionIntro}
            onChange={(e) => setSolutionIntro(e.target.value)}
            sx={{ mb: 2.5 }}
          />

          {/* Action Table Rows (Clean & Empty) */}
          <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#334155', mb: 1 }}>
            Action Plan Table Rows
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 3 }}>
            {actionItems.map((item, idx) => (
              <Box
                key={idx}
                sx={{
                  p: 2,
                  border: '1px solid #e2e8f0',
                  borderRadius: 1.5,
                  backgroundColor: '#ffffff',
                  position: 'relative'
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#334155' }}>
                    Action Item #{idx + 1}
                  </Typography>
                  {actionItems.length > 1 && (
                    <IconButton size="small" onClick={() => handleDeleteActionItem(idx)} sx={{ color: '#ef4444' }}>
                      <DeleteOutlineIcon fontSize="small" />
                    </IconButton>
                  )}
                </Box>
                <Grid container spacing={1.5}>
                  <Grid item xs={12} sm={4}>
                    <TextField
                      fullWidth
                      size="small"
                      label="Action Item"
                      placeholder="e.g. 1. Remove Existing Exhaust Fans"
                      value={item.actionItem}
                      onChange={(e) => handleUpdateActionItem(idx, 'actionItem', e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <TextField
                      fullWidth
                      multiline
                      rows={2}
                      size="small"
                      label="Technical Scope & Execution Details"
                      placeholder="e.g. Dismantle and remove existing ventilation fans from louver opening..."
                      value={item.scope}
                      onChange={(e) => handleUpdateActionItem(idx, 'scope', e.target.value)}
                    />
                  </Grid>
                </Grid>
              </Box>
            ))}
          </Box>

          <Divider sx={{ my: 2 }} />

          {/* Section 2 Photos */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#334155' }}>
              Section 2 Solution Photos ({photosSection2.length})
            </Typography>
            <Button
              component="label"
              size="small"
              variant="outlined"
              startIcon={<PhotoCameraIcon />}
              sx={{ textTransform: 'none', color: '#0284c7', borderColor: '#0284c7' }}
            >
              Upload Solution Photo
              <input
                type="file"
                hidden
                multiple
                accept="image/*"
                onChange={(e) => handlePhotoUpload(e, 2)}
              />
            </Button>
          </Box>
          <Grid container spacing={2}>
            {photosSection2.map((photo, pIdx) => (
              <Grid item xs={12} sm={6} md={4} key={pIdx}>
                <Paper sx={{ p: 1.5, border: '1px solid #e2e8f0', borderRadius: 1.5 }}>
                  <Box
                    component="img"
                    src={photo.url}
                    alt={photo.caption}
                    sx={{ width: '100%', height: 160, objectFit: 'cover', borderRadius: 1, mb: 1 }}
                  />
                  <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                    <TextField
                      fullWidth
                      size="small"
                      label={`Figure Caption`}
                      value={photo.caption}
                      onChange={(e) => handleUpdatePhotoCaption(pIdx, e.target.value, 2)}
                    />
                    <IconButton size="small" onClick={() => handleDeletePhoto(pIdx, 2)} sx={{ color: '#ef4444' }}>
                      <DeleteOutlineIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* ── CARD 4: NEXT STEPS & SIGN-OFF ── */}
        <Paper sx={{ p: { xs: 2, sm: 3 }, mb: 3, borderRadius: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, color: '#1e293b', mb: 2 }}>
            4. Section 3 — Next Steps
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={3}
            size="small"
            label="Next Steps Description"
            placeholder="e.g. Upon review and approval of this technical recommendation, Global Gate SARL will submit a detailed commercial quotation..."
            value={nextSteps}
            onChange={(e) => setNextSteps(e.target.value)}
          />
        </Paper>

        {/* Bottom Save Actions */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mb: 4 }}>
          <Button
            variant="outlined"
            onClick={() => navigate('/InspectionReportView')}
            sx={{ textTransform: 'none', color: '#64748b', borderColor: '#cbd5e1' }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            startIcon={<SaveIcon />}
            onClick={() => handleSubmit(false)}
            disabled={saving}
            sx={{ backgroundColor: '#30368a', '&:hover': { backgroundColor: '#1e2468' }, textTransform: 'none', px: 3 }}
          >
            {saving ? 'Saving...' : 'Save Report'}
          </Button>
          <Button
            variant="contained"
            startIcon={<VisibilityIcon />}
            onClick={() => handleSubmit(true)}
            disabled={saving}
            sx={{ backgroundColor: '#0284c7', '&:hover': { backgroundColor: '#0369a1' }, textTransform: 'none', px: 3 }}
          >
            Save & View Official Report
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default InspectionReportForm;
