import React from 'react';
import { Autocomplete, TextField, InputAdornment } from '@mui/material';
import LanguageFixerButton from './LanguageFixerButton';
import { COMMON_PRESETS, polishText, hasTypo } from '../utils/textAssistUtils';

/**
 * SmartTextInput
 * Drop-in intelligent text input with:
 * 1. Free-solo searchable dropdown (user can type freely OR pick from presets)
 * 2. Embedded Click Sparkle ✨ Language & Typo Fixer button (ALL CAPS default)
 * 3. Real-time typo detection badge & visual warning
 * 4. Automatic self-healing onBlur
 */
function SmartTextInput({
  label,
  value = '',
  onChange,
  onBlur,
  presetKey,
  options,
  mode = 'upper',
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
  passEvent = false,
  inputProps = {},
  ...rest
}) {
  const dropdownOptions = Array.isArray(options) && options.length > 0
    ? options
    : (presetKey && COMMON_PRESETS[presetKey] ? COMMON_PRESETS[presetKey] : null);

  const isTypo = hasTypo(value, mode);

  const notifyChange = (newVal) => {
    if (typeof onChange !== 'function') return;
    const finalVal = (mode === 'upper' && typeof newVal === 'string')
      ? newVal.toUpperCase()
      : newVal;
    if (passEvent) {
      onChange({ target: { name: name || id || '', value: finalVal } });
    } else {
      onChange(finalVal);
    }
  };

  const handleBlur = (e) => {
    if (value && typeof value === 'string' && value.trim()) {
      const polished = polishText(value, mode);
      if (polished !== value) {
        notifyChange(polished);
      }
    }
    if (typeof onBlur === 'function') {
      onBlur(e);
    }
  };

  const textTransformStyle = mode === 'upper' ? 'uppercase' : 'none';

  // If dropdown options exist and it's not multiline, use freeSolo Autocomplete
  if (dropdownOptions && !multiline) {
    return (
      <Autocomplete
        freeSolo
        disabled={disabled}
        options={dropdownOptions}
        value={value || ''}
        onInputChange={(event, newInputValue) => {
          notifyChange(newInputValue);
        }}
        onChange={(event, newValue) => {
          notifyChange(newValue || '');
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
            inputProps={{
              ...params.inputProps,
              spellCheck: 'true',
              ...inputProps,
              style: {
                textTransform: textTransformStyle,
                ...(inputProps?.style || {}),
                ...(params.inputProps?.style || {})
              }
            }}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <InputAdornment position="end" sx={{ gap: 0.5 }}>
                  <LanguageFixerButton
                    value={value}
                    onFixed={(fixed) => notifyChange(fixed)}
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
              ...(isTypo ? {
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#f59e0b'
                }
              } : {}),
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
        const val = e && e.target ? e.target.value : e;
        notifyChange(val);
      }}
      onBlur={handleBlur}
      multiline={multiline}
      rows={rows}
      required={required}
      size={size}
      disabled={disabled}
      placeholder={placeholder}
      inputProps={{
        spellCheck: 'true',
        ...inputProps,
        style: {
          textTransform: textTransformStyle,
          ...(inputProps?.style || {})
        }
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment
            position="end"
            sx={multiline ? { alignSelf: 'flex-start', mt: 1 } : {}}
          >
            <LanguageFixerButton
              value={value}
              onFixed={(fixed) => notifyChange(fixed)}
              mode={mode}
              size={size === 'small' ? 'small' : 'medium'}
            />
          </InputAdornment>
        )
      }}
      sx={{
        width: fullWidth ? '100%' : 'auto',
        backgroundColor: 'white',
        ...(isTypo ? {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#f59e0b'
          }
        } : {}),
        ...sx
      }}
    />
  );
}

export default SmartTextInput;

