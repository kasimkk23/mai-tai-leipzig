import type { Translation } from '../types'

const fr: Translation = {
  meta: { htmlLang: 'fr' },
  brand: {
    tagline: 'Restaurant asiatique aux spécialités thaïlandaises',
  },
  nav: {
    willkommen: 'Accueil',
    karte: 'Notre Carte',
    mittagskarte: 'Menu Déjeuner',
    reservierung: 'Réservation',
    impressum: 'Mentions Légales',
    datenschutz: 'Confidentialité',
    reserveCta: 'Réserver une Table',
    menuOpen: 'Ouvrir le menu',
    menuClose: 'Fermer le menu',
    languageLabel: 'Choisir la langue',
  },
  footer: {
    taglineWithSince: '{{tagline}} — depuis {{since}}, Könneritzstraße, Leipzig.',
    navHeading: 'Navigation',
    contactHeading: 'Contact',
    hoursHeading: 'Horaires d\'ouverture',
    telLabel: 'Tél. ',
    mobileLabel: 'Mobile ',
    routePlanen: 'Itinéraire',
    copyright: '© {{year}} {{name}} — Depuis {{since}}',
    madeWith: 'Made with care in Leipzig.',
  },
  days: {
    monday: 'Lundi',
    tuesday: 'Mardi',
    wednesday: 'Mercredi',
    thursday: 'Jeudi',
    friday: 'Vendredi',
    saturday: 'Samedi',
    sunday: 'Dimanche',
  },
  hours: {
    closed: 'Fermé',
    rangeJoiner: ' et ',
    timeSuffix: '',
    lunchNote: 'Du mardi au vendredi, sauf jours fériés, de 11h30 à 14h30',
  },
  closure: {
    label: 'Fermeture annuelle : ',
    message:
      'Notre restaurant sera fermé pour congés annuels du {{start}} au {{end}} inclus. À partir du {{reopen}}, nous serons de nouveau ouverts aux horaires habituels et nous nous réjouissons de vous accueillir.',
    dismissAria: 'Fermer l\'avis',
  },
  home: {
    seoTitle: 'Restaurant thaïlandais à Leipzig',
    seoDescription:
      'Mai Tai — restaurant asiatique aux spécialités thaïlandaises, Könneritzstraße à Leipzig. Les saveurs authentiques de la Thaïlande depuis 1993.',
    hero: {
      eyebrow: 'À Leipzig depuis 1993',
      heading: 'Le vrai goût de la Thaïlande',
      subtitle: 'Restaurant asiatique aux spécialités thaïlandaises, au cœur de la Könneritzstraße.',
      ctaMenu: 'Découvrir la carte',
      ctaReserve: 'Réserver une table',
      slideAria: 'Afficher l\'image {{n}}',
      slides: {
        curry: 'Curry thaï vert au basilic frais et au combava',
        satay: 'Brochettes de poulet « Gai Sate » grillées au hibachi, sauce cacahuète',
        springrolls: 'Rouleaux de printemps croustillants « Popia », sauce nam pla',
        padthai: 'Pad Thaï aux germes de soja, œuf et cacahuètes grillées',
      },
    },
    feature: {
      genussvoll: 'Savoureux',
      herzlich: 'Chaleureux & Attentionné',
      wohlschmeckend: 'Délicieux',
      exotisch: 'Exotique & Envoûtant',
      gastfreundlich: 'Accueillant',
    },
    welcome: {
      eyebrow: 'Sur la « Kö » depuis 1993',
      heading: 'La tradition rencontre l\'hospitalité',
      body: 'Bienvenue au cœur de Leipzig, sur la Könneritzstraße, où nous vous faisons découvrir depuis 1993 les saveurs authentiques de la Thaïlande. Plongez dans notre univers culinaire et découvrez un mélange unique de tradition et d\'hospitalité. Détendez-vous et savourez avec nous le vrai goût de la Thaïlande !',
      cta: 'Voir la carte',
      photoBasilAlt: 'Basilic thaï frais et ingrédients en cuisine',
      photoTableAlt: 'Une table dressée au restaurant Mai Tai',
    },
    teaser: {
      eyebrow: 'De notre cuisine',
      heading: 'Un avant-goût de notre carte',
      ctaFull: 'Voir toute la carte',
      ctaLunch: 'Menu déjeuner',
    },
    hoursSection: {
      eyebrow: 'Horaires d\'ouverture',
      heading: 'Quand nous sommes là pour vous',
      lunchNote: 'Menu déjeuner : {{note}}',
    },
    reserveCta: {
      eyebrow: 'Réserver une table',
      heading: 'Nous nous réjouissons de votre visite',
      body: 'Réservez en ligne en quelques étapes, ou appelez-nous tout simplement — nous vous préparerons volontiers une belle table.',
      cta: 'Réserver maintenant',
    },
  },
  menuPage: {
    seoTitle: 'Carte',
    seoDescription:
      'La carte complète de Mai Tai Leipzig — entrées, soupes, salades, plats au wok & au grill, curries, riz & nouilles.',
    eyebrow: 'Carte',
    heading: 'Notre carte',
    intro:
      'Des entrées croustillantes aux plats parfumés au wok — tous les prix sont indiqués. Le niveau de piquant est précisé pour chaque plat.',
    downloadPdf: 'Télécharger la carte (PDF)',
    sidesHeading: 'Accompagnements en option',
  },
  categories: {
    vorspeisen: { title: 'Entrées', subtitle: 'Entrées' },
    suppen: { title: 'Soupes', subtitle: 'Soupes' },
    salate: { title: 'Salades', subtitle: 'Salades' },
    hauptgerichte: { title: 'Plats Principaux', subtitle: 'Wok & Grill' },
    reisNudeln: { title: 'Riz & Nouilles', subtitle: 'Riz & Nouilles' },
    kinder: { title: 'Pour les Petits', subtitle: 'Menu Enfants' },
  },
  spice: {
    leichte: 'légèrement épicé',
    thai: 'épicé à la thaïe',
  },
  vegetarianPossible: 'Option végétarienne possible',
  curries: {
    navLabel: 'Curries',
    eyebrow: 'Composez votre curry',
    heading: 'Composez votre curry sur mesure',
    intro:
      'Tous les curries sont servis avec du riz au jasmin. Choisissez d\'abord votre curry, puis votre ingrédient préféré.',
    step1: '1. Le curry',
    step2: '2. L\'ingrédient',
    inclRice: 'riz au jasmin inclus',
  },
  menuItems: {
    popia: { description: 'Rouleaux de printemps, sauce nam pla' },
    'kieu-tood': { description: 'Wontons croustillants, sauce aux prunes' },
    'gai-sate': {
      description: 'Brochettes de poulet, sauce cacahuète et sauce sweet chili, grillées au hibachi',
    },
    'gung-tood': { description: 'Crevettes panées façon panko, sauce sriracha-teriyaki' },
    'sweet-kisses': {
      description: 'Raviolis vapeur, huile à l\'ail et sauce piment-soja',
    },
    'tom-kha-gai': { description: 'Soupe de coco au poulet' },
    'tom-yum-gung': { description: 'Soupe aigre-piquante aux grosses crevettes' },
    'sun-la-tan': {
      description: 'Soupe de légumes à la chinoise',
      options: { classic: 'Classique', duck: 'au canard' },
    },
    'wan-tan-suppe': { description: 'Soupe de raviolis (farce porc et crevette) aux légumes verts' },
    'somm-tamm': {
      description: 'Papaye verte râpée, carottes, tomates cerises, haricots verts & cacahuètes concassées',
    },
    'laab-gai': {
      description:
        'Poulet émincé, menthe, coriandre, oignon rouge & riz gluant grillé',
    },
    'yam-nuea': {
      description:
        'Salade de bœuf, tomates cerises, coriandre, oignon rouge & menthe, riz gluant grillé',
    },
    'ped-mai-tai': {
      description:
        'Canard croustillant sur germes de soja sautés au wok, légumes variés & pak choï. Sauce au choix : hoisin pimenté / tamarin / cacahuète / teriyaki',
      options: { duck: 'Au canard', crispyChicken: 'Au poulet croustillant' },
    },
    'hot-kra-pao': {
      description: 'Viande hachée, oignon, œuf au plat, piment & basilic sacré « krapao »',
      options: { beef: 'Au bœuf', chicken: 'Au poulet', tofu: 'Au tofu' },
    },
    'happy-seafood': {
      description:
        'Grosses crevettes, calamar et noix de Saint-Jacques sautés aux herbes, citronnelle, ail et gingembre, céleri & sauce fruits de mer',
    },
    'steak-a-la-mai-tai': {
      description:
        'Steak de bœuf grillé à point, oignon, pleurotes, pak choï, tomates cerises & sauce poivrée relevée',
    },
    'ped-pu-kau-fai': {
      description: 'Canard mariné, mijoté dans une sauce thaïe aigre-douce',
    },
    'pad-thai': {
      description: 'Nouilles de riz, germes de soja, cacahuètes, œuf & tamarin légèrement acidulé',
      addOns: '+2,00 € tofu · +2,00 € poulet · +4,00 € crevettes',
    },
    'pad-si-lu': {
      description: 'Nouilles de riz sautées, choy sum, noix de cajou, œuf & sauce soja',
      addOns: '+2,00 € tofu · +2,00 € poulet · +3,00 € bœuf · +4,00 € crevettes',
    },
    'nasi-goreng': {
      description:
        'Riz au jasmin sauté, œuf, curcuma, noix de cajou, ananas, brochettes de poulet, krupuk & sauce cacahuète. Version végétarienne au tofu possible',
    },
    'kleiner-panda': { description: 'Riz au jasmin sauté, poulet croustillant ou canard croustillant' },
    'wilder-tiger': {
      description: 'Brochettes de poulet, wontons, krupuk, frites, sauce sweet chili et mayonnaise',
    },
  },
  curryTypes: {
    'gaeng-kua': { description: 'Curry rouge au lait de coco, bambou, poivron, ananas & basilic thaï' },
    'gaeng-khieaw-whan': {
      description: 'Curry vert au lait de coco, bambou, piment, mini épis de maïs & basilic thaï',
    },
    'pah-naeng-curry': {
      description:
        'Curry panang au lait de coco, cacahuètes moulues, poivron, haricots verts, litchis, combava & basilic thaï',
    },
  },
  curryProteins: {
    haehnchen: 'Poulet',
    rind: 'Bœuf',
    ente: 'Canard',
    tigergarnelen: 'Grosses crevettes',
    lachs: 'Saumon',
    tofu: 'Tofu',
  },
  sides: {
    'gebratener-reis': 'Riz sauté',
    'gebratene-pad-thai-nudeln': 'Nouilles Pad Thaï sautées',
    klebreis: 'Riz gluant',
  },
  lunchPage: {
    seoTitle: 'Menu Déjeuner',
    seoDescription:
      'Menu déjeuner de Mai Tai Leipzig — plats thaïlandais à midi, du mardi au vendredi de 11h30 à 14h30.',
    eyebrow: 'Menu Déjeuner',
    heading: 'Le déjeuner chez Mai Tai',
    footnote:
      'Tous les prix sont indiqués. Le niveau de piquant est précisé pour chaque plat — n\'hésitez pas à nous signaler toute allergie ou intolérance.',
  },
  lunchItems: {
    'thai-curry': {
      description: 'Curry thaï aux légumes de saison',
      addOns: '+2,00 € tofu · +3,00 € poulet tendre · +4,00 € poulet croustillant · +5,00 € canard croustillant',
    },
    'pad-si-lu-mittag': {
      description: 'Nouilles thaïes sautées, noix de cajou et légumes',
      addOns: '+3,00 € poulet · +4,00 € bœuf · +6,00 € crevettes',
    },
    'gai-kra-pao': {
      description:
        'Poulet grossièrement haché, sauté au basilic sacré « krapao », oignon et poivron, œuf au plat sur le dessus (version végétarienne au tofu possible)',
    },
    'pad-khing': {
      description: 'Gingembre, oignon, champignons noirs et piment, sautés dans une sauce relevée',
      options: { beef: 'Au bœuf', shrimp: 'Aux crevettes' },
    },
    'pork-belly': { description: 'Poitrine de porc braisée, œuf, salade de chou-rave et riz gluant' },
  },
  reservationPage: {
    seoTitle: 'Réservation',
    seoDescription:
      'Réservez une table en ligne chez Mai Tai Leipzig — ou appelez-nous directement au 0341 / 479 229 1.',
    eyebrow: 'Réservation',
    heading: 'En ligne ou par téléphone',
    intro:
      'Effectuez votre réservation en ligne en toute simplicité — il vous suffit de choisir le jour et l\'heure souhaités.',
    photoAlt: 'Une table chaleureuse au restaurant Mai Tai, prête à vous accueillir',
    personalHeading: 'Vous préférez nous parler ?',
    personalBody: 'Pour les groupes de plus de 8 personnes, merci de réserver par téléphone.',
  },
  form: {
    honeypotLabel: 'Entreprise (laisser vide)',
    name: 'Nom',
    phone: 'Téléphone',
    email: 'E-mail',
    date: 'Date',
    time: 'Heure',
    timeChoose: 'Veuillez choisir',
    timeSuffix: '',
    guests: 'Nombre de personnes',
    guestUnitOne: 'personne',
    guestUnitOther: 'personnes',
    guestsOverNote: 'Pour les groupes de plus de 8 personnes, merci de réserver par téléphone au {{phone}}.',
    message: 'Message (facultatif)',
    messagePlaceholder: 'Allergies, demandes particulières, occasion…',
    submit: 'Demander une réservation',
    submitting: 'Envoi en cours…',
    errorGeneric: 'Une erreur est survenue. Veuillez réessayer ou nous appeler.',
    mondayError: 'Nous sommes fermés le lundi — merci de choisir un autre jour.',
    closureError: 'Nous sommes fermés pour congés annuels du {{start}} au {{end}} — merci de choisir une autre date.',
    successHeading: 'Demande de réservation envoyée',
    successBody: 'Merci ! Nous confirmerons votre réservation dans les plus brefs délais par e-mail ou par téléphone.',
    successRetry: 'Envoyer une nouvelle demande',
  },
  legal: {
    impressumSeoTitle: 'Mentions Légales',
    impressumSeoDescription: 'Mentions légales de Mai Tai Leipzig.',
    datenschutzSeoTitle: 'Politique de Confidentialité',
    datenschutzSeoDescription: 'Politique de confidentialité de Mai Tai Leipzig.',
    rechtliches: 'Mentions légales',
    herausgeber: 'Éditeur',
    onlyGermanNotice: 'Pour des raisons juridiques, cette page n\'est disponible qu\'en allemand.',
    impressumLinkNote: 'Pour savoir comment nous traitons vos données personnelles, consultez notre',
  },
  notFound: {
    seoTitle: 'Page introuvable',
    seoDescription: 'Cette page n\'existe pas.',
    heading: 'Cette page semble s\'être égarée',
    body: 'La page que vous cherchez est introuvable.',
    cta: 'Retour à l\'accueil',
  },
}

export default fr
