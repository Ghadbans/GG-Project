/**
 * GG Management - Intelligent Language & Text Assistance Utility
 * Provides typo auto-correction, technical terminology standardization,
 * whitespace cleaning, Damerau-Levenshtein word-by-word spellchecking,
 * and universal CAPITAL LETTERS formatting.
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
  // Multi-word phrases with actual typos (evaluated first)
  { pattern: /\b(ari|air)\s+(contoner|condoner|condishioner|conditionner)\b/gi, replacement: 'AIR CONDITIONER' },
  { pattern: /\b(uot\s+of\s+(ordder|ordr|order)|out\s+of\s+(ordder|ordr))\b/gi, replacement: 'OUT OF ORDER' },
  { pattern: /\b(not\s+charch(ing)?|not\s+charg(ing)?|ne\s+charge\s+pas)\b/gi, replacement: 'NOT CHARGING' },
  { pattern: /\b(no\s+powr(e)?|no\s+pwer|pas\s+de\s+courant|pas\s+de\s+tension|coupe\s+courant|ne\s+s['\s]?allume\s+pas)\b/gi, replacement: 'NO POWER' },
  { pattern: /\b(court[\s\-_]circuit|court[\s\-_]circui)\b/gi, replacement: 'SHORT CIRCUIT' },
  { pattern: /\b(four\s+elec(trique)?)\b/gi, replacement: 'ELECTRIC OVEN' },
  { pattern: /\b(pompe\s+a\s+eau|pompe\s+d['\s]?eau)\b/gi, replacement: 'WATER PUMP' },
  { pattern: /\b(groupe\s+electro(gene)?)\b/gi, replacement: 'GENERATOR' },
  { pattern: /\b(chambre\s+froide)\b/gi, replacement: 'COLD ROOM' },
  { pattern: /\b(fuite\s+d['\s]?eau)\b/gi, replacement: 'WATER LEAK' },
  { pattern: /\b(fuite\s+de\s+gaz)\b/gi, replacement: 'GAS LEAK' },
  { pattern: /\b(bruit\s+anormal|bruyant)\b/gi, replacement: 'ABNORMAL NOISE' },
  { pattern: /\b(moteur\s+bloqu[eé])\b/gi, replacement: 'MOTOR BLOCKED' },
  { pattern: /\b(entretien\s+periodique)\b/gi, replacement: 'PERIODIC MAINTENANCE' },
  { pattern: /\b(ne\s+marche\s+pas|marche\s+pas|not\s+work(ing)?)\b/gi, replacement: 'NOT WORKING' },
  { pattern: /\b(tset\s+wronge?|test\s+wronge?|tste\s+wronge?)\b/gi, replacement: 'TEST WRONG' },
  { pattern: /\b(lfie\s+ihis\s+good|life\s+ihis\s+good|lfie\s+is\s+good)\b/gi, replacement: 'LIFE IS GOOD' },
  { pattern: /\b(fait\s+on[\s\-_/]*off)\b/gi, replacement: 'DOING ON/OFF' },
  { pattern: /\b(en\s+panne|hors\s+service)\b/gi, replacement: 'OUT OF ORDER' },

  // Single word typos and colloquialisms
  { pattern: /\b(ari)\b/gi, replacement: 'AIR' },
  { pattern: /\b(contoner|condoner|condishioner|conditionner)\b/gi, replacement: 'CONDITIONER' },
  { pattern: /\b(uot)\b/gi, replacement: 'OUT' },
  { pattern: /\b(ordder|ordr)\b/gi, replacement: 'ORDER' },
  { pattern: /\b(fullow|fllow)\b/gi, replacement: 'FOLLOW' },
  { pattern: /\b(tste|tset|tesst|tst)\b/gi, replacement: 'TEST' },
  { pattern: /\b(lfie|lyfe)\b/gi, replacement: 'LIFE' },
  { pattern: /\b(ihis|isi)\b/gi, replacement: 'IS' },
  { pattern: /\b(machin|mashin|machiene|machne|mchine)\b/gi, replacement: 'MACHINE' },
  { pattern: /\b(camra|camer|kamra)\b/gi, replacement: 'CAMERA' },
  { pattern: /\b(cc\s+tv)\b/gi, replacement: 'CCTV' },
  { pattern: /\b(wronge|rong|wrog|wrng)\b/gi, replacement: 'WRONG' },
  { pattern: /\b(powre|powr|pwer|poer)\b/gi, replacement: 'POWER' },
  { pattern: /\b(probl[eèé]me?|problm|prob)\b/gi, replacement: 'PROBLEM' },
  { pattern: /\b(elec|electrique|eletrique)\b/gi, replacement: 'ELECTRICAL' },
  { pattern: /\b(maint|maintenace|mientenace|maintenence|mantenance)\b/gi, replacement: 'MAINTENANCE' },
  { pattern: /\b(reparation|reparer|reparartion|repar)\b/gi, replacement: 'REPAIR' },
  { pattern: /\b(moteur|motuer|motteur)\b/gi, replacement: 'MOTOR' },
  { pattern: /\b(batteri|batterie|baterie)\b/gi, replacement: 'BATTERY' },
  { pattern: /\b(climatiseur|clim)\b/gi, replacement: 'AIR CONDITIONER' },
  { pattern: /\b(generateur|groupe)\b/gi, replacement: 'GENERATOR' },
  { pattern: /\b(boulangerie)\b/gi, replacement: 'BAKERY' },
  { pattern: /\b(petrin)\b/gi, replacement: 'DOUGH MIXER' },
  { pattern: /\b(compresseur|compresor)\b/gi, replacement: 'COMPRESSOR' },
  { pattern: /\b(disjoncteur|disjonctuer)\b/gi, replacement: 'CIRCUIT BREAKER' },
  { pattern: /\b(transformateur|transfo)\b/gi, replacement: 'TRANSFORMER' },
  { pattern: /\b(bobinage|bobinne)\b/gi, replacement: 'COIL WINDING' },
  { pattern: /\b(condensateur|condo|capaciter)\b/gi, replacement: 'CAPACITOR' },
  { pattern: /\b(roulement|roulements)\b/gi, replacement: 'BEARINGS' },
  { pattern: /\b(ventilateur|ventillo|ventilo)\b/gi, replacement: 'VENTILATOR / FAN' },
  { pattern: /\b(surchauffe|overheat|overheating)\b/gi, replacement: 'OVERHEATING' },
  { pattern: /\b(ecran|ecrant)\b/gi, replacement: 'SCREEN / DISPLAY' },
  { pattern: /\b(cablage|cablagge)\b/gi, replacement: 'WIRING' },
  { pattern: /\b(nettoy[eé]|netoyage|nettoyage|clean|cleand)\b/gi, replacement: 'CLEANED' },
  { pattern: /\b(remplac[eé]|remplacment|remplacement|chnge)\b/gi, replacement: 'REPLACED' },
  { pattern: /\b(diagnostique)\b/gi, replacement: 'DIAGNOSTIC' },
  { pattern: /\b(operationnel|operationel)\b/gi, replacement: 'OPERATIONAL' },
  { pattern: /\b(technicien|technition)\b/gi, replacement: 'TECHNICIAN' },
  { pattern: /\b(servis|servce)\b/gi, replacement: 'SERVICE' },
  { pattern: /\b(coup|coupe|coupure)\b/gi, replacement: 'CUT' },
  { pattern: /\b(casse|casser|casses|brokn|borken)\b/gi, replacement: 'BROKEN' },
  { pattern: /\b(brule|brulee|bruler|burnd)\b/gi, replacement: 'BURNT' },
  { pattern: /\b(bloque|bloquer|bloq)\b/gi, replacement: 'BLOCKED' },
  { pattern: /\b(fuite|fuit)\b/gi, replacement: 'LEAK' },
  { pattern: /\b(charch|chargeur)\b/gi, replacement: 'CHARGING' },
  { pattern: /\b(costomer|custmer|customr|cleint|clien)\b/gi, replacement: 'CUSTOMER' },
  { pattern: /\b(suplier|suppliar|fourniseur|fournissur)\b/gi, replacement: 'SUPPLIER' },
  { pattern: /\b(invocie|invoce|factur)\b/gi, replacement: 'INVOICE' },
  { pattern: /\b(quattion|quotatn|devis)\b/gi, replacement: 'QUOTATION' },
  { pattern: /\b(payemnt|paymnt|peymnt)\b/gi, replacement: 'PAYMENT' },
  { pattern: /\b(expens|expeses|depense)\b/gi, replacement: 'EXPENSE' },
  { pattern: /\b(projct|progect|porject)\b/gi, replacement: 'PROJECT' },
  { pattern: /\b(employe|emploe|personel)\b/gi, replacement: 'EMPLOYEE' },
  { pattern: /\b(discripton|descrip|descriptoin|descreption)\b/gi, replacement: 'DESCRIPTION' },
  { pattern: /\b(addres|adres|adress)\b/gi, replacement: 'ADDRESS' },
  { pattern: /\b(waranty|warenty|woranty|garanti|garantie)\b/gi, replacement: 'WARRANTY' },
  { pattern: /\b(seriel|serail|seral)\b/gi, replacement: 'SERIAL' },
  { pattern: /\b(recived|recieve|recu)\b/gi, replacement: 'RECEIVED' },
  { pattern: /\b(deliverd|delivry|livraison)\b/gi, replacement: 'DELIVERED' },
  { pattern: /\b(compleat|complet|termnated)\b/gi, replacement: 'COMPLETED' },
  { pattern: /\b(canceld|cancelld|annule)\b/gi, replacement: 'CANCELLED' },
  { pattern: /\b(urgent|urgant)\b/gi, replacement: 'URGENT' },
  { pattern: /\b(approvd|aprovd|aprouved)\b/gi, replacement: 'APPROVED' },
  { pattern: /\b(requst|reqest|demande)\b/gi, replacement: 'REQUEST' },
  { pattern: /\b(quantite|qantity|qte|qty)\b/gi, replacement: 'QUANTITY' },
  { pattern: /\b(balanc|balnce|solde)\b/gi, replacement: 'BALANCE' },
  { pattern: /\b(disscount|discont|remise)\b/gi, replacement: 'DISCOUNT' },
  { pattern: /\b(shiping|shiped)\b/gi, replacement: 'SHIPPING' },
  { pattern: /\b(swtch|swicth|swich)\b/gi, replacement: 'SWITCH' },
  { pattern: /\b(plase|plese)\b/gi, replacement: 'PLEASE' },
  { pattern: /\b(chck|chek)\b/gi, replacement: 'CHECK' },
  { pattern: /\b(wokr|wrk)\b/gi, replacement: 'WORK' },
  { pattern: /\b(payd|payed)\b/gi, replacement: 'PAID' },
  { pattern: /\b(wrkrs|workrs|wrokers)\b/gi, replacement: 'WORKERS' }
];

// Curated vocabulary for word-by-word Damerau-Levenshtein spellchecking
export const ENGLISH_FRENCH_VOCABULARY = new Set([
  // Numbers (English & French)
  'ZERO', 'ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN', 'EIGHT', 'NINE', 'TEN',
  'ELEVEN', 'TWELVE', 'THIRTEEN', 'FOURTEEN', 'FIFTEEN', 'SIXTEEN', 'TWENTY', 'THIRTY', 'FORTY', 'FIFTY', 'HUNDRED', 'THOUSAND',
  'UN', 'DEUX', 'TROIS', 'QUATRE', 'CINQ', 'SIX', 'SEPT', 'HUIT', 'NEUF', 'DIX',
  'ONZE', 'DOUZE', 'TREIZE', 'QUATORZE', 'QUINZE', 'SEIZE', 'VINGT', 'TRENTE', 'QUARANTE', 'CINQUANTE', 'CENT', 'MILLE',

  // Common English Core Words & Prepositions
  'THE', 'BE', 'TO', 'OF', 'OFF', 'ON', 'UP', 'DOWN', 'AND', 'A', 'IN', 'THAT', 'HAVE', 'I', 'IT', 'FOR', 'NOT', 'WITH', 'HE', 'AS', 'YOU', 'DO', 'AT',
  'THIS', 'BUT', 'HIS', 'BY', 'FROM', 'THEY', 'WE', 'SAY', 'HER', 'SHE', 'OR', 'AN', 'WILL', 'MY', 'ALL', 'WOULD', 'THERE',
  'THEIR', 'WHAT', 'SO', 'OUT', 'IF', 'ABOUT', 'WHO', 'GET', 'WHICH', 'GO', 'ME', 'WHEN', 'MAKE', 'CAN', 'LIKE', 'TIME', 'NO',
  'JUST', 'HIM', 'KNOW', 'TAKE', 'PEOPLE', 'INTO', 'YEAR', 'YOUR', 'GOOD', 'SOME', 'COULD', 'THEM', 'SEE', 'OTHER', 'THAN', 'THEN',
  'NOW', 'LOOK', 'ONLY', 'COME', 'ITS', 'OVER', 'UNDER', 'THINK', 'ALSO', 'BACK', 'AFTER', 'USE', 'HOW', 'OUR', 'WORK', 'WORKS', 'WORKED', 'WORKING', 'FIRST',
  'WELL', 'WAY', 'EVEN', 'NEW', 'OLD', 'WANT', 'BECAUSE', 'ANY', 'THESE', 'GIVE', 'DAY', 'MOST', 'US', 'IS', 'ARE', 'WAS', 'WERE', 'BEEN',
  'DONE', 'DID', 'DOES', 'DOING', 'TEST', 'TESTS', 'TESTED', 'TESTING', 'WRONG', 'LIFE', 'ORDER', 'ORDERS', 'CHECK', 'CHECKS',
  'FOLLOW', 'FOLLOWS', 'FOLLOWED', 'FOLLOWING', 'BROKEN', 'BURNT', 'BLOCKED', 'LEAK', 'LEAKS', 'CLEAN', 'CLEANED', 'SERVICE', 'SERVICES',
  'REPAIR', 'REPAIRS', 'REPAIRED', 'REPLACED', 'INSPECT', 'INSPECTED', 'INSPECTION', 'DIAGNOSTIC', 'OPERATIONAL', 'MAINTENANCE',
  'LEFT', 'RIGHT', 'TOP', 'BOTTOM', 'FRONT', 'REAR', 'FAST', 'SLOW', 'SAFE', 'OPEN', 'CLOSE', 'CLOSED', 'BAD', 'TRUE', 'FALSE',

  // Food, Meals, Expenses & Staff (English)
  'FOOD', 'FOODS', 'MEAL', 'MEALS', 'LUNCH', 'DINNER', 'BREAKFAST', 'DRINK', 'DRINKS', 'WATER', 'TEA', 'COFFEE',
  'SUGAR', 'BREAD', 'MILK', 'RICE', 'MEAT', 'CHICKEN', 'FISH', 'FRUIT', 'FRUITS', 'VEGETABLE', 'VEGETABLES', 'SNACK', 'SNACKS',
  'KITCHEN', 'COOK', 'COOKING', 'RESTAURANT', 'CATERING', 'REFRESHMENT', 'REFRESHMENTS',
  'WORKER', 'WORKERS', 'STAFF', 'TEAM', 'CREW', 'LABOR', 'LABOUR', 'LABORER', 'LABORERS', 'DRIVER', 'DRIVERS', 'GUARD', 'GUARDS',
  'OFFICER', 'CLEANER', 'CLEANERS', 'OPERATOR', 'OPERATORS', 'SUPERVISOR', 'SUPERVISORS', 'MANAGER', 'MANAGERS', 'DIRECTOR', 'DIRECTORS',
  'ASSISTANT', 'ASSISTANTS', 'HELPER', 'HELPERS', 'CASHIER', 'CASHIERS', 'ACCOUNTANT', 'ACCOUNTANTS', 'MECHANIC', 'MECHANICS',
  'ELECTRICIAN', 'ELECTRICIANS', 'PLUMBER', 'PLUMBERS',
  'TRANSPORT', 'TRANSPORTATION', 'TAXI', 'BUS', 'FUEL', 'PETROL', 'DIESEL', 'OIL', 'TIRE', 'TIRES', 'TYRE', 'TYRES',
  'PARKING', 'TOLL', 'FARE', 'RENT', 'HOTEL', 'TRAVEL', 'TICKET', 'FLIGHT', 'VISA', 'PASSPORT', 'ALLOWANCE', 'PERDIEM',
  'SALARY', 'SALARIES', 'ADVANCE', 'LOAN', 'BONUS', 'COMMISSION', 'FEE', 'FEES', 'CHARGE', 'CHARGES', 'TAX', 'TAXES', 'TVA', 'VAT',
  'CUSTOMS', 'DUTY', 'CLEARANCE', 'FINE', 'PENALTY', 'PRINTING', 'COURIER', 'POSTAGE', 'DELIVERY', 'SHIPPING', 'FREIGHT',
  'TONER', 'PAPER', 'STATIONERY', 'SUPPLIES', 'TOOL', 'TOOLS', 'MATERIAL', 'MATERIALS', 'EQUIPMENT', 'INTERNET', 'WIFI',
  'PHONE', 'TELEPHONE', 'AIRTIME', 'CREDIT', 'CARD', 'ELECTRICITY', 'POWER', 'INSURANCE', 'MEDICAL', 'MEDICINE', 'HEALTH',
  'HOSPITAL', 'CLINIC', 'UNIFORM', 'UNIFORMS', 'SAFETY', 'BOOTS', 'HELMET', 'GLOVES', 'VEST', 'GIFT', 'DONATION', 'CHARITY',
  'MISCELLANEOUS', 'OTHER', 'OTHERS',

  // Common French Core & Expense Words
  'LE', 'LA', 'LES', 'UN', 'UNE', 'DES', 'DU', 'DE', 'AU', 'AUX', 'EN', 'DANS', 'SUR', 'SOUS', 'PAR', 'POUR', 'AVEC', 'SANS', 'VERS', 'CHEZ',
  'CE', 'CET', 'CETTE', 'CES', 'MON', 'MA', 'MES', 'TON', 'TA', 'TES', 'SON', 'SA', 'SES', 'NOTRE', 'NOS', 'VOTRE', 'VOS', 'LEUR', 'LEURS',
  'JE', 'TU', 'IL', 'ELLE', 'ON', 'NOUS', 'VOUS', 'ILS', 'ELLES', 'ME', 'TE', 'SE', 'LUI', 'MOI', 'TOI', 'SOI', 'EUX', 'QUI', 'QUE', 'QUOI',
  'DONT', 'OU', 'FAIT', 'FAIRE', 'ETRE', 'AVOIR', 'PAS', 'PLUS', 'BIEN', 'BON', 'BONNE', 'MAUVAIS', 'JOUR', 'JOURS', 'MOIS', 'ANNEE', 'TEMPS',
  'CHANGER', 'CHANGE', 'CHANGEMENT', 'REMPLACER', 'REMPLACEMENT', 'NETTOYER', 'NETTOYAGE', 'VERIFIER', 'VERIFICATION', 'REGLER', 'REGLAGE',
  'NOURRITURE', 'REPAS', 'DEJEUNER', 'DINER', 'PETIT-DEJEUNER', 'BOISSON', 'BOISSONS', 'EAU', 'PAIN', 'CAFE', 'THE', 'SUCRE', 'LAIT',
  'RIZ', 'VIANDE', 'POULET', 'POISSON', 'TRAVAILLEUR', 'TRAVAILLEURS', 'OUVRIER', 'OUVRIERS', 'EMPLOYE', 'EMPLOYES', 'PERSONNEL',
  'EQUIPE', 'CHAUFFEUR', 'CHAUFFEURS', 'GARDE', 'GARDES', 'TECHNICIEN', 'TECHNICIENS', 'INGENIEUR', 'INGENIEURS', 'MECANICIEN',
  'ELECTRICIEN', 'CARBURANT', 'ESSENCE', 'GASOIL', 'DIESEL', 'TRANSPORT', 'FRAIS', 'DEPENSE', 'DEPENSES', 'LOYER', 'ELECTRICITE',
  'INTERNET', 'FOURNITURES', 'PAPIER', 'SALAIRE', 'SALAIRES', 'AVANCE', 'PRIME',

  // Appliances & Equipment
  'AIR', 'CONDITIONER', 'APPLIANCE', 'APPLIANCES', 'OVEN', 'MIXER', 'DOUGH', 'WATER', 'PUMP',
  'GENERATOR', 'CHILLER', 'COLD', 'ROOM', 'COMPRESSOR', 'MOTOR', 'INVERTER', 'TRANSFORMER',
  'CAPACITOR', 'BREAKER', 'CIRCUIT', 'SWITCH', 'BOARD', 'WIRING', 'CABLE', 'SCREEN', 'DISPLAY',
  'CAMERA', 'CAMERAS', 'CCTV', 'SECURITY', 'SENSOR', 'THERMOSTAT', 'FUSE', 'VALVE', 'PIPE',
  'FILTER', 'BELT', 'BEARING', 'BEARINGS', 'COIL', 'WINDING', 'REFRIGERANT', 'GAS', 'FREON',
  'PRESSURE', 'TEMPERATURE', 'VOLTAGE', 'CURRENT', 'POWER', 'ELECTRIC', 'ELECTRICAL', 'MECHANICAL',
  'ELECTRONIC', 'HEATING', 'COOLING', 'VENTILATION', 'PANEL', 'RELAY', 'BATTERY', 'CHARGER',
  'FREEZER', 'REFRIGERATOR', 'FRIDGE', 'FRYER', 'MACHINE', 'MACHINES', 'HEATER', 'FAN', 'BLOWER',
  'PLUG', 'SOCKET', 'CONNECTOR', 'ADAPTER', 'GENERATOR', 'STABILIZER', 'UPS', 'AVR',

  // Commercial & ERP Terms
  'CUSTOMER', 'CLIENT', 'SUPPLIER', 'VENDOR', 'INVOICE', 'QUOTATION', 'ESTIMATE', 'RECEIPT',
  'PAYMENT', 'EXPENSE', 'EXPENSES', 'PURCHASE', 'PURCHASES', 'ORDER', 'ORDERS', 'PROJECT',
  'PROJECTS', 'EMPLOYEE', 'EMPLOYEES', 'TECHNICIAN', 'SALARY', 'PAYROLL', 'ADVANCE', 'LOAN',
  'CASH', 'BANK', 'ACCOUNT', 'BALANCE', 'TOTAL', 'SUBTOTAL', 'TAX', 'VAT', 'TVA', 'DISCOUNT',
  'AMOUNT', 'PRICE', 'COST', 'RATE', 'QTY', 'QUANTITY', 'UNIT', 'UNITS', 'DESCRIPTION', 'REMARKS',
  'NOTES', 'SERIAL', 'NUMBER', 'BRAND', 'MODEL', 'WARRANTY', 'STATUS', 'DATE', 'TIME', 'CODE',
  'STORE', 'STOCK', 'INVENTORY', 'WAREHOUSE', 'TRANSFER', 'CATEGORY', 'DEPARTMENT', 'BRANCH',
  'OFFICE', 'FACTORY', 'POS', 'SALES', 'RETAIL', 'WHOLESALE', 'DELIVERY', 'SHIPPING', 'TRANSPORT',

  // Actions & Verbs
  'CLEANED', 'SERVICED', 'REPLACED', 'FIXED', 'REPAIRED', 'TESTED', 'CHECKED', 'INSTALLED',
  'CONFIGURED', 'CALIBRATED', 'ADJUSTED', 'TIGHTENED', 'REWIRED', 'SOLDED', 'WELDED', 'LUBRICATED',
  'OVERHAULED', 'ASSEMBLED', 'DISASSEMBLED', 'DELIVERED', 'RECEIVED', 'APPROVED', 'CANCELLED',
  'PENDING', 'COMPLETED', 'INSPECTION', 'DIAGNOSTIC', 'OK', 'FAILED', 'ERROR', 'FAULT', 'DEFECT',
  'SHORT', 'BURNT', 'OVERHEATING', 'BLOCKED', 'LEAK', 'NOISE', 'CHARGING', 'CONNECTED', 'OFFLINE',
  'ONLINE', 'ACTIVE', 'INACTIVE', 'OPEN', 'CLOSED', 'NEW', 'USED', 'URGENT', 'NORMAL', 'HIGH', 'LOW',

  // Technical Acronyms & Units
  'USD', 'CDF', 'FC', 'EUR', 'GBP', 'V', 'A', 'W', 'KW', 'KVA', 'HP', 'HZ', 'RPM', 'PSI', 'BAR',
  'KG', 'G', 'L', 'ML', 'MM', 'CM', 'M', 'KM', 'PCS', 'SET', 'BOX', 'ROLL', 'MTR', 'PKT', 'PAIR',
  'AC', 'DC', 'LED', 'LCD', 'CPU', 'RAM', 'SSD', 'HDD', 'USB', 'HDMI', 'VGA', 'LAN', 'WIFI',
  'DVR', 'NVR', 'IP', 'HD', 'FHD', 'UHD', 'TV', 'PC', 'DVD', 'CD'
]);

/**
 * Calculates Damerau-Levenshtein distance (insertions, deletions, substitutions, transpositions).
 */
