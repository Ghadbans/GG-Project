import dayjs from 'dayjs';

export const STANDARD_VEHICLE_COLORS = [
  { name: 'Black', hex: '#1e293b' },
  { name: 'White', hex: '#f8fafc', border: '#cbd5e1' },
  { name: 'Silver', hex: '#94a3b8' },
  { name: 'Grey', hex: '#64748b' },
  { name: 'Dark Grey', hex: '#334155' },
  { name: 'Charcoal', hex: '#374151' },
  { name: 'Olive Green', hex: '#556b2f' },
  { name: 'Green', hex: '#16a34a' },
  { name: 'Navy Blue', hex: '#1e3a8a' },
  { name: 'Dark Blue', hex: '#1d4ed8' },
  { name: 'Blue', hex: '#2563eb' },
  { name: 'Light Blue', hex: '#38bdf8' },
  { name: 'Red', hex: '#dc2626' },
  { name: 'Burgundy', hex: '#881337' },
  { name: 'Yellow', hex: '#eab308' },
  { name: 'Brown', hex: '#78350f' },
  { name: 'Bronze', hex: '#92400e' },
  { name: 'Gold', hex: '#d97706' },
  { name: 'Orange', hex: '#ea580c' },
  { name: 'Beige', hex: '#d4c5b9' },
  { name: 'Champagne', hex: '#fef3c7', border: '#d97706' },
];

const KNOWN_COLOR_REGEX = /^(olive\s*green|navy\s*blue|dark\s*(blue|grey|gray|green|red)|light\s*(blue|grey|gray|green)|pearl\s*white|matte\s*black|black|white|grey|gray|silver|red|blue|green|yellow|brown|gold|orange|beige|olive|navy|charcoal|burgundy|bronze|champagne|noir|blanc|gris|rouge|bleu|vert|jaune)$/i;

export function isColorWord(str) {
  if (!str || typeof str !== 'string') return false;
  const clean = str.trim();
  return KNOWN_COLOR_REGEX.test(clean);
}

export function resolveColorHex(colorName) {
  if (!colorName || typeof colorName !== 'string') {
    return { hex: '#64748b', border: 'transparent' };
  }
  const clean = colorName.trim().toLowerCase();

  // 1. Direct standard list match
  const matched = STANDARD_VEHICLE_COLORS.find(c => c.name.toLowerCase() === clean);
  if (matched) {
    return { hex: matched.hex, border: matched.border || 'transparent' };
  }

  // 2. Compound and semantic color keyword detection
  if (clean.includes('olive')) return { hex: '#556b2f', border: 'transparent' };
  if (clean.includes('navy') || clean.includes('dark blue')) return { hex: '#1e3a8a', border: 'transparent' };
  if (clean.includes('light blue') || clean.includes('sky')) return { hex: '#38bdf8', border: 'transparent' };
  if (clean.includes('blue') || clean.includes('bleu')) return { hex: '#2563eb', border: 'transparent' };
  if (clean.includes('green') || clean.includes('vert')) return { hex: '#16a34a', border: 'transparent' };
  if (clean.includes('burgundy') || clean.includes('wine')) return { hex: '#881337', border: 'transparent' };
  if (clean.includes('red') || clean.includes('rouge')) return { hex: '#dc2626', border: 'transparent' };
  if (clean.includes('dark grey') || clean.includes('dark gray') || clean.includes('charcoal')) return { hex: '#334155', border: 'transparent' };
  if (clean.includes('grey') || clean.includes('gray') || clean.includes('gris')) return { hex: '#64748b', border: 'transparent' };
  if (clean.includes('silver') || clean.includes('argent')) return { hex: '#94a3b8', border: 'transparent' };
  if (clean.includes('white') || clean.includes('blanc') || clean.includes('pearl')) return { hex: '#f8fafc', border: '#cbd5e1' };
  if (clean.includes('black') || clean.includes('noir')) return { hex: '#0f172a', border: 'transparent' };
  if (clean.includes('gold') || clean.includes('or')) return { hex: '#d97706', border: 'transparent' };
  if (clean.includes('yellow') || clean.includes('jaune')) return { hex: '#eab308', border: 'transparent' };
  if (clean.includes('brown') || clean.includes('marron') || clean.includes('bronze')) return { hex: '#78350f', border: 'transparent' };
  if (clean.includes('orange')) return { hex: '#ea580c', border: 'transparent' };
  if (clean.includes('beige') || clean.includes('champagne')) return { hex: '#d4c5b9', border: 'transparent' };

  return { hex: '#64748b', border: 'transparent' };
}

