/**
 * GG Management - Intelligent Language & Text Assistance Utility
 * Provides typo auto-correction, technical terminology standardization,
 * whitespace cleaning, and smart casing for French & English data entry.
 */

export const COMMON_PRESETS = {
  defects: [
    'No Power',
    'Not Charging',
    'Overheating',
    'Motor Blocked',
    'Short Circuit',
    'Abnormal Noise',
    'Water Leak',
    'Gas Leak',
    'Periodic Maintenance',
    'Display Fault',
    'Burnt Coil',
    'Mechanical Breakdown',
    'Low Pressure',
    'Tripping Breaker'
  ],
  appliances: [
    'Air Conditioner',
    'Generator',
    'Bakery Dough Mixer',
    'Electric Oven',
    'Water Pump',
    'Cold Room / Chiller',
    'Electric Motor',
    'Inverter / UPS',
    'Transformer',
    'Ice Machine',
    'Air Compressor',
    'Deep Fryer'
  ],
  actions: [
    'Diagnostic & Inspection OK',
    'Replaced Capacitor',
    'Cleaned & Serviced',
    'Rewired Electrical Connections',
    'Motor Rewound & Tested',
    'Refrigerant Gas Refilled',
    'Replaced Bearings & Belts',
    'Tested & Fully Operational',
    'Calibrated & Adjusted',
    'Replaced Burnt Coil'
  ],
  subjects: [
    'Maintenance & Repair Services',
    'Supply of Electrical Equipment',
    'Troubleshooting & Emergency Repair',
    'Preventive Maintenance Contract',
    'Installation & Commissioning',
    'Technical Inspection & Audit'
  ]
};

// Common bilingual & technical typos encountered during shop/technician data entry
export const TYPO_DICTIONARY = [
  // Multi-word phrases (evaluated first)
  { pattern: /\b(not\s+charch(ing)?|not\s+charg(ing)?|ne\s+charge\s+pas)\b/gi, replacement: 'Not Charging' },
  { pattern: /\b(no\s+powr|no\s+pwer|pas\s+de\s+courant|pas\s+de\s+tension|coupe\s+courant)\b/gi, replacement: 'No Power' },
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

  // Single word typos and common terms
  { pattern: /\b(probl[eèé]me?|problm|prob)\b/gi, replacement: 'Problem' },
  { pattern: /\b(elec|electrique|eletrique)\b/gi, replacement: 'Electrical' },
  { pattern: /\b(maint|maintenace|mientenace|maintenence)\b/gi, replacement: 'Maintenance' },
  { pattern: /\b(reparation|reparer|reparartion)\b/gi, replacement: 'Repair' },
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
  { pattern: /\b(condensateur|condo)\b/gi, replacement: 'Capacitor' },
  { pattern: /\b(roulement|roulements)\b/gi, replacement: 'Bearings' },
  { pattern: /\b(ventilateur|ventillo|ventilo)\b/gi, replacement: 'Ventilator / Fan' },
  { pattern: /\b(surchauffe|overheat|overheating)\b/gi, replacement: 'Overheating' },
  { pattern: /\b(ecran|ecrant)\b/gi, replacement: 'Screen / Display' },
  { pattern: /\b(cablage|cablagge)\b/gi, replacement: 'Wiring' },
  { pattern: /\b(nettoy[eé]|netoyage|nettoyage)\b/gi, replacement: 'Cleaned' },
  { pattern: /\b(remplac[eé]|remplacment|remplacement)\b/gi, replacement: 'Replaced' },
  { pattern: /\b(diagnostique|diagnostic)\b/gi, replacement: 'Diagnostic' },
  { pattern: /\b(operationnel|operationel)\b/gi, replacement: 'Operational' },
  { pattern: /\b(technicien|technicien)\b/gi, replacement: 'Technician' },
  { pattern: /\b(inspection)\b/gi, replacement: 'Inspection' }
];

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
export const correctTypos = (text) => {
  if (!text || typeof text !== 'string') return '';
  let cleaned = text;
  for (const { pattern, replacement } of TYPO_DICTIONARY) {
    cleaned = cleaned.replace(pattern, replacement);
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

  // Clean spacing around commas and periods
  let formatted = trimmed
    .replace(/\s*([,;:])\s*/g, '$1 ')
    .replace(/\s*([.!?])\s*/g, '$1 ');

  // Capitalize start of text and letters following period/exclamation/question mark
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
 * Master polishing function that cleans whitespace, fixes typos, and applies appropriate casing.
 * @param {string} text - Raw input text
 * @param {'sentence'|'title'|'upper'|'none'} mode - Desired casing mode
 */
export const polishText = (text, mode = 'sentence') => {
  if (!text || typeof text !== 'string') return '';
  let result = normalizeSpaces(text);
  result = correctTypos(result);

  if (mode === 'sentence') {
    result = toSentenceCase(result);
  } else if (mode === 'title') {
    result = toTitleCase(result);
  } else if (mode === 'upper') {
    result = toUpperCaseCode(result);
  }

  return result;
};
