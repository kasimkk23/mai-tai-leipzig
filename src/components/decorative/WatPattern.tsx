type Props = {
  className?: string
}

/**
 * A thin, repeating geometric line pattern inspired by Thai temple (wat)
 * roofline silhouettes / fabric border trims. Used as a full-width hairline
 * accent, e.g. beneath the header or above the footer. Purely decorative.
 */
export default function WatPattern({ className = '' }: Props) {
  return (
    <svg
      viewBox="0 0 240 16"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
    >
      <line x1="0" y1="15" x2="240" y2="15" stroke="currentColor" strokeWidth="0.75" opacity="0.4" />
      {Array.from({ length: 12 }).map((_, i) => {
        const x = i * 20 + 10
        return (
          <path
            key={i}
            d={`M${x - 8} 15 L${x} 3 L${x + 8} 15`}
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            strokeLinejoin="round"
          />
        )
      })}
    </svg>
  )
}
