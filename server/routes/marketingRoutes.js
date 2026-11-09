const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const { execFile } = require('child_process');
const axios = require('axios');
const FormData = require('form-data');
const GrantAccess = require('../model/grantAccessSchema');
const MarketingRecipient = require('../model/marketingRecipientSchema');

// Path to local fb-whatsapp-agent
const AGENT_DIR = 'C:\\Users\\GG\\fb-whatsapp-agent';
const AGENT_SCRIPT = path.join(AGENT_DIR, 'agent.js');
const AGENT_FLYER = path.join(AGENT_DIR, 'generated_flyer.png');

// In-memory cache for latest generated flyer
let latestFlyerBuffer = null;

// Fallback Facebook credentials if running on remote server
const FB_PAGE_ID = process.env.FB_PAGE_ID || '200999390054494';
const FB_PAGE_ACCESS_TOKEN = process.env.FB_PAGE_ACCESS_TOKEN || 'EAAQS2kcRZBkABS3b5Bms9NfCQU4uM3qkyCxn6RMZBZCOCIMqhFzo8HUagkrZAmlsyWDm28b7lYEZCHGXNhzCavZCXH0voFuwWnafqtlzed80lhZCNzu2qXtX5b1WIPw3FwDBEnIpI23DgIcmBjCPIj8NgYZB7WcPp021uIvR0H8VapmiSIdpTn1L9wsLtRsvbHpgbeMC';


/**
 * Strip meta-instructions, internal AI prompts, and conversational filler
 */
