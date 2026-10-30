/**
 * GG Management - Intelligent Language & Text Assistance Utility
 * Provides typo auto-correction, technical terminology standardization,
 * whitespace cleaning, and universal CAPITAL LETTERS formatting.
 */

export const COMMON_PRESETS = {
  defects: [
    'NO POWER',
    'NOT CHARGING',
    'OVERHEATING',
    'MOTOR BLOCKED',
    'SHORT CIRCUIT',
    'ABNORMAL NOISE',
    'WATER LEAK',
    'GAS LEAK',
    'PERIODIC MAINTENANCE',
    'DISPLAY FAULT',
    'BURNT COIL',
    'MECHANICAL BREAKDOWN',
    'LOW PRESSURE',
    'TRIPPING BREAKER',
    'INTERMITTENT ON/OFF FAULT',
    'VIDEO SIGNAL LOST / FLICKERING',
    'SENSOR / THERMOSTAT ERROR',
    'BLOWN FUSE'
  ],
  appliances: [
    'AIR CONDITIONER',
    'GENERATOR',
    'CCTV SECURITY CAMERAS',
    'BAKERY DOUGH MIXER',
    'ELECTRIC OVEN',
    'WATER PUMP',
    'COLD ROOM / CHILLER',
    'ELECTRIC MOTOR',
    'INVERTER / UPS',
    'TRANSFORMER',
    'ICE MACHINE',
    'AIR COMPRESSOR',
    'DEEP FRYER',
    'REFRIGERATOR / FREEZER',
    'ELECTRICAL CONTROL PANEL'
  ],
  actions: [
    'DIAGNOSTIC & INSPECTION OK',
    'REPLACED CAPACITOR',
    'CLEANED & SERVICED',
    'REWIRED ELECTRICAL CONNECTIONS',
    'MOTOR REWOUND & TESTED',
    'REFRIGERANT GAS REFILLED',
    'REPLACED BEARINGS & BELTS',
    'TESTED & FULLY OPERATIONAL',
    'CALIBRATED & ADJUSTED',
    'REPLACED BURNT COIL',
    'FIRMWARE UPDATED & SYSTEM RESET'
  ],
  subjects: [
    'MAINTENANCE & REPAIR SERVICES',
    'SUPPLY OF ELECTRICAL EQUIPMENT',
    'TROUBLESHOOTING & EMERGENCY REPAIR',
    'PREVENTIVE MAINTENANCE CONTRACT',
    'INSTALLATION & COMMISSIONING',
    'TECHNICAL INSPECTION & AUDIT',
    'SECURITY & SURVEILLANCE SYSTEM SERVICE'
  ]
};

