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
import LaunchIcon from '@mui/icons-material/Launch';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SendIcon from '@mui/icons-material/Send';
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
  const [targetPlatforms, setTargetPlatforms] = useState({
    facebook: true,
    whatsapp: true,
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

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

  const handlePublish = async (e) => {
    if (e && e.preventDefault) e.preventDefault();

    if (!brief.trim()) {
      toast.warning('Please enter a promotional brief first.');
      return;
    }

    if (!targetPlatforms.facebook && !targetPlatforms.whatsapp) {
      toast.warning('Please select at least one target platform (Facebook or WhatsApp).');
      return;
    }

    setLoading(true);
    setErrorMessage('');
    setResult(null);

    const payload = {
      brief: brief.trim(),
      whatsappNumber: targetPlatforms.whatsapp ? whatsappNumber.trim() : '',
      platforms: {
        facebook: targetPlatforms.facebook,
        whatsapp: targetPlatforms.whatsapp,
      },
      userId: user?.data?.id || localStorage.getItem('user'),
      userName: user?.data?.userName || '',
    };

    try {
      let resData = null;

      // 1. If running inside Electron desktop app, execute locally via IPC (guarantees local canvas & FB photo upload)
      if (window.electron && typeof window.electron.runMarketing === 'function') {
        try {
          console.log('[Marketing] Running directly via Electron local agent IPC...');
          resData = await window.electron.runMarketing(payload);
        } catch (ipcErr) {
          console.warn('[Marketing] Electron IPC error, falling back:', ipcErr);
        }
      }

      // 2. If not in Electron, try local microservice if running on workstation
      if (!resData) {
        try {
          const localRes = await axios.post('http://127.0.0.1:5055/publish', {
            brief: payload.brief,
            whatsappNumber: payload.whatsappNumber,
            postToFacebook: payload.platforms.facebook,
            sendWhatsApp: payload.platforms.whatsapp,
          }, { timeout: 60000 });
          if (localRes.data && localRes.data.success) {
            resData = localRes.data;
          }
        } catch (_) {}
      }

      // 3. Fall back to secure backend API endpoint
      if (!resData) {
        const res = await axios.post(`${API_BASE_URL}/api/marketing/publish`, payload);
        resData = res.data;
      }

      if (resData && resData.success) {
        setResult(resData);
        const fbOk = resData.facebook?.success;
        const waOk = resData.whatsapp?.success;

        if (fbOk && waOk) {
          toast.success('🎉 Flyer published to Facebook & delivered to WhatsApp!');
        } else if (fbOk) {
          toast.success('🎉 Flyer successfully published to Facebook Page!');
        } else if (waOk) {
          toast.success('🎉 Flyer successfully delivered to WhatsApp!');
        } else {
          toast.info('Flyer preview generated. Check platform statuses on the right.');
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
      setLoading(false);
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

                  <Box component="form" onSubmit={handlePublish}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#475569', mb: 1 }}>
                      Promotional Brief / Offer Description *
                    </Typography>
                    <TextField
                      fullWidth
                      multiline
                      rows={4}
                      placeholder="e.g. Offer for this Week Cement Sack Carrilu MOQ 500 sack $15.5 - Best quality for construction projects in Kolwezi!"
                      value={brief}
                      onChange={(e) => setBrief(e.target.value)}
                      disabled={loading}
                      required
                      sx={{ mb: 2.5, backgroundColor: '#ffffff' }}
                    />

                    <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#475569', mb: 1 }}>
                      WhatsApp Contact Number (Optional)
                    </Typography>
                    <TextField
                      fullWidth
                      placeholder="+243 827 722 222"
                      value={whatsappNumber}
                      onChange={(e) => setWhatsappNumber(e.target.value)}
                      disabled={loading}
                      sx={{ mb: 2.5, backgroundColor: '#ffffff' }}
                    />

                    <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#475569', mb: 1 }}>
                      Target Dispatch Platforms:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, mb: 3 }}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={targetPlatforms.facebook}
                            onChange={(e) => setTargetPlatforms({ ...targetPlatforms, facebook: e.target.checked })}
                            disabled={loading}
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
                            disabled={loading}
                            sx={{ color: '#25d366', '&.Mui-checked': { color: '#25d366' } }}
                          />
                        }
                        label={
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                            <WhatsAppIcon sx={{ color: '#25d366' }} />
                            <Typography sx={{ fontWeight: 500 }}>WhatsApp Web Direct Message</Typography>
                          </Box>
                        }
                      />
                    </Box>

                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      disabled={loading || !brief.trim()}
                      startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
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
                      {loading ? 'Generating & Publishing...' : 'Generate & Publish Campaign'}
                    </Button>
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
                      {/* Platform status chips */}
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
                              {result.whatsapp.target && (
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
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
                                </Box>
                              )}
                            </Box>
                            {result.whatsapp.error && !result.whatsapp.success && (
                              <Typography variant="caption" sx={{ color: '#dc2626', display: 'block', mt: 0.75, pl: 4 }}>
                                {result.whatsapp.error} — You can also click "Open Chat" above to dispatch directly via WhatsApp.
                              </Typography>
                            )}
                          </Box>
                        )}
                      </Box>

                      {/* Generated Flyer Image */}
                      {result.flyerBase64 ? (
                        <Box sx={{ textAlign: 'center', mt: 2 }}>
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

                      {/* Caption Preview */}
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
                        No campaign published yet.
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#94a3b8', mt: 0.5 }}>
                        Enter your promotional brief on the left and click "Generate & Publish" to preview the generated flyer and post details here.
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
