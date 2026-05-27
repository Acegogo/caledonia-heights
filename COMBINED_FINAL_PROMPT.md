# CALEDONIA HEIGHTS — COMBINED FINAL PROMPT
## For Cursor — Polish fixes + Favicon completion in one pass

---

## CURRENT STATE (read before starting)

- `index.html` still references `/vite.svg` as the favicon — needs replacing
- Favicon files already exist in `public/`: `favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png`, `android-chrome-192x192.png`, `android-chrome-512x512.png`, `site.webmanifest`
- `site.webmanifest` exists in `public/` but needs its content updated
- `vite.svg` is in `public/` and is now unused — can be left or deleted
- Google Fonts link still loads `Space+Mono` — needs removing
- `index.html` has no SEO meta tags yet, no structured data, no canonical

Start with `index.html` first since it touches fonts, favicon, and SEO all at once.

---

## §1 — REWRITE `index.html` COMPLETELY

Replace the entire contents of `index.html` with exactly this:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- ═══ FAVICON ═══ -->
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <meta name="theme-color" content="#040E1C" />

    <!-- ═══ PRIMARY SEO ═══ -->
    <title>Caledonia Heights Limited | Technology Partner in Kenya</title>
    <meta name="description" content="Caledonia Heights Limited — Kenya's premier technology partner. Smart water metering, AI business agents, MajiSmart irrigation, custom software, and ERP systems. Est. 2018, Nairobi." />
    <meta name="keywords" content="smart water metering Kenya, NB-IoT water meter Nairobi, prepaid water M-Pesa, AI chatbot Kenya, custom software Nairobi, ERP system Kenya, smart irrigation Kenya, Caledonia Heights" />
    <meta name="author" content="Caledonia Heights Limited" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://caledoniaheights.co.ke" />
    <meta name="geo.region" content="KE-30" />
    <meta name="geo.placename" content="Nairobi" />

    <!-- ═══ OPEN GRAPH ═══ -->
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Caledonia Heights Limited" />
    <meta property="og:title" content="Caledonia Heights Limited | Technology Partner in Kenya" />
    <meta property="og:description" content="Smart water metering, AI business agents, MajiSmart irrigation, custom software, and ERP systems. Building Kenya's digital infrastructure since 2018." />
    <meta property="og:url" content="https://caledoniaheights.co.ke" />
    <meta property="og:image" content="https://caledoniaheights.co.ke/assets/images/og-image.jpg" />

    <!-- ═══ TWITTER CARD ═══ -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Caledonia Heights Limited | Technology Partner in Kenya" />
    <meta name="twitter:description" content="Smart water metering, AI business agents, MajiSmart irrigation, custom software, and ERP systems." />
    <meta name="twitter:image" content="https://caledoniaheights.co.ke/assets/images/og-image.jpg" />

    <!-- ═══ STRUCTURED DATA ═══ -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Caledonia Heights Limited",
      "url": "https://caledoniaheights.co.ke",
      "logo": "https://caledoniaheights.co.ke/assets/images/logo.png",
      "description": "Kenya's premier technology partner — smart water metering, AI business agents, MajiSmart irrigation, custom software, and ERP systems.",
      "foundingDate": "2018",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Krishna Centre, Woodvale Grove",
        "addressLocality": "Westlands, Nairobi",
        "addressCountry": "KE"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+254708001000",
        "contactType": "customer service",
        "availableLanguage": "English"
      }
    }
    </script>

    <!-- ═══ FONTS (Space Mono removed — only these two) ═══ -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Outfit:wght@300;400;500;600;700&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

---

## §2 — UPDATE `public/site.webmanifest`

Replace the entire contents of `public/site.webmanifest` with:

```json
{
  "name": "Caledonia Heights Limited",
  "short_name": "Caledonia",
  "description": "Engineering Intelligent Systems for Tomorrow",
  "icons": [
    {
      "src": "/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "#040E1C",
  "background_color": "#040E1C",
  "display": "standalone",
  "start_url": "/"
}
```

---

## §3 — CREATE `public/sitemap.xml`

Create a new file at `public/sitemap.xml` with this content:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://caledoniaheights.co.ke/</loc><priority>1.0</priority></url>
  <url><loc>https://caledoniaheights.co.ke/about</loc><priority>0.8</priority></url>
  <url><loc>https://caledoniaheights.co.ke/services</loc><priority>0.9</priority></url>
  <url><loc>https://caledoniaheights.co.ke/platforms</loc><priority>0.9</priority></url>
  <url><loc>https://caledoniaheights.co.ke/majismart</loc><priority>0.9</priority></url>
  <url><loc>https://caledoniaheights.co.ke/smart-water</loc><priority>0.9</priority></url>
  <url><loc>https://caledoniaheights.co.ke/ai-solutions</loc><priority>0.9</priority></url>
  <url><loc>https://caledoniaheights.co.ke/projects</loc><priority>0.8</priority></url>
  <url><loc>https://caledoniaheights.co.ke/contact</loc><priority>0.8</priority></url>
