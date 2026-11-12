import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import {
  Box,
  Container,
  Typography,
  Button,
  IconButton,
  CircularProgress,
  Paper,
  Chip
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PrintIcon from '@mui/icons-material/Print';
import EditIcon from '@mui/icons-material/Edit';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import dayjs from 'dayjs';
import { ENDPOINT_URL } from '../../../apiConfig';
import defaultLogo from '../../../img/images.png';

function InspectionReportPrintView() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const res = await axios.get(`${ENDPOINT_URL}/inspection-reports/${id}`);
        if (res.data && res.data.success) {
          setReport(res.data.data);
        }
      } catch (err) {
        console.error('Error fetching inspection report for print:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchReport();
  }, [id]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
        <CircularProgress size={40} sx={{ color: '#30368a' }} />
      </Box>
    );
  }

  if (!report) {
    return (
      <Box sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="h6" color="error">Inspection Report not found.</Typography>
        <Button onClick={() => navigate('/InspectionReportView')} sx={{ mt: 2 }}>Back to Reports</Button>
      </Box>
    );
  }

  const handlePrint = () => {
    window.print();
  };

  const handleMarkCompleted = async () => {
    try {
      const res = await axios.patch(`${ENDPOINT_URL}/inspection-reports/${report._id}/status`, { status: 'COMPLETED' });
      if (res.data && res.data.success) {
        setReport((prev) => ({ ...prev, status: 'COMPLETED' }));
      }
    } catch (err) {
      console.error('Error marking report completed:', err);
    }
  };

  const handleSendToClient = async () => {
    try {
      const res = await axios.patch(`${ENDPOINT_URL}/inspection-reports/${report._id}/status`, { status: 'SENT TO CLIENT' });
      if (res.data && res.data.success) {
        setReport((prev) => ({ ...prev, status: 'SENT TO CLIENT' }));
      }
    } catch (err) {
      console.error('Error marking report sent:', err);
    }

    if (report.customerPhone) {
      const cleanPhone = String(report.customerPhone).replace(/[^0-9]/g, '');
      const clientName = report.customerName || 'Valued Client';
      const msg = `Dear ${clientName},\n\nPlease find our Technical Inspection & Corrective Action Report (${report.reportCode || ''}) regarding "${report.subject || 'Technical Inspection'}".\n\nGlobal Gate SARL - General Services & Technical Division.`;
      const url = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(msg)}`;
      window.open(url, '_blank');
    }
  };

  const handleConvertToQuote = async () => {
    try {
      await axios.post(`${ENDPOINT_URL}/inspection-reports/${report._id}/convert-quote`);
    } catch (_) {}
    navigate('/EstimateInvoiceForm', {
      state: {
        fromInspectionReport: true,
        reportCode: report.reportCode,
        customerId: report.customerId,
        customerName: report.customerName,
        estimateSubject: report.subject || `Technical Remediation - ${report.reportCode || ''}`
      }
    });
  };

  return (
    <Box sx={{ backgroundColor: '#f1f5f9', minHeight: '100vh', py: { xs: 1, md: 3 } }}>
      {/* ── SCREEN ONLY ACTION BAR (Hidden in Print) ── */}
      <Box
        className="no-print"
        sx={{
          maxWidth: '850px',
          margin: '0 auto 16px auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: 2
        }}
      >
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/InspectionReportView')}
          sx={{ textTransform: 'none', color: '#475569' }}
        >
          Back to Reports
        </Button>
        <Box sx={{ display: 'flex', gap: 1.5 }}>
          <Button
            variant="outlined"
            startIcon={<EditIcon />}
            onClick={() => navigate(`/InspectionReportForm/${report._id}`)}
            sx={{ textTransform: 'none', color: '#30368a', borderColor: '#30368a' }}
          >
            Edit Report
          </Button>
          {report.status !== 'COMPLETED' && report.status !== 'SENT TO CLIENT' && report.status !== 'CONVERTED TO QUOTE' && (
            <Button
              variant="outlined"
              startIcon={<CheckCircleOutlineIcon />}
              onClick={handleMarkCompleted}
              sx={{ textTransform: 'none', color: '#0369a1', borderColor: '#0369a1' }}
            >
              Mark Completed
            </Button>
          )}
          <Button
            variant="outlined"
            startIcon={<WhatsAppIcon />}
            onClick={handleSendToClient}
            sx={{ textTransform: 'none', color: '#15803d', borderColor: '#15803d' }}
          >
            Send to Client (WhatsApp)
          </Button>
          <Button
            variant="outlined"
            startIcon={<RequestQuoteIcon />}
            onClick={handleConvertToQuote}
            sx={{ textTransform: 'none', color: '#b45309', borderColor: '#b45309' }}
          >
            Convert to Quotation
          </Button>
          <Button
            variant="contained"
            startIcon={<PrintIcon />}
            onClick={handlePrint}
            sx={{ backgroundColor: '#30368a', '&:hover': { backgroundColor: '#1e2468' }, textTransform: 'none', px: 3 }}
          >
            Print / Save as PDF
          </Button>
        </Box>
      </Box>

      {/* ── PRINTABLE A4 DOCUMENT CONTAINER ── */}
      <Container
        id="inspection-report-document"
        sx={{
          width: '100%',
          maxWidth: '850px !important',
          backgroundColor: '#ffffff',
          color: '#0f172a',
          p: { xs: 3, md: 5 },
          boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
          borderRadius: 2,
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
        }}
      >
        {/* ── 1. CORPORATE HEADER ── */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={defaultLogo}
              alt="Global Gate Logo"
              style={{ maxHeight: '70px', maxWidth: '200px', objectFit: 'contain' }}
            />
          </Box>
          <Box sx={{ textAlign: 'right', fontSize: '9.5px', color: '#475569', lineHeight: 1.4 }}>
            <Typography sx={{ fontSize: '9.5px', color: '#475569' }}>Avenue Salongo, Q/Industriel, C/Manika, Kolwezi</Typography>
            <Typography sx={{ fontSize: '9.5px', color: '#475569' }}>Tel: +243 827 722 222 • contact@globalgate.sarl</Typography>
            <Typography sx={{ fontSize: '9.5px', fontWeight: 600, color: '#093170' }}>www.GlobalGate.sarl</Typography>
          </Box>
        </Box>

        {/* Corporate Divider Line */}
        <Box sx={{ width: '100%', height: '2px', backgroundColor: '#093170', mb: 2.5 }} />

        {/* ── 2. REPORT TITLE & METADATA ACCENT BOX ── */}
        <Box
          sx={{
            backgroundColor: '#f0f7ff',
            borderLeft: '4px solid #0284c7',
            p: 2,
            mb: 3,
            borderRadius: '0 4px 4px 0'
          }}
        >
          <Typography sx={{ fontWeight: 800, fontSize: '15px', color: '#093170', mb: 1.5, letterSpacing: '0.2px' }}>
            {report.reportTitle || 'Technical Inspection & Corrective Action Report'}
          </Typography>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, rowGap: 0.8, columnGap: 3, fontSize: '11px' }}>
            <Box sx={{ display: 'flex' }}>
              <Typography sx={{ fontWeight: 700, width: '90px', fontSize: '11px', color: '#093170' }}>Subject:</Typography>
              <Typography sx={{ fontSize: '11px', color: '#1e293b' }}>{report.subject}</Typography>
            </Box>
            <Box sx={{ display: 'flex' }}>
              <Typography sx={{ fontWeight: 700, width: '90px', fontSize: '11px', color: '#093170' }}>Date:</Typography>
              <Typography sx={{ fontSize: '11px', color: '#1e293b' }}>{dayjs(report.date).format('MMMM D, YYYY')}</Typography>
            </Box>
            <Box sx={{ display: 'flex' }}>
              <Typography sx={{ fontWeight: 700, width: '90px', fontSize: '11px', color: '#093170' }}>Location:</Typography>
              <Typography sx={{ fontSize: '11px', color: '#1e293b' }}>{report.location}</Typography>
            </Box>
            <Box sx={{ display: 'flex' }}>
              <Typography sx={{ fontWeight: 700, width: '90px', fontSize: '11px', color: '#093170' }}>Prepared By:</Typography>
              <Typography sx={{ fontSize: '11px', color: '#1e293b' }}>{report.preparedBy}</Typography>
            </Box>
            {report.customerName && (
              <Box sx={{ display: 'flex' }}>
                <Typography sx={{ fontWeight: 700, width: '90px', fontSize: '11px', color: '#093170' }}>Client:</Typography>
                <Typography sx={{ fontSize: '11px', color: '#1e293b', fontWeight: 600 }}>{report.customerName}</Typography>
              </Box>
            )}
            <Box sx={{ display: 'flex' }}>
              <Typography sx={{ fontWeight: 700, width: '90px', fontSize: '11px', color: '#093170' }}>Report #:</Typography>
              <Typography sx={{ fontSize: '11px', color: '#1e293b', fontWeight: 700 }}>{report.reportCode}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 0.3 }}>
              <Typography sx={{ fontWeight: 700, width: '90px', fontSize: '11px', color: '#093170' }}>Status:</Typography>
              <Chip
                size="small"
                label={report.status || 'DRAFT'}
                sx={{
                  height: '18px',
                  fontSize: '9.5px',
                  fontWeight: 700,
                  backgroundColor:
                    report.status === 'COMPLETED' ? '#e0f2fe' :
                    report.status === 'SENT TO CLIENT' ? '#dcfce7' :
                    report.status === 'CONVERTED TO QUOTE' ? '#fef3c7' : '#f1f5f9',
                  color:
                    report.status === 'COMPLETED' ? '#0369a1' :
                    report.status === 'SENT TO CLIENT' ? '#15803d' :
                    report.status === 'CONVERTED TO QUOTE' ? '#b45309' : '#64748b'
                }}
              />
            </Box>
          </Box>
        </Box>

        {/* ── 3. SECTION 1: CURRENT SITUATION & ROOT CAUSE FINDINGS ── */}
        <Box sx={{ mb: 3 }}>
          <Typography sx={{ fontWeight: 800, fontSize: '13px', color: '#093170', textTransform: 'uppercase', letterSpacing: '0.5px', mb: 0.8 }}>
            1. Current Situation & Root Cause Findings
          </Typography>
          <Box sx={{ width: '100%', height: '1px', backgroundColor: '#cbd5e1', mb: 1.5 }} />

          {report.findingsIntro && (
            <Typography sx={{ fontSize: '11.5px', lineHeight: 1.6, color: '#334155', mb: 1.5 }}>
              {report.findingsIntro}
            </Typography>
          )}

          {/* Bullet Points */}
          <Box component="ul" sx={{ m: 0, pl: 2.5, mb: 2 }}>
            {Array.isArray(report.findings) &&
              report.findings.map((f, idx) => (
                <Box component="li" key={idx} sx={{ fontSize: '11.5px', lineHeight: 1.6, color: '#334155', mb: 1 }}>
                  <span style={{ fontWeight: 700, color: '#0f172a' }}>{f.title}: </span>
                  {f.description}
                </Box>
              ))}
          </Box>

          {/* Section 1 Photo Gallery */}
          {Array.isArray(report.photosSection1) && report.photosSection1.length > 0 && (
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: report.photosSection1.length > 1 ? '1fr 1fr' : '1fr' }, gap: 2, mt: 2, mb: 1 }}>
              {report.photosSection1.map((photo, idx) => (
                <Box key={idx} sx={{ border: '1px solid #e2e8f0', borderRadius: '4px', overflow: 'hidden', backgroundColor: '#f8fafc' }}>
                  <Box sx={{ height: 210, overflow: 'hidden', backgroundColor: '#0f172a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img
                      src={photo.url}
                      alt={photo.caption || `Figure ${idx + 1}`}
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                  </Box>
                  <Box sx={{ p: 1.2, backgroundColor: '#ffffff', borderTop: '1px solid #e2e8f0', minHeight: '44px' }}>
                    <Typography sx={{ fontSize: '10px', color: '#475569', lineHeight: 1.4 }}>
                      <span style={{ fontWeight: 700, color: '#093170' }}>{photo.figure || `Figure ${idx + 1}`}: </span>
                      {photo.caption}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          )}
        </Box>

        {/* ── 4. SECTION 2: RECOMMENDED CORRECTIVE SOLUTION ── */}
        <Box sx={{ mb: 3 }}>
          <Typography sx={{ fontWeight: 800, fontSize: '13px', color: '#093170', textTransform: 'uppercase', letterSpacing: '0.5px', mb: 0.8 }}>
            2. Recommended Corrective Solution
          </Typography>
          <Box sx={{ width: '100%', height: '1px', backgroundColor: '#cbd5e1', mb: 1.5 }} />

          {report.solutionIntro && (
            <Typography sx={{ fontSize: '11.5px', lineHeight: 1.6, color: '#334155', mb: 2 }}>
              {report.solutionIntro}
            </Typography>
          )}

          {/* Action Plan Table */}
          {Array.isArray(report.actionItems) && report.actionItems.length > 0 && (
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '11px',
                marginBottom: '16px',
                border: '1px solid #cbd5e1'
              }}
            >
              <thead>
                <tr style={{ backgroundColor: '#093170', color: '#ffffff' }}>
                  <th style={{ padding: '8px 12px', textAlign: 'left', fontWeight: 700, width: '220px', borderRight: '1px solid #1e3a8a' }}>
                    Action Item
                  </th>
                  <th style={{ padding: '8px 12px', textAlign: 'left', fontWeight: 700 }}>
                    Technical Scope & Execution Details
                  </th>
                </tr>
              </thead>
              <tbody>
                {report.actionItems.map((item, idx) => {
                  const isEven = idx % 2 === 0;
                  return (
                    <tr key={idx} style={{ backgroundColor: isEven ? '#ffffff' : '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '10px 12px', fontWeight: 700, color: '#0f172a', verticalAlign: 'top', borderRight: '1px solid #e2e8f0' }}>
                        {item.actionItem}
                      </td>
                      <td style={{ padding: '10px 12px', color: '#334155', lineHeight: 1.5, verticalAlign: 'top' }}>
                        {item.scope}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}

          {/* Section 2 Photos */}
          {Array.isArray(report.photosSection2) && report.photosSection2.length > 0 && (
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: report.photosSection2.length > 1 ? '1fr 1fr' : '1fr' }, gap: 2, mt: 2, mb: 1 }}>
              {report.photosSection2.map((photo, idx) => (
                <Box key={idx} sx={{ border: '1px solid #e2e8f0', borderRadius: '4px', overflow: 'hidden', backgroundColor: '#f8fafc' }}>
                  <Box sx={{ height: 210, overflow: 'hidden', backgroundColor: '#0f172a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img
                      src={photo.url}
                      alt={photo.caption || `Figure ${idx + 3}`}
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                  </Box>
                  <Box sx={{ p: 1.2, backgroundColor: '#ffffff', borderTop: '1px solid #e2e8f0', minHeight: '44px' }}>
                    <Typography sx={{ fontSize: '10px', color: '#475569', lineHeight: 1.4 }}>
                      <span style={{ fontWeight: 700, color: '#093170' }}>{photo.figure || `Figure ${idx + 3}`}: </span>
                      {photo.caption}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          )}
        </Box>

        {/* ── 5. NEXT STEPS CALLOUT BOX ── */}
        {report.nextSteps && (
          <Box
            sx={{
              backgroundColor: '#f0f7ff',
              borderLeft: '4px solid #0284c7',
              p: 2,
              mb: 3.5,
              borderRadius: '0 4px 4px 0'
            }}
          >
            <Typography sx={{ fontSize: '11px', color: '#1e293b', lineHeight: 1.6 }}>
              <span style={{ fontWeight: 700, color: '#093170' }}>Next Steps: </span>
              {report.nextSteps}
            </Typography>
          </Box>
        )}

        {/* ── 6. DUAL SIGN-OFF & APPROVAL BLOCK ── */}
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4, pt: 2, mb: 4, pageBreakInside: 'avoid' }}>
          <Box sx={{ borderTop: '1px solid #94a3b8', pt: 1 }}>
            <Typography sx={{ fontSize: '10.5px', fontWeight: 700, color: '#0f172a' }}>
              Prepared By: <span style={{ fontWeight: 500 }}>Global Gate SARL — Technical Department</span>
            </Typography>
            <Typography sx={{ fontSize: '9px', color: '#64748b', mt: 0.5 }}>Engineering Specialist Signature & Date</Typography>
          </Box>
          <Box sx={{ borderTop: '1px solid #94a3b8', pt: 1 }}>
            <Typography sx={{ fontSize: '10.5px', fontWeight: 700, color: '#0f172a' }}>
              Client Acknowledgment / Approval: <span style={{ fontWeight: 500 }}>Name, Signature & Stamp</span>
            </Typography>
            <Typography sx={{ fontSize: '9px', color: '#64748b', mt: 0.5 }}>Authorized Client Representative</Typography>
          </Box>
        </Box>

        {/* ── 7. FOOTER ── */}
        <Box sx={{ borderTop: '1px solid #e2e8f0', pt: 1.5, display: 'flex', justifyContent: 'space-between', fontSize: '9px', color: '#94a3b8' }}>
          <Typography sx={{ fontSize: '9px', color: '#94a3b8' }}>
            Global Gate SARL — Technical Inspection Report ({report.subject})
          </Typography>
          <Typography sx={{ fontSize: '9px', color: '#94a3b8' }}>
            Official Engineering Document • {report.reportCode}
          </Typography>
        </Box>
      </Container>

      {/* ── CSS PRINT STYLES ── */}
      <style>{`
        @media print {
          body {
            background-color: #ffffff !important;
            color: #000000 !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          .no-print {
            display: none !important;
          }
          #inspection-report-document {
            box-shadow: none !important;
            border-radius: 0 !important;
            padding: 10mm 12mm !important;
            max-width: 100% !important;
            width: 100% !important;
          }
          @page {
            size: A4 portrait;
            margin: 8mm;
          }
        }
      `}</style>
    </Box>
  );
}

export default InspectionReportPrintView;
