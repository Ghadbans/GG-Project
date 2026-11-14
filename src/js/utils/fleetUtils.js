import dayjs from 'dayjs';

export const MANDATORY_DOCS_CAR = [
  { key: 'CARTE_ROSE', label: 'Carte Rose', match: /carte\s*rose|registration/i },
  { key: 'CONTROLE_TECHNIQUE', label: 'Contrôle Technique', match: /contr[oô]le\s*technique|roadworthiness/i },
  { key: 'STATIONNEMENT', label: 'Stationnement', match: /stationnement|parking/i },
  { key: 'VIGNETTE', label: 'Vignette', match: /vignette|road\s*tax/i },
  { key: 'ASSURANCE', label: 'Attestation d\'Assurance', match: /assurance|insurance/i },
];

export const MANDATORY_DOCS_TRUCK = [
  ...MANDATORY_DOCS_CAR,
  { key: 'AUTORISATION_TRANSPORT', label: 'Autorisation Transport', match: /autorisation\s*transport|transport\s*authorization/i },
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
 * 2. If any mandatory document is UNPAID (isPaid !== true) -> EXPIRED (Red)
 * 3. If any mandatory document has expired (diff < 0) -> EXPIRED (Red)
 * 4. If all exist and are paid, but any expires within 7 days -> EXPIRING SOON (Orange)
 * 5. If all exist, are paid, and valid > 7 days -> OK (Green)
 */
export function evaluateFleetCompliance(car) {
  const docs = Array.isArray(car?.documents) ? car.documents : [];
  const requiredList = isTruckVehicle(car) ? MANDATORY_DOCS_TRUCK : MANDATORY_DOCS_CAR;
  const now = dayjs();

  if (docs.length === 0) {
    return {
      status: 'NO DOCS',
      color: '#d32f2f',
      bgColor: '#ffebee',
      tooltip: `No documents recorded. Mandatory: ${requiredList.map(r => r.label).join(', ')}`,
      severity: 'error'
    };
  }

  const missingDocs = [];
  const unpaidDocs = [];
  const expiredDocs = [];
  const expiringSoonDocs = [];

  for (const req of requiredList) {
    const matches = docs.filter(d => req.match.test(d.documentName || ''));
    if (matches.length === 0) {
      missingDocs.push(req.label);
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

    if (!isPaid) {
      unpaidDocs.push(req.label);
    } else if (diffDays < 0) {
      expiredDocs.push(req.label);
    } else if (diffDays <= 7) {
      expiringSoonDocs.push(`${req.label} (${diffDays <= 0 ? 'today' : diffDays + 'd'})`);
    }
  }

  // Also verify any additional custom documents recorded on the vehicle
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

  if (missingDocs.length > 0) {
    return {
      status: 'MISSING DOCS',
      color: '#d32f2f',
      bgColor: '#ffebee',
      tooltip: `Missing: ${missingDocs.join(', ')}`,
      severity: 'error'
    };
  }

  if (unpaidDocs.length > 0 || expiredDocs.length > 0) {
    const reasons = [
      ...(unpaidDocs.length > 0 ? [`Unpaid: ${unpaidDocs.join(', ')}`] : []),
      ...(expiredDocs.length > 0 ? [`Expired: ${expiredDocs.join(', ')}`] : [])
    ];
    return {
      status: 'EXPIRED',
      color: '#d32f2f',
      bgColor: '#ffebee',
      tooltip: reasons.join(' | '),
      severity: 'error'
    };
  }

  if (expiringSoonDocs.length > 0) {
    return {
      status: 'EXPIRING SOON',
      color: '#ed6c02',
      bgColor: '#fff3e0',
      tooltip: `Expiring Soon: ${expiringSoonDocs.join(', ')}`,
      severity: 'warning'
    };
  }

  return {
    status: 'OK',
    color: '#2e7d32',
    bgColor: '#e8f5e9',
    tooltip: 'All mandatory documents active & paid',
    severity: 'success'
  };
}