export function damerauLevenshtein(a, b) {
  if (a === b) return 0;
  const al = a.length;
  const bl = b.length;
  if (al === 0) return bl;
  if (bl === 0) return al;

  const matrix = [];
  for (let i = 0; i <= al; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= bl; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= al; i++) {
    for (let j = 1; j <= bl; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,        // deletion
        matrix[i][j - 1] + 1,        // insertion
        matrix[i - 1][j - 1] + cost   // substitution
      );
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
        matrix[i][j] = Math.min(matrix[i][j], matrix[i - 2][j - 2] + cost); // transposition
      }
    }
  }
  return matrix[al][bl];
}

/**
 * Corrects an individual word using vocabulary and Damerau-Levenshtein distance.
 */
export function correctWord(word) {
  if (!word || typeof word !== 'string') return word;
  const upper = word.toUpperCase();

  // 1. Skip codes, numbers, single letters, or words already in vocabulary
  if (ENGLISH_FRENCH_VOCABULARY.has(upper)) return upper;
  if (/^\d+$/.test(word) || /^[A-Z]-\d+$/i.test(upper)) {
    return upper;
  }

  // 2. Check exact matches in single-word typo dictionary (evaluated first for all lengths)
  for (const { pattern, replacement } of TYPO_DICTIONARY) {
    if (new RegExp(pattern.source, 'i').test(upper) && !pattern.source.includes('\\s+')) {
      return replacement.toUpperCase();
    }
  }

  // 3. For short words (length <= 4), do NOT fuzzy match!
  // Single-word typos for short words (1 to 4 chars) are handled strictly by TYPO_DICTIONARY
  // (e.g. ARI -> AIR, UOT -> OUT, TSET -> TEST, LFIE -> LIFE, WOKR -> WORK).
  // This prevents valid 4-letter words (like FOOD, WOOD, GOOD, BOOK, LOOK, CARS, WORK, SHOP)
  // from ever being mutated or collapsed into other words.
  if (upper.length <= 4) {
    return upper;
  }

  // 4. Find closest match in vocabulary via Damerau-Levenshtein distance (for words length >= 5)
  let bestMatch = null;
  let bestDist = 999;

  for (const vocabWord of ENGLISH_FRENCH_VOCABULARY) {
    // Only test words of similar length (within 2 characters)
    if (Math.abs(vocabWord.length - upper.length) > 2) continue;

    const dist = damerauLevenshtein(upper, vocabWord);
    // Allow edit distance 1 for 5-6 char words, distance 2 for words >=7 chars
    const maxAllowed = vocabWord.length <= 6 ? 1 : 2;

    if (dist <= maxAllowed && dist < bestDist) {
      bestDist = dist;
      bestMatch = vocabWord;
      if (dist === 1 && Math.abs(vocabWord.length - upper.length) <= 1) {
        break; // Fast exit on high-confidence match
      }
    }
  }

  return bestMatch || upper;
}

