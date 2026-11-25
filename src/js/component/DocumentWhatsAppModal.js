import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Typography,
  Box,
  Chip,
  CircularProgress,
  FormControlLabel,
  Checkbox
} from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import DownloadIcon from '@mui/icons-material/Download';
import SaveIcon from '@mui/icons-material/Save';
import { toast } from 'react-toastify';
import { ENDPOINT_URL } from '../apiConfig';

const DEFAULT_MESSAGES = {
  payment:
    'Dear Valued Client,\nThank you for your payment! Please find attached your official Payment Receipt from Global Gate General Services SARL.\nWe truly appreciate your business and continued trust.',
  quotation:
    'Dear Valued Client,\nPlease find attached your official Quotation from Global Gate General Services SARL.\nFeel free to reply to this message if you have any questions or would like to confirm.'
};

function resolvePhoneFromCustomer(cust) {
  if (!cust || typeof cust !== 'object') return '';
  return String(
    cust.customerCompanyPhone ||
      cust.customerPhone ||
      cust.phone1 ||
      cust.phone2 ||
      cust.phone ||
      cust.mobile ||
      ''
  ).trim();
}

function getDocumentNumber(docType, doc) {
  if (!doc) return '';
  if (docType === 'payment') {
    return typeof doc.paymentNumber === 'number'
      ? `PAY-${String(doc.paymentNumber).padStart(6, '0')}`
      : String(doc.paymentNumber || 'PAY-000000');
  }
  return typeof doc.estimateNumber === 'number'
    ? `Q-${String(doc.estimateNumber).padStart(6, '0')}`
    : String(doc.estimateNumber || 'Q-000000');
}

function getClientDisplayName(doc) {
  const cust = doc?.customerName;
  if (!cust) return 'Valued Client';
  if (typeof cust === 'string') return cust;
  return cust.Customer || cust.customerName || cust.customerFullName || 'Valued Client';
}

