import { restaurant } from '../data/restaurant'

/**
 * Lightweight map embed. Uses the keyless Google Maps `output=embed` iframe
 * so the site works out of the box — swap the src for a styled Mapbox/Google
 * Maps JS embed with the client's own API key before launch for full control
 * over styling/branding.
 */
export default function MapEmbed({ className = '' }: { className?: string }) {
  const q = encodeURIComponent(restaurant.mapQuery)
  return (
    <div className={`overflow-hidden rounded-2xl border border-gold/20 ${className}`}>
      <iframe
        title="Mai Tai auf der Karte"
        src={`https://www.google.com/maps?q=${q}&output=embed`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full min-h-[240px] w-full grayscale-[15%]"
        style={{ border: 0 }}
      />
    </div>
  )
}
