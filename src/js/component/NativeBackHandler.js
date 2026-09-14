import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { App as CapApp } from '@capacitor/app';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Box,
  Typography
} from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

function NativeBackHandler() {
  const location = useLocation();
  const navigate = useNavigate();

  const [exitDialogOpen, setExitDialogOpen] = useState(false);
  const [discardDialogOpen, setDiscardDialogOpen] = useState(false);
  const [pendingBackAction, setPendingBackAction] = useState(null);

  const pathname = location.pathname;

  const isRootOrDashboard = () => {
    const p = (pathname || '').toLowerCase().replace(/\/$/, '');
    return (
      p === '' ||
      p === '/' ||
      p === '/adminhome' ||
      p === '/loginadmin' ||
      p === '/loginemployee'
    );
  };

  const isFormOrEditPage = () => {
    const p = (pathname || '').toLowerCase();
    return (
      p.includes('form') ||
      p.includes('update') ||
      p.includes('clone') ||
      p.includes('convertto')
    );
  };

  useEffect(() => {
    let backListener = null;

    const setupListener = async () => {
      try {
        backListener = await CapApp.addListener('backButton', ({ canGoBack }) => {
          if (exitDialogOpen || discardDialogOpen) {
            setExitDialogOpen(false);
            setDiscardDialogOpen(false);
            return;
          }

          if (isRootOrDashboard()) {
            setExitDialogOpen(true);
          } else if (isFormOrEditPage()) {
            setDiscardDialogOpen(true);
            setPendingBackAction(() => () => navigate(-1));
          } else {
            navigate(-1);
          }
        });
      } catch (e) {
        // Fallback for non-Capacitor environment (e.g. desktop/browser)
      }
    };

    setupListener();

    return () => {
      if (backListener && typeof backListener.remove === 'function') {
        backListener.remove();
      }
    };
  }, [pathname, exitDialogOpen, discardDialogOpen, navigate]);

  const handleConfirmExit = async () => {
    setExitDialogOpen(false);
    try {
      await CapApp.exitApp();
    } catch (e) {
      // In web/desktop, no-op
    }
  };

  const handleConfirmDiscard = () => {
    setDiscardDialogOpen(false);
    if (pendingBackAction) {
      pendingBackAction();
      setPendingBackAction(null);
    } else {
      navigate(-1);
    }
  };

  return (
    <>
      {/* ── 1. EXIT APP CONFIRMATION DIALOG ── */}
      <Dialog
        open={exitDialogOpen}
        onClose={() => setExitDialogOpen(false)}
        PaperProps={{
          sx: {
            borderRadius: 3.5,
            p: 1,
            width: '90%',
            maxWidth: 380,
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
          }
        }}
      >
        <DialogTitle sx={{ display: 'flex', alignItems: 'center', gap: 1.5, pb: 1 }}>
          <Box sx={{ p: 1, borderRadius: 2, backgroundColor: '#FEF2F2', color: '#EF4444', display: 'flex' }}>
            <ExitToAppIcon />
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 800, color: '#1E293B', fontSize: '1.1rem' }}>
            Exit Application
          </Typography>
        </DialogTitle>
        <DialogContent sx={{ pb: 1 }}>
          <DialogContentText sx={{ color: '#64748B', fontSize: '0.9rem' }}>
            Are you sure you want to exit Global Gate Management?
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ px: 2, pb: 2, gap: 1 }}>
          <Button
            onClick={() => setExitDialogOpen(false)}
            variant="outlined"
            sx={{
              flex: 1,
              borderRadius: 2.5,
              borderColor: '#CBD5E1',
              color: '#475569',
              textTransform: 'none',
              fontWeight: 600
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleConfirmExit}
            variant="contained"
            sx={{
              flex: 1,
              borderRadius: 2.5,
              backgroundColor: '#EF4444',
              color: '#ffffff',
              textTransform: 'none',
              fontWeight: 700,
              '&:hover': { backgroundColor: '#DC2626' }
            }}
          >
            Exit App
          </Button>
        </DialogActions>
      </Dialog>

      {/* ── 2. DISCARD UNSAVED CHANGES DIALOG ── */}
      <Dialog
        open={discardDialogOpen}
        onClose={() => setDiscardDialogOpen(false)}
        PaperProps={{
          sx: {
            borderRadius: 3.5,
            p: 1,
            width: '90%',
            maxWidth: 380,
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
          }
        }}
      >
        <DialogTitle sx={{ display: 'flex', alignItems: 'center', gap: 1.5, pb: 1 }}>
          <Box sx={{ p: 1, borderRadius: 2, backgroundColor: '#FFFBEB', color: '#F59E0B', display: 'flex' }}>
            <WarningAmberIcon />
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 800, color: '#1E293B', fontSize: '1.1rem' }}>
            Unsaved Changes
          </Typography>
        </DialogTitle>
        <DialogContent sx={{ pb: 1 }}>
          <DialogContentText sx={{ color: '#64748B', fontSize: '0.9rem' }}>
            You have unsaved form entries. Are you sure you want to leave without saving?
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ px: 2, pb: 2, gap: 1 }}>
          <Button
            onClick={() => setDiscardDialogOpen(false)}
            variant="outlined"
            sx={{
              flex: 1,
              borderRadius: 2.5,
              borderColor: '#CBD5E1',
              color: '#475569',
              textTransform: 'none',
              fontWeight: 600
            }}
          >
            Keep Editing
          </Button>
          <Button
            onClick={handleConfirmDiscard}
            variant="contained"
            sx={{
              flex: 1,
              borderRadius: 2.5,
              backgroundColor: '#EF4444',
              color: '#ffffff',
              textTransform: 'none',
              fontWeight: 700,
              '&:hover': { backgroundColor: '#DC2626' }
            }}
          >
            Discard & Exit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default NativeBackHandler;