</urlset>
```

---

## §4 — CREATE `public/robots.txt`

Create a new file at `public/robots.txt` with this content:

```
User-agent: *
Allow: /
Sitemap: https://caledoniaheights.co.ke/sitemap.xml
```

---

## §5 — REMOVE SPACE MONO FONT FROM CSS

The Google Fonts link in `index.html` is now fixed (§1 above). Now clean up the CSS references:

**A) In `src/index.css` — update the variable:**
```css
/* FIND: */
--font-mono: 'Space Mono', monospace;

/* REPLACE WITH: */
--font-mono: 'Outfit', sans-serif;
```

**B) Global find and replace across ALL files in `src/`:**
```
Find:    font-family: var(--font-mono)
Replace: font-family: var(--font-body)

Find:    font-family: 'Space Mono'
Replace: font-family: var(--font-body)

Find:    'Space Mono', monospace
Replace: var(--font-body)
```

**C) For any element that used the mono font (badges, labels, stat numbers, step numbers, category tags, tech pills) — update their CSS rules:**
- Use `font-family: var(--font-body)` with `font-weight: 600`
- Set `letter-spacing: 0.04em` maximum — no wide robotic spacing
- Remove `text-transform: uppercase` from category/section labels — use Title Case in the text itself

---

## §6 — CONTENT FIX: SmartWater.jsx

**A) Replace all Shengda references in visible text:**
```
Find:    "Shengda token"      → Replace: "Caldora token"
Find:    "Shengda meter API"  → Delete entirely
Find:    "Shengda"            → Replace: "Caldora"
(search all JSX — not in code comments, only user-visible strings)
```

**B) Remove ALL tech stack pill/badge rows from SmartWater.jsx.**
Delete the entire JSX block that renders pills showing: Laravel, PHP, Next.js, Supabase, Node.js, UDP server, Safaricom Daraja API, Shengda meter API. Clients should not see the internal tech stack.

**C) Change the NB-IoT flow description:**
```
Find:    "Ultrasonic meters → NB-IoT/4G → UDP ingestion server → database → dashboards"
Replace: "Smart meters → cellular network → ingestion server → database → dashboards"
```

Replace any other instance of "UDP" in user-visible text with "our ingestion" or remove it.

---

## §7 — NAVBAR DROPDOWN FIX

The dropdown items currently show but clicking does nothing. Fix `Navbar.jsx`:

**A) Replace all non-navigable dropdown items with proper `<Link>` components:**

```jsx
// Services dropdown items:
<Link to="/smart-water" className="dropdown-item" onClick={closeDropdown}>Smart Water Metering</Link>
<Link to="/majismart" className="dropdown-item" onClick={closeDropdown}>MajiSmart Irrigation</Link>
<Link to="/ai-solutions" className="dropdown-item" onClick={closeDropdown}>AI Business Agents</Link>
<Link to="/services" className="dropdown-item" onClick={closeDropdown}>Custom Software</Link>
<Link to="/services" className="dropdown-item" onClick={closeDropdown}>Enterprise ERP</Link>
<Link to="/services" className="dropdown-item" onClick={closeDropdown}>Cloud Hosting</Link>

