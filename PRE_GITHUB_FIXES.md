# CALEDONIA HEIGHTS — PRE-GITHUB FIXES
## For Cursor — Targeted fixes only

---

## ISSUES TO FIX (5 things, do all of them)

1. Hero background images not showing
2. About page — remove over-detailed company registration info
3. Footer — logo rounded corners + reduce white space + rephrase company description
4. Navbar "Services" and "Platforms" parent links not clickable
5. Footer internal links not navigating

---

## FIX 1 — HERO BACKGROUND IMAGES NOT VISIBLE

The images exist in `public/assets/images/` but are not showing. The problem is one of these — check and fix whichever applies:

**A) Check `PageHero.jsx` — the `backgroundImage` prop may not be applied to the DOM.**

Open `src/components/PageHero.jsx`. Find where the background is set. It should produce inline style or a class like this:

```jsx
// The hero outer div must have the background image as an inline style:
<div
  className="page-hero"
  style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
>
```

If it is using a CSS variable approach instead, make sure the variable is actually being set:
```jsx
<div
  className="page-hero"
  style={backgroundImage ? { '--hero-bg': `url(${backgroundImage})` } : {}}
>
```

And in `PageHero.css`:
```css
.page-hero {
  position: relative;
  background-image: var(--hero-bg, none);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
```

**B) Check `PageHero.css` — the overlay `::before` must NOT cover the background image.**

The overlay sits on top of the photo. Make sure z-index is correct:

```css
.page-hero {
  position: relative;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  overflow: hidden;
}

/* Dark overlay on top of the photo */
.page-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(4,14,28,0.88) 0%, rgba(7,22,42,0.75) 100%);
  z-index: 1;
  pointer-events: none;
}

/* Animated blob background — must be BEHIND the overlay */
.page-hero .hero-background {
  z-index: 0;
}

/* Hero content — must be ABOVE the overlay */
.page-hero__inner,
.page-hero > .container,
.page-hero > *:not(.page-hero__bgImage) {
  position: relative;
  z-index: 2;
}
```

**C) Check each page file that uses `PageHero` — confirm the `backgroundImage` prop is actually being passed.**

For example in `About.jsx` it should look like:
```jsx
import { images } from '../data/images';

<PageHero
  title="..."
  subtitle="..."
  backgroundImage={images.aboutHero}
/>
```

Open `src/data/images.js` and confirm each key points to the correct path:
```js
export const images = {
  heroBg:         '/assets/images/hero-bg.jpg',
  aboutHero:      '/assets/images/about-hero.jpg',
  servicesHero:   '/assets/images/services-hero.jpg',
  platformsHero:  '/assets/images/platforms-hero.jpg',
  majismartHero:  '/assets/images/majismart-hero.jpg',
  smartWaterHero: '/assets/images/smart-water-hero.jpg',
  aiHero:         '/assets/images/ai-hero.jpg',
  projectsHero:   '/assets/images/projects-hero.jpg',
  contactHero:    '/assets/images/contact-hero.jpg',
  // ... other images
};
```

**D) For the Home hero specifically**, check `Home.jsx` and `Home.css`. The home hero uses a CSS variable approach. Make sure it's applied:

In `Home.jsx`:
```jsx
<section
  className="home-hero"
  style={{ '--hero-bg': `url('/assets/images/hero-bg.jpg')` }}
>
```

In `Home.css`:
```css
.home-hero {
  background-image: var(--hero-bg, none);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
}
.home-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(4,14,28,0.88) 0%, rgba(7,22,42,0.75) 100%);
  z-index: 1;
  pointer-events: none;
}
.home-hero > * {
  position: relative;
  z-index: 2;
}
```

**NOTE:** The hero images themselves will only show once the client drops the actual photo files into `public/assets/images/`. Until then, the gradient blobs will show as the fallback — which is fine. The CSS just needs to be correctly wired so that when the files ARE present, they show up. Verify by temporarily adding a test image with one of the expected filenames.

---

## FIX 2 — ABOUT PAGE: REMOVE OVER-DETAILED REGISTRATION INFO

In `About.jsx`, find the "Credentials" / "Registered & Ready" card section.

**Remove entirely:**
- The `Registration:` field showing `PVT-MKUYDJM`
- The `Incorporated:` field showing `November 9, 2018`
- The `Location:` field (this is already in the footer)

**Keep only** a simple, clean credentials card with:
```jsx
<div className="credentials-card">
  <div className="section-label">Credentials</div>
  <h3>Registered & Ready</h3>
  <p>
    Caledonia Heights Limited is a registered Kenyan company, 
    fully compliant and positioned for enterprise, government, 
    and institutional engagements.
  </p>
  <div className="cred-items">
    <div className="cred-item">
      <span className="cred-label">Founded</span>
      <span className="cred-value">2018, Nairobi</span>
    </div>
    <div className="cred-item">
      <span className="cred-label">Location</span>
      <span className="cred-value">Westlands, Nairobi</span>
    </div>
    <div className="cred-item">
      <span className="cred-label">Status</span>
      <span className="cred-value">Active & Incorporated</span>
    </div>
  </div>
</div>
```

