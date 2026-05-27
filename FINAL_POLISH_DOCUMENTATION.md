# Caledonia Heights — Final Polish Documentation

This document records **Phase 3** (card visibility fix) and **Phase 4** (combined final polish) applied after the initial rebuild and design overhaul.

**Last updated:** May 27, 2026  
**Source prompts:** `CARD_VISIBILITY_FIX.md`, `COMBINED_FINAL_PROMPT.md`

---

## 1. Executive summary

Two polish passes were applied on top of the existing dark-theme rebuild:

| Phase | Prompt | Goal |
|-------|--------|------|
| **Phase 3** | `CARD_VISIBILITY_FIX.md` | Fix white/invisible cards and unreadable text on several pages |
| **Phase 4** | `COMBINED_FINAL_PROMPT.md` | SEO, favicon, hero images, typography cleanup, navbar UX, home polish, per-page titles |

The site now has:
- Visible dark cards everywhere
- Full SEO stack (HTML meta + sitemap + robots + react-helmet-async)
- Company favicon and PWA manifest
- Page-specific hero background photos
- Caldora branding in customer-facing copy (no Shengda / internal tech stack on Smart Water)
- Outfit-based labels (Space Mono removed)
- Working navbar dropdown navigation

---

## 2. Phase 3 — Card visibility fix

### Root cause

`src/components/Card.css` still used `background-color: white` from the original light template. Any page using the shared `<Card>` component rendered white boxes with light text on dark sections — text became invisible.

### Files changed

| File | Change |
|------|--------|
| `src/components/Card.css` | Switched to `--bg-card`, `--text-white`, `--text-bright` tokens |
| `src/pages/MajiSmart.jsx` + `MajiSmart.css` | Key Features: 6 `.feature-card` divs with Tabler icons + titles |
| `src/pages/AiSolutions.jsx` + **new** `AiSolutions.css` | `.ai-product-card` and `.tier-card` classes |
| `src/pages/Projects.jsx` + `Projects.css` | `.project-card` class on portfolio cards |
| `src/pages/SmartWater.jsx` + `SmartWater.css` | `.features-card` on left specs card; cyan arrow list bullets |
| `src/index.css` | Dark-theme enforcement block at end of file (attribute selectors for `[class*="card"]`, etc.) |

### MajiSmart Key Features (new structure)

Six feature cards with icons:

1. Real-Time Monitoring (`IconEye`)
2. Smart Scheduling (`IconDroplets`)
3. Remote Valve Control (`IconAdjustments`)
4. Anomaly Detection (`IconAlertTriangle`)
5. Instant Alerts (`IconBell`)
6. Multi-Scheme Oversight (`IconMap`)

---

## 3. Phase 4 — Combined final polish

### 3.1 Site metadata & SEO

#### `index.html` (full rewrite)

- **Favicon:** `/favicon.ico`, PNG sizes, Apple touch icon, web manifest
- **Theme color:** `#040E1C`
- **Primary SEO:** title, description, keywords, author, robots, canonical, geo tags
- **Open Graph + Twitter Card** meta tags
- **JSON-LD** structured data (`Organization` schema)
- **Fonts:** Plus Jakarta Sans + Outfit only (Space Mono removed from Google Fonts link)

#### Static SEO files (`public/`)

| File | Purpose |
|------|---------|
| `site.webmanifest` | PWA name, icons, `#040E1C` theme/background |
| `sitemap.xml` | All 9 routes with priorities |
| `robots.txt` | Allow all + sitemap URL |

#### Per-page SEO (`react-helmet-async`)

**New dependency:** `react-helmet-async@^3.0.0`

| File | Role |
|------|------|
| `src/main.jsx` | App wrapped in `<HelmetProvider>` |
| `src/components/SEO.jsx` | Reusable `<SEO />` component |
| All 9 page files | Unique `<title>`, description, keywords, canonical per route |

**SEO component props:**

```jsx
<SEO
  title="Page-specific title"
  description="Page-specific description"
  keywords="comma, separated, keywords"
  canonical="https://caledoniaheights.co.ke/route"
  ogImage="optional override"  // defaults to og-image.jpg
/>
```

**Per-page titles (browser tab):**