// Platforms dropdown items:
<Link to="/majismart" className="dropdown-item" onClick={closeDropdown}>MajiSmart</Link>
<Link to="/smart-water" className="dropdown-item" onClick={closeDropdown}>NB-IoT Metering</Link>
<Link to="/smart-water" className="dropdown-item" onClick={closeDropdown}>STS Prepaid Water</Link>
<Link to="/platforms" className="dropdown-item" onClick={closeDropdown}>All Platforms</Link>
```

**B) Add the `closeDropdown` helper function:**
```jsx
const closeDropdown = () => {
  setActiveDropdown(null);
  setMenuOpen(false);
};
```

**C) Close dropdowns automatically on route change:**
```jsx
import { useLocation } from 'react-router-dom';
const location = useLocation();
useEffect(() => {
  setActiveDropdown(null);
  setMenuOpen(false);
}, [location]);
```

**D) Update dropdown item CSS in `Navbar.css`:**
```css
.dropdown-item {
  display: block;
  padding: 0.6rem 1.25rem;
  color: var(--text-bright);
  text-decoration: none;
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 500;
  border-radius: var(--radius-sm);
  transition: background var(--t-fast), color var(--t-fast), padding-left var(--t-fast);
  cursor: pointer;
}
.dropdown-item:hover {
  background: rgba(0, 212, 255, 0.1);
  color: var(--cyan);
  padding-left: 1.5rem;
}
```

---

## §8 — BACKGROUND VIBRANCY: GLOW EFFECTS

**A) Add these glow utility classes to `src/index.css`:**

```css
/* ── Ambient section glows ── */
.section--glow-left {
  position: relative;
  overflow: hidden;
}
.section--glow-left::before {
  content: '';
  position: absolute;
  left: -200px;
  top: 50%;
  transform: translateY(-50%);
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%);
  pointer-events: none;
  z-index: 0;
}

.section--glow-right {
  position: relative;
  overflow: hidden;
}
.section--glow-right::after {
  content: '';
  position: absolute;
  right: -200px;
  top: 50%;
  transform: translateY(-50%);
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(0,240,144,0.07) 0%, transparent 70%);
  pointer-events: none;
  z-index: 0;
}

.section--glow-bottom {
  position: relative;
  overflow: hidden;
}
.section--glow-bottom::after {
  content: '';
  position: absolute;
  bottom: -100px;
  left: 50%;
  transform: translateX(-50%);
  width: 800px;
  height: 300px;
  background: radial-gradient(ellipse, rgba(139,92,246,0.1) 0%, transparent 70%);
  pointer-events: none;
  z-index: 0;
}

/* ── Section surface borders ── */
.section--surface {
  border-top: 1px solid rgba(0, 212, 255, 0.06);
  border-bottom: 1px solid rgba(0, 212, 255, 0.06);
}

/* ── Gradient underline on section headings ── */
.section-header h2::after {
  content: '';
  display: block;
  width: 60px;
  height: 3px;
  background: linear-gradient(135deg, var(--cyan), var(--green));
  border-radius: 2px;
  margin: 1rem auto 0;
}
.section-header--left h2::after {
  margin: 1rem 0 0;
}
```

**B) In `Home.jsx`, add these classes to the existing section elements:**
- Stats strip section → add `section--glow-left`
- Services grid section → add `section--glow-right`
- AI teaser section → add `section--glow-bottom`
- Platforms section → add `section--glow-left`

---

## §9 — LOGO: ROUNDED CORNERS IN NAVBAR

In `Navbar.css`, update the logo wrapper and image:

```css
.nav-logo-wrap {
  background: white;
  border-radius: 10px;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  overflow: hidden;
}
.nav-logo {
  height: 44px;
  width: auto;
  display: block;
  border-radius: 8px;
}
```

If the logo PNG already has a transparent background (no white box needed around it), skip the wrapper styles and only add `border-radius: 8px` to `.nav-logo`.

---

## §10 — REPLACE "SCROLL" WITH ANIMATED INDICATOR

In `Home.jsx`, find and delete the element that renders the text "SCROLL" and replace with:

```jsx
<div className="scroll-indicator">
  <div className="scroll-mouse">
    <div className="scroll-wheel"></div>
  </div>
  <div className="scroll-arrows">
    <span></span>
    <span></span>
    <span></span>
  </div>
</div>
```

Add to `Home.css`:
```css
.scroll-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  opacity: 0.6;
  animation: scrollBob 2s ease-in-out infinite;
}
.scroll-mouse {
  width: 24px;
  height: 38px;
  border: 2px solid var(--cyan);
  border-radius: 12px;
  display: flex;
  justify-content: center;
  padding-top: 6px;
}
.scroll-wheel {
  width: 3px;
  height: 8px;
  background: var(--cyan);
  border-radius: 2px;
  animation: scrollWheel 1.5s ease-in-out infinite;
}
.scroll-arrows {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}
.scroll-arrows span {
  display: block;
  width: 10px;
  height: 10px;
  border-right: 2px solid var(--cyan);
  border-bottom: 2px solid var(--cyan);
  transform: rotate(45deg);
  opacity: 0;
  animation: scrollArrow 1.5s ease-in-out infinite;
}
.scroll-arrows span:nth-child(1) { animation-delay: 0s; }
.scroll-arrows span:nth-child(2) { animation-delay: 0.2s; }
.scroll-arrows span:nth-child(3) { animation-delay: 0.4s; }

