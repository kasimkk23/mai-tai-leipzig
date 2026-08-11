// Shared menu typing used by both the à la carte (Speisekarte) and
// lunch (Mittagskarte) data files.
//
// Only structural/factual data lives here (ids, prices, spice level) — all
// translatable text (name is the exception: dish names stay untranslated,
// see note below; descriptions, add-on labels, price-option labels) lives in
// the i18n locale files under `menuItems.<id>.*`, looked up by `id` at
// render time via useTranslation().

/** 0 = keine Angabe/normal mild, 1 = mild, 2 = leichte Schärfe, 3 = Thai-Schärfe */
export type SpiceLevel = 0 | 1 | 2 | 3

export type MenuItem = {
  id: string
  number?: string
  /** Dish name — intentionally NOT translated (authentic Thai names, same across all languages). */
  name: string
  price?: string
  /** Present when a dish has several priced variants (e.g. protein choice). Label resolved via `menuItems.<id>.options.<key>`. */
  priceOptions?: { key: string; price: string }[]
  /** Present when a dish has an add-on note. Text resolved via `menuItems.<id>.addOns`. */
  hasAddOns?: boolean
  spiceLevel?: SpiceLevel
  vegetarianOption?: boolean
}

export type MenuCategoryId =
  | 'vorspeisen'
  | 'suppen'
  | 'salate'
  | 'hauptgerichte'
  | 'reisNudeln'
  | 'kinder'

export type MenuCategory = {
  id: MenuCategoryId
  items: MenuItem[]
}
