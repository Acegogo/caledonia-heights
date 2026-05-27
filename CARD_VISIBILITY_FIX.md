# CARD VISIBILITY FIX — TARGETED PROMPT
## For Cursor — Fix white/invisible cards across the site

---

## THE PROBLEM

Several cards across the site have **white or near-white backgrounds** causing text to be completely invisible. This happens because some card CSS classes are inheriting light-theme styles or have `background: white` / `background: #fff` / `background: rgba(255,255,255,0.9)` or similar applied either in component-level CSS files or inline.

**Affected locations (fix ALL of these):**

1. `MajiSmart.jsx` / `MajiSmart.css` — "Key Features" section bottom row cards
2. `Projects.jsx` / `Projects.css` — project cards with white backgrounds
3. `AiSolutions.jsx` / `AiSolutions.css` — "Three core AI products" cards AND "How we package AI services" tier cards
4. `SmartWater.jsx` / `SmartWater.css` — feature/specs card on the left side

---

## THE FIX

### STEP 1 — Global search and destroy

Do a **Find All** across the entire `src/` directory for these patterns and replace every instance:

| Find | Replace with |
|------|-------------|
| `background: #fff` | `background: var(--bg-card)` |
| `background: #ffffff` | `background: var(--bg-card)` |
| `background: white` | `background: var(--bg-card)` |
| `background: rgba(255, 255, 255, 0.9)` | `background: var(--bg-card)` |
| `background: rgba(255, 255, 255, 0.95)` | `background: var(--bg-card)` |
| `background: rgba(255, 255, 255, 1)` | `background: var(--bg-card)` |
| `color: #000` (on cards) | `color: var(--text-white)` |
| `color: #111` (on cards) | `color: var(--text-white)` |
| `color: #222` (on cards) | `color: var(--text-white)` |
| `color: #333` (on cards) | `color: var(--text-bright)` |
| `color: #444` (on cards) | `color: var(--text-bright)` |
| `color: #555` (on cards) | `color: var(--text-muted)` |
| `color: #666` (on cards) | `color: var(--text-muted)` |
| `color: black` (on cards) | `color: var(--text-white)` |

---

### STEP 2 — Fix each affected file explicitly

#### A) `MajiSmart.css` — Key Features cards

Find any rule targeting the key features card container and replace:

```css
/* FIND anything like this: */
.feature-card, .key-feature-card, .features-grid .card {
  background: white; /* or #fff or rgba(255,255,255,...) */
  color: #333;
}

/* REPLACE WITH: */
.feature-card, .key-feature-card, .features-grid .card {
  background: var(--bg-card);
  border: 1px solid var(--border-card);
  border-radius: var(--radius-md);
  padding: 1.75rem;
}
.feature-card h3, .feature-card h4,
.key-feature-card h3, .key-feature-card h4 {
  color: var(--text-white);
  font-family: var(--font-display);
  font-weight: 600;
  margin-bottom: 0.625rem;
}
.feature-card p, .key-feature-card p {
  color: var(--text-bright);
  font-size: 0.95rem;
  line-height: 1.65;
}
```

Also make sure the feature cards that currently show ONLY description text with no title get a title added in `MajiSmart.jsx`. The 6 key features should be:

```jsx
const features = [
  {
    icon: <IconEye size={28} color="var(--cyan)" />,
    title: "Real-Time Monitoring",
    desc: "Continuous visibility across pumps, blocks, and distribution lines."
  },
  {
    icon: <IconDroplets size={28} color="var(--green)" />,
    title: "Smart Scheduling",
    desc: "Combine field sensors with irrigation schedules for smarter watering."
  },
  {
    icon: <IconAdjustments size={28} color="var(--orange)" />,
    title: "Remote Valve Control",
    desc: "Remote and scheduled control to reduce waste and labour costs."
  },
  {
    icon: <IconAlertTriangle size={28} color="var(--coral)" />,
    title: "Anomaly Detection",
    desc: "Surface leaks, inefficiencies, and demand spikes before they escalate."
  },
  {
    icon: <IconBell size={28} color="var(--purple)" />,
    title: "Instant Alerts",
    desc: "Instant alerts to operators when thresholds are breached."
  },
  {
    icon: <IconMap size={28} color="var(--gold)" />,
    title: "Multi-Scheme Oversight",
    desc: "Centralised oversight for schemes, counties, and national programs."
  }
];
```

