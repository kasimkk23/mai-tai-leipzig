/**
 * Vectorized Mai Tai wordmark. A restrained monogram (leaf-accented "M") plus
 * set type — recreated from scratch as an SVG so it scales cleanly and can be
 * recolored per-theme (gold on dark footer, charcoal on light header, etc).
 *
 * ⚠️ Placeholder brand mark: this is a redesign proposal, not a trace of the
 * client's existing logo. Swap for the client's approved artwork before launch
 * if they want to keep their current mark.
 */
export default function Logo({
  className = '',
  tone = 'dark',
}: {
  className?: string
  tone?: 'dark' | 'light'
}) {
  const ink = tone === 'dark' ? 'var(--color-charcoal)' : 'var(--color-cream)'
  const gold = 'var(--color-gold)'

  return (
    <svg viewBox="0 0 220 52" className={className} role="img" aria-label="Mai Tai Leipzig">
      {/* leaf mark */}
      <path
        d="M6 40C6 24 16 10 30 6C28 20 24 30 6 40Z"
        fill={gold}
      />
      <path
        d="M6 40C18 34 26 24 30 6"
        stroke={ink}
        strokeWidth="1"
        fill="none"
        opacity="0.35"
      />
      <text
        x="42"
        y="34"
        fontFamily="'Fraunces', serif"
        fontSize="28"
        fill={ink}
        letterSpacing="0.5"
      >
        Mai Tai
      </text>
      <text
        x="43"
        y="46"
        fontFamily="'Manrope', sans-serif"
        fontSize="8.5"
        letterSpacing="3.5"
        fill={gold}
      >
        SEIT 1993 · LEIPZIG
      </text>
    </svg>
  )
}
