# All Access Services — Visual Overhaul Drop

This is a focused redesign of the All Access Services public site, delivered as drop-in replacement files for the existing codebase. It preserves the orange/black industrial brand identity but tightens the execution: bolder display typography, refined motion, hex motif as connective tissue, IBM Plex Mono numerals on data, single dominant accent (orange), squared edges with hairline borders.

## What's in this package

```
src/
├── index.css                                  ← updated: fonts, responsive nav-height, motion utils
├── App.jsx                                    ← updated: SafetyTicker hoisted globally, var-based padding
└── components/home/
    ├── Navbar.jsx                             ← redesigned: scroll-aware, no metal texture, cleaner balance
    ├── NavTabBar.jsx                          ← redesigned: dropdown items now use <Link> (SPA), refined gradient
    ├── SafetyTicker.jsx                       ← redesigned: <Link> not <a>, faster marquee, repositioned
    ├── HeroSection.jsx                        ← rebuilt: clamp() display type, parallax, live chip, stats strip
    ├── ServicesSection.jsx                    ← rebuilt: bento layout, hex number badges
    ├── EquipmentTypesSection.jsx              ← rebuilt: refined cards, mono specs, hex numerals
    ├── FeaturedInventory.jsx                  ← rebuilt: refined cards, mono prices, better filter pills
    ├── LocationsSection.jsx                   ← rebuilt: keyless map embed (drops the API-key bug), refined cards
    ├── TestimonialsSection.jsx                ← refined: better quote treatment, mono rating
    ├── CTASection.jsx                         ← refined: dark-with-orange-accents (was all-orange), stronger
    ├── Footer.jsx                             ← refined: removed unused imports, clean newsletter copy
    └── AppCTABadge.jsx                        ← fixed: motion.create(Link), removed asChild misuse
PAGE_PADDING_PATCHES.md                        ← single-line edits for 8 page files (paste-and-replace)
README.md (this file)
```

## Apply order

1. Drop `src/index.css` and `src/App.jsx` into place.
2. Drop the 12 files in `src/components/home/` into place (overwriting existing).
3. Apply the 8 single-line edits in `PAGE_PADDING_PATCHES.md` to your page files.
4. `npm run dev` and verify visually at every breakpoint (mobile, sm, md+).

## What this overhaul addresses

### Critical bugs fixed (from v2 review)

- 🚨 **Google Maps API key removed.** `LocationsSection.jsx` no longer makes static-map requests with the hardcoded key. It uses the keyless `https://www.google.com/maps?q=...&output=embed` iframe instead. **You still need to revoke the leaked key at console.cloud.google.com → APIs & Credentials immediately** — that one is committed in your git history and cannot be unshipped from there.
- ✅ **Layout regression fixed.** `--site-nav-height` is now responsive (6rem / 7rem / 10.5rem) and `<main>` applies it once. The 8 per-page `pt-40` paddings are removed via `PAGE_PADDING_PATCHES.md`.
- ✅ **Duplicate `style` attribute** in HeroSection — gone (rewritten from scratch).
- ✅ **NavTabBar dropdown items** now use `<Link>` (SPA navigation, no full reload).
- ✅ **SafetyTicker outer wrapper** now `<Link>`, not `<a>`.
- ✅ **AppCTABadge `asChild` misuse** — replaced with `motion.create(Link)`.
- ✅ **NavTabBar / SafetyTicker overlap** — both repositioned to flush.
- ✅ **Hash anchors** — global `[id] { scroll-margin-top: var(--site-nav-height) }` so `/locations#san-diego` lands below the nav.

### Visual direction

**Typography**
- Display: Barlow Condensed Black, used at `clamp(3rem, 12vw, 11rem)` — true display scale on the hero
- Body: DM Sans (existing)
- Numerals/data: IBM Plex Mono (added) — used for stats, prices, phone numbers, anywhere a "telemetry readout" feel applies. Apply via `className="font-numeric"`.
- Tracking: tighter on display (-0.02em via `tracking-tight`), wider on labels (`0.25em` to `0.35em`)

**Color**
- Orange (`#f97316`) is the only dominant accent. Teal (`#2dd4bf`) is reserved for data/secondary.
- All cards: `bg-zinc-900/40` to `/60` with hairline `border-zinc-800` borders. Hover lifts to `border-orange-500/60`.
- No `rounded-xl` / `rounded-2xl` on structural cards (industrial = squared). Pills/chips can use `rounded` minimally.