Render each as:
```jsx
<div className="feature-card">
  <div className="feature-icon">{feature.icon}</div>
  <h4>{feature.title}</h4>
  <p>{feature.desc}</p>
</div>
```

---

#### B) `AiSolutions.css` — AI product cards and pricing tier cards

```css
/* Fix the three core product cards */
.ai-product-card, .ai-card, .product-card {
  background: var(--bg-card) !important;
  border: 1px solid var(--border-card);
  border-radius: var(--radius-md);
  padding: 2rem;
  color: var(--text-bright) !important;
}
.ai-product-card h3, .ai-product-card h4,
.ai-card h3, .ai-card h4,
.product-card h3, .product-card h4 {
  color: var(--text-white) !important;
}
.ai-product-card p, .ai-product-card li,
.ai-card p, .ai-card li,
.product-card p, .product-card li {
  color: var(--text-bright) !important;
}
.ai-product-card li::marker,
.ai-card li::marker {
  color: var(--cyan);
}

/* Fix the pricing/tier cards */
.tier-card, .pricing-card, .package-card {
  background: var(--bg-card) !important;
  border: 1px solid var(--border-card);
  border-radius: var(--radius-md);
  padding: 2rem;
}
.tier-card h3, .pricing-card h3, .package-card h3 {
  color: var(--text-white) !important;
}
.tier-card p, .tier-card li,
.pricing-card p, .pricing-card li,
.package-card p, .package-card li {
  color: var(--text-bright) !important;
}
/* Tier labels */
.tier-label, .tier-name {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--cyan);
  margin-bottom: 0.5rem;
}
```

---

#### C) `Projects.css` — Project cards

```css
.project-card, .portfolio-card {
  background: var(--bg-card) !important;
  border: 1px solid var(--border-card);
  border-radius: var(--radius-md);
  overflow: hidden;
  transition: transform var(--t-base), border-color var(--t-base), box-shadow var(--t-base);
}
.project-card:hover, .portfolio-card:hover {
  transform: translateY(-5px);
  border-color: var(--border-subtle);
  box-shadow: var(--glow-cyan);
}
/* Card body below the image */
.project-card-body, .card-content, .project-info {
  background: var(--bg-card) !important;
  padding: 1.5rem;
}
.project-card h3, .project-card h4,
.portfolio-card h3, .portfolio-card h4 {
  color: var(--text-white) !important;
  font-family: var(--font-display);
  font-weight: 600;
}
.project-card p, .portfolio-card p {
  color: var(--text-bright) !important;
  font-size: 0.9rem;
  line-height: 1.6;
}
/* Category label above title */
.project-category, .card-category {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--cyan);
  margin-bottom: 0.5rem;
  display: block;
}
/* Tech pills/tags */
.tech-pill, .tag-pill, .pill {
  background: rgba(0, 212, 255, 0.1) !important;
  color: var(--cyan) !important;
  border: 1px solid rgba(0, 212, 255, 0.25) !important;
  border-radius: var(--radius-pill);
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.06em;
  padding: 0.2rem 0.625rem;
}
```

---

#### D) `SmartWater.css` — Feature/specs card

