# Caledonia Heights Website — Rebuild Documentation

This document describes **everything implemented** in the Vite + React rebuild, including the initial build (`CALEDONIA_HEIGHTS_CURSOR_PROMPT.md`) and the design overhaul (`CALEDONIA_HEIGHTS_FIX_PROMPT.md`).

**Last updated:** May 27, 2026 (post design overhaul)

---

## 1. Executive summary

The site was rebuilt from a **light corporate template** into a **vibrant dark “African Tech Powerhouse”** marketing site for Caledonia Heights Limited.

### Phase 1 — Initial rebuild
- New routes: Services, MajiSmart, Smart Water, AI Solutions, Projects (filtered)
- Shared components: PageHero, HeroBackground, AnimatedCounter, WhatsAppFloat
- 9 product photos integrated via `src/data/images.js`
- Navbar with dropdowns + mobile overlay; Footer with React Router links

### Phase 2 — Design overhaul & fixes
- **New color system** — higher contrast, multi-accent (cyan, green, orange, purple, coral, gold)
- **New typography** — Plus Jakarta Sans, Outfit, Space Mono (replaced Syne/DM Sans/JetBrains)
- **Visible cards** — solid `#0B1D35` backgrounds instead of invisible glass
- **About + Contact** — fully rebuilt to match dark design
- **MajiSmart steps** — proper 5-step cards with icons (no “Step” placeholders)
- **Branding** — BNS product names replaced with **Caldora** (see §3.3)
- **Performance** — React.lazy code-splitting, image lazy-loading, Vite build tuning

### Still to do (client-side)
- Replace Formspree placeholder ID in `Contact.jsx`
- SEO meta / Open Graph tags
- Favicon → company logo
- Optional: delete orphan legacy page files (`Solutions.jsx`, etc.)

---

## 2. Technology stack

| Layer | Choice | Version (approx.) |
|--------|--------|-------------------|
| Framework | React | 19.x |
| Build tool | Vite | 7.x |
| Routing | react-router-dom | 7.x |
| Code splitting | React.lazy + Suspense | built-in |
| Animations | framer-motion | 12.x |
| Scroll detection | react-intersection-observer | 10.x |
| Count-up stats | react-countup | 6.x |
| Icons | @tabler/icons-react | 3.x |
| Language | JavaScript (JSX), ESM | — |
| Styling | Plain CSS (no Tailwind) | — |

### NPM scripts

```bash
npm install      # Install dependencies
npm run dev      # Local dev server (usually http://localhost:5173)
npm run build    # Production build → dist/
npm run preview  # Preview production build locally
npm run lint     # ESLint
```

---

## 3. Design system

### 3.1 Design direction

- **Aesthetic:** Alive, vibrant, energetic — premium Nairobi tech company
- **Mood:** Deep navy base with **multi-color accents** (not a flat dark void)
- **Avoided:** Low-contrast invisible cards, Syne font, muddy muddy text, generic SaaS look

### 3.2 Color tokens (`src/index.css` → `:root`)

| Token | Value | Usage |
|--------|--------|--------|
| `--bg-deep` | `#040E1C` | Deepest page background |
| `--bg-dark` | `#07162A` | Section backgrounds |
| `--bg-card` | `#0B1D35` | Card backgrounds (visible) |
| `--bg-card-hover` | `#0E2440` | Card hover state |
| `--cyan` | `#00D4FF` | Primary tech accent |
| `--green` | `#00F090` | MajiSmart, CTAs, WhatsApp |
| `--orange` | `#FF7A00` | AI services accent |
| `--purple` | `#8B5CF6` | ERP / enterprise accent |
| `--coral` | `#FF4D6A` | DevOps / alerts accent |
| `--gold` | `#FFB800` | Premium highlights |
| `--text-white` | `#FFFFFF` | Headings |
| `--text-bright` | `#E8F4FF` | Body text (high contrast) |
| `--text-muted` | `#7FA8CC` | Secondary text |
| `--text-dim` | `#4A6B8A` | Labels, tertiary |
| `--border-card` | `rgba(255,255,255,0.08)` | Card borders |
| `--border-subtle` | `rgba(0,212,255,0.18)` | Hover / accent borders |