**Motion**
- Scroll-triggered fade-up on every section using `whileInView` with `viewport={{ once: true, margin: '-80px' }}`
- Hover lift: `hover:-translate-y-1` on cards, paired with `border-orange-500/60`
- Hero: subtle vertical parallax on the background image via `useScroll` + `useTransform`
- Live indicators: `live-dot` class drives a 1.6s pulse animation on key data points
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` consistently — gives a confident "industrial precision" feel rather than bouncy

**Structural patterns**
- Hex SVG outlines as decoration (top-right of Hero, ServicesSection number badges, LocationsSection live indicators)
- Big section eyebrows: `w-10 h-px bg-orange-500` + uppercase tracking-wide label
- Bottom hover accent: a 1px orange line that scales from `scale-x-0` to `scale-x-100` left-to-right
- Section numerals: `01` `02` etc. in mono orange as supporting context

## What I didn't redesign (and why)

- **FleetSection** — already fits the new direction (hex motif, ClearSky-style stats, dark + teal-on-data). Leaving as-is, with the v2 fix that un-hid the mobile + API blocks already applied.
- **GroundControlCTA** — ditto. The v2 prompt fixed the misleading `/reserve` target. If you want a deeper polish, the simplest move is to differentiate the two CTAs: make "Contact Ground Control" a `tel:${SITE_CONFIG.phoneTel}` link and keep "Learn More" as `/dashboard`.
- **FloatingCTA** — left alone. The v2 explode-state-not-resetting issue is cosmetic; if you want to fix it, add `setTimeout(() => setExploded(false), 1200)` after the navigation in `handleClick`.
- **Pages** — same content, just trimmed pt-40. The visual identity from the redesigned components will propagate naturally because they share the same color and type system.

## Open questions

These are choices I had to make without your input. Override any of them:

1. **The hero's third headline word.** Original was "WORK SMARTER./STRONGER./SAFER." I dropped the cycling word entirely — felt like it weakened the punchline. Just "REACH HIGHER." holds the entire mark. If you want the three values restated, they're naturally surfaced in the Stats strip (`24/7 SERVICE`, `JLG AUTHORIZED`, `OSHA TRAINED`). Tell me if you want the cycling word back.
2. **Live chip text in the Hero.** Currently says `Fleet Online · SoCal Wide Service`. If you have a real live data signal (units available, machines deployed today), wire that in here. Right now it's editorial copy.
3. **Footer social row.** I kept it removed (no real profile URLs verified). If All Access Services has active Facebook / Instagram / LinkedIn, give me the URLs and I'll restore the row.
4. **CTASection background.** I replaced the full orange background with dark-plus-orange-accents. The orange-on-orange original felt aggressive and clashed with the `bg-orange-500` SafetyTicker right above it on the home page. If you want orange dominance, swap `bg-black` → `bg-gradient-to-br from-orange-600 via-orange-500 to-orange-600` and adjust the text colors accordingly.
5. **Newsletter destination.** The form now toasts honestly ("Got it — we'll add you to our list") but still doesn't POST anywhere. Wire it up to your real provider (Mailchimp / ConvertKit / Base44 entity / fetch endpoint) when ready.

## Things still on the todo list (carried forward from v2)

- 📞 **Verify `888-777-5990` is live.** This is a 60-second test the human has to do.
- 🌐 **Audit `allaccessservices.com` external image URLs.** Many `imageUrl` and `specSheet` values in `rentalInventory.js` and `siteConfig.js` link to the legacy site. If that's being decommissioned during this rebuild, those become 404s.
- 📦 **Uninstall dead deps:** `npm uninstall three react-quill html2canvas jspdf canvas-confetti moment react-leaflet react-hot-toast` (zero usages in `src/`).
- 🐛 **ProductDetail stale slugs:** `ATTACHMENTS` and `CATEGORY_GRADIENTS` in `src/pages/ProductDetail.jsx` still use `boom-lifts`, `knuckle-booms`, `articulating-booms` — should be `straight-boom-lifts`, `articulating-boom-lifts`. Otherwise straight-boom and articulating model pages render without the recommended attachments and with the default gradient.
- 🐛 **Rentals category resync:** `selectedCategory` in `src/pages/Rentals.jsx` only reads the URL param on mount, so navigating between categories via NavTabBar doesn't update the page state. Add `useEffect(() => { ... }, [categoryParam])` to resync.
- 🐛 **Reserve cart row schema:** `item.img`, `item.model`, `item.fuel` references in `src/pages/Reserve.jsx` don't match what `addToCart` actually sets (just `id`, `name`, `category`). Either (a) pass more fields when adding, or (b) reference `item.name`, `item.imageUrl`, `item.power`.
- 🎨 **`fuelBadge` color map** in `siteConfig.js` still uses light-theme classes that look out of place on the now-dark Reserve page.
- 🌐 **`favicon.png`** referenced in `index.html` but no `public/` folder exists yet.
- 🛡️ **Analytics + error tracking** — Plausible or GA4 + Sentry, before launch.

I touched the visual layer; the data/state issues above are the highest-value functional follow-ups.
