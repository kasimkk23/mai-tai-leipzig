import { useTranslation } from 'react-i18next'
import type { SpiceLevel } from '../data/menuTypes'

const LABEL_KEYS: Partial<Record<SpiceLevel, string>> = {
  2: 'spice.leichte',
  3: 'spice.thai',
}

function ChiliMark({ filled }: { filled: boolean }) {
  return (
    <svg
      viewBox="0 0 16 16"
      width="12"
      height="12"
      aria-hidden="true"
      className={filled ? 'text-lacquer' : 'text-charcoal/15'}
    >
      <path
        d="M6.2 2.4c.4-.5 1.1-.6 1.5-.1.3.3.3.8.1 1.2-.6 1-.8 1.9-.5 2.6.6-.3 1.4-.3 2.1 0 2 .9 3.1 3.3 2.4 5.6-.7 2.5-3 4.2-5.3 3.8-2.2-.4-3.6-2.5-3.2-4.9C3.7 7.9 5.2 5.9 6.9 5c-.6-.7-1.1-1.7-.7-2.6z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.4"
      />
    </svg>
  )
}

export default function SpiceBadge({
  level,
  showLabel = true,
  className = '',
}: {
  level?: SpiceLevel
  showLabel?: boolean
  className?: string
}) {
  const { t } = useTranslation()

  // Matches the original menu's convention: unmarked/level-1 dishes are
  // "normal mild" and intentionally carry no icon at all — only the two
  // marked heat levels (leichte Schärfe / Thai-Schärfe) render a badge.
  if (!level || level < 2) return null

  const label = t(LABEL_KEYS[level]!)

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-lacquer/25 bg-lacquer/5 px-2 py-0.5 ${className}`}
      title={label}
    >
      <span className="flex items-center gap-0.5">
        {[1, 2, 3].map((n) => (
          <ChiliMark key={n} filled={n <= level} />
        ))}
      </span>
      {showLabel && (
        <span className="text-[0.65rem] font-semibold uppercase tracking-wider text-lacquer">
          {label}
        </span>
      )}
    </span>
  )
}
