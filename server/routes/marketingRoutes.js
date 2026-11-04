const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const { execFile } = require('child_process');
const GrantAccess = require('../model/grantAccessSchema');

// Path to local fb-whatsapp-agent
const AGENT_DIR = 'C:\\Users\\GG\\fb-whatsapp-agent';
const AGENT_SCRIPT = path.join(AGENT_DIR, 'agent.js');
const AGENT_FLYER = path.join(AGENT_DIR, 'generated_flyer.png');

// Fallback Facebook credentials if running on remote server
const FB_PAGE_ID = process.env.FB_PAGE_ID || '200999390054494';
const FB_PAGE_ACCESS_TOKEN = process.env.FB_PAGE_ACCESS_TOKEN || 'EAAQS2kcRZBkABSxsDnH7Afo1BD4NZCuYncZC7rZA0s8u8gkBQG5ZAjkSxovM12jSpKhuX6BF8eHpIBNSQsfb8bNxpNfoWpiojh2ZAAll328EzndUEIk8ZCNPiCS7nQCeAoORTQZB8nSVPBHKZC7RRcfHMbOwScq5EF8E4LKNx4FeDa75rfZBJ80D9ajCqUAFu15uSRvnXv';

function generateSvgFlyerBase64(headline, details, badge = 'SPECIAL OFFER') {
  const safeBadge = String(badge || 'SPECIAL OFFER').toUpperCase();
  const safeHeadline = String(headline || 'PROMOTIONAL OFFER').toUpperCase();
  const safeDetails = String(details || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1080" viewBox="0 0 1080 1080">
    <rect width="1080" height="1080" fill="#141a29"/>
    <rect x="0" y="0" width="1080" height="24" fill="#f59e0b"/>
    <text x="540" y="160" font-family="Arial, sans-serif" font-weight="900" font-size="64" fill="#ffffff" text-anchor="middle" letter-spacing="6">GLOBAL GATE</text>
    <text x="540" y="210" font-family="Arial, sans-serif" font-weight="600" font-size="24" fill="#f59e0b" text-anchor="middle" letter-spacing="4">OFFICIAL PROMOTION</text>
    
    <rect x="360" y="270" width="360" height="60" rx="30" fill="#ef4444"/>
    <text x="540" y="312" font-family="Arial, sans-serif" font-weight="800" font-size="28" fill="#ffffff" text-anchor="middle">${safeBadge}</text>
    
    <rect x="90" y="370" width="900" height="430" rx="24" fill="#1e293b" stroke="#334155" stroke-width="3"/>
    
    <text x="540" y="470" font-family="Arial, sans-serif" font-weight="900" font-size="40" fill="#f8fafc" text-anchor="middle">${safeHeadline.substring(0, 40)}</text>
    
    <foreignObject x="140" y="520" width="800" height="240">
      <div xmlns="http://www.w3.org/1999/xhtml" style="font-family: Arial, sans-serif; font-size: 26px; color: #cbd5e1; text-align: center; line-height: 1.5;">
        ${safeDetails}
      </div>
    </foreignObject>
    
    <rect x="290" y="850" width="500" height="80" rx="40" fill="#10b981"/>
    <text x="540" y="902" font-family="Arial, sans-serif" font-weight="800" font-size="30" fill="#ffffff" text-anchor="middle">💬 WhatsApp: +243 827 722 222</text>
    
    <text x="540" y="990" font-family="Arial, sans-serif" font-weight="500" font-size="20" fill="#64748b" text-anchor="middle">Global Gate SARL • Kolwezi, Lualaba, DR Congo</text>
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
 * GET /flyer - Get latest generated flyer image
 */
router.get('/flyer', (req, res) => {
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

    let tempProductImagePath = null;
    if (productImage && typeof productImage === 'string' && productImage.startsWith('data:image')) {
      try {
        const base64Data = productImage.replace(/^data:image\/\w+;base64,/, '');
        tempProductImagePath = path.join(AGENT_DIR, 'temp_product.png');
        fs.writeFileSync(tempProductImagePath, Buffer.from(base64Data, 'base64'));
      } catch (e) {
        console.warn('[Marketing] Could not write temp product image:', e.message);
      }
    }

    const args = [
      AGENT_SCRIPT,
      brief,
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
          flyerBase64 = `data:image/png;base64,${buf.toString('base64')}`;
        } catch (e) {
          console.warn('[Marketing] Failed to read flyer base64:', e.message);
        }
      }

      // Parse Facebook Post ID from stdout if available
      let fbPostId = null;
      const fbMatch = stdout.match(/Facebook post published! Post ID:\s*([^\s\n\r]+)/i) || stdout.match(/Post ID:\s*([^\s\n\r]+)/i);
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
  console.log('[Marketing] Running in remote environment. Attempting direct Facebook Graph API photo publish...');
  try {
    const discountMatch = String(brief).match(/(\d+%\s*(?:off|discount|remise))/i);
    const priceMatch = String(brief).match(/(\$\s*\d+(?:\.\d+)?|\d+(?:\.\d+)?\s*(?:\$|usd|fc))/i);
    const badge = discountMatch ? discountMatch[1].toUpperCase() : (priceMatch ? 'BEST PRICE' : 'SPECIAL OFFER');
    let headline = String(brief).replace(/(offer for this week|offer|special offer|promo|promotion|pour cette semaine)\s*[:-]?\s*/gi, '').trim();
    if (headline.length > 40) headline = headline.substring(0, 40) + '...';

    const flyerBase64 = generateSvgFlyerBase64(headline, brief, badge);
    const caption = `🔥 **GLOBAL GATE - SPECIAL PROMOTION** 🔥\n\n📢 **${headline.toUpperCase()}**\n\n✨ **Details:** ${brief}\n\n📞 **Contact us today:** +243 827 722 222\n#GlobalGate #Promotion #SpecialOffer`;

    let fbResult = null;
    if (postToFacebook && FB_PAGE_ACCESS_TOKEN && FB_PAGE_ID) {
      // STRICT PHOTO PUBLISHING: Convert SVG to buffer and post to /photos
      const svgBuffer = Buffer.from(flyerBase64.replace(/^data:image\/svg\+xml;base64,/, ''), 'base64');
      const blob = new Blob([svgBuffer], { type: 'image/svg+xml' });
      const formData = new FormData();
      formData.append('source', blob, 'flyer.svg');
      formData.append('caption', caption);
      formData.append('access_token', FB_PAGE_ACCESS_TOKEN);

      const fbUrl = `https://graph.facebook.com/v21.0/${FB_PAGE_ID}/photos`;
      const fbRes = await fetch(fbUrl, { method: 'POST', body: formData });
      const fbData = await fbRes.json();
      if (fbData.post_id || fbData.id) {
        const pid = fbData.post_id || fbData.id;
        fbResult = {
          success: true,
          postId: pid,
          postUrl: `https://www.facebook.com/${pid}`
        };
      } else {
        fbResult = { success: false, error: fbData.error?.message || 'Facebook photo upload failed' };
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
      facebook: fbResult || { success: false, error: 'Facebook publish failed or not selected.' },
      whatsapp: {
        success: false,
        error: 'WhatsApp Web dispatch requires the local agent running on the workstation.'
      },
      instagram: {
        success: false,
        error: 'Instagram dispatch requires local workstation or public image hosting.'
      }
    });
  } catch (cloudErr) {
    console.error('[Marketing] Remote publish error:', cloudErr);
    return res.status(500).json({ success: false, error: cloudErr.message });
  }
});

module.exports = router;