CSS for the cred items:
```css
.cred-items {
  margin-top: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.cred-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.625rem 0;
  border-bottom: 1px solid var(--border-card);
}
.cred-item:last-child { border-bottom: none; }
.cred-label {
  font-family: var(--font-body);
  font-weight: 600;
  color: var(--text-muted);
  font-size: 0.875rem;
}
.cred-value {
  font-family: var(--font-body);
  font-weight: 600;
  color: var(--text-white);
  font-size: 0.875rem;
}
```

---

## FIX 3 — FOOTER: THREE CHANGES

### 3A — Logo rounded corners (match the navbar)

In `Footer.jsx`, find the logo `<img>` tag and its wrapper. Apply the same rounded style as the navbar:

```jsx
<div className="footer-logo-wrap">
  <img src="/assets/images/logo.png" alt="Caledonia Heights" className="footer-logo" />
</div>
```

In `Footer.css`:
```css
.footer-logo-wrap {
  background: white;
  border-radius: 10px;
  padding: 5px 10px;
  display: inline-flex;
  align-items: center;
  margin-bottom: 1rem;
}
.footer-logo {
  height: 40px;
  width: auto;
  display: block;
  border-radius: 6px;
}
```

If the logo PNG already has a transparent background (white box not needed), just use:
```css
.footer-logo {
  height: 40px;
  width: auto;
  border-radius: 8px;
  margin-bottom: 1rem;
}
```

### 3B — Reduce white space inside logo container

The logo currently has too much horizontal padding making it wide. Reduce it:

```css
/* If using the white wrapper: */
.footer-logo-wrap {
  padding: 4px 8px;  /* was larger — reduce horizontal padding */
}

/* Logo itself — keep height but limit width naturally */
.footer-logo {
  height: 38px;
  width: auto;
  max-width: 160px;  /* prevent it stretching too wide */
}
```

### 3C — Rephrase the footer company description

In `Footer.jsx`, find the paragraph that says:
```
"We build, host, and maintain mission-critical systems for enterprises, utilities, and government institutions across Kenya."
```

Replace it with:
```jsx
<p className="footer-desc">
  From smart farms and water networks to growing businesses and urban properties — 
  we build, host, and maintain the technology that keeps Kenya moving.
</p>
```

This reflects: farmers (MajiSmart), water utilities (smart metering), small businesses (AI agents, software), property managers (prepaid water) — without excluding anyone.

---

## FIX 4 — NAVBAR: "SERVICES" AND "PLATFORMS" PARENT LINKS NOT CLICKABLE

The problem is that the parent nav items (Services, Platforms) that have dropdowns are currently only triggering the dropdown open/close — they are not navigating to `/services` or `/platforms` when clicked directly.

**Fix in `Navbar.jsx`:**

The parent nav items need to navigate AND open the dropdown. Use this pattern — clicking the text navigates, clicking the chevron/arrow toggles the dropdown:

```jsx
{/* Services nav item */}
<div className="nav-item nav-item--dropdown">
  {/* The text is a Link — navigates to /services */}
  <Link
    to="/services"
    className="nav-link"
    onClick={() => setActiveDropdown(null)}
  >
    Services
  </Link>
  {/* The chevron is a separate button — toggles dropdown */}
  <button
    className="nav-chevron"
    onClick={(e) => {
      e.preventDefault();
      e.stopPropagation();
      setActiveDropdown(activeDropdown === 'services' ? null : 'services');
    }}
    aria-label="Toggle services menu"
  >
    <IconChevronDown size={14} />
  </button>
  {/* Dropdown panel */}
  {activeDropdown === 'services' && (
    <div className="dropdown-panel">
      <Link to="/smart-water" className="dropdown-item" onClick={closeDropdown}>Smart Water Metering</Link>
      <Link to="/majismart" className="dropdown-item" onClick={closeDropdown}>MajiSmart Irrigation</Link>
      <Link to="/ai-solutions" className="dropdown-item" onClick={closeDropdown}>AI Business Agents</Link>
      <Link to="/services" className="dropdown-item" onClick={closeDropdown}>Custom Software</Link>
      <Link to="/services" className="dropdown-item" onClick={closeDropdown}>Enterprise ERP</Link>
      <Link to="/services" className="dropdown-item" onClick={closeDropdown}>Cloud Hosting</Link>
    </div>
  )}
</div>

{/* Platforms nav item — same pattern */}
<div className="nav-item nav-item--dropdown">
  <Link
    to="/platforms"
    className="nav-link"
    onClick={() => setActiveDropdown(null)}
  >
    Platforms
  </Link>
  <button
    className="nav-chevron"
    onClick={(e) => {
      e.preventDefault();
      e.stopPropagation();
      setActiveDropdown(activeDropdown === 'platforms' ? null : 'platforms');
    }}
    aria-label="Toggle platforms menu"
  >
    <IconChevronDown size={14} />
  </button>
  {activeDropdown === 'platforms' && (
    <div className="dropdown-panel">
      <Link to="/majismart" className="dropdown-item" onClick={closeDropdown}>MajiSmart</Link>
      <Link to="/smart-water" className="dropdown-item" onClick={closeDropdown}>NB-IoT Metering</Link>
      <Link to="/smart-water" className="dropdown-item" onClick={closeDropdown}>STS Prepaid Water</Link>
      <Link to="/platforms" className="dropdown-item" onClick={closeDropdown}>All Platforms</Link>
    </div>
  )}
</div>
```

