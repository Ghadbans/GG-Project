import React, { useState } from 'react';
import {
  Button,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
  Tooltip
} from '@mui/material';
import TranslateIcon from '@mui/icons-material/Translate';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CheckIcon from '@mui/icons-material/Check';
import { useTranslation } from '../context/LanguageContext';

export default function LanguageSelector({ variant = 'header', sx = {} }) {
  const { lang, setLanguage, supportedLanguages, currentLangInfo } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (code) => {
    setLanguage(code);
    handleClose();
  };

  const isSidebar = variant === 'sidebar';
  const isMobile = variant === 'mobile';

  return (
    <Box sx={{ display: 'inline-flex', alignItems: 'center', ...sx }}>
      <Tooltip title="Change Language / Changer de langue / تغيير اللغة">
        <Button
          onClick={handleClick}
          size="small"
          aria-controls={open ? 'language-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          sx={{
            minWidth: isSidebar ? '100%' : 'auto',
            justifyContent: isSidebar ? 'flex-start' : 'center',
            px: isSidebar ? 2 : 1.2,
            py: 0.5,
            borderRadius: 2,
            textTransform: 'none',
            color: isSidebar ? '#e0e0e0' : 'inherit',
            border: isSidebar ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(255,255,255,0.3)',
            backgroundColor: isSidebar ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.08)',
            backdropFilter: 'blur(4px)',
            '&:hover': {
              backgroundColor: isSidebar ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.2)',
              borderColor: 'rgba(255,255,255,0.5)'
            },
            fontWeight: 600,
            fontSize: isMobile ? '0.78rem' : '0.82rem',
            lineHeight: 1.4
          }}
        >
          <Box component="span" sx={{ fontSize: '1.15rem', mr: 0.7, lineHeight: 1 }}>
            {currentLangInfo?.flag || '🌐'}
          </Box>
          <Typography
            variant="body2"
            component="span"
            sx={{
              fontWeight: 700,
              fontSize: '0.8rem',
              letterSpacing: '0.5px',
              color: 'inherit'
            }}
          >
            {currentLangInfo?.code?.toUpperCase() || 'EN'}
          </Typography>
          <KeyboardArrowDownIcon sx={{ fontSize: '1rem', ml: 0.3, opacity: 0.8 }} />
        </Button>
      </Tooltip>

      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        PaperProps={{
          elevation: 6,
          sx: {
            minWidth: 200,
            borderRadius: 2.5,
            mt: 0.8,
            boxShadow: '0 8px 30px rgba(0,0,0,0.18)',
            border: '1px solid rgba(0,0,0,0.08)',
            py: 0.5
          }
        }}
      >
        <Box sx={{ px: 2, py: 0.8, borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
          <Typography variant="caption" sx={{ fontWeight: 700, color: '#666', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Select Language
          </Typography>
        </Box>

        {supportedLanguages.map((item) => {
          const isSelected = item.code === lang;
          return (
            <MenuItem
              key={item.code}
              onClick={() => handleSelect(item.code)}
              selected={isSelected}
              sx={{
                py: 1,
                px: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: isSelected ? 'rgba(25, 118, 210, 0.08)' : 'transparent',
                '&:hover': {
                  backgroundColor: isSelected ? 'rgba(25, 118, 210, 0.14)' : 'rgba(0,0,0,0.04)'
                }
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box component="span" sx={{ fontSize: '1.25rem', mr: 1.5, lineHeight: 1 }}>
                  {item.flag}
                </Box>
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: isSelected ? 700 : 500, lineHeight: 1.2 }}>
                    {item.nativeName}
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#888', fontSize: '0.72rem' }}>
                    {item.name}
                  </Typography>
                </Box>
              </Box>
              {isSelected && <CheckIcon sx={{ fontSize: '1.1rem', color: '#1976d2', ml: 1 }} />}
            </MenuItem>
          );
        })}
      </Menu>
    </Box>
  );
}
