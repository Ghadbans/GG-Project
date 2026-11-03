import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { Autocomplete, TextField, InputAdornment } from '@mui/material';
import LanguageFixerButton from './LanguageFixerButton';
import { COMMON_PRESETS, hasTypo, getSuggestions } from '../utils/textAssistUtils';

/**
 * SmartTextInput
 * Drop-in intelligent text input with:
 * 1. Free-solo searchable dropdown (user can type freely OR pick from presets)
 * 2. Embedded Click Sparkle ✨ Language & Typo Fixer button (ALL CAPS default)
 * 3. Smart suggestion dropdown menu (by clicking ✨ or right-clicking on mistaken/selected words)
 * 4. Preserves native browser context menu (Undo, Redo, Cut, Copy, Paste) on clean text & empty spaces
 * 5. Real-time typo detection badge & visual warning
 * 6. Preserves cursor position when uppercasing / editing in middle or beginning of text across all modules
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
  const [contextMenu, setContextMenu] = useState(null);
  const inputRef = useRef(null);
  const selectionRef = useRef(null);

  const dropdownOptions = Array.isArray(options) && options.length > 0
    ? options
    : (presetKey && COMMON_PRESETS[presetKey] ? COMMON_PRESETS[presetKey] : null);

  const isTypo = hasTypo(value, mode);

  const restoreSelection = (start, end) => {
    const el = inputRef.current;
    if (el && typeof el.setSelectionRange === 'function') {
      try {
        el.setSelectionRange(start, end);
      } catch (err) {
        // ignore
      }
    }
  };

  useLayoutEffect(() => {
    if (selectionRef.current) {
      const { start, end } = selectionRef.current;
      restoreSelection(start, end);
    }
  });

  useEffect(() => {
    if (selectionRef.current) {
      const { start, end } = selectionRef.current;
      restoreSelection(start, end);
      selectionRef.current = null;
    }
  });

  const handleContextMenu = (e) => {
    if (!value || typeof value !== 'string' || !value.trim()) {
      // Empty input: allow native browser context menu (Undo, Redo, Cut, Copy, Paste, etc.)
      return;
    }

    // 1. Check if user has selected / highlighted text with mouse
    const selectedText = (typeof window !== 'undefined' && window.getSelection)
      ? window.getSelection().toString().trim()
      : '';

    if (selectedText) {
      const selAnalysis = getSuggestions(selectedText, mode);
      if (selAnalysis.suggestions.length > 0) {
        // User highlighted text that contains a mistake -> show suggestions for this selection
        e.preventDefault();
        setContextMenu({
          mouseX: e.clientX,
          mouseY: e.clientY,
          scopeText: selectedText
        });
        return;
      }
      // User highlighted clean text (likely to Copy) -> do NOT prevent default, let native Copy show!
      return;
    }

    // 2. No text selected: check which word the cursor is currently on
    const inputEl = e.target;
    let clickedWord = '';
    if (inputEl && typeof inputEl.selectionStart === 'number') {
      const pos = inputEl.selectionStart;
      const textVal = inputEl.value || value || '';
      const leftPart = textVal.slice(0, pos);
      const rightPart = textVal.slice(pos);
      const leftMatch = (leftPart.match(/[\w\u00C0-\u017F]+$/) || [''])[0];
      const rightMatch = (rightPart.match(/^[\w\u00C0-\u017F]+/) || [''])[0];
      clickedWord = leftMatch + rightMatch;
    }

    if (clickedWord) {
      const wordAnalysis = getSuggestions(clickedWord, mode);
      if (wordAnalysis.suggestions.length > 0) {
        // Clicked word is a mistake -> show Spelling & Word Suggestions for this word!
        e.preventDefault();
        setContextMenu({
          mouseX: e.clientX,
          mouseY: e.clientY,
          scopeText: clickedWord
        });
        return;
      }
    }

    // 3. Otherwise: clicked on whitespace or clean word -> allow native browser context menu!
  };

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

  const handleInputChange = (e) => {
    const target = (e && e.target) ? e.target : inputRef.current;
    const val = target ? target.value : e;
    if (target && typeof target.selectionStart === 'number') {
      const start = target.selectionStart;
      const end = target.selectionEnd;
      selectionRef.current = { start, end };
      if (typeof window !== 'undefined' && window.requestAnimationFrame) {
        window.requestAnimationFrame(() => {
          restoreSelection(start, end);
        });
      }
      setTimeout(() => {
        restoreSelection(start, end);
      }, 0);
    }
    notifyChange(val);
  };

  const handleBlur = (e) => {
    // Note: Do NOT automatically mutate or change user text on blur.
    // User text is only polished when explicitly clicking the Sparkle ✨ button or right-clicking.
    if (typeof onBlur === 'function') {
      onBlur(e);
    }
  };

  const setMergedRef = (node, extraRef, thirdRef) => {
    if (node) {
      inputRef.current = node;
    }
    if (typeof extraRef === 'function') {
      extraRef(node);
    } else if (extraRef && typeof extraRef === 'object') {
      extraRef.current = node;
    }
    if (typeof thirdRef === 'function') {
      thirdRef(node);
    } else if (thirdRef && typeof thirdRef === 'object') {
      thirdRef.current = node;
    }
    if (typeof rest.inputRef === 'function') {
      rest.inputRef(node);
    } else if (rest.inputRef && typeof rest.inputRef === 'object') {
      rest.inputRef.current = node;
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
        inputValue={value !== undefined && value !== null ? String(value) : ''}
        value={null}
        onInputChange={(event, newInputValue, reason) => {
          if (reason === 'input') {
            const target = (event && event.target && typeof event.target.selectionStart === 'number')
              ? event.target
              : inputRef.current;
            if (target && typeof target.selectionStart === 'number') {
              const start = target.selectionStart;
              const end = target.selectionEnd;
              selectionRef.current = { start, end };
              if (typeof window !== 'undefined' && window.requestAnimationFrame) {
                window.requestAnimationFrame(() => {
                  restoreSelection(start, end);
                });
              }
              setTimeout(() => {
                restoreSelection(start, end);
              }, 0);
            }
            notifyChange(newInputValue);
          } else if (reason === 'clear') {
            notifyChange('');
          }
        }}
        onChange={(event, newValue) => {
          const chosen = typeof newValue === 'string'
            ? newValue
            : (newValue && typeof newValue === 'object' ? (newValue.label || newValue.itemName || newValue.title || '') : '');
          notifyChange(chosen || '');
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            {...rest}
            inputRef={(node) => setMergedRef(node, params.InputProps?.ref, params.inputProps?.ref)}
            id={id}
            name={name}
            label={label}
            required={required}
            size={size}
            placeholder={placeholder}
            onBlur={handleBlur}
            onContextMenu={handleContextMenu}
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
                    contextMenu={contextMenu}
                    onCloseContextMenu={() => setContextMenu(null)}
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
      inputRef={(node) => setMergedRef(node)}
      id={id}
      name={name}
      label={label}
      value={value !== undefined && value !== null ? value : ''}
      onChange={handleInputChange}
      onBlur={handleBlur}
      onContextMenu={handleContextMenu}
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
              contextMenu={contextMenu}
              onCloseContextMenu={() => setContextMenu(null)}
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
