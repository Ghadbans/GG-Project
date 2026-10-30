import React from 'react';
import { Autocomplete, TextField, InputAdornment } from '@mui/material';
import LanguageFixerButton from './LanguageFixerButton';
import { COMMON_PRESETS, polishText } from '../utils/textAssistUtils';

/**
 * SmartTextInput
 * Drop-in intelligent text input with:
 * 1. Free-solo searchable dropdown (user can type freely OR pick from presets)
 * 2. Embedded Click Sparkle ✨ Language & Typo Fixer button
 * 3. Automatic self-healing onBlur
 */
function SmartTextInput({
  label,
  value = '',
  onChange,
  onBlur,
  presetKey,
  options,
  mode = 'sentence',
  multiline = false,
  rows = 1,
  id,
  name,
  required = false,
  fullWidth = true,
  size = 'medium',
  sx = {},
  disabled = false,
  placeholder,
  ...rest
}) {
  const dropdownOptions = Array.isArray(options) && options.length > 0
    ? options
    : (presetKey && COMMON_PRESETS[presetKey] ? COMMON_PRESETS[presetKey] : null);

  const handleBlur = (e) => {
    if (value && typeof value === 'string' && value.trim()) {
      const polished = polishText(value, mode);
      if (polished !== value && typeof onChange === 'function') {
        onChange(polished);
      }
    }
    if (typeof onBlur === 'function') {
      onBlur(e);
    }
  };

  // If dropdown options exist and it's not multiline, use freeSolo Autocomplete
  if (dropdownOptions && !multiline) {
    return (
      <Autocomplete
        freeSolo
        disabled={disabled}
        options={dropdownOptions}
        value={value || ''}
        onInputChange={(event, newInputValue) => {
          if (typeof onChange === 'function') {
            onChange(newInputValue);
          }
        }}
        onChange={(event, newValue) => {
          if (typeof onChange === 'function') {
            onChange(newValue || '');
          }
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            {...rest}
            id={id}
            name={name}
            label={label}
            required={required}
            size={size}
            placeholder={placeholder}
            onBlur={handleBlur}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <InputAdornment position="end" sx={{ gap: 0.5 }}>
                  <LanguageFixerButton
                    value={value}
                    onFixed={(fixed) => {
                      if (typeof onChange === 'function') onChange(fixed);
                    }}
                    mode={mode}
                    size={size === 'small' ? 'small' : 'medium'}
                  />
                  {params.InputProps.endAdornment}
                </InputAdornment>
              )
            }}
            sx={{
              width: fullWidth ? '100%' : 'auto',
              backgroundColor: 'white',
              ...sx
            }}
          />
        )}
      />
    );
  }

  // Standard or multiline TextField with Sparkle Button
  return (
    <TextField
      {...rest}
      id={id}
      name={name}
      label={label}
      value={value !== undefined && value !== null ? value : ''}
      onChange={(e) => {
        if (typeof onChange === 'function') onChange(e.target.value);
      }}
      onBlur={handleBlur}
      multiline={multiline}
      rows={rows}
      required={required}
      size={size}
      disabled={disabled}
      placeholder={placeholder}
      InputProps={{
        endAdornment: (
          <InputAdornment
            position="end"
            sx={multiline ? { alignSelf: 'flex-start', mt: 1 } : {}}
          >
            <LanguageFixerButton
              value={value}
              onFixed={(fixed) => {
                if (typeof onChange === 'function') onChange(fixed);
              }}
              mode={mode}
              size={size === 'small' ? 'small' : 'medium'}
            />
          </InputAdornment>
        )
      }}
      sx={{
        width: fullWidth ? '100%' : 'auto',
        backgroundColor: 'white',
        ...sx
      }}
    />
  );
}

export default SmartTextInput;