// Common bilingual & technical typos encountered during shop/technician data entry
export const TYPO_DICTIONARY = [
  // Multi-word phrases (evaluated first)
  { pattern: /\b(not\s+charch(ing)?|not\s+charg(ing)?|ne\s+charge\s+pas)\b/gi, replacement: 'Not Charging' },
  { pattern: /\b(no\s+powr(e)?|no\s+pwer|no\s+power|pas\s+de\s+courant|pas\s+de\s+tension|coupe\s+courant|ne\s+s['\s]?allume\s+pas)\b/gi, replacement: 'No Power' },
  { pattern: /\b(court[\s\-_]circuit|court[\s\-_]circui)\b/gi, replacement: 'Short Circuit' },
  { pattern: /\b(four\s+elec(trique)?)\b/gi, replacement: 'Electric Oven' },
  { pattern: /\b(pompe\s+a\s+eau|pompe\s+d['\s]?eau)\b/gi, replacement: 'Water Pump' },
  { pattern: /\b(groupe\s+electro(gene)?)\b/gi, replacement: 'Generator' },
  { pattern: /\b(chambre\s+froide)\b/gi, replacement: 'Cold Room' },
  { pattern: /\b(fuite\s+d['\s]?eau)\b/gi, replacement: 'Water Leak' },
  { pattern: /\b(fuite\s+de\s+gaz)\b/gi, replacement: 'Gas Leak' },
  { pattern: /\b(bruit\s+anormal|bruyant)\b/gi, replacement: 'Abnormal Noise' },
  { pattern: /\b(moteur\s+bloqu[eé])\b/gi, replacement: 'Motor Blocked' },
  { pattern: /\b(entretien\s+periodique)\b/gi, replacement: 'Periodic Maintenance' },
  { pattern: /\b(ne\s+marche\s+pas|marche\s+pas|not\s+work(ing)?)\b/gi, replacement: 'Not Working' },
  { pattern: /\b(tset\s+wronge?|test\s+wronge?|tste\s+wronge?)\b/gi, replacement: 'Test Wrong' },
  { pattern: /\b(lfie\s+ihis\s+good|life\s+ihis\s+good|lfie\s+is\s+good)\b/gi, replacement: 'Life Is Good' },
  { pattern: /\b(doing\s+on[\s\-_/]*off|fait\s+on[\s\-_/]*off)\b/gi, replacement: 'Intermittent ON/OFF' },
  { pattern: /\b(on[\s\-_/]+off)\b/gi, replacement: 'ON/OFF' },
  { pattern: /\b(en\s+panne|hors\s+service)\b/gi, replacement: 'Out Of Order' },

  // Single word typos and common terms
  { pattern: /\b(tste|tset|tesst|tst)\b/gi, replacement: 'Test' },
  { pattern: /\b(lfie|lyfe)\b/gi, replacement: 'Life' },
  { pattern: /\b(ihis|isi)\b/gi, replacement: 'Is' },
  { pattern: /\b(machin|mashin|machiene|machne)\b/gi, replacement: 'Machine' },
  { pattern: /\b(camra|camer|kamra)\b/gi, replacement: 'Camera' },
  { pattern: /\b(cctv|cc\s*tv)\b/gi, replacement: 'CCTV' },
  { pattern: /\b(wronge|rong|wrog|wrng)\b/gi, replacement: 'Wrong' },
  { pattern: /\b(powre|powr|pwer|poer)\b/gi, replacement: 'Power' },
  { pattern: /\b(probl[eèé]me?|problm|prob)\b/gi, replacement: 'Problem' },
  { pattern: /\b(elec|electrique|eletrique)\b/gi, replacement: 'Electrical' },
  { pattern: /\b(maint|maintenace|mientenace|maintenence)\b/gi, replacement: 'Maintenance' },
  { pattern: /\b(reparation|reparer|reparartion|repar)\b/gi, replacement: 'Repair' },
  { pattern: /\b(moteur|motuer|motteur)\b/gi, replacement: 'Motor' },
  { pattern: /\b(batteri|batterie|baterie)\b/gi, replacement: 'Battery' },
  { pattern: /\b(climatiseur|clim)\b/gi, replacement: 'Air Conditioner' },
  { pattern: /\b(generateur|groupe)\b/gi, replacement: 'Generator' },
  { pattern: /\b(boulangerie)\b/gi, replacement: 'Bakery' },
  { pattern: /\b(petrin)\b/gi, replacement: 'Dough Mixer' },
  { pattern: /\b(compresseur|compresor)\b/gi, replacement: 'Compressor' },
  { pattern: /\b(disjoncteur|disjonctuer)\b/gi, replacement: 'Circuit Breaker' },
  { pattern: /\b(transformateur|transfo)\b/gi, replacement: 'Transformer' },
  { pattern: /\b(bobinage|bobinne)\b/gi, replacement: 'Coil Winding' },
  { pattern: /\b(condensateur|condo|capaciter)\b/gi, replacement: 'Capacitor' },
  { pattern: /\b(roulement|roulements)\b/gi, replacement: 'Bearings' },
  { pattern: /\b(ventilateur|ventillo|ventilo)\b/gi, replacement: 'Ventilator / Fan' },
  { pattern: /\b(surchauffe|overheat|overheating)\b/gi, replacement: 'Overheating' },
  { pattern: /\b(ecran|ecrant)\b/gi, replacement: 'Screen / Display' },
  { pattern: /\b(cablage|cablagge)\b/gi, replacement: 'Wiring' },
  { pattern: /\b(nettoy[eé]|netoyage|nettoyage|clean|cleand)\b/gi, replacement: 'Cleaned' },
  { pattern: /\b(remplac[eé]|remplacment|remplacement|chnge)\b/gi, replacement: 'Replaced' },
  { pattern: /\b(diagnostique|diagnostic)\b/gi, replacement: 'Diagnostic' },
  { pattern: /\b(operationnel|operationel)\b/gi, replacement: 'Operational' },
  { pattern: /\b(technicien|technition)\b/gi, replacement: 'Technician' },
  { pattern: /\b(inspection)\b/gi, replacement: 'Inspection' },
  { pattern: /\b(servis|service|servce)\b/gi, replacement: 'Service' },
  { pattern: /\b(coup|coupe|coupure)\b/gi, replacement: 'Cut' },
  { pattern: /\b(casse|casser|casses|brokn)\b/gi, replacement: 'Broken' },
  { pattern: /\b(brule|brulee|bruler|burnd)\b/gi, replacement: 'Burnt' },
  { pattern: /\b(bloque|bloquer|bloq)\b/gi, replacement: 'Blocked' },
  { pattern: /\b(fuite|fuit)\b/gi, replacement: 'Leak' },
  { pattern: /\b(charg|charch|chargeur)\b/gi, replacement: 'Charging' },
  { pattern: /\b(costomer|custmer|customr|cleint|clien)\b/gi, replacement: 'Customer' },
  { pattern: /\b(suplier|suppliar|fourniseur|fournissur)\b/gi, replacement: 'Supplier' },
  { pattern: /\b(invocie|invoce|factur)\b/gi, replacement: 'Invoice' },
  { pattern: /\b(quattion|quotatn|devis)\b/gi, replacement: 'Quotation' },
  { pattern: /\b(payemnt|paymnt|peymnt)\b/gi, replacement: 'Payment' },
  { pattern: /\b(expens|expeses|depense)\b/gi, replacement: 'Expense' },
  { pattern: /\b(projct|progect|porject)\b/gi, replacement: 'Project' },
  { pattern: /\b(employe|emploe|personel)\b/gi, replacement: 'Employee' },
  { pattern: /\b(discripton|descrip|descriptoin|descreption)\b/gi, replacement: 'Description' },
  { pattern: /\b(addres|adres|adress)\b/gi, replacement: 'Address' },
  { pattern: /\b(waranty|warenty|woranty|garanti|garantie)\b/gi, replacement: 'Warranty' },
  { pattern: /\b(seriel|serail|seral)\b/gi, replacement: 'Serial' },
  { pattern: /\b(recived|recieve|recu)\b/gi, replacement: 'Received' },
  { pattern: /\b(deliverd|delivry|livraison)\b/gi, replacement: 'Delivered' },
  { pattern: /\b(compleat|complet|termnated)\b/gi, replacement: 'Completed' },
  { pattern: /\b(canceld|cancelld|annule)\b/gi, replacement: 'Cancelled' },
  { pattern: /\b(urgent|urgant)\b/gi, replacement: 'Urgent' },
  { pattern: /\b(approvd|aprovd|aprouved)\b/gi, replacement: 'Approved' },
  { pattern: /\b(requst|reqest|demande)\b/gi, replacement: 'Request' },
  { pattern: /\b(quantite|qantity|qte|qty)\b/gi, replacement: 'Quantity' },
  { pattern: /\b(balanc|balnce|solde)\b/gi, replacement: 'Balance' },
  { pattern: /\b(disscount|discont|remise)\b/gi, replacement: 'Discount' },
  { pattern: /\b(shiping|shiped)\b/gi, replacement: 'Shipping' }
];

/**
 * Checks if a string contains any recognized typo, unnormalized spacing,
 * or non-capitalized letters (when user prefers universal CAPITAL LETTERS).
 * @param {string} text - Raw input string
 * @param {'upper'|'sentence'|'title'|'none'} mode - Current mode (defaults to 'upper')
 * @returns {boolean} true if typo or unpolished formatting is detected
 */
export const hasTypo = (text, mode = 'upper') => {
  if (!text || typeof text !== 'string' || !text.trim()) return false;
  
  // 1. Check against dictionary typo patterns
  for (const { pattern } of TYPO_DICTIONARY) {
    if (new RegExp(pattern.source, 'i').test(text)) return true;
  }

  // 2. 3+ identical consecutive letters (e.g. "tesst", "wronnng", "camerra")
  if (/(.)\1{2,}/i.test(text)) return true;

  // 3. Lowercase letters when in uppercase mode (user requested ALL CAPS entry)
  if (mode === 'upper' && /[a-z\u00E0-\u00FC]/.test(text)) return true;

  // 4. Repeated spaces or unnormalized spacing
  if (/\s{2,}/.test(text) || text !== text.trim()) return true;

  return false;
};

/**
 * Normalizes repeated spaces, non-breaking spaces (\u00a0), and tabs into a single ASCII space.
 */
export const normalizeSpaces = (text) => {
  if (!text || typeof text !== 'string') return '';
  return text.replace(/[\s\u00a0]+/g, ' ').trim();
};

/**
 * Corrects common typos and non-standard technical phrases based on the GG dictionary.
 */
export const correctTypos = (text, forceUpper = true) => {
  if (!text || typeof text !== 'string') return '';
  let cleaned = text;
  for (const { pattern, replacement } of TYPO_DICTIONARY) {
    cleaned = cleaned.replace(pattern, (match) => {
      if (forceUpper || match === match.toUpperCase()) {
        return replacement.toUpperCase();
      }
      return replacement;
    });
  }
  return cleaned;
};

/**
 * Capitalizes the first letter of each sentence and spaces after punctuation properly.
 */
export const toSentenceCase = (text) => {
  if (!text || typeof text !== 'string') return '';
  const trimmed = normalizeSpaces(text);
  if (!trimmed) return '';

  let formatted = trimmed
    .replace(/\s*([,;:])\s*/g, '$1 ')
    .replace(/\s*([.!?])\s*/g, '$1 ');

  formatted = formatted.replace(/(^|[.!?]\s+)([a-z\u00E0-\u00FC])/g, (match, prefix, char) => {
    return prefix + char.toUpperCase();
  });

  return formatted.trim();
};

/**
 * Converts text to Title Case (capitalizing every word, ideal for Names / Customers / Employees).
 */
export const toTitleCase = (text) => {
  if (!text || typeof text !== 'string') return '';
  const trimmed = normalizeSpaces(text);
  return trimmed.replace(/\b([a-z\u00E0-\u00FC])/g, (char) => char.toUpperCase());
};

/**
 * Converts codes, model numbers, plates, and serial numbers to standardized UPPERCASE.
 */
export const toUpperCaseCode = (text) => {
  if (!text || typeof text !== 'string') return '';
  return normalizeSpaces(text).toUpperCase();
};

/**
 * Master polishing function that cleans whitespace, fixes typos, and standardizes to CAPITAL LETTERS.
 * Defaults to 'upper' mode as preferred by the user across the entire management system.
 * @param {string} text - Raw input text
 * @param {'upper'|'sentence'|'title'|'none'} mode - Desired casing mode (defaults to 'upper')
 */
export const polishText = (text, mode = 'upper') => {
  if (!text || typeof text !== 'string') return '';
  let result = normalizeSpaces(text);
  const isUpper = mode === 'upper';
  result = correctTypos(result, isUpper);

  if (mode === 'upper') {
    result = toUpperCaseCode(result);
  } else if (mode === 'title') {
    result = toTitleCase(result);
  } else if (mode === 'sentence') {
    result = toSentenceCase(result);
  }

  return result;
};

