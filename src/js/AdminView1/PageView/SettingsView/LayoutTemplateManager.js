import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import useLayoutConfig from '../../../hooks/useLayoutConfig';
import defaultConfig from '../../../config/layout-config.json';
import Image from '../../../img/images.png';

const sliders = [
  {
    key: '--header-logo-width',
    label: 'Header Logo Width',
    unit: 'px',
    min: 80,
    max: 450,
    step: 5,
    description: 'Controls the logo size in Payment slips, Invoices, Dashboard reports, and Maintenance views.'
  },
  {
    key: '--header-name-font-size',
    label: 'Company Name Font Size',
    unit: 'px',
    min: 8,
    max: 18,
    step: 1,
    description: 'Font size of the bold company name (GLOBAL GATE SARL) in all document headers.'
  },
  {
    key: '--header-details-font-size',
    label: 'Company Details Font Size',
    unit: 'px',
    min: 8,
    max: 16,
    step: 1,
    description: 'Font size of the company details (RCCM, ID NAT, Address) beneath the company name.'
  },
  {
    key: '--global-font-size',
    label: 'Document Base Font Size',
    unit: 'px',
    min: 8,
    max: 18,
    step: 1,
    description: 'Base font size for all document/invoice/payment detail panels.'
  },
  {
    key: '--table-padding',
    label: 'Table Cell Padding',
    unit: 'px',
    min: 1,
    max: 20,
    step: 1,
    description: 'Controls spacing inside table cells across document views.'
  },
];

const parsePx = (val) => parseInt(String(val).replace('px', ''), 10) || 0;

