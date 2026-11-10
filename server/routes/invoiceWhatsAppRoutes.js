const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const { execFile } = require('child_process');
const axios = require('axios');
const InvoiceWhatsAppTemplate = require('../model/invoiceWhatsAppTemplateSchema');
const InvoiceWhatsAppHistory = require('../model/invoiceWhatsAppHistorySchema');

const AGENT_DIR = 'C:\\Users\\GG\\fb-whatsapp-agent';
const AGENT_SCRIPT = path.join(AGENT_DIR, 'agent.js');
const AGENT_DAEMON_URL = 'http://127.0.0.1:5055';

// 1. Get WhatsApp Invoice Message Template
router.get('/template', async (req, res) => {
  try {
    let doc = await InvoiceWhatsAppTemplate.findOne({ key: 'invoice_whatsapp_message' }).lean();
    if (!doc) {
      doc = await InvoiceWhatsAppTemplate.create({
        key: 'invoice_whatsapp_message',
        templateMessage: InvoiceWhatsAppTemplate.DEFAULT_INVOICE_WHATSAPP_MESSAGE,
        updatedBy: 'System'
      });
    }
    return res.json({
      success: true,
      templateMessage: doc.templateMessage || InvoiceWhatsAppTemplate.DEFAULT_INVOICE_WHATSAPP_MESSAGE
    });
  } catch (err) {
    console.error('[InvoiceWhatsApp] Error getting template:', err);
    return res.status(500).json({
      success: false,
      error: err.message,
      templateMessage: InvoiceWhatsAppTemplate.DEFAULT_INVOICE_WHATSAPP_MESSAGE
    });
  }
});

// 2. Save / Update WhatsApp Invoice Message Template
router.post('/template', async (req, res) => {
  try {
    const { templateMessage, updatedBy } = req.body;
    if (!templateMessage || !templateMessage.trim()) {
      return res.status(400).json({ success: false, error: 'Template message cannot be empty' });
    }
    const doc = await InvoiceWhatsAppTemplate.findOneAndUpdate(
      { key: 'invoice_whatsapp_message' },
      {
        $set: {
          templateMessage: templateMessage.trim(),
          updatedBy: updatedBy || 'GG'
        }
      },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );
    return res.json({ success: true, message: 'Template saved successfully', data: doc });
  } catch (err) {
    console.error('[InvoiceWhatsApp] Error saving template:', err);
    return res.status(500).json({ success: false, error: err.message });
  }
});

// 2.5 Get Sent Invoices History (3-Month Rolling Retention via MongoDB TTL)
router.get('/history', async (req, res) => {
  try {
    const history = await InvoiceWhatsAppHistory.find().sort({ sentAt: -1 }).limit(500).lean();
    return res.json({ success: true, history: history || [] });
  } catch (err) {
    console.error('[InvoiceWhatsApp] Error fetching history:', err);
    return res.status(500).json({ success: false, error: err.message, history: [] });
  }
});

// 2.6 Record Sent Invoices History
router.post('/record-history', async (req, res) => {
  try {
    const { records = [], sentBy = 'GG' } = req.body;
    if (!Array.isArray(records) || records.length === 0) {
      return res.json({ success: true, count: 0 });
    }
    const docs = records.map(r => ({
      invoiceId: String(r.invoiceId || r._id || ''),
      invoiceNumber: Number(r.invoiceNumber || 0),
      customerName: String(r.customerName || ''),
      phone: String(r.phone || ''),
      amount: Number(r.amount || 0),
      caption: String(r.caption || ''),
      status: String(r.status || 'sent'),
      sentBy: String(sentBy || 'GG'),
      sentAt: new Date()
    }));
    await InvoiceWhatsAppHistory.insertMany(docs);
    return res.json({ success: true, count: docs.length });
  } catch (err) {
    console.error('[InvoiceWhatsApp] Error recording history:', err);
    return res.status(500).json({ success: false, error: err.message });
  }
});

