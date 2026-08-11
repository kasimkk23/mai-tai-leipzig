import type { Translation } from '../types'

const it: Translation = {
  meta: { htmlLang: 'it' },
  brand: {
    tagline: 'Ristorante asiatico con specialità thailandesi',
  },
  nav: {
    willkommen: 'Benvenuti',
    karte: 'Il Nostro Menù',
    mittagskarte: 'Menù Pranzo',
    reservierung: 'Prenotazione',
    impressum: 'Note Legali',
    datenschutz: 'Privacy',
    reserveCta: 'Prenota un Tavolo',
    menuOpen: 'Apri il menu',
    menuClose: 'Chiudi il menu',
    languageLabel: 'Scegli la lingua',
  },
  footer: {
    taglineWithSince: '{{tagline}} — dal {{since}} in Könneritzstraße a Lipsia.',
    navHeading: 'Navigazione',
    contactHeading: 'Contatti',
    hoursHeading: 'Orari di Apertura',
    telLabel: 'Tel. ',
    mobileLabel: 'Cellulare ',
    routePlanen: 'Indicazioni stradali',
    copyright: '© {{year}} {{name}} — Dal {{since}}',
    madeWith: 'Made with care in Leipzig.',
  },
  days: {
    monday: 'Lunedì',
    tuesday: 'Martedì',
    wednesday: 'Mercoledì',
    thursday: 'Giovedì',
    friday: 'Venerdì',
    saturday: 'Sabato',
    sunday: 'Domenica',
  },
  hours: {
    closed: 'Giorno di riposo (chiuso)',
    rangeJoiner: ' e ',
    timeSuffix: '',
    lunchNote: 'Dal martedì al venerdì, festivi esclusi, dalle 11:30 alle 14:30',
  },
  closure: {
    label: 'Chiusura per ferie: ',
    message:
      'Il nostro ristorante rimarrà chiuso per ferie dal {{start}} al {{end}} incluso. Dal {{reopen}} saremo di nuovo a vostra disposizione con i consueti orari e non vediamo l\'ora di accogliervi.',
    dismissAria: 'Chiudi l\'avviso',
  },
  home: {
    seoTitle: 'Ristorante Thailandese a Lipsia',
    seoDescription:
      'Mai Tai — ristorante asiatico con specialità thailandesi in Könneritzstraße a Lipsia. Gli autentici sapori della Thailandia dal 1993.',
    hero: {
      eyebrow: 'A Lipsia dal 1993',
      heading: 'Il vero sapore della Thailandia',
      subtitle: 'Ristorante asiatico con specialità thailandesi, nel cuore di Könneritzstraße.',
      ctaMenu: 'Scopri il menù',
      ctaReserve: 'Prenota un tavolo',
      slideAria: 'Mostra immagine {{n}}',
      slides: {
        curry: 'Curry thailandese verde con basilico fresco e lime kaffir',
        satay: 'Spiedini di pollo "Gai Sate" alla griglia hibachi con salsa di arachidi',
        springrolls: 'Involtini primavera croccanti "Popia" con salsa nam pla',
        padthai: 'Pad Thai con germogli di soia, uovo e arachidi tostate',
      },
    },
    feature: {
      genussvoll: 'Delizioso',
      herzlich: 'Caloroso & Premuroso',
      wohlschmeckend: 'Gustoso',
      exotisch: 'Esoticamente Invitante',
      gastfreundlich: 'Ospitale',
    },
    welcome: {
      eyebrow: 'Nella "Kö" dal 1993',
      heading: 'Dove la tradizione incontra l\'ospitalità',
      body: 'Benvenuti nel cuore di Lipsia, in Könneritzstraße, dove dal 1993 vi facciamo scoprire gli autentici sapori della Thailandia. Lasciatevi conquistare dal nostro mondo culinario e vivete un\'esperienza unica tra tradizione e ospitalità. Rilassatevi e gustate con noi il vero sapore della Thailandia!',
      cta: 'Vai al menù',
      photoBasilAlt: 'Basilico thailandese fresco e ingredienti in cucina',
      photoTableAlt: 'Un tavolo apparecchiato al ristorante Mai Tai',
    },
    teaser: {
      eyebrow: 'Dalla Nostra Cucina',
      heading: 'Un assaggio del nostro menù',
      ctaFull: 'Vedi il menù completo',
      ctaLunch: 'Menù pranzo',
    },
    hoursSection: {
      eyebrow: 'Orari di Apertura',
      heading: 'Quando siamo a vostra disposizione',
      lunchNote: 'Menù pranzo: {{note}}',
    },
    reserveCta: {
      eyebrow: 'Prenota un tavolo',
      heading: 'Non vediamo l\'ora di accogliervi',
      body: 'Prenotate online in pochi passaggi, oppure chiamateci direttamente — saremo felici di prepararvi un tavolo accogliente.',
      cta: 'Prenota ora',
    },
  },
  menuPage: {
    seoTitle: 'Menù',
    seoDescription:
      'Il menù completo di Mai Tai Lipsia — antipasti, zuppe, insalate, piatti al wok e alla griglia, curry, riso e noodles.',
    eyebrow: 'Menù',
    heading: 'Il nostro menù',
    intro:
      'Dagli antipasti croccanti ai profumati piatti al wok — tutti i prezzi sono già inclusi. Il livello di piccantezza è indicato per ogni piatto.',
    downloadPdf: 'Scarica il menù (PDF)',
    sidesHeading: 'Contorni Opzionali',
  },
  categories: {
    vorspeisen: { title: 'Antipasti', subtitle: 'Antipasti' },
    suppen: { title: 'Zuppe', subtitle: 'Zuppe' },
    salate: { title: 'Insalate', subtitle: 'Insalate' },
    hauptgerichte: { title: 'Piatti Principali', subtitle: 'Wok & Griglia' },
    reisNudeln: { title: 'Riso & Noodles', subtitle: 'Riso & Noodles' },
    kinder: { title: 'Per i Più Piccoli', subtitle: 'Menù Bambini' },
  },
  spice: {
    leichte: 'leggermente piccante',
    thai: 'piccante alla thailandese',
  },
  vegetarianPossible: 'Disponibile versione vegetariana',
  curries: {
    navLabel: 'Curry',
    eyebrow: 'Componi il Tuo Curry',
    heading: 'Componi il curry come preferisci',
    intro:
      'Tutti i curry sono serviti con riso al gelsomino. Scegliete prima il tipo di curry, poi l\'ingrediente che preferite.',
    step1: '1. Il curry',
    step2: '2. L\'ingrediente',
    inclRice: 'riso al gelsomino incluso',
  },
  menuItems: {
    popia: { description: 'Involtini primavera con salsa nam pla' },
    'kieu-tood': { description: 'Wonton croccanti con salsa alle prugne' },
    'gai-sate': {
      description: 'Spiedini di pollo con salsa di arachidi e sweet chili, alla griglia hibachi',
    },
    'gung-tood': { description: 'Gamberi impanati panko con salsa sriracha-teriyaki' },
    'sweet-kisses': { description: 'Ravioli al vapore con olio all\'aglio e salsa chili-soia' },
    'tom-kha-gai': { description: 'Zuppa di cocco con pollo' },
    'tom-yum-gung': { description: 'Zuppa agropiccante con gamberoni' },
    'sun-la-tan': {
      description: 'Zuppa di verdure alla cinese',
      options: { classic: 'Classica', duck: 'con anatra' },
    },
    'wan-tan-suppe': { description: 'Zuppa di ravioli (ripieno di maiale e gamberi) con verdure a foglia' },
    'somm-tamm': {
      description: 'Papaya verde a listarelle con carote, pomodorini, fagiolini & arachidi tritate',
    },
    'laab-gai': {
      description: 'Petto di pollo tritato con menta, coriandolo, cipolla rossa & riso glutinoso tostato',
    },
    'yam-nuea': {
      description:
        'Insalata di manzo con pomodorini, coriandolo, cipolla rossa & menta, riso glutinoso tostato',
    },
    'ped-mai-tai': {
      description:
        'Anatra croccante su germogli di soia saltati al wok, verdure miste & pak choi. Salsa a scelta: hoisin piccante / tamarindo / arachidi / teriyaki',
      options: { duck: 'Con anatra', crispyChicken: 'Con pollo croccante' },
    },
    'hot-kra-pao': {
      description: 'Carne macinata, cipolla, uovo fritto, peperoncino & basilico santo "krapao"',
      options: { beef: 'Con manzo', chicken: 'Con pollo', tofu: 'Con tofu' },
    },
    'happy-seafood': {
      description:
        'Gamberoni, calamari e capesante saltati con erbe, citronella, aglio e zenzero, sedano & salsa ai frutti di mare',
    },
    'steak-a-la-mai-tai': {
      description:
        'Tagliata di manzo alla griglia, cipolla, funghi ostrica, pak choi, pomodorini & salsa al pepe speziata',
    },
    'ped-pu-kau-fai': {
      description: 'Anatra marinata, cotta in una salsa thailandese agrodolce',
    },
    'pad-thai': {
      description: 'Noodles di riso con germogli di soia, arachidi, uovo & tamarindo leggermente acidulo',
      addOns: '+2,00 € tofu · +2,00 € pollo · +4,00 € gamberi',
    },
    'pad-si-lu': {
      description: 'Noodles di riso saltati con choy sum, anacardi, uovo & salsa di soia',
      addOns: '+2,00 € tofu · +2,00 € pollo · +3,00 € manzo · +4,00 € gamberi',
    },
    'nasi-goreng': {
      description:
        'Riso al gelsomino saltato con uovo, curcuma, anacardi, ananas, spiedini di pollo, krupuk & salsa di arachidi. Versione vegetariana con tofu su richiesta',
    },
    'kleiner-panda': { description: 'Riso al gelsomino saltato con pollo croccante o anatra croccante' },
    'wilder-tiger': {
      description: 'Spiedini di pollo, wonton, krupuk, patatine con salsa sweet chili e maionese',
    },
  },
  curryTypes: {
    'gaeng-kua': { description: 'Curry rosso al cocco con bambù, peperone, ananas & basilico thailandese' },
    'gaeng-khieaw-whan': {
      description: 'Curry verde al cocco con bambù, peperoncino, pannocchiette & basilico thailandese',
    },
    'pah-naeng-curry': {
      description:
        'Curry panang al cocco con arachidi macinate, peperone, fagiolini, litchi, lime kaffir & basilico thailandese',
    },
  },
  curryProteins: {
    haehnchen: 'Pollo',
    rind: 'Manzo',
    ente: 'Anatra',
    tigergarnelen: 'Gamberoni',
    lachs: 'Salmone',
    tofu: 'Tofu',
  },
  sides: {
    'gebratener-reis': 'Riso saltato',
    'gebratene-pad-thai-nudeln': 'Noodles Pad Thai saltati',
    klebreis: 'Riso glutinoso',
  },
  lunchPage: {
    seoTitle: 'Menù Pranzo',
    seoDescription:
      'Menù pranzo di Mai Tai Lipsia — piatti thailandesi a pranzo, dal martedì al venerdì dalle 11:30 alle 14:30.',
    eyebrow: 'Menù Pranzo',
    heading: 'Il pranzo da Mai Tai',
    footnote:
      'Tutti i prezzi sono già inclusi. Il livello di piccantezza è indicato per ogni piatto — segnalateci pure allergie o intolleranze.',
  },
  lunchItems: {
    'thai-curry': {
      description: 'Curry thailandese con verdure di stagione',
      addOns: '+2,00 € tofu · +3,00 € pollo tenero · +4,00 € pollo croccante · +5,00 € anatra croccante',
    },
    'pad-si-lu-mittag': {
      description: 'Noodles thailandesi saltati con anacardi e verdure',
      addOns: '+3,00 € pollo · +4,00 € manzo · +6,00 € gamberi',
    },
    'gai-kra-pao': {
      description:
        'Pollo tritato grossolanamente, saltato con basilico santo "krapao", cipolla e peperone, con uovo fritto sopra (versione vegetariana con tofu disponibile)',
    },
    'pad-khing': {
      description: 'Zenzero, cipolla, funghi orecchio di giuda e peperoncino, saltati in salsa piccante',
      options: { beef: 'Con manzo', shrimp: 'Con gamberi' },
    },
    'pork-belly': { description: 'Pancia di maiale brasata con uovo, insalata di cavolo rapa e riso glutinoso' },
  },
  reservationPage: {
    seoTitle: 'Prenotazione',
    seoDescription:
      'Prenota un tavolo online da Mai Tai Lipsia — oppure chiamaci direttamente allo 0341 / 479 229 1.',
    eyebrow: 'Prenotazione',
    heading: 'Online o per telefono',
    intro:
      'Qui potete effettuare la vostra prenotazione online in modo semplice e veloce. Basta scegliere il giorno e l\'orario desiderati.',
    photoAlt: 'Un tavolo accogliente al ristorante Mai Tai, pronto per gli ospiti',
    personalHeading: 'Preferite parlare con noi?',
    personalBody: 'Per gruppi di più di 8 persone, vi chiediamo di prenotare telefonicamente.',
  },
  form: {
    honeypotLabel: 'Azienda (lasciare vuoto)',
    name: 'Nome',
    phone: 'Telefono',
    email: 'E-mail',
    date: 'Data',
    time: 'Orario',
    timeChoose: 'Scegliere',
    timeSuffix: '',
    guests: 'Numero di ospiti',
    guestUnitOne: 'persona',
    guestUnitOther: 'persone',
    guestsOverNote: 'Per gruppi di più di 8 persone, vi chiediamo di prenotare telefonicamente al {{phone}}.',
    message: 'Messaggio (facoltativo)',
    messagePlaceholder: 'Allergie, richieste particolari, occasione…',
    submit: 'Richiedi prenotazione',
    submitting: 'Invio in corso…',
    errorGeneric: 'Si è verificato un errore. Riprova o chiamaci direttamente.',
    mondayError: 'Il lunedì è il nostro giorno di riposo — scegliete un altro giorno.',
    closureError: 'Siamo chiusi per ferie dal {{start}} al {{end}} — scegliete un\'altra data.',
    successHeading: 'Richiesta di prenotazione inviata',
    successBody: 'Grazie! Confermeremo la vostra prenotazione il prima possibile via e-mail o telefono.',
    successRetry: 'Invia una nuova richiesta',
  },
  legal: {
    impressumSeoTitle: 'Note Legali',
    impressumSeoDescription: 'Note legali di Mai Tai Lipsia.',
    datenschutzSeoTitle: 'Informativa sulla Privacy',
    datenschutzSeoDescription: 'Informativa sulla privacy di Mai Tai Lipsia.',
    rechtliches: 'Note legali',
    herausgeber: 'Editore',
    onlyGermanNotice: 'Per motivi legali, questa pagina è disponibile solo in tedesco.',
    impressumLinkNote: 'Per informazioni su come trattiamo i dati personali, consultate la nostra',
  },
  notFound: {
    seoTitle: 'Pagina Non Trovata',
    seoDescription: 'Questa pagina non esiste.',
    heading: 'Sembra che questa pagina si sia persa',
    body: 'La pagina cercata non è stata trovata.',
    cta: 'Torna alla home',
  },
}

export default it