@keyframes scrollWheel {
  0%   { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(10px); opacity: 0; }
}
@keyframes scrollArrow {
  0%   { opacity: 0; }
  50%  { opacity: 0.8; }
  100% { opacity: 0; }
}
@keyframes scrollBob {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(6px); }
}
```

---

## §11 — FOOTER CLEANUP

**A) In `Footer.jsx` — delete the element rendering "Incorporated Nov 2018." entirely.**

Replace the footer copyright line with only:
```jsx
<p>© {new Date().getFullYear()} Caledonia Heights Limited. All rights reserved.</p>
```

**B) Update `Footer.css` for warmer typography:**
```css
.footer-bottom p {
  color: var(--text-muted);
  font-family: var(--font-body);
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: 0;
}
.footer p,
.footer li,
.footer-link {
  font-family: var(--font-body);
  font-weight: 400;
  letter-spacing: 0;
}
```

---

## §12 — PER-PAGE SEO WITH react-helmet-async

**A) Install the package:**
```bash
npm install react-helmet-async
```

**B) Update `src/main.jsx` — wrap the app:**
```jsx
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
```

**C) Create `src/components/SEO.jsx`:**
```jsx
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, keywords, canonical, ogImage }) {
  const siteName = 'Caledonia Heights Limited';
  const siteUrl = 'https://caledoniaheights.co.ke';
  const defaultDesc = "Caledonia Heights Limited — Kenya's premier technology partner. Smart water metering, AI business agents, MajiSmart irrigation, custom software, and ERP systems. Est. 2018, Nairobi.";
  const defaultImg = `${siteUrl}/assets/images/og-image.jpg`;

  return (
    <Helmet>
      <title>{title ? `${title} | ${siteName}` : siteName}</title>
      <meta name="description" content={description || defaultDesc} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical || siteUrl} />
      <meta property="og:title" content={title ? `${title} | ${siteName}` : siteName} />
      <meta property="og:description" content={description || defaultDesc} />
      <meta property="og:url" content={canonical || siteUrl} />
      <meta property="og:image" content={ogImage || defaultImg} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title ? `${title} | ${siteName}` : siteName} />
      <meta name="twitter:description" content={description || defaultDesc} />
      <meta name="twitter:image" content={ogImage || defaultImg} />
    </Helmet>
  );
}
```

**D) Add `<SEO />` as the first element inside the return of every page file. Import it at the top of each file: `import SEO from '../components/SEO';`**

```jsx
// Home.jsx
<SEO
  title="Your Long-Term Technology Partner in Kenya"
  description="Caledonia Heights builds smart water metering systems, AI business agents, MajiSmart irrigation platforms, custom software, and ERP systems for Kenya's enterprises and utilities."
  keywords="smart water metering Kenya, NB-IoT water meter Nairobi, prepaid water M-Pesa, AI chatbot Kenya, custom software Nairobi, ERP system Kenya, smart irrigation Kenya"
  canonical="https://caledoniaheights.co.ke"
/>

// About.jsx
<SEO
  title="About Us — 8 Years Building Kenya's Digital Infrastructure"
  description="Founded in 2018 in Nairobi, Caledonia Heights has been building critical digital infrastructure — smart water platforms, AI systems, and enterprise software — for Kenya's businesses and utilities."
  keywords="Caledonia Heights Nairobi, technology company Kenya, software development Nairobi, IoT company Kenya"
  canonical="https://caledoniaheights.co.ke/about"
/>

// Services.jsx
<SEO
  title="Technology Services — Smart Water, AI, Software & ERP"
  description="End-to-end technology services: smart water metering, MajiSmart irrigation, AI business agents, custom web and mobile apps, enterprise ERP systems, and managed cloud hosting."
  keywords="technology services Kenya, smart water solutions, AI agents Nairobi, ERP development Kenya, web development Nairobi"
  canonical="https://caledoniaheights.co.ke/services"
/>

// Platforms.jsx
<SEO
  title="Our Platforms — MajiSmart, Smart Metering & AI"
  description="Explore Caledonia's flagship platforms: MajiSmart AI irrigation intelligence, Caldora NB-IoT smart metering, and Caldora STS prepaid water with M-Pesa integration."
  keywords="MajiSmart irrigation platform, smart water metering platform Kenya, prepaid water M-Pesa Kenya, NB-IoT metering Kenya"
  canonical="https://caledoniaheights.co.ke/platforms"
/>

