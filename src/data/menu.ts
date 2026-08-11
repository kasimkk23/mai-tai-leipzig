import type { MenuCategory } from './menuTypes'

// -----------------------------------------------------------------------
// Speisekarte (à la carte menu) — structural data only. Descriptions,
// add-on notes and price-option labels live in src/i18n/locales/*.ts under
// `menuItems.<id>.*`, keyed by this file's `id`s. Names, numbers and prices
// are taken verbatim from the client brief and are the same in every
// language — do not invent or alter them.
//
// `spiceLevel` is an EDITORIAL assignment because the source brief described
// the 🌶️ legend but did not carry per-item chili marks through to this text.
// To stay conservative, a level is only set where the dish's own name or
// description explicitly signals heat (e.g. "Hot Kra Pao", "scharf",
// "Peperoni", "Sriracha", "Tom Yum"). Everything else is left unmarked,
// matching the original legend's "kein Symbol = normal mild" convention.
// ⚠️ Flag for the client: please review/confirm spice levels before launch.
// -----------------------------------------------------------------------

export const menuCategories: MenuCategory[] = [
  {
    id: 'vorspeisen',
    items: [
      { id: 'popia', number: '01', name: 'Popia', price: '5,90 €' },
      { id: 'kieu-tood', number: '02', name: 'Kieu Tood', price: '5,90 €' },
      { id: 'gai-sate', number: '03', name: 'Gai Sate', price: '8,50 €' },
      { id: 'gung-tood', number: '04', name: 'Gung Tood', price: '10,90 €', spiceLevel: 2 },
      { id: 'sweet-kisses', number: '08', name: 'Sweet Kisses', price: '8,00 €', spiceLevel: 2 },
    ],
  },
  {
    id: 'suppen',
    items: [
      { id: 'tom-kha-gai', number: '12', name: 'Tom Kha Gai', price: '6,50 €' },
      { id: 'tom-yum-gung', number: '09', name: 'Tom Yum Gung', price: '7,50 €', spiceLevel: 2 },
      {
        id: 'sun-la-tan',
        number: '11',
        name: 'Sun La Tan',
        priceOptions: [
          { key: 'classic', price: '5,90 €' },
          { key: 'duck', price: '6,90 €' },
        ],
      },
      { id: 'wan-tan-suppe', number: '10', name: 'Wan Tan Suppe', price: '6,50 €' },
    ],
  },
  {
    id: 'salate',
    items: [
      { id: 'somm-tamm', number: '16', name: 'Somm Tamm', price: '12,90 €' },
      { id: 'laab-gai', number: '13', name: 'Laab Gai', price: '8,90 €' },
      { id: 'yam-nuea', number: '15', name: 'Yam Nüa', price: '11,90 €' },
    ],
  },
  {
    id: 'hauptgerichte',
    items: [
      {
        id: 'ped-mai-tai',
        number: '20',
        name: 'Ped Mai Tai',
        priceOptions: [
          { key: 'duck', price: '19,80 €' },
          { key: 'crispyChicken', price: '17,90 €' },
        ],
      },
      {
        id: 'hot-kra-pao',
        number: '25',
        name: 'Hot Kra Pao',
        priceOptions: [
          { key: 'beef', price: '20,90 €' },
          { key: 'chicken', price: '18,90 €' },
          { key: 'tofu', price: '17,90 €' },
        ],
        spiceLevel: 3,
        vegetarianOption: true,
      },
      { id: 'happy-seafood', number: '30', name: 'Happy Seafood', price: '24,90 €' },
      { id: 'steak-a-la-mai-tai', number: '29', name: 'Steak à la Mai Tai', price: '23,90 €' },
      { id: 'ped-pu-kau-fai', number: '27', name: 'Ped Pu Kau Fai', price: '17,90 €' },
    ],
  },
  {
    id: 'reisNudeln',
    items: [
      {
        id: 'pad-thai',
        number: '90',
        name: 'Pad Thai',
        price: '13,90 €',
        hasAddOns: true,
        vegetarianOption: true,
      },
      {
        id: 'pad-si-lu',
        number: '91',
        name: 'Pad Si Lu',
        price: '13,90 €',
        hasAddOns: true,
        vegetarianOption: true,
      },
      {
        id: 'nasi-goreng',
        number: '93',
        name: 'Nasi Goreng',
        price: '15,90 €',
        vegetarianOption: true,
      },
    ],
  },
  {
    id: 'kinder',
    items: [
      { id: 'kleiner-panda', number: 'K1', name: 'Kleiner Panda', price: '8,90 €' },
      { id: 'wilder-tiger', number: 'K2', name: 'Wilder Tiger', price: '10,90 €' },
    ],
  },
]

// -----------------------------------------------------------------------
// Curries — served with Jasminreis. Priced by protein, not by curry type,
// per the brief: build as a picker (choose curry + choose protein).
// -----------------------------------------------------------------------

export type CurryType = {
  id: string
  number: string
  name: string
  spiceLevel: 0 | 1 | 2 | 3
}

export const curryTypes: CurryType[] = [
  { id: 'gaeng-kua', number: '24', name: 'Gaeng Kua', spiceLevel: 0 },
  { id: 'gaeng-khieaw-whan', number: '28', name: 'Gaeng Khieaw Whan', spiceLevel: 2 },
  { id: 'pah-naeng-curry', number: '26', name: 'Pah Naeng Curry', spiceLevel: 0 },
]

export type CurryProtein = {
  id: string
  price: string
  vegetarian?: boolean
}

export const curryProteins: CurryProtein[] = [
  { id: 'haehnchen', price: '17,90 €' },
  { id: 'rind', price: '18,90 €' },
  { id: 'ente', price: '18,90 €' },
  { id: 'tigergarnelen', price: '21,90 €' },
  { id: 'lachs', price: '22,90 €' },
  { id: 'tofu', price: '16,90 €', vegetarian: true },
]

export const optionalSides = [
  { id: 'gebratener-reis', price: '3,50 €' },
  { id: 'gebratene-pad-thai-nudeln', price: '3,50 €' },
  { id: 'klebreis', price: '4,00 €' },
]

export const menuPdfHref = '/downloads/Speisekarte-2025.pdf'