export function getEffectiveVehicleColor(car) {
  const vColor = (car?.vehicleColor || '').trim();
  const cNumber = (car?.chassisNumber || '').trim();

  // If chassisNumber is a more specific color (e.g. "OLIVE GREEN" vs "GREEN" or vehicleColor is empty)
  if (isColorWord(cNumber)) {
    if (!vColor || vColor.toUpperCase() === 'N/A') {
      return cNumber;
    }
    // If chassis has specific color like "Olive Green" while vehicleColor is generic "Green"
    if (cNumber.toLowerCase().includes(vColor.toLowerCase()) && cNumber.length > vColor.length) {
      return cNumber;
    }
  }

  if (vColor && vColor.toUpperCase() !== 'N/A') {
    return vColor;
  }

  if (isColorWord(cNumber)) {
    return cNumber;
  }

  return '';
}

export const MANDATORY_DOCS_CAR = [
  {
    key: 'CARTE_ROSE',
    label: 'Carte Rose',
    officialName: 'CARTE ROSE (VEHICLE REGISTRATION CARD)',
    match: /carte\s*rose|registration/i
  },
  {
    key: 'CONTROLE_TECHNIQUE',
    label: 'Contrôle Technique',
    officialName: 'CONTRÔLE TECHNIQUE (ROADWORTHINESS CERTIFICATE)',
    match: /contr[oô]le\s*technique|roadworthiness/i
  },
  {
    key: 'STATIONNEMENT',
    label: 'Stationnement',
    officialName: 'STATIONNEMENT',
    match: /stationnement|parking/i
  },
  {
    key: 'VIGNETTE',
    label: 'Vignette',
    officialName: 'VIGNETTE',
    match: /vignette|road\s*tax/i
  },
  {
    key: 'ASSURANCE',
    label: 'Attestation d\'Assurance',
    officialName: 'ATTESTATION D\'ASSURANCE (INSURANCE CERTIFICATE)',
    match: /assurance|insurance/i
  },
];

export const MANDATORY_DOCS_TRUCK = [
  ...MANDATORY_DOCS_CAR,
  {
    key: 'AUTORISATION_TRANSPORT',
    label: 'Autorisation Transport',
    officialName: 'AUTORISATION TRANSPORT (ONLY FOR TRUCKS)',
    match: /autorisation\s*transport|transport\s*authorization/i
  },
];

/**
 * Checks whether a vehicle is classified as a truck based on its make and model.
 */
export function isTruckVehicle(car) {
  const combined = `${car?.carMake || ''} ${car?.carModel || ''}`.toUpperCase();
  return /(TRUCK|CAMION|TRAILER|BENNE|TRACTEUR|SHACMAN|HOWO|ACTROS)/i.test(combined);
}

/**
 * Evaluates the legal document compliance of a fleet vehicle.
 * Rules:
 * 1. If any mandatory document is missing -> MISSING DOCS (Red)
 * 2. If any mandatory document is UNPAID (isPaid !== true) -> EXPIRED / UNPAID (Red)
 * 3. If any mandatory document has expired (diff < 0) -> EXPIRED (Red)
 * 4. If all exist and are paid, but any expires within 7 days -> EXPIRING SOON (Orange)
 * 5. If all exist, are paid, and valid > 7 days -> OK (Green)
 */