function sanitizeUserBrief(raw) {
  let s = String(raw || '').trim();
  s = s.replace(/make\s+(?:pro\s*fessional|professional|clean|nice|catchy)?\s*(?:flyer|banner|poster|ad|advertisement|design)?/gi, '');
  s = s.replace(/don'?t\s+use\s+(?:to|too)\s+much\s+text!?/gi, '');
  s = s.replace(/no\s+too\s+much\s+text!?/gi, '');
  s = s.replace(/urgent!?|fast\s+please!?|asap!?|please!?/gi, '');
  s = s.replace(/make\s+it\s+(?:pro|professional|good|clean|luxury)!?/gi, '');
  s = s.replace(/[\r\n]+/g, ' ');
  s = s.replace(/\s{2,}/g, ' ');
  return s.trim();
}

/**
 * Intelligent B2B & Retail Marketing Copy Engine
 */
function parseMarketingContent(rawBrief) {
  const clean = sanitizeUserBrief(rawBrief);
  const lower = clean.toLowerCase();

  const discountMatch = clean.match(/(\d+%\s*(?:off|discount|remise))/i);
  const priceMatch = clean.match(/(\$\s*\d+(?:\.\d+)?|\d+(?:\.\d+)?\s*(?:\$|usd|fc))/i);
  let badge = discountMatch ? discountMatch[1].toUpperCase() : (priceMatch ? 'BEST PRICE' : 'SPECIAL OFFER');

  let headline = '';
  let subtitle = '';
  let badges = [];

  if (lower.includes('concrete') || lower.includes('block') || lower.includes('brique') || lower.includes('ciment') || lower.includes('chantier')) {
    badge = 'PREMIUM QUALITY';
    headline = 'PREMIUM CONCRETE BLOCKS';
    if (lower.includes('all size') || lower.includes('sizes')) {
      headline = 'PREMIUM CONCRETE BLOCKS (ALL SIZES)';
    }
    subtitle = 'Strength, durability and precision for high-quality construction.';
    badges = [
      { icon: 'STRENGTH', title: 'High Strength', sub: 'Certified load-bearing' },
      { icon: 'DURABILITY', title: 'Long Durability', sub: 'Weather-resistant' },
      { icon: 'QUALITY', title: 'Consistent Quality', sub: 'Calibrated dimensions' },
      { icon: 'PROJECTS', title: 'Villas & Heavy Builds', sub: 'Ideal for premium sites' }
    ];
  } else if (lower.includes('solar') || lower.includes('inverter') || lower.includes('battery') || lower.includes('panneau')) {
    badge = 'CLEAN ENERGY';
    headline = 'SOLAR & POWER SOLUTIONS';
    subtitle = 'Reliable uninterrupted energy engineered for industrial & residential power.';
    badges = [
      { icon: 'POWER', title: 'High Efficiency', sub: 'Maximum output' },
      { icon: 'BATTERY', title: 'Deep Cycle Storage', sub: 'Long battery life' },
      { icon: 'CERTIFIED', title: 'Certified Safe', sub: 'Full warranty included' },
      { icon: 'SUPPORT', title: 'Pro Installation', sub: 'Local technical support' }
    ];
  } else if (lower.includes('mining') || lower.includes('heavy') || lower.includes('safety') || lower.includes('ppe')) {
    badge = 'CERTIFIED B2B';
    headline = 'MINING & INDUSTRIAL SUPPLIES';
    subtitle = 'Heavy-duty equipment and consumables built for harsh operating environments.';
    badges = [
      { icon: 'HEAVY', title: 'Industrial Grade', sub: 'Engineered for mine sites' },
      { icon: 'SAFETY', title: 'ISO Compliant', sub: 'Guaranteed protection' },
      { icon: 'STOCK', title: 'Immediate Stock', sub: 'Direct from Kolwezi' },
      { icon: 'DELIVERY', title: 'Site Delivery', sub: 'Fast logistics' }
    ];
  } else {
    headline = clean.split(/[.\n|;]/)[0] || 'OFFICIAL PROMOTION';
    if (headline.length > 40) headline = headline.substring(0, 38) + '...';
    headline = headline.toUpperCase();
    subtitle = 'Professional-grade quality and certified turnkey solutions available now.';
    badges = [
      { icon: 'QUALITY', title: 'Guaranteed Quality', sub: 'Certified standards' },
      { icon: 'SUPPORT', title: 'Full Technical Support', sub: 'Dedicated service' },
      { icon: 'VALUE', title: 'Competitive Pricing', sub: 'Best B2B terms' },
      { icon: 'LOCAL', title: 'Immediate Availability', sub: 'In stock in Kolwezi' }
    ];
  }

  const caption = '🔥 **GLOBAL GATE | EXCLUSIVE PROMOTION** 🔥\n\n' +
    '⭐ **' + headline + '** 🏷️ **' + badge + '**\n\n' +
    subtitle + '\n\n' +
    'Take advantage of our verified solutions for contractors, businesses, and homes across Kolwezi and Lualaba:\n\n' +
    badges.map(b => '🔹 **' + b.title + '**: ' + b.sub).join('\n') + '\n\n' +
    '📍 **Showroom:** Global Gate SARL, Kolwezi, Lualaba, DR Congo\n' +
    '📞 **Call / WhatsApp:** +243 827 722 222\n' +
    '💬 Contact our team today to place your order or request an official quote!\n\n' +
    '#GlobalGate #Kolwezi #Lualaba #DRC #QualityFirst #B2B #SpecialOffer';

  return {
    cleanBrief: clean,
    badge,
    headline,
    subtitle,
    badges,
    caption
  };
}

/**
 * Agency-Grade Commercial Advertisement Flyer Generator (1080x1080 SVG)
 */
function generateSvgFlyerBase64(copyOrHeadline, details = '', badge = 'SPECIAL OFFER', productImage = null) {
  let headline, subtitle, badgeText, badges;
  if (typeof copyOrHeadline === 'object' && copyOrHeadline !== null) {
    headline = copyOrHeadline.headline || 'PROMOTIONAL OFFER';
    subtitle = copyOrHeadline.subtitle || copyOrHeadline.details || '';
    badgeText = copyOrHeadline.badge || 'SPECIAL OFFER';
    badges = copyOrHeadline.badges || [];
    productImage = productImage || copyOrHeadline.productImage;
  } else {
    const parsed = parseMarketingContent(copyOrHeadline);
    headline = parsed.headline;
    subtitle = parsed.subtitle;
    badgeText = badge || parsed.badge;
    badges = parsed.badges;
  }

  const safeBadge = String(badgeText || 'SPECIAL OFFER').toUpperCase();
  const safeHeadline = String(headline || 'PREMIUM PROMOTION').toUpperCase().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const safeSubtitle = String(subtitle || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  let productSlotSvg = '';
  if (productImage && typeof productImage === 'string' && productImage.startsWith('data:image')) {
    productSlotSvg = `
      <!-- Product Card Container -->
      <rect x="80" y="240" width="920" height="430" rx="20" fill="#131c2e" stroke="#334155" stroke-width="2" filter="url(#dropShadow)"/>
      
      <!-- Backlight Radial Glow -->
      <circle cx="540" cy="455" r="210" fill="url(#productGlow)"/>
      
      <!-- High-Res Product Image -->
      <image href="${productImage}" x="110" y="260" width="860" height="390" preserveAspectRatio="xMidYMid meet" />
    `;
  } else {
    productSlotSvg = `
      <!-- Graphic Banner Container -->
      <rect x="80" y="240" width="920" height="430" rx="20" fill="#131c2e" stroke="#334155" stroke-width="2" filter="url(#dropShadow)"/>
      <circle cx="540" cy="455" r="230" fill="url(#productGlow)"/>
      <rect x="390" y="320" width="300" height="150" rx="16" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
      <text x="540" y="380" font-family="'Montserrat', Arial, sans-serif" font-weight="900" font-size="28" fill="#f59e0b" text-anchor="middle">CERTIFIED QUALITY</text>
      <text x="540" y="420" font-family="Arial, sans-serif" font-weight="600" font-size="18" fill="#94a3b8" text-anchor="middle">GLOBAL GATE STANDARDS</text>
      <text x="540" y="530" font-family="'Montserrat', Arial, sans-serif" font-weight="800" font-size="32" fill="#ffffff" text-anchor="middle">BUILT TO ENDURE</text>
      <text x="540" y="570" font-family="Arial, sans-serif" font-weight="500" font-size="20" fill="#cbd5e1" text-anchor="middle">Proven Performance in Mining &amp; Construction</text>
    `;
  }

  // 4 Feature Badges
  const badge1 = badges[0] || { title: 'High Strength', sub: 'Certified load-bearing' };
  const badge2 = badges[1] || { title: 'Long Durability', sub: 'Weather-resistant' };
  const badge3 = badges[2] || { title: 'Consistent Quality', sub: 'Calibrated dimensions' };
  const badge4 = badges[3] || { title: 'Villas & Heavy Builds', sub: 'Ideal for premium sites' };

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1080" viewBox="0 0 1080 1080">
    <defs>
      <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#0a101d"/>
        <stop offset="50%" stop-color="#11192b"/>
        <stop offset="100%" stop-color="#080c15"/>
      </linearGradient>
      <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#f59e0b"/>
        <stop offset="100%" stop-color="#fbbf24"/>
      </linearGradient>
      <radialGradient id="productGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="rgba(245, 158, 11, 0.22)"/>
        <stop offset="50%" stop-color="rgba(56, 189, 248, 0.08)"/>
        <stop offset="100%" stop-color="rgba(19, 28, 46, 0)"/>
      </radialGradient>
      <filter id="dropShadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="10" stdDeviation="14" flood-color="#000000" flood-opacity="0.6"/>
      </filter>
    </defs>

    <!-- Deep Modern Slate Canvas -->
    <rect width="1080" height="1080" fill="url(#bgGrad)"/>
    <rect x="0" y="0" width="1080" height="14" fill="url(#goldGrad)"/>

    <!-- Subtle Background Architecture Geometry -->
    <circle cx="990" cy="180" r="320" fill="none" stroke="rgba(245, 158, 11, 0.08)" stroke-width="2"/>
    <circle cx="990" cy="180" r="480" fill="none" stroke="rgba(56, 189, 248, 0.04)" stroke-width="1"/>

    <!-- Top Header: Brand & Badge -->
    <g transform="translate(80, 50)">
      <rect x="0" y="0" width="56" height="56" rx="14" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
      <text x="28" y="38" font-family="'Montserrat', 'Arial Black', sans-serif" font-weight="900" font-size="26" fill="#f59e0b" text-anchor="middle">GG</text>
      <text x="74" y="28" font-family="'Montserrat', Arial, sans-serif" font-weight="900" font-size="28" fill="#ffffff" letter-spacing="3">GLOBAL GATE</text>
      <text x="74" y="50" font-family="Arial, sans-serif" font-weight="700" font-size="13" fill="#94a3b8" letter-spacing="5">GENERAL SERVICES</text>
    </g>

    <!-- Badge Pill Top Right -->
    <g transform="translate(710, 52)">
      <rect x="0" y="0" width="290" height="50" rx="25" fill="#ef4444" filter="url(#dropShadow)"/>
      <text x="145" y="32" font-family="'Montserrat', Arial, sans-serif" font-weight="900" font-size="19" fill="#ffffff" text-anchor="middle" letter-spacing="2">${safeBadge}</text>
    </g>

    <!-- Main Headline with Angled Gold Bar -->
    <rect x="80" y="145" width="8" height="58" fill="url(#goldGrad)" rx="4"/>
    <text x="105" y="185" font-family="'Montserrat', 'Arial Black', sans-serif" font-weight="900" font-size="36" fill="#ffffff" letter-spacing="1">${safeHeadline.substring(0, 42)}</text>
    <text x="105" y="218" font-family="Arial, sans-serif" font-weight="500" font-size="20" fill="#94a3b8">${safeSubtitle.substring(0, 80)}</text>

    <!-- Product Showcase Slot -->
    ${productSlotSvg}

    <!-- Callout Slogan Banner -->
    <text x="540" y="705" font-family="'Montserrat', Arial, sans-serif" font-weight="800" font-size="22" fill="#f8fafc" text-anchor="middle">Not all products are created equal. <tspan fill="#f59e0b">Build with confidence.</tspan></text>

    <!-- 4 Value Badges (Agency Grid) -->
    <g transform="translate(80, 725)">
      <!-- Badge 1 -->
      <rect x="0" y="0" width="215" height="110" rx="14" fill="#131c2e" stroke="#25334d" stroke-width="1.5"/>
      <circle cx="107" cy="34" r="18" fill="#1e293b"/>
      <text x="107" y="41" font-size="18" text-anchor="middle">💪</text>
      <text x="107" y="72" font-family="'Montserrat', Arial, sans-serif" font-weight="800" font-size="15" fill="#ffffff" text-anchor="middle">${badge1.title}</text>
      <text x="107" y="93" font-family="Arial, sans-serif" font-weight="500" font-size="12" fill="#94a3b8" text-anchor="middle">${badge1.sub}</text>

      <!-- Badge 2 -->
      <rect x="235" y="0" width="215" height="110" rx="14" fill="#131c2e" stroke="#25334d" stroke-width="1.5"/>
      <circle cx="342" cy="34" r="18" fill="#1e293b"/>
      <text x="342" y="41" font-size="18" text-anchor="middle">🛡️</text>
      <text x="342" y="72" font-family="'Montserrat', Arial, sans-serif" font-weight="800" font-size="15" fill="#ffffff" text-anchor="middle">${badge2.title}</text>
      <text x="342" y="93" font-family="Arial, sans-serif" font-weight="500" font-size="12" fill="#94a3b8" text-anchor="middle">${badge2.sub}</text>

      <!-- Badge 3 -->
      <rect x="470" y="0" width="215" height="110" rx="14" fill="#131c2e" stroke="#25334d" stroke-width="1.5"/>
      <circle cx="577" cy="34" r="18" fill="#1e293b"/>
      <text x="577" y="41" font-size="18" text-anchor="middle">📏</text>
      <text x="577" y="72" font-family="'Montserrat', Arial, sans-serif" font-weight="800" font-size="15" fill="#ffffff" text-anchor="middle">${badge3.title}</text>
      <text x="577" y="93" font-family="Arial, sans-serif" font-weight="500" font-size="12" fill="#94a3b8" text-anchor="middle">${badge3.sub}</text>

      <!-- Badge 4 -->
      <rect x="705" y="0" width="215" height="110" rx="14" fill="#131c2e" stroke="#25334d" stroke-width="1.5"/>
      <circle cx="812" cy="34" r="18" fill="#1e293b"/>
      <text x="812" y="41" font-size="18" text-anchor="middle">🏛️</text>
      <text x="812" y="72" font-family="'Montserrat', Arial, sans-serif" font-weight="800" font-size="15" fill="#ffffff" text-anchor="middle">${badge4.title}</text>
      <text x="812" y="93" font-family="Arial, sans-serif" font-weight="500" font-size="12" fill="#94a3b8" text-anchor="middle">${badge4.sub}</text>
    </g>

    <!-- Bottom Commercial Action Bar -->
    <g transform="translate(80, 875)">
      <!-- Order Now Button -->
      <rect x="0" y="0" width="280" height="74" rx="18" fill="url(#goldGrad)" filter="url(#dropShadow)"/>
      <text x="140" y="46" font-family="'Montserrat', 'Arial Black', sans-serif" font-weight="900" font-size="24" fill="#0f172a" text-anchor="middle" letter-spacing="1">ORDER NOW!</text>

      <!-- WhatsApp Button -->
      <rect x="305" y="0" width="370" height="74" rx="18" fill="#10b981" filter="url(#dropShadow)"/>
      <text x="490" y="46" font-family="'Montserrat', Arial, sans-serif" font-weight="800" font-size="22" fill="#ffffff" text-anchor="middle">💬 0827722222</text>

      <!-- Location Badge -->
      <rect x="700" y="0" width="220" height="74" rx="18" fill="#1e293b" stroke="#334155" stroke-width="2"/>
      <text x="810" y="34" font-family="Arial, sans-serif" font-weight="700" font-size="14" fill="#f59e0b" text-anchor="middle">📍 LOCATION</text>
      <text x="810" y="56" font-family="'Montserrat', Arial, sans-serif" font-weight="800" font-size="15" fill="#ffffff" text-anchor="middle">KOLWEZI - DRC</text>
    </g>

    <!-- Corporate Footer Note -->
    <text x="540" y="1000" font-family="Arial, sans-serif" font-weight="500" font-size="17" fill="#64748b" text-anchor="middle">Global Gate SARL • Kolwezi, Lualaba Province, DR Congo</text>
  </svg>`;

  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
}


/**
 * Access Control Middleware for Marketing
 * GG has master bypass. Other users must have marketing: true in GrantAccess.
 */
async function verifyMarketingAccess(req, res, next) {
  try {
    const { userName, userId, userID } = req.body || {};
    const uid = userId || userID || req.headers['x-user-id'];
    const uName = userName || req.headers['x-user-name'];

    // Master account bypass
    if (uName === 'GG') {
      return next();
    }

    if (!uid && !uName) {
      return res.status(401).json({ success: false, error: 'User credentials missing from request.' });
    }

    const grant = await GrantAccess.findOne({
      $or: [
        { userID: uid },
        { employeeName: uName }
      ]
    });

    if (!grant) {
      return res.status(403).json({ success: false, error: 'Access denied: No permissions profile found.' });
    }

    const hasMarketingFlag = Boolean(grant.marketing);
    const hasMarketingModule = Array.isArray(grant.modules) && grant.modules.some(
      m => String(m.moduleName).toLowerCase() === 'marketing' && (m.access?.readM || m.access?.createM)
    );

    if (hasMarketingFlag || hasMarketingModule) {
      return next();
    }

    return res.status(403).json({ success: false, error: 'Access denied: You do not have permission to access the Marketing module.' });
  } catch (err) {
    console.error('Marketing access check error:', err);
    return res.status(500).json({ success: false, error: 'Internal access control error.' });
  }
}

/**
 * GET /status - Health & connectivity check
 */
router.get('/status', (req, res) => {
  const localAgentExists = fs.existsSync(AGENT_SCRIPT);
  res.json({
    status: 'ok',
    module: 'Marketing',
    localAgentExists,
    facebookConfigured: Boolean(FB_PAGE_ACCESS_TOKEN || localAgentExists)
  });
});

/**
 * GET /recipients - Saved WhatsApp recipient customer IDs (selection list)
 */
router.get('/recipients', verifyMarketingAccess, async (req, res) => {
  try {
    const doc = await MarketingRecipient.findOne({ key: 'whatsapp' }).lean();
    res.json({ success: true, customerIds: doc?.customerIds || [] });
  } catch (err) {
    console.error('[Marketing] Load recipients error:', err.message);
    res.status(500).json({ success: false, error: 'Failed to load saved recipients.' });
  }
});

/**
 * PUT /recipients - Save (replace) the WhatsApp recipient customer ID list
 */
router.put('/recipients', verifyMarketingAccess, async (req, res) => {
  try {
    const ids = Array.isArray(req.body?.customerIds)
      ? [...new Set(req.body.customerIds.map((x) => String(x)).filter(Boolean))]
      : [];
    const doc = await MarketingRecipient.findOneAndUpdate(
      { key: 'whatsapp' },
      { customerIds: ids, updatedBy: req.body?.userName || req.headers['x-user-name'] || '' },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    ).lean();
    res.json({ success: true, customerIds: doc.customerIds });
  } catch (err) {
    console.error('[Marketing] Save recipients error:', err.message);
    res.status(500).json({ success: false, error: 'Failed to save recipients.' });
  }
});

/**
 * GET /flyer - Get latest generated flyer image
 */
router.get('/flyer', (req, res) => {
  if (latestFlyerBuffer) {
    const isSvg = latestFlyerBuffer.toString('utf8', 0, 100).includes('<svg');
    res.setHeader('Content-Type', isSvg ? 'image/svg+xml' : 'image/png');
    return res.end(latestFlyerBuffer);
  }
  if (fs.existsSync(AGENT_FLYER)) {
    res.setHeader('Content-Type', 'image/png');
    return fs.createReadStream(AGENT_FLYER).pipe(res);
  }
  res.status(404).json({ success: false, error: 'No flyer generated yet.' });
});

/**
 * POST /publish - Generate flyer and publish to Facebook and/or WhatsApp
 */
router.post('/publish', verifyMarketingAccess, async (req, res) => {
  const { brief, whatsappNumber, platforms = {}, productImage = null, previewOnly = false } = req.body;

  if (!brief || !String(brief).trim()) {
    return res.status(400).json({ success: false, error: 'Promotional brief is required.' });
  }

  const postToFacebook = platforms.facebook !== false;
  const sendWhatsApp = Boolean(platforms.whatsapp && whatsappNumber);
  const sendWhatsAppStatus = Boolean(platforms.whatsappStatus);
  const postToInstagram = Boolean(platforms.instagram);

  // Strategy 1: If local agent daemon is listening on port 5055, forward request directly
  try {
    const httpRes = await fetch('http://127.0.0.1:5055/publish', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        brief,
        whatsappNumber,
        postToFacebook,
        sendWhatsApp,
        sendWhatsAppStatus,
        postToInstagram,
        productImage,
        previewOnly
      }),
      signal: AbortSignal.timeout(60000)
    });
    if (httpRes.ok) {
      const data = await httpRes.json();
      return res.json(data);
    }
  } catch (_) {
    // Daemon not running, continue to local script invocation or direct dispatch
  }

  // Strategy 2: Execute local agent.js script via Node child_process
  if (fs.existsSync(AGENT_SCRIPT)) {
    console.log('[Marketing] Executing local agent script at:', AGENT_SCRIPT);

    // Clear previous flyer before generating new one so stale flyers are never returned
    if (fs.existsSync(AGENT_FLYER)) {
      try {
        fs.unlinkSync(AGENT_FLYER);
      } catch (_) {}
    }

    let tempProductImagePath = null;
    if (productImage && typeof productImage === 'string' && productImage.startsWith('data:image')) {
      try {
        const base64Data = productImage.replace(/^data:image\/\w+;base64,/, '');
        tempProductImagePath = path.join(AGENT_DIR, 'temp_product.png');
        fs.writeFileSync(tempProductImagePath, Buffer.from(base64Data, 'base64'));
      } catch (e) {
        console.warn('[Marketing] Could not write temp product image:', e.message);
      }
    } else {
      const oldTemp = path.join(AGENT_DIR, 'temp_product.png');
      if (fs.existsSync(oldTemp)) {
        try { fs.unlinkSync(oldTemp); } catch (_) {}
      }
    }

    const cleanBriefForAgent = sanitizeUserBrief(brief) || brief;
    const args = [
      AGENT_SCRIPT,
      cleanBriefForAgent,
      `--wa=${whatsappNumber || ''}`
    ];

    if (previewOnly) {
      args.push('--preview-only');
    } else {
      args.push(postToFacebook ? '--fb' : '--no-fb');
      args.push(sendWhatsApp ? '--send-wa' : '--no-wa');
      if (sendWhatsAppStatus) args.push('--wa-status');
      args.push(postToInstagram ? '--send-ig' : '--no-ig');
    }

    if (tempProductImagePath && fs.existsSync(tempProductImagePath)) {
      args.push(`--product-image=${tempProductImagePath}`);
    }

    return execFile('node', args, { cwd: AGENT_DIR, timeout: 120000 }, (error, stdout, stderr) => {
      if (error) {
        console.error('[Marketing] Agent execution error:', error, stderr);
      }

      let flyerBase64 = null;
      if (fs.existsSync(AGENT_FLYER)) {
        try {
          const buf = fs.readFileSync(AGENT_FLYER);
          latestFlyerBuffer = buf;
          flyerBase64 = `data:image/png;base64,${buf.toString('base64')}`;
        } catch (e) {
          console.warn('[Marketing] Failed to read flyer base64:', e.message);
        }
      }

      // Parse Facebook Post ID from stdout if available
      let fbPostId = null;
      const fbMatch = stdout.match(/Main Timeline Feed Post Created:\s*([^\s\n\r]+)/i) || stdout.match(/Live Feed Post Published ID:\s*([^\s\n\r]+)/i) || stdout.match(/Facebook post published! Post ID:\s*([^\s\n\r]+)/i) || stdout.match(/Post ID:\s*([^\s\n\r]+)/i);
      if (fbMatch) {
        fbPostId = fbMatch[1];
      }

      let igPostId = null;
      const igMatch = stdout.match(/Instagram post published! Post ID:\s*([^\s\n\r]+)/i) || stdout.match(/"instagram":\s*\{\s*"success":\s*true,\s*"postId":\s*"([^"]+)"/i);
      if (igMatch) {
        igPostId = igMatch[1];
      }

      const fbSuccess = Boolean(fbPostId) || stdout.includes('[SUCCESS] Facebook post published');
      const waSuccess = stdout.includes('[SUCCESS] Flyer & caption delivered to WhatsApp');
      const waStatusSuccess = stdout.includes('[SUCCESS] Flyer & caption published to WhatsApp Status');
      const igSuccess = Boolean(igPostId) || stdout.includes('[SUCCESS] Instagram post published');

      let igError = null;
      if (!igSuccess && postToInstagram && !previewOnly) {
        const igErrMatch = stdout.match(/Instagram posting failed:\s*([^\n\r]+)/i) || stdout.match(/Instagram Permission Missing:\s*([^\n\r]+)/i);
        igError = igErrMatch ? igErrMatch[1] : 'Instagram publication failed or requires permissions';
      }

      const headlineMatch = stdout.match(/"headline":\s*"([^"]+)"/i);
      const parsedHeadline = headlineMatch ? headlineMatch[1] : null;

      return res.json({
        success: !error || Boolean(flyerBase64) || fbSuccess || waSuccess || igSuccess,
        previewOnly: Boolean(previewOnly),
        brief,
        headline: parsedHeadline,
        flyerBase64,
        facebook: {
          success: fbSuccess,
          postId: fbPostId,
          postUrl: fbPostId ? `https://www.facebook.com/${fbPostId}` : null,
          error: !fbSuccess && postToFacebook && !previewOnly ? 'Facebook photo dispatch did not return post ID' : null
        },
        whatsapp: {
          success: waSuccess || waStatusSuccess,
          target: whatsappNumber,
          statusStory: waStatusSuccess,
          message: (waSuccess && waStatusSuccess)
            ? 'WhatsApp Delivered to Contact & Status Story'
            : (waStatusSuccess ? 'WhatsApp Published to Status Story' : (waSuccess ? 'WhatsApp Delivered Successfully' : null)),
          error: (!waSuccess && !waStatusSuccess && (sendWhatsApp || sendWhatsAppStatus) && !previewOnly)
            ? 'WhatsApp dispatch did not confirm delivery'
            : null
        },
        instagram: {
          success: igSuccess,
          postId: igPostId,
          postUrl: igPostId ? `https://www.instagram.com/p/${igPostId}` : null,
          error: igError
        },
        output: stdout
      });
    });
  }

  // Strategy 3: Cloud / Remote fallback (when running on Railway server without local agent directory)
  console.log('[Marketing] Running in remote environment. Generating agency-grade flyer...');
  try {
    const copyData = parseMarketingContent(brief);
    const flyerBase64 = generateSvgFlyerBase64(copyData, '', copyData.badge, productImage);
    const caption = copyData.caption;

    const svgBuffer = Buffer.from(flyerBase64.replace(/^data:image\/svg\+xml;base64,/, ''), 'base64');
    latestFlyerBuffer = svgBuffer;

    // IF PREVIEW ONLY: DO NOT DISPATCH TO SOCIAL MEDIA PLATFORMS
    if (previewOnly) {
      return res.json({
        success: true,
        previewOnly: true,
        brief,
        headline: copyData.headline,
        copy: {
          badge: copyData.badge,
          headline: copyData.headline,
          details: copyData.subtitle,
          caption: copyData.caption
        },
        flyerBase64,
        facebook: { success: false, postId: null, postUrl: null, error: null },
        whatsapp: { success: false, error: null },
        instagram: { success: false, postId: null, postUrl: null, error: null }
      });
    }

    // DISPATCH STAGE: User clicked "Approve & Publish"
    let fbResult = null;
    if (postToFacebook && FB_PAGE_ACCESS_TOKEN && FB_PAGE_ID) {
      try {
        let photoId = null;

        // Step 1: If product image is provided and is a valid raster base64 (PNG/JPG/WEBP), upload to Photos API
        if (productImage && typeof productImage === 'string' && productImage.startsWith('data:image')) {
          const match = productImage.match(/^data:(image\/[a-zA-Z0-9+.-]+);base64,(.+)$/);
          if (match) {
            try {
              const mimeType = match[1];
              const ext = mimeType.includes('png') ? 'png' : (mimeType.includes('jpeg') || mimeType.includes('jpg') ? 'jpg' : 'png');
              const rasterBuf = Buffer.from(match[2], 'base64');
              const uploadForm = new FormData();
              uploadForm.append('source', rasterBuf, { filename: `flyer.${ext}`, contentType: mimeType });
              uploadForm.append('published', 'false');
              uploadForm.append('access_token', FB_PAGE_ACCESS_TOKEN);

              const photoRes = await axios.post(
                `https://graph.facebook.com/v21.0/${FB_PAGE_ID}/photos`,
                uploadForm,
                { headers: uploadForm.getHeaders(), timeout: 30000 }
              );
              if (photoRes.data && photoRes.data.id) {
                photoId = photoRes.data.id;
              }
            } catch (pErr) {
              console.warn('[Marketing] Photo upload failed, continuing with feed post:', pErr.response?.data?.error?.message || pErr.message);
            }
          }
        }

        // Step 2: Publish to Page Feed
        const feedPayload = {
          message: caption,
          access_token: FB_PAGE_ACCESS_TOKEN
        };
        if (photoId) {
          feedPayload.attached_media = JSON.stringify([{ media_fbid: photoId }]);
        }

        const feedRes = await axios.post(
          `https://graph.facebook.com/v21.0/${FB_PAGE_ID}/feed`,
          feedPayload,
          { timeout: 30000 }
        );

        console.log('✅ Main Timeline Feed Post Created:', feedRes.data.id);
        fbResult = {
          success: true,
          postId: feedRes.data.id,
          photoId: photoId,
          postUrl: `https://www.facebook.com/${feedRes.data.id}`
        };
      } catch (fbErr) {
        console.error('[Marketing] Facebook publish error:', fbErr.response?.data || fbErr.message);
        fbResult = {
          success: false,
          error: fbErr.response?.data?.error?.message || fbErr.message || 'Facebook publication failed'
        };
      }
    }

    let igResult = null;
    if (postToInstagram && FB_PAGE_ACCESS_TOKEN) {
      try {
        const igAccountId = process.env.IG_ACCOUNT_ID || '17841454469800173';
        let imageUrl = null;
        if (fbResult?.postId) {
          try {
            const photoRes = await fetch(`https://graph.facebook.com/v21.0/${fbResult.postId}?fields=images&access_token=${FB_PAGE_ACCESS_TOKEN}`);
            const pData = await photoRes.json();
            imageUrl = pData.images?.[0]?.source;
          } catch (_) {}
        }
        if (!imageUrl) {
          imageUrl = 'https://api.globalgate.sarl/api/marketing/flyer';
        }
        const cRes = await fetch(`https://graph.facebook.com/v21.0/${igAccountId}/media?image_url=${encodeURIComponent(imageUrl)}&caption=${encodeURIComponent(caption)}&access_token=${FB_PAGE_ACCESS_TOKEN}`, { method: 'POST' });
        const cData = await cRes.json();
        if (cData.id) {
          const pRes = await fetch(`https://graph.facebook.com/v21.0/${igAccountId}/media_publish?creation_id=${cData.id}&access_token=${FB_PAGE_ACCESS_TOKEN}`, { method: 'POST' });
          const pData = await pRes.json();
          if (pData.id) {
            igResult = { success: true, postId: pData.id, postUrl: `https://www.instagram.com/p/${pData.id}` };
          } else {
            igResult = { success: false, error: pData.error?.message || 'Instagram publish failed' };
          }
        } else {
          igResult = { success: false, error: cData.error?.message || 'Instagram container creation failed' };
        }
      } catch (igErr) {
        igResult = { success: false, error: igErr.message };
      }
    }

    return res.json({
      success: true,
      brief,
      copy: {
        badge,
        headline,
        details: brief,
        caption
      },
      flyerBase64,
      facebook: fbResult || { success: false, error: postToFacebook ? 'Facebook publish failed.' : 'Facebook dispatch not selected.' },
      whatsapp: {
        success: false,
        error: 'WhatsApp Web automated dispatch requires the local agent running on the workstation.'
      },
      instagram: igResult || {
        success: false,
        error: postToInstagram ? 'Instagram dispatch failed.' : 'Instagram dispatch not selected.'
      }
    });
  } catch (cloudErr) {
    console.error('[Marketing] Remote publish error:', cloudErr);
    return res.status(500).json({ success: false, error: cloudErr.message });
  }
});

module.exports = router;