**Gradients:** `--grad-hero`, `--grad-cyan`, `--grad-green`, `--grad-multi`, `--grad-card`

**Glows:** `--glow-cyan`, `--glow-green`, `--glow-orange`, `--glow-purple`

Legacy aliases (`--color-primary`, `--color-bg`, etc.) remain for backward compatibility in some CSS files.

### 3.3 Product branding (Caldora)

User-visible product names on the site:

| Display name | Description |
|--------------|-------------|
| **Caldora STS Prepaid Water** | M-Pesa prepaid water metering platform |
| **Caldora NB-IoT Smart Metering** | Real-time NB-IoT monitoring platform |
| **MajiSmart** | Smart irrigation / AI water management |

**Exception:** “BNS Algotech Corporate Site” remains as the **portfolio link label** only (external URL `bnsalgotech.co.ke`).

### 3.4 Typography

Loaded in `index.html` from Google Fonts:

| Role | Font | CSS variable |
|------|------|----------------|
| Display / headings | **Plus Jakarta Sans** (400–800) | `--font-display` |
| Body | **Outfit** (300–700) | `--font-body` |
| Labels / stats / badges | **Space Mono** (400, 700) | `--font-mono` |

Typography scale is defined globally in `src/index.css` (`h1`–`h4`, `p`, `.text-muted`, `.mono`).

### 3.5 Layout tokens

| Token | Value |
|--------|--------|
| `--container-max` | `1300px` |
| `--container-pad` | `0 2rem` |
| `--section-y` | `6rem` |
| `--radius-sm` … `--radius-xl` | `8px` → `32px` |
| `--radius-pill` | `100px` |

### 3.6 Global utility classes

| Class | Purpose |
|--------|---------|
| `.container` | Centered max-width wrapper |
| `.section` + `.section--deep` / `--dark` / `--surface2` | Section padding + background |
| `.grid`, `.grid-2`, `.grid-3`, `.grid-4` | Responsive grids (stack ≤768px) |
| `.section-header` | Centered label + h2 + subtitle pattern |
| `.section-label` (+ `--green`, `--orange`, `--purple`) | Colored bar + ALL-CAPS label |
| `.btn-primary`, `.btn-outline`, `.btn-green`, `.btn--sm` | Button variants |
| `.card`, `.card-pad`, `.card-hover` | Visible cards with hover glow |
| `.card--cyan/green/orange/purple`, `.card--gradient` | Accent border variants |
| `.service-card`, `.service-icon-wrap`, `.service-badge` | Per-service colored cards |
| `.step-card`, `.step-number`, `.step-icon` | MajiSmart how-it-works steps |
| `.stat-card`, `.stat-number`, `.stat-label` | Home stats strip |
| `.pill`, `.pill-row`, `.divider` | Tags and separators |

### 3.7 Motion & accessibility

- **Framer Motion:** heroes, section fade-up on scroll
- **Hero background:** animated cyan/green/purple blobs + dot grid
- **Count-up:** Home stats via `AnimatedCounter`
- **`prefers-reduced-motion`:** reduces animations where defined

**Not implemented:** custom cursor dot on desktop.

---

## 4. Application architecture

### 4.1 Boot flow

```
index.html
  └── src/main.jsx          (ReactDOM.createRoot, StrictMode)
        └── src/App.jsx       (BrowserRouter + Suspense + lazy routes)
              └── RootLayout  (Navbar + <Outlet /> + Footer + WhatsAppFloat)
                    └── [Lazy-loaded page components]
```

### 4.2 Performance optimizations

**Code splitting (`App.jsx`):**
- All pages loaded via `React.lazy()` wrapped in `<Suspense>`
- Fallback: minimal dark placeholder div

**Images:**
- `loading="lazy"` + `decoding="async"` on below-the-fold images site-wide
- Hero mockups use `decoding="async"` only (eager load for LCP)

**Vite (`vite.config.js`):**
```js
build: {
  assetsInlineLimit: 4096,
  chunkSizeWarningLimit: 600,
}
```

### 4.3 File structure