export default function DocumentWhatsAppModal({
  open,
  onClose,
  docType = 'payment', // 'payment' | 'quotation'
  documentRecord = null,
  sentBy = 'GG'
}) {
  const isPayment = docType === 'payment';
  const docNum = getDocumentNumber(docType, documentRecord);
  const clientName = getClientDisplayName(documentRecord);

  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState(DEFAULT_MESSAGES[docType] || DEFAULT_MESSAGES.payment);
  const [downloadPdfToo, setDownloadPdfToo] = useState(isPayment);
  const [cloudStatus, setCloudStatus] = useState({ status: 'CHECKING', isReady: false });
  const [sending, setSending] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [savingTpl, setSavingTpl] = useState(false);

  useEffect(() => {
    if (!open || !documentRecord) return;
    setDownloadPdfToo(isPayment);

    let active = true;
    const directPhone = resolvePhoneFromCustomer(documentRecord.customerName);
    setPhone(directPhone);

    // Fallback: look up customer phone from /endpoint/customer if missing on embedded object
    if (!directPhone && documentRecord.customerName) {
      const custId = typeof documentRecord.customerName === 'object' ? documentRecord.customerName._id : null;
      if (custId) {
        axios
          .get(`${ENDPOINT_URL}/get-customer/${custId}`)
          .then((r) => {
            if (!active) return;
            const p = resolvePhoneFromCustomer(r?.data?.data);
            if (p) setPhone(p);
          })
          .catch(() => {});
      }
    }

    axios
      .get(`${ENDPOINT_URL}/invoice-whatsapp/cloud-status`)
      .then((r) => {
        if (active && r?.data) setCloudStatus(r.data);
      })
      .catch(() => {});

    axios
      .get(`${ENDPOINT_URL}/invoice-whatsapp/${docType}-template`)
      .then((r) => {
        if (active && r?.data?.templateMessage) {
          setMessage(r.data.templateMessage);
        }
      })
      .catch(() => {});

    return () => {
      active = false;
    };
  }, [open, documentRecord, docType, isPayment]);

  const handleDownloadPdf = async () => {
    if (!documentRecord) return false;
    setDownloading(true);
    try {
      const endpoint = isPayment ? 'download-payment-pdf' : 'download-quotation-pdf';
      const body = isPayment ? { payment: documentRecord } : { quotation: documentRecord };
      const res = await axios.post(`${ENDPOINT_URL}/invoice-whatsapp/${endpoint}`, body, {
        responseType: 'blob'
      });
      const blob = new Blob([res.data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${docNum}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
      return true;
    } catch (err) {
      toast.error(err?.response?.data?.error || 'Failed to generate PDF');
      return false;
    } finally {
      setDownloading(false);
    }
  };

  const handleSaveTemplate = async () => {
    if (!message.trim()) return;
    setSavingTpl(true);
    try {
      await axios.post(`${ENDPOINT_URL}/invoice-whatsapp/${docType}-template`, {
        templateMessage: message.trim(),
        updatedBy: sentBy
      });
      toast.success('Default WhatsApp message saved!');
    } catch (err) {
      toast.error(err?.response?.data?.error || 'Could not save template');
    } finally {
      setSavingTpl(false);
    }
  };

  const handleSend = async () => {
    if (!documentRecord) return;
    if (!phone.trim()) {
      toast.warn('Please enter the client WhatsApp phone number.');
      return;
    }
    setSending(true);
    try {
      if (downloadPdfToo) {
        await handleDownloadPdf();
      }
      const docId = documentRecord._id || documentRecord.id;
      const endpoint = isPayment ? 'send-payment' : 'send-quotation';
      const res = await axios.post(`${ENDPOINT_URL}/invoice-whatsapp/${endpoint}`, {
        items: [documentRecord],
        templateMessage: message.trim(),
        phoneOverrides: { [docId]: phone.trim() },
        sentBy
      });
      if (res?.data?.sent > 0) {
        toast.success(`${docNum} PDF sent via WhatsApp to ${clientName}!`);
        onClose();
      } else {
        const errDetail = res?.data?.details?.[0]?.error || res?.data?.error || 'Failed to send on WhatsApp';
        toast.error(errDetail);
      }
    } catch (err) {
      toast.error(err?.response?.data?.error || err.message || 'WhatsApp dispatch failed');
    } finally {
      setSending(false);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', bgcolor: '#093170', color: 'white' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <WhatsAppIcon sx={{ color: '#25D366' }} />
          <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1rem' }}>
            Send {isPayment ? 'Payment Receipt' : 'Quotation'} by WhatsApp ({docNum})
          </Typography>
        </Box>
        <Chip
          size="small"
          label={cloudStatus.isReady ? 'Cloud WA Connected' : (cloudStatus.status || 'Offline')}
          sx={{
            bgcolor: cloudStatus.isReady ? '#25D366' : '#ef4444',
            color: 'white',
            fontWeight: 700
          }}
        />
      </DialogTitle>
      <DialogContent sx={{ pt: 2.5, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography variant="body2" sx={{ color: '#334155', mt: 1 }}>
          <strong>Client:</strong> {clientName}
        </Typography>
        <TextField
          label="Client WhatsApp Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+243..."
          size="small"
          fullWidth
        />
        <Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
            <Typography variant="caption" sx={{ fontWeight: 700, color: '#475569' }}>
              {isPayment ? 'Thank-You Message' : 'Quotation Message'}
            </Typography>
            <Button
              size="small"
              startIcon={<SaveIcon />}
              onClick={handleSaveTemplate}
              disabled={savingTpl}
              sx={{ textTransform: 'none', fontSize: '0.75rem' }}
            >
              {savingTpl ? 'Saving...' : 'Save as Default'}
            </Button>
          </Box>
          <TextField
            multiline
            minRows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            fullWidth
          />
        </Box>
        <FormControlLabel
          control={
            <Checkbox
              checked={downloadPdfToo}
              onChange={(e) => setDownloadPdfToo(e.target.checked)}
              color="primary"
            />
          }
          label={`Also download ${docNum}.pdf to this PC when sending`}
        />
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2, justifyContent: 'space-between' }}>
        <Button
          variant="outlined"
          startIcon={downloading ? <CircularProgress size={16} /> : <DownloadIcon />}
          onClick={handleDownloadPdf}
          disabled={downloading || sending}
        >
          Download PDF Only
        </Button>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button onClick={onClose} disabled={sending}>
            Cancel
          </Button>
          <Button
            variant="contained"
            startIcon={sending ? <CircularProgress size={16} color="inherit" /> : <WhatsAppIcon />}
            onClick={handleSend}
            disabled={sending}
            sx={{ bgcolor: '#25D366', '&:hover': { bgcolor: '#1ebe5d' }, fontWeight: 700 }}
          >
            {sending ? 'Sending...' : 'Send by WhatsApp'}
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
}
