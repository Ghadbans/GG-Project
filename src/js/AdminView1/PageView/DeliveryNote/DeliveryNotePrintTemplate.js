import React from 'react';
import dayjs from 'dayjs';
import useCompanyProfile from '../../../hooks/useCompanyProfile';

const DeliveryNotePrintTemplate = React.forwardRef(({ deliveryNote }, ref) => {
  const { profile } = useCompanyProfile();

  if (!deliveryNote) return null;

  const checkedItems = (deliveryNote.itemsQtyArray || []).filter(
    (item) => item && item.checked !== false && Number(item.deliverQty ?? item.newItemOut ?? 0) > 0
  );

  const custName =
    deliveryNote.customerName?.customerName ||
    (typeof deliveryNote.customerName === 'string' ? deliveryNote.customerName : '') ||
    '';

  const getItemTitle = (item) => {
    if (
      item.newDescription &&
      String(item.newDescription).trim() !== '' &&
      (!item.itemName ||
        (typeof item.itemName === 'string'
          ? item.itemName.trim() === ''
          : !item.itemName._id && !item.itemName.itemName))
    ) {
      return item.newDescription;
    }
    const rawName =
      typeof item.itemName === 'string' ? item.itemName : item.itemName?.itemName || '';
    if (String(rawName).trim().toLowerCase() === 'empty') {
      return item.itemDescription || '';
    }
    return rawName;
  };

  return (
    <div
      ref={ref}
      style={{
        padding: '24px 28px',
        backgroundColor: '#ffffff',
        color: '#1e293b',
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontSize: '12px',
        lineHeight: 1.45,
        minHeight: '260mm',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxSizing: 'border-box'
      }}
    >
      <div>
        {/* Company Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            borderBottom: '2px solid #202a5a',
            paddingBottom: '12px',
            marginBottom: '16px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {profile?.logoUrl && (
              <img
                src={profile.logoUrl}
                alt="Company Logo"
                style={{ maxHeight: '58px', maxWidth: '140px', objectFit: 'contain' }}
              />
            )}
            <div>
              <div style={{ fontSize: '18px', fontWeight: 800, color: '#202a5a' }}>
                {profile?.companyName || 'GLOBAL GATE SARL'}
              </div>
              {profile?.rccm && <div>RCCM: {profile.rccm}</div>}
              {profile?.idNat && <div>ID NAT: {profile.idNat}</div>}
              {profile?.address && <div>{profile.address}</div>}
              {profile?.phone && <div>Tel: {profile.phone}</div>}
            </div>
          </div>

          <div style={{ textAlign: 'right' }}>
            <div
              style={{
                fontSize: '20px',
                fontWeight: 800,
                color: '#202a5a',
                letterSpacing: '0.5px'
              }}
            >
              DELIVERY NOTE
            </div>
            <div style={{ fontSize: '11px', color: '#64748b', marginBottom: '6px' }}>
              BORDEREAU DE LIVRAISON
            </div>
            <div style={{ fontWeight: 700, fontSize: '14px' }}>
              {deliveryNote.deliveryName ||
                `DN-${String(deliveryNote.deliveryNumber || 0).padStart(6, '0')}`}
            </div>
            <div>
              <strong>Date:</strong>{' '}
              {deliveryNote.deliveryDate
                ? dayjs(deliveryNote.deliveryDate).format('DD/MM/YYYY')
                : ''}
            </div>
            <div>
              <strong>Status:</strong> {deliveryNote.status || 'Dispatched'}
            </div>
          </div>
        </div>

        {/* Client & Reference Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px',
            marginBottom: '16px',
            backgroundColor: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '6px',
            padding: '12px 14px'
          }}
        >
          <div>
            <div
              style={{
                fontSize: '10px',
                fontWeight: 700,
                color: '#64748b',
                textTransform: 'uppercase',
                marginBottom: '4px'
              }}
            >
              Deliver To / Client
            </div>
            <div style={{ fontWeight: 700, fontSize: '13px', color: '#0f172a' }}>
              {custName || '—'}
            </div>
            {(deliveryNote.deliveryAddress || deliveryNote.customerName?.address) && (
              <div>
                <strong>Address:</strong>{' '}
                {deliveryNote.deliveryAddress || deliveryNote.customerName?.address}
              </div>
            )}
            {deliveryNote.customerName?.phone && (
              <div>
                <strong>Phone:</strong> {deliveryNote.customerName.phone}
              </div>
            )}
          </div>

          <div>
            <div
              style={{
                fontSize: '10px',
                fontWeight: 700,
                color: '#64748b',
                textTransform: 'uppercase',
                marginBottom: '4px'
              }}
            >
              Source Reference & Logistics
            </div>
            <div>
              <strong>Type:</strong> {deliveryNote.reason || '—'}
            </div>
            <div>
              <strong>Reference:</strong>{' '}
              {deliveryNote.reference?.referenceNumber ||
                deliveryNote.reference?.referenceName ||
                '—'}
            </div>
            {deliveryNote.reference?.subject && (
              <div>
                <strong>Subject:</strong> {deliveryNote.reference.subject}
              </div>
            )}
            {deliveryNote.driverName && (
              <div>
                <strong>Driver:</strong> {deliveryNote.driverName}
                {deliveryNote.vehicleNumber ? ` (${deliveryNote.vehicleNumber})` : ''}
              </div>
            )}
          </div>
        </div>

        {/* Checked Items Table (NO PRICES) */}
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            marginBottom: '16px'
          }}
        >
          <thead>
            <tr style={{ backgroundColor: '#202a5a', color: '#ffffff' }}>
              <th style={{ padding: '8px 10px', textAlign: 'center', width: '40px', border: '1px solid #202a5a' }}>
                #
              </th>
              <th style={{ padding: '8px 10px', textAlign: 'left', border: '1px solid #202a5a' }}>
                Item & Description
              </th>
              <th style={{ padding: '8px 10px', textAlign: 'center', width: '80px', border: '1px solid #202a5a' }}>
                Unit
              </th>
              <th style={{ padding: '8px 10px', textAlign: 'center', width: '110px', border: '1px solid #202a5a' }}>
                Qty Delivered
              </th>
            </tr>
          </thead>
          <tbody>
            {checkedItems.length === 0 ? (
              <tr>
                <td
                  colSpan={4}
                  style={{
                    padding: '16px',
                    textAlign: 'center',
                    border: '1px solid #cbd5e1',
                    color: '#64748b'
                  }}
                >
                  No items selected for delivery.
                </td>
              </tr>
            ) : (
              checkedItems.map((item, idx) => {
                const title = getItemTitle(item);
                const desc =
                  item.itemDescription && item.itemDescription !== title
                    ? item.itemDescription
                    : '';
                const qtyDelivered = Number(item.deliverQty ?? item.newItemOut ?? 0);
                const unit = item.unit || item.itemName?.unit || 'PCS';
                return (
                  <tr
                    key={item.idRow || idx}
                    style={{ backgroundColor: idx % 2 === 1 ? '#f8fafc' : '#ffffff' }}
                  >
                    <td
                      style={{
                        padding: '7px 10px',
                        textAlign: 'center',
                        border: '1px solid #cbd5e1',
                        fontWeight: 600
                      }}
                    >
                      {idx + 1}
                    </td>
                    <td style={{ padding: '7px 10px', border: '1px solid #cbd5e1' }}>
                      <div style={{ fontWeight: 700, color: '#0f172a' }}>{title}</div>
                      {desc && (
                        <div style={{ fontSize: '11px', color: '#475569', marginTop: '2px' }}>
                          {desc}
                        </div>
                      )}
                    </td>
                    <td
                      style={{
                        padding: '7px 10px',
                        textAlign: 'center',
                        border: '1px solid #cbd5e1'
                      }}
                    >
                      {unit}
                    </td>
                    <td
                      style={{
                        padding: '7px 10px',
                        textAlign: 'center',
                        border: '1px solid #cbd5e1',
                        fontWeight: 700,
                        fontSize: '13px'
                      }}
                    >
                      {qtyDelivered}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>

        {deliveryNote.description && (
          <div
            style={{
              border: '1px solid #e2e8f0',
              borderRadius: '6px',
              padding: '8px 12px',
              backgroundColor: '#f8fafc',
              marginBottom: '16px'
            }}
          >
            <strong>Notes / Remarks:</strong> {deliveryNote.description}
          </div>
        )}
      </div>

      {/* 3-Box Signature Footer */}
      <div style={{ marginTop: '24px' }}>
        <div
          style={{
            fontSize: '11px',
            color: '#475569',
            marginBottom: '12px',
            fontStyle: 'italic'
          }}
        >
          Received the above goods in good order and condition. / Reçu les marchandises ci-dessus en bon état.
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '16px'
          }}
        >
          <div
            style={{
              border: '1px solid #cbd5e1',
              borderRadius: '6px',
              padding: '10px',
              minHeight: '88px'
            }}
          >
            <div style={{ fontWeight: 700, fontSize: '11px', color: '#202a5a' }}>
              Prepared By (Store)
            </div>
            <div style={{ fontSize: '11px', color: '#475569', marginTop: '4px' }}>
              {deliveryNote.Create?.person || ''}
            </div>
            <div style={{ marginTop: '32px', borderTop: '1px dashed #94a3b8', paddingTop: '4px', fontSize: '10px' }}>
              Name & Signature
            </div>
          </div>

          <div
            style={{
              border: '1px solid #cbd5e1',
              borderRadius: '6px',
              padding: '10px',
              minHeight: '88px'
            }}
          >
            <div style={{ fontWeight: 700, fontSize: '11px', color: '#202a5a' }}>
              Driver / Carrier
            </div>
            <div style={{ fontSize: '11px', color: '#475569', marginTop: '4px' }}>
              {deliveryNote.driverName || ''}
            </div>
            <div style={{ marginTop: '32px', borderTop: '1px dashed #94a3b8', paddingTop: '4px', fontSize: '10px' }}>
              Name & Signature
            </div>
          </div>

          <div
            style={{
              border: '1px solid #cbd5e1',
              borderRadius: '6px',
              padding: '10px',
              minHeight: '88px'
            }}
          >
            <div style={{ fontWeight: 700, fontSize: '11px', color: '#202a5a' }}>
              Received By (Client)
            </div>
            <div style={{ marginTop: '46px', borderTop: '1px dashed #94a3b8', paddingTop: '4px', fontSize: '10px' }}>
              Client Name, Signature, Stamp & Date
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default DeliveryNotePrintTemplate;
