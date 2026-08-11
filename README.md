# Mai Tai Leipzig — Website Redesign

A custom-built, modern replacement for the WordPress/Enfold site at
[maitai-leipzig.de](https://www.maitai-leipzig.de/). React + Vite + TypeScript +
Tailwind CSS v4, with Framer Motion for scroll reveals and React Router for
the multi-page structure.

## Getting started

```bash
npm install
npm run dev      # local dev server, http://localhost:5173
npm run build    # type-checks + production build to dist/
npm run preview  # preview the production build locally
```

## Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/karte` | Speisekarte (à la carte menu) |
| `/mittagskarte` | Mittagskarte (lunch menu) |
| `/reservierung` | Reservation form |
| `/impressum` | Legal notice |
| `/datenschutz` | Privacy policy |

## Content & data

All restaurant facts, menu items, and prices live in typed data files, not
hardcoded in JSX — edit these to update the live site content:

- [`src/data/restaurant.ts`](src/data/restaurant.ts) — name, address, phone,
  hours, brand values, the Betriebsurlaub closure banner.
- [`src/data/menu.ts`](src/data/menu.ts) — Speisekarte categories/items, curry
  builder options, optional sides.
- [`src/data/lunchMenu.ts`](src/data/lunchMenu.ts) — Mittagskarte items.

### Updating the Betriebsurlaub closure banner

Edit `closureNotice` in `src/data/restaurant.ts` (`startDate`, `endDate`,
`message`). The banner at the top of the site and the notice on the
reservation page show themselves automatically only while today's date falls
inside that range — no manual toggling needed. The reservation date picker
also automatically blocks bookings for dates inside the range (and every
Monday, since the restaurant is closed then).

## ⚠️ Placeholder content — needs real assets/credentials before launch

This brief did not supply photography, a booking backend, or a final PDF
menu, so the following are intentionally built as clearly-flagged
placeholders:

1. **Food/restaurant photography** — every photo slot (`PlaceholderPhoto`
   component) renders an on-brand gradient panel labelled "Fotografie
   folgt" instead of a broken image until a real file is present. **To add
   photos: drop files into [`public/images/`](public/images/README.md)
   using the exact filenames listed there** — they're picked up
   automatically on next reload, no code changes needed.
2. **Speisekarte PDF download** — the "Speisekarte zum Download" button on
   `/karte` links to `/downloads/Speisekarte-2025.pdf`, which does not exist
   yet. Add the real file at `public/downloads/Speisekarte-2025.pdf`.
3. **Reservation form backend** — the form (`src/components/ReservationForm.tsx`)
   is fully built and validated client-side (including the honeypot
   anti-spam field and Monday/closure-aware date validation) but only
   *simulates* a submission. Wire the `handleSubmit` TODO to a real service
   (Formspree, Resend + a small serverless function, or a booking platform).
4. **Map embed** — `src/components/MapEmbed.tsx` uses the keyless Google
   Maps `output=embed` iframe so the site works without any setup. For full
   styling control, swap in a Google Maps JS / Mapbox embed with the
   client's own API key.
5. **Logo** — `src/components/Logo.tsx` is a redesigned wordmark proposal
   (vector, recolorable), not a trace of the client's existing logo. Swap
   for their approved artwork if they want to keep the current mark.
6. **Datenschutzerklärung** — `/datenschutz` uses a standard German
   restaurant privacy-policy template (clearly marked on the page itself).
   Have it reviewed by a lawyer and adapted to whatever services actually
   ship (form backend, analytics, etc.) before launch.
7. **Spice levels** — the original site's per-item 🌶️ marks weren't present
   in the content brief text, so `spiceLevel` values in the menu data files
   are an editorial best-effort guess based on each dish's name/description
   (flagged in a comment at the top of `menu.ts`). Please review against the
   real menu before launch.
8. **Production domain** — `src/components/SEO.tsx` assumes
   `https://www.maitai-leipzig.de` for canonical URLs / Open Graph tags;
   update `SITE_URL` if that changes. `og-image.jpg` referenced there also
   needs to be added to `public/`.

## Languages

The site is available in 5 languages — **German (default), English, French,
Italian, Spanish** — via a client-side switcher in the header (desktop:
dropdown next to the phone number; mobile: row of codes at the bottom of the
menu panel).

- **German is always what a first-time visitor sees**, regardless of their
  browser's language setting — this was a deliberate choice, not an
  oversight: browser locale is a poor signal for a German restaurant's
  audience. Once someone picks a language, it's remembered (`localStorage`)
  for their next visit.
- Translations live in [`src/i18n/locales/`](src/i18n/locales) — one file per
  language (`de.ts` is canonical; `en.ts`/`fr.ts`/`it.ts`/`es.ts` are
  type-checked against it, so a missing key fails the build rather than
  silently falling back). Dish *names* (e.g. "Pad Thai", "Tom Yum Gung") are
  intentionally left untranslated in every language — only descriptions,
  add-ons and UI copy are translated.
- **Impressum and Datenschutz stay German-only in every language** (per the
  client's request) — legally-relevant text isn't machine-translated. A
  small translated notice explains this at the top of both pages when
  browsing in a non-German language.
- Each non-German language is a separate ~4KB (gzipped) chunk, fetched only
  when a visitor actually switches to it — German ships in the main bundle
  since it's the default.
- **Scope trade-off**: this is a single URL per page with client-side
  language switching (no `/en/karte`-style per-locale routes). That keeps
  the implementation simple and correct, but means search engines will
  primarily index the German version. If multi-language SEO (separate
  indexable URLs per language, `hreflang` tags) becomes a priority later,
  that's a bigger routing change worth planning as its own task.

## Design system

- Colors, fonts and a couple of small animation keyframes are defined once
  in `src/index.css` via Tailwind v4's `@theme`.
- `src/components/decorative/` holds the line-art leaf/temple-roofline SVG
  accents used instead of literal clip-art.
- `src/components/SpiceBadge.tsx` replaces the old 🌶️🌶️/🌶️🌶️🌶️ emoji with a
  small chili-mark badge component (0–3 scale; unmarked/mild dishes show no
  badge, matching the original menu's convention).
