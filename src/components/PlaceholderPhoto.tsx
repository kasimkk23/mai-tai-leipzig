import { useState } from 'react'

/**
 * Photo slot with a graceful placeholder fallback.
 *
 * Pass `src` pointing at a file in `public/images/` (see
 * public/images/README.md for the exact filenames each slot expects). If the
 * file doesn't exist yet — or `src` is omitted — this renders a styled
 * on-brand gradient panel labelled "Fotografie folgt" instead of a broken
 * image, so the site always looks intentional. The moment a correctly named
 * file is dropped into `public/images/`, it starts rendering automatically
 * on next load — no code changes needed.
 */
export default function PlaceholderPhoto({
  label,
  src,
  tone = 'charcoal',
  className = '',
  eager = false,
}: {
  /** What the photo depicts, e.g. "Grünes Thai-Curry mit frischem Basilikum". Used as alt text. */
  label: string
  /** Path under public/, e.g. "/images/hero-curry.webp". Omit to always show the placeholder. */
  src?: string
  tone?: 'charcoal' | 'jade' | 'gold'
  className?: string
  /** Set true for above-the-fold images (e.g. the hero) so they load immediately instead of lazily. */
  eager?: boolean
}) {
  const [errored, setErrored] = useState(false)

  if (src && !errored) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <img
          src={src}
          alt={label}
          loading={eager ? 'eager' : 'lazy'}
          fetchPriority={eager ? 'high' : 'auto'}
          decoding="async"
          className="h-full w-full object-cover"
          onError={() => setErrored(true)}
        />
      </div>
    )
  }

  const gradients: Record<string, string> = {
    charcoal: 'linear-gradient(135deg, #1a1613 0%, #2c241c 55%, #1f4d3b 130%)',
    jade: 'linear-gradient(135deg, #1f4d3b 0%, #143229 60%, #1a1613 130%)',
    gold: 'linear-gradient(135deg, #2c241c 0%, #1a1613 60%, #4a3a1f 130%)',
  }

  return (
    <div
      role="img"
      aria-label={label}
      className={`relative flex items-end overflow-hidden ${className}`}
      style={{ background: gradients[tone] }}
    >
      <div className="bg-grain absolute inset-0" />
      <svg
        className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-cream/10"
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
      >
        <ellipse cx="24" cy="34" rx="16" ry="4" stroke="currentColor" strokeWidth="1.2" />
        <path d="M12 34C12 22 17 12 24 8C31 12 36 22 36 34" stroke="currentColor" strokeWidth="1.2" />
        <path d="M18 20C21 17 27 17 30 20" stroke="currentColor" strokeWidth="1" />
      </svg>
      <span className="relative m-3 rounded-full border border-gold/30 bg-charcoal/60 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-widest text-gold backdrop-blur-sm">
        Fotografie folgt
      </span>
    </div>
  )
}
