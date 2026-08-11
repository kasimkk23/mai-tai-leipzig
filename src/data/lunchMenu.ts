import type { MenuItem } from './menuTypes'

// Mittagskarte — weekday lunch specials, structural data only. See menu.ts
// for the translation-key convention and the spice-level editorial note.

export const lunchMenu: MenuItem[] = [
  {
    id: 'thai-curry',
    number: 'M1',
    name: 'Thai Curry (Rot / Grün / Gelb)',
    price: '8,90 €',
    hasAddOns: true,
    vegetarianOption: true,
  },
  {
    id: 'pad-si-lu-mittag',
    number: 'M2',
    name: 'Pad Si Lu',
    price: '8,90 €',
    hasAddOns: true,
    vegetarianOption: true,
  },
  {
    id: 'gai-kra-pao',
    number: 'M3',
    name: 'Gai Kra Pao',
    price: '12,90 €',
    spiceLevel: 2,
    vegetarianOption: true,
  },
  {
    id: 'pad-khing',
    number: 'M4',
    name: 'Pad Khing',
    priceOptions: [
      { key: 'beef', price: '13,90 €' },
      { key: 'shrimp', price: '15,90 €' },
    ],
    spiceLevel: 2,
  },
  {
    id: 'pork-belly',
    number: 'M5',
    name: 'Pork Belly',
    price: '10,90 €',
  },
]
