import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES, isSupportedLanguage, type LanguageCode } from './languages'
import de from './locales/de'
import type { Translation } from './types'

const STORAGE_KEY = 'maitai-language'

// German ships in the main bundle (it's the default/fallback and needs to be
// available synchronously before i18next finishes initializing). The other
// four languages are only fetched — via dynamic import, so they land in
// their own small chunks — the moment a visitor actually switches to them.
const loaders: Record<LanguageCode, () => Promise<{ default: Translation }>> = {
  de: () => Promise.resolve({ default: de }),
  en: () => import('./locales/en'),
  fr: () => import('./locales/fr'),
  it: () => import('./locales/it'),
  es: () => import('./locales/es'),
}

const loadedLanguages = new Set<LanguageCode>(['de'])

export async function loadLanguage(code: LanguageCode): Promise<void> {
  if (loadedLanguages.has(code)) return
  const { default: resource } = await loaders[code]()
  i18n.addResourceBundle(code, 'translation', resource)
  loadedLanguages.add(code)
}

function detectInitialLanguage(): LanguageCode {
  if (typeof window === 'undefined') return DEFAULT_LANGUAGE

  // German is the default for every first-time visitor, full stop — not
  // inferred from the browser's language, which is a poor signal here (lots
  // of German users run their OS/browser in English). The only thing that
  // overrides it is the visitor's own explicit choice via the language
  // switcher, remembered here for their next visit.
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored && isSupportedLanguage(stored)) return stored

  return DEFAULT_LANGUAGE
}

const initialLanguage = detectInitialLanguage()

// Always boot i18next synchronously as `de` — it's the only bundle
// guaranteed to be loaded at this point. If the detected/stored language
// is something else, `lng` is deliberately left as `de` here and switched
// via changeLanguage() below once that bundle has actually loaded; setting
// `lng` straight to the target would make the later changeLanguage() call a
// no-op (same language in, same language out) and it would silently skip
// firing the languageChanged event that react-i18next needs to re-render.
i18n.use(initReactI18next).init({
  resources: {
    de: { translation: de },
  },
  lng: DEFAULT_LANGUAGE,
  fallbackLng: DEFAULT_LANGUAGE,
  supportedLngs: SUPPORTED_LANGUAGES as unknown as string[],
  interpolation: { escapeValue: false },
  returnEmptyString: true,
})

if (initialLanguage !== 'de') {
  loadLanguage(initialLanguage).then(() => i18n.changeLanguage(initialLanguage))
}

i18n.on('languageChanged', (lng) => {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(STORAGE_KEY, lng)
  document.documentElement.lang = lng
})

// Set it once on initial load too (languageChanged doesn't fire for the
// very first, synchronous init above).
if (typeof document !== 'undefined') {
  document.documentElement.lang = i18n.language
}

export default i18n