// 3. Dispatch Selected SENT Invoices via WhatsApp
router.post('/send', async (req, res) => {
  try {
    const { invoices, templateMessage, phoneOverrides = {} } = req.body;
    if (!Array.isArray(invoices) || invoices.length === 0) {
      return res.status(400).json({ success: false, error: 'No invoices selected for dispatch' });
    }

    // Safety Filter: Strictly enforce that only invoices in SENT, PARTIALLY-PAID, or FREE OF CHARGE status can be dispatched
    const validInvoices = invoices.filter(inv => {
      const st = String(inv.status || '').toUpperCase().trim();
      return st === 'SENT' || st === 'PARTIALLY-PAID' || st === 'PARTIALLY PAID' || st === 'PARTIALLY_PAID' || st === 'FREE OF CHARGE' || st === 'FREE-OF-CHARGE';
    });

    if (validInvoices.length === 0) {
      return res.status(400).json({
        success: false,
        error: 'Only invoices with status SENT, PARTIALLY-PAID, or FREE OF CHARGE can be dispatched via WhatsApp.'
      });
    }

    const payload = {
      invoices: validInvoices,
      templateMessage: (templateMessage || InvoiceWhatsAppTemplate.DEFAULT_INVOICE_WHATSAPP_MESSAGE).trim(),
      phoneOverrides
    };

    // Strategy 1: Check if Agent HTTP Daemon is running
    try {
      const daemonCheck = await axios.get(`${AGENT_DAEMON_URL}/status`, { timeout: 1500 });
      if (daemonCheck.status === 200) {
        console.log('[InvoiceWhatsApp] Forwarding to active HTTP daemon at:', AGENT_DAEMON_URL);
        const daemonRes = await axios.post(`${AGENT_DAEMON_URL}/send-invoices`, payload, {
          timeout: 300000 // 5 minute timeout for batch dispatches
        });
        if (daemonRes.data && Array.isArray(daemonRes.data.details)) {
          const sentEntries = daemonRes.data.details
            .filter(d => d.status === 'sent')
            .map(d => ({
              invoiceId: String(d.invoiceId || ''),
              invoiceNumber: Number(d.invoiceNumber || 0),
              customerName: String(d.clientName || ''),
              phone: String(d.phone || ''),
              amount: Number(d.amount || 0),
              sentBy: String(req.body.sentBy || 'GG'),
              status: 'sent',
              sentAt: new Date()
            }));
          if (sentEntries.length > 0) {
            InvoiceWhatsAppHistory.insertMany(sentEntries).catch(err => {
              console.warn('[InvoiceWhatsApp] History logging warning:', err.message);
            });
          }
        }
        return res.json(daemonRes.data);
      }
    } catch (_) {
      // Daemon not active, proceed to child_process execution
    }

    // Strategy 2: Execute local agent.js script directly via Node
    if (fs.existsSync(AGENT_SCRIPT)) {
      const tempPayloadPath = path.join(AGENT_DIR, `invoice_batch_${Date.now()}.json`);
      fs.writeFileSync(tempPayloadPath, JSON.stringify(payload, null, 2), 'utf-8');

      const timeoutMs = 150000 + Math.max(0, validInvoices.length - 1) * 45000;
      execFile('node', [AGENT_SCRIPT, '--invoice-batch', `--payload=${tempPayloadPath}`], {
        cwd: AGENT_DIR,
        timeout: timeoutMs,
        maxBuffer: 20 * 1024 * 1024
      }, (error, stdout, stderr) => {
        try { fs.unlinkSync(tempPayloadPath); } catch (_) {}

        if (error) {
          console.error('[InvoiceWhatsApp] Agent execution error:', error, stderr);
        }

        let report = null;
        const reportMatch = (stdout || '').match(/INVOICE_REPORT_JSON:(\{.*\})/);
        if (reportMatch) {
          try { report = JSON.parse(reportMatch[1]); } catch (_) {}
        }

        // Fallback reconstruction if report wasn't emitted cleanly
        if (!report) {
          const progressLines = (stdout || '').match(/INVOICE_PROGRESS_JSON:(\{.*\})/g) || [];
          const details = [];
          progressLines.forEach(line => {
            try {
              const parsed = JSON.parse(line.replace('INVOICE_PROGRESS_JSON:', ''));
              details.push(parsed);
            } catch (_) {}
          });

          const successMatches = (stdout || '').match(/\[SUCCESS\] Invoice (INV-\d+) delivered to (\S+)/g) || [];
          const sentCount = details.filter(d => d.status === 'sent').length || successMatches.length;

          report = {
            total: validInvoices.length,
            sent: sentCount,
            failed: Math.max(0, validInvoices.length - sentCount),
            details: details.length > 0 ? details : successMatches.map(m => {
              const parts = m.match(/\[SUCCESS\] Invoice (INV-\d+) delivered to (\S+)/);
              return {
                invoiceNumber: parts ? parts[1].replace('INV-', '') : '',
                phone: parts ? parts[2] : '',
                status: 'sent'
              };
            }),
            stdout,
            stderr
          };
        }

        if (report && Array.isArray(report.details)) {
          const sentEntries = report.details
            .filter(d => d.status === 'sent')
            .map(d => ({
              invoiceId: String(d.invoiceId || ''),
              invoiceNumber: Number(d.invoiceNumber || 0),
              customerName: String(d.clientName || ''),
              phone: String(d.phone || ''),
              amount: Number(d.amount || 0),
              sentBy: String(req.body.sentBy || 'GG'),
              status: 'sent',
              sentAt: new Date()
            }));
          if (sentEntries.length > 0) {
            InvoiceWhatsAppHistory.insertMany(sentEntries).catch(err => {
              console.warn('[InvoiceWhatsApp] History logging warning:', err.message);
            });
          }
        }

        const sentCount = Number(report?.sent || 0);
        const failedCount = Number(report?.failed !== undefined ? report.failed : Math.max(0, validInvoices.length - sentCount));
        const hasSentAny = sentCount > 0;
        const isFullSuccess = !error && sentCount === validInvoices.length;

        return res.json({
          success: isFullSuccess || hasSentAny,
          partial: hasSentAny && failedCount > 0,
          error: error && !hasSentAny ? (error.message || stderr) : null,
          report: {
            ...report,
            total: validInvoices.length,
            sent: sentCount,
            failed: failedCount,
            details: Array.isArray(report?.details) ? report.details : []
          }
        });
      });
      return;
    }

    return res.status(503).json({
      success: false,
      error: 'WhatsApp local agent is not running or not installed on this workstation.'
    });

  } catch (err) {
    console.error('[InvoiceWhatsApp] Send error:', err);
    return res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
