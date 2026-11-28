import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { UNSAFE_NavigationContext as NavigationContext } from 'react-router-dom';
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
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

/**
 * Intercepts React Router navigation (sidebar links, Back buttons, tabs) and
 * browser/Electron tab closes when a form has unsaved edits, offering Save / Discard / Cancel.
 * Compatible with react-router-dom v6.15+ HashRouter (@remix-run/router) where navigator.block is absent.
 */
export function useUnsavedChangesGuard({ isDirty, onSave, entityLabel = 'changes' }) {
  const { navigator } = useContext(NavigationContext);
  const [dialogOpen, setDialogOpen] = useState(false);
  const pendingNavRef = useRef(null);
  const restoreNavRef = useRef(null);
  const bypassRef = useRef(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.__ggPageGuardMounted = true;
      window.__ggUnsavedGuardActive = Boolean(isDirty);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.__ggPageGuardMounted = false;
        window.__ggUnsavedGuardActive = false;
      }
    };
  }, [isDirty]);

  useEffect(() => {
    if (!isDirty) return undefined;
    bypassRef.current = false;
    const handleBeforeUnload = (e) => {
      if (bypassRef.current) return;
      e.preventDefault();
      e.returnValue = '';
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [isDirty]);

  useEffect(() => {
    if (!isDirty || !navigator) {
      return undefined;
    }

    bypassRef.current = false;
    const origPush = typeof navigator.push === 'function' ? navigator.push.bind(navigator) : null;
    const origReplace = typeof navigator.replace === 'function' ? navigator.replace.bind(navigator) : null;
    const origGo = typeof navigator.go === 'function' ? navigator.go.bind(navigator) : null;

    const restore = () => {
      if (origPush) navigator.push = origPush;
      if (origReplace) navigator.replace = origReplace;
      if (origGo) navigator.go = origGo;
    };
    restoreNavRef.current = restore;

    if (origPush) {
      navigator.push = (...args) => {
        if (bypassRef.current) {
          restore();
          return origPush(...args);
        }
        pendingNavRef.current = () => origPush(...args);
        setDialogOpen(true);
        return undefined;
      };
    }

    if (origReplace) {
      navigator.replace = (...args) => {
        if (bypassRef.current) {
          restore();
          return origReplace(...args);
        }
        pendingNavRef.current = () => origReplace(...args);
        setDialogOpen(true);
        return undefined;
      };
    }

    if (origGo) {
      navigator.go = (...args) => {
        if (bypassRef.current) {
          restore();
          return origGo(...args);
        }
        pendingNavRef.current = () => origGo(...args);
        setDialogOpen(true);
        return undefined;
      };
    }

    return () => {
      restore();
      restoreNavRef.current = null;
    };
  }, [isDirty, navigator]);

  const bypassGuard = useCallback(() => {
    bypassRef.current = true;
    if (typeof window !== 'undefined') {
      window.__ggUnsavedGuardActive = false;
    }
    if (restoreNavRef.current) {
      restoreNavRef.current();
      restoreNavRef.current = null;
    }
  }, []);

  const handleCancel = useCallback(() => {
    pendingNavRef.current = null;
    setDialogOpen(false);
  }, []);

  const handleDiscard = useCallback(() => {
    const retry = pendingNavRef.current;
    pendingNavRef.current = null;
    setDialogOpen(false);
    bypassGuard();
    if (typeof retry === 'function') {
      retry();
    }
  }, [bypassGuard]);

  const handleSave = useCallback(() => {
    pendingNavRef.current = null;
    setDialogOpen(false);
    if (typeof onSave === 'function') {
      onSave();
    }
  }, [onSave]);

  const UnsavedDialog = (
    <Dialog
      open={dialogOpen}
      onClose={handleCancel}
      maxWidth="xs"
      fullWidth
      PaperProps={{ sx: { borderRadius: 2.5, p: 0.5 } }}
    >
      <DialogTitle sx={{ display: 'flex', alignItems: 'center', gap: 1.5, pb: 1 }}>
        <Box sx={{ p: 0.9, borderRadius: 2, bgcolor: '#FFFBEB', color: '#D97706', display: 'flex' }}>
          <WarningAmberIcon />
        </Box>
        <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1.05rem', color: '#1E293B' }}>
          Unsaved Changes
        </Typography>
      </DialogTitle>
      <DialogContent sx={{ pb: 1.5 }}>
        <DialogContentText sx={{ color: '#475569', fontSize: '0.9rem' }}>
          You have unsaved {entityLabel}. Would you like to save your changes before leaving?
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ px: 2.5, pb: 2, gap: 1, flexWrap: 'wrap' }}>
        <Button onClick={handleCancel} variant="outlined" color="inherit" sx={{ textTransform: 'none', fontWeight: 600 }}>
          Cancel
        </Button>
        <Button onClick={handleDiscard} variant="outlined" color="error" sx={{ textTransform: 'none', fontWeight: 600 }}>
          Discard &amp; Leave
        </Button>
        <Button
          onClick={handleSave}
          variant="contained"
          sx={{ bgcolor: '#202a5a', '&:hover': { bgcolor: '#161e42' }, textTransform: 'none', fontWeight: 700 }}
        >
          Save Changes
        </Button>
      </DialogActions>
    </Dialog>
  );

  return { bypassGuard, UnsavedDialog };
}
