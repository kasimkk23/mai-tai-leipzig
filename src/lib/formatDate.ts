import { LANGUAGE_META, type LanguageCode } from '../i18n/languages'

/** Formats an ISO date ("2026-07-20") as a localized DD/MM/YYYY-style string for the given language. */
export function formatDate(iso: string, lang: LanguageCode): string {
  const date = new Date(`${iso}T12:00:00`)
  const locale = LANGUAGE_META[lang]?.intlLocale ?? 'de-DE'
  return new Intl.DateTimeFormat(locale, { day: '2-digit', month: '2-digit', year: 'numeric' }).format(date)
}

/** Adds `days` calendar days to an ISO date string, returning a new ISO date string. */
export function addDaysISO(iso: string, days: number): string {
  const date = new Date(`${iso}T12:00:00`)
  date.setDate(date.getDate() + days)
  return date.toISOString().slice(0, 10)
}