```
caledonia-heights/
├── index.html
├── vite.config.js
├── package.json
├── eslint.config.js
├── CALEDONIA_HEIGHTS_CURSOR_PROMPT.md   # Original rebuild spec
├── CALEDONIA_HEIGHTS_FIX_PROMPT.md      # Design overhaul spec
├── REBUILD_DOCUMENTATION.md             # This file
├── public/assets/images/                # Static images
└── src/
    ├── main.jsx
    ├── App.jsx                # Lazy routes + Suspense
    ├── index.css              # Global design system ★
    ├── layouts/RootLayout.jsx
    ├── components/            # Shared UI
    ├── pages/                 # Route pages (+ legacy unused files)
    ├── data/                  # services.js, projects.js, images.js
    └── utils/animations.js
```

**Legacy files (not routed, safe to delete):**
- `src/pages/Solutions.jsx`, `Solutions.css`
- `src/pages/Industries.jsx`, `Industries.css`
- `src/pages/WhyUs.jsx`, `WhyUs.css`

---

## 5. Routing (live site map)

| URL | Component | Status |
|-----|-----------|--------|
| `/` | `Home.jsx` | ✅ Complete |
| `/about` | `About.jsx` | ✅ Rebuilt (timeline, values, credentials) |
| `/services` | `Services.jsx` | ✅ Complete (accent service cards) |
| `/platforms` | `Platforms.jsx` | ✅ Complete (Caldora branding) |
| `/majismart` | `MajiSmart.jsx` | ✅ Complete (step cards with icons) |
| `/smart-water` | `SmartWater.jsx` | ✅ Complete (tab galleries) |
| `/ai-solutions` | `AiSolutions.jsx` | ✅ Complete |
| `/projects` | `Projects.jsx` | ✅ Complete (filters + images) |
| `/contact` | `Contact.jsx` | ✅ Rebuilt (Formspree-ready) |

**Removed routes:** `/solutions`, `/industries`, `/why-us`

---

## 6. Shared components

### 6.1 `Navbar.jsx`
- Sticky glass header; blur + border after 80px scroll
- Dropdowns: Services, Platforms (hover on desktop)
- Mobile: full-screen overlay menu
- Brighter nav links (`--text-bright`), active underline with cyan gradient
- CTA: “Get in Touch” → `/contact`

### 6.2 `Footer.jsx`
- Brand block + 4 link columns (Company, Services, Platforms, Contact)
- `.footer-link` / `.footer-heading` classes for readable muted links
- Phone, email, address; © + “Incorporated Nov 2018”
- All internal links use React Router `<Link>`

### 6.3 `WhatsAppFloat.jsx`
- Fixed bottom-right; official WhatsApp green `#25D366`
- Pulse ring animation + “Chat with us” tooltip on hover
- Links to `https://wa.me/254708001000`

### 6.4 `PageHero.jsx`
- Reusable inner-page hero with `HeroBackground` + Framer Motion
- Supports external CTAs (`http`, `tel:`) for Contact page
- Props: `title`, `subtitle`, `badge`, `tagline`, `ctaText/Link`, `secondaryCta*`, `bgVariant`, `accent`

### 6.5 `HeroBackground.jsx`
- Rich `--grad-hero` base layer
- Three animated blobs: cyan, green, purple
- Dot grid overlay + vignette

### 6.6 `Section.jsx`
- Scroll-triggered fade-up (Framer Motion + `useInView`)
- Variants: `dark` → `--bg-deep`, `surface` → `--bg-dark`, `surface2` → `--bg-card`

### 6.7 `Button.jsx`
- Renders `<Link>`, `<a>`, or `<button>` (supports `type="submit"`)
- Variants: `primary`, `secondary`/`outline`, `green`

### 6.8 Other
- `Card.jsx` — wrapper with optional hover
- `AnimatedCounter.jsx` — count-up on viewport enter
- `ScrollToTop.jsx` — scroll to top on route change

---

## 7. Data layer (`src/data/`)

### 7.1 `images.js`
Central map for all product photos:

```js
smartMeters, stsMeter, dashboardSts, dashboardLandlord,
nbiotMeter, dashboardNbiot, nbiotInstallation,
majismartDashboard, farmIrrigation, logo
```

### 7.2 `services.js`
Six services with **per-service accent colors**:

| ID | Title | Accent | Link |
|----|-------|--------|------|
| smart-water | Smart Water Solutions | cyan | `/smart-water` |
| majismart | MajiSmart Irrigation | green | `/majismart` |
| ai-solutions | AI Business Agents | orange | `/ai-solutions` |
| custom-software | Custom Software | purple | `/services` |
| erp | Enterprise ERP Systems | gold | `/services` |
| hosting | Cloud Hosting & DevOps | coral | `/services` |

Each item: `accent`, `accentGlow`, `badge`, `description`, `link`.

### 7.3 `projects.js`
Portfolio with category filters: **All | Smart Water | AI & Software | Web & ERP | Agriculture**

Key entries use Caldora naming and your product photos where available.

---

## 8. Page-by-page breakdown

### 8.1 Home (`/`)
- Hero with mockup stack (NB-IoT, STS, MajiSmart dashboards)
- Animated stats strip (8+, 50+, 100%, 24/7)
- 6 **accent-colored service cards** (link to service pages)
- 3 flagship platform cards: MajiSmart, **Caldora NB-IoT**, **Caldora STS Prepaid**
- Farm flagship banner (`farm-irrigation.jpg`)
- AI teaser, smart meters section, final CTA + WhatsApp

### 8.2 Services (`/services`)
- PageHero + 6 accent service cards
- Custom solution CTA card

### 8.3 Platforms (`/platforms`)
- MajiSmart, **Caldora STS Prepaid Water**, **Caldora NB-IoT Smart Metering**
- Innovation cards: farm irrigation + field installation photos

### 8.4 MajiSmart (`/majismart`)
- Product hero (green accent)
- Dashboard + farm photo visual
- **5 step cards** with Tabler icons (NB-IoT Meters → Reports)
- 6 feature cards with real descriptions
- 100-acre case study banner + stat cards
- Audience list + demo/WhatsApp CTAs

### 8.5 Smart Water (`/smart-water`)
- Tab toggle: STS Prepaid | NB-IoT Real-Time
- 3-image gallery per tab (lazy-loaded)
- Feature bullets, tech pills, “why choose us” card

### 8.6 AI Solutions (`/ai-solutions`)
- 3 AI products, 3 service tiers, 4-step process, CTAs

### 8.7 Projects (`/projects`)
- Category filter tabs
- Project cards with images / gradient placeholders
- Hero CTAs: “Start a project” + **“Discuss your project →”**

### 8.8 About (`/about`) — rebuilt
- PageHero: “8 Years of Building Kenya's Digital Backbone”
- Mission + 3 value cards (Innovation, Reliability, Partnership)
- **Vertical timeline** 2018–2026 with colored dots
- Company registration card (PVT-MKUYDJM)
- “We're hiring” card + contact CTA

### 8.9 Contact (`/contact`) — rebuilt
- Two-column layout: details + form
- Phone **0708 001 000**, WhatsApp, email, full Westlands address, office hours
- WhatsApp quick-reply banner above form
- Form fields: name, email, phone, service dropdown, message
- **Formspree** action (placeholder — client must add real ID):

```js
const FORMSPREE_ACTION = 'https://formspree.io/f/PLACEHOLDER_ID';
```

---

## 9. Image inventory

### 9.1 Product photos (integrated)

| File | Used on |
|------|---------|
| `smart-meters.jpg` | Home smart water section |
| `dashboard-nbiot.jpg` | Home hero, Platforms, Smart Water, Projects |
| `dashboard-sts.png` | Home hero, Platforms, Smart Water, Projects |
| `sts-meter.jpg` | Platforms, Smart Water STS tab |
| `dashboard-landlord.jpg` | Smart Water STS tab |
| `nbiot-meter.jpg` | Platforms, Smart Water NB-IoT tab |
| `nbiot-installation.jpg` | Platforms, Smart Water NB-IoT tab |
| `majismart-dashboard.jpg` | Home hero, Platforms, MajiSmart |
| `farm-irrigation.jpg` | Home banner, Platforms, MajiSmart, Projects |

### 9.2 Legacy portfolio screenshots
Still used for web client projects: `project-legend.jpg`, `project-bnsalgotech.jpg`, `ducieladventures.com.png`, etc.

Unused legacy assets: `hero-bg.jpg`, `about-mission.jpg`, `hosting-datacenter.jpg`

---

## 10. Change log (what was done when)

