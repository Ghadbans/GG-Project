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
const FB_PAGE_ACCESS_TOKEN = process.env.FB_PAGE_ACCESS_TOKEN || '';

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

    return res.json({
      success: true,
      brief,
      flyerBase64: null,
      facebook: fbResult || { success: false, error: 'Facebook credentials not configured on server' },
      whatsapp: {
        success: false,
        error: 'WhatsApp Web dispatch requires the local agent on the workstation.'
      }
    });
  } catch (cloudErr) {
    console.error('[Marketing] Remote publish error:', cloudErr);
    return res.status(500).json({ success: false, error: cloudErr.message });
  }
});

module.exports = router;