| Route | SEO title |
|-------|-----------|
| `/` | Your Long-Term Technology Partner in Kenya |
| `/about` | About Us — 8 Years Building Kenya's Digital Infrastructure |
| `/services` | Technology Services — Smart Water, AI, Software & ERP |
| `/platforms` | Our Platforms — MajiSmart, Smart Metering & AI |
| `/majismart` | MajiSmart — AI-Powered Smart Irrigation Platform |
| `/smart-water` | Smart Water Metering — Prepaid & Real-Time Solutions |
| `/ai-solutions` | AI Business Solutions — Chatbots, Sales Agents & Automation |
| `/projects` | Projects & Portfolio — Platforms, AI & Web Delivery |
| `/contact` | Contact Us — Get in Touch with Our Team |

---

### 3.2 Hero background images

Nine hero photos were added under `public/assets/images/` and registered in `src/data/images.js`.

| Key | File | Used on |
|-----|------|---------|
| `heroBg` | `hero-bg.jpg` | Home hero (CSS background overlay) |
| `aboutHero` | `about-hero.jpg` | About |
| `servicesHero` | `services-hero.jpg` | Services |
| `platformsHero` | `platforms-hero.jpg` | Platforms |
| `majismartHero` | `majismart-hero.jpg` | MajiSmart |
| `smartWaterHero` | `smart-water-hero.jpg` | Smart Water |
| `aiHero` | `ai-hero.jpg` | AI Solutions |
| `projectsHero` | `projects-hero.jpg` | Projects |
| `contactHero` | `contact-hero.jpg` | Contact |

**Implementation:**

- `PageHero.jsx` accepts optional `backgroundImage` prop
- `PageHero.css` adds `.page-hero__bgImage` with dark gradient overlay
- `Home.jsx` sets `--hero-bg` CSS variable on `.home-hero` for the home background

---

### 3.3 Typography — Space Mono removed

Space Mono was removed from fonts and CSS. Labels now use **Outfit** via `--font-body` with `font-weight: 600` and `letter-spacing: 0.04em` max.

| Area | Before | After |
|------|--------|-------|
| `--font-mono` in `:root` | `'Space Mono', monospace` | `'Outfit', sans-serif` |
| `.mono`, `.section-label`, `.service-badge`, `.pill`, `.step-number` | Mono + uppercase | Body font, no robotic spacing |
| Page CSS (About, Contact, Projects, AiSolutions, Footer, Navbar) | `font-family: var(--font-mono)` | `font-family: var(--font-body)` |

**Fonts loaded:** Plus Jakarta Sans (display/headings), Outfit (body/labels)

---

### 3.4 Smart Water content cleanup

| Change | Detail |
|--------|--------|
| Branding | "Shengda token/API" → **Caldora** in all user-visible Smart Water copy |
| NB-IoT flow | Updated to: "Smart meters → cellular network → ingestion server → database → dashboards" |
| Tech stack pills | Removed Laravel, PHP, Next.js, Supabase, Node.js, Daraja API pills from page |
| Platforms + projects | Remaining "Shengda API" pill → "Caldora API" |

---

### 3.5 Navbar dropdown fix

**Problem:** Dropdown items appeared but did not navigate reliably (especially on touch / when parent NavLink captured clicks).

**Solution (`Navbar.jsx` + `Navbar.css`):**

- Click-to-toggle dropdowns with `activeDropdown` state
- All menu items are `<Link className="dropdown-item">` with `onClick={closeDropdown}`
- Menus auto-close on route change (`useLocation` + `useEffect`)
- Click-outside handler closes open dropdown
- Updated `.dropdown-item` hover styles (cyan highlight, slide-in padding)

**Services dropdown links:** Smart Water, MajiSmart, AI Agents, Custom Software, Enterprise ERP, Cloud Hosting  
**Platforms dropdown links:** MajiSmart, NB-IoT Metering, STS Prepaid Water, All Platforms

**Logo:** `.nav__logo` now has `border-radius: 8px`

---

### 3.6 Home page polish

| Feature | Implementation |
|---------|----------------|
| Ambient glows | `section--glow-left`, `section--glow-right`, `section--glow-bottom` on stats, services, platforms, AI sections |
| Section underlines | `.section-header h2::after` gradient line in `index.css` |
| Scroll indicator | Replaced "SCROLL" text with animated mouse + chevrons (`Home.css` keyframes) |
| Hero photo | `hero-bg.jpg` as subtle background on `.home-hero::before` |

---

### 3.7 Footer cleanup

- Removed **"Incorporated Nov 2018."** line
- Copyright only: `© {year} Caledonia Heights Limited. All rights reserved.`
- Footer typography uses `--font-body`, normal letter-spacing

---

## 4. New & modified files (manifest)

### New files