/**
 * Normalizes multi-spaces and trims leading/trailing whitespace.
 */
export const normalizeSpaces = (text) => {
  if (!text || typeof text !== 'string') return '';
  return text.replace(/\s+/g, ' ').trim();
};

/**
 * Replaces known typos and standardizes terminology word by word.
 */
export const correctTypos = (text, forceUpper = true) => {
  if (!text || typeof text !== 'string') return '';
  let cleaned = text;

  // 1. Run multi-word phrase patterns first
  for (const { pattern, replacement } of TYPO_DICTIONARY) {
    cleaned = cleaned.replace(pattern, (match) => {
      if (forceUpper || match === match.toUpperCase()) {
        return replacement.toUpperCase();
      }
      return replacement;
    });
  }

  // 2. Run word-by-word spelling correction on all individual words
  cleaned = cleaned.replace(/[A-Za-z\u00C0-\u017F]+/g, (word) => {
    return correctWord(word);
  });

  return cleaned;
};

/**
 * Formats string to Sentence case.
 */
export const toSentenceCase = (text) => {
  if (!text || typeof text !== 'string') return '';
  return text.replace(/(^\s*|\.\s+)([a-z\u00E0-\u00FC])/g, (m, sep, char) => {
    return sep + char.toUpperCase();
  });
};

