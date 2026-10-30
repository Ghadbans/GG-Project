import React from 'react';
import { IconButton, Tooltip, Zoom } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { toast } from 'react-toastify';
import { polishText } from '../utils/textAssistUtils';

/**
 * LanguageFixerButton (Strategy 4 & 5)
 * Discreet AI/Smart language polishing button.
 * Cleans whitespace, corrects common technical and bilingual typos, and formats casing.
 */
function LanguageFixerButton({
  value = '',
  onFixed,
  mode = 'sentence',
  tooltip = '✨ Polish text & fix spelling (Clean typos & formatting)',
  size = 'small',
  sx = {}
}) {
  const handleFix = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (e && e.stopPropagation) e.stopPropagation();

    if (!value || typeof value !== 'string' || !value.trim()) {
      toast.info('Please enter some text first to polish.');
      return;
    }

    const polished = polishText(value, mode);
    if (polished === value.trim()) {
      toast.info('Text is already clean and correctly formatted!');
    } else {
      if (typeof onFixed === 'function') {
        onFixed(polished);
      }
      toast.success('✨ Language, spelling & formatting polished!');
    }
  };

  return (
    <Tooltip title={tooltip} arrow TransitionComponent={Zoom}>
      <IconButton
        size={size}
        onClick={handleFix}
        sx={{
          color: '#30368a',
          backgroundColor: 'rgba(48, 54, 138, 0.08)',
          p: 0.6,
          ml: 0.5,
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            backgroundColor: '#30368a',
            color: '#ffffff',
            transform: 'scale(1.08)'
          },
          ...sx
        }}
      >
        <AutoAwesomeIcon sx={{ fontSize: size === 'small' ? 17 : 20 }} />
      </IconButton>
    </Tooltip>
  );
}

export default LanguageFixerButton;
