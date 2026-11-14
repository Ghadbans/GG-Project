const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const { execFile } = require('child_process');
const axios = require('axios');
const FormData = require('form-data');
const GrantAccess = require('../model/grantAccessSchema');
const MarketingRecipient = require('../model/marketingRecipientSchema');
const cloudWhatsAppService = require('../services/cloudWhatsAppService');

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
 * Intelligent B2B & Retail Marketing Copy Engine (Universal Products & Services)
 */
function parseMarketingContent(rawBrief, customSlogan = '') {
  const clean = sanitizeUserBrief(rawBrief);
  const lower = clean.toLowerCase();

  const isService = /service|maintenance|repar|repair|installat|preventi|electri|depann|diagnos|climat|froid|technic|bobinage/i.test(lower);
  const isAppliance = /appliance|electromenag|restaurant|cuisine|four|refrigerat|frigo|congelat|kitchen|lave|blender|micro|cuisiniere|hotte/i.test(lower);
  const isTelecom = /walkie|talkie|radio|motorola|baofeng|vhf|uhf|comms|communicat|talky|walke/i.test(lower);
  const isSpareParts = /spare|piece|filtre|filter|brake|frein|courroie|belt|moteur|engine|suspension|roulement|bearing|clutch|embrayage|amortisseur/i.test(lower);
  const isLighting = /light|lumiere|led|lamp|lampe|projecteur|spotlight|eclairage|ampoule|floodlight|disjoncteur/i.test(lower);
  const isTools = /tool|outil|outillage|perceuse|drill|grinder|meuleuse|cle|wrench|securite|casque|gant|ppe|soudure/i.test(lower);
  const isConstruction = /concrete|block|brique|ciment|cement|carrilu|chantier|beton|chaux|fer|rebar/i.test(lower);
  const isSolar = /solar|solaire|inverter|onduleur|battery|batterie|panneau/i.test(lower);

  const discountMatch = clean.match(/(\d+%\s*(?:off|discount|remise))/i);
  const priceMatch = clean.match(/(\$\s*\d+(?:\.\d+)?|\d+(?:\.\d+)?\s*(?:\$|usd|fc))/i);
  let badge = discountMatch ? discountMatch[1].toUpperCase() : (priceMatch ? 'BEST PRICE' : (isService ? 'CERTIFIED SERVICE' : 'SPECIAL OFFER'));

  let headline = '';
  let subtitle = '';
  let badges = [];
  let defaultSlogan = 'Professional solutions and guaranteed quality across Lualaba.';

  if (isService) {
    headline = clean.split(/[.\n|;]/)[0] || 'TECHNICAL SERVICES & MAINTENANCE';
    subtitle = 'Certified expert technicians and preventive maintenance available on-site.';
    defaultSlogan = 'Certified technicians and rapid intervention for peak reliability.';
    badges = [
      { icon: '🛠️', title: 'Certified Experts', sub: 'Experienced technicians' },
      { icon: '⚡', title: 'Fast On-Site Response', sub: 'Rapid intervention' },
      { icon: '📋', title: 'Preventive Care', sub: 'Avoid costly downtime' },
      { icon: '🛡️', title: 'Guaranteed Work', sub: 'Full service warranty' }
    ];
  } else if (isAppliance) {
    headline = clean.split(/[.\n|;]/)[0] || 'COMMERCIAL & HOME APPLIANCES';
    subtitle = 'High-performance commercial and domestic equipment built for daily heavy duty.';
    defaultSlogan = 'Commercial-grade performance built for daily heavy-duty use.';
    badges = [
      { icon: '⭐', title: 'Heavy Duty Grade', sub: 'Built for intense use' },
      { icon: '⚡', title: 'Energy Efficient', sub: 'Optimized consumption' },
      { icon: '🛡️', title: 'Full Warranty', sub: 'Complete local support' },
      { icon: '📦', title: 'In Stock Kolwezi', sub: 'Direct showroom pickup' }
    ];
  } else if (isTelecom) {
    headline = clean.split(/[.\n|;]/)[0] || 'TWO-WAY RADIOS & TELECOM';
    subtitle = 'Long-range crystal-clear communication engineered for harsh field sites.';
    defaultSlogan = 'Instant, crystal-clear communication across any distance.';
    badges = [
      { icon: '📻', title: 'Long Range Audio', sub: 'Multi-km clear signal' },
      { icon: '🔊', title: 'Noise Reduction', sub: 'Clear sound on noisy sites' },
      { icon: '🛡️', title: 'Rugged & Tough', sub: 'Weather & dust resistant' },
      { icon: '⚡', title: 'Pre-Programmed', sub: 'Ready to deploy immediately' }
    ];
  } else if (isSpareParts) {
    headline = clean.split(/[.\n|;]/)[0] || 'HEAVY-DUTY SPARE PARTS';
    subtitle = 'Precision OEM replacement parts engineered for machinery and fleet uptime.';
    defaultSlogan = 'Engineered for endurance. Keep your operations moving.';
    badges = [
      { icon: '⚙️', title: 'Heavy Duty Build', sub: 'High endurance parts' },
      { icon: '🛡️', title: 'OEM Quality', sub: 'Certified exact fit' },
      { icon: '📦', title: 'Warehouse Stock', sub: 'Immediate availability' },
      { icon: '🚀', title: 'Fast Dispatch', sub: 'Direct delivery in Kolwezi' }
    ];
  } else if (isLighting) {
    headline = clean.split(/[.\n|;]/)[0] || 'COMMERCIAL & INDUSTRIAL LIGHTING';
    subtitle = 'High-lumen, weatherproof illumination engineered for tough environments.';
    defaultSlogan = 'High-efficiency illumination built for demanding environments.';
    badges = [
      { icon: '💡', title: 'Ultra High Lumens', sub: 'Maximum visibility' },
      { icon: '🌧️', title: 'Weatherproof IP66', sub: 'All-weather certified' },
      { icon: '⚡', title: 'Low Power Draw', sub: 'High energy savings' },
      { icon: '🏢', title: 'Industrial Grade', sub: 'Long continuous lifespan' }
    ];
  } else if (isTools) {
    headline = clean.split(/[.\n|;]/)[0] || 'PROFESSIONAL HARDWARE & TOOLS';
    subtitle = 'Heavy-duty equipment and safety gear built for professional contractors.';
    defaultSlogan = 'Precision, durability and safety for professionals.';
    badges = [
      { icon: '🛠️', title: 'Pro Durability', sub: 'Contractor-grade tough' },
      { icon: '🦺', title: 'Certified Safe', sub: 'Compliance tested' },
      { icon: '👌', title: 'Ergonomic Grip', sub: 'Built for long shifts' },
      { icon: '⭐', title: 'Maximum Precision', sub: 'Guaranteed performance' }
    ];
  } else if (isConstruction) {
    headline = clean.split(/[.\n|;]/)[0] || 'PREMIUM CONSTRUCTION MATERIALS';
    subtitle = 'Strength, durability and precision for high-quality construction across Lualaba.';
    defaultSlogan = 'Superior strength and quality for lasting structures.';
    badges = [
      { icon: '💪', title: 'High Strength', sub: 'Certified load-bearing' },
      { icon: '🛡️', title: 'Long Durability', sub: 'Weather-resistant' },
      { icon: '📏', title: 'Consistent Quality', sub: 'Calibrated dimensions' },
      { icon: '🚚', title: 'Factory Dispatch', sub: 'Direct site delivery' }
    ];
  } else if (isSolar) {
    headline = clean.split(/[.\n|;]/)[0] || 'SOLAR & CLEAN ENERGY';
    subtitle = 'Reliable uninterrupted energy engineered for industrial & residential power.';
    defaultSlogan = 'Uninterrupted, reliable energy engineered for peak performance.';
    badges = [
      { icon: '☀️', title: 'High Efficiency', sub: 'Tier-1 solar tech' },
      { icon: '🔋', title: 'Deep Cycle Life', sub: 'Long-lasting batteries' },
      { icon: '⚡', title: 'Pure Sine Wave', sub: 'Protects delicate gear' },
      { icon: '🔧', title: 'Turnkey Setup', sub: 'Expert local installation' }
    ];
  } else {
    headline = clean.split(/[.\n|;]/)[0] || 'OFFICIAL PROMOTION';
    subtitle = 'Professional-grade quality and certified turnkey solutions available now.';
    defaultSlogan = 'Professional solutions and guaranteed quality across Lualaba.';
    badges = [
      { icon: '⭐', title: 'Guaranteed Quality', sub: 'Certified standards' },
      { icon: '🤝', title: 'Full Tech Support', sub: 'Dedicated service' },
      { icon: '💰', title: 'Best B2B Pricing', sub: 'Competitive terms' },
      { icon: '📍', title: 'Immediate Availability', sub: 'In stock in Kolwezi' }
    ];
  }

  if (headline.length > 40) headline = headline.substring(0, 38) + '...';
  headline = headline.toUpperCase();

  const finalSlogan = customSlogan ? customSlogan.trim() : defaultSlogan;

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
    slogan: finalSlogan,
    badges,
    caption
  };
}

