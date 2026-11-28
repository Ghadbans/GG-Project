import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { UNSAFE_NavigationContext as NavigationContext, useLocation } from 'react-router-dom';
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

function isEditOrFormRoute(pathname) {
  const p = String(pathname || '').toLowerCase();
  return (
    p.includes('form') ||
    p.includes('update') ||
    p.includes('clone') ||
    p.includes('convertto') ||
    p.includes('create')
  );
}

function isSearchControl(target) {
  if (!target) return false;
  const placeholder = String(target.getAttribute?.('placeholder') || '').toLowerCase();
  const id = String(target.id || '').toLowerCase();
  const name = String(target.name || '').toLowerCase();
  const type = String(target.type || '').toLowerCase();
  return (
    type === 'search' ||
    placeholder.includes('search') ||
    id.includes('search') ||
    name.includes('search')
  );
}

/**
 * Universal unsaved-changes guard across all form/update/clone/convert modules
 * that do not mount their own page-specific useUnsavedChangesGuard().
 */
export default function GlobalUnsavedGuard() {
  const location = useLocation();
  const { navigator } = useContext(NavigationContext);
  const [isDirty, setIsDirty] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const pendingNavRef = useRef(null);
  const restoreNavRef = useRef(null);
  const bypassRef = useRef(false);

  const onFormRoute = isEditOrFormRoute(location.pathname);

  // Reset dirty flag on route change
  useEffect(() => {
    setIsDirty(false);
    setDialogOpen(false);
    pendingNavRef.current = null;
    bypassRef.current = false;
  }, [location.pathname]);

  // Track edits on active form routes (skip if page has its own useUnsavedChangesGuard)
  useEffect(() => {
    if (!onFormRoute) return undefined;

    const markDirty = (ev) => {
      if (typeof window !== 'undefined' && window.__ggPageGuardMounted) return;
      if (isSearchControl(ev?.target)) return;
      setIsDirty(true);
    };

    const handleFormSubmit = () => {
      bypassRef.current = true;
      setIsDirty(false);
    };

    document.addEventListener('input', markDirty, true);
    document.addEventListener('change', markDirty, true);
    document.addEventListener('submit', handleFormSubmit, true);

    return () => {
      document.removeEventListener('input', markDirty, true);
      document.removeEventListener('change', markDirty, true);
      document.removeEventListener('submit', handleFormSubmit, true);
    };
  }, [onFormRoute]);

  const active = Boolean(
    onFormRoute &&
    isDirty &&
    !(typeof window !== 'undefined' && window.__ggPageGuardMounted)
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.__ggGlobalGuardActive = active;
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.__ggGlobalGuardActive = false;
      }
    };
  }, [active]);

  useEffect(() => {
    if (!active) return undefined;
    const handleBeforeUnload = (e) => {
      if (bypassRef.current) return;
      e.preventDefault();
      e.returnValue = '';
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [active]);

  useEffect(() => {
    if (!active || !navigator) return undefined;

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
  }, [active, navigator]);

  const handleCancel = useCallback(() => {
    pendingNavRef.current = null;
    setDialogOpen(false);
  }, []);

  const handleDiscard = useCallback(() => {
    const retry = pendingNavRef.current;
    pendingNavRef.current = null;
    bypassRef.current = true;
    setIsDirty(false);
    setDialogOpen(false);
    if (restoreNavRef.current) {
      restoreNavRef.current();
      restoreNavRef.current = null;
    }
    if (typeof retry === 'function') {
      retry();
    }
  }, []);

  const handleSave = useCallback(() => {
    pendingNavRef.current = null;
    setDialogOpen(false);
    const form = document.querySelector('form');
    if (form) {
      if (typeof form.requestSubmit === 'function') {
        form.requestSubmit();
      } else {
        const submitBtn = form.querySelector('button[type="submit"], input[type="submit"]');
        if (submitBtn) submitBtn.click();
      }
      return;
    }
    const mobileSaveBtn = Array.from(document.querySelectorAll('button')).find((b) =>
      /^(save|update|submit)\b/i.test(String(b.textContent || '').trim())
    );
    if (mobileSaveBtn) {
      mobileSaveBtn.click();
    }
  }, []);

  if (!active && !dialogOpen) return null;

  return (
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
          You have unsaved changes on this page. Would you like to save before leaving?
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
}
