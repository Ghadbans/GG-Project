import React, { useState, useEffect, useMemo } from 'react';
import '../../view.css';
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  CircularProgress,
  Divider,
  Chip,
  Alert,
  IconButton,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Tooltip,
  styled
} from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import CampaignIcon from '@mui/icons-material/Campaign';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import LaunchIcon from '@mui/icons-material/Launch';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SendIcon from '@mui/icons-material/Send';
import RefreshIcon from '@mui/icons-material/Refresh';
import CloseIcon from '@mui/icons-material/Close';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCurrentUser, setUser } from '../../../features/auth/authSlice';
import { ENDPOINT_URL, API_BASE_URL } from '../../../apiConfig';
import { cachedGet } from '../../../utils/apiCache';
import SidebarDashE2 from '../../../component/SidebarDashE2';
import NotificationVIewInfo from '../../NotificationVIewInfo';
import MessageAdminView from '../../MessageAdminView';
import Logout from '../../../component/NetworkLogoutIcon';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

function MarketingViewAdmin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);

  const [sideBar, setSideBar] = useState(false);
  const toggleDrawer = () => setSideBar(!sideBar);

  // Form State
  const [brief, setBrief] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [productImage, setProductImage] = useState(null);
  const [productImageName, setProductImageName] = useState('');
  const [theme, setTheme] = useState('villa'); // 'villa' | 'corporate' | 'industrial' | 'solar'
  const [isFullFlyer, setIsFullFlyer] = useState(false);
  const [targetPlatforms, setTargetPlatforms] = useState({
    facebook: true,
    whatsapp: true,
    instagram: true,
  });
  const [previewGenerated, setPreviewGenerated] = useState(false);
  const [loadingPreview, setLoadingPreview] = useState(false);
  const [loadingPublish, setLoadingPublish] = useState(false);
  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  // WhatsApp recipients (saved customer selection list)
  const SELF_NUMBER = '+243827722222';
  const [customers, setCustomers] = useState([]);
  const [savedRecipientIds, setSavedRecipientIds] = useState([]);
  const [includeSavedList, setIncludeSavedList] = useState(true);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [pickerSelection, setPickerSelection] = useState([]);
  const [pickerSearch, setPickerSearch] = useState('');
  const [pickerTab, setPickerTab] = useState('withPhone'); // 'withPhone' | 'all' | 'selected'
  const [savingList, setSavingList] = useState(false);
  const [refreshingCustomers, setRefreshingCustomers] = useState(false);

  const getCustomerPhone = (c) => {
    if (!c) return '';
    const candidates = [
      c?.customerCompanyPhone,
      c?.customerPhone,
      c?.phone,
      c?.telephone,
      c?.mobile,
      c?.contactPhone,
      c?.tel,
      c?.whatsapp,
    ];
    for (const p of candidates) {
      if (!p) continue;
      const str = String(p).trim();
      if (!str) continue;
      const parts = str.split(/[/,;\n]+/);
      for (const part of parts) {
        const d = part.replace(/[^0-9]/g, '');
        if (d.length >= 7 && d.length <= 16) return part.trim();
      }
      const digits = str.replace(/[^0-9]/g, '');
      if (digits.length >= 7 && digits.length <= 16) return str;
    }
    return '';
  };

  const customersWithPhone = useMemo(
    () => (customers || []).filter((c) => Boolean(getCustomerPhone(c))),
    [customers]
  );

  const savedRecipients = useMemo(
    () => customersWithPhone.filter((c) => savedRecipientIds.includes(String(c._id))),
    [customersWithPhone, savedRecipientIds]
  );

  const reloadCustomers = async () => {
    setRefreshingCustomers(true);
    try {
      const res = await axios.get(`${ENDPOINT_URL}/customer?_t=${Date.now()}`);
      const list = res.data?.data || [];
      setCustomers(list);
      toast.success(`Refreshed ${list.length} customers from database.`);
    } catch (err) {
      console.error('Refresh customers error:', err);
      toast.error('Failed to refresh customer list.');
    } finally {
      setRefreshingCustomers(false);
    }
  };

  const pickerFiltered = useMemo(() => {
    const q = pickerSearch.trim().toLowerCase();

    let list = customers || [];
    if (!q) {
      if (pickerTab === 'withPhone') {
        list = customersWithPhone;
      } else if (pickerTab === 'selected') {
        list = (customers || []).filter((c) => pickerSelection.includes(String(c._id)));
      }
    } else {
      // When searching, search across ALL customers in DB so no customer is ever hidden!
      list = (customers || []).filter((c) => {
        const phone = getCustomerPhone(c);
        const name1 = c.Customer || '';
        const name2 = c.customerFullName || '';
        const name3 = `${c.customerFirstName || ''} ${c.customerLastName || ''}`;
        const comp = c.companyName || '';
        const raw1 = c.customerPhone || '';
        const raw2 = c.customerCompanyPhone || '';
        const allText = `${name1} ${name2} ${name3} ${comp} ${phone} ${raw1} ${raw2}`.toLowerCase();
        return allText.includes(q);
      });
    }

    return list
      .slice()
      .sort((a, b) => {
        const nameA = String(a.Customer || a.customerFullName || a.companyName || '').trim();
        const nameB = String(b.Customer || b.customerFullName || b.companyName || '').trim();
        return nameA.localeCompare(nameB);
      });
  }, [customers, customersWithPhone, pickerSearch, pickerTab, pickerSelection]);

  const marketingHeaders = () => ({
    'x-user-name': user?.data?.userName || '',
    'x-user-id': user?.data?.id || localStorage.getItem('user') || '',
  });

  const openRecipientPicker = () => {
    if (customers.length === 0) {
      reloadCustomers();
    }
    setPickerSelection(savedRecipientIds.filter((id) => (customers || []).some((c) => String(c._id) === id)));
    setPickerSearch('');
    setPickerTab('withPhone');
    setPickerOpen(true);
  };

  const togglePickerCustomer = (id) => {
    const sid = String(id);
    setPickerSelection((prev) => (prev.includes(sid) ? prev.filter((x) => x !== sid) : [...prev, sid]));
  };

  const saveRecipientList = async () => {
    setSavingList(true);
    try {
      const ids = pickerSelection.map(String);
      await axios.put(
        `${API_BASE_URL}/api/marketing/recipients`,
        { customerIds: ids, userName: user?.data?.userName || '' },
        { headers: marketingHeaders() }
      );
      setSavedRecipientIds(ids);
      setIncludeSavedList(ids.length > 0);
      setPickerOpen(false);
      toast.success(`WhatsApp recipients list saved (${ids.length} customers).`);
    } catch (err) {
      console.error('Save recipients failed:', err);
      toast.error(err.response?.data?.error || 'Failed to save recipients list.');
    } finally {
      setSavingList(false);
    }
  };

  // Builds the comma separated WhatsApp recipients: Global Gate number ALWAYS first.
  const buildWhatsappNumbers = () => {
    if (!targetPlatforms.whatsapp) return '';
    const list = [SELF_NUMBER];
    if (whatsappNumber.trim()) list.push(whatsappNumber.trim());
    if (includeSavedList) savedRecipients.forEach((c) => list.push(getCustomerPhone(c)));
    return list.join(',');
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      toast.warning('Please select an image file (PNG, JPG, WEBP).');
      return;
    }
    if (file.size > 15 * 1024 * 1024) {
      toast.warning('Image size should be under 15MB.');
      return;
    }
    const reader = new FileReader();
    reader.onload = (uploadEvent) => {
      setProductImage(uploadEvent.target.result);
      setProductImageName(file.name);
      setPreviewGenerated(false);
      setResult(null);
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = () => {
    setProductImage(null);
    setProductImageName('');
    setPreviewGenerated(false);
    setResult(null);
  };

  // Access Permission Verification
  const [hasAccess, setHasAccess] = useState(true);
  const [loadingPermission, setLoadingPermission] = useState(true);

  useEffect(() => {
    const storesUserId = localStorage.getItem('user');
    const fetchUserAndAccess = async () => {
      if (!storesUserId) {
        navigate('/');
        return;
      }

      try {
        const resUser = await axios.get(`${ENDPOINT_URL}/get-employeeuser/${storesUserId}`);
        const name = resUser.data.data.employeeName;
        const role = resUser.data.data.role;
        const id = resUser.data.data._id;
        dispatch(setUser({ userName: name, role, id }));

        // Master bypass for GG
        if (name === 'GG') {
          setHasAccess(true);
          setLoadingPermission(false);
          return;
        }

        // Check GrantAccess permissions
        const resAccess = await cachedGet(`${ENDPOINT_URL}/grantAccess`);
        const userAccess = resAccess?.data?.data?.find((row) => row.userID === id);

        const isMarketingGranted = Boolean(
          userAccess?.marketing ||
          (Array.isArray(userAccess?.modules) &&
            userAccess.modules.some(
              (m) => String(m.moduleName).toLowerCase() === 'marketing' && (m.access?.readM || m.access?.createM)
            ))
        );

        setHasAccess(isMarketingGranted);
      } catch (err) {
        console.error('Error verifying marketing permissions:', err);
        setHasAccess(false);
      } finally {
        setLoadingPermission(false);
      }
    };

    fetchUserAndAccess();
  }, [dispatch, navigate]);

  // Load customers (phone source) and the saved WhatsApp recipients list
  useEffect(() => {
    if (loadingPermission || !hasAccess || !user?.data?.userName) return;
    let cancelled = false;
    (async () => {
      try {
        const resCustomers = await axios.get(`${ENDPOINT_URL}/customer?_t=${Date.now()}`);
        if (!cancelled) setCustomers(resCustomers?.data?.data || []);
      } catch (err) {
        console.warn('[Marketing] Could not load customers:', err.message);
      }
      try {
        const resSaved = await axios.get(`${API_BASE_URL}/api/marketing/recipients`, { headers: marketingHeaders() });
        if (!cancelled) {
          const ids = (resSaved.data?.customerIds || []).map(String);
          setSavedRecipientIds(ids);
          setIncludeSavedList(ids.length > 0);
        }
      } catch (err) {
        console.warn('[Marketing] Could not load saved recipients:', err.message);
      }
    })();
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadingPermission, hasAccess, user?.data?.userName]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch(setUser(null));
    navigate('/');
  };

  const handleGeneratePreview = async (e) => {
    if (e && e.preventDefault) e.preventDefault();

    if (!brief.trim()) {
      toast.warning('Please enter a promotional brief first.');
      return;
    }

    setLoadingPreview(true);
    setErrorMessage('');
    setResult(null);
    setPreviewGenerated(false);

    const payload = {
      brief: brief.trim(),
      whatsappNumber: buildWhatsappNumbers(),
      productImage: productImage || null,
      theme,
      isFullFlyer,
      previewOnly: true,
      platforms: {
        facebook: targetPlatforms.facebook,
        whatsapp: targetPlatforms.whatsapp,
        instagram: targetPlatforms.instagram,
      },
      userId: user?.data?.id || localStorage.getItem('user'),
      userName: user?.data?.userName || '',
    };

    try {
      let resData = null;

      if (window.electron && typeof window.electron.runMarketing === 'function') {
        try {
          console.log('[Marketing] Generating preview via Electron local IPC...');
          const ipcRes = await window.electron.runMarketing(payload);
          if (ipcRes && ipcRes.success) {
            resData = ipcRes;
          } else {
            console.warn('[Marketing] Electron local IPC did not return success, trying fallbacks...', ipcRes?.error);
          }
        } catch (ipcErr) {
          console.warn('[Marketing] Electron IPC error, falling back:', ipcErr);
        }
      }

      if (!resData) {
        try {
          const localRes = await axios.post('http://127.0.0.1:5055/publish', payload, { timeout: 10000 });
          if (localRes.data && localRes.data.success) {
            resData = localRes.data;
          }
        } catch (_) {}
      }

      if (!resData) {
        const res = await axios.post(`${API_BASE_URL}/api/marketing/publish`, payload);
        resData = res.data;
      }

      if (resData && resData.success) {
        setResult(resData);
        setPreviewGenerated(true);
        toast.success('🎨 Flyer preview generated! Review the card and click "Approve & Publish" when ready.');
      } else {
        const err = resData?.error || 'Preview generation failed.';
        setErrorMessage(err);
        toast.error(err);
        if (resData) setResult(resData);
      }
    } catch (err) {
      console.error('Marketing preview failed:', err);
      const serverErr = err.response?.data?.error || err.message || 'Failed to generate flyer preview.';
      setErrorMessage(serverErr);
      toast.error(serverErr);
    } finally {
      setLoadingPreview(false);
    }
  };

  const handleApproveAndPublish = async () => {
    if (!targetPlatforms.facebook && !targetPlatforms.whatsapp && !targetPlatforms.instagram) {
      toast.warning('Please select at least one target dispatch platform.');
      return;
    }

    const externalCount = buildWhatsappNumbers().split(',').filter(Boolean).length - 1;
    if (targetPlatforms.whatsapp && externalCount > 0) {
      const ok = window.confirm(
        `The flyer will be sent on WhatsApp to Global Gate plus up to ${externalCount} other number(s), one by one with a 8-20 second pause between messages (this can take several minutes).\n\nContinue?`
      );
      if (!ok) return;
    }

    setLoadingPublish(true);
    setErrorMessage('');

    const payload = {
      brief: brief.trim(),
      whatsappNumber: buildWhatsappNumbers(),
      productImage: productImage || null,
      theme,
      isFullFlyer,
      previewOnly: false,
      platforms: {
        facebook: targetPlatforms.facebook,
        whatsapp: targetPlatforms.whatsapp,
        instagram: targetPlatforms.instagram,
      },
      userId: user?.data?.id || localStorage.getItem('user'),
      userName: user?.data?.userName || '',
    };

    try {
      let resData = null;

      if (window.electron && typeof window.electron.runMarketing === 'function') {
        try {
          console.log('[Marketing] Running publish via Electron local agent IPC...');
          const ipcRes = await window.electron.runMarketing(payload);
          if (ipcRes && ipcRes.success) {
            resData = ipcRes;
          } else {
            console.warn('[Marketing] Electron local agent IPC failed, falling back to server...', ipcRes?.error);
          }
        } catch (ipcErr) {
          console.warn('[Marketing] Electron IPC error, falling back:', ipcErr);
        }
      }

      if (!resData) {
        try {
          const localRes = await axios.post('http://127.0.0.1:5055/publish', payload, { timeout: 120000 + Math.max(0, (payload.whatsappNumber.match(/,/g) || []).length) * 35000 });
          if (localRes.data && localRes.data.success) {
            resData = localRes.data;
          }
        } catch (_) {}
      }

      if (!resData) {
        const res = await axios.post(`${API_BASE_URL}/api/marketing/publish`, payload);
        resData = res.data;
      }

      if (resData && resData.success) {
        setResult(resData);
        const fbOk = resData.facebook?.success;
        const waOk = resData.whatsapp?.success;
        const igOk = resData.instagram?.success;

        const successChannels = [];
        if (fbOk) successChannels.push('Facebook');
        if (waOk) successChannels.push('WhatsApp');
        if (igOk) successChannels.push('Instagram');

        if (successChannels.length > 0) {
          toast.success(`🎉 Flyer successfully dispatched to ${successChannels.join(' & ')}!`);
        } else {
          toast.info('Publishing completed. Check platform statuses on the right.');
        }
      } else {
        const err = resData?.error || 'Campaign execution returned an error.';
        setErrorMessage(err);
        toast.error(err);
        if (resData) setResult(resData);
      }
    } catch (err) {
      console.error('Marketing publish failed:', err);
      const serverErr = err.response?.data?.error || err.message || 'Failed to connect to marketing agent.';
      setErrorMessage(serverErr);
      toast.error(serverErr);
    } finally {
      setLoadingPublish(false);
    }
  };

  if (loadingPermission) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f4f6f8' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!hasAccess) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', p: 3, backgroundColor: '#f4f6f8' }}>
        <Paper sx={{ p: 4, maxWidth: 500, textAlign: 'center', borderRadius: 2 }}>
          <ErrorOutlineIcon color="error" sx={{ fontSize: 60, mb: 2 }} />
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, color: '#1e293b' }}>
            Access Restricted
          </Typography>
          <Typography variant="body1" sx={{ color: '#64748b', mb: 3 }}>
            You do not have permission to access the Marketing module. Please contact the CEO or system administrator (GG) to grant you access.
          </Typography>
          <Button variant="contained" onClick={() => navigate('/AdminHome')} sx={{ backgroundColor: '#30368a' }}>
            Return to Dashboard
          </Button>
        </Paper>
      </Box>
    );
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="absolute" open={sideBar} sx={{ backgroundColor: '#202a5a' }}>
        <Toolbar sx={{ pr: '24px' }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{ marginRight: '36px', ...(sideBar && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <CampaignIcon sx={{ mr: 1.5, fontSize: 28 }} />
          <Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1, fontWeight: 600 }}>
            Marketing Campaign & Flyer Publisher
          </Typography>
          <NotificationVIewInfo />
          <MessageAdminView name={user?.data?.userName || ''} role={user?.data?.role || ''} />
          <IconButton color="inherit" onClick={handleLogout}>
            <Logout style={{ color: 'white' }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={sideBar} onMouseEnter={() => setSideBar(true)} onMouseLeave={() => setSideBar(false)}>
        <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', px: [1] }}>
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List sx={{ height: '700px' }}>
          <SidebarDashE2 />
        </List>
      </Drawer>

      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
          pt: 10,
          pb: 6,
          px: { xs: 2, sm: 4 }
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ mb: 3 }}>
            <Typography variant="h4" sx={{ fontWeight: 700, color: '#1e293b', mb: 0.5 }}>
              📢 Social Marketing & Flyer Generator
            </Typography>
            <Typography variant="body1" sx={{ color: '#64748b' }}>
              Create branded promotional flyers with AI-assisted copy and instantly dispatch to Facebook Page and WhatsApp.
            </Typography>
          </Box>

          {errorMessage && (
            <Alert severity="error" sx={{ mb: 3 }} onClose={() => setErrorMessage('')}>
              {errorMessage}
            </Alert>
          )}

          <Grid container spacing={3}>
            {/* Input Form Column */}
            <Grid item xs={12} md={7}>
              <Card sx={{ borderRadius: 2, boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: '#202a5a', mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                    <AutoAwesomeIcon color="warning" /> Campaign Brief & Details
                  </Typography>

                  <Box component="form" onSubmit={handleGeneratePreview}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#475569', mb: 1 }}>
                      Promotional Brief / Offer Description *
                    </Typography>
                    <TextField
                      fullWidth
                      multiline
                      rows={4}
                      placeholder="Enter your promotional brief or offer details..."
                      value={brief}
                      onChange={(e) => {
                        setBrief(e.target.value);
                        setPreviewGenerated(false);
                        setResult(null);
                      }}
                      disabled={loadingPreview || loadingPublish}
                      required
                      sx={{ mb: 2.5, backgroundColor: '#ffffff' }}
                    />

                    {/* Flyer Mode Toggle & Architectural Theme Selector */}
                    <Box sx={{ mb: 2.5, p: 2, backgroundColor: '#f8fafc', borderRadius: 2, border: '1px solid #e2e8f0' }}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={isFullFlyer}
                            onChange={(e) => {
                              setIsFullFlyer(e.target.checked);
                              setPreviewGenerated(false);
                              setResult(null);
                            }}
                            sx={{ color: '#f59e0b', '&.Mui-checked': { color: '#f59e0b' } }}
                          />
                        }
                        label={
                          <Box>
                            <Typography variant="body2" sx={{ fontWeight: 700, color: '#0f172a' }}>
                              🎨 Ready-Made Flyer Mode
                            </Typography>
                            <Typography variant="caption" sx={{ color: '#64748b' }}>
                              When enabled, your uploaded image is published 100% full-bleed directly without re-compositing.
                            </Typography>
                          </Box>
                        }
                        sx={{ alignItems: 'flex-start', mb: isFullFlyer ? 0 : 1.5 }}
                      />

                      {!isFullFlyer && (
                        <Box sx={{ mt: 1 }}>
                          <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#475569', mb: 1 }}>
                            🏛️ Architectural 3D Scene Theme:
                          </Typography>
                          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                            <Chip
                              label="🏡 Luxury Modern Villa"
                              clickable
                              color={theme === 'villa' ? 'primary' : 'default'}
                              variant={theme === 'villa' ? 'filled' : 'outlined'}
                              onClick={() => { setTheme('villa'); setPreviewGenerated(false); setResult(null); }}
                              sx={{ fontWeight: 600 }}
                            />
                            <Chip
                              label="🏢 Corporate Plaza"
                              clickable
                              color={theme === 'corporate' ? 'primary' : 'default'}
                              variant={theme === 'corporate' ? 'filled' : 'outlined'}
                              onClick={() => { setTheme('corporate'); setPreviewGenerated(false); setResult(null); }}
                              sx={{ fontWeight: 600 }}
                            />
                            <Chip
                              label="🏭 Industrial Complex"
                              clickable
                              color={theme === 'industrial' ? 'primary' : 'default'}
                              variant={theme === 'industrial' ? 'filled' : 'outlined'}
                              onClick={() => { setTheme('industrial'); setPreviewGenerated(false); setResult(null); }}
                              sx={{ fontWeight: 600 }}
                            />
                            <Chip
                              label="☀️ Clean Energy & Solar"
                              clickable
                              color={theme === 'solar' ? 'primary' : 'default'}
                              variant={theme === 'solar' ? 'filled' : 'outlined'}
                              onClick={() => { setTheme('solar'); setPreviewGenerated(false); setResult(null); }}
                              sx={{ fontWeight: 600 }}
                            />
                          </Box>
                        </Box>
                      )}
                    </Box>

                    {/* Product Photo Uploader (Optional) */}
                    <Box sx={{ mb: 2.5 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#475569' }}>
                          {isFullFlyer ? 'Ready-Made Flyer Graphic *' : 'Product Photo (Embedded on 3D Pedestal in Architectural Scene)'}
                        </Typography>
                        {productImage && (
                          <Button
                            size="small"
                            color="error"
                            startIcon={<DeleteOutlineIcon />}
                            onClick={handleRemoveImage}
                            disabled={loadingPreview || loadingPublish}
                            sx={{ textTransform: 'none', py: 0 }}
                          >
                            Remove Photo
                          </Button>
                        )}
                      </Box>
                      {!productImage ? (
                        <Box
                          component="label"
                          sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '2px dashed #cbd5e1',
                            borderRadius: 2,
                            p: 2.5,
                            cursor: 'pointer',
                            backgroundColor: '#f8fafc',
                            transition: 'all 0.2s ease',
                            '&:hover': {
                              borderColor: '#30368a',
                              backgroundColor: '#f1f5f9'
                            }
                          }}
                        >
                          <input
                            type="file"
                            accept="image/*"
                            style={{ display: 'none' }}
                            onChange={handleImageUpload}
                            disabled={loadingPreview || loadingPublish}
                          />
                          <CloudUploadIcon sx={{ fontSize: 36, color: '#64748b', mb: 0.5 }} />
                          <Typography variant="body2" sx={{ fontWeight: 600, color: '#334155' }}>
                            {isFullFlyer ? 'Click or Drag to Upload Finished Flyer' : 'Click or Drag to Upload Product Photo'}
                          </Typography>
                          <Typography variant="caption" sx={{ color: '#94a3b8' }}>
                            {isFullFlyer ? 'Full-size 1080x1080 flyer image (PNG, JPG, WEBP)' : 'PNG, JPG, WEBP up to 15MB (Rendered with 3D pedestal & drop shadow)'}
                          </Typography>
                        </Box>
                      ) : (
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                            p: 1.5,
                            border: '1px solid #e2e8f0',
                            borderRadius: 2,
                            backgroundColor: '#f8fafc'
                          }}
                        >
                          <Box
                            component="img"
                            src={productImage}
                            alt="Product Thumbnail"
                            sx={{
                              width: 60,
                              height: 60,
                              objectFit: 'contain',
                              borderRadius: 1.5,
                              border: '1px solid #cbd5e1',
                              backgroundColor: '#ffffff'
                            }}
                          />
                          <Box sx={{ flexGrow: 1, overflow: 'hidden' }}>
                            <Typography variant="body2" sx={{ fontWeight: 600, color: '#1e293b' }} noWrap>
                              {productImageName || 'Selected Image'}
                            </Typography>
                            <Typography variant="caption" sx={{ color: '#10b981', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 0.5 }}>
                              <CheckCircleIcon sx={{ fontSize: 14 }} /> {isFullFlyer ? 'Ready for direct full-bleed broadcast' : 'Ready for 3D architectural composition'}
                            </Typography>
                          </Box>
                        </Box>
                      )}
                    </Box>

                    <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#475569', mb: 0.5 }}>
                      WhatsApp Recipients (Direct Message)
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#64748b', display: 'block', mb: 1 }}>
                      The flyer is ALWAYS sent to Global Gate (+243 827 722 222 - "Message yourself"). Optionally add one more number below and/or include your saved customers list. Messages go out one by one with a random 8-20 second pause (safety limit: {50} external messages per day).
                    </Typography>
                    <TextField
                      fullWidth
                      placeholder="Additional number (optional) e.g. +243 999 123 456"
                      value={whatsappNumber}
                      onChange={(e) => setWhatsappNumber(e.target.value)}
                      disabled={loadingPreview || loadingPublish}
                      sx={{ mb: 1.5, backgroundColor: '#ffffff' }}
                    />
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 1.5, mb: 2.5 }}>
                      <Button
                        variant="outlined"
                        startIcon={<WhatsAppIcon />}
                        onClick={openRecipientPicker}
                        disabled={loadingPreview || loadingPublish}
                        sx={{ textTransform: 'none', fontWeight: 600, color: '#128c7e', borderColor: '#128c7e' }}
                      >
                        Select Customers ({savedRecipients.length} saved)
                      </Button>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={includeSavedList}
                            onChange={(e) => setIncludeSavedList(e.target.checked)}
                            disabled={loadingPreview || loadingPublish || savedRecipients.length === 0}
                            sx={{ color: '#25d366', '&.Mui-checked': { color: '#25d366' } }}
                          />
                        }
                        label={`Also send to saved list (${savedRecipients.length})`}
                      />
                    </Box>

                    <Dialog open={pickerOpen} onClose={() => setPickerOpen(false)} fullWidth maxWidth="sm">
                      <DialogTitle sx={{ fontWeight: 700, color: '#202a5a', display: 'flex', alignItems: 'center', justifyContent: 'space-between', pb: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <span>Select WhatsApp Recipients</span>
                          <Chip size="small" label={`${customersWithPhone.length} with phone / ${customers.length} total`} sx={{ fontSize: '11px', height: 22 }} />
                        </Box>
                        <Tooltip title="Refresh customers list from database">
                          <span>
                            <IconButton size="small" onClick={reloadCustomers} disabled={refreshingCustomers} sx={{ color: '#202a5a' }}>
                              <RefreshIcon sx={{ animation: refreshingCustomers ? 'spin 1s linear infinite' : 'none', '@keyframes spin': { '0%': { transform: 'rotate(0deg)' }, '100%': { transform: 'rotate(360deg)' } } }} />
                            </IconButton>
                          </span>
                        </Tooltip>
                      </DialogTitle>
                      <DialogContent dividers>
                        <Box sx={{ display: 'flex', gap: 1, mb: 1.5, flexWrap: 'wrap' }}>
                          <Chip
                            label={`With Phone (${customersWithPhone.length})`}
                            size="small"
                            clickable
                            color={pickerTab === 'withPhone' && !pickerSearch ? 'primary' : 'default'}
                            variant={pickerTab === 'withPhone' && !pickerSearch ? 'filled' : 'outlined'}
                            onClick={() => { setPickerTab('withPhone'); setPickerSearch(''); }}
                          />
                          <Chip
                            label={`All Customers (${customers.length})`}
                            size="small"
                            clickable
                            color={pickerTab === 'all' && !pickerSearch ? 'primary' : 'default'}
                            variant={pickerTab === 'all' && !pickerSearch ? 'filled' : 'outlined'}
                            onClick={() => { setPickerTab('all'); setPickerSearch(''); }}
                          />
                          <Chip
                            label={`Selected (${pickerSelection.length})`}
                            size="small"
                            clickable
                            color={pickerTab === 'selected' && !pickerSearch ? 'success' : 'default'}
                            variant={pickerTab === 'selected' && !pickerSearch ? 'filled' : 'outlined'}
                            onClick={() => { setPickerTab('selected'); setPickerSearch(''); }}
                          />
                        </Box>
                        <TextField
                          fullWidth
                          size="small"
                          placeholder="Search customer name, company, or phone number..."
                          value={pickerSearch}
                          onChange={(e) => setPickerSearch(e.target.value)}
                          sx={{ mb: 1.5 }}
                          InputProps={{
                            endAdornment: pickerSearch ? (
                              <IconButton size="small" onClick={() => setPickerSearch('')}>
                                <CloseIcon fontSize="small" />
                              </IconButton>
                            ) : null
                          }}
                        />
                        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', mb: 1, flexWrap: 'wrap', justifyContent: 'space-between' }}>
                          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                            <Chip label={`${pickerSelection.length} selected`} size="small" color="success" />
                            <Button
                              size="small"
                              onClick={() => {
                                const validIds = pickerFiltered.filter((c) => getCustomerPhone(c)).map((c) => String(c._id));
                                setPickerSelection((prev) => Array.from(new Set([...prev, ...validIds])));
                              }}
                            >
                              Select all valid shown
                            </Button>
                            <Button size="small" color="inherit" onClick={() => setPickerSelection([])}>
                              Clear all
                            </Button>
                          </Box>
                          <Typography variant="caption" sx={{ color: '#64748b', fontWeight: 600 }}>
                            {pickerFiltered.length} shown
                          </Typography>
                        </Box>
                        <Box sx={{ maxHeight: 380, overflowY: 'auto' }}>
                          {pickerFiltered.length === 0 && (
                            <Typography variant="body2" sx={{ color: '#64748b', p: 3, textAlign: 'center' }}>
                              {pickerSearch ? `No customers match "${pickerSearch}". Try clearing search or click "All Customers".` : 'No customers found.'}
                            </Typography>
                          )}
                          {pickerFiltered.map((c) => {
                            const phone = getCustomerPhone(c);
                            const hasPhone = Boolean(phone);
                            const isSelected = pickerSelection.includes(String(c._id));
                            return (
                              <Box
                                key={c._id}
                                sx={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'space-between',
                                  py: 0.6,
                                  px: 1,
                                  borderBottom: '1px solid #f1f5f9',
                                  backgroundColor: isSelected ? '#f0fdf4' : 'transparent',
                                  '&:hover': { backgroundColor: isSelected ? '#dcfce7' : '#f8fafc' }
                                }}
                              >
                                <FormControlLabel
                                  sx={{ flex: 1, mr: 0, m: 0 }}
                                  control={
                                    <Checkbox
                                      size="small"
                                      checked={isSelected}
                                      disabled={!hasPhone}
                                      onChange={() => togglePickerCustomer(c._id)}
                                    />
                                  }
                                  label={
                                    <Box sx={{ ml: 0.5 }}>
                                      <Typography variant="body2" sx={{ fontWeight: 600, color: hasPhone ? '#1e293b' : '#64748b' }}>
                                        {c.Customer || c.customerFullName || c.companyName || 'Unnamed'}
                                      </Typography>
                                      {hasPhone ? (
                                        <Typography variant="caption" sx={{ color: '#128c7e', fontWeight: 600 }}>
                                          {phone}
                                        </Typography>
                                      ) : (
                                        <Typography variant="caption" sx={{ color: '#d97706', fontStyle: 'italic' }}>
                                          No phone on file (add in Customer module)
                                        </Typography>
                                      )}
                                    </Box>
                                  }
                                />
                                {hasPhone && (
                                  <Chip
                                    size="small"
                                    label="WhatsApp Ready"
                                    variant="outlined"
                                    sx={{ fontSize: '10px', height: 20, color: '#128c7e', borderColor: '#86efac' }}
                                  />
                                )}
                              </Box>
                            );
                          })}
                        </Box>
                        <Typography variant="caption" sx={{ color: '#64748b', display: 'block', pt: 1, textAlign: 'center' }}>
                          Showing all {pickerFiltered.length} customers • {pickerSelection.length} selected for WhatsApp dispatch
                        </Typography>
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={() => setPickerOpen(false)} color="inherit">Cancel</Button>
                        <Button
                          variant="contained"
                          onClick={saveRecipientList}
                          disabled={savingList}
                          sx={{ backgroundColor: '#128c7e', '&:hover': { backgroundColor: '#0e6e63' } }}
                        >
                          {savingList ? 'Saving...' : 'Save List'}
                        </Button>
                      </DialogActions>
                    </Dialog>

                    <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#475569', mb: 1 }}>
                      Target Dispatch Platforms:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 3 }}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={targetPlatforms.facebook}
                            onChange={(e) => setTargetPlatforms({ ...targetPlatforms, facebook: e.target.checked })}
                            disabled={loadingPreview || loadingPublish}
                            sx={{ color: '#1877f2', '&.Mui-checked': { color: '#1877f2' } }}
                          />
                        }
                        label={
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                            <FacebookIcon sx={{ color: '#1877f2' }} />
                            <Typography sx={{ fontWeight: 500 }}>Facebook Page (GG SARL)</Typography>
                          </Box>
                        }
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={targetPlatforms.whatsapp}
                            onChange={(e) => setTargetPlatforms({ ...targetPlatforms, whatsapp: e.target.checked })}
                            disabled={loadingPreview || loadingPublish}
                            sx={{ color: '#25d366', '&.Mui-checked': { color: '#25d366' } }}
                          />
                        }
                        label={
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                            <WhatsAppIcon sx={{ color: '#25d366' }} />
                            <Typography sx={{ fontWeight: 500 }}>WhatsApp Direct Message</Typography>
                          </Box>
                        }
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={targetPlatforms.instagram}
                            onChange={(e) => setTargetPlatforms({ ...targetPlatforms, instagram: e.target.checked })}
                            disabled={loadingPreview || loadingPublish}
                            sx={{ color: '#e1306c', '&.Mui-checked': { color: '#e1306c' } }}
                          />
                        }
                        label={
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                            <InstagramIcon sx={{ color: '#e1306c' }} />
                            <Typography sx={{ fontWeight: 500 }}>Instagram Feed (@globalgate.sarl)</Typography>
                            <Chip label="Ready" size="small" sx={{ height: 18, fontSize: '0.65rem', backgroundColor: '#ecfdf5', color: '#047857', fontWeight: 600 }} />
                          </Box>
                        }
                      />
                    </Box>

                    {/* Stage 1 vs Stage 2 Action Buttons */}
                    {!previewGenerated ? (
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        disabled={loadingPreview || !brief.trim()}
                        startIcon={loadingPreview ? <CircularProgress size={20} color="inherit" /> : <AutoAwesomeIcon />}
                        sx={{
                          backgroundColor: '#30368a',
                          py: 1.5,
                          px: 4,
                          fontSize: '1rem',
                          fontWeight: 600,
                          textTransform: 'none',
                          borderRadius: 1.5,
                          '&:hover': { backgroundColor: '#202a5a' }
                        }}
                      >
                        {loadingPreview ? 'Generating Flyer Preview...' : '🎨 Generate Flyer Preview'}
                      </Button>
                    ) : (
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, alignItems: 'center' }}>
                        <Button
                          type="button"
                          variant="contained"
                          size="large"
                          disabled={loadingPublish}
                          onClick={handleApproveAndPublish}
                          startIcon={loadingPublish ? <CircularProgress size={20} color="inherit" /> : <RocketLaunchIcon />}
                          sx={{
                            backgroundColor: '#10b981',
                            py: 1.5,
                            px: 3.5,
                            fontSize: '1rem',
                            fontWeight: 600,
                            textTransform: 'none',
                            borderRadius: 1.5,
                            '&:hover': { backgroundColor: '#059669' }
                          }}
                        >
                          {loadingPublish ? 'Publishing to Selected Platforms...' : '🚀 Approve & Publish'}
                        </Button>

                        <Button
                          type="button"
                          variant="outlined"
                          size="large"
                          disabled={loadingPreview || loadingPublish}
                          onClick={handleGeneratePreview}
                          startIcon={loadingPreview ? <CircularProgress size={18} color="inherit" /> : <RefreshIcon />}
                          sx={{
                            py: 1.5,
                            px: 2.5,
                            fontSize: '0.95rem',
                            fontWeight: 600,
                            textTransform: 'none',
                            borderRadius: 1.5,
                            borderColor: '#64748b',
                            color: '#334155',
                            '&:hover': { borderColor: '#1e293b', backgroundColor: '#f1f5f9' }
                          }}
                        >
                          🔄 Regenerate
                        </Button>
                      </Box>
                    )}
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* Results Preview Column */}
            <Grid item xs={12} md={5}>
              <Card sx={{ borderRadius: 2, boxShadow: '0 4px 12px rgba(0,0,0,0.06)', minHeight: 460 }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: '#202a5a', mb: 2 }}>
                    📊 Publication Results & Flyer Preview
                  </Typography>

                  {loadingPreview ? (
                    <Box sx={{ textAlign: 'center', py: 10 }}>
                      <CircularProgress size={52} sx={{ color: '#2563eb', mb: 2 }} />
                      <Typography variant="body1" sx={{ fontWeight: 600, color: '#1e293b' }}>
                        🎨 Generating High-Resolution Flyer...
                      </Typography>
                      <Typography variant="caption" sx={{ color: '#64748b', display: 'block', mt: 0.5 }}>
                        Composing graphics & formatting copy on 1080x1080 canvas...
                      </Typography>
                    </Box>
                  ) : result ? (
                    <Box>
                      {/* Preview Mode Alert Banner */}
                      {result.previewOnly && (
                        <Alert severity="info" sx={{ mb: 2.5, borderRadius: 1.5, backgroundColor: '#eff6ff', borderColor: '#bfdbfe', color: '#1e3a8a' }}>
                          <Typography variant="body2" sx={{ fontWeight: 600 }}>
                            🎨 Flyer Preview Generated
                          </Typography>
                          <Typography variant="caption" sx={{ display: 'block', mt: 0.5, color: '#2563eb' }}>
                            Review the generated layout below. When satisfied, click <strong>"🚀 Approve & Publish"</strong> on the left to broadcast to selected social channels.
                          </Typography>
                        </Alert>
                      )}

                      {/* Platform status chips (when published) */}
                      {!result.previewOnly && (
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 2.5 }}>
                          {result.facebook && (
                            <Box sx={{ p: 1.5, backgroundColor: result.facebook.success ? '#f0fdf4' : '#fef2f2', borderRadius: 1.5, border: '1px solid', borderColor: result.facebook.success ? '#bbf7d0' : '#fecaca' }}>
                              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                  <FacebookIcon sx={{ color: '#1877f2' }} />
                                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                                    {result.facebook.success ? 'Published to Facebook Page' : 'Facebook Dispatch Failed'}
                                  </Typography>
                                </Box>
                                {result.facebook.postId && (
                                  <Chip
                                    label={`Post: ${result.facebook.postId}`}
                                    size="small"
                                    component="a"
                                    href={result.facebook.postUrl || `https://www.facebook.com/${result.facebook.postId}`}
                                    target="_blank"
                                    clickable
                                    color="primary"
                                    icon={<LaunchIcon fontSize="small" />}
                                  />
                                )}
                              </Box>
                              {result.facebook.error && !result.facebook.success && (
                                <Typography variant="caption" sx={{ color: '#dc2626', display: 'block', mt: 0.75, pl: 4 }}>
                                  {result.facebook.error}
                                </Typography>
                              )}
                            </Box>
                          )}

                          {result.whatsapp && (
                            <Box sx={{ p: 1.5, backgroundColor: result.whatsapp.success ? '#f0fdf4' : '#fef2f2', borderRadius: 1.5, border: '1px solid', borderColor: result.whatsapp.success ? '#bbf7d0' : '#fecaca' }}>
                              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                  <WhatsAppIcon sx={{ color: '#25d366' }} />
                                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                                    {result.whatsapp.success ? (result.whatsapp.message || 'WhatsApp Delivered Successfully') : 'WhatsApp Delivery Failed'}
                                  </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                                  {result.whatsapp.target && !result.whatsapp.report && (
                                    <>
                                      <Chip label={result.whatsapp.target} size="small" color={result.whatsapp.success ? "success" : "default"} />
                                      <Chip
                                        label="Open Chat"
                                        size="small"
                                        component="a"
                                        href={`https://wa.me/${String(result.whatsapp.target || '').replace(/[^0-9]/g, '')}?text=${encodeURIComponent(result.copy?.caption || result.brief || '')}`}
                                        target="_blank"
                                        clickable
                                        color="success"
                                        variant="outlined"
                                        icon={<LaunchIcon fontSize="small" />}
                                      />
                                    </>
                                  )}
                                </Box>
                              </Box>
                              {result.whatsapp.report && Array.isArray(result.whatsapp.report.details) && (
                                <Box sx={{ mt: 1, pl: 0.5 }}>
                                  <Typography variant="caption" sx={{ display: 'block', fontWeight: 700, color: '#334155', mb: 0.5 }}>
                                    Report: {result.whatsapp.report.sent} sent · {result.whatsapp.report.failed} failed
                                    {result.whatsapp.report.skipped ? ` · ${result.whatsapp.report.skipped} skipped` : ''}
                                  </Typography>
                                  <Box sx={{ maxHeight: 180, overflowY: 'auto' }}>
                                    {result.whatsapp.report.details.map((d, idx) => {
                                      const cust = customers.find((c) => String(getCustomerPhone(c)).replace(/[^0-9]/g, '').slice(-9) === String(d.number).slice(-9));
                                      const label = d.self ? 'Global Gate (Message yourself)' : (cust?.Customer || cust?.customerFullName || '');
                                      return (
                                        <Typography
                                          key={`${d.number}-${idx}`}
                                          variant="caption"
                                          sx={{ display: 'block', color: d.status === 'sent' ? '#15803d' : (d.status === 'failed' ? '#dc2626' : '#b45309') }}
                                        >
                                          {d.status === 'sent' ? '✅' : (d.status === 'failed' ? '❌' : '⏭️')} {label ? `${label} - ` : ''}+{d.number}
                                          {d.error ? ` (${d.error})` : ''}
                                        </Typography>
                                      );
                                    })}
                                  </Box>
                                </Box>
                              )}
                              {result.whatsapp.error && !result.whatsapp.success && (
                                <Typography variant="caption" sx={{ color: '#dc2626', display: 'block', mt: 0.75, pl: 4 }}>
                                  {result.whatsapp.error} — You can also click "Open Chat" above to dispatch directly via WhatsApp.
                                </Typography>
                              )}
                            </Box>
                          )}

                          {result.instagram && (
                            <Box sx={{ p: 1.5, backgroundColor: result.instagram.success ? '#fdf2f8' : '#fffbeb', borderRadius: 1.5, border: '1px solid', borderColor: result.instagram.success ? '#fbcfe8' : '#fef3c7' }}>
                              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                  <InstagramIcon sx={{ color: '#e1306c' }} />
                                  <Typography variant="body2" sx={{ fontWeight: 600, color: result.instagram.success ? '#1e293b' : '#92400e' }}>
                                    {result.instagram.success ? 'Published to Instagram Feed' : 'Instagram Status / Notice'}
                                  </Typography>
                                </Box>
                                {result.instagram.postId ? (
                                  <Chip
                                    label={`Post: ${result.instagram.postId}`}
                                    size="small"
                                    component="a"
                                    href={result.instagram.postUrl || `https://www.instagram.com/p/${result.instagram.postId}`}
                                    target="_blank"
                                    clickable
                                    sx={{ backgroundColor: '#e1306c', color: '#fff' }}
                                    icon={<LaunchIcon fontSize="small" sx={{ color: '#fff !important' }} />}
                                  />
                                ) : (
                                  <Chip label="Notice" size="small" sx={{ height: 20, fontSize: '0.7rem', backgroundColor: '#fef3c7', color: '#b45309', fontWeight: 600 }} />
                                )}
                              </Box>
                              {result.instagram.error && !result.instagram.success && (
                                <Typography variant="caption" sx={{ color: '#b45309', display: 'block', mt: 0.75, pl: 3.5, lineHeight: 1.4 }}>
                                  {result.instagram.error}
                                </Typography>
                              )}
                            </Box>
                          )}
                        </Box>
                      )}

                      {/* Generated Flyer Image */}
                      {(result.flyerBase64 || (isFullFlyer && productImage)) ? (
                        <Box sx={{ textAlign: 'center', mt: 1.5 }}>
                          <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#475569', mb: 1, textAlign: 'left' }}>
                            {isFullFlyer ? 'Ready-Made Flyer Graphic (Direct Broadcast)' : 'Generated 3D Scene Flyer (1080x1080)'}
                          </Typography>
                          <img
                            src={result.flyerBase64 || productImage}
                            alt="Flyer Preview"
                            style={{
                              width: '100%',
                              maxHeight: 380,
                              objectFit: 'contain',
                              borderRadius: 8,
                              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                              border: '1px solid #e2e8f0'
                            }}
                          />
                        </Box>
                      ) : (
                        <Alert severity="info" sx={{ mt: 2 }}>
                          Flyer image is stored on local workstation.
                        </Alert>
                      )}

                      {/* Headline & Caption Preview */}
                      {(result.headline || result.copy?.headline) && (
                        <Box sx={{ mt: 2 }}>
                          <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#475569', mb: 0.5 }}>
                            Flyer Headline:
                          </Typography>
                          <Paper sx={{ p: 1.2, backgroundColor: '#f1f5f9', fontWeight: 700, fontSize: '0.9rem', color: '#0f172a' }}>
                            {result.headline || result.copy?.headline}
                          </Paper>
                        </Box>
                      )}

                      {result.copy?.caption && (
                        <Box sx={{ mt: 2 }}>
                          <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#475569', mb: 0.5 }}>
                            Promotional Caption:
                          </Typography>
                          <Paper sx={{ p: 1.5, backgroundColor: '#f8fafc', whiteSpace: 'pre-wrap', fontSize: '0.85rem', color: '#334155', maxHeight: 120, overflowY: 'auto' }}>
                            {result.copy.caption}
                          </Paper>
                        </Box>
                      )}
                    </Box>
                  ) : (
                    <Box sx={{ textAlign: 'center', py: 8, color: '#94a3b8' }}>
                      <CampaignIcon sx={{ fontSize: 64, mb: 1.5, opacity: 0.4 }} />
                      <Typography variant="body1" sx={{ fontWeight: 500 }}>
                        No flyer preview generated yet.
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#94a3b8', mt: 0.5 }}>
                        Enter your promotional brief on the left and click "Generate Flyer Preview" to review the card and copy before publishing.
                      </Typography>
                    </Box>
                  )}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default MarketingViewAdmin;
