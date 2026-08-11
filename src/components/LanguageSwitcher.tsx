import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { SUPPORTED_LANGUAGES, LANGUAGE_META, isSupportedLanguage, type LanguageCode } from '../i18n/languages'
import { loadLanguage } from '../i18n'

/**
 * Compact language switcher. Desktop: a small dropdown showing the current
 * language code (e.g. "DE") that expands to the full list on click.
 * Mobile: rendered as a plain inline row of language codes (see `inline`).
 */
export default function LanguageSwitcher({
  tone = 'auto',
  inline = false,
}: {
  /** Text color to use for the trigger — 'light' for dark/transparent headers, 'dark' for solid-cream ones. */
  tone?: 'light' | 'dark' | 'auto'
  inline?: boolean
}) {
  const { i18n, t } = useTranslation()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const current = isSupportedLanguage(i18n.language) ? i18n.language : 'de'

  useEffect(() => {
    if (!open) return
    function onClickAway(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    function onEscape(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onClickAway)
    document.addEventListener('keydown', onEscape)
    return () => {
      document.removeEventListener('mousedown', onClickAway)
      document.removeEventListener('keydown', onEscape)
    }
  }, [open])

  function selectLanguage(code: LanguageCode) {
    setOpen(false)
    // Non-German bundles are code-split; fetch on demand, then switch.
    loadLanguage(code).then(() => i18n.changeLanguage(code))
  }

  if (inline) {
    return (
      <div className="flex flex-wrap items-center gap-3" role="group" aria-label={t('nav.languageLabel')}>
        {SUPPORTED_LANGUAGES.map((code) => (
          <button
            key={code}
            type="button"
            onClick={() => selectLanguage(code)}
            aria-current={code === current}
            className={`text-eyebrow transition-colors ${
              code === current ? 'text-jade' : 'text-charcoal/50 hover:text-charcoal'
            }`}
          >
            {LANGUAGE_META[code].label}
          </button>
        ))}
      </div>
    )
  }

  const toneClass =
    tone === 'light'
      ? 'text-cream/80 hover:text-cream'
      : tone === 'dark'
        ? 'text-charcoal/70 hover:text-charcoal'
        : 'text-current'

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t('nav.languageLabel')}
        className={`text-eyebrow flex items-center gap-1.5 transition-colors ${toneClass}`}
      >
        {LANGUAGE_META[current].label}
        <svg width="9" height="9" viewBox="0 0 10 10" fill="none" aria-hidden="true" className={`transition-transform ${open ? 'rotate-180' : ''}`}>
          <path d="M1.5 3.5L5 7L8.5 3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={t('nav.languageLabel')}
          className="absolute right-0 top-full z-10 mt-2 min-w-[9rem] overflow-hidden rounded-xl border border-charcoal/10 bg-cream py-1.5 shadow-lg"
        >
          {SUPPORTED_LANGUAGES.map((code) => (
            <li key={code}>
              <button
                type="button"
                role="option"
                aria-selected={code === current}
                onClick={() => selectLanguage(code)}
                className={`flex w-full items-center justify-between gap-4 px-4 py-2 text-left text-sm transition-colors hover:bg-jade/5 ${
                  code === current ? 'text-jade' : 'text-charcoal/80'
                }`}
              >
                {LANGUAGE_META[code].nativeLabel}
                <span className="text-xs text-charcoal/40">{LANGUAGE_META[code].label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
