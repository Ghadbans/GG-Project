import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Card,
  Divider,
  Button,
  Chip
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import TransformIcon from '@mui/icons-material/Transform';

function safeText(val, fallback = '') {
  if (val === null || val === undefined) return fallback;
  if (typeof val === 'string' || typeof val === 'number') return String(val);
  if (typeof val === 'object') {
    if (val.itemName) return safeText(val.itemName, fallback);
    if (val.customerName) return safeText(val.customerName, fallback);
    if (val.Customer) return safeText(val.Customer, fallback);
    if (val.employeeName) return safeText(val.employeeName, fallback);
    if (val.technicianAssign) return safeText(val.technicianAssign, fallback);
    if (val.name) return safeText(val.name, fallback);
    if (val.expensesCategory) return safeText(val.expensesCategory, fallback);
    if (val.category) return safeText(val.category, fallback);
    if (val.projectName) return safeText(val.projectName, fallback);
    if (val.newCode) return safeText(val.newCode, fallback);
    if (val.code) return safeText(val.code, fallback);
    if (val.defectDescription) return safeText(val.defectDescription, fallback);
    if (val.description) return safeText(val.description, fallback);
    if (val.label) return safeText(val.label, fallback);
    if (val.title) return safeText(val.title, fallback);
    return fallback;
  }
  return String(val);
}

