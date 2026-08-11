// Canonical translation shape. Every other locale file must implement this
// exact structure (enforced via `satisfies Translation` in i18n/types.ts).
const de = {
  meta: {
    htmlLang: 'de',
  },
  brand: {
    tagline: 'Asiatisches Restaurant mit thailändischen Spezialitäten',
  },
  nav: {
    willkommen: 'Willkommen',
    karte: 'Unsere Karte',
    mittagskarte: 'Mittagskarte',
    reservierung: 'Reservierung',
    impressum: 'Impressum',
    datenschutz: 'Datenschutzerklärung',
    reserveCta: 'Tisch reservieren',
    menuOpen: 'Menü öffnen',
    menuClose: 'Menü schließen',
    languageLabel: 'Sprache wählen',
  },
  footer: {
    taglineWithSince: '{{tagline}} — seit {{since}} auf der Könneritzstraße in Leipzig.',
    navHeading: 'Navigation',
    contactHeading: 'Kontakt',
    hoursHeading: 'Öffnungszeiten',
    telLabel: 'Tel. ',
    mobileLabel: 'Mobil ',
    routePlanen: 'Route planen',
    copyright: '© {{year}} {{name}} — Seit {{since}}',
    madeWith: 'Made with care in Leipzig.',
  },
  days: {
    monday: 'Montag',
    tuesday: 'Dienstag',
    wednesday: 'Mittwoch',
    thursday: 'Donnerstag',
    friday: 'Freitag',
    saturday: 'Samstag',
    sunday: 'Sonntag',
  },
  hours: {
    closed: 'Ruhetag (geschlossen)',
    rangeJoiner: ' und ',
    timeSuffix: ' Uhr',
    lunchNote: 'Dienstag bis Freitag, außer an Feiertagen, 11:30–14:30 Uhr',
  },
  closure: {
    label: 'Betriebsurlaub: ',
    message:
      'Unser Restaurant bleibt aufgrund unseres Betriebsurlaubs vom {{start}} bis einschließlich {{end}} geschlossen. Ab {{reopen}} sind wir wieder wie gewohnt für Sie da und freuen uns auf Ihren Besuch.',
    dismissAria: 'Hinweis schließen',
  },
  home: {
    seoTitle: 'Thailändisches Restaurant in Leipzig',
    seoDescription:
      'Mai Tai — asiatisches Restaurant mit thailändischen Spezialitäten auf der Könneritzstraße in Leipzig. Seit 1993 authentische Aromen Thailands.',
    hero: {
      eyebrow: 'Seit 1993 in Leipzig',
      heading: 'Der echte Geschmack Thailands',
      subtitle:
        'Asiatisches Restaurant mit thailändischen Spezialitäten, mitten auf der Könneritzstraße.',
      ctaMenu: 'Speisekarte entdecken',
      ctaReserve: 'Tisch reservieren',
      slideAria: 'Bild {{n}} anzeigen',
      slides: {
        curry: 'Grünes Thai-Curry mit frischem Basilikum und Kaffirlimette',
        satay: 'Hühnerspieße „Gai Sate" vom Hibachi-Grill mit Erdnussdip',
        springrolls: 'Knusprige Frühlingsrollen „Popia" mit Nam-Pla-Dip',
        padthai: 'Pad Thai mit Sojasprossen, Ei und gerösteten Erdnüssen',
      },
    },
    feature: {
      genussvoll: 'Genussvoll',
      herzlich: 'Herzlich & Aufmerksam',
      wohlschmeckend: 'Wohlschmeckend',
      exotisch: 'Exotisch reizvoll',
      gastfreundlich: 'Gastfreundlich',
    },
    welcome: {
      eyebrow: 'Seit 1993 auf der Kö',
      heading: 'Tradition trifft Gastfreundschaft',
      body: 'Willkommen im Herzen von Leipzig auf der Könneritzstraße, wo wir seit 1993 die authentischen Aromen Thailands zu Ihnen bringen. Tauchen Sie ein in unsere kulinarische Welt und erleben Sie eine einzigartige Kombination aus Tradition und Gastfreundschaft. Entspannen Sie sich und genießen Sie bei uns den echten Geschmack Thailands!',
      cta: 'Zur Speisekarte',
      photoBasilAlt: 'Frisches Thai-Basilikum und Zutaten in der Küche',
      photoTableAlt: 'Gedeckter Tisch im Restaurant Mai Tai',
    },
    teaser: {
      eyebrow: 'Aus unserer Küche',
      heading: 'Ein Vorgeschmack auf unsere Karte',
      ctaFull: 'Ganze Speisekarte ansehen',
      ctaLunch: 'Mittagskarte',
    },
    hoursSection: {
      eyebrow: 'Öffnungszeiten',
      heading: 'Wann wir für Sie da sind',
      lunchNote: 'Mittagskarte: {{note}}',
    },
    reserveCta: {
      eyebrow: 'Tisch reservieren',
      heading: 'Wir freuen uns auf Ihren Besuch',
      body: 'Reservieren Sie online in wenigen Schritten oder rufen Sie uns einfach an — wir richten Ihnen gerne einen schönen Platz ein.',
      cta: 'Jetzt reservieren',
    },
  },
  menuPage: {
    seoTitle: 'Speisekarte',
    seoDescription:
      'Die vollständige Speisekarte von Mai Tai Leipzig — Vorspeisen, Suppen, Salate, Wok- & Grillgerichte, Curries, Reis & Nudeln.',
    eyebrow: 'Speisekarte',
    heading: 'Unsere Karte',
    intro:
      'Von knusprigen Vorspeisen bis zu würzigen Wok-Gerichten — alle Preise inklusive. Schärfegrad ist bei jedem Gericht angegeben.',
    downloadPdf: 'Speisekarte zum Download (PDF)',
    sidesHeading: 'Optionale Beilagen',
  },
  categories: {
    vorspeisen: { title: 'Vorspeisen', subtitle: 'Appetizer' },
    suppen: { title: 'Suppen', subtitle: 'Soups' },
    salate: { title: 'Salate', subtitle: 'Salads' },
    hauptgerichte: { title: 'Hauptgerichte', subtitle: 'Wok & Grill' },
    reisNudeln: { title: 'Reis & Nudeln', subtitle: 'Rice & Noodles' },
    kinder: { title: 'Für kleine Lieblinge', subtitle: "Kids' Menu" },
  },
  spice: {
    leichte: 'leichte Schärfe',
    thai: 'Thai-Schärfe',
  },
  vegetarianPossible: 'Vegetarisch möglich',
  curries: {
    navLabel: 'Curries',
    eyebrow: 'Curries nach Wahl',
    heading: 'Stellen Sie sich Ihr Curry zusammen',
    intro:
      'Alle Curries werden mit Jasminreis serviert. Wählen Sie zunächst die Curry-Sorte und anschließend Ihre gewünschte Zutat.',
    step1: '1. Curry-Sorte',
    step2: '2. Zutat',
    inclRice: 'inkl. Jasminreis',
  },
  menuItems: {
    popia: { description: 'Frühlingsrollen mit Nam Pla Dip' },
    'kieu-tood': { description: 'Knusprige Wantans mit Pflaumen Dip' },
    'gai-sate': {
      description: 'Hühnerspieße mit Erdnuss- und Sweetchillidip und Hibachi Grill',
    },
    'gung-tood': { description: 'Panko-Garnelen mit Sriracha-Teriyaki' },
    'sweet-kisses': { description: 'Gedämpfte Teigtaschen mit Knoblauchöl & Chili-Soja-Dip' },
    'tom-kha-gai': { description: 'Kokossuppe mit Hühnchen' },
    'tom-yum-gung': { description: 'Scharf-säuerliche Suppe mit Tigergarnelen' },
    'sun-la-tan': {
      description: 'Chinesische Gemüsesuppe',
      options: { classic: 'Klassisch', duck: 'mit Entenfleisch' },
    },
    'wan-tan-suppe': {
      description: 'Teigtaschensuppe (Schweinefleisch-Garnelenfüllung) mit Blattgemüse',
    },
    'somm-tamm': {
      description:
        'Grüne Papayastreifen mit Karotten, Cherrytomaten, Buschbohnen & zerstoßenen Erdnüssen',
    },
    'laab-gai': {
      description:
        'Gehacktes Hähnchenbrustfilet mit Minze, Koriander, roten Zwiebeln & gerösteten Klebreiskörnern',
    },
    'yam-nuea': {
      description:
        'Rindfleischsalat mit Cherrytomaten, Koriander, roten Zwiebeln & Minze, geröstete Klebreiskörner',
    },
    'ped-mai-tai': {
      description:
        'Knusprige Ente auf wok-sautierten Sojasprossen, buntem Gemüse & Pak Choy. Soße nach Wahl: scharfes Hoisin / Tamarind / Erdnuss / Teriyaki',
      options: { duck: 'Mit Ente', crispyChicken: 'Mit Crispy Chicken' },
    },
    'hot-kra-pao': {
      description: 'Gehacktes Fleisch, Zwiebeln, Spiegelei, Peperoni & Holy-Basil „Krapao"',
      options: { beef: 'Mit Rind', chicken: 'Mit Hähnchen', tofu: 'Mit Tofu' },
    },
    'happy-seafood': {
      description:
        'Riesengarnelen, Tintenfisch, Jakobsmuscheln geschwenkt mit Kräuter-Zitronengras-Knoblauch-Ingwer-Mix, Sellerie & Seafood-Soße',
    },
    'steak-a-la-mai-tai': {
      description:
        'Medium gegrilltes Rindersteak, Zwiebeln, Austernpilze, Pak Choy, Cherrytomaten & würzige Pfeffersoße',
    },
    'ped-pu-kau-fai': {
      description: 'Zart mariniertes Entenfleisch in Thai-Soße gebraten, süß-säuerlich-herb',
    },
    'pad-thai': {
      description: 'Reisbandnudeln mit Sojasprossen, Erdnüsse, Ei & leicht saurer Tamarinde',
      addOns: '+2,00 € Tofu · +2,00 € Hähnchen · +4,00 € Garnelen',
    },
    'pad-si-lu': {
      description: 'Reisbandnudeln gebraten mit Choisam, Cashew, Ei & Sojasoße',
      addOns: '+2,00 € Tofu · +2,00 € Hähnchen · +3,00 € Rind · +4,00 € Garnelen',
    },
    'nasi-goreng': {
      description:
        'Gebratener Jasminreis mit Ei, Kurkuma, Cashew, Ananasstücken, Hühnchenspießen, Krupuk & Erdnusssoße. Optional vegetarisch mit Tofu',
    },
    'kleiner-panda': {
      description: 'Gebratener Jasminreis mit Crispy Chicken oder knuspriger Ente',
    },
    'wilder-tiger': {
      description: 'Hühnchenspieße, Wantans, Krupuk, Pommes mit Sweet-Chili-Dip und Mayonnaise',
    },
  },
  curryTypes: {
    'gaeng-kua': {
      description: 'Rotes Kokoscurry mit Bambus, Paprika, Ananas & Thai-Basilikum',
    },
    'gaeng-khieaw-whan': {
      description: 'Grünes Kokoscurry mit Bambus, Peperoni, Maiskölbchen & Thai-Basilikum',
    },
    'pah-naeng-curry': {
      description:
        'Panang-Kokoscurry mit gemahlenen Erdnüssen, Paprika, grünen Bohnen, Litchis, Kaffirlimette & Thai-Basilikum',
    },
  },
  curryProteins: {
    haehnchen: 'Hähnchen',
    rind: 'Rind',
    ente: 'Ente',
    tigergarnelen: 'Tigergarnelen',
    lachs: 'Lachs',
    tofu: 'Tofu',
  },
  sides: {
    'gebratener-reis': 'Gebratener Reis',
    'gebratene-pad-thai-nudeln': 'Gebratene Pad-Thai-Nudeln',
    klebreis: 'Klebreis / Sticky Reis',
  },
  lunchPage: {
    seoTitle: 'Mittagskarte',
    seoDescription:
      'Mittagskarte von Mai Tai Leipzig — thailändische Gerichte zum Mittagstisch, Dienstag bis Freitag von 11:30 bis 14:30 Uhr.',
    eyebrow: 'Mittagskarte',
    heading: 'Der Mittagstisch bei Mai Tai',
    footnote:
      'Alle Preise inklusive. Schärfegrad ist bei jedem Gericht angegeben — bitte sprechen Sie uns bei Unverträglichkeiten oder Allergien gerne direkt an.',
  },
  lunchItems: {
    'thai-curry': {
      description: 'Thai Curry mit Saisongemüse',
      addOns:
        '+2,00 € Tofu · +3,00 € zartes Hähnchen · +4,00 € knuspriges Hühnchen · +5,00 € knusprige Ente',
    },
    'pad-si-lu-mittag': {
      description: 'Thainudeln gebraten mit Cashew und Gemüse',
      addOns: '+3,00 € Hühnchen · +4,00 € Rind · +6,00 € Garnelen',
    },
    'gai-kra-pao': {
      description:
        'Grob gehacktes Hähnchenfleisch, scharf angebraten mit Holy-Basil „Krapao", Zwiebeln und Paprika, Spiegelei on Top (vegetarische Variante mit Tofu möglich)',
    },
    'pad-khing': {
      description: 'Ingwer, Zwiebeln, Morcheln und Peperoni in scharfer Soße gebraten',
      options: { beef: 'Mit Rind', shrimp: 'Mit Garnelen' },
    },
    'pork-belly': {
      description: 'Geschmorter Schweinebauch mit Ei, Kohlrabisalat und Klebreis',
    },
  },
  reservationPage: {
    seoTitle: 'Reservierung',
    seoDescription:
      'Reservieren Sie online einen Tisch im Mai Tai Leipzig — oder rufen Sie uns direkt an unter 0341 / 479 229 1.',
    eyebrow: 'Reservierung',
    heading: 'Online oder per Telefon',
    intro:
      'Hier können Sie Ihre Reservierung ganz unkompliziert online durchführen. Wählen Sie dafür einfach den gewünschten Tag und die Uhrzeit.',
    photoAlt: 'Gemütlicher Tisch im Restaurant Mai Tai, bereit für Gäste',
    personalHeading: 'Lieber persönlich?',
    personalBody: 'Für Buchungswünsche von mehr als 8 Personen bitten wir um telefonische Reservierung.',
  },
  form: {
    honeypotLabel: 'Firma (bitte freilassen)',
    name: 'Name',
    phone: 'Telefon',
    email: 'E-Mail',
    date: 'Datum',
    time: 'Uhrzeit',
    timeChoose: 'Bitte wählen',
    timeSuffix: ' Uhr',
    guests: 'Anzahl der Gäste',
    guestUnitOne: 'Person',
    guestUnitOther: 'Personen',
    guestsOverNote: 'Für Buchungswünsche von mehr als 8 Personen bitten wir um telefonische Reservierung unter {{phone}}.',
    message: 'Nachricht (optional)',
    messagePlaceholder: 'Allergien, besondere Wünsche, Anlass …',
    submit: 'Reservierung anfragen',
    submitting: 'Wird gesendet …',
    errorGeneric: 'Da ist leider etwas schiefgelaufen. Bitte versuchen Sie es erneut oder rufen Sie uns an.',
    mondayError: 'Montags haben wir Ruhetag — bitte wählen Sie einen anderen Tag.',
    closureError: 'Wir befinden uns vom {{start}} bis {{end}} im Betriebsurlaub — bitte wählen Sie ein anderes Datum.',
    successHeading: 'Reservierungsanfrage gesendet',
    successBody: 'Vielen Dank! Wir bestätigen Ihre Reservierung so schnell wie möglich per E-Mail oder Telefon.',
    successRetry: 'Neue Anfrage senden',
  },
  legal: {
    impressumSeoTitle: 'Impressum',
    impressumSeoDescription: 'Impressum von Mai Tai Leipzig.',
    datenschutzSeoTitle: 'Datenschutzerklärung',
    datenschutzSeoDescription: 'Datenschutzerklärung von Mai Tai Leipzig.',
    rechtliches: 'Rechtliches',
    herausgeber: 'Herausgeber',
    onlyGermanNotice:
      'Aus rechtlichen Gründen ist diese Seite ausschließlich auf Deutsch verfügbar.',
    impressumLinkNote: 'Informationen zum Umgang mit personenbezogenen Daten finden Sie in unserer',
  },
  notFound: {
    seoTitle: 'Seite nicht gefunden',
    seoDescription: 'Diese Seite existiert nicht.',
    heading: 'Diese Seite ist wohl unterwegs geblieben',
    body: 'Die gewünschte Seite konnte nicht gefunden werden.',
    cta: 'Zurück zur Startseite',
  },
} as const

export default de
