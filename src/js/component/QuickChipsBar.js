import React from 'react';
import { Box, Chip, Typography } from '@mui/material';
import { COMMON_PRESETS } from '../utils/textAssistUtils';

/**
 * QuickChipsBar (Strategy 1)
 * Horizontal scrollable chips bar providing one-tap standardized entries
 * for defects, actions taken, appliance types, and subjects.
 */
function QuickChipsBar({
  chips = [],
  presetKey = null,
  onSelect,
  currentValue = '',
  label = 'Suggestions:',
  sx = {}
}) {
  const chipList = Array.isArray(chips) && chips.length > 0
    ? chips
    : (presetKey && COMMON_PRESETS[presetKey] ? COMMON_PRESETS[presetKey] : []);

  if (!chipList || chipList.length === 0) return null;

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 0.8,
        overflowX: 'auto',
        py: 0.6,
        px: 0.5,
        width: '100%',
        boxSizing: 'border-box',
        scrollbarWidth: 'thin',
        '&::-webkit-scrollbar': { height: '4px' },
        '&::-webkit-scrollbar-thumb': { backgroundColor: '#CBD5E1', borderRadius: '4px' },
        ...sx
      }}
    >
      {label && (
        <Typography
          variant="caption"
          sx={{
            color: '#64748B',
            fontWeight: 700,
            textTransform: 'uppercase',
            fontSize: '0.65rem',
            letterSpacing: '0.5px',
            flexShrink: 0,
            userSelect: 'none'
          }}
        >
          {label}
        </Typography>
      )}

      {chipList.map((chipText, idx) => {
        const isMatch = currentValue && currentValue.trim().toLowerCase() === chipText.toLowerCase();

        return (
          <Chip
            key={idx}
            label={chipText}
            size="small"
            clickable
            onClick={() => {
              if (typeof onSelect === 'function') {
                onSelect(chipText);
              }
            }}
            sx={{
              flexShrink: 0,
              fontSize: '0.75rem',
              fontWeight: isMatch ? 700 : 500,
              backgroundColor: isMatch ? '#30368a' : '#F1F5F9',
              color: isMatch ? '#ffffff' : '#334155',
              borderColor: isMatch ? '#30368a' : '#E2E8F0',
              borderWidth: '1px',
              borderStyle: 'solid',
              transition: 'all 0.15s ease-in-out',
              '&:hover': {
                backgroundColor: isMatch ? '#252a6d' : '#E2E8F0',
                transform: 'translateY(-1px)'
              }
            }}
          />
        );
      })}
    </Box>
  );
}

export default QuickChipsBar;
