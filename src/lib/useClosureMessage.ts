import { useTranslation } from 'react-i18next'
import { closureNotice } from '../data/restaurant'
import { formatDate, addDaysISO } from './formatDate'
import { isSupportedLanguage } from '../i18n/languages'

/** Builds the fully translated, date-interpolated Betriebsurlaub message in the current UI language. */
export function useClosureMessage(): string {
  const { t, i18n } = useTranslation()
  const lang = isSupportedLanguage(i18n.language) ? i18n.language : 'de'

  return t('closure.message', {
    start: formatDate(closureNotice.startDate, lang),
    end: formatDate(closureNotice.endDate, lang),
    reopen: formatDate(addDaysISO(closureNotice.endDate, 1), lang),
  })
}
