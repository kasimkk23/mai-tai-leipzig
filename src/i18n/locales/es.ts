import type { Translation } from '../types'

const es: Translation = {
  meta: { htmlLang: 'es' },
  brand: {
    tagline: 'Restaurante asiático con especialidades tailandesas',
  },
  nav: {
    willkommen: 'Bienvenida',
    karte: 'Nuestra Carta',
    mittagskarte: 'Menú del Mediodía',
    reservierung: 'Reserva',
    impressum: 'Aviso Legal',
    datenschutz: 'Privacidad',
    reserveCta: 'Reservar Mesa',
    menuOpen: 'Abrir menú',
    menuClose: 'Cerrar menú',
    languageLabel: 'Elegir idioma',
  },
  footer: {
    taglineWithSince: '{{tagline}} — desde {{since}} en Könneritzstraße, Leipzig.',
    navHeading: 'Navegación',
    contactHeading: 'Contacto',
    hoursHeading: 'Horario',
    telLabel: 'Tel. ',
    mobileLabel: 'Móvil ',
    routePlanen: 'Cómo llegar',
    copyright: '© {{year}} {{name}} — Desde {{since}}',
    madeWith: 'Made with care in Leipzig.',
  },
  days: {
    monday: 'Lunes',
    tuesday: 'Martes',
    wednesday: 'Miércoles',
    thursday: 'Jueves',
    friday: 'Viernes',
    saturday: 'Sábado',
    sunday: 'Domingo',
  },
  hours: {
    closed: 'Cerrado',
    rangeJoiner: ' y ',
    timeSuffix: '',
    lunchNote: 'De martes a viernes, excepto festivos, de 11:30 a 14:30',
  },
  closure: {
    label: 'Cierre por vacaciones: ',
    message:
      'Nuestro restaurante permanecerá cerrado por vacaciones desde el {{start}} hasta el {{end}} incluido. A partir del {{reopen}} volveremos a nuestro horario habitual y esperamos darles la bienvenida.',
    dismissAria: 'Cerrar aviso',
  },
  home: {
    seoTitle: 'Restaurante Tailandés en Leipzig',
    seoDescription:
      'Mai Tai — restaurante asiático con especialidades tailandesas en Könneritzstraße, Leipzig. Los sabores auténticos de Tailandia desde 1993.',
    hero: {
      eyebrow: 'En Leipzig desde 1993',
      heading: 'El verdadero sabor de Tailandia',
      subtitle: 'Restaurante asiático con especialidades tailandesas, en pleno corazón de Könneritzstraße.',
      ctaMenu: 'Descubrir la carta',
      ctaReserve: 'Reservar mesa',
      slideAria: 'Mostrar imagen {{n}}',
      slides: {
        curry: 'Curry tailandés verde con albahaca fresca y lima kaffir',
        satay: 'Brochetas de pollo "Gai Sate" a la parrilla hibachi con salsa de cacahuete',
        springrolls: 'Rollitos de primavera crujientes "Popia" con salsa nam pla',
        padthai: 'Pad Thai con brotes de soja, huevo y cacahuetes tostados',
      },
    },
    feature: {
      genussvoll: 'Delicioso',
      herzlich: 'Cálido y Atento',
      wohlschmeckend: 'Sabroso',
      exotisch: 'Exóticamente Seductor',
      gastfreundlich: 'Hospitalario',
    },
    welcome: {
      eyebrow: 'En la "Kö" desde 1993',
      heading: 'La tradición se encuentra con la hospitalidad',
      body: 'Bienvenidos al corazón de Leipzig, en Könneritzstraße, donde desde 1993 les acercamos los sabores auténticos de Tailandia. Sumérjanse en nuestro mundo culinario y vivan una combinación única de tradición y hospitalidad. ¡Relájense y disfruten con nosotros del verdadero sabor de Tailandia!',
      cta: 'Ver la carta',
      photoBasilAlt: 'Albahaca tailandesa fresca e ingredientes en la cocina',
      photoTableAlt: 'Una mesa preparada en el restaurante Mai Tai',
    },
    teaser: {
      eyebrow: 'De Nuestra Cocina',
      heading: 'Un adelanto de nuestra carta',
      ctaFull: 'Ver la carta completa',
      ctaLunch: 'Menú del mediodía',
    },
    hoursSection: {
      eyebrow: 'Horario',
      heading: 'Cuándo estamos aquí para ustedes',
      lunchNote: 'Menú del mediodía: {{note}}',
    },
    reserveCta: {
      eyebrow: 'Reservar mesa',
      heading: 'Esperamos su visita',
      body: 'Reserve online en unos pocos pasos, o simplemente llámenos — con gusto les prepararemos una mesa agradable.',
      cta: 'Reservar ahora',
    },
  },
  menuPage: {
    seoTitle: 'Carta',
    seoDescription:
      'La carta completa de Mai Tai Leipzig — entrantes, sopas, ensaladas, platos de wok y a la parrilla, curries, arroz y fideos.',
    eyebrow: 'Carta',
    heading: 'Nuestra carta',
    intro:
      'Desde entrantes crujientes hasta aromáticos platos de wok — todos los precios incluidos. El nivel de picante se indica en cada plato.',
    downloadPdf: 'Descargar la carta (PDF)',
    sidesHeading: 'Guarniciones Opcionales',
  },
  categories: {
    vorspeisen: { title: 'Entrantes', subtitle: 'Entrantes' },
    suppen: { title: 'Sopas', subtitle: 'Sopas' },
    salate: { title: 'Ensaladas', subtitle: 'Ensaladas' },
    hauptgerichte: { title: 'Platos Principales', subtitle: 'Wok y Parrilla' },
    reisNudeln: { title: 'Arroz y Fideos', subtitle: 'Arroz y Fideos' },
    kinder: { title: 'Para los Más Pequeños', subtitle: 'Menú Infantil' },
  },
  spice: {
    leichte: 'ligeramente picante',
    thai: 'picante al estilo tailandés',
  },
  vegetarianPossible: 'Opción vegetariana disponible',
  curries: {
    navLabel: 'Curries',
    eyebrow: 'Elige tu Curry',
    heading: 'Compón tu curry a tu gusto',
    intro:
      'Todos los curries se sirven con arroz jazmín. Elija primero el tipo de curry y después el ingrediente que prefiera.',
    step1: '1. El curry',
    step2: '2. El ingrediente',
    inclRice: 'incl. arroz jazmín',
  },
  menuItems: {
    popia: { description: 'Rollitos de primavera con salsa nam pla' },
    'kieu-tood': { description: 'Wontons crujientes con salsa de ciruela' },
    'gai-sate': {
      description: 'Brochetas de pollo con salsa de cacahuete y sweet chili, a la parrilla hibachi',
    },
    'gung-tood': { description: 'Gambas rebozadas panko con salsa sriracha-teriyaki' },
    'sweet-kisses': { description: 'Empanadillas al vapor con aceite de ajo y salsa de chile y soja' },
    'tom-kha-gai': { description: 'Sopa de coco con pollo' },
    'tom-yum-gung': { description: 'Sopa agripicante con langostinos tigre' },
    'sun-la-tan': {
      description: 'Sopa de verduras al estilo chino',
      options: { classic: 'Clásica', duck: 'con pato' },
    },
    'wan-tan-suppe': { description: 'Sopa de wontons (relleno de cerdo y gambas) con verduras de hoja' },
    'somm-tamm': {
      description: 'Papaya verde en tiras con zanahoria, tomates cherry, judías verdes y cacahuetes machacados',
    },
    'laab-gai': {
      description:
        'Pechuga de pollo picada con menta, cilantro, cebolla roja y arroz glutinoso tostado',
    },
    'yam-nuea': {
      description:
        'Ensalada de ternera con tomates cherry, cilantro, cebolla roja y menta, arroz glutinoso tostado',
    },
    'ped-mai-tai': {
      description:
        'Pato crujiente sobre brotes de soja salteados al wok, verduras variadas y pak choi. Salsa a elegir: hoisin picante / tamarindo / cacahuete / teriyaki',
      options: { duck: 'Con pato', crispyChicken: 'Con pollo crujiente' },
    },
    'hot-kra-pao': {
      description: 'Carne picada, cebolla, huevo frito, chile y albahaca sagrada "krapao"',
      options: { beef: 'Con ternera', chicken: 'Con pollo', tofu: 'Con tofu' },
    },
    'happy-seafood': {
      description:
        'Langostinos grandes, calamar y vieiras salteados con hierbas, citronela, ajo y jengibre, apio y salsa de marisco',
    },
    'steak-a-la-mai-tai': {
      description:
        'Entrecot de ternera a la parrilla en su punto, cebolla, setas ostra, pak choi, tomates cherry y salsa de pimienta especiada',
    },
    'ped-pu-kau-fai': {
      description: 'Pato marinado, cocinado en una salsa tailandesa agridulce',
    },
    'pad-thai': {
      description: 'Fideos de arroz con brotes de soja, cacahuetes, huevo y tamarindo ligeramente ácido',
      addOns: '+2,00 € tofu · +2,00 € pollo · +4,00 € gambas',
    },
    'pad-si-lu': {
      description: 'Fideos de arroz salteados con choy sum, anacardos, huevo y salsa de soja',
      addOns: '+2,00 € tofu · +2,00 € pollo · +3,00 € ternera · +4,00 € gambas',
    },
    'nasi-goreng': {
      description:
        'Arroz jazmín salteado con huevo, cúrcuma, anacardos, piña, brochetas de pollo, krupuk y salsa de cacahuete. Versión vegetariana con tofu disponible',
    },
    'kleiner-panda': { description: 'Arroz jazmín salteado con pollo crujiente o pato crujiente' },
    'wilder-tiger': {
      description: 'Brochetas de pollo, wontons, krupuk, patatas fritas con salsa sweet chili y mayonesa',
    },
  },
  curryTypes: {
    'gaeng-kua': { description: 'Curry rojo de coco con bambú, pimiento, piña y albahaca tailandesa' },
    'gaeng-khieaw-whan': {
      description: 'Curry verde de coco con bambú, chile, mazorcas de maíz baby y albahaca tailandesa',
    },
    'pah-naeng-curry': {
      description:
        'Curry panang de coco con cacahuetes molidos, pimiento, judías verdes, lichis, lima kaffir y albahaca tailandesa',
    },
  },
  curryProteins: {
    haehnchen: 'Pollo',
    rind: 'Ternera',
    ente: 'Pato',
    tigergarnelen: 'Langostinos tigre',
    lachs: 'Salmón',
    tofu: 'Tofu',
  },
  sides: {
    'gebratener-reis': 'Arroz salteado',
    'gebratene-pad-thai-nudeln': 'Fideos Pad Thai salteados',
    klebreis: 'Arroz glutinoso',
  },
  lunchPage: {
    seoTitle: 'Menú del Mediodía',
    seoDescription:
      'Menú del mediodía de Mai Tai Leipzig — platos tailandeses para el almuerzo, de martes a viernes de 11:30 a 14:30.',
    eyebrow: 'Menú del Mediodía',
    heading: 'El almuerzo en Mai Tai',
    footnote:
      'Todos los precios incluidos. El nivel de picante se indica en cada plato — díganos si tiene alguna alergia o intolerancia.',
  },
  lunchItems: {
    'thai-curry': {
      description: 'Curry tailandés con verduras de temporada',
      addOns: '+2,00 € tofu · +3,00 € pollo tierno · +4,00 € pollo crujiente · +5,00 € pato crujiente',
    },
    'pad-si-lu-mittag': {
      description: 'Fideos tailandeses salteados con anacardos y verduras',
      addOns: '+3,00 € pollo · +4,00 € ternera · +6,00 € gambas',
    },
    'gai-kra-pao': {
      description:
        'Pollo picado grueso, salteado con albahaca sagrada "krapao", cebolla y pimiento, con huevo frito encima (versión vegetariana con tofu disponible)',
    },
    'pad-khing': {
      description: 'Jengibre, cebolla, setas oreja de nube y chile, salteados en salsa picante',
      options: { beef: 'Con ternera', shrimp: 'Con gambas' },
    },
    'pork-belly': { description: 'Panceta de cerdo estofada con huevo, ensalada de colinabo y arroz glutinoso' },
  },
  reservationPage: {
    seoTitle: 'Reserva',
    seoDescription:
      'Reserve una mesa online en Mai Tai Leipzig — o llámenos directamente al 0341 / 479 229 1.',
    eyebrow: 'Reserva',
    heading: 'Online o por teléfono',
    intro:
      'Aquí puede realizar su reserva online de forma sencilla. Solo tiene que elegir el día y la hora deseados.',
    photoAlt: 'Una mesa acogedora en el restaurante Mai Tai, lista para los invitados',
    personalHeading: '¿Prefiere hablar con nosotros?',
    personalBody: 'Para grupos de más de 8 personas, le rogamos que reserve por teléfono.',
  },
  form: {
    honeypotLabel: 'Empresa (dejar en blanco)',
    name: 'Nombre',
    phone: 'Teléfono',
    email: 'Correo electrónico',
    date: 'Fecha',
    time: 'Hora',
    timeChoose: 'Por favor, elija',
    timeSuffix: '',
    guests: 'Número de comensales',
    guestUnitOne: 'persona',
    guestUnitOther: 'personas',
    guestsOverNote: 'Para grupos de más de 8 personas, le rogamos que reserve por teléfono al {{phone}}.',
    message: 'Mensaje (opcional)',
    messagePlaceholder: 'Alergias, peticiones especiales, ocasión…',
    submit: 'Solicitar reserva',
    submitting: 'Enviando…',
    errorGeneric: 'Se ha producido un error. Inténtelo de nuevo o llámenos.',
    mondayError: 'Los lunes cerramos — por favor, elija otro día.',
    closureError: 'Estamos cerrados por vacaciones desde el {{start}} hasta el {{end}} — por favor, elija otra fecha.',
    successHeading: 'Solicitud de reserva enviada',
    successBody: '¡Gracias! Confirmaremos su reserva lo antes posible por correo electrónico o teléfono.',
    successRetry: 'Enviar otra solicitud',
  },
  legal: {
    impressumSeoTitle: 'Aviso Legal',
    impressumSeoDescription: 'Aviso legal de Mai Tai Leipzig.',
    datenschutzSeoTitle: 'Política de Privacidad',
    datenschutzSeoDescription: 'Política de privacidad de Mai Tai Leipzig.',
    rechtliches: 'Aviso legal',
    herausgeber: 'Editor',
    onlyGermanNotice: 'Por motivos legales, esta página solo está disponible en alemán.',
    impressumLinkNote: 'Para más información sobre cómo tratamos los datos personales, consulte nuestra',
  },
  notFound: {
    seoTitle: 'Página No Encontrada',
    seoDescription: 'Esta página no existe.',
    heading: 'Parece que esta página se ha extraviado',
    body: 'No se pudo encontrar la página solicitada.',
    cta: 'Volver al inicio',
  },
}

export default es