```css
.features-card, .specs-card, .feature-list-card {
  background: var(--bg-card) !important;
  border: 1px solid var(--border-card);
  border-radius: var(--radius-md);
  padding: 2rem;
}
.features-card h3, .specs-card h3, .feature-list-card h3 {
  color: var(--text-white) !important;
  margin-bottom: 1.25rem;
}
.features-card li, .specs-card li, .feature-list-card li {
  color: var(--text-bright) !important;
  font-size: 0.95rem;
  padding: 0.375rem 0;
  border-bottom: 1px solid var(--border-card);
  display: flex;
  align-items: flex-start;
  gap: 0.625rem;
}
.features-card li:last-child,
.specs-card li:last-child {
  border-bottom: none;
}
/* Bullet dot */
.features-card li::before,
.specs-card li::before {
  content: '→';
  color: var(--cyan);
  font-size: 0.8rem;
  flex-shrink: 0;
  margin-top: 0.1rem;
}
```

---

### STEP 3 — Nuclear option (add to END of `src/index.css`)

If the above targeted fixes don't catch everything, add this at the very bottom of `index.css` to override any remaining white card issues:

```css
/* ============================================
   DARK THEME ENFORCEMENT — added at end of file
   Overrides any white/light card remnants
   ============================================ */

/* Any card-like element that ended up white */
[class*="card"]:not(.nav-cta):not(.btn) {
  background-color: var(--bg-card);
  color: var(--text-bright);
}

/* Any heading inside any card */
[class*="card"] h1,
[class*="card"] h2,
[class*="card"] h3,
[class*="card"] h4,
[class*="card"] h5 {
  color: var(--text-white);
}

/* Any paragraph/list inside any card */
[class*="card"] p,
[class*="card"] li,
[class*="card"] span:not(.badge):not(.pill):not(.tag) {
  color: var(--text-bright);
}

/* Any grid/list item that might be white */
[class*="feature"] {
  background-color: var(--bg-card);
  color: var(--text-bright);
}
[class*="feature"] h3,
[class*="feature"] h4 {
  color: var(--text-white);
}
[class*="feature"] p {
  color: var(--text-bright);
}

/* Tier/pricing blocks */
[class*="tier"],
[class*="package"],
[class*="pricing"] {
  background-color: var(--bg-card) !important;
  color: var(--text-bright) !important;
}
[class*="tier"] *,
[class*="package"] *,
[class*="pricing"] * {
  color: var(--text-bright);
}
[class*="tier"] h2,
[class*="tier"] h3,
[class*="tier"] h4,
[class*="package"] h2,
[class*="package"] h3,
[class*="package"] h4 {
  color: var(--text-white) !important;
}
```

---

### STEP 4 — Verify these CSS variable values exist in `index.css` `:root`

Make sure these are defined (add if missing):

```css
:root {
  --bg-card:      #0B1D35;
  --bg-card-hover:#0E2440;
  --border-card:  rgba(255, 255, 255, 0.08);
  --border-subtle: rgba(0, 212, 255, 0.18);
  --text-white:   #FFFFFF;
  --text-bright:  #E8F4FF;
  --text-muted:   #7FA8CC;
  --glow-cyan:    0 0 30px rgba(0, 212, 255, 0.35);
}
```

---

### STEP 5 — Final check

After applying all fixes, open every page and confirm:

- [ ] MajiSmart `/majismart` → Key Features section: all 6 cards show icon + title + description on dark background
- [ ] AI Solutions `/ai-solutions` → Three core product cards: dark background, white headings, bright body text
- [ ] AI Solutions `/ai-solutions` → Pricing tiers: dark background, tier labels in cyan mono, descriptions visible
- [ ] Projects `/projects` → All project cards: dark background, white titles, bright descriptions, colored category labels
- [ ] Smart Water `/smart-water` → Feature/specs card: dark background, white heading, bright list items with cyan arrows
- [ ] No white boxes anywhere on any page
- [ ] `npm run build` passes without errors

---

**Root cause summary:** Some component CSS files were written with light-theme card styles (`background: white`, `color: #333`) that weren't overridden by the global dark theme. The nuclear option in Step 3 catches any remaining instances using attribute selectors on class name patterns.
