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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Alert,
  Tooltip
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
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

  // Customer dropdown data
  const [customers, setCustomers] = useState([]);

  // Form State
  const [reportTitle, setReportTitle] = useState('Technical Inspection & Corrective Action Report');
  const [subject, setSubject] = useState('');
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [location, setLocation] = useState('');
  const [preparedBy, setPreparedBy] = useState('HVAC Maintenance Team');
  const [customerId, setCustomerId] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [branchId, setBranchId] = useState('HQ');
  const [status, setStatus] = useState('DRAFT');

  // Section 1: Findings
  const [findingsIntro, setFindingsIntro] = useState('');
  const [findings, setFindings] = useState([
    { title: '', description: '' }
  ]);
  const [photosSection1, setPhotosSection1] = useState([]);

  // Section 2: Solutions & Action Plan Table
  const [solutionIntro, setSolutionIntro] = useState('');
  const [actionItems, setActionItems] = useState([
    { actionItem: '', scope: '' }
  ]);
  const [photosSection2, setPhotosSection2] = useState([]);

  // Next steps
  const [nextSteps, setNextSteps] = useState('');

  // AI Smart Draft Dialog State
  const [aiOpen, setAiOpen] = useState(false);
  const [aiNotes, setAiNotes] = useState('');
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState('');

  // Fetch Customers & Initial Report
  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const res = await axios.get(`${ENDPOINT_URL}/customer`);
        const list = Array.isArray(res.data) ? res.data : (res.data?.data || []);
        setCustomers(list);
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
            setFindings(Array.isArray(r.findings) && r.findings.length > 0 ? r.findings : []);
            setPhotosSection1(Array.isArray(r.photosSection1) ? r.photosSection1 : []);
            setSolutionIntro(r.solutionIntro || '');
            setActionItems(Array.isArray(r.actionItems) && r.actionItems.length > 0 ? r.actionItems : []);
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

  const handleCustomerSelect = (e) => {
    const selectedId = e.target.value;
    setCustomerId(selectedId);
    const found = customers.find((c) => c._id === selectedId);
    if (found) {
      const name = found.customerFullName || found.companyName || found.Customer || `${found.customerFirstName || ''} ${found.customerLastName || ''}`.trim() || '';
      const addr = [found.billingAddress, found.billingCity].filter(Boolean).join(', ');
      const phone = found.customerCompanyPhone || found.customerPhone || found.phone || found.mobile || '';
      setCustomerName(name);
      setCustomerAddress(addr);
      setCustomerPhone(phone);
    }
  };

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
    const nextIdx = actionItems.length + 1;
    setActionItems((prev) => [...prev, { actionItem: `${nextIdx}. New Scope Item`, scope: '' }]);
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

  // Image Upload Handler (reads file to base64)
  const handleImageUpload = (section, e) => {
    const files = Array.from(e.target.files);
    if (!files.length) return;

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        const base64 = uploadEvent.target.result;
        if (section === 1) {
          setPhotosSection1((prev) => [
            ...prev,
            {
              url: base64,
              figure: `Figure ${prev.length + 1}`,
              caption: ''
            }
          ]);
        } else {
          setPhotosSection2((prev) => [
            ...prev,
            {
              url: base64,
              figure: `Figure ${photosSection1.length + prev.length + 1}`,
              caption: ''
            }
          ]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleDeletePhoto = (section, index) => {
    if (section === 1) {
      setPhotosSection1((prev) => prev.filter((_, i) => i !== index));
    } else {
      setPhotosSection2((prev) => prev.filter((_, i) => i !== index));
    }
  };

  const handleUpdatePhotoCaption = (section, index, field, value) => {
    if (section === 1) {
      setPhotosSection1((prev) => {
        const copy = [...prev];
        copy[index][field] = value;
        return copy;
      });
    } else {
      setPhotosSection2((prev) => {
        const copy = [...prev];
        copy[index][field] = value;
        return copy;
      });
    }
  };

  // AI Smart Draft Trigger
  const handleRunAiDraft = async () => {
    if (!aiNotes.trim()) {
      setAiError('Please enter some field notes first.');
      return;
    }
    setAiLoading(true);
    setAiError('');
    try {
      const res = await axios.post(`${ENDPOINT_URL}/inspection-reports/ai-draft`, {
        notes: aiNotes.trim(),
        subject,
        customerName,
        location
      });
      if (res.data && res.data.success && res.data.draft) {
        const d = res.data.draft;
        if (d.subject) setSubject(d.subject);
        if (d.findingsIntro) setFindingsIntro(d.findingsIntro);
        if (Array.isArray(d.findings) && d.findings.length > 0) setFindings(d.findings);
        if (d.solutionIntro) setSolutionIntro(d.solutionIntro);
        if (Array.isArray(d.actionItems) && d.actionItems.length > 0) setActionItems(d.actionItems);
        if (d.nextSteps) setNextSteps(d.nextSteps);
        setAiOpen(false);
        setSuccessMessage('AI Draft generated and applied successfully!');
      }
    } catch (err) {
      console.error('Error generating AI draft:', err);
      setAiError(err.response?.data?.error || err.message || 'AI generation failed.');
    } finally {
      setAiLoading(false);
    }
  };

  // Save Report
  const handleSubmit = async (andView = false) => {
    if (!subject.trim()) {
      setErrorMessage('Please provide a report subject.');
      return;
    }
    if (!location.trim()) {
      setErrorMessage('Please provide the inspection location.');
      return;
    }

    setSaving(true);
    setErrorMessage('');
    setSuccessMessage('');

    const payload = {
      reportTitle,
      subject: subject.trim(),
      date,
      location: location.trim(),
      preparedBy: preparedBy.trim(),
      customerId: customerId || null,
      customerName: customerName.trim(),
      customerAddress: customerAddress.trim(),
      customerPhone: customerPhone.trim(),
      branchId,
      findingsIntro,
      findings,
      photosSection1,
      solutionIntro,
      actionItems,
      photosSection2,
      nextSteps,
      status
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
      console.error('Error saving report:', err);
      setErrorMessage(err.response?.data?.error || 'Failed to save report.');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
        <CircularProgress size={40} sx={{ color: '#30368a' }} />
      </Box>
    );
  }

  return (
    <Box sx={{ p: { xs: 1.5, md: 3 }, backgroundColor: '#f8fafc', minHeight: '100vh' }}>
      <Container maxWidth="lg" disableGutters>
        {/* Top Navigation & Action Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2.5, flexWrap: 'wrap', gap: 1.5 }}>
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
              variant="outlined"
              startIcon={<AutoAwesomeIcon sx={{ color: '#8b5cf6' }} />}
              onClick={() => setAiOpen(true)}
              sx={{ textTransform: 'none', borderColor: '#8b5cf6', color: '#7c3aed', fontWeight: 600 }}
            >
              Smart Draft with AI
            </Button>
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

        {errorMessage && <Alert severity="error" sx={{ mb: 2 }}>{errorMessage}</Alert>}
        {successMessage && <Alert severity="success" sx={{ mb: 2 }}>{successMessage}</Alert>}

        {/* 1. Header & General Metadata */}
        <Paper elevation={0} sx={{ p: 3, mb: 3, borderRadius: 2, border: '1px solid #e2e8f0' }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#0f172a', mb: 2 }}>
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
                label="Report Subject *"
                placeholder="e.g. Overheating & Relocation of 3 AC Outdoor Units"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                size="small"
                label="Inspection Location / Room *"
                placeholder="e.g. Under-Stairway Mechanical Room & Exterior Wall"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                size="small"
                select
                label="Select Client / Customer"
                value={customerId}
                onChange={handleCustomerSelect}
              >
                <MenuItem value="">-- Direct Input / Unlisted Client --</MenuItem>
                {customers.map((c) => (
                  <MenuItem key={c._id} value={c._id}>
                    {c.customerFullName || c.companyName || c.Customer || `${c.customerFirstName || ''} ${c.customerLastName || ''}`.trim() || 'Unknown Customer'}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                size="small"
                label="Client Name"
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
                <MenuItem value="HQ">HQ - Kolwezi</MenuItem>
                <MenuItem value="KOLWEZI">Kolwezi</MenuItem>
                <MenuItem value="LUBUMBASHI">Lubumbashi</MenuItem>
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
                <MenuItem value="DRAFT">Draft</MenuItem>
                <MenuItem value="COMPLETED">Completed</MenuItem>
                <MenuItem value="SENT">Sent to Client</MenuItem>
              </TextField>
            </Grid>
          </Grid>
        </Paper>

        {/* 2. Section 1: Current Situation & Root Cause Findings */}
        <Paper elevation={0} sx={{ p: 3, mb: 3, borderRadius: 2, border: '1px solid #e2e8f0' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#0f172a' }}>
              2. Section 1 — Current Situation & Root Cause Findings
            </Typography>
            <Button
              size="small"
              startIcon={<AddIcon />}
              onClick={handleAddFinding}
              sx={{ textTransform: 'none', color: '#0284c7' }}
            >
              Add Finding Bullet
            </Button>
          </Box>

          <TextField
            fullWidth
            size="small"
            multiline
            rows={2}
            label="Section 1 Introduction Narrative"
            placeholder="e.g. During our technical inspection of the three air conditioning outdoor condenser units..."
            value={findingsIntro}
            onChange={(e) => setFindingsIntro(e.target.value)}
            sx={{ mb: 2.5 }}
          />

          {findings.map((item, idx) => (
            <Paper key={idx} elevation={0} sx={{ p: 2, mb: 1.5, backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 1.5 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                <Typography variant="caption" sx={{ fontWeight: 700, color: '#334155' }}>
                  Bullet Point #{idx + 1}
                </Typography>
                <IconButton size="small" onClick={() => handleDeleteFinding(idx)} sx={{ color: '#dc2626' }}>
                  <DeleteOutlineIcon fontSize="small" />
                </IconButton>
              </Box>
              <Grid container spacing={1.5}>
                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    size="small"
                    label="Bold Headline Title"
                    placeholder="e.g. Insufficient Room Volume & Heat Accumulation"
                    value={item.title}
                    onChange={(e) => handleUpdateFinding(idx, 'title', e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={8}>
                  <TextField
                    fullWidth
                    size="small"
                    multiline
                    rows={2}
                    label="Technical Observation & Detail"
                    placeholder="e.g. The enclosed room is far too compact to accommodate three active condenser units..."
                    value={item.description}
                    onChange={(e) => handleUpdateFinding(idx, 'description', e.target.value)}
                  />
                </Grid>
              </Grid>
            </Paper>
          ))}

          {/* Section 1 Photo Gallery */}
          <Divider sx={{ my: 2.5 }} />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#334155' }}>
              Section 1 Inspection Photos ({photosSection1.length})
            </Typography>
            <Button
              component="label"
              size="small"
              variant="outlined"
              startIcon={<PhotoCameraIcon />}
              sx={{ textTransform: 'none' }}
            >
              Upload Photo(s)
              <input type="file" hidden accept="image/*" multiple onChange={(e) => handleImageUpload(1, e)} />
            </Button>
          </Box>

          <Grid container spacing={2}>
            {photosSection1.map((photo, idx) => (
              <Grid item xs={12} sm={6} key={idx}>
                <Paper elevation={0} sx={{ p: 1.5, border: '1px solid #cbd5e1', borderRadius: 1.5 }}>
                  <Box sx={{ position: 'relative', height: 180, mb: 1, backgroundColor: '#000', borderRadius: 1, overflow: 'hidden' }}>
                    <img
                      src={photo.url}
                      alt={photo.caption || 'Inspection photo'}
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                    <IconButton
                      size="small"
                      onClick={() => handleDeletePhoto(1, idx)}
                      sx={{ position: 'absolute', top: 6, right: 6, backgroundColor: 'rgba(0,0,0,0.6)', color: '#fff', '&:hover': { backgroundColor: 'rgba(220,38,38,0.8)' } }}
                    >
                      <DeleteOutlineIcon fontSize="small" />
                    </IconButton>
                  </Box>
                  <Grid container spacing={1}>
                    <Grid item xs={4}>
                      <TextField
                        size="small"
                        label="Figure Label"
                        value={photo.figure}
                        onChange={(e) => handleUpdatePhotoCaption(1, idx, 'figure', e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={8}>
                      <TextField
                        size="small"
                        fullWidth
                        label="Photo Caption"
                        placeholder="e.g. Existing three exhaust ventilation fans..."
                        value={photo.caption}
                        onChange={(e) => handleUpdatePhotoCaption(1, idx, 'caption', e.target.value)}
                      />
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* 3. Section 2: Recommended Corrective Solution & Action Plan Table */}
        <Paper elevation={0} sx={{ p: 3, mb: 3, borderRadius: 2, border: '1px solid #e2e8f0' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#0f172a' }}>
              3. Section 2 — Recommended Corrective Solution & Action Plan
            </Typography>
            <Button
              size="small"
              startIcon={<AddIcon />}
              onClick={handleAddActionItem}
              sx={{ textTransform: 'none', color: '#0284c7' }}
            >
              Add Action Row
            </Button>
          </Box>

          <TextField
            fullWidth
            size="small"
            multiline
            rows={2}
            label="Section 2 Solution Narrative"
            placeholder="e.g. To permanently eliminate compressor overheating and restore cooling efficiency, we recommend reconfiguring the installation..."
            value={solutionIntro}
            onChange={(e) => setSolutionIntro(e.target.value)}
            sx={{ mb: 2.5 }}
          />

          {/* Action Plan Table Rows */}
          <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#334155', mb: 1 }}>
            Action Plan Table Rows
          </Typography>
          {actionItems.map((item, idx) => (
            <Paper key={idx} elevation={0} sx={{ p: 2, mb: 1.5, backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 1.5 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                <Typography variant="caption" sx={{ fontWeight: 700, color: '#0f172a' }}>
                  Action Item #{idx + 1}
                </Typography>
                <IconButton size="small" onClick={() => handleDeleteActionItem(idx)} sx={{ color: '#dc2626' }}>
                  <DeleteOutlineIcon fontSize="small" />
                </IconButton>
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
                    size="small"
                    multiline
                    rows={2}
                    label="Technical Scope & Execution Details"
                    placeholder="e.g. Dismantle and remove all three existing wall-mounted ventilation fans from the louver window..."
                    value={item.scope}
                    onChange={(e) => handleUpdateActionItem(idx, 'scope', e.target.value)}
                  />
                </Grid>
              </Grid>
            </Paper>
          ))}

          {/* Section 2 Additional Photos */}
          <Divider sx={{ my: 2.5 }} />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#334155' }}>
              Section 2 Solution Photos ({photosSection2.length})
            </Typography>
            <Button
              component="label"
              size="small"
              variant="outlined"
              startIcon={<PhotoCameraIcon />}
              sx={{ textTransform: 'none' }}
            >
              Upload Solution Photo
              <input type="file" hidden accept="image/*" multiple onChange={(e) => handleImageUpload(2, e)} />
            </Button>
          </Box>

          <Grid container spacing={2}>
            {photosSection2.map((photo, idx) => (
              <Grid item xs={12} sm={6} key={idx}>
                <Paper elevation={0} sx={{ p: 1.5, border: '1px solid #cbd5e1', borderRadius: 1.5 }}>
                  <Box sx={{ position: 'relative', height: 180, mb: 1, backgroundColor: '#000', borderRadius: 1, overflow: 'hidden' }}>
                    <img
                      src={photo.url}
                      alt={photo.caption || 'Solution photo'}
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                    <IconButton
                      size="small"
                      onClick={() => handleDeletePhoto(2, idx)}
                      sx={{ position: 'absolute', top: 6, right: 6, backgroundColor: 'rgba(0,0,0,0.6)', color: '#fff', '&:hover': { backgroundColor: 'rgba(220,38,38,0.8)' } }}
                    >
                      <DeleteOutlineIcon fontSize="small" />
                    </IconButton>
                  </Box>
                  <Grid container spacing={1}>
                    <Grid item xs={4}>
                      <TextField
                        size="small"
                        label="Figure Label"
                        value={photo.figure}
                        onChange={(e) => handleUpdatePhotoCaption(2, idx, 'figure', e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={8}>
                      <TextField
                        size="small"
                        fullWidth
                        label="Photo Caption"
                        placeholder="e.g. Proposed exterior corner location beneath the window..."
                        value={photo.caption}
                        onChange={(e) => handleUpdatePhotoCaption(2, idx, 'caption', e.target.value)}
                      />
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* 4. Next Steps Callout */}
        <Paper elevation={0} sx={{ p: 3, mb: 3, borderRadius: 2, border: '1px solid #e2e8f0' }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#0f172a', mb: 2 }}>
            4. Next Steps & Commercial Recommendation
          </Typography>
          <TextField
            fullWidth
            size="small"
            multiline
            rows={3}
            label="Next Steps Box Text"
            value={nextSteps}
            onChange={(e) => setNextSteps(e.target.value)}
          />
        </Paper>

        {/* Bottom Actions */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, pb: 4 }}>
          <Button variant="outlined" onClick={() => navigate('/InspectionReportView')} sx={{ textTransform: 'none' }}>
            Cancel
          </Button>
          <Button
            variant="contained"
            startIcon={<SaveIcon />}
            onClick={() => handleSubmit(false)}
            disabled={saving}
            sx={{ backgroundColor: '#30368a', textTransform: 'none', px: 4 }}
          >
            {saving ? 'Saving...' : 'Save Report'}
          </Button>
          <Button
            variant="contained"
            startIcon={<VisibilityIcon />}
            onClick={() => handleSubmit(true)}
            disabled={saving}
            sx={{ backgroundColor: '#0284c7', textTransform: 'none', px: 4 }}
          >
            Save & View Official Report
          </Button>
        </Box>

        {/* AI Smart Draft Modal */}
        <Dialog open={aiOpen} onClose={() => !aiLoading && setAiOpen(false)} maxWidth="md" fullWidth>
          <DialogTitle sx={{ display: 'flex', alignItems: 'center', gap: 1, fontWeight: 700 }}>
            <AutoAwesomeIcon sx={{ color: '#8b5cf6' }} />
            ✨ Smart Draft with Gemini
          </DialogTitle>
          <DialogContent dividers>
            <Typography variant="body2" sx={{ color: '#475569', mb: 2 }}>
              Paste your rough technician notes, audio transcript, or quick observations from the site. The Gemini engine will transform your raw text into formal engineering findings and a structured action table.
            </Typography>
            {aiError && <Alert severity="error" sx={{ mb: 2 }}>{aiError}</Alert>}
            <TextField
              fullWidth
              multiline
              rows={6}
              placeholder="e.g. 3 aircon outdoor units placed under stairs small room with 3 fans. Room space too small, heat damaging fans and tripping compressors on overheating. Suggest to remove the 3 fans, relocate 2 units to face the linear grill, and move 3rd unit outside under window..."
              value={aiNotes}
              onChange={(e) => setAiNotes(e.target.value)}
              disabled={aiLoading}
            />
          </DialogContent>
          <DialogActions sx={{ p: 2 }}>
            <Button onClick={() => setAiOpen(false)} disabled={aiLoading} sx={{ textTransform: 'none', color: '#64748b' }}>
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={handleRunAiDraft}
              disabled={aiLoading}
              startIcon={aiLoading ? <CircularProgress size={18} sx={{ color: '#fff' }} /> : <AutoAwesomeIcon />}
              sx={{ backgroundColor: '#7c3aed', '&:hover': { backgroundColor: '#6d28d9' }, textTransform: 'none' }}
            >
              {aiLoading ? 'Generating Engineering Draft...' : 'Generate AI Draft'}
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
}

export default InspectionReportForm;
