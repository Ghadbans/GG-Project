import React, { useEffect, useRef, useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  LinearProgress,
  Box,
  Alert,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import DownloadIcon from '@mui/icons-material/Download';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { useLocation } from 'react-router-dom';
import { App as CapApp } from '@capacitor/app';
import axios from 'axios';
import pkg from '../../../package.json';
import { API_BASE_URL } from '../apiConfig';
import { isNativeMobile } from '../utils/isMobile';

function compareSemver(a, b) {
  const pa = String(a || '0.0.0').replace(/^v/i, '').split('.').map(n => parseInt(n, 10) || 0);
  const pb = String(b || '0.0.0').replace(/^v/i, '').split('.').map(n => parseInt(n, 10) || 0);
  const len = Math.max(pa.length, pb.length, 3);
  for (let i = 0; i < len; i++) {
    const va = pa[i] || 0;
    const vb = pb[i] || 0;
    if (va < vb) return -1;
    if (va > vb) return 1;
  }
  return 0;
}

export default function AppUpdateModal() {
  const location = useLocation();
  const isElectron = typeof window !== 'undefined' && Boolean(window.electron?.updater);
  const isAndroid = isNativeMobile();

  const [open, setOpen] = useState(false);
  const [mandatory, setMandatory] = useState(false);
  const [currentVersion, setCurrentVersion] = useState(pkg.version || '3.7.5');
  const [serverInfo, setServerInfo] = useState(null);
  const [phase, setPhase] = useState('idle'); // idle | downloading | downloaded | installing | permission | error
  const [progress, setProgress] = useState(0);
  const [statusMessage, setStatusMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const snoozedVersionRef = useRef(null);
  const lastSuccessRef = useRef(false);
  const checkingRef = useRef(false);

  const checkVersion = async () => {
    if (!isElectron && !isAndroid) return;
    if (checkingRef.current) return;
    checkingRef.current = true;
    try {
      let localVer = pkg.version || '3.7.5';
      if (isElectron && window.electron?.updater?.getVersion) {
        try {
          const eVer = await window.electron.updater.getVersion();
          if (eVer) localVer = eVer;
        } catch (_) {}
      } else if (isAndroid && typeof window.Capacitor !== 'undefined') {
        try {
          const info = await CapApp.getInfo();
          if (info && info.version) localVer = info.version;
        } catch (_) {}
      }
      setCurrentVersion(localVer);

      const res = await axios.get(`${API_BASE_URL}/download/version?t=${Date.now()}`, {
        timeout: 8000,
        headers: { 'Cache-Control': 'no-cache' }
      });
      const data = res.data;
      if (!data || !data.version) return;
      lastSuccessRef.current = true;

      const isBelowMin =
        data.minSupportedVersion && compareSemver(localVer, data.minSupportedVersion) < 0;
      const isForced = Boolean(data.forceUpdate || isBelowMin);
      const hasNewer = compareSemver(localVer, data.version) < 0;

      if (!hasNewer && !isForced) return;

      if (!isForced && snoozedVersionRef.current === data.version) {
        return;
      }

      setServerInfo(data);
      setMandatory(isForced);
      setOpen(true);
    } catch (_) {
      // Fail silently if offline; retry timer / foreground resume / online event will re-check
    } finally {
      checkingRef.current = false;
    }
  };

  // Check on app launch and whenever returning to login screens
  useEffect(() => {
    if (!isElectron && !isAndroid) return;
    const p = location.pathname || '';
    if (p === '/' || p === '/Loginadmin' || p === '/Loginemployee' || !serverInfo) {
      checkVersion();
    }
  }, [location.pathname]);

  // Re-check on Android foreground resume, network recovery, cold-start retry, and 15m interval
  useEffect(() => {
    if (!isElectron && !isAndroid) return undefined;

    const retryTimer = setTimeout(() => {
      if (!lastSuccessRef.current) checkVersion();
    }, 5000);

    const periodicTimer = setInterval(() => {
      checkVersion();
    }, 15 * 60 * 1000);

    const handleOnline = () => checkVersion();
    window.addEventListener('online', handleOnline);

    let appStateHandle = null;
    if (isAndroid) {
      Promise.resolve(
        CapApp.addListener('appStateChange', ({ isActive }) => {
          if (isActive) checkVersion();
        })
      ).then((handle) => {
        appStateHandle = handle;
      }).catch(() => {});
    }

    return () => {
      clearTimeout(retryTimer);
      clearInterval(periodicTimer);
      window.removeEventListener('online', handleOnline);
      if (appStateHandle && typeof appStateHandle.remove === 'function') {
        appStateHandle.remove();
      }
    };
  }, [isElectron, isAndroid]);

  // Subscribe to Electron autoUpdater events
  useEffect(() => {
    if (!isElectron || !window.electron?.updater?.onStatus) return undefined;
    return window.electron.updater.onStatus((payload) => {
      if (!payload) return;
      if (payload.status === 'available') {
        window.electron.updater.downloadUpdate();
      } else if (payload.status === 'downloading') {
        setPhase('downloading');
        setProgress(Number(payload.percent || 0));
        setStatusMessage(`Downloading desktop update (${payload.percent || 0}%)...`);
      } else if (payload.status === 'downloaded') {
        setPhase('downloaded');
        setProgress(100);
        setStatusMessage('Update downloaded and ready to install.');
      } else if (payload.status === 'error') {
        setPhase('error');
        setErrorMessage(payload.error || 'Auto-update failed. Please use Direct Download.');
      }
    });
  }, [isElectron]);

  // Subscribe to Android native updater progress events
  useEffect(() => {
    if (!isAndroid) return undefined;
    const handler = (ev) => {
      const detail = ev?.detail || {};
      if (detail.status === 'downloading') {
        setPhase('downloading');
        setProgress(Number(detail.percent || 0));
        setStatusMessage(detail.message || `Downloading APK (${detail.percent || 0}%)...`);
      } else if (detail.status === 'permission-required') {
        setPhase('permission');
        setStatusMessage(detail.message || 'Please allow "Install unknown apps" and tap Update Now again.');
      } else if (detail.status === 'installing') {
        setPhase('installing');
        setProgress(100);
        setStatusMessage(detail.message || 'Opening Android installer...');
      } else if (detail.status === 'error') {
        setPhase('error');
        setErrorMessage(detail.message || 'APK download failed. Please use Direct Download.');
      }
    };
    window.addEventListener('android-update-progress', handler);
    return () => window.removeEventListener('android-update-progress', handler);
  }, [isAndroid]);

  const handleUpdateNow = async () => {
    setErrorMessage('');
    if (isElectron) {
      setPhase('downloading');
      setProgress(0);
      setStatusMessage('Connecting to update server...');
      const chk = await window.electron.updater.checkForUpdates();
      if (chk && !chk.ok) {
        setPhase('error');
        setErrorMessage(chk.error || 'Unable to run silent updater. Use Direct Download below.');
      }
      return;
    }

    if (isAndroid) {
      const apkUrl = `${API_BASE_URL}${serverInfo?.android?.directUrl || '/downloads/GlobalGate.apk'}`;
      const fileName = serverInfo?.android?.filename || 'GlobalGate-update.apk';
      if (window.AndroidAppUpdater?.downloadAndInstallApk) {
        setPhase('downloading');
        setProgress(0);
        setStatusMessage('Preparing APK download...');
        window.AndroidAppUpdater.downloadAndInstallApk(apkUrl, fileName);
      } else {
        window.open(`${API_BASE_URL}/download/android`, '_blank');
      }
    }
  };

  const handleInstallAndRestart = () => {
    if (isElectron && window.electron?.updater?.installUpdate) {
      window.electron.updater.installUpdate();
    }
  };

  const handleDirectDownload = () => {
    const path = isAndroid ? '/download/android' : '/download/windows';
    const targetUrl = `${API_BASE_URL}${path}`;
    if (isElectron && window.electron?.updater?.openDownloadUrl) {
      window.electron.updater.openDownloadUrl(targetUrl);
      return;
    }
    window.open(targetUrl, '_blank');
  };

  const handleLater = () => {
    if (mandatory) return;
    snoozedVersionRef.current = serverInfo?.version || null;
    setOpen(false);
  };

  const releaseNotes = Array.isArray(serverInfo?.releaseNotes) ? serverInfo.releaseNotes : [];

  if (!isElectron && !isAndroid) {
    return null;
  }

  return (
    <Dialog
      open={open}
      onClose={mandatory ? undefined : handleLater}
      disableEscapeKeyDown={mandatory}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle sx={{ display: 'flex', alignItems: 'center', gap: 1.5, bgcolor: '#202a5a', color: '#fff' }}>
        {mandatory ? <WarningAmberIcon color="warning" /> : <SystemUpdateAltIcon />}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: 800, lineHeight: 1.2 }}>
            {mandatory ? 'Mandatory Update Required' : 'New Update Available'}
          </Typography>
          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.8)' }}>
            Global Gate {isAndroid ? 'Android App' : 'Desktop App'}
          </Typography>
        </Box>
        <Chip
          label={`v${serverInfo?.version || ''}`}
          size="small"
          sx={{ bgcolor: '#fff', color: '#202a5a', fontWeight: 800 }}
        />
      </DialogTitle>

      <DialogContent sx={{ pt: 2.5 }}>
        {mandatory && (
          <Alert severity="warning" sx={{ mb: 2 }}>
            Your installed version (<strong>v{currentVersion}</strong>) is below the minimum supported version (
            <strong>v{serverInfo?.minSupportedVersion}</strong>). Please update now to continue using Global Gate.
          </Alert>
        )}

        <Typography variant="body2" sx={{ mb: 1.5, color: '#334155' }}>
          Current Version: <strong>v{currentVersion}</strong> &rarr; Latest Version:{' '}
          <strong>v{serverInfo?.version}</strong>
        </Typography>

        {releaseNotes.length > 0 && (
          <Box sx={{ bgcolor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 1.5, p: 1.5, mb: 2 }}>
            <Typography variant="caption" sx={{ fontWeight: 700, color: '#202a5a', textTransform: 'uppercase' }}>
              What&apos;s New
            </Typography>
            <List dense disablePadding sx={{ mt: 0.5 }}>
              {releaseNotes.map((note, idx) => (
                <ListItem key={idx} disableGutters sx={{ py: 0.25 }}>
                  <ListItemIcon sx={{ minWidth: 26 }}>
                    <CheckCircleOutlineIcon sx={{ fontSize: 16, color: '#16a34a' }} />
                  </ListItemIcon>
                  <ListItemText primary={note} primaryTypographyProps={{ fontSize: '13px', color: '#1e293b' }} />
                </ListItem>
              ))}
            </List>
          </Box>
        )}

        {(phase === 'downloading' || phase === 'installing') && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="caption" sx={{ fontWeight: 600, color: '#202a5a', display: 'block', mb: 0.5 }}>
              {statusMessage}
            </Typography>
            <LinearProgress variant="determinate" value={progress} sx={{ height: 8, borderRadius: 4 }} />
          </Box>
        )}

        {phase === 'downloaded' && (
          <Alert severity="success" sx={{ mt: 2 }}>
            {statusMessage}
          </Alert>
        )}

        {phase === 'permission' && (
          <Alert severity="info" sx={{ mt: 2 }}>
            {statusMessage}
          </Alert>
        )}

        {phase === 'error' && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {errorMessage}
          </Alert>
        )}
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 2.5, gap: 1 }}>
        {!mandatory && phase !== 'downloading' && (
          <Button onClick={handleLater} color="inherit">
            Later
          </Button>
        )}

        {(phase === 'error' || phase === 'permission') && (
          <Button variant="outlined" startIcon={<DownloadIcon />} onClick={handleDirectDownload}>
            Direct Download
          </Button>
        )}

        {phase === 'downloaded' ? (
          <Button
            variant="contained"
            color="success"
            startIcon={<RestartAltIcon />}
            onClick={handleInstallAndRestart}
          >
            Restart &amp; Install
          </Button>
        ) : (
          <Button
            variant="contained"
            disabled={phase === 'downloading' || phase === 'installing'}
            startIcon={<SystemUpdateAltIcon />}
            onClick={handleUpdateNow}
            sx={{ bgcolor: '#202a5a', '&:hover': { bgcolor: '#161d40' } }}
          >
            {phase === 'downloading' ? `Downloading ${progress}%...` : 'Update Now'}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
}
