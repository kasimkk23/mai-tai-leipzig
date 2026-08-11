// Central source of truth for restaurant facts (proper nouns, numbers,
// dates — things that stay the same in every language). All translatable
// copy (tagline, brand values, hours labels, closure message, nav labels)
// lives in src/i18n/locales/*.ts instead — see src/lib/hours.ts and
// src/lib/closure.ts for how the two are combined at render time.

export const restaurant = {
  name: 'Mai Tai',
  since: 1993,
  address: {
    street: 'Könneritzstraße 38',
    zip: '04229',
    city: 'Leipzig',
    country: 'Deutschland',
    countryCode: 'DE',
  },
  phone: '0341 / 479 229 1',
  phoneHref: '+493414792291',
  mobile: '0162 / 700 323 6',
  mobileHref: '+491627003236',
  email: 'info@maitai-leipzig.de',
  owner: 'Minh Nguyenduc',
  taxNumber: '232/252/17971',
  // Placeholder — no map API key supplied. See MapEmbed component.
  mapQuery: 'Könneritzstraße 38, 04229 Leipzig',
} as const

export type DayKey =
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday'
  | 'sunday'

export type OpeningHoursEntry = {
  dayKey: DayKey
  closed?: boolean
  /** [open, close] pairs in 24h "HH:MM", e.g. [["11:30","14:30"],["17:30","22:30"]] */
  ranges?: [string, string][]
}

const lunchDinner: [string, string][] = [
  ['11:30', '14:30'],
  ['17:30', '22:30'],
]

export const openingHours: OpeningHoursEntry[] = [
  { dayKey: 'monday', closed: true },
  { dayKey: 'tuesday', ranges: lunchDinner },
  { dayKey: 'wednesday', ranges: lunchDinner },
  { dayKey: 'thursday', ranges: lunchDinner },
  { dayKey: 'friday', ranges: lunchDinner },
  { dayKey: 'saturday', ranges: lunchDinner },
  { dayKey: 'sunday', ranges: lunchDinner },
]

// Editable "Betriebsurlaub" (holiday closure) window.
// Update start/end here when a new closure is announced — the banner shows
// itself automatically only while `today` falls within range, and hides
// itself automatically once the range has passed. The message text itself
// (translated in every language) lives at `closure.message` in the i18n
// locale files, interpolated with these dates.
export const closureNotice = {
  enabled: true,
  startDate: '2026-07-20',
  endDate: '2026-08-03',
}

export const navLinks = [
  { key: 'willkommen', to: '/' },
  { key: 'karte', to: '/karte' },
  { key: 'mittagskarte', to: '/mittagskarte' },
  { key: 'reservierung', to: '/reservierung' },
  { key: 'impressum', to: '/impressum' },
  { key: 'datenschutz', to: '/datenschutz' },
] as const

export const brandValueKeys = [
  'genussvoll',
  'herzlich',
  'wohlschmeckend',
  'exotisch',
  'gastfreundlich',
] as const