/**
 * Formats string to Title Case.
 */
export const toTitleCase = (text) => {
  if (!text || typeof text !== 'string') return '';
  const minorWords = /^(a|an|the|and|but|or|for|nor|on|at|to|from|by|over|in|of|de|du|des|la|le|les|et|en|ou|par|pour|sur)$/i;
  return text
    .toLowerCase()
    .split(' ')
    .map((word, index) => {
      if (index === 0 || !minorWords.test(word)) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
      return word.toLowerCase();
    })
    .join(' ');
};

/**
 * Standardizes model numbers, serials, and codes to UPPERCASE with single spaces.
 */
export const toUpperCaseCode = (text) => {
  if (!text || typeof text !== 'string') return '';
  return normalizeSpaces(text).toUpperCase();
};

/**
 * Master polishing function that cleans whitespace, fixes typos word-by-word,
 * and standardizes to universal CAPITAL LETTERS.
 * @param {string} text - Raw input text
 * @param {'upper'|'sentence'|'title'|'none'} mode - Desired casing mode (defaults to 'upper')
 */
export const polishText = (text, mode = 'upper') => {
  if (!text || typeof text !== 'string') return '';

  let result = normalizeSpaces(text);
  if (!result) return '';

  // 1. Correct technical and language typos (multi-word and word-by-word)
  result = correctTypos(result, mode === 'upper');

  // 2. Apply requested casing mode (default is universal 'upper' CAPITAL LETTERS)
  if (mode === 'upper') {
    result = result.toUpperCase();
  } else if (mode === 'sentence') {
    result = toSentenceCase(result);
  } else if (mode === 'title') {
    result = toTitleCase(result);
  }

  return result;
};

/**
 * Checks if a string contains any recognized typo, unnormalized spacing,
 * lowercase letters, or any misspelled words that need auto-correction.
 * Guaranteed 100% consistent with polishText.
 */
export const hasTypo = (text, mode = 'upper') => {
  if (!text || typeof text !== 'string' || !text.trim()) return false;
  const polished = polishText(text, mode);
  return polished !== text.trim();
};
