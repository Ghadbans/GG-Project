import dayjs from 'dayjs';

export const STANDARD_VEHICLE_COLORS = [
  { name: 'Black', hex: '#1e293b' },
  { name: 'White', hex: '#f8fafc', border: '#cbd5e1' },
  { name: 'Silver', hex: '#94a3b8' },
  { name: 'Grey', hex: '#64748b' },
  { name: 'Blue', hex: '#2563eb' },
  { name: 'Red', hex: '#dc2626' },
  { name: 'Green', hex: '#16a34a' },
  { name: 'Yellow', hex: '#eab308' },
  { name: 'Brown', hex: '#78350f' },
  { name: 'Gold', hex: '#d97706' },
  { name: 'Orange', hex: '#ea580c' },
  { name: 'Beige', hex: '#d4c5b9' },
];

const KNOWN_COLOR_REGEX = /^(black|white|grey|gray|silver|red|blue|green|yellow|brown|gold|orange|beige|noir|blanc|gris|rouge|bleu|vert|jaune)$/i;

export function isColorWord(str) {
  if (!str || typeof str !== 'string') return false;
  const clean = str.trim();
  return KNOWN_COLOR_REGEX.test(clean);
}

export function getEffectiveVehicleColor(car) {
  if (car?.vehicleColor && car.vehicleColor.trim() && car.vehicleColor.trim().toUpperCase() !== 'N/A') {
    return car.vehicleColor.trim();
  }
  if (isColorWord(car?.chassisNumber)) {
    return car.chassisNumber.trim();
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