function formatMoney(val) {
  if (val === undefined || val === null || isNaN(val)) return '$ 0.00';
  return '$ ' + Number(val).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function getStatusChip(status, balanceDue, totalAmount) {
  const isPaid = parseFloat(balanceDue || 0) <= 0 && parseFloat(totalAmount || 0) > 0;
  const rawStat = safeText(isPaid ? 'Paid' : (status || 'Draft'), 'Draft');
  const stat = rawStat.toLowerCase();

  let bg = '#F1F5F9';
  let color = '#475569';

  switch (stat) {
    case 'paid':
    case 'close':
    case 'converted':
      bg = '#DCFCE7';
      color = '#15803D';
      break;
    case 'open':
    case 'sent':
    case 'active':
      bg = '#DBEAFE';
      color = '#1D4ED8';
      break;
    case 'pending':
    case 'in progress':
      bg = '#FEF3C7';
      color = '#B45309';
      break;
    case 'reschedule':
      bg = '#F3E8FF';
      color = '#7E22CE';
      break;
    case 'cancel':
    case 'overdue':
    case 'decline':
    case 'fired':
      bg = '#FEE2E2';
      color = '#B91C1C';
      break;
    case 'partially-paid':
      bg = '#FFEDD5';
      color = '#C2410C';
      break;
    default:
      bg = '#F1F5F9';
      color = '#475569';
  }

  return (
    <Chip
      label={rawStat.toUpperCase()}
      size="small"
      sx={{
        backgroundColor: bg,
        color: color,
        fontWeight: 700,
        fontSize: '0.68rem',
        height: 24,
        borderRadius: 2
      }}
    />
  );
}

function MobileDetailSheet({ open, onClose, record, type }) {
  const navigate = useNavigate();
  if (!record) return null;

  try {
    const id = record?._id || record?.id;

    // Safe title extraction
    let title = 'Record Detail';
    let refNum = '';
    let customerName = safeText(record?.customerName?.customerName || record?.customerName || record?.customer || record?.Customer || record?.clientName);
    let totalAmount = Number(record?.totalAmount ?? record?.totalInvoice ?? record?.totalEstimate ?? record?.total ?? record?.amount ?? record?.Sell ?? record?.itemSellingPrice ?? record?.infoSell ?? 0);
    let balanceDue = Number(record?.balanceDue ?? 0);

    if (type === 'invoices') {
      refNum = typeof record?.invoiceNumber === 'number' ? `INV-${String(record.invoiceNumber).padStart(6, '0')}` : safeText(record?.invoiceNumber, 'INV');
      title = refNum;
    } else if (type === 'quotations' || type === 'estimates') {
      refNum = typeof record?.estimateNumber === 'number' ? `EST-${String(record.estimateNumber).padStart(6, '0')}` : safeText(record?.estimateNumber, 'EST');
      title = refNum;
    } else if (type === 'customers') {
      title = customerName || 'Customer';
    } else if (type === 'items' || type === 'tech_store') {
      title = safeText(record?.itemName || record?.name, 'Store Item');
    } else if (type === 'maintenance') {
      refNum = record?.serviceNumber ? (String(record.serviceNumber).startsWith('M-') ? record.serviceNumber : `M-${String(record.serviceNumber).padStart(6, '0')}`) : 'Job Card';
      title = refNum;
    } else if (type === 'maintenance_orders') {
      title = safeText(record?.serviceNumber || record?.orderNumber || record?.maintenanceNumber, 'Maintenance Order');
    } else if (type === 'payments') {
      title = `PAY-${safeText(record?.paymentNumber || id?.substring(0, 6) || '001')}`;
    } else if (type === 'expenses') {
      title = safeText(record?.expenseCategory?.expensesCategory || record?.expenseCategory || record?.category, 'Daily Expense');
    } else if (type === 'projects') {
      title = safeText(record?.projectName || record?.project, 'Project');
    } else if (type === 'employees') {
      title = safeText(record?.employeeName || record?.name, 'Employee');
    } else if (type === 'suppliers') {
      title = safeText(record?.supplierName || record?.name, 'Supplier');
    }

    // Handle Edit Navigation
    const handleEdit = () => {
      onClose();
      if (type === 'invoices') navigate(`/InvoiceFormUpdate/${id}`);
      else if (type === 'quotations' || type === 'estimates') navigate(`/EstimateInvoiceFormUpdate/${id}`);
      else if (type === 'customers') navigate(`/CustomerFormUpdate/${id}`);
      else if (type === 'items') navigate(`/ItemFormUpdate/${id}`);
      else if (type === 'maintenance') navigate(`/MaintenanceUpdateView/${id}`);
      else if (type === 'maintenance_orders') navigate(`/MaintenanceOrderUpdate/${id}`);
      else if (type === 'payments') navigate(`/PaymentInformationUpdate/${id}`);
      else if (type === 'expenses') navigate(`/DailyExpenseUpdate/${id}`);
      else if (type === 'employees') navigate(`/EmployeeUpdateView/${id}`);
      else if (type === 'suppliers') navigate(`/SupplierFormUpdate/${id}`);
    };

    // Handle Convert Action (Estimates -> Invoice, Invoice -> Payment)
    const handleConvert = () => {
      onClose();
      if (type === 'quotations' || type === 'estimates') navigate(`/EstimateViewConvertToInvoice/${id}`);
      else if (type === 'invoices') navigate(`/PaymentInformationForm/${id}`);
      else if (type === 'maintenance') navigate(`/EstimateInvoiceForm`);
    };

    const lineItems = Array.isArray(record?.itemInfo) ? record.itemInfo : (Array.isArray(record?.items) ? record.items : []);

    return (
      <Drawer
        anchor="right"
        open={open}
        onClose={onClose}
        PaperProps={{
          sx: {
            width: '100%',
            maxWidth: '100vw',
            backgroundColor: '#F8FAFC',
            boxSizing: 'border-box'
          }
        }}
      >
        {/* ── STICKY TOP HEADER (NO PDF BUTTON) ── */}
        <Box
          sx={{
            position: 'sticky',
            top: 0,
            zIndex: 1100,
            backgroundColor: '#30368a',
            color: '#ffffff',
            px: 1.5,
            py: 1.2,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', minWidth: 0, gap: 1 }}>
            <IconButton onClick={onClose} size="small" sx={{ color: '#ffffff' }}>
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#ffffff' }} noWrap>
              {title}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Button
              size="small"
              variant="contained"
              onClick={handleEdit}
              startIcon={<EditIcon sx={{ fontSize: '15px !important' }} />}
              sx={{
                backgroundColor: 'rgba(255,255,255,0.22)',
                color: '#ffffff',
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'none',
                px: 1.5,
                py: 0.5,
                borderRadius: 2,
                '&:hover': { backgroundColor: 'rgba(255,255,255,0.35)' }
              }}
            >
              Edit
            </Button>

            {(type === 'quotations' || type === 'estimates' || type === 'invoices' || type === 'maintenance') && (
              <IconButton
                size="small"
                onClick={handleConvert}
                sx={{
                  color: '#ffffff',
                  backgroundColor: 'rgba(255,255,255,0.18)',
                  p: 0.8,
                  '&:hover': { backgroundColor: 'rgba(255,255,255,0.3)' }
                }}
              >
                <TransformIcon sx={{ fontSize: 18 }} />
              </IconButton>
            )}
          </Box>
        </Box>

        {/* ── BODY (VERTICAL STACK OF WHITE CARDS) ── */}
        {type === 'maintenance_orders' || type === 'maintenance' ? (
          <Box sx={{ p: 2, pb: 8 }}>
            {/* 1. ORDER & SERVICE OVERVIEW */}
            <Card sx={{ borderRadius: 3.5, p: 2.5, mb: 2, backgroundColor: '#ffffff', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1.5 }}>
                <Box>
                  <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 700, textTransform: 'uppercase' }}>
                    Service Order
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 800, color: '#1E293B', mt: 0.3 }}>
                    {title}
                  </Typography>
                </Box>
                {getStatusChip(record?.status || 'Open', 0, 0)}
              </Box>

              <Divider sx={{ my: 1.5 }} />

              <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.5 }}>
                <Box>
                  <Typography variant="caption" sx={{ color: '#94A3B8' }}>Service Date</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 700, color: '#334155' }}>
                    {safeText(record?.dateField || record?.serviceDate || record?.date || record?.createdAt?.substring(0, 10), 'N/A')}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="caption" sx={{ color: '#94A3B8' }}>Assigned Tech</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 700, color: '#334155' }}>
                    {safeText(record?.technicianAssign || record?.technicianName || record?.technician, 'Unassigned')}
                  </Typography>
                </Box>
              </Box>
            </Card>

            {/* 2. CLIENT / CONTACT DETAILS */}
            {Boolean(customerName || record?.phone || record?.customerName?.phone || record?.address || record?.customerName?.address) && (
              <Card sx={{ borderRadius: 3.5, p: 2, mb: 2, backgroundColor: '#ffffff', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
                <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 700, textTransform: 'uppercase' }}>
                  Client / Site Details
                </Typography>
                <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#1E293B', mt: 0.5 }}>
                  {safeText(customerName, 'N/A')}
                </Typography>
                {(record?.phone || record?.phone1 || record?.customerName?.phone || record?.contact) && (
                  <Typography variant="caption" sx={{ color: '#64748B', display: 'block', mt: 0.3 }}>
                    Phone: {safeText(record?.phone || record?.phone1 || record?.customerName?.phone || record?.contact)}
                  </Typography>
                )}
                {(record?.address || record?.customerName?.address) && (
                  <Typography variant="caption" sx={{ color: '#64748B', display: 'block', mt: 0.2 }}>
                    Address: {safeText(record?.address || record?.customerName?.address)}
                  </Typography>
                )}
              </Card>
            )}

            {/* 3. APPLIANCE & DEFECT DETAILS */}
            <Card sx={{ borderRadius: 3.5, p: 2, mb: 2, backgroundColor: '#ffffff', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
              <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 700, textTransform: 'uppercase', mb: 1, display: 'block' }}>
                Appliance & Defect Info
              </Typography>
              {Boolean(record?.itemDescriptionInfo || record?.itemName) && (
                <Box sx={{ mb: 1 }}>
                  <Typography variant="caption" sx={{ color: '#94A3B8' }}>Item Description</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 700, color: '#1E293B' }}>
                    {safeText(record?.itemDescriptionInfo || record?.itemName)}
                  </Typography>
                </Box>
              )}
              <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.5, mb: 1 }}>
                {record?.brand && (
                  <Box>
                    <Typography variant="caption" sx={{ color: '#94A3B8' }}>Brand</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: '#334155' }}>
                      {safeText(record.brand)}
                    </Typography>
                  </Box>
                )}
                {record?.model && (
                  <Box>
                    <Typography variant="caption" sx={{ color: '#94A3B8' }}>Model</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: '#334155' }}>
                      {safeText(record.model)}
                    </Typography>
                  </Box>
                )}
                {record?.serialNo && (
                  <Box>
                    <Typography variant="caption" sx={{ color: '#94A3B8' }}>Serial No</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: '#334155' }}>
                      {safeText(record.serialNo)}
                    </Typography>
                  </Box>
                )}
                {record?.warranty && (
                  <Box>
                    <Typography variant="caption" sx={{ color: '#94A3B8' }}>Warranty</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: '#334155' }}>
                      {safeText(record.warranty)}
                    </Typography>
                  </Box>
                )}
              </Box>
              {Boolean(record?.defectDescription || record?.defect) && (
                <Box sx={{ mt: 1, p: 1.5, backgroundColor: '#FFFBEB', borderRadius: 2, border: '1px solid #FEF3C7' }}>
                  <Typography variant="caption" sx={{ color: '#B45309', fontWeight: 700, display: 'block' }}>Defect Description</Typography>
                  <Typography variant="body2" sx={{ color: '#92400E', fontWeight: 600, mt: 0.3 }}>
                    {safeText(record.defectDescription || record.defect)}
                  </Typography>
                </Box>
              )}
            </Card>

            {/* 4. REPAIR DETAILS & ACTIONS */}
            {Boolean(record?.action || record?.actionTaken || record?.note) && (
              <Card sx={{ borderRadius: 3.5, p: 2, mb: 2, backgroundColor: '#ffffff', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
                <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 700, textTransform: 'uppercase', mb: 1, display: 'block' }}>
                  Repair Details
                </Typography>
                {record?.action && (
                  <Box sx={{ mb: 1 }}>
                    <Typography variant="caption" sx={{ color: '#94A3B8' }}>Action</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 700, color: '#1E293B' }}>{safeText(record.action)}</Typography>
                  </Box>
                )}
                {record?.actionTaken && (
                  <Box sx={{ mb: 1 }}>
                    <Typography variant="caption" sx={{ color: '#94A3B8' }}>Action Taken</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: '#334155' }}>{safeText(record.actionTaken)}</Typography>
                  </Box>
                )}
                {record?.note && (
                  <Box sx={{ mt: 1 }}>
                    <Typography variant="caption" sx={{ color: '#94A3B8' }}>Note</Typography>
                    <Typography variant="body2" sx={{ color: '#475569' }}>{safeText(record.note)}</Typography>
                  </Box>
                )}
              </Card>
            )}

            {/* 5. ASSET CONTROL REPORT / SCHEDULE */}
            {(type === 'maintenance' || type === 'maintenance_orders' || record?.includeAssetControl || (record?.assetControlReport?.units && record.assetControlReport.units.length > 0)) && (
              <Card sx={{ borderRadius: 3.5, p: 2, mb: 2, backgroundColor: '#ffffff', boxShadow: '0 2px 10px rgba(0,0,0,0.04)', border: '1.5px solid #EEF2FF' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.5 }}>
                  <Typography variant="caption" sx={{ color: '#30368a', fontWeight: 800, textTransform: 'uppercase', fontSize: '0.85rem' }}>
                    📋 Asset Control Schedule ({record?.assetControlReport?.units?.length || 0})
                  </Typography>
                  {record?.assetControlReport?.subject && (
                    <Chip label={record.assetControlReport.subject} size="small" sx={{ backgroundColor: '#EEF2FF', color: '#30368a', fontWeight: 700, fontSize: '0.7rem' }} />
                  )}
                </Box>

                {(record?.assetControlReport?.technicianName || record?.assetControlReport?.preparedBy) && (
                  <Box sx={{ mb: 1.5, p: 1.2, backgroundColor: '#F8FAFC', borderRadius: 2 }}>
                    {record?.assetControlReport?.technicianName && (
                      <Typography variant="caption" sx={{ color: '#64748B', display: 'block' }}>
                        <strong>Technician:</strong> {safeText(record.assetControlReport.technicianName)}
                      </Typography>
                    )}
                    {record?.assetControlReport?.preparedBy && (
                      <Typography variant="caption" sx={{ color: '#64748B', display: 'block' }}>
                        <strong>Prepared By:</strong> {safeText(record.assetControlReport.preparedBy)}
                      </Typography>
                    )}
                  </Box>
                )}

                {(record?.assetControlReport?.units && record.assetControlReport.units.length > 0) ? (
                  record.assetControlReport.units.map((unit, uIdx) => (
                    <Box key={unit.idRow || uIdx} sx={{ p: 1.5, mb: 1.2, backgroundColor: '#FAFAFA', borderRadius: 2.5, border: '1px solid #F1F5F9' }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#1E293B' }}>
                          #{uIdx + 1} {safeText(unit.itemType, 'EQUIPMENT')} {unit.brand ? `• ${unit.brand}` : ''}
                        </Typography>
                        {unit.modelNo && (
                          <Typography variant="caption" sx={{ fontWeight: 700, color: '#64748B' }}>
                            Mod: {unit.modelNo}
                          </Typography>
                        )}
                      </Box>

                      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, mt: 0.8 }}>
                        {unit.serialNo && (
                          <Typography variant="caption" sx={{ color: '#475569' }}>
                            <strong>S/N:</strong> {unit.serialNo}
                          </Typography>
                        )}
                        {unit.location && (
                          <Typography variant="caption" sx={{ color: '#475569' }}>
                            <strong>Loc:</strong> {unit.location}
                          </Typography>
                        )}
                        {unit.dateOfVisit && (
                          <Typography variant="caption" sx={{ color: '#475569' }}>
                            <strong>Visit:</strong> {unit.dateOfVisit}
                          </Typography>
                        )}
                      </Box>

                      {/* Maintenance Badges */}
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.6, mt: 1 }}>
                        {unit.deepCleaning && (
                          <Chip label="Deep Cleaning" size="small" sx={{ backgroundColor: '#DCFCE7', color: '#15803D', fontWeight: 700, fontSize: '0.7rem', height: 20 }} />
                        )}
                        {unit.softCleaning && (
                          <Chip label="Soft Cleaning" size="small" sx={{ backgroundColor: '#E0F2FE', color: '#0369A1', fontWeight: 700, fontSize: '0.7rem', height: 20 }} />
                        )}
                        {unit.correctiveMaintenance && (
                          <Chip label="Corrective" size="small" sx={{ backgroundColor: '#FEF3C7', color: '#B45309', fontWeight: 700, fontSize: '0.7rem', height: 20 }} />
                        )}
                        {unit.reactiveMaintenance && (
                          <Chip label="Reactive" size="small" sx={{ backgroundColor: '#F3E8FF', color: '#7E22CE', fontWeight: 700, fontSize: '0.7rem', height: 20 }} />
                        )}
                      </Box>

                      {(unit.repairHistory || unit.cleaningHistory) && (
                        <Box sx={{ mt: 0.8, pt: 0.8, borderTop: '1px dashed #E2E8F0' }}>
                          {unit.repairHistory && (
                            <Typography variant="caption" sx={{ color: '#64748B', display: 'block' }}>
                              <strong>Repair:</strong> {unit.repairHistory}
                            </Typography>
                          )}
                          {unit.cleaningHistory && (
                            <Typography variant="caption" sx={{ color: '#64748B', display: 'block' }}>
                              <strong>Notes:</strong> {unit.cleaningHistory}
                            </Typography>
                          )}
                        </Box>
                      )}
                    </Box>
                  ))
                ) : (
                  <Box sx={{ p: 1.5, textAlign: 'center', backgroundColor: '#F8FAFC', borderRadius: 2 }}>
                    <Typography variant="caption" sx={{ color: '#94a3b8', display: 'block', mb: 1 }}>
                      No equipment units attached yet.
                    </Typography>
                    <Button
                      size="small"
                      variant="outlined"
                      onClick={() => {
                        onClose();
                        navigate(type === 'maintenance_orders' ? `/MaintenanceOrderUpdate/${record._id}` : `/MaintenanceUpdateView/${record._id}`);
                      }}
                      sx={{ textTransform: 'none', fontSize: '0.75rem', borderRadius: 2 }}
                    >
                      + Add Equipment Units in Edit
                    </Button>
                  </Box>
                )}
              </Card>
            )}

            {/* 6. PARTS / ITEMS USED (TECHNICAL VIEW - ZERO PRICES/COSTS) */}
            {lineItems.length > 0 && (
              <Card sx={{ borderRadius: 3.5, p: 2, mb: 2, backgroundColor: '#ffffff', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
                <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 700, textTransform: 'uppercase', mb: 1, display: 'block' }}>
                  Parts / Items Used ({lineItems.length})
                </Typography>
                {lineItems.map((it, idx) => {
                  const itName = safeText(it?.itemName || it?.description, `Item #${idx + 1}`);
                  const itDesc = safeText(it?.itemDescription || it?.newDescription);
                  const qty = Number(it?.itemQty ?? it?.itemQuantity ?? it?.quantity ?? 1);
                  return (
                    <Box key={idx} sx={{ py: 1.2, borderBottom: idx < lineItems.length - 1 ? '1px solid #F1F5F9' : 'none' }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <Box sx={{ pr: 1, flex: 1 }}>
                          <Typography variant="body2" sx={{ fontWeight: 700, color: '#1E293B' }}>
                            {itName}
                          </Typography>
                          {itDesc && (
                            <Typography variant="caption" sx={{ color: '#64748B', display: 'block' }}>
                              {itDesc}
                            </Typography>
                          )}
                        </Box>
                        <Chip
                          label={`Qty: ${qty}`}
                          size="small"
                          sx={{
                            backgroundColor: '#EEF2FF',
                            color: '#30368a',
                            fontWeight: 700,
                            fontSize: '0.75rem',
                            height: 24,
                            borderRadius: 1.5
                          }}
                        />
                      </Box>
                    </Box>
                  );
                })}
              </Card>
            )}
          </Box>
        ) : (
          <Box sx={{ p: 2, pb: 8 }}>
            {/* CARD 1: OVERVIEW & STATUS */}
            <Card sx={{ borderRadius: 3.5, p: 2.5, mb: 2, backgroundColor: '#ffffff', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <Box>
                  <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 700, textTransform: 'uppercase' }}>
                    Total Amount
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 800, color: '#1E293B', mt: 0.3 }}>
                    {formatMoney(totalAmount)}
                  </Typography>
                  {balanceDue > 0 && (
                    <Typography variant="caption" sx={{ color: '#EF4444', fontWeight: 700, display: 'block', mt: 0.2 }}>
                      Balance Due: {formatMoney(balanceDue)}
                    </Typography>
                  )}
                </Box>
                {getStatusChip(record?.status, balanceDue, totalAmount)}
              </Box>

              <Divider sx={{ my: 1.5 }} />

              <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.5 }}>
                <Box>
                  <Typography variant="caption" sx={{ color: '#94A3B8' }}>Issue Date</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 700, color: '#334155' }}>
                    {record?.dateField || record?.date || record?.expenseDate || record?.createdAt?.substring(0, 10) || 'N/A'}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="caption" sx={{ color: '#94A3B8' }}>Due Date</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 700, color: '#334155' }}>
                    {record?.dueDate || 'Upon Receipt'}
                  </Typography>
                </Box>
              </Box>
            </Card>

            {/* CARD 2: CLIENT / CONTACT INFORMATION */}
            {Boolean(customerName || record?.phone || record?.email) && (
              <Card sx={{ borderRadius: 3.5, p: 2, mb: 2, backgroundColor: '#ffffff', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
                <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 700, textTransform: 'uppercase' }}>
                  Client / Contact Details
                </Typography>
                <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#1E293B', mt: 0.5 }}>
                  {safeText(customerName, 'N/A')}
                </Typography>
                {(record?.phone || record?.phone1 || record?.customerName?.phone || record?.contact) && (
                  <Typography variant="caption" sx={{ color: '#64748B', display: 'block', mt: 0.3 }}>
                    Phone: {safeText(record?.phone || record?.phone1 || record?.customerName?.phone || record?.contact)}
                  </Typography>
                )}
                {(record?.email || record?.customerName?.email) && (
                  <Typography variant="caption" sx={{ color: '#64748B', display: 'block' }}>
                    Email: {safeText(record?.email || record?.customerName?.email)}
                  </Typography>
                )}
                {record?.address && (
                  <Typography variant="caption" sx={{ color: '#64748B', display: 'block' }}>
                    Address: {safeText(record?.address)}
                  </Typography>
                )}
              </Card>
            )}

            {/* CARD 3: LINE ITEMS BREAKDOWN */}
            {lineItems.length > 0 && (
              <Card sx={{ borderRadius: 3.5, p: 2, mb: 2, backgroundColor: '#ffffff', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
                <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 700, textTransform: 'uppercase', mb: 1, display: 'block' }}>
                  Items & Services ({lineItems.length})
                </Typography>
                {lineItems.map((it, idx) => {
                  const itName = safeText(it?.itemName || it?.description, `Item #${idx + 1}`);
                  const qty = Number(it?.itemQuantity ?? it?.quantity ?? 1);
                  const rate = Number(it?.itemSellingPrice ?? it?.rate ?? it?.price ?? 0);
                  const itTotal = Number(it?.itemTotal ?? (qty * rate));
                  return (
                    <Box key={idx} sx={{ py: 1, borderBottom: idx < lineItems.length - 1 ? '1px solid #F1F5F9' : 'none' }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <Box sx={{ pr: 1 }}>
                          <Typography variant="body2" sx={{ fontWeight: 700, color: '#1E293B' }}>
                            {itName}
                          </Typography>
                          <Typography variant="caption" sx={{ color: '#64748B' }}>
                            Qty: {qty} × {formatMoney(rate)}
                          </Typography>
                        </Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#1E293B' }}>
                          {formatMoney(itTotal)}
                        </Typography>
                      </Box>
                    </Box>
                  );
                })}
              </Card>
            )}

            {/* CARD 4: FINANCIAL BREAKDOWN */}
            <Card sx={{ borderRadius: 3.5, p: 2, mb: 2, backgroundColor: '#ffffff', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
              <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 700, textTransform: 'uppercase', mb: 1, display: 'block' }}>
                Financial Breakdown
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 0.5 }}>
                <Typography variant="body2" sx={{ color: '#64748B' }}>Sub-Total</Typography>
                <Typography variant="body2" sx={{ fontWeight: 700, color: '#1E293B' }}>
                  {formatMoney(record?.subTotal ?? record?.subtotal ?? totalAmount)}
                </Typography>
              </Box>
              {Number(record?.discount ?? 0) > 0 && (
                <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 0.5 }}>
                  <Typography variant="body2" sx={{ color: '#64748B' }}>Discount</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 700, color: '#EF4444' }}>
                    -{formatMoney(record?.discount)}
                  </Typography>
                </Box>
              )}
              {Number(record?.shippingFee ?? record?.shipping ?? 0) > 0 && (
                <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 0.5 }}>
                  <Typography variant="body2" sx={{ color: '#64748B' }}>Shipping</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 700, color: '#1E293B' }}>
                    {formatMoney(record?.shippingFee ?? record?.shipping)}
                  </Typography>
                </Box>
              )}
              <Divider sx={{ my: 1 }} />
              <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 0.5 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#1E293B' }}>Total</Typography>
                <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#30368a' }}>
                  {formatMoney(totalAmount)}
                </Typography>
              </Box>
            </Card>

            {/* CARD 5: NOTES & DESCRIPTION */}
            {Boolean(record?.invoiceSubject || record?.defectDescription || record?.description || record?.note || record?.notes) && (
              <Card sx={{ borderRadius: 3.5, p: 2, mb: 2, backgroundColor: '#ffffff', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
                <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 700, textTransform: 'uppercase' }}>
                  Notes & Description
                </Typography>
                {record?.invoiceSubject && (
                  <Typography variant="body2" sx={{ fontWeight: 600, color: '#1E293B', mt: 0.5 }}>
                    Subject: {safeText(record.invoiceSubject)}
                  </Typography>
                )}
                {record?.defectDescription && (
                  <Typography variant="body2" sx={{ fontWeight: 600, color: '#1E293B', mt: 0.5 }}>
                    Defect: {safeText(record.defectDescription)}
                  </Typography>
                )}
                {record?.description && (
                  <Typography variant="body2" sx={{ fontWeight: 600, color: '#1E293B', mt: 0.5 }}>
                    {safeText(record.description)}
                  </Typography>
                )}
                {(record?.note || record?.notes) && (
                  <Typography variant="caption" sx={{ color: '#64748B', display: 'block', mt: 0.5 }}>
                    {safeText(record.note || record.notes)}
                  </Typography>
                )}
              </Card>
            )}
          </Box>
        )}
      </Drawer>
    );
  } catch (err) {
    console.error('Error rendering MobileDetailSheet:', err);
    return null;
  }
}

export default MobileDetailSheet;
