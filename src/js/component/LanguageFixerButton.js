import React from 'react';
import { IconButton, Tooltip, Zoom, Badge } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { toast } from 'react-toastify';
import { polishText, hasTypo } from '../utils/textAssistUtils';

/**
 * LanguageFixerButton
 * Smart language & spelling assistant button.
 * Cleans whitespace, corrects technical & bilingual typos, and standardizes to CAPITAL LETTERS.
 * Shows an active alert badge when typos or uncapitalized text are detected.
 */
function LanguageFixerButton({
  value = '',
  onFixed,
  mode = 'upper',
  tooltip,
  size = 'small',
  sx = {}
}) {
  const isTypo = hasTypo(value, mode);
  const activeTooltip = tooltip || (
    isTypo
      ? '⚠️ Typo or lowercase detected! Click ✨ to auto-correct & format in CAPITAL LETTERS'
      : '✨ Standardize text & format in CAPITAL LETTERS'
  );

  const handleFix = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (e && e.stopPropagation) e.stopPropagation();

    if (!value || typeof value !== 'string' || !value.trim()) {
      toast.info('Please enter some text first to polish.');
      return;
    }

    const polished = polishText(value, mode);
    if (polished === value.trim()) {
      toast.info('Text is already clean and correctly formatted in CAPITAL LETTERS!');
    } else {
      if (typeof onFixed === 'function') {
        onFixed(polished);
      }
      toast.success('✨ Polished & formatted in CAPITAL LETTERS!');
    }
  };

  return (
    <Tooltip title={activeTooltip} arrow TransitionComponent={Zoom}>
      <IconButton
        size={size}
        onClick={handleFix}
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
          badgeContent={isTypo ? '!' : null}
          color="error"
          sx={{
            '& .MuiBadge-badge': {
              fontSize: '10px',
              height: '14px',
              minWidth: '14px',
              fontWeight: 800,
              padding: '0 2px',
              top: 2,
              right: 2
            }
          }}
        >
          <AutoAwesomeIcon sx={{ fontSize: size === 'small' ? 17 : 20 }} />
        </Badge>
      </IconButton>
    </Tooltip>
  );
}

export default LanguageFixerButton;