// MajiSmart.jsx
<SEO
  title="MajiSmart — AI-Powered Smart Irrigation Platform"
  description="MajiSmart connects irrigation infrastructure to AI-enabled dashboards, alerts, and operational recommendations. Real-time monitoring for farms, schemes, and county water programs in Kenya."
  keywords="smart irrigation Kenya, AI irrigation platform, farm water management Kenya, irrigation automation Kenya"
  canonical="https://caledoniaheights.co.ke/majismart"
/>

// SmartWater.jsx
<SEO
  title="Smart Water Metering — Prepaid & Real-Time Solutions"
  description="Caldora smart water metering: M-Pesa prepaid water vending with STS token delivery, and real-time monitoring with remote valve control for property managers and utilities in Kenya."
  keywords="prepaid water meter Kenya, M-Pesa water meter, smart water metering Nairobi, remote valve control water"
  canonical="https://caledoniaheights.co.ke/smart-water"
/>

// AiSolutions.jsx
<SEO
  title="AI Business Solutions — Chatbots, Sales Agents & Automation"
  description="Custom AI chatbots, sales agents, and workflow automation built for Kenyan businesses. 24/7 customer engagement, automated lead conversion, and intelligent process automation."
  keywords="AI chatbot Kenya, AI sales agent Nairobi, business automation Kenya, WhatsApp chatbot Kenya"
  canonical="https://caledoniaheights.co.ke/ai-solutions"
/>

// Projects.jsx
<SEO
  title="Projects & Portfolio — Platforms, AI & Web Delivery"
  description="A portfolio of delivered platforms, AI systems, and web projects across Kenya — smart irrigation, water metering, AI agents, real estate, and corporate websites."
  keywords="technology projects Kenya, IoT projects Nairobi, AI projects Kenya, web development portfolio Kenya"
  canonical="https://caledoniaheights.co.ke/projects"
/>

// Contact.jsx
<SEO
  title="Contact Us — Get in Touch with Our Team"
  description="Contact Caledonia Heights Limited in Westlands, Nairobi. Call or WhatsApp 0708 001 000. Email info@caledoniaheights.co.ke. We respond within 24 hours."
  keywords="contact Caledonia Heights, technology company Nairobi contact, smart water solutions Kenya"
  canonical="https://caledoniaheights.co.ke/contact"
/>
```

---

## EXECUTION ORDER

Execute in exactly this sequence:

1. **`index.html`** — full rewrite (§1) — fonts, favicon, SEO meta, structured data all in one
2. **`public/site.webmanifest`** — update content (§2)
3. **`public/sitemap.xml`** — create new file (§3)
4. **`public/robots.txt`** — create new file (§4)
5. **`src/index.css`** — update `--font-mono` variable (§5A)
6. **Global find/replace across `src/`** — remove all Space Mono references (§5B, §5C)
7. **`SmartWater.jsx`** — Caldora/UDP/tech stack fixes (§6)
8. **`Navbar.jsx` + `Navbar.css`** — dropdown link fix (§7)
9. **`src/index.css`** — add glow utility classes (§8A)
10. **`Home.jsx`** — apply glow classes to sections (§8B)
11. **`Navbar.css`** — logo rounded corners (§9)
12. **`Home.jsx` + `Home.css`** — scroll indicator (§10)
13. **`Footer.jsx` + `Footer.css`** — remove "Incorporated", warm fonts (§11)
14. **Terminal:** `npm install react-helmet-async` (§12A)
15. **`src/main.jsx`** — HelmetProvider wrap (§12B)
16. **Create `src/components/SEO.jsx`** (§12C)
17. **All 9 page files** — add `<SEO />` component (§12D)
18. **Terminal:** `npm run build` — must pass with no errors

---

## FINAL CHECKLIST

- [ ] Browser tab shows the Caledonia C icon (not the Vite triangle)
- [ ] `public/site.webmanifest` has company name and `#040E1C` theme color
- [ ] `public/sitemap.xml` exists with all 9 routes
- [ ] `public/robots.txt` exists pointing to sitemap
- [ ] Space Mono gone — no robotic font anywhere on the site
- [ ] "Shengda" nowhere in user-visible text
- [ ] "UDP" nowhere in user-visible text
- [ ] Tech stack pills removed from SmartWater page
- [ ] Navbar dropdowns navigate correctly and close after clicking
- [ ] Ambient glow effects visible on Home page sections
- [ ] Gradient underline appears under section headings
- [ ] Logo has rounded corners in navbar
- [ ] Animated scroll mouse on Home — no "SCROLL" text
- [ ] Footer shows only copyright line, no "Incorporated Nov 2018"
- [ ] Every browser tab shows a different unique page title
- [ ] `npm run build` passes with no errors
