export const SUPPORTED_LANGUAGES = ['de', 'en', 'fr', 'it', 'es'] as const

export type LanguageCode = (typeof SUPPORTED_LANGUAGES)[number]

export const DEFAULT_LANGUAGE: LanguageCode = 'de'

/** Native-name labels shown in the language switcher, and the BCP-47 tag used for date formatting / <html lang>. */
export const LANGUAGE_META: Record<LanguageCode, { label: string; nativeLabel: string; intlLocale: string }> = {
  de: { label: 'DE', nativeLabel: 'Deutsch', intlLocale: 'de-DE' },
  en: { label: 'EN', nativeLabel: 'English', intlLocale: 'en-GB' },
  fr: { label: 'FR', nativeLabel: 'Français', intlLocale: 'fr-FR' },
  it: { label: 'IT', nativeLabel: 'Italiano', intlLocale: 'it-IT' },
  es: { label: 'ES', nativeLabel: 'Español', intlLocale: 'es-ES' },
}

export function isSupportedLanguage(value: string): value is LanguageCode {
  return (SUPPORTED_LANGUAGES as readonly string[]).includes(value)
}
