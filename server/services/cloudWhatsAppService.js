const baileys = require('@whiskeysockets/baileys');
const makeWASocket = baileys.default || baileys.makeWASocket || baileys;
const { DisconnectReason, fetchLatestBaileysVersion } = baileys;
const qrcode = require('qrcode');
const useMongoAuthState = require('./mongoAuthState');
const { generateInvoicePdfBuffer } = require('./invoicePdfGenerator');

let sock = null;
let currentStatus = 'DISCONNECTED'; // 'DISCONNECTED' | 'CONNECTING' | 'QR_READY' | 'CONNECTED'
let currentQrCodeDataUrl = null;
let connectedPhone = null;
let connectedName = null;
let reconnectTimer = null;
let authClearer = null;

function normalizePhoneNumber(raw) {
  if (!raw) return '';
  let cleaned = String(raw).replace(/[^0-9]/g, '');
  if (cleaned.startsWith('00')) cleaned = cleaned.slice(2);
  if (cleaned.startsWith('0') && cleaned.length >= 9) {
    cleaned = '243' + cleaned.slice(1);
  }
  if (cleaned.length === 9) {
    cleaned = '243' + cleaned;
  }
  return cleaned;
}

/**
 * Initialize or reconnect Cloud WhatsApp Client on Railway
 */
async function initCloudWhatsApp() {
  if (reconnectTimer) {
    clearTimeout(reconnectTimer);
    reconnectTimer = null;
  }

  currentStatus = 'CONNECTING';
  console.log('⚡ [CloudWhatsApp] Initializing Cloud WhatsApp Multi-Device session on Railway...');

  try {
    const { state, saveCreds, clearSession } = await useMongoAuthState();
    authClearer = clearSession;

    const { version, isLatest } = await fetchLatestBaileysVersion().catch(() => ({ version: [2, 3000, 1017531287], isLatest: true }));
    console.log(`[CloudWhatsApp] Using Baileys version ${version.join('.')} (isLatest: ${isLatest})`);

    sock = makeWASocket({
      version,
      auth: state,
      printQRInTerminal: false,
      browser: ['Global Gate Enterprise', 'Cloud Service', '3.6.49'],
      syncFullHistory: false,
      markOnlineOnConnect: true,
      defaultQueryTimeoutMs: 60000,
      generateHighQualityLinkPreview: false
    });

    sock.ev.on('creds.update', saveCreds);

    sock.ev.on('connection.update', async (update) => {
      const { connection, lastDisconnect, qr } = update;

      if (qr) {
        currentStatus = 'QR_READY';
        try {
          currentQrCodeDataUrl = await qrcode.toDataURL(qr, { margin: 2, scale: 6 });
          console.log('📲 [CloudWhatsApp] New QR code generated. Awaiting admin scan from phone...');
        } catch (qrErr) {
          console.warn('[CloudWhatsApp] Error generating QR data URL:', qrErr.message);
        }
      }

      if (connection === 'close') {
        const statusCode = lastDisconnect?.error?.output?.statusCode;
        const shouldReconnect = statusCode !== DisconnectReason.loggedOut;
        console.warn(`⚠️ [CloudWhatsApp] Connection closed (code: ${statusCode}, reconnecting: ${shouldReconnect})`);

        currentStatus = 'DISCONNECTED';
        currentQrCodeDataUrl = null;
        connectedPhone = null;
        connectedName = null;

        if (statusCode === DisconnectReason.loggedOut) {
          console.warn('❌ [CloudWhatsApp] Device was logged out. Clearing MongoDB session...');
          if (authClearer) await authClearer();
          reconnectTimer = setTimeout(initCloudWhatsApp, 5000);
        } else if (shouldReconnect) {
          reconnectTimer = setTimeout(initCloudWhatsApp, 4000);
        }
      } else if (connection === 'open') {
        currentStatus = 'CONNECTED';
        currentQrCodeDataUrl = null;
        const jid = sock?.user?.id || '';
        connectedPhone = '+' + jid.split(':')[0].split('@')[0];
        connectedName = sock?.user?.name || 'Global Gate S.A.R.L';
        console.log(`✅ [CloudWhatsApp] Successfully CONNECTED to WhatsApp Web! Linked Phone: ${connectedPhone} (${connectedName})`);
      }
    });

    return sock;
  } catch (err) {
    console.error('❌ [CloudWhatsApp] Initialization error:', err);
    currentStatus = 'DISCONNECTED';
    reconnectTimer = setTimeout(initCloudWhatsApp, 6000);
    return null;
  }
}

