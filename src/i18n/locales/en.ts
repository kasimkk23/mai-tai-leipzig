import type { Translation } from '../types'

const en: Translation = {
  meta: { htmlLang: 'en' },
  brand: {
    tagline: 'Asian restaurant with Thai specialities',
  },
  nav: {
    willkommen: 'Welcome',
    karte: 'Our Menu',
    mittagskarte: 'Lunch Menu',
    reservierung: 'Reservation',
    impressum: 'Legal Notice',
    datenschutz: 'Privacy Policy',
    reserveCta: 'Reserve a Table',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    languageLabel: 'Choose language',
  },
  footer: {
    taglineWithSince: '{{tagline}} — since {{since}} on Könneritzstraße in Leipzig.',
    navHeading: 'Navigation',
    contactHeading: 'Contact',
    hoursHeading: 'Opening Hours',
    telLabel: 'Tel. ',
    mobileLabel: 'Mobile ',
    routePlanen: 'Get directions',
    copyright: '© {{year}} {{name}} — Since {{since}}',
    madeWith: 'Made with care in Leipzig.',
  },
  days: {
    monday: 'Monday',
    tuesday: 'Tuesday',
    wednesday: 'Wednesday',
    thursday: 'Thursday',
    friday: 'Friday',
    saturday: 'Saturday',
    sunday: 'Sunday',
  },
  hours: {
    closed: 'Closed',
    rangeJoiner: ' and ',
    timeSuffix: '',
    lunchNote: 'Tuesday to Friday, except public holidays, 11:30 am–2:30 pm',
  },
  closure: {
    label: 'Closed for holidays: ',
    message:
      'Our restaurant will be closed for our annual break from {{start}} through {{end}} inclusive. From {{reopen}} we\'ll be back to our usual hours and look forward to welcoming you.',
    dismissAria: 'Dismiss notice',
  },
  home: {
    seoTitle: 'Thai Restaurant in Leipzig',
    seoDescription:
      'Mai Tai — Asian restaurant with Thai specialities on Könneritzstraße in Leipzig. Authentic flavours of Thailand since 1993.',
    hero: {
      eyebrow: 'In Leipzig since 1993',
      heading: 'The true taste of Thailand',
      subtitle: 'Asian restaurant with Thai specialities, right in the heart of Könneritzstraße.',
      ctaMenu: 'Explore the Menu',
      ctaReserve: 'Reserve a Table',
      slideAria: 'Show image {{n}}',
      slides: {
        curry: 'Green Thai curry with fresh basil and kaffir lime',
        satay: '"Gai Sate" chicken skewers from the hibachi grill with peanut dip',
        springrolls: 'Crispy "Popia" spring rolls with nam pla dip',
        padthai: 'Pad Thai with bean sprouts, egg and roasted peanuts',
      },
    },
    feature: {
      genussvoll: 'Delightful',
      herzlich: 'Warm & Attentive',
      wohlschmeckend: 'Delicious',
      exotisch: 'Exotically Enticing',
      gastfreundlich: 'Hospitable',
    },
    welcome: {
      eyebrow: 'On the "Kö" since 1993',
      heading: 'Tradition meets hospitality',
      body: 'Welcome to the heart of Leipzig on Könneritzstraße, where we\'ve been bringing you the authentic flavours of Thailand since 1993. Immerse yourself in our culinary world and experience a unique blend of tradition and hospitality. Relax and enjoy the true taste of Thailand with us!',
      cta: 'View the Menu',
      photoBasilAlt: 'Fresh Thai basil and ingredients in the kitchen',
      photoTableAlt: 'A set table at Mai Tai restaurant',
    },
    teaser: {
      eyebrow: 'From Our Kitchen',
      heading: 'A taste of what\'s on our menu',
      ctaFull: 'See the Full Menu',
      ctaLunch: 'Lunch Menu',
    },
    hoursSection: {
      eyebrow: 'Opening Hours',
      heading: 'When we\'re here for you',
      lunchNote: 'Lunch menu: {{note}}',
    },
    reserveCta: {
      eyebrow: 'Reserve a Table',
      heading: 'We look forward to your visit',
      body: 'Reserve online in just a few steps, or simply give us a call — we\'ll be happy to have a lovely table ready for you.',
      cta: 'Reserve Now',
    },
  },
  menuPage: {
    seoTitle: 'Menu',
    seoDescription:
      'The full Mai Tai Leipzig menu — appetizers, soups, salads, wok & grill dishes, curries, rice & noodles.',
    eyebrow: 'Menu',
    heading: 'Our Menu',
    intro:
      'From crispy appetizers to fragrant wok dishes — all prices included. Spice level is noted for every dish.',
    downloadPdf: 'Download the Menu (PDF)',
    sidesHeading: 'Optional Sides',
  },
  categories: {
    vorspeisen: { title: 'Appetizers', subtitle: 'Starters' },
    suppen: { title: 'Soups', subtitle: 'Soups' },
    salate: { title: 'Salads', subtitle: 'Salads' },
    hauptgerichte: { title: 'Main Dishes', subtitle: 'Wok & Grill' },
    reisNudeln: { title: 'Rice & Noodles', subtitle: 'Rice & Noodles' },
    kinder: { title: 'For Little Ones', subtitle: "Kids' Menu" },
  },
  spice: {
    leichte: 'mildly spicy',
    thai: 'Thai spicy',
  },
  vegetarianPossible: 'Vegetarian option available',
  curries: {
    navLabel: 'Curries',
    eyebrow: 'Build Your Curry',
    heading: 'Put together your own curry',
    intro:
      'All curries are served with jasmine rice. First choose your curry, then your preferred ingredient.',
    step1: '1. Curry',
    step2: '2. Ingredient',
    inclRice: 'incl. jasmine rice',
  },
  menuItems: {
    popia: { description: 'Spring rolls with nam pla dip' },
    'kieu-tood': { description: 'Crispy wontons with plum dip' },
    'gai-sate': {
      description: 'Chicken skewers with peanut and sweet chilli dip, from the hibachi grill',
    },
    'gung-tood': { description: 'Panko prawns with sriracha teriyaki' },
    'sweet-kisses': { description: 'Steamed dumplings with garlic oil & chilli-soy dip' },
    'tom-kha-gai': { description: 'Coconut soup with chicken' },
    'tom-yum-gung': { description: 'Hot and sour soup with tiger prawns' },
    'sun-la-tan': {
      description: 'Chinese vegetable soup',
      options: { classic: 'Classic', duck: 'with duck' },
    },
    'wan-tan-suppe': { description: 'Wonton soup (pork and prawn filling) with leafy greens' },
    'somm-tamm': {
      description: 'Shredded green papaya with carrots, cherry tomatoes, green beans & crushed peanuts',
    },
    'laab-gai': {
      description:
        'Minced chicken breast with mint, coriander, red onion & toasted sticky rice grains',
    },
    'yam-nuea': {
      description:
        'Beef salad with cherry tomatoes, coriander, red onion & mint, toasted sticky rice grains',
    },
    'ped-mai-tai': {
      description:
        'Crispy duck on wok-tossed bean sprouts, mixed vegetables & pak choy. Choice of sauce: spicy hoisin / tamarind / peanut / teriyaki',
      options: { duck: 'With duck', crispyChicken: 'With crispy chicken' },
    },
    'hot-kra-pao': {
      description: 'Minced meat, onion, fried egg, chilli & holy basil "krapao"',
      options: { beef: 'With beef', chicken: 'With chicken', tofu: 'With tofu' },
    },
    'happy-seafood': {
      description:
        'King prawns, squid and scallops tossed with herb-lemongrass-garlic-ginger, celery & seafood sauce',
    },
    'steak-a-la-mai-tai': {
      description:
        'Medium-grilled beef steak, onion, oyster mushrooms, pak choy, cherry tomatoes & spiced pepper sauce',
    },
    'ped-pu-kau-fai': {
      description: 'Tender marinated duck cooked in a sweet-sour-tangy Thai sauce',
    },
    'pad-thai': {
      description: 'Rice noodles with bean sprouts, peanuts, egg & lightly sour tamarind',
      addOns: '+€2.00 tofu · +€2.00 chicken · +€4.00 prawns',
    },
    'pad-si-lu': {
      description: 'Stir-fried rice noodles with choy sum, cashews, egg & soy sauce',
      addOns: '+€2.00 tofu · +€2.00 chicken · +€3.00 beef · +€4.00 prawns',
    },
    'nasi-goreng': {
      description:
        'Fried jasmine rice with egg, turmeric, cashews, pineapple, chicken skewers, krupuk & peanut sauce. Vegetarian with tofu on request',
    },
    'kleiner-panda': { description: 'Fried jasmine rice with crispy chicken or crispy duck' },
    'wilder-tiger': {
      description: 'Chicken skewers, wontons, krupuk, fries with sweet chilli dip and mayonnaise',
    },
  },
  curryTypes: {
    'gaeng-kua': { description: 'Red coconut curry with bamboo, bell pepper, pineapple & Thai basil' },
    'gaeng-khieaw-whan': {
      description: 'Green coconut curry with bamboo, chilli, baby corn & Thai basil',
    },
    'pah-naeng-curry': {
      description:
        'Panang coconut curry with ground peanuts, bell pepper, green beans, lychees, kaffir lime & Thai basil',
    },
  },
  curryProteins: {
    haehnchen: 'Chicken',
    rind: 'Beef',
    ente: 'Duck',
    tigergarnelen: 'Tiger prawns',
    lachs: 'Salmon',
    tofu: 'Tofu',
  },
  sides: {
    'gebratener-reis': 'Fried rice',
    'gebratene-pad-thai-nudeln': 'Fried Pad Thai noodles',
    klebreis: 'Sticky rice',
  },
  lunchPage: {
    seoTitle: 'Lunch Menu',
    seoDescription:
      'Mai Tai Leipzig lunch menu — Thai dishes for lunch, Tuesday to Friday from 11:30 am to 2:30 pm.',
    eyebrow: 'Lunch Menu',
    heading: 'Lunch at Mai Tai',
    footnote:
      'All prices included. Spice level is noted for every dish — please let us know about any allergies or intolerances.',
  },
  lunchItems: {
    'thai-curry': {
      description: 'Thai curry with seasonal vegetables',
      addOns: '+€2.00 tofu · +€3.00 tender chicken · +€4.00 crispy chicken · +€5.00 crispy duck',
    },
    'pad-si-lu-mittag': {
      description: 'Stir-fried Thai noodles with cashews and vegetables',
      addOns: '+€3.00 chicken · +€4.00 beef · +€6.00 prawns',
    },
    'gai-kra-pao': {
      description:
        'Coarsely chopped chicken, stir-fried with holy basil "krapao", onion and bell pepper, topped with a fried egg (vegetarian with tofu available)',
    },
    'pad-khing': {
      description: 'Ginger, onion, wood ear mushrooms and chilli, stir-fried in a spicy sauce',
      options: { beef: 'With beef', shrimp: 'With prawns' },
    },
    'pork-belly': { description: 'Braised pork belly with egg, kohlrabi salad and sticky rice' },
  },
  reservationPage: {
    seoTitle: 'Reservation',
    seoDescription:
      'Reserve a table online at Mai Tai Leipzig — or call us directly at 0341 / 479 229 1.',
    eyebrow: 'Reservation',
    heading: 'Online or by Phone',
    intro:
      'Make your reservation online in just a few simple steps — just choose your preferred day and time.',
    photoAlt: 'A cosy table at Mai Tai restaurant, ready for guests',
    personalHeading: 'Prefer to speak to us?',
    personalBody: 'For parties of more than 8 guests, please reserve by phone.',
  },
  form: {
    honeypotLabel: 'Company (please leave blank)',
    name: 'Name',
    phone: 'Phone',
    email: 'Email',
    date: 'Date',
    time: 'Time',
    timeChoose: 'Please choose',
    timeSuffix: '',
    guests: 'Number of Guests',
    guestUnitOne: 'guest',
    guestUnitOther: 'guests',
    guestsOverNote: 'For parties of more than 8 guests, please reserve by phone at {{phone}}.',
    message: 'Message (optional)',
    messagePlaceholder: 'Allergies, special requests, occasion …',
    submit: 'Request Reservation',
    submitting: 'Sending …',
    errorGeneric: 'Something went wrong. Please try again or give us a call.',
    mondayError: 'We\'re closed on Mondays — please choose a different day.',
    closureError: 'We\'re closed for our annual break from {{start}} to {{end}} — please choose a different date.',
    successHeading: 'Reservation request sent',
    successBody: 'Thank you! We\'ll confirm your reservation as soon as possible by email or phone.',
    successRetry: 'Send another request',
  },
  legal: {
    impressumSeoTitle: 'Legal Notice',
    impressumSeoDescription: 'Legal notice for Mai Tai Leipzig.',
    datenschutzSeoTitle: 'Privacy Policy',
    datenschutzSeoDescription: 'Privacy policy for Mai Tai Leipzig.',
    rechtliches: 'Legal',
    herausgeber: 'Publisher',
    onlyGermanNotice: 'For legal accuracy, this page is only available in German.',
    impressumLinkNote: 'For information on how we handle personal data, please see our',
  },
  notFound: {
    seoTitle: 'Page Not Found',
    seoDescription: 'This page does not exist.',
    heading: 'This page seems to have wandered off',
    body: 'The page you were looking for could not be found.',
    cta: 'Back to the Homepage',
  },
}

export default en