export function evaluateFleetCompliance(car) {
  const docs = Array.isArray(car?.documents) ? car.documents : [];
  const requiredList = isTruckVehicle(car) ? MANDATORY_DOCS_TRUCK : MANDATORY_DOCS_CAR;
  const now = dayjs();

  const missingDocs = [];
  const unpaidDocs = [];
  const expiredDocs = [];
  const expiringSoonDocs = [];
  const checklist = [];

  for (const req of requiredList) {
    const matches = docs.filter(d => req.match.test(d.documentName || ''));
    if (matches.length === 0) {
      missingDocs.push(req.label);
      checklist.push({
        key: req.key,
        label: req.label,
        officialName: req.officialName,
        isPresent: false,
        status: 'MISSING',
        badgeText: 'MISSING',
        color: '#d32f2f',
        bgColor: '#ffebee',
        doc: null,
        isPaid: false,
        diffDays: null,
        expiryDate: null,
      });
      continue;
    }

    // Find the latest document for this required paper by expiryDate
    let latest = matches[0];
    for (let i = 1; i < matches.length; i++) {
      if (dayjs(matches[i].expiryDate).isAfter(dayjs(latest.expiryDate))) {
        latest = matches[i];
      }
    }

    const isPaid = latest.isPaid === true || String(latest.isPaid).toLowerCase() === 'true';
    const expDate = dayjs(latest.expiryDate);
    const diffDays = expDate.diff(now, 'day');

    let itemStatus = 'VALID';
    let badgeText = 'VALID & PAID';
    let badgeColor = '#2e7d32';
    let badgeBgColor = '#e8f5e9';

    if (!isPaid) {
      unpaidDocs.push(req.label);
      itemStatus = 'UNPAID';
      badgeText = 'UNPAID';
      badgeColor = '#d32f2f';
      badgeBgColor = '#ffebee';
    } else if (diffDays < 0) {
      expiredDocs.push(req.label);
      itemStatus = 'EXPIRED';
      badgeText = `EXPIRED (${Math.abs(diffDays)}d ago)`;
      badgeColor = '#d32f2f';
      badgeBgColor = '#ffebee';
    } else if (diffDays <= 7) {
      const dayText = diffDays <= 0 ? 'today' : `${diffDays}d`;
      expiringSoonDocs.push(`${req.label} (${dayText})`);
      itemStatus = 'EXPIRING_SOON';
      badgeText = `EXPIRING (${dayText})`;
      badgeColor = '#ed6c02';
      badgeBgColor = '#fff3e0';
    }

    checklist.push({
      key: req.key,
      label: req.label,
      officialName: req.officialName,
      isPresent: true,
      status: itemStatus,
      badgeText,
      color: badgeColor,
      bgColor: badgeBgColor,
      doc: latest,
      isPaid,
      diffDays,
      expiryDate: latest.expiryDate,
    });
  }

  // Also check non-mandatory custom documents recorded on the vehicle
  docs.forEach(doc => {
    const isCovered = requiredList.some(r => r.match.test(doc.documentName || ''));
    if (!isCovered) {
      const expDate = dayjs(doc.expiryDate);
      const diffDays = expDate.diff(now, 'day');
      const isPaid = doc.isPaid === true || String(doc.isPaid).toLowerCase() === 'true';

      if (!isPaid) {
        if (!unpaidDocs.includes(doc.documentName)) unpaidDocs.push(doc.documentName);
      } else if (diffDays < 0) {
        if (!expiredDocs.includes(doc.documentName)) expiredDocs.push(doc.documentName);
      } else if (diffDays <= 7) {
        expiringSoonDocs.push(`${doc.documentName} (${diffDays <= 0 ? 'today' : diffDays + 'd'})`);
      }
    }
  });

  // Calculate descriptive status for UI pill badges
  if (docs.length === 0) {
    return {
      status: 'NO DOCS',
      color: '#d32f2f',
      bgColor: '#ffebee',
      tooltip: `No documents recorded. Mandatory: ${requiredList.map(r => r.label).join(', ')}`,
      severity: 'error',
      missingDocs,
      unpaidDocs,
      expiredDocs,
      expiringSoonDocs,
      checklist,
      requiredList
    };
  }

  if (missingDocs.length > 0) {
    const statusText = missingDocs.length === 1
      ? `MISSING: ${missingDocs[0].toUpperCase()}`
      : `MISSING: ${missingDocs[0].toUpperCase()} +${missingDocs.length - 1}`;

    return {
      status: statusText,
      color: '#d32f2f',
      bgColor: '#ffebee',
      tooltip: `Missing Mandatory Documents: ${missingDocs.join(', ')}`,
      severity: 'error',
      missingDocs,
      unpaidDocs,
      expiredDocs,
      expiringSoonDocs,
      checklist,
      requiredList
    };
  }

  if (unpaidDocs.length > 0) {
    const statusText = unpaidDocs.length === 1
      ? `UNPAID: ${unpaidDocs[0].toUpperCase()}`
      : `UNPAID (${unpaidDocs.length} DOCS)`;

    return {
      status: statusText,
      color: '#d32f2f',
      bgColor: '#ffebee',
      tooltip: `Unpaid Documents: ${unpaidDocs.join(', ')}`,
      severity: 'error',
      missingDocs,
      unpaidDocs,
      expiredDocs,
      expiringSoonDocs,
      checklist,
      requiredList
    };
  }

  if (expiredDocs.length > 0) {
    const statusText = expiredDocs.length === 1
      ? `EXPIRED: ${expiredDocs[0].toUpperCase()}`
      : `EXPIRED (${expiredDocs.length} DOCS)`;

    return {
      status: statusText,
      color: '#d32f2f',
      bgColor: '#ffebee',
      tooltip: `Expired Documents: ${expiredDocs.join(', ')}`,
      severity: 'error',
      missingDocs,
      unpaidDocs,
      expiredDocs,
      expiringSoonDocs,
      checklist,
      requiredList
    };
  }

  if (expiringSoonDocs.length > 0) {
    const statusText = expiringSoonDocs.length === 1
      ? `EXPIRING: ${expiringSoonDocs[0].toUpperCase()}`
      : `EXPIRING (${expiringSoonDocs.length} DOCS)`;

    return {
      status: statusText,
      color: '#ed6c02',
      bgColor: '#fff3e0',
      tooltip: `Expiring Soon: ${expiringSoonDocs.join(', ')}`,
      severity: 'warning',
      missingDocs,
      unpaidDocs,
      expiredDocs,
      expiringSoonDocs,
      checklist,
      requiredList
    };
  }

  return {
    status: 'OK',
    color: '#2e7d32',
    bgColor: '#e8f5e9',
    tooltip: 'All mandatory documents active & paid',
    severity: 'success',
    missingDocs,
    unpaidDocs,
    expiredDocs,
    expiringSoonDocs,
    checklist,
    requiredList
  };
}