/**
 * Returns current status object for the frontend
 */
function getCloudWhatsAppStatus() {
  return {
    status: currentStatus,
    phone: connectedPhone || '+243 827 722 222',
    name: connectedName || 'Global Gate S.A.R.L',
    qrCode: currentQrCodeDataUrl,
    isReady: currentStatus === 'CONNECTED' && Boolean(sock)
  };
}

/**
 * Disconnect and clear session
 */
async function disconnectCloudWhatsApp() {
  currentStatus = 'DISCONNECTED';
  connectedPhone = null;
  connectedName = null;
  currentQrCodeDataUrl = null;
  try {
    if (sock) {
      await sock.logout();
    }
  } catch (_) {}
  if (authClearer) {
    await authClearer();
  }
  reconnectTimer = setTimeout(initCloudWhatsApp, 2000);
  return { success: true, message: 'Cloud WhatsApp session cleared and resetting.' };
}

/**
 * Dispatch batch invoices via Cloud WhatsApp
 */
async function dispatchInvoicesCloud({ invoices = [], templateMessage = '', phoneOverrides = {}, sentBy = 'GG' }) {
  if (currentStatus !== 'CONNECTED' || !sock) {
    throw new Error('Cloud WhatsApp engine is not connected. Please scan the QR code to link device.');
  }

  const validInvoices = (invoices || []).filter(inv => {
    const st = String(inv.status || '').toUpperCase().trim();
    return st === 'SENT' || st === 'PARTIALLY-PAID' || st === 'PARTIALLY PAID' || st === 'PARTIALLY_PAID' || st === 'FREE OF CHARGE' || st === 'FREE-OF-CHARGE';
  });

  if (validInvoices.length === 0) {
    return {
      success: false,
      total: 0,
      sent: 0,
      failed: 0,
      error: 'No valid invoices with status SENT, PARTIALLY-PAID, or FREE OF CHARGE.'
    };
  }

  const results = {
    success: true,
    total: validInvoices.length,
    sent: 0,
    failed: 0,
    details: []
  };

  // Group invoices by recipient (clean phone number) to ensure the Customizable Short Message
  // is attached ONCE to the client's first invoice, and subsequent invoices for that client
  // carry only the concise invoice details without repeating the full greeting text.
  const clientGroups = new Map();

  for (const inv of validInvoices) {
    const invId = inv._id || inv.id;
    const cust = inv.customerName || {};
    const clientName = typeof cust === 'string' ? cust : (cust.Customer || cust.customerName || cust.customerFullName || 'Valued Client');
    const rawPhone = phoneOverrides[invId] || (typeof cust === 'object' ? (cust.customerCompanyPhone || cust.customerPhone || cust.phone || cust.mobile) : '') || '';
    const cleanPhone = normalizePhoneNumber(rawPhone);
    const clientKey = cleanPhone ? cleanPhone : `missing_${invId}`;

    if (!clientGroups.has(clientKey)) {
      clientGroups.set(clientKey, {
        phone: cleanPhone,
        rawPhone,
        clientName,
        invoices: []
      });
    }
    clientGroups.get(clientKey).invoices.push(inv);
  }

  for (const [, group] of clientGroups.entries()) {
    const { phone: cleanPhone, rawPhone, clientName, invoices: groupInvoices } = group;

    if (!cleanPhone || cleanPhone.length < 9) {
      for (const inv of groupInvoices) {
        results.failed++;
        results.details.push({
          invoiceNumber: inv.invoiceNumber,
          invoiceId: inv._id || inv.id,
          clientName,
          phone: rawPhone,
          status: 'failed',
          error: 'Invalid or missing phone number'
        });
      }
      continue;
    }

    // 1. Verify WhatsApp registration for this recipient
    const jid = `${cleanPhone}@s.whatsapp.net`;
    try {
      const [waCheck] = await sock.onWhatsApp(cleanPhone).catch(() => [{ exists: true }]);
      if (waCheck && !waCheck.exists) {
        for (const inv of groupInvoices) {
          results.failed++;
          results.details.push({
            invoiceNumber: inv.invoiceNumber,
            invoiceId: inv._id || inv.id,
            clientName,
            phone: cleanPhone,
            status: 'failed',
            error: `Phone +${cleanPhone} is not registered on WhatsApp`
          });
        }
        continue;
      }
    } catch (_) {}

    // 2. Dispatch each invoice for this client
    for (let idx = 0; idx < groupInvoices.length; idx++) {
      const inv = groupInvoices[idx];
      const invId = inv._id || inv.id;
      const invNum = typeof inv.invoiceNumber === 'number'
        ? `INV-${String(inv.invoiceNumber).padStart(6, '0')}`
        : String(inv.invoiceNumber || 'INV-000000');

      try {
        const pdfBuffer = await generateInvoicePdfBuffer(inv);
        const balanceText = inv.balanceDue !== undefined
          ? `$${Number(inv.balanceDue).toFixed(2)}`
          : `$${Number(inv.totalInvoice || inv.total || 0).toFixed(2)}`;

        // When a client has multiple invoices, the customizable short message is attached
        // to the first invoice PDF, followed sequentially by subsequent invoices without duplicate greetings.
        let caption = '';
        if (idx === 0 && templateMessage && templateMessage.trim()) {
          caption = `${templateMessage.trim()}\n\n📄 *Invoice:* ${invNum}\n💰 *Balance Due:* ${balanceText}\n🏛️ *Global Gate S.A.R.L*`;
        } else {
          caption = `📄 *Invoice:* ${invNum}\n💰 *Balance Due:* ${balanceText}\n🏛️ *Global Gate S.A.R.L*`;
        }

        // 3. Send Document via Baileys WebSocket
        await sock.sendMessage(jid, {
          document: pdfBuffer,
          mimetype: 'application/pdf',
          fileName: `${invNum}.pdf`,
          caption
        });

        results.sent++;
        results.details.push({
          invoiceNumber: inv.invoiceNumber,
          invoiceId: invId,
          clientName,
          phone: cleanPhone,
          amount: Number(inv.balanceDue ?? inv.totalInvoice ?? 0),
          status: 'sent'
        });

        console.log(`✅ [CloudWhatsApp] Delivered ${invNum} (${idx + 1}/${groupInvoices.length}) to +${cleanPhone} (${clientName})`);

        // Gentle pause between dispatches to respect rate limits
        await new Promise(r => setTimeout(r, 1200));
      } catch (err) {
        console.error(`❌ [CloudWhatsApp] Failed to deliver ${invNum} to ${cleanPhone}:`, err.message);
        results.failed++;
        results.details.push({
          invoiceNumber: inv.invoiceNumber,
          invoiceId: invId,
          clientName,
          phone: cleanPhone,
          status: 'failed',
          error: err.message
        });
      }
    }
  }

  results.success = results.sent > 0 || (results.failed === 0 && results.total === 0);
  return results;
}

module.exports = {
  initCloudWhatsApp,
  getCloudWhatsAppStatus,
  disconnectCloudWhatsApp,
  dispatchInvoicesCloud
};
