import { useTranslation } from 'react-i18next'
import { openingHours } from '../data/restaurant'

export type FormattedHoursEntry = {
  day: string
  hours: string
  closed?: boolean
}

/** Builds display-ready opening-hours strings in the current UI language from the structured data in restaurant.ts. */
export function useFormattedHours(): FormattedHoursEntry[] {
  const { t } = useTranslation()

  return openingHours.map((entry) => {
    const day = t(`days.${entry.dayKey}`)

    if (entry.closed || !entry.ranges) {
      return { day, hours: t('hours.closed'), closed: true }
    }

    const suffix = t('hours.timeSuffix')
    const joiner = t('hours.rangeJoiner')
    const hours = entry.ranges.map(([open, close]) => `${open}–${close}${suffix}`).join(joiner)

    return { day, hours }
  })
}
