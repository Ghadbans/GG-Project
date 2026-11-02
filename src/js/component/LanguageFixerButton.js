import React, { useState } from 'react';
import {
  IconButton,
  Tooltip,
  Zoom,
  Badge,
  Menu,
  MenuItem,
  Typography,
  Box,
  Divider,
  Chip,
  Button
} from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import CloseIcon from '@mui/icons-material/Close';
import { toast } from 'react-toastify';
import {
  polishText,
  getSuggestions,
  applySingleCorrection,
  applyCleanSpaces
} from '../utils/textAssistUtils';

/**
 * LanguageFixerButton
 * Interactive language assistant with granular word-by-word suggestions dropdown.
 * - Left-click or right-click opens an interactive drop-down menu of detected typos.
 * - Allows user to selectively click and apply ONLY the words they wish to correct.
 * - Avoids changing the meaning of sentences, codes, dimensions, or technical terms.
 * - Offers "Apply All" and "Format Spacing Only" options.
 */
function LanguageFixerButton({
  value = '',
  onFixed,
  mode = 'upper',
  tooltip,
  size = 'small',
  contextMenu = null,
  onCloseContextMenu = null,
  sx = {}
}) {
  const [anchorEl, setAnchorEl] = useState(null);

  // Compute suggestions and diagnostics
  const analysis = getSuggestions(value, mode);
  const { suggestions, hasExtraSpaces, hasUncapitalized, isClean } = analysis;
  const isTypo = !isClean;

  const isMenuOpen = Boolean(anchorEl) || contextMenu !== null;

  const handleOpenMenu = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (e && e.stopPropagation) e.stopPropagation();

    if (!value || typeof value !== 'string' || !value.trim()) {
      toast.info('Please enter some text first to inspect.');
      return;
    }

    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    if (typeof onCloseContextMenu === 'function') {
      onCloseContextMenu();
    }
  };

  const handleApplySingle = (original, replacement) => {
    const updated = applySingleCorrection(value, original, replacement, mode);
    if (typeof onFixed === 'function') {
      onFixed(updated);
    }
    toast.success(`✨ Replaced "${original}" with "${replacement}"!`);

    // Check remaining suggestions
    const remaining = getSuggestions(updated, mode).suggestions;
    if (remaining.length === 0) {
      handleClose();
    }
  };

  const handleApplyAll = () => {
    const polished = polishText(value, mode);
    if (typeof onFixed === 'function') {
      onFixed(polished);
    }
    toast.success('✨ All corrections applied!');
    handleClose();
  };

  const handleFormatSpacesOnly = () => {
    const updated = applyCleanSpaces(value, mode);
    if (typeof onFixed === 'function') {
      onFixed(updated);
    }
    toast.success('✨ Spacing and capitalization cleaned!');
    handleClose();
  };

  const activeTooltip = tooltip || (
    isTypo
      ? `⚠️ ${suggestions.length > 0 ? `${suggestions.length} suggestion(s)` : 'Format issue'} found. Click ✨ to choose words to fix`
      : '✨ Text formatting and language assistant'
  );

  return (
    <>
      <Tooltip title={isMenuOpen ? '' : activeTooltip} arrow TransitionComponent={Zoom}>
        <IconButton
          size={size}
          onClick={handleOpenMenu}
          onContextMenu={handleOpenMenu}
          sx={{
            color: isTypo ? '#d97706' : '#30368a',
            backgroundColor: isTypo ? 'rgba(217, 119, 6, 0.12)' : 'rgba(48, 54, 138, 0.08)',
            p: 0.6,
            ml: 0.5,
            border: isTypo ? '1px dashed #f59e0b' : '1px solid transparent',
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
              backgroundColor: isTypo ? '#d97706' : '#30368a',
              color: '#ffffff',
              transform: 'scale(1.08)'
            },
            ...sx
          }}
        >
          <Badge
            badgeContent={suggestions.length > 0 ? suggestions.length : (isTypo ? '!' : null)}
            color={suggestions.length > 0 ? 'warning' : 'primary'}
            sx={{
              '& .MuiBadge-badge': {
                fontSize: '10px',
                height: '15px',
                minWidth: '15px',
                fontWeight: 800,
                padding: '0 3px',
                top: 2,
                right: 2,
                backgroundColor: suggestions.length > 0 ? '#ea580c' : undefined
              }
            }}
          >
            <AutoAwesomeIcon sx={{ fontSize: size === 'small' ? 17 : 20 }} />
          </Badge>
        </IconButton>
      </Tooltip>

      <Menu
        open={isMenuOpen}
        onClose={handleClose}
        anchorEl={anchorEl}
        anchorReference={contextMenu !== null ? 'anchorPosition' : 'anchorEl'}
        anchorPosition={
          contextMenu !== null
            ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
            : undefined
        }
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        PaperProps={{
          sx: {
            minWidth: 320,
            maxWidth: 440,
            borderRadius: '10px',
            boxShadow: '0 10px 25px -5px rgba(0,0,0,0.15), 0 8px 10px -6px rgba(0,0,0,0.1)',
            border: '1px solid #e2e8f0',
            overflow: 'hidden',
            p: 0
          }
        }}
      >
        {/* Header */}
        <Box sx={{ p: 1.5, pb: 1, backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography sx={{ fontSize: 13, fontWeight: 700, color: '#1e293b', display: 'flex', alignItems: 'center', gap: 0.8 }}>
              <AutoAwesomeIcon sx={{ fontSize: 16, color: '#30368a' }} />
              Spelling & Word Suggestions
            </Typography>
            <IconButton size="small" onClick={handleClose} sx={{ p: 0.2 }}>
              <CloseIcon sx={{ fontSize: 15, color: '#64748b' }} />
            </IconButton>
          </Box>
          <Typography sx={{ fontSize: 11, color: '#64748b', mt: 0.5 }}>
            {suggestions.length > 0
              ? 'Select which word you want to replace in this sentence:'
              : 'No word replacements detected in this sentence.'}
          </Typography>
        </Box>

        {/* Suggestion Items List */}
        {suggestions.length > 0 && (
          <Box sx={{ maxHeight: 240, overflowY: 'auto', py: 0.5 }}>
            {suggestions.map((s, idx) => (
              <MenuItem
                key={idx}
                onClick={() => handleApplySingle(s.original, s.replacement)}
                sx={{
                  py: 1,
                  px: 1.5,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 1,
                  '&:hover': { backgroundColor: 'rgba(48, 54, 138, 0.08)' }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8, overflow: 'hidden' }}>
                  <Chip
                    label={s.original}
                    size="small"
                    sx={{
                      backgroundColor: '#fee2e2',
                      color: '#b91c1c',
                      fontWeight: 700,
                      fontSize: 11,
                      textDecoration: 'line-through',
                      height: 22
                    }}
                  />
                  <ArrowForwardIcon sx={{ fontSize: 13, color: '#94a3b8' }} />
                  <Chip
                    label={s.replacement}
                    size="small"
                    sx={{
                      backgroundColor: '#dcfce7',
                      color: '#15803d',
                      fontWeight: 700,
                      fontSize: 11,
                      height: 22
                    }}
                  />
                </Box>
                <Button
                  size="small"
                  variant="outlined"
                  sx={{
                    fontSize: 11,
                    py: 0.2,
                    px: 1,
                    minWidth: 44,
                    height: 22,
                    textTransform: 'none',
                    borderColor: '#30368a',
                    color: '#30368a',
                    fontWeight: 600
                  }}
                >
                  Fix
                </Button>
              </MenuItem>
            ))}
          </Box>
        )}

        {/* Clean State (No Typos) */}
        {suggestions.length === 0 && (
          <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
            <CheckCircleOutlineIcon sx={{ fontSize: 20, color: '#16a34a' }} />
            <Typography sx={{ fontSize: 12, color: '#15803d', fontWeight: 600 }}>
              All words look correct!
            </Typography>
          </Box>
        )}

        <Divider sx={{ my: 0 }} />

        {/* Action Controls */}
        <Box sx={{ p: 1, backgroundColor: '#f8fafc', display: 'flex', flexDirection: 'column', gap: 0.5 }}>
          {suggestions.length > 0 && (
            <MenuItem
              onClick={handleApplyAll}
              sx={{
                borderRadius: '6px',
                py: 0.8,
                fontSize: 12,
                fontWeight: 700,
                color: '#30368a',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                '&:hover': { backgroundColor: 'rgba(48, 54, 138, 0.12)' }
              }}
            >
              <DoneAllIcon sx={{ fontSize: 16 }} />
              Apply All Corrections ({suggestions.length})
            </MenuItem>
          )}

          {(hasExtraSpaces || hasUncapitalized) && (
            <MenuItem
              onClick={handleFormatSpacesOnly}
              sx={{
                borderRadius: '6px',
                py: 0.8,
                fontSize: 12,
                color: '#475569',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                '&:hover': { backgroundColor: '#f1f5f9' }
              }}
            >
              <AutoAwesomeIcon sx={{ fontSize: 15, color: '#64748b' }} />
              Format Spacing & Capitalize Only
            </MenuItem>
          )}
        </Box>
      </Menu>
    </>
  );
}

export default LanguageFixerButton;