/**
 * Agency-Grade Commercial Advertisement Flyer Generator (1080x1080 SVG)
 */
function generateSvgFlyerBase64(copyOrHeadline, details = '', badge = 'SPECIAL OFFER', productImage = null, theme = 'universal', isFullFlyer = false, customSlogan = '') {
  // If user uploaded a full finished flyer directly (ChatGPT / designer):
  if (isFullFlyer && productImage && typeof productImage === 'string' && productImage.startsWith('data:image')) {
    return productImage;
  }

  let headline, subtitle, badgeText, badges, slogan;
  if (typeof copyOrHeadline === 'object' && copyOrHeadline !== null) {
    headline = copyOrHeadline.headline || 'PROMOTIONAL OFFER';
    subtitle = copyOrHeadline.subtitle || copyOrHeadline.details || '';
    badgeText = copyOrHeadline.badge || 'SPECIAL OFFER';
    badges = copyOrHeadline.badges || [];
    slogan = copyOrHeadline.slogan || customSlogan || 'Professional solutions and guaranteed quality across Lualaba.';
    productImage = productImage || copyOrHeadline.productImage;
    if (copyOrHeadline.theme) theme = copyOrHeadline.theme;
    if (copyOrHeadline.isFullFlyer) isFullFlyer = copyOrHeadline.isFullFlyer;
  } else {
    const parsed = parseMarketingContent(copyOrHeadline, customSlogan);
    headline = parsed.headline;
    subtitle = parsed.subtitle;
    badgeText = badge || parsed.badge;
    badges = parsed.badges;
    slogan = parsed.slogan;
  }

  if (isFullFlyer && productImage && typeof productImage === 'string' && productImage.startsWith('data:image')) {
    return productImage;
  }

  const safeBadge = String(badgeText || 'SPECIAL OFFER').toUpperCase();
  const safeHeadline = String(headline || 'PREMIUM PROMOTION').toUpperCase().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const safeSubtitle = String(subtitle || 'Professional quality and guaranteed turnkey solutions.').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const safeSlogan = String(slogan || 'Professional solutions and guaranteed quality across Lualaba.').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  let productSlotSvg = '';
  if (productImage && typeof productImage === 'string' && productImage.startsWith('data:image')) {
    productSlotSvg = `
      <!-- Center 3D Showcase Pedestal -->
      <ellipse cx="540" cy="635" rx="390" ry="48" fill="#000000" opacity="0.75" />
      <ellipse cx="540" cy="600" rx="360" ry="42" fill="url(#pedestalGrad)" stroke="#f59e0b" stroke-width="2.5" />
      <ellipse cx="540" cy="595" rx="280" ry="24" fill="#000000" opacity="0.85" filter="url(#dropShadow)" />
      
      <!-- Overhead Spotlight -->
      <ellipse cx="540" cy="560" rx="420" ry="220" fill="url(#overheadSpotlight)" />

      <!-- Product Image Centered on Pedestal with Cast Shadow -->
      <image href="${productImage}" x="180" y="270" width="720" height="340" preserveAspectRatio="xMidYMid meet" filter="url(#dropShadow)" />
    `;
  } else {
    productSlotSvg = `
      <!-- Center 3D Showcase Pedestal with Graphic Centerpiece -->
      <ellipse cx="540" cy="635" rx="390" ry="48" fill="#000000" opacity="0.75" />
      <ellipse cx="540" cy="600" rx="360" ry="42" fill="url(#pedestalGrad)" stroke="#f59e0b" stroke-width="2.5" />
      <ellipse cx="540" cy="560" rx="420" ry="220" fill="url(#overheadSpotlight)" />

      <rect x="360" y="460" width="360" height="130" rx="16" fill="#1e293b" stroke="#f59e0b" stroke-width="2" filter="url(#dropShadow)"/>
      <text x="540" y="520" font-family="'Montserrat', Arial, sans-serif" font-weight="900" font-size="26" fill="#f59e0b" text-anchor="middle">CERTIFIED QUALITY</text>
      <text x="540" y="555" font-family="Arial, sans-serif" font-weight="700" font-size="16" fill="#94a3b8" text-anchor="middle">GLOBAL GATE STANDARDS</text>
    `;
  }

  // 4 Feature Badges
  const badge1 = badges[0] || { icon: '⭐', title: 'Guaranteed Quality', sub: 'Certified standards' };
  const badge2 = badges[1] || { icon: '🤝', title: 'Dedicated Support', sub: 'Expert team' };
  const badge3 = badges[2] || { icon: '💰', title: 'Competitive Pricing', sub: 'Best terms' };
  const badge4 = badges[3] || { icon: '📍', title: 'Immediate Availability', sub: 'In stock in Kolwezi' };

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1080" viewBox="0 0 1080 1080">
    <defs>
      <!-- Twilight Sky Gradient -->
      <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#040711"/>
        <stop offset="35%" stop-color="#0b1324"/>
        <stop offset="70%" stop-color="#111c34"/>
        <stop offset="100%" stop-color="#070b16"/>
      </linearGradient>

      <!-- Polished Pedestal Disc Gradient -->
      <linearGradient id="pedestalGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#222f46"/>
        <stop offset="50%" stop-color="#151f32"/>
        <stop offset="100%" stop-color="#0d1320"/>
      </linearGradient>

      <!-- Gold Accent Gradient -->
      <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#f59e0b"/>
        <stop offset="100%" stop-color="#fbbf24"/>
      </linearGradient>

      <!-- Overhead Spotlight Radial Gradient -->
      <radialGradient id="overheadSpotlight" cx="50%" cy="30%" r="60%">
        <stop offset="0%" stop-color="rgba(255, 255, 255, 0.16)"/>
        <stop offset="50%" stop-color="rgba(245, 158, 11, 0.08)"/>
        <stop offset="100%" stop-color="rgba(0, 0, 0, 0)"/>
      </radialGradient>

      <!-- Soft Drop Shadow Filter -->
      <filter id="dropShadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="10" stdDeviation="14" flood-color="#000000" flood-opacity="0.65"/>
      </filter>
    </defs>

    <!-- 1. Universal Commercial Studio Canvas -->
    <rect width="1080" height="1080" fill="url(#skyGrad)"/>
    <rect x="0" y="0" width="1080" height="12" fill="url(#goldGrad)"/>

    <!-- Subtle Architectural Studio Grid Lines -->
    <line x1="120" y1="80" x2="120" y2="700" stroke="rgba(56, 189, 248, 0.05)" stroke-width="1"/>
    <line x1="280" y1="80" x2="280" y2="700" stroke="rgba(56, 189, 248, 0.05)" stroke-width="1"/>
    <line x1="800" y1="80" x2="800" y2="700" stroke="rgba(56, 189, 248, 0.05)" stroke-width="1"/>
    <line x1="960" y1="80" x2="960" y2="700" stroke="rgba(56, 189, 248, 0.05)" stroke-width="1"/>

    <!-- Atmospheric Ambient Glows -->
    <circle cx="180" cy="220" r="180" fill="#f59e0b" opacity="0.08"/>
    <circle cx="900" cy="240" r="200" fill="#38bdf8" opacity="0.07"/>

    <!-- Studio Floor Horizon -->
    <rect x="0" y="560" width="1080" height="160" fill="rgba(15, 23, 42, 0.75)"/>

    <!-- 3. Top Header: Brand & Badge -->
    <g transform="translate(80, 42)">
      <rect x="0" y="0" width="54" height="54" rx="12" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
      <text x="27" y="36" font-family="'Montserrat', 'Arial Black', sans-serif" font-weight="900" font-size="24" fill="#f59e0b" text-anchor="middle">GG</text>
      <text x="70" y="26" font-family="'Montserrat', Arial, sans-serif" font-weight="900" font-size="26" fill="#ffffff" letter-spacing="2">GLOBAL GATE</text>
      <text x="70" y="46" font-family="Arial, sans-serif" font-weight="700" font-size="12" fill="#94a3b8" letter-spacing="4">GENERAL SERVICES</text>
    </g>

    <!-- Badge Pill Top Right -->
    <g transform="translate(720, 44)">
      <rect x="0" y="0" width="280" height="50" rx="25" fill="#ef4444" filter="url(#dropShadow)"/>
      <text x="140" y="32" font-family="'Montserrat', Arial, sans-serif" font-weight="900" font-size="18" fill="#ffffff" text-anchor="middle" letter-spacing="2">${safeBadge}</text>
    </g>

    <!-- 4. Dynamic Headline & Subtitle Ribbon (Angled Slate Glass Bar) -->
    <g transform="translate(80, 125)">
      <rect x="0" y="0" width="920" height="85" rx="16" fill="rgba(15, 23, 42, 0.88)" stroke="#334155" stroke-width="1.5" filter="url(#dropShadow)"/>
      <rect x="16" y="12" width="8" height="60" fill="url(#goldGrad)" rx="3"/>
      <text x="40" y="40" font-family="'Montserrat', 'Arial Black', sans-serif" font-weight="900" font-size="32" fill="#ffffff" letter-spacing="1">${safeHeadline.substring(0, 42)}</text>
      <text x="40" y="70" font-family="Arial, sans-serif" font-weight="500" font-size="18" fill="#94a3b8">${safeSubtitle.substring(0, 78)}</text>
    </g>

    <!-- 5. Center 3D Showcase Slot (Pedestal + Product Photo) -->
    ${productSlotSvg}

    <!-- 6. Callout Slogan Banner (Dynamic) -->
    <text x="540" y="695" font-family="'Montserrat', Arial, sans-serif" font-weight="800" font-size="21" fill="#f8fafc" text-anchor="middle">${safeSlogan}</text>

    <!-- 7. 4 Value Badges (Dynamic Agency Grid) -->
    <g transform="translate(80, 720)">
      <!-- Badge 1 -->
      <rect x="0" y="0" width="215" height="105" rx="14" fill="#131c2e" stroke="#25334d" stroke-width="1.5"/>
      <text x="107" y="34" font-size="18" text-anchor="middle">${badge1.icon || '⭐'}</text>
      <text x="107" y="65" font-family="'Montserrat', Arial, sans-serif" font-weight="800" font-size="14" fill="#ffffff" text-anchor="middle">${badge1.title}</text>
      <text x="107" y="86" font-family="Arial, sans-serif" font-weight="500" font-size="11" fill="#94a3b8" text-anchor="middle">${badge1.sub}</text>

      <!-- Badge 2 -->
      <rect x="235" y="0" width="215" height="105" rx="14" fill="#131c2e" stroke="#25334d" stroke-width="1.5"/>
      <text x="342" y="34" font-size="18" text-anchor="middle">${badge2.icon || '🛡️'}</text>
      <text x="342" y="65" font-family="'Montserrat', Arial, sans-serif" font-weight="800" font-size="14" fill="#ffffff" text-anchor="middle">${badge2.title}</text>
      <text x="342" y="86" font-family="Arial, sans-serif" font-weight="500" font-size="11" fill="#94a3b8" text-anchor="middle">${badge2.sub}</text>

      <!-- Badge 3 -->
      <rect x="470" y="0" width="215" height="105" rx="14" fill="#131c2e" stroke="#25334d" stroke-width="1.5"/>
      <text x="577" y="34" font-size="18" text-anchor="middle">${badge3.icon || '📦'}</text>
      <text x="577" y="65" font-family="'Montserrat', Arial, sans-serif" font-weight="800" font-size="14" fill="#ffffff" text-anchor="middle">${badge3.title}</text>
      <text x="577" y="86" font-family="Arial, sans-serif" font-weight="500" font-size="11" fill="#94a3b8" text-anchor="middle">${badge3.sub}</text>

      <!-- Badge 4 -->
      <rect x="705" y="0" width="215" height="105" rx="14" fill="#131c2e" stroke="#25334d" stroke-width="1.5"/>
      <text x="812" y="34" font-size="18" text-anchor="middle">${badge4.icon || '🚀'}</text>
      <text x="812" y="65" font-family="'Montserrat', Arial, sans-serif" font-weight="800" font-size="14" fill="#ffffff" text-anchor="middle">${badge4.title}</text>
      <text x="812" y="86" font-family="Arial, sans-serif" font-weight="500" font-size="11" fill="#94a3b8" text-anchor="middle">${badge4.sub}</text>
    </g>

    <!-- 8. Bottom Commercial Action Bar -->
    <g transform="translate(80, 845)">
      <!-- Order Now Button -->
      <rect x="0" y="0" width="275" height="74" rx="18" fill="url(#goldGrad)" filter="url(#dropShadow)"/>
      <text x="137" y="46" font-family="'Montserrat', 'Arial Black', sans-serif" font-weight="900" font-size="24" fill="#0f172a" text-anchor="middle" letter-spacing="1">ORDER NOW!</text>

      <!-- WhatsApp Button -->
      <rect x="295" y="0" width="375" height="74" rx="18" fill="#10b981" filter="url(#dropShadow)"/>
      <text x="482" y="46" font-family="'Montserrat', Arial, sans-serif" font-weight="800" font-size="22" fill="#ffffff" text-anchor="middle">💬 0827722222</text>

      <!-- Location Badge -->
      <rect x="690" y="0" width="230" height="74" rx="18" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
      <text x="805" y="34" font-family="Arial, sans-serif" font-weight="bold" font-size="13" fill="#f59e0b" text-anchor="middle">📍 LOCATION</text>
      <text x="805" y="56" font-family="'Montserrat', Arial, sans-serif" font-weight="800" font-size="15" fill="#ffffff" text-anchor="middle">KOLWEZI - DRC</text>
    </g>

    <!-- Corporate Footer Note -->
    <text x="540" y="965" font-family="Arial, sans-serif" font-weight="500" font-size="16" fill="#64748b" text-anchor="middle">Global Gate SARL • Kolwezi, Lualaba Province, DR Congo</text>
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
  const { brief, whatsappNumber, platforms = {}, productImage = null, flyerImage = null, previewOnly = false, theme = 'universal', isFullFlyer = false, customSlogan = '' } = req.body;

  if (!brief || !String(brief).trim()) {
    return res.status(400).json({ success: false, error: 'Promotional brief is required.' });
  }

  const postToFacebook = platforms.facebook !== false;
  const sendWhatsApp = Boolean(platforms.whatsapp && whatsappNumber);
  const sendWhatsAppStatus = Boolean(platforms.whatsappStatus);
  const postToInstagram = Boolean(platforms.instagram);

  const cloudWa = cloudWhatsAppService.getCloudWhatsAppStatus();

  // If Cloud WhatsApp is not ready, check if local agent daemon is listening on port 5055
  if (!cloudWa.isReady) {
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
          theme,
          isFullFlyer,
          previewOnly,
          customSlogan
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

    if (theme) {
      args.push(`--theme=${theme}`);
    }

    if (isFullFlyer) {
      args.push('--full-flyer');
    }

    if (customSlogan && String(customSlogan).trim()) {
      args.push(`--custom-slogan=${String(customSlogan).trim()}`);
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
}

  // Strategy 3: Cloud / Remote environment (24/7 Cloud WhatsApp Master on Railway)
  console.log('[Marketing] Running via Cloud Platform engine. Generating agency-grade flyer...');
  try {
    const copyData = parseMarketingContent(brief, customSlogan);
    const flyerBase64 = generateSvgFlyerBase64(copyData, '', copyData.badge, productImage, theme, isFullFlyer, customSlogan);
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
          slogan: copyData.slogan,
          badges: copyData.badges,
          caption: copyData.caption
        },
        flyerBase64,
        facebook: { success: false, postId: null, postUrl: null, error: null },
        whatsapp: { success: false, error: null },
        instagram: { success: false, postId: null, postUrl: null, error: null }
      });
    }

    // Prepare raster photo buffer (PNG/JPEG) from client rendered flyerImage or productImage
    let photoBuffer = null;
    let photoMime = 'image/png';
    let photoExt = 'png';

    if (flyerImage && typeof flyerImage === 'string' && flyerImage.startsWith('data:image')) {
      const match = flyerImage.match(/^data:(image\/[a-zA-Z0-9+.-]+);base64,(.+)$/);
      if (match) {
        photoMime = match[1];
        photoExt = photoMime.includes('jpeg') || photoMime.includes('jpg') ? 'jpg' : 'png';
        photoBuffer = Buffer.from(match[2], 'base64');
      }
    } else if (productImage && typeof productImage === 'string' && productImage.startsWith('data:image')) {
      const match = productImage.match(/^data:(image\/[a-zA-Z0-9+.-]+);base64,(.+)$/);
      if (match) {
        photoMime = match[1];
        photoExt = photoMime.includes('jpeg') || photoMime.includes('jpg') ? 'jpg' : 'png';
        photoBuffer = Buffer.from(match[2], 'base64');
      }
    }

    // DISPATCH STAGE: User clicked "Approve & Publish"
    let fbResult = null;
    if (postToFacebook && FB_PAGE_ACCESS_TOKEN && FB_PAGE_ID) {
      try {
        let photoId = null;

        if (photoBuffer) {
          try {
            const uploadForm = new FormData();
            uploadForm.append('source', photoBuffer, { filename: `flyer.${photoExt}`, contentType: photoMime });
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

        // Publish to Page Feed
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

    // Step 3: Dispatch via 24/7 Cloud WhatsApp Master (Baileys singleton on Railway)
    let waResult = null;
    if (sendWhatsApp || sendWhatsAppStatus) {
      try {
        const cloudStatus = cloudWhatsAppService.getCloudWhatsAppStatus();
        if (cloudStatus.isReady) {
          console.log('[Marketing] Dispatching flyer via Railway Cloud WhatsApp Master (+243 827 722 222)...');
          const waBuffer = photoBuffer || latestFlyerBuffer;
          if (waBuffer) {
            waResult = await cloudWhatsAppService.dispatchMarketingFlyerCloud({
              imageBuffer: waBuffer,
              caption,
              recipients: whatsappNumber,
              postToStatus: sendWhatsAppStatus
            });
          } else {
            waResult = { success: false, error: 'No valid flyer image buffer found for WhatsApp dispatch.' };
          }
        } else {
          waResult = {
            success: false,
            error: `Cloud WhatsApp Master is ${cloudStatus.status || 'DISCONNECTED'}. Please verify connection in Send Invoices via WhatsApp.`
          };
        }
      } catch (waErr) {
        console.error('[Marketing] Cloud WhatsApp dispatch error:', waErr.message);
        waResult = { success: false, error: waErr.message };
      }
    }

    return res.json({
      success: true,
      brief,
      copy: {
        badge: copyData.badge,
        headline: copyData.headline,
        details: copyData.subtitle || brief,
        slogan: copyData.slogan,
        badges: copyData.badges,
        caption
      },
      flyerBase64,
      facebook: fbResult || { success: false, error: postToFacebook ? 'Facebook publish failed.' : 'Facebook dispatch not selected.' },
      whatsapp: waResult || {
        success: false,
        error: (sendWhatsApp || sendWhatsAppStatus) ? 'WhatsApp dispatch failed' : 'WhatsApp dispatch not selected.'
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
