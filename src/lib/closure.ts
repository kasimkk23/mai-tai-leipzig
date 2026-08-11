import { closureNotice } from '../data/restaurant'

/** True while `date` falls within the configured Betriebsurlaub window (inclusive). */
export function isClosureActive(date: Date = new Date()): boolean {
  if (!closureNotice.enabled) return false
  const start = new Date(`${closureNotice.startDate}T00:00:00`)
  const end = new Date(`${closureNotice.endDate}T23:59:59`)
  return date >= start && date <= end
}

export function getClosureRange() {
  return {
    start: new Date(`${closureNotice.startDate}T00:00:00`),
    end: new Date(`${closureNotice.endDate}T23:59:59`),
  }
}

/** Monday = 1 per JS Date#getDay(); the restaurant is closed on Mondays. */
export function isClosedWeekday(date: Date): boolean {
  return date.getDay() === 1
}

export function isDateWithinClosure(date: Date): boolean {
  const { start, end } = getClosureRange()
  return closureNotice.enabled && date >= start && date <= end
}

/** Combined "can this date be booked" check for the reservation date picker. */
export function isReservableDate(date: Date): boolean {
  if (isClosedWeekday(date)) return false
  if (isDateWithinClosure(date)) return false
  return true
}