### Initial rebuild
- Vite + React 19 site structure
- New pages: Services, MajiSmart, Smart Water, AI Solutions
- Navbar/Footer/WhatsAppFloat/PageHero/HeroBackground
- Home page with stats, services, platforms, farm banner
- Projects with category filters
- 9 product photos wired via `images.js`

### Design overhaul (fix prompt)
| Change | Files affected |
|--------|----------------|
| New vibrant color system | `src/index.css` |
| New fonts (Plus Jakarta Sans, Outfit, Space Mono) | `index.html`, `src/index.css` |
| Visible card system + service/step/stat cards | `src/index.css` |
| Hero background (cyan/green/purple blobs) | `HeroBackground.jsx/css`, `PageHero.css` |
| Navbar link visibility + scroll state | `Navbar.css` |
| Footer readability | `Footer.jsx/css` |
| Vivid WhatsApp float + tooltip | `WhatsAppFloat.jsx/css` |
| MajiSmart step cards with icons | `MajiSmart.jsx/css` |
| Service accent colors | `services.js`, `Home.jsx`, `Services.jsx` |
| Caldora branding (BNS removed) | `Home.jsx`, `Platforms.jsx`, `projects.js` |
| About page full rebuild | `About.jsx/css` |
| Contact page full rebuild | `Contact.jsx/css` |
| React.lazy code splitting | `App.jsx` |
| Image lazy-loading | All page `<img>` tags |
| Vite build tuning | `vite.config.js` |
| Projects hero second button fix | `Projects.jsx` |
| Button submit + outline variant | `Button.jsx` |
| PageHero external link support | `PageHero.jsx` |

---

## 11. What remains incomplete

| Item | Status | Notes |
|------|--------|-------|
| Formspree form ID | ⚠️ Placeholder | Replace in `Contact.jsx` |
| SEO meta / Open Graph | ❌ | Only `<title>` set in `index.html` |
| Favicon → logo.png | ❌ | Still `vite.svg` |
| `platforms.js` data file | ❌ | Content inline in `Platforms.jsx` |
| Custom cursor (desktop) | ❌ | Skipped per scope |
| Delete orphan legacy pages | ❌ | Solutions, Industries, WhyUs |
| Home horizontal project scroll | ❌ | Links to `/projects` instead |
| WebP image conversion | ❌ | JPG/PNG only; lazy-load added |
| `npm audit fix` | ❌ | Dev dependency vulns reported |

---

## 12. How to change common things

| Goal | Where to edit |
|------|----------------|
| Add/change a route | `src/App.jsx` |
| Global colors, buttons, cards | `src/index.css` |
| Nav links / dropdowns | `src/components/Navbar.jsx` |
| Footer links / contact info | `src/components/Footer.jsx` |
| Service list + accent colors | `src/data/services.js` |
| Portfolio projects | `src/data/projects.js` |
| Product photo paths | `src/data/images.js` |
| Caldora / product naming | Home, Platforms, `projects.js` |
| Contact details / Formspree | `src/pages/Contact.jsx` |
| Company timeline / credentials | `src/pages/About.jsx` |
| Home layout | `src/pages/Home.jsx`, `Home.css` |
| Page title | `index.html` |

---

## 13. Local development & deploy

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
npm run preview  # preview production build
```

**Deploy:** upload `dist/` to your host (Netlify, Vercel, cPanel, etc.) and point `caledoniaheights.co.ke` with HTTPS.

**Review checklist:**
1. Home — contrast, service card colors, platform names (Caldora)
2. MajiSmart — 5 step cards with icons
3. About — timeline, registration card
4. Contact — form fields, WhatsApp banner, phone/address
5. Mobile — nav menu, grids, image galleries
6. Replace Formspree ID and test form submission

---

## 14. Dependencies

```json
"dependencies": {
  "framer-motion": "^12.x",
  "react-intersection-observer": "^10.x",
  "@tabler/icons-react": "^3.x",
  "react-countup": "^6.x",
  "react": "^19.x",
  "react-dom": "^19.x",
  "react-router-dom": "^7.x"
},
"devDependencies": {
  "eslint-plugin-react": "^7.x",
  "vite": "^7.x",
  "@vitejs/plugin-react": "^5.x"
}
```

---

*This document is intended for handoff to stakeholders, Claude, or future developers continuing work on the Caledonia Heights website.*
