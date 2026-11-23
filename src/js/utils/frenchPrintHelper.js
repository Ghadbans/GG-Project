/**
 * French / English Print Labels & Number-to-Words Helper
 * Used by Quotation (EstimateViewAdminAll) and Invoice (InvoiceViewAdminAll) print views.
 * Item names and item descriptions are intentionally preserved in English.
 */

export const PRINT_LABELS = {
  en: {
    invoiceTitle: 'INVOICE',
    quotationTitle: 'QUOTATION',
    billTo: 'Bill To',
    invoiceNo: 'Invoice #',
    quotationNo: 'Quotation #',
    date: 'Date',
    dueDate: 'Due Date',
    subject: 'Subject',
    defect: 'Defect',
    action: 'ACTION',
    note: 'NOTE',
    colIndex: '#',
    colItem: 'ITEM',
    colDescription: 'DESCRIPTION',
    colQty: 'QTY',
    colRate: 'RATE',
    colDiscount: 'DISCOUNT',
    colTotal: 'TOTAL',
    thanks: 'THANKS FOR YOUR BUSINESS.',
    subTotal: 'SUB TOTAL',
    taxInclusive: '(TAX INCLUSIVE)',
    taxExcluded: '(TAX EXCLUDED)',
    shipping: 'Shipping',
    tvaLabel: 'TVA @ 16%',
    total: 'TOTAL',
    amountPaid: 'AMOUNT PAID',
    balanceDue: 'BALANCE DUE',
    totalInWords: 'TOTAL IN WORDS',
    bank: 'BANK',
    entitled: 'ENTITLED',
    bankAccount: 'BANK ACCOUNT',
    codeSwift: 'CODE SWIFT',
    termsTitle: 'TERMS & CONDITIONS',
    taxIncludedLabel: '(Tax Inclusive)',
    taxExcludedLabel: '(Tax Excluded)',
  },
  fr: {
    invoiceTitle: 'FACTURE',
    quotationTitle: 'DEVIS',
    billTo: 'Facturer à',
    invoiceNo: 'Facture N°',
    quotationNo: 'Devis N°',
    date: 'Date',
    dueDate: "Date d'échéance",
    subject: 'Objet',
    defect: 'Défaut',
    action: 'ACTION',
    note: 'NOTE',
    colIndex: 'N°',
    colItem: 'ARTICLE',
    colDescription: 'DESCRIPTION',
    colQty: 'QTÉ',
    colRate: 'PRIX UNIT.',
    colDiscount: 'REMISE',
    colTotal: 'TOTAL',
    thanks: 'MERCI POUR VOTRE CONFIANCE.',
    subTotal: 'SOUS-TOTAL',
    taxInclusive: '(TVA INCLUSE)',
    taxExcluded: '(HORS TAXE)',
    shipping: 'Livraison',
    tvaLabel: 'TVA @ 16%',
    total: 'TOTAL',
    amountPaid: 'MONTANT PAYÉ',
    balanceDue: 'SOLDE DÛ',
    totalInWords: 'TOTAL EN LETTRES',
    bank: 'BANQUE',
    entitled: 'INTITULÉ',
    bankAccount: 'COMPTE BANCAIRE',
    codeSwift: 'CODE SWIFT',
    termsTitle: 'CONDITIONS GÉNÉRALES',
    taxIncludedLabel: '(TVA Incluse)',
    taxExcludedLabel: '(Hors Taxe)',
  },
};

export function translateTermsToFrench(terms) {
  if (!terms) return '';
  const upper = String(terms).toUpperCase();
  if (upper.includes('ESTIMATES ARE FOR LABOR') || upper.includes('NOT RESPONSIBLE FOR LOSS')) {
    return "LES ESTIMATIONS CONCERNENT UNIQUEMENT LA MAIN-D'ŒUVRE ET LE MATÉRIEL SUPPLÉMENTAIRE. LES ARTICLES VENDUS NE SONT NI REPRIS NI ÉCHANGÉS. NOUS NE SOMMES PAS RESPONSABLES DES PERTES OU DOMMAGES CAUSÉS PAR UN INCENDIE, UN VOL, DES TESTS, DES PIÈCES DÉFECTUEUSES OU TOUTE AUTRE CAUSE INDÉPENDANTE DE NOTRE VOLONTÉ.";
  }
  if (upper.includes('QUOTE VALID FOR 30 DAYS') || upper.includes('40% DEPOSIT')) {
    return "DEVIS VALABLE 30 JOURS (SOUS RÉSERVE DE DISPONIBILITÉ ET VARIATION DU MARCHÉ). PAIEMENT : 40 % D'ACOMPTE / 50 % À MI-PROJET / 10 % À L'ACHÈVEMENT. TOUTES LES VENTES DE MATÉRIEL SONT DÉFINITIVES.";
  }
  return terms;
}

const UNITS_FR = [
  '', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf',
  'dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf'
];
const TENS_FR = ['', '', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante', 'quatre-vingt', 'quatre-vingt'];

function under100Fr(n) {
  if (n < 20) return UNITS_FR[n];
  const ten = Math.floor(n / 10);
  const unit = n % 10;
  if (ten === 7 || ten === 9) {
    const sub = 10 + unit;
    const sep = sub === 11 && ten === 7 ? ' et ' : '-';
    return TENS_FR[ten] + sep + UNITS_FR[sub];
  }
  if (unit === 0) {
    return ten === 8 ? 'quatre-vingts' : TENS_FR[ten];
  }
  if (unit === 1 && ten !== 8) {
    return `${TENS_FR[ten]} et un`;
  }
  return `${TENS_FR[ten]}-${UNITS_FR[unit]}`;
}

function under1000Fr(n) {
  if (n < 100) return under100Fr(n);
  const h = Math.floor(n / 100);
  const rem = n % 100;
  const hStr = h === 1 ? 'cent' : `${UNITS_FR[h]} cent${rem === 0 ? 's' : ''}`;
  return rem === 0 ? hStr : `${hStr} ${under100Fr(rem)}`;
}

function intToFrenchWords(n) {
  if (n === 0) return 'zéro';
  const parts = [];
  const billions = Math.floor(n / 1e9);
  const millions = Math.floor((n % 1e9) / 1e6);
  const thousands = Math.floor((n % 1e6) / 1e3);
  const rest = n % 1000;

  if (billions > 0) parts.push(`${under1000Fr(billions)} milliard${billions > 1 ? 's' : ''}`);
  if (millions > 0) parts.push(`${under1000Fr(millions)} million${millions > 1 ? 's' : ''}`);
  if (thousands > 0) {
    parts.push(thousands === 1 ? 'mille' : `${under1000Fr(thousands)} mille`);
  }
  if (rest > 0) parts.push(under1000Fr(rest));
  return parts.join(' ');
}

export function numberToFrenchWords(amount) {
  const num = Number(amount) || 0;
  const rounded = Math.round(Math.abs(num) * 100);
  const whole = Math.floor(rounded / 100);
  const cents = rounded % 100;
  const wholeWords = intToFrenchWords(whole);
  const centWords = cents === 0 ? 'zéro centime' : `${intToFrenchWords(cents)} centime${cents > 1 ? 's' : ''}`;
  return `${wholeWords} et ${centWords}`.toUpperCase();
}
