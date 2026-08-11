import { useMemo, useState, type FormEvent, type ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { restaurant, closureNotice } from '../data/restaurant'
import { isClosedWeekday, isDateWithinClosure } from '../lib/closure'
import { formatDate } from '../lib/formatDate'
import { isSupportedLanguage } from '../i18n/languages'

const TIME_SLOTS = [
  '17:30',
  '18:00',
  '18:30',
  '19:00',
  '19:30',
  '20:00',
  '20:30',
  '21:00',
  '21:30',
]

type Status = 'idle' | 'submitting' | 'success' | 'error'

function todayISO() {
  return new Date().toISOString().slice(0, 10)
}

export default function ReservationForm() {
  const { t, i18n } = useTranslation()
  const lang = isSupportedLanguage(i18n.language) ? i18n.language : 'de'
  const [status, setStatus] = useState<Status>('idle')
  const [dateValue, setDateValue] = useState('')
  const [dateError, setDateError] = useState('')
  const [guests, setGuests] = useState('2')

  const min = useMemo(todayISO, [])

  function handleDateChange(value: string) {
    setDateValue(value)
    if (!value) {
      setDateError('')
      return
    }
    const date = new Date(`${value}T12:00:00`)
    if (isClosedWeekday(date)) {
      setDateError(t('form.mondayError'))
    } else if (isDateWithinClosure(date)) {
      setDateError(
        t('form.closureError', {
          start: formatDate(closureNotice.startDate, lang),
          end: formatDate(closureNotice.endDate, lang),
        }),
      )
    } else {
      setDateError('')
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)

    // Honeypot: real users never fill this hidden field, bots often do.
    if (formData.get('company')) {
      setStatus('success') // pretend success, silently drop
      return
    }

    if (!dateValue || dateError) return

    setStatus('submitting')

    // TODO(client): no booking backend was specified in the brief. Wire this
    // to the client's preferred service (Formspree, Resend + serverless
    // function, or a booking platform like OpenTable/Resmio) before launch.
    // For now this simulates a submission so the UI/UX can be reviewed.
    try {
      await new Promise((resolve) => setTimeout(resolve, 700))
      setStatus('success')
      form.reset()
      setDateValue('')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-3xl border border-jade/30 bg-jade/5 p-10 text-center">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="mx-auto text-jade" aria-hidden="true">
          <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth="1.3" />
          <path d="M12 20.5L17 25.5L28 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h3 className="mt-5 font-display text-2xl text-charcoal">{t('form.successHeading')}</h3>
        <p className="mx-auto mt-3 max-w-sm text-charcoal/60">{t('form.successBody')}</p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 text-eyebrow text-jade underline underline-offset-4"
        >
          {t('form.successRetry')}
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Honeypot — hidden from real users via CSS, visible to naive bots */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="company">{t('form.honeypotLabel')}</label>
        <input type="text" id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label={t('form.name')} htmlFor="name" required>
          <input id="name" name="name" type="text" required autoComplete="name" className={inputClass} />
        </Field>
        <Field label={t('form.phone')} htmlFor="phone" required>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" className={inputClass} />
        </Field>
      </div>

      <Field label={t('form.email')} htmlFor="email" required>
        <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} />
      </Field>

      <div className="grid gap-6 sm:grid-cols-3">
        <Field label={t('form.date')} htmlFor="date" required error={dateError}>
          <input
            id="date"
            name="date"
            type="date"
            required
            min={min}
            value={dateValue}
            onChange={(e) => handleDateChange(e.target.value)}
            className={inputClass}
          />
        </Field>

        <Field label={t('form.time')} htmlFor="time" required>
          <select id="time" name="time" required defaultValue="" className={inputClass}>
            <option value="" disabled>
              {t('form.timeChoose')}
            </option>
            {TIME_SLOTS.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
                {t('form.timeSuffix')}
              </option>
            ))}
          </select>
        </Field>

        <Field label={t('form.guests')} htmlFor="guests" required>
          <select
            id="guests"
            name="guests"
            required
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className={inputClass}
          >
            {Array.from({ length: 8 }, (_, i) => i + 1).map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? t('form.guestUnitOne') : t('form.guestUnitOther')}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <p className="text-sm text-charcoal/50">
        {t('form.guestsOverNote', { phone: restaurant.phone })}
      </p>

      <Field label={t('form.message')} htmlFor="message">
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder={t('form.messagePlaceholder')}
          className={inputClass}
        />
      </Field>

      {status === 'error' && <p className="text-sm text-lacquer">{t('form.errorGeneric')}</p>}

      <button
        type="submit"
        disabled={status === 'submitting' || !!dateError}
        className="w-full rounded-full bg-jade px-7 py-4 text-eyebrow text-cream transition hover:bg-jade-light disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
      >
        {status === 'submitting' ? t('form.submitting') : t('form.submit')}
      </button>
    </form>
  )
}

const inputClass =
  'w-full rounded-xl border border-charcoal/15 bg-cream px-4 py-3 text-charcoal outline-none transition focus:border-jade focus:ring-2 focus:ring-jade/20'

function Field({
  label,
  htmlFor,
  required,
  error,
  children,
}: {
  label: string
  htmlFor: string
  required?: boolean
  error?: string
  children: ReactNode
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-charcoal/80">
        {label} {required && <span className="text-lacquer">*</span>}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs text-lacquer">{error}</p>}
    </div>
  )
}