Add CSS for the split chevron button:
```css
.nav-item--dropdown {
  display: flex;
  align-items: center;
  gap: 2px;
  position: relative;
}
.nav-chevron {
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  color: var(--text-muted);
  transition: color var(--t-fast), transform var(--t-fast);
  border-radius: 4px;
}
.nav-chevron:hover {
  color: var(--cyan);
}
/* Rotate chevron when dropdown open */
.nav-item--dropdown.is-open .nav-chevron {
  transform: rotate(180deg);
  color: var(--cyan);
}
```

---

## FIX 5 — FOOTER LINKS NOT NAVIGATING

In `Footer.jsx`, find all the footer navigation links. They are likely using `<a href="...">` which causes full page reloads but may not work correctly with React Router. Replace ALL internal footer links with `<Link>`:

```jsx
import { Link } from 'react-router-dom';

{/* Company column */}
<Link to="/about" className="footer-link">About</Link>
<Link to="/projects" className="footer-link">Projects</Link>
<Link to="/contact" className="footer-link">Contact</Link>

{/* Services column */}
<Link to="/smart-water" className="footer-link">Smart Water</Link>
<Link to="/majismart" className="footer-link">MajiSmart</Link>
<Link to="/ai-solutions" className="footer-link">AI Solutions</Link>
<Link to="/services" className="footer-link">All Services</Link>

{/* Platforms column */}
<Link to="/majismart" className="footer-link">MajiSmart</Link>
<Link to="/smart-water" className="footer-link">NB-IoT Metering</Link>
<Link to="/smart-water" className="footer-link">STS Prepaid</Link>
<Link to="/platforms" className="footer-link">Platforms Overview</Link>
```

The contact column items (phone, email, address) should remain as `<a>` tags since they are external:
```jsx
<a href="tel:+254708001000" className="footer-link">0708 001 000</a>
<a href="mailto:info@caledoniaheights.co.ke" className="footer-link">info@caledoniaheights.co.ke</a>
<span className="footer-link footer-link--text">Krishna Centre, Westlands, Woodvale Grove, Nairobi</span>
```

---

## EXECUTION ORDER

1. **`src/components/PageHero.jsx` + `PageHero.css`** — fix background image rendering (Fix 1)
2. **`src/pages/Home.jsx` + `Home.css`** — fix home hero background (Fix 1D)
3. **`src/data/images.js`** — verify all paths start with `/assets/images/` (Fix 1C)
4. **`src/pages/About.jsx`** — simplify credentials card (Fix 2)
5. **`src/components/Footer.jsx`** — logo wrap + description rephrase + Link fixes (Fix 3 + Fix 5)
6. **`src/components/Footer.css`** — logo rounded corners + reduce padding (Fix 3A, 3B)
7. **`src/components/Navbar.jsx` + `Navbar.css`** — split link/chevron for Services and Platforms (Fix 4)
8. **`npm run build`** — must pass before pushing to GitHub

---

## FINAL CHECKLIST BEFORE GITHUB PUSH

- [ ] Hero backgrounds visible on at least one page (confirm in browser)
- [ ] About page credentials card shows only: Founded 2018, Location, Status — no registration number, no exact date
- [ ] Footer logo has rounded corners matching the navbar logo
- [ ] Footer logo not excessively wide — max-width: 160px
- [ ] Footer description reflects all client types (farms, businesses, water, properties)
- [ ] Clicking "Services" text in navbar goes to `/services` page
- [ ] Clicking "Platforms" text in navbar goes to `/platforms` page
- [ ] Chevron next to Services/Platforms still opens the dropdown
- [ ] All footer links navigate correctly (About, Projects, Contact, Smart Water, etc.)
- [ ] `npm run build` passes with no errors
