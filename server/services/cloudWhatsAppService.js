const baileys = require('@whiskeysockets/baileys');
const makeWASocket = baileys.default || baileys.makeWASocket || baileys;
const { DisconnectReason, fetchLatestBaileysVersion, downloadMediaMessage } = baileys;
const axios = require('axios');
const qrcode = require('qrcode');
const useMongoAuthState = require('./mongoAuthState');
const { generateInvoicePdfBuffer, generatePaymentPdfBuffer, generateQuotationPdfBuffer } = require('./invoicePdfGenerator');

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

    sock.ev.on('messages.upsert', async ({ messages, type }) => {
      if (type !== 'notify' || !Array.isArray(messages)) return;
      const zaynBaseUrl = String(process.env.ZAYN_AGENT_URL || '').trim().replace(/\/+$/, '');
      if (!zaynBaseUrl) return;

      for (const msg of messages) {
        try {
          if (!msg || !msg.key || msg.key.fromMe) continue;
          const remoteJid = String(msg.key.remoteJid || '');
          if (!remoteJid || remoteJid === 'status@broadcast') continue;
          if (!msg.message) continue;

          const payload = await buildZaynInboundPayload(msg, sock);
          if (!payload || !payload.senderPhone) continue;

          await axios.post(`${zaynBaseUrl}/api/company-whatsapp/inbound`, payload, {
            headers: {
              'Content-Type': 'application/json',
              'X-GG-Webhook-Secret': String(process.env.ZAYN_WEBHOOK_SECRET || '')
            },
            timeout: 10000
          });
        } catch (fwdErr) {
          console.warn('[CloudWhatsApp -> Zayn] Inbound forward warning:', fwdErr?.message || fwdErr);
        }
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

/**
 * Shared Cloud WhatsApp document dispatcher for Payment Receipts and Quotations.
 */
async function dispatchDocumentsCloud({ docType, items = [], templateMessage = '', phoneOverrides = {} }) {
  if (currentStatus !== 'CONNECTED' || !sock) {
    throw new Error('Cloud WhatsApp engine is not connected. Please scan the QR code to link device.');
  }
  const list = Array.isArray(items) ? items : [];
  if (list.length === 0) {
    return { success: false, total: 0, sent: 0, failed: 0, error: `No ${docType} records selected.` };
  }

  const results = { success: true, total: list.length, sent: 0, failed: 0, details: [] };
  const isPayment = docType === 'payment';

  for (let idx = 0; idx < list.length; idx++) {
    const docItem = list[idx];
    const docId = docItem._id || docItem.id;
    const cust = docItem.customerName || {};
    const clientName = typeof cust === 'string' ? cust : (cust.Customer || cust.customerName || cust.customerFullName || 'Valued Client');
    const rawPhone = phoneOverrides[docId] || (typeof cust === 'object' ? (cust.customerCompanyPhone || cust.customerPhone || cust.phone || cust.mobile || cust.phone1 || cust.phone2) : '') || '';
    const cleanPhone = normalizePhoneNumber(rawPhone);

    const docNum = isPayment
      ? (typeof docItem.paymentNumber === 'number' ? `PAY-${String(docItem.paymentNumber).padStart(6, '0')}` : String(docItem.paymentNumber || 'PAY-000000'))
      : (typeof docItem.estimateNumber === 'number' ? `Q-${String(docItem.estimateNumber).padStart(6, '0')}` : String(docItem.estimateNumber || 'Q-000000'));

    if (!cleanPhone || cleanPhone.length < 9) {
      results.failed++;
      results.details.push({ documentNumber: docNum, documentId: docId, clientName, phone: rawPhone, status: 'failed', error: 'Invalid or missing phone number' });
      continue;
    }

    const jid = `${cleanPhone}@s.whatsapp.net`;
    try {
      const [waCheck] = await sock.onWhatsApp(cleanPhone).catch(() => [{ exists: true }]);
      if (waCheck && !waCheck.exists) {
        results.failed++;
        results.details.push({ documentNumber: docNum, documentId: docId, clientName, phone: cleanPhone, status: 'failed', error: `Phone +${cleanPhone} is not registered on WhatsApp` });
        continue;
      }

      const pdfBuffer = isPayment
        ? await generatePaymentPdfBuffer(docItem)
        : await generateQuotationPdfBuffer(docItem);

      const amountVal = isPayment
        ? Number(docItem.amount || docItem.PaymentReceived || docItem.AmountPaidDollar || 0)
        : Number(docItem.totalInvoice ?? docItem.total ?? 0);
      const amountText = `$${amountVal.toFixed(2)}`;
      const labelTitle = isPayment ? 'Payment Receipt' : 'Quotation';
      const amountLabel = isPayment ? 'Amount Received' : 'Total Quotation';

      const msgBody = templateMessage && templateMessage.trim() ? `${templateMessage.trim()}\n\n` : '';
      const caption = `${msgBody}📄 *${labelTitle}:* ${docNum}\n💰 *${amountLabel}:* ${amountText}\n🏛️ *Global Gate S.A.R.L*`;

      await sock.sendMessage(jid, {
        document: pdfBuffer,
        mimetype: 'application/pdf',
        fileName: `${docNum}.pdf`,
        caption
      });

      results.sent++;
      results.details.push({ documentNumber: docNum, documentId: docId, clientName, phone: cleanPhone, amount: amountVal, status: 'sent' });
      console.log(`✅ [CloudWhatsApp] Delivered ${docNum} to +${cleanPhone} (${clientName})`);
      if (idx < list.length - 1) await new Promise(r => setTimeout(r, 1200));
    } catch (err) {
      console.error(`❌ [CloudWhatsApp] Failed to deliver ${docNum} to ${cleanPhone}:`, err.message);
      results.failed++;
      results.details.push({ documentNumber: docNum, documentId: docId, clientName, phone: cleanPhone, status: 'failed', error: err.message });
    }
  }

  results.success = results.sent > 0;
  return results;
}

/**
 * Dispatch marketing flyer image and caption via 24/7 Cloud WhatsApp (Baileys singleton)
 */
async function dispatchMarketingFlyerCloud({ imageBuffer, caption, recipients = [], postToStatus = false }) {
  if (currentStatus !== 'CONNECTED' || !sock) {
    throw new Error('Cloud WhatsApp Master is not connected. Please ensure session is linked in Invoice > Send Invoices via WhatsApp (+243 827 722 222).');
  }

  const rawList = Array.isArray(recipients)
    ? recipients
    : String(recipients || '').split(/[,;]+/).map(s => s.trim()).filter(Boolean);
  const cleanList = [...new Set(rawList.map(normalizePhoneNumber).filter(p => p && p.length >= 9))];

  const results = {
    success: false,
    total: cleanList.length,
    sent: 0,
    failed: 0,
    details: []
  };

  const selfPhone = connectedPhone ? normalizePhoneNumber(connectedPhone) : '243827722222';
  const selfJid = sock.user?.id
    ? (baileys.jidNormalizedUser ? baileys.jidNormalizedUser(sock.user.id) : sock.user.id.replace(/:.*@/, '@'))
    : `${selfPhone}@s.whatsapp.net`;

  const hasValidRasterImage = imageBuffer && Buffer.isBuffer(imageBuffer) && imageBuffer.length > 50;

  for (let idx = 0; idx < cleanList.length; idx++) {
    const phone = cleanList[idx];
    const isSelf = phone === selfPhone || phone.endsWith(selfPhone) || selfPhone.endsWith(phone);
    let jid = isSelf ? selfJid : `${phone}@s.whatsapp.net`;

    if (!isSelf) {
      try {
        const [onWa] = await sock.onWhatsApp(phone);
        if (onWa && onWa.exists && onWa.jid) {
          jid = onWa.jid;
        }
      } catch (_) {}
    }

    if (idx > 0) {
      // Gentle pause between recipients to respect rate limits
      await new Promise(r => setTimeout(r, 2000));
    }

    try {
      if (hasValidRasterImage) {
        await sock.sendMessage(jid, {
          image: imageBuffer,
          caption: caption
        });
      } else {
        // High-impact formatted text message if no raster image buffer was attached
        await sock.sendMessage(jid, {
          text: caption
        });
      }

      results.sent++;
      results.details.push({
        number: phone,
        status: 'sent',
        self: isSelf
      });
      console.log(`✅ [CloudWhatsApp] Marketing flyer delivered to +${phone} (jid: ${jid}, isSelf: ${isSelf})`);
    } catch (err) {
      console.error(`❌ [CloudWhatsApp] Failed to send flyer to +${phone}:`, err.message);
      results.failed++;
      results.details.push({
        number: phone,
        status: 'failed',
        self: isSelf,
        error: err.message
      });
    }
  }

  // Optional: Post to Status Story if requested
  let statusSent = false;
  if (postToStatus) {
    try {
      if (hasValidRasterImage) {
        await sock.sendMessage('status@broadcast', {
          image: imageBuffer,
          caption: caption
        });
      } else {
        await sock.sendMessage('status@broadcast', {
          text: caption
        });
      }
      statusSent = true;
      console.log('✅ [CloudWhatsApp] Marketing flyer posted to WhatsApp Status Story');
    } catch (stErr) {
      console.warn('[CloudWhatsApp] Status story dispatch warning:', stErr.message);
    }
  }

  const sentCount = results.details.filter(d => d.status === 'sent').length;
  const failedCount = results.details.filter(d => d.status === 'failed').length;
  const isSelf = results.details.length === 1 && results.details[0].self;

  let dmMessage = null;
  if (results.sent > 0) {
    if (isSelf && failedCount === 0) {
      dmMessage = 'Delivered to "Message yourself" (Official WhatsApp Line +243 827 722 222)';
    } else {
      dmMessage = `WhatsApp: ${sentCount} sent` + (failedCount ? `, ${failedCount} failed` : '');
    }
  }

  results.success = results.sent > 0 || statusSent;
  results.statusStory = statusSent;
  results.message = results.sent > 0 && statusSent
    ? 'WhatsApp Delivered to Contact & Status Story'
    : (statusSent ? 'WhatsApp Published to Status Story' : dmMessage);
  results.report = {
    total: cleanList.length,
    sent: sentCount,
    failed: failedCount,
    details: results.details
  };

  return results;
}

async function buildZaynInboundPayload(msg, sockInstance) {
  const remoteJid = String(msg.key.remoteJid || '');
  const isGroup = remoteJid.endsWith('@g.us');

  // Extract sender JID strictly from WhatsApp protocol metadata (never message body)
  const rawSenderJid = isGroup
    ? String(msg.key.participantPn || msg.key.participant || msg.participant || '')
    : String(msg.key.senderPn || remoteJid);

  const senderDigits = normalizePhoneNumber(rawSenderJid.split(':')[0].split('@')[0]);
  if (!senderDigits) return null;

  const unwrapped = msg.message?.ephemeralMessage?.message
    || msg.message?.viewOnceMessage?.message
    || msg.message?.viewOnceMessageV2?.message
    || msg.message?.documentWithCaptionMessage?.message
    || msg.message
    || {};

  const text = unwrapped.conversation
    || unwrapped.extendedTextMessage?.text
    || unwrapped.imageMessage?.caption
    || unwrapped.videoMessage?.caption
    || unwrapped.documentMessage?.caption
    || '';

  let mediaType = null;
  if (unwrapped.imageMessage) mediaType = 'image';
  else if (unwrapped.audioMessage) mediaType = 'audio';
  else if (unwrapped.videoMessage) mediaType = 'video';
  else if (unwrapped.documentMessage) mediaType = 'document';

  let mediaBase64 = null;
  if (mediaType && typeof downloadMediaMessage === 'function') {
    try {
      const buf = await downloadMediaMessage(
        msg,
        'buffer',
        {},
        { reuploadRequest: sockInstance.updateMediaMessage }
      );
      if (Buffer.isBuffer(buf) && buf.length > 0 && buf.length <= 15 * 1024 * 1024) {
        mediaBase64 = buf.toString('base64');
      }
    } catch (dlErr) {
      console.warn('[CloudWhatsApp -> Zayn] Media download skipped:', dlErr?.message || dlErr);
    }
  }

  let groupName = null;
  if (isGroup) {
    try {
      const meta = await sockInstance.groupMetadata(remoteJid);
      groupName = meta?.subject || null;
    } catch (_) {
      groupName = null;
    }
  }

  return {
    companyLine: '+243827722222',
    senderPhone: senderDigits,
    messageId: msg.key.id || '',
    timestamp: msg.messageTimestamp ? Number(msg.messageTimestamp) : Math.floor(Date.now() / 1000),
    text,
    mediaType,
    mediaBase64,
    isGroup,
    groupId: isGroup ? remoteJid : null,
    groupName
  };
}

/**
 * Send an approved reply or official PDF/media out via the linked company WhatsApp (+243 827 722 222)
 */
async function sendZaynMessage({ toPhone, text = '', pdfBase64 = null, fileName = 'document.pdf', mediaBase64 = null, mimeType = null, caption = '' }) {
  if (currentStatus !== 'CONNECTED' || !sock) {
    throw new Error('Cloud WhatsApp engine is not connected (+243 827 722 222).');
  }

  const rawTarget = String(toPhone || '').trim();
  const isGroupTarget = rawTarget.endsWith('@g.us');
  const cleanPhone = isGroupTarget ? '' : normalizePhoneNumber(rawTarget);
  if (!isGroupTarget && (!cleanPhone || cleanPhone.length < 9)) {
    throw new Error('Invalid recipient phone number.');
  }

  let jid = isGroupTarget ? rawTarget : `${cleanPhone}@s.whatsapp.net`;
  if (!isGroupTarget) {
    const [waCheck] = await sock.onWhatsApp(cleanPhone).catch(() => [{ exists: true }]);
    if (waCheck && !waCheck.exists) {
      throw new Error(`Phone +${cleanPhone} is not registered on WhatsApp`);
    }
    if (waCheck && waCheck.jid) {
      jid = waCheck.jid;
    }
  }

  if (pdfBase64) {
    const pdfBuffer = Buffer.from(String(pdfBase64).replace(/^data:application\/pdf;base64,/i, ''), 'base64');
    await sock.sendMessage(jid, {
      document: pdfBuffer,
      mimetype: 'application/pdf',
      fileName: fileName || 'document.pdf',
      caption: caption || text || ''
    });
    return { success: true, to: isGroupTarget ? jid : cleanPhone, type: 'pdf' };
  }

  if (mediaBase64 && mimeType) {
    const cleanB64 = String(mediaBase64).replace(/^data:[^;]+;base64,/i, '');
    const buf = Buffer.from(cleanB64, 'base64');
    if (mimeType.startsWith('image/')) {
      await sock.sendMessage(jid, { image: buf, caption: caption || text || '' });
    } else if (mimeType.startsWith('audio/')) {
      await sock.sendMessage(jid, { audio: buf, mimetype: mimeType });
    } else if (mimeType.startsWith('video/')) {
      await sock.sendMessage(jid, { video: buf, caption: caption || text || '' });
    } else {
      await sock.sendMessage(jid, { document: buf, mimetype: mimeType, fileName: fileName || 'attachment', caption: caption || text || '' });
    }
    return { success: true, to: isGroupTarget ? jid : cleanPhone, type: 'media' };
  }

  if (!text || !String(text).trim()) {
    throw new Error('Message text or attachment is required.');
  }

  await sock.sendMessage(jid, { text: String(text) });
  return { success: true, to: isGroupTarget ? jid : cleanPhone, type: 'text' };
}

module.exports = {
  initCloudWhatsApp,
  getCloudWhatsAppStatus,
  disconnectCloudWhatsApp,
  dispatchInvoicesCloud,
  dispatchDocumentsCloud,
  dispatchMarketingFlyerCloud,
  sendZaynMessage,
  normalizePhoneNumber
};
