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
const FB_PAGE_ACCESS_TOKEN = process.env.FB_PAGE_ACCESS_TOKEN || 'EAAQS2kcRZBkABS0SWjis1LGGVEgWxC7dgAXj13kbak5nPvr1wGVUwNkwOY6k8OaDeDUhT2VV2ZAf7hWOV8kAVYYpTA9dtZCheqebyYB7bl3AJsR8WdZCh1NqIdJQ6bo0cm6AQ3PGtseVeZCoqtb5nATFGCaZA4Wumj2bHoggbCrVWuP8j6M8vAkNWGTtEGZBpKhLFuv';

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
  const { brief, whatsappNumber, platforms = {} } = req.body;

  if (!brief || !String(brief).trim()) {
    return res.status(400).json({ success: false, error: 'Promotional brief is required.' });
  }

  const postToFacebook = platforms.facebook !== false;
  const sendWhatsApp = Boolean(platforms.whatsapp && whatsappNumber);

  // Strategy 1: If local agent daemon is listening on port 5055, forward request directly
  try {
    const httpRes = await fetch('http://127.0.0.1:5055/publish', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        brief,
        whatsappNumber,
        postToFacebook,
        sendWhatsApp
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
    const args = [
      AGENT_SCRIPT,
      brief,
      `--wa=${whatsappNumber || ''}`,
      postToFacebook ? '--fb' : '--no-fb',
      sendWhatsApp ? '--send-wa' : '--no-wa'
    ];

    return execFile('node', args, { cwd: AGENT_DIR, timeout: 60000 }, (error, stdout, stderr) => {
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
      const fbMatch = stdout.match(/Post ID:\s*([^\s\n\r]+)/i) || stdout.match(/"postId":\s*"([^"]+)"/i);
      if (fbMatch) {
        fbPostId = fbMatch[1];
      }

      // Check if WhatsApp sent
      const waSuccess = stdout.includes('[SUCCESS] Flyer & caption delivered to WhatsApp');

      return res.json({
        success: !error || Boolean(flyerBase64),
        brief,
        flyerBase64,
        facebook: {
          success: Boolean(fbPostId),
          postId: fbPostId,
          postUrl: fbPostId ? `https://www.facebook.com/${fbPostId}` : null,
          error: !fbPostId && postToFacebook ? 'Facebook dispatch did not return post ID' : null
        },
        whatsapp: {
          success: waSuccess,
          target: whatsappNumber,
          error: !waSuccess && sendWhatsApp ? 'WhatsApp dispatch did not confirm delivery' : null
        },
        output: stdout
      });
    });
  }

  // Strategy 3: Cloud / Remote fallback (when running on Railway server without local agent directory)
  console.log('[Marketing] Running in remote environment. Attempting direct Facebook Graph API publish...');
  try {
    let fbResult = null;
    if (postToFacebook && FB_PAGE_ACCESS_TOKEN && FB_PAGE_ID) {
      const caption = `🔥 **GLOBAL GATE - SPECIAL PROMOTION** 🔥\n\n${brief}\n\n📞 Contact: +243 827 722 222\n#GlobalGate #Promotion`;
      const fbUrl = `https://graph.facebook.com/v21.0/${FB_PAGE_ID}/feed?message=${encodeURIComponent(caption)}&access_token=${FB_PAGE_ACCESS_TOKEN}`;
      const fbRes = await fetch(fbUrl, { method: 'POST' });
      const fbData = await fbRes.json();
      if (fbData.id) {
        fbResult = {
          success: true,
          postId: fbData.id,
          postUrl: `https://www.facebook.com/${fbData.id}`
        };
      } else {
        fbResult = { success: false, error: fbData.error?.message || 'Facebook publish failed' };
      }
    }

    const discountMatch = String(brief).match(/(\d+%\s*(?:off|discount|remise))/i);
    const priceMatch = String(brief).match(/(\$\s*\d+(?:\.\d+)?|\d+(?:\.\d+)?\s*(?:\$|usd|fc))/i);
    const badge = discountMatch ? discountMatch[1].toUpperCase() : (priceMatch ? 'BEST PRICE' : 'SPECIAL OFFER');
    let headline = String(brief).replace(/(offer for this week|offer|special offer|promo|promotion|pour cette semaine)\s*[:-]?\s*/gi, '').trim();
    if (headline.length > 40) headline = headline.substring(0, 40) + '...';

    const flyerBase64 = generateSvgFlyerBase64(headline, brief, badge);

    return res.json({
      success: true,
      brief,
      copy: {
        badge,
        headline,
        details: brief,
        caption: `🔥 **GLOBAL GATE - SPECIAL PROMOTION** 🔥\n\n📢 **${headline.toUpperCase()}**\n\n✨ **Details:** ${brief}\n\n📞 **Contact us today:** +243 827 722 222\n#GlobalGate #Promotion #SpecialOffer`
      },
      flyerBase64,
      facebook: fbResult || { success: false, error: 'Facebook publish failed or not selected.' },
      whatsapp: {
        success: false,
        error: 'WhatsApp Web dispatch requires the local agent running on the workstation.'
      }
    });
  } catch (cloudErr) {
    console.error('[Marketing] Remote publish error:', cloudErr);
    return res.status(500).json({ success: false, error: cloudErr.message });
  }
});

module.exports = router;
