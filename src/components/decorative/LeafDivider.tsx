type Props = {
  className?: string
  variant?: 'gold' | 'jade'
}

/**
 * A single line-art Thai-basil/banana-leaf silhouette used as a small section
 * accent. Intentionally minimal — a mark, not an illustration.
 */
export default function LeafDivider({ className = '', variant = 'gold' }: Props) {
  const stroke = variant === 'gold' ? 'var(--color-gold)' : 'var(--color-jade)'
  return (
    <svg
      viewBox="0 0 160 28"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 14C34 2 66 2 80 14C94 26 126 26 156 14"
        stroke={stroke}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M80 14C80 14 76 8 68 8C71 12 75 14 80 14Z"
        fill={stroke}
      />
      <path
        d="M80 14C80 14 84 20 92 20C89 16 85 14 80 14Z"
        fill={stroke}
      />
      <circle cx="80" cy="14" r="2.5" fill={stroke} />
    </svg>
  )
}
