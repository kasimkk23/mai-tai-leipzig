# Photos go here

Drop files in this folder using the **exact filenames** below — the site
already looks for them and will start using them automatically on next
reload. No code changes, no rebuild step. Until a given file exists, that
slot keeps showing the on-brand "Fotografie folgt" placeholder instead of a
broken image, so it's safe to add these one at a time.

All photos are `.webp` — smaller files at the same visual quality than jpg/png,
which matters for the Lighthouse performance target. If you ever swap in a
different format, update the `src` extension in the component listed below
to match.

| Filename | Used on | Aspect ratio | Suggested min size | Content |
|---|---|---|---|---|
| `hero-curry.webp` | Home hero (slide 1) | landscape, full-bleed (~16:9 or wider) | 1920×1200 | Grünes Thai-Curry mit frischem Basilikum und Kaffirlimette |
| `hero-satay.webp` | Home hero (slide 2) | landscape, full-bleed | 1920×1200 | Hühnerspieße „Gai Sate" vom Hibachi-Grill mit Erdnussdip |
| `hero-springrolls.webp` | Home hero (slide 3) | landscape, full-bleed | 1920×1200 | Knusprige Frühlingsrollen „Popia" mit Nam-Pla-Dip |
| `hero-padthai.webp` | Home hero (slide 4) | landscape, full-bleed | 1920×1200 | Pad Thai mit Sojasprossen, Ei und gerösteten Erdnüssen |
| `welcome-basil.webp` | Home welcome section (left tile) | portrait 3:4 | 900×1200 | Frisches Thai-Basilikum / Zutaten in der Küche |
| `welcome-table.webp` | Home welcome section (right tile) | portrait 3:4 | 900×1200 | Gedeckter Tisch im Restaurant |
| `reservation-table.webp` | Reservierung page | landscape 4:3 | 1200×900 | Gemütlicher, eingedeckter Tisch, bereit für Gäste |

The four hero images render full-bleed behind text at up to 92% of the
viewport height and crossfade automatically every ~6.5s, so pick images with
enough headroom/negative space on the left for the overlaid heading and
avoid busy detail dead-center where the eye lands.

## Optional: social share image

`src/components/SEO.tsx` also references `/og-image.jpg` (i.e.
`public/og-image.jpg`, not inside this folder) for link previews on
WhatsApp/Facebook/etc. Add a **1200×630** landscape image there if you'd
like real link-preview cards — until then, sharing a link just won't show a
preview image, nothing breaks.

## Where this is wired in code

- [`src/components/PlaceholderPhoto.tsx`](../../src/components/PlaceholderPhoto.tsx) — the component all of these render through (`src` prop, with automatic fallback on load error).
- [`src/components/Hero.tsx`](../../src/components/Hero.tsx) — the four hero slides.
- [`src/pages/Home.tsx`](../../src/pages/Home.tsx) — the two welcome-section tiles.
- [`src/pages/Reservierung.tsx`](../../src/pages/Reservierung.tsx) — the one reservation-page photo.
