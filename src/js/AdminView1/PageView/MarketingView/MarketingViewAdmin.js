import React, { useState, useEffect } from 'react';
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
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
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
  const [whatsappNumber, setWhatsappNumber] = useState('+243 827 722 222');
  const [productImage, setProductImage] = useState(null);
  const [productImageName, setProductImageName] = useState('');
  const [targetPlatforms, setTargetPlatforms] = useState({
    facebook: true,
    whatsapp: true,
    whatsappStatus: false,
    instagram: true,
  });
  const [previewGenerated, setPreviewGenerated] = useState(false);
  const [loadingPreview, setLoadingPreview] = useState(false);
  const [loadingPublish, setLoadingPublish] = useState(false);
  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

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
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = () => {
    setProductImage(null);
    setProductImageName('');
    setPreviewGenerated(false);
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

    const payload = {
      brief: brief.trim(),
      whatsappNumber: targetPlatforms.whatsapp ? whatsappNumber.trim() : '',
      productImage: productImage || null,
      previewOnly: true,
      platforms: {
        facebook: targetPlatforms.facebook,
        whatsapp: targetPlatforms.whatsapp,
        whatsappStatus: targetPlatforms.whatsappStatus,
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
          resData = await window.electron.runMarketing(payload);
        } catch (ipcErr) {
          console.warn('[Marketing] Electron IPC error, falling back:', ipcErr);
        }
      }

      if (!resData) {
        try {
          const localRes = await axios.post('http://127.0.0.1:5055/publish', payload, { timeout: 45000 });
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
    if (!targetPlatforms.facebook && !targetPlatforms.whatsapp && !targetPlatforms.whatsappStatus && !targetPlatforms.instagram) {
      toast.warning('Please select at least one target dispatch platform.');
      return;
    }

    setLoadingPublish(true);
    setErrorMessage('');

    const payload = {
      brief: brief.trim(),
      whatsappNumber: targetPlatforms.whatsapp ? whatsappNumber.trim() : '',
      productImage: productImage || null,
      previewOnly: false,
      platforms: {
        facebook: targetPlatforms.facebook,
        whatsapp: targetPlatforms.whatsapp,
        whatsappStatus: targetPlatforms.whatsappStatus,
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
          resData = await window.electron.runMarketing(payload);
        } catch (ipcErr) {
          console.warn('[Marketing] Electron IPC error, falling back:', ipcErr);
        }
      }

      if (!resData) {
        try {
          const localRes = await axios.post('http://127.0.0.1:5055/publish', payload, { timeout: 60000 });
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
        if (waOk) {
          if (resData.whatsapp?.statusStory && !targetPlatforms.whatsapp) {
            successChannels.push('WhatsApp Status');
          } else if (resData.whatsapp?.statusStory) {
            successChannels.push('WhatsApp DM & Status');
          } else {
            successChannels.push('WhatsApp');
          }
        }
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
                      }}
                      disabled={loadingPreview || loadingPublish}
                      required
                      sx={{ mb: 2.5, backgroundColor: '#ffffff' }}
                    />

                    {/* Product Photo Uploader (Optional) */}
                    <Box sx={{ mb: 2.5 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#475569' }}>
                          Product Photo (Optional - Embedded into Flyer)
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
                            Click or Drag to Upload Product Photo
                          </Typography>
                          <Typography variant="caption" sx={{ color: '#94a3b8' }}>
                            PNG, JPG, WEBP up to 15MB (Fitted with preserved aspect ratio & 24px padding)
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
                              {productImageName || 'Selected Product Photo'}
                            </Typography>
                            <Typography variant="caption" sx={{ color: '#10b981', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 0.5 }}>
                              <CheckCircleIcon sx={{ fontSize: 14 }} /> Ready for flyer composition
                            </Typography>
                          </Box>
                        </Box>
                      )}
                    </Box>

                    <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#475569', mb: 1 }}>
                      WhatsApp Contact Number (Optional)
                    </Typography>
                    <TextField
                      fullWidth
                      placeholder="+243 827 722 222"
                      value={whatsappNumber}
                      onChange={(e) => setWhatsappNumber(e.target.value)}
                      disabled={loadingPreview || loadingPublish}
                      sx={{ mb: 2.5, backgroundColor: '#ffffff' }}
                    />

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
                            checked={targetPlatforms.whatsappStatus}
                            onChange={(e) => setTargetPlatforms({ ...targetPlatforms, whatsappStatus: e.target.checked })}
                            disabled={loadingPreview || loadingPublish}
                            sx={{ color: '#10b981', '&.Mui-checked': { color: '#10b981' } }}
                          />
                        }
                        label={
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                            <AutoStoriesIcon sx={{ color: '#10b981' }} />
                            <Typography sx={{ fontWeight: 500 }}>WhatsApp Status (Story)</Typography>
                            <Chip
                              label="(Manual / Mobile only)"
                              size="small"
                              sx={{
                                height: 20,
                                fontSize: '0.65rem',
                                backgroundColor: '#fef3c7',
                                color: '#b45309',
                                fontWeight: 600,
                              }}
                            />
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

                  {result ? (
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
                                  {result.whatsapp.target && (
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
                                  {result.whatsapp.statusStory && (
                                    <Chip label="Status Story" size="small" color="success" />
                                  )}
                                </Box>
                              </Box>
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
                      {result.flyerBase64 ? (
                        <Box sx={{ textAlign: 'center', mt: 1.5 }}>
                          <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#475569', mb: 1, textAlign: 'left' }}>
                            Generated Flyer (1080x1080)
                          </Typography>
                          <img
                            src={result.flyerBase64}
                            alt="Generated Flyer"
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
