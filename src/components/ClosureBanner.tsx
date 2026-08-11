import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { isClosureActive } from '../lib/closure'
import { useClosureMessage } from '../lib/useClosureMessage'

const DISMISS_KEY = 'maitai-closure-dismissed-v1'

/**
 * Editable, dismissible Betriebsurlaub (holiday closure) banner.
 * Shows itself automatically only while today falls inside the configured
 * date range in `src/data/restaurant.ts` (closureNotice) — no manual
 * on/off switching needed as dates change, just edit that one file.
 */
export default function ClosureBanner() {
  const { t } = useTranslation()
  const message = useClosureMessage()
  const [dismissed, setDismissed] = useState(true)

  useEffect(() => {
    const stored = sessionStorage.getItem(DISMISS_KEY)
    setDismissed(stored === '1')
  }, [])

  if (!isClosureActive()) return null
  if (dismissed) return null

  return (
    <div className="relative z-40 bg-lacquer text-cream">
      <div className="container-edit flex items-start gap-3 py-2.5 text-sm">
        <p className="flex-1 leading-snug">
          <strong className="font-semibold">{t('closure.label')}</strong>
          {message}
        </p>
        <button
          type="button"
          onClick={() => {
            sessionStorage.setItem(DISMISS_KEY, '1')
            setDismissed(true)
          }}
          aria-label={t('closure.dismissAria')}
          className="shrink-0 rounded-full p-1 text-cream/80 transition hover:bg-cream/10 hover:text-cream"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 3L13 13M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  )
}