```
public/sitemap.xml
public/robots.txt
src/components/SEO.jsx
src/pages/AiSolutions.css          (Phase 3)
FINAL_POLISH_DOCUMENTATION.md      (this file)
```

### Heavily modified

```
index.html
public/site.webmanifest
src/main.jsx
src/index.css
src/data/images.js
src/data/projects.js
src/components/Card.css
src/components/PageHero.jsx
src/components/PageHero.css
src/components/Navbar.jsx
src/components/Navbar.css
src/components/Footer.jsx
src/components/Footer.css
src/pages/Home.jsx
src/pages/Home.css
src/pages/SmartWater.jsx
src/pages/MajiSmart.jsx
src/pages/AiSolutions.jsx
src/pages/Projects.jsx
src/pages/About.jsx
src/pages/Services.jsx
src/pages/Platforms.jsx
src/pages/Contact.jsx
src/pages/MajiSmart.css
src/pages/Projects.css
src/pages/SmartWater.css
src/pages/About.css
src/pages/Contact.css
package.json                       (+ react-helmet-async)
package-lock.json
```

---

## 5. Dependencies (current)

```json
{
  "react-helmet-async": "^3.0.0",
  "react": "^19.2.0",
  "react-router-dom": "^7.13.0",
  "framer-motion": "^12.40.0",
  "@tabler/icons-react": "^3.44.0",
  "react-countup": "^6.5.3",
  "react-intersection-observer": "^10.0.3"
}
```

---

## 6. Build & verification

```bash
npm install
npm run lint    # must pass
npm run build   # must pass → dist/
npm run dev     # local preview at http://localhost:5173
```

### Checklist (post-polish)

- [x] Browser tab shows Caledonia favicon (not Vite triangle)
- [x] `site.webmanifest` has company name and `#040E1C` theme
- [x] `sitemap.xml` lists all 9 routes
- [x] `robots.txt` points to sitemap
- [x] Space Mono removed site-wide
- [x] No "Shengda" in user-visible text
- [x] No "UDP" in user-visible Smart Water text
- [x] Tech stack pills removed from Smart Water page
- [x] Navbar dropdowns navigate and close after click
- [x] Home glow effects and scroll mouse indicator
- [x] Footer shows copyright only
- [x] Each page has unique browser tab title (via `<SEO />`)
- [x] Hero photos on all main pages
- [x] Dark cards readable on MajiSmart, AI Solutions, Projects, Smart Water
- [x] `npm run build` passes

---

## 7. Still outstanding (client action)

| Item | Location | Action needed |
|------|----------|---------------|
| **Open Graph image** | Referenced as `/assets/images/og-image.jpg` | Upload a 1200×630 social share image |
| **Formspree form ID** | `src/pages/Contact.jsx` → `FORMSPREE_ACTION` | Replace `PLACEHOLDER_ID` with real Formspree ID |
| **Legacy orphan pages** | `Solutions.jsx`, `Industries.jsx`, `WhyUs.jsx` | Safe to delete (not routed) |
| **Production deploy** | Hosting | Point domain to `dist/`, ensure `caledoniaheights.co.ke` canonical URLs match live site |

---

## 8. Architecture notes

### SEO layering

1. **`index.html`** — Default/fallback meta for crawlers and first paint
2. **`<SEO />` per page** — Overrides title/description/canonical on client navigation (React Router)
3. **`sitemap.xml` + `robots.txt`** — Search engine discovery

### Card styling hierarchy

1. Component-specific classes (`.feature-card`, `.ai-product-card`, `.project-card`, `.features-card`)
2. Shared `Card.css` dark tokens
3. Nuclear enforcement block at end of `index.css` (catches any remaining light card classes)

### Hero image layering (PageHero)

```
.page-hero
  ├── .page-hero__bgImage     (photo + gradient overlay, z-index 0)
  ├── HeroBackground          (animated blobs + grid, z-index 0)
  └── .page-hero__inner       (content, z-index 1)
```

---

## 9. Related documentation

| Document | Covers |
|----------|--------|
| `REBUILD_DOCUMENTATION.md` | Phases 1–2: initial rebuild + design overhaul |
| `CARD_VISIBILITY_FIX.md` | Original card fix prompt |
| `COMBINED_FINAL_PROMPT.md` | Original final polish prompt |
| `CODEBASE_DOCUMENTATION.md` | Pre-rebuild codebase snapshot (may be outdated) |

---

*Generated to reflect the state of the codebase after Phase 3 and Phase 4 polish — May 27, 2026.*