function LiveDocumentPreview({ localConfig, setLocalConfig, setSaved }) {
  const [tabIndex, setTabIndex] = useState(0);
  const [dragState, setDragState] = useState({ dragging: null, startX: 0, startOffset: 0 });

  const logoWidth = parsePx(localConfig['--header-logo-width']);
  const nameFontSize = parsePx(localConfig['--header-name-font-size']);
  const textAlign = localConfig['--header-text-alignment'] || 'right';
  const globalFontSize = parsePx(localConfig['--global-font-size']);
  const tablePadding = parsePx(localConfig['--table-padding']);

  const detailsFontSize = parsePx(localConfig['--header-details-font-size']) || 10;

  const handleMouseDown = (e, block) => {
    e.preventDefault();
    const currentOffset = parsePx(
      block === 'client'
        ? localConfig['--client-block-left-offset']
        : localConfig['--metadata-block-right-offset']
    );
    setDragState({ dragging: block, startX: e.clientX, startOffset: currentOffset });
  };

  const handleMouseMove = (e) => {
    if (!dragState.dragging) return;
    const deltaX = e.clientX - dragState.startX;
    
    if (dragState.dragging === 'client') {
      const newOffset = dragState.startOffset + deltaX;
      setLocalConfig(prev => ({ ...prev, '--client-block-left-offset': `${newOffset}px` }));
    } else {
      const newOffset = dragState.startOffset - deltaX;
      setLocalConfig(prev => ({ ...prev, '--metadata-block-right-offset': `${newOffset}px` }));
    }
    setSaved(false);
  };

  const handleMouseUp = () => {
    if (dragState.dragging) {
      setDragState({ dragging: null, startX: 0, startOffset: 0 });
    }
  };

  const renderHeader = (title) => (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginBottom: '10px' }}>
        <div>
          <img  src={Image}
            alt="Company Logo"
            style={{ maxHeight: '80px', maxWidth: `${logoWidth}px`, objectFit: 'contain', margin: 0 }}
          />
        </div>
        <address style={{ textAlign: textAlign, fontStyle: 'normal', margin: 0, lineHeight: 1.5 }}>
          <p style={{ fontWeight: 'bold', margin: '0 0 2px', fontSize: `${nameFontSize}px` }}>GLOBAL GATE SARL</p>
          <p style={{ fontWeight: 'normal', margin: 0, fontSize: `${detailsFontSize}px`, lineHeight: 1.4 }}>
            RCCM CD/KWZ/RCCM/22-B-00317 <br />
            ID NAT 14-H5300N11179P <br />
            AVENUE SALONGO Q/INDUSTRIEL C/MANIKA <br />
            KOLWEZI LUALABA <br />
            DR CONGO
          </p>
        </address>
      </div>
      <hr /><p style={{ textAlign: 'center', fontWeight: 'bold', margin: '10px 0' }}>{title}</p>
    </>
  );

  const renderTableContent = () => (
    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: `${globalFontSize}px`, marginTop: '10px', border: '1px solid #DDD' }}>
      <thead>
        <tr style={{ backgroundColor: '#e8f7fe' }}>
          <th style={{ padding: `${tablePadding}px`, textAlign: 'left', border: '1px solid #DDD' }}>Description</th>
          <th style={{ padding: `${tablePadding}px`, textAlign: 'center', border: '1px solid #DDD' }}>Qty</th>
          <th style={{ padding: `${tablePadding}px`, textAlign: 'right', border: '1px solid #DDD' }}>Price</th>
          <th style={{ padding: `${tablePadding}px`, textAlign: 'right', border: '1px solid #DDD' }}>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ padding: `${tablePadding}px`, border: '1px solid #DDD' }}>Sample Service Retainer</td>
          <td style={{ padding: `${tablePadding}px`, textAlign: 'center', border: '1px solid #DDD' }}>1</td>
          <td style={{ padding: `${tablePadding}px`, textAlign: 'right', border: '1px solid #DDD' }}>$500.00</td>
          <td style={{ padding: `${tablePadding}px`, textAlign: 'right', border: '1px solid #DDD' }}>$500.00</td>
        </tr>
      </tbody>
    </table>
  );

  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: 8,
      backgroundColor: '#fff',
      marginBottom: 24,
      overflow: 'hidden'
    }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <Box sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: '#f8f9ff' }}>
        <Tabs value={tabIndex} onChange={(e, val) => setTabIndex(val)} aria-label="preview tabs">
          <Tab label="Invoice Preview" />
          <Tab label="Quotation Preview" />
          <Tab label="Payment Slip Preview" />
        </Tabs>
      </Box>
      <div style={{ padding: '20px', minHeight: '300px' }}>
        {tabIndex === 0 && (
          <div style={{ backgroundColor: 'white', padding: '10px', color: 'black' }}>
            {renderHeader('INVOICE')}
            <section style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', boxSizing: 'border-box', padding: '0px', marginBottom: '10px' }}>
              <address 
                onMouseDown={(e) => handleMouseDown(e, 'client')}
                style={{ marginLeft: localConfig['--client-block-left-offset'] || '0px', lineHeight: 1.35, width: 'fit-content', minWidth: '200px', cursor: 'ew-resize' }}
              >
                <p><span style={{ fontSize: '10px' }}>Bill To</span><br /><span style={{ fontWeight: 'bold', fontSize: '15px' }}>JOHN DOE LLC</span></p>
              </address>
              <div 
                onMouseDown={(e) => handleMouseDown(e, 'metadata')}
                style={{ marginLeft: 'auto', marginRight: localConfig['--metadata-block-right-offset'] || '0px', width: 'fit-content', display: 'block', marginBottom: '10px', cursor: 'ew-resize' }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', columnGap: '24px', rowGap: '6px', fontSize: `${globalFontSize}px`, alignContent: 'start', position: 'relative' }}>
                  <div style={{ fontWeight: 'bold', textAlign: 'left' }}>Invoice #</div>
                  <div style={{ textAlign: 'left' }}>INV-000123</div>
                  <div style={{ fontWeight: 'bold', textAlign: 'left' }}>Date</div>
                  <div style={{ textAlign: 'left' }}>17/07/2026</div>
                </div>
              </div>
            </section>
            {renderTableContent()}
          </div>
        )}
        {tabIndex === 1 && (
          <div style={{ backgroundColor: 'white', padding: '10px', color: 'black' }}>
            {renderHeader('QUOTATION')}
            <section style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', boxSizing: 'border-box', padding: '0px', marginBottom: '10px' }}>
              <address 
                onMouseDown={(e) => handleMouseDown(e, 'client')}
                style={{ marginLeft: localConfig['--client-block-left-offset'] || '0px', lineHeight: 1.35, width: 'fit-content', minWidth: '200px', cursor: 'ew-resize' }}
              >
                <p><span style={{ fontSize: '10px' }}>Quotation For</span><br /><span style={{ fontWeight: 'bold', fontSize: '15px' }}>ACME CORP</span></p>
              </address>
              <div 
                onMouseDown={(e) => handleMouseDown(e, 'metadata')}
                style={{ marginLeft: 'auto', marginRight: localConfig['--metadata-block-right-offset'] || '0px', width: 'fit-content', display: 'block', marginBottom: '10px', cursor: 'ew-resize' }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', columnGap: '24px', rowGap: '6px', fontSize: `${globalFontSize}px`, alignContent: 'start', position: 'relative' }}>
                  <div style={{ fontWeight: 'bold', textAlign: 'left' }}>Quotation #</div>
                  <div style={{ textAlign: 'left' }}>QUO-000456</div>
                  <div style={{ fontWeight: 'bold', textAlign: 'left' }}>Date</div>
                  <div style={{ textAlign: 'left' }}>17/07/2026</div>
                </div>
              </div>
            </section>
            {renderTableContent()}
          </div>
        )}
        {tabIndex === 2 && (
          <div style={{ backgroundColor: 'white', padding: '10px', color: 'black' }}>
            {renderHeader('PAYMENT')}
            <section style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', boxSizing: 'border-box', padding: '0px', marginBottom: '10px' }}>
              <address 
                onMouseDown={(e) => handleMouseDown(e, 'client')}
                style={{ marginLeft: localConfig['--client-block-left-offset'] || '0px', lineHeight: 1.35, width: 'fit-content', minWidth: '200px', cursor: 'ew-resize' }}
              >
                <p>Payment From<br /><span style={{ fontWeight: 'bold' }}>JANE SMITH</span></p>
              </address>
              <div 
                onMouseDown={(e) => handleMouseDown(e, 'metadata')}
                style={{ marginLeft: 'auto', marginRight: localConfig['--metadata-block-right-offset'] || '0px', width: 'fit-content', display: 'block', marginBottom: '10px', cursor: 'ew-resize' }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', columnGap: '24px', rowGap: '6px', fontSize: `${globalFontSize}px`, alignContent: 'start', position: 'relative' }}>
                  <div style={{ fontWeight: 'bold', textAlign: 'left' }}>PAY #</div>
                  <div style={{ textAlign: 'left' }}>PAY-000789</div>
                  <div style={{ fontWeight: 'bold', textAlign: 'left' }}>Date</div>
                  <div style={{ textAlign: 'left' }}>17/07/2026</div>
                  <div style={{ fontWeight: 'bold', textAlign: 'left' }}>Mode</div>
                  <div style={{ textAlign: 'left' }}>CASH</div>
                </div>
              </div>
            </section>
            <table style={{ width: '100%', fontSize: `${globalFontSize}px`, marginTop: '10px', border: '1px solid #DDD', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: '#e8f7fe' }}>
                  <th style={{ padding: `${tablePadding}px`, textAlign: 'center', border: '1px solid #DDD' }}>#</th>
                  <th style={{ padding: `${tablePadding}px`, textAlign: 'center', border: '1px solid #DDD' }}>Date</th>
                  <th style={{ padding: `${tablePadding}px`, textAlign: 'right', border: '1px solid #DDD' }}>Amount Paid</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: `${tablePadding}px`, textAlign: 'center', border: '1px solid #DDD' }}>INV-000123</td>
                  <td style={{ padding: `${tablePadding}px`, textAlign: 'center', border: '1px solid #DDD' }}>17/07/2026</td>
                  <td style={{ padding: `${tablePadding}px`, textAlign: 'right', border: '1px solid #DDD' }}>$500.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

function LayoutTemplateManager() {
  const { config, setConfigVar, resetConfig } = useLayoutConfig();

  // Local shadow state for the sliders so preview updates live without saving yet
  const [localConfig, setLocalConfig] = useState({ ...config });
  const [saved, setSaved] = useState(false);

  const handleSlider = (key, rawValue) => {
    const value = rawValue + 'px';
    setLocalConfig(prev => ({ ...prev, [key]: value }));
    setSaved(false);
  };

  const handleAlignment = (key, value) => {
    setLocalConfig(prev => ({ ...prev, [key]: value }));
    setSaved(false);
  };

  const handleSave = () => {
    Object.entries(localConfig).forEach(([key, value]) => {
      setConfigVar(key, value);
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const handleReset = () => {
    setLocalConfig({ ...defaultConfig });
    resetConfig();
    setSaved(false);
  };

  return (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'stretch', maxWidth: '100%', padding: '8px 0' }}>

      {/* Left Column: Tools (35-40%) */}
      <div style={{ flex: '0 0 38%', minWidth: '350px' }}>
        <div style={{ marginBottom: 20 }}>
          <h3 style={{ margin: '0 0 4px', color: '#30368a', fontSize: 16 }}>Layout &amp; Print Template Manager</h3>
          <p style={{ margin: 0, fontSize: 12, color: '#666' }}>
            Adjust these values to control how document headers and tables look across ALL modules —
            Payment, Invoice, Dashboard Reports, Maintenance, and more. Changes apply instantly.
            Click <strong>Save &amp; Apply</strong> to persist across sessions.
          </p>
        </div>

        {/* Sliders */}
      {sliders.map(({ key, label, unit, min, max, step, description }) => {
        const currentPx = parsePx(localConfig[key]);
        return (
          <div key={key} style={{ marginBottom: 20, backgroundColor: '#f8f9ff', borderRadius: 8, padding: '12px 16px', border: '1px solid #e8eaf6' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
              <label style={{ fontWeight: 600, fontSize: 13, color: '#30368a', display: 'block', padding: 0, margin: 0 }}>
                {label}
              </label>
              <span style={{ fontWeight: 700, color: '#30368a', fontSize: 14, minWidth: 52, textAlign: 'right' }}>
                {currentPx}{unit}
              </span>
            </div>
            <input
              type="range"
              min={min}
              max={max}
              step={step}
              value={currentPx}
              onChange={e => handleSlider(key, Number(e.target.value))}
              style={{ width: '100%', accentColor: '#30368a', cursor: 'pointer' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: '#999', marginTop: 2 }}>
              <span>{min}{unit}</span>
              <span style={{ fontSize: 11, color: '#888', textAlign: 'center', flex: 1, padding: '0 8px' }}>{description}</span>
              <span>{max}{unit}</span>
            </div>
          </div>
        );
      })}

      {/* Header Text Alignment Dropdown */}
      <div style={{ marginBottom: 24, backgroundColor: '#f8f9ff', borderRadius: 8, padding: '12px 16px', border: '1px solid #e8eaf6' }}>
        <label style={{ fontWeight: 600, fontSize: 13, color: '#30368a', display: 'block', marginBottom: 6, padding: 0 }}>
          Header Text Alignment
        </label>
        <div style={{ display: 'flex', gap: 10 }}>
          {['left', 'center', 'right'].map(align => (
            <button
              key={align}
              onClick={() => handleAlignment('--header-text-alignment', align)}
              style={{
                padding: '6px 20px',
                borderRadius: 6,
                border: '2px solid',
                borderColor: localConfig['--header-text-alignment'] === align ? '#30368a' : '#ccc',
                backgroundColor: localConfig['--header-text-alignment'] === align ? '#30368a' : '#fff',
                color: localConfig['--header-text-alignment'] === align ? '#fff' : '#555',
                fontWeight: 600,
                fontSize: 12,
                cursor: 'pointer',
                textTransform: 'capitalize',
                transition: 'all 0.15s',
              }}
            >
              {align}
            </button>
          ))}
        </div>
        <p style={{ fontSize: 11, color: '#888', margin: '6px 0 0' }}>
          Aligns the company name and address block in all document headers.
        </p>
      </div>


      <div style={{ display: 'flex', gap: 16, marginTop: 32 }}>
        <button
          onClick={handleReset}
          style={{ padding: '10px 24px', borderRadius: 8, border: 'none', backgroundColor: '#f5f5f5', color: '#333', fontWeight: 'bold', cursor: 'pointer', flex: 1 }}
        >
          Reset Defaults
        </button>
        <button
          onClick={handleSave}
          style={{ padding: '10px 24px', borderRadius: 8, border: 'none', backgroundColor: saved ? '#4caf50' : '#30368a', color: 'white', fontWeight: 'bold', cursor: 'pointer', flex: 2, transition: 'background-color 0.3s' }}
        >
          {saved ? 'Saved!' : 'Save & Apply'}
        </button>
      </div>
    </div>

    {/* Right Column: Sticky Preview (62%) */}
    <div style={{ flex: '1' }}>
      <div style={{ position: 'sticky', top: '24px' }}>
        <LiveDocumentPreview localConfig={localConfig} setLocalConfig={setLocalConfig} setSaved={setSaved} />
      </div>
    </div>

  </div>
  );
}

export default LayoutTemplateManager;
