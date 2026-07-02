# MOBILE NAVBAR FIX + VERCEL 404 FIX
## For Cursor — Fix, then commit and push to repo

---

## FIX 1 — VERCEL 404 ON PAGE REFRESH (do this first)

Create a new file `vercel.json` in the **project root** (same folder as `package.json`):

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

This tells Vercel to always serve `index.html` for any URL and let React Router handle routing. Without this, refreshing any page other than `/` returns 404.

---

## FIX 2 — MOBILE NAVBAR FULL REBUILD

The previous fix moved the overlay outside the header but the menu still has issues. Do a complete clean rebuild of the mobile nav in `Navbar.jsx` and `Navbar.css`.

### Navbar.jsx — mobile menu structure

The `Navbar.jsx` must use a **React Portal** to render the mobile overlay directly into `document.body`, completely outside the header DOM tree. This guarantees no CSS stacking context from `backdrop-filter` or `position: sticky` affects it.

```jsx
import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { createPortal } from 'react-dom';
import {
  IconChevronDown, IconX, IconMenu2,
  IconBrandWhatsapp, IconPhone
} from '@tabler/icons-react';
import './Navbar.css';

const NAV_SERVICES = [
  { label: 'Smart Water Metering', to: '/smart-water' },
  { label: 'MajiSmart Irrigation', to: '/majismart' },
  { label: 'AI Business Agents', to: '/ai-solutions' },
  { label: 'Custom Software', to: '/services' },
  { label: 'Enterprise ERP', to: '/services' },
  { label: 'Cloud Hosting', to: '/services' },
];

const NAV_PLATFORMS = [
  { label: 'MajiSmart', to: '/majismart' },
  { label: 'NB-IoT Metering', to: '/smart-water' },
  { label: 'STS Prepaid Water', to: '/smart-water' },
  { label: 'All Platforms', to: '/platforms' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close everything on route change
  useEffect(() => {
    setMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Navbar glass effect on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeDropdown = () => setActiveDropdown(null);
  const closeAll = () => { setMenuOpen(false); setActiveDropdown(null); };

  // Mobile overlay rendered via portal directly into document.body
  const MobileMenu = () => createPortal(
    <div className={`mobile-overlay ${menuOpen ? 'mobile-overlay--open' : ''}`} aria-hidden={!menuOpen}>
      {/* Header row inside overlay */}
      <div className="mobile-overlay__header">
        <Link to="/" onClick={closeAll}>
          <img src="/assets/images/logo.png" alt="Caledonia Heights" className="mobile-overlay__logo" />
        </Link>
        <button className="mobile-close-btn" onClick={() => setMenuOpen(false)} aria-label="Close menu">
          <IconX size={24} />
        </button>
      </div>

      {/* Nav links */}
      <nav className="mobile-overlay__nav">
        <NavLink to="/" className="mobile-nav-link" onClick={closeAll}>Home</NavLink>
        <NavLink to="/about" className="mobile-nav-link" onClick={closeAll}>About</NavLink>

        {/* Services accordion */}
        <div className="mobile-accordion">
          <button
            className="mobile-accordion__trigger"
            onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')}
          >
            <span>Services</span>
            <IconChevronDown
              size={18}
              className={`mobile-accordion__chevron ${activeDropdown === 'services' ? 'is-open' : ''}`}
            />
          </button>
          {activeDropdown === 'services' && (
            <div className="mobile-accordion__panel">
              {NAV_SERVICES.map(item => (
                <NavLink key={item.label} to={item.to} className="mobile-sub-link" onClick={closeAll}>
                  {item.label}
                </NavLink>
              ))}
            </div>
          )}
        </div>

        {/* Platforms accordion */}
        <div className="mobile-accordion">
          <button
            className="mobile-accordion__trigger"
            onClick={() => setActiveDropdown(activeDropdown === 'platforms' ? null : 'platforms')}
          >
            <span>Platforms</span>
            <IconChevronDown
              size={18}
              className={`mobile-accordion__chevron ${activeDropdown === 'platforms' ? 'is-open' : ''}`}
            />
          </button>
          {activeDropdown === 'platforms' && (
            <div className="mobile-accordion__panel">
              {NAV_PLATFORMS.map(item => (
                <NavLink key={item.label} to={item.to} className="mobile-sub-link" onClick={closeAll}>
                  {item.label}
                </NavLink>
              ))}
            </div>
          )}
        </div>

        <NavLink to="/ai-solutions" className="mobile-nav-link" onClick={closeAll}>AI Solutions</NavLink>
        <NavLink to="/projects" className="mobile-nav-link" onClick={closeAll}>Projects</NavLink>
        <NavLink to="/contact" className="mobile-nav-link" onClick={closeAll}>Contact</NavLink>
      </nav>

      {/* Bottom CTA row */}
      <div className="mobile-overlay__cta">
        <Link to="/contact" className="mobile-cta-btn mobile-cta-btn--primary" onClick={closeAll}>
          Get in Touch →
        </Link>
        <a
          href="https://wa.me/254708001000"
          className="mobile-cta-btn mobile-cta-btn--whatsapp"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeAll}
        >
          <IconBrandWhatsapp size={18} /> WhatsApp
        </a>
      </div>
    </div>,
    document.body
  );

  return (
    <>
      <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__inner">
          {/* Logo */}
          <Link to="/" className="navbar__logo-link">
            <div className="nav-logo-wrap">
              <img src="/assets/images/logo.png" alt="Caledonia Heights" className="nav-logo" />
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="navbar__desktop">
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/about" className="nav-link">About</NavLink>

            {/* Services dropdown */}
            <div className="nav-item--dropdown" onMouseLeave={closeDropdown}>
              <Link to="/services" className="nav-link" onClick={closeDropdown}>Services</Link>
              <button
                className="nav-chevron"
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); setActiveDropdown(activeDropdown === 'services' ? null : 'services'); }}
                aria-label="Toggle services menu"
              >
                <IconChevronDown size={14} />
              </button>
              {activeDropdown === 'services' && (
                <div className="dropdown-panel">
                  {NAV_SERVICES.map(item => (
                    <Link key={item.label} to={item.to} className="dropdown-item" onClick={closeDropdown}>{item.label}</Link>
                  ))}
                </div>
              )}
            </div>

            {/* Platforms dropdown */}
            <div className="nav-item--dropdown" onMouseLeave={closeDropdown}>
              <Link to="/platforms" className="nav-link" onClick={closeDropdown}>Platforms</Link>
              <button
                className="nav-chevron"
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); setActiveDropdown(activeDropdown === 'platforms' ? null : 'platforms'); }}
                aria-label="Toggle platforms menu"
              >
                <IconChevronDown size={14} />
              </button>
              {activeDropdown === 'platforms' && (
                <div className="dropdown-panel">
                  {NAV_PLATFORMS.map(item => (
                    <Link key={item.label} to={item.to} className="dropdown-item" onClick={closeDropdown}>{item.label}</Link>
                  ))}
                </div>
              )}
            </div>

            <NavLink to="/ai-solutions" className="nav-link">AI Solutions</NavLink>
            <NavLink to="/projects" className="nav-link">Projects</NavLink>
            <NavLink to="/contact" className="nav-link">Contact</NavLink>
          </nav>

          {/* Desktop CTA */}
          <Link to="/contact" className="navbar__cta btn-primary btn--sm">Get in Touch</Link>

          {/* Hamburger — mobile only */}
          <button
            className="navbar__hamburger"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <IconMenu2 size={26} />
          </button>
        </div>
      </header>

      {/* Mobile overlay via portal */}
      <MobileMenu />
    </>
  );
}
```

---

### Navbar.css — replace the entire file with this:

```css
/* ═══════════════════════════════════════════
   NAVBAR — desktop + mobile
═══════════════════════════════════════════ */

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: background var(--t-base), border-color var(--t-base);
  border-bottom: 1px solid transparent;
}

.navbar--scrolled {
  background: rgba(4, 14, 28, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom-color: var(--border-subtle);
}

.navbar__inner {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 2rem;
  height: 72px;
  display: flex;
  align-items: center;
  gap: 2rem;
}

/* ── Logo ── */
.navbar__logo-link { text-decoration: none; flex-shrink: 0; }

.nav-logo-wrap {
  background: white;
  border-radius: 10px;
  padding: 4px 8px;
  display: flex;
  align-items: center;
}
.nav-logo {
  height: 44px;
  width: auto;
  display: block;
  border-radius: 6px;
  max-width: 160px;
}

/* ── Desktop nav ── */
.navbar__desktop {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-left: auto;
}

.nav-link {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: 0.95rem;
  color: var(--text-bright);
  text-decoration: none;
  padding: 0.375rem 0.625rem;
  border-radius: var(--radius-sm);
  transition: color var(--t-fast);
  position: relative;
  white-space: nowrap;
}
.nav-link:hover,
.nav-link.active {
  color: var(--text-white);
}
.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -2px; left: 0.625rem; right: 0.625rem;
  height: 2px;
  background: var(--grad-cyan);
  border-radius: 2px;
}

/* ── Dropdown ── */
.nav-item--dropdown {
  display: flex;
  align-items: center;
  gap: 1px;
  position: relative;
}

.nav-chevron {
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px 2px;
  display: flex;
  align-items: center;
  color: var(--text-muted);
  transition: color var(--t-fast), transform var(--t-fast);
  border-radius: 4px;
}
.nav-chevron:hover { color: var(--cyan); }

.dropdown-panel {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  min-width: 220px;
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  padding: 0.5rem;
  box-shadow: 0 16px 40px rgba(0,0,0,0.4);
  z-index: 200;
  animation: dropIn 0.15s var(--ease-out);
}

@keyframes dropIn {
  from { opacity: 0; transform: translateY(-6px); }
  to   { opacity: 1; transform: translateY(0); }
}

.dropdown-item {
  display: block;
  padding: 0.6rem 1rem;
  color: var(--text-bright);
  text-decoration: none;
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 500;
  border-radius: var(--radius-sm);
  transition: background var(--t-fast), color var(--t-fast), padding-left var(--t-fast);
  white-space: nowrap;
}
.dropdown-item:hover {
  background: rgba(0, 212, 255, 0.1);
  color: var(--cyan);
  padding-left: 1.25rem;
}

/* ── Desktop CTA ── */
.navbar__cta {
  flex-shrink: 0;
  margin-left: 1rem;
}

/* ── Hamburger ── */
.navbar__hamburger {
  display: none;
  background: none;
  border: 1px solid var(--border-card);
  border-radius: var(--radius-sm);
  padding: 6px 8px;
  cursor: pointer;
  color: var(--text-white);
  margin-left: auto;
  transition: border-color var(--t-fast), background var(--t-fast);
}
.navbar__hamburger:hover {
  border-color: var(--cyan);
  background: rgba(0, 212, 255, 0.08);
}


/* ═══════════════════════════════════════════
   MOBILE OVERLAY — rendered via React Portal
   into document.body, completely isolated
═══════════════════════════════════════════ */

.mobile-overlay {
  /* Fixed to viewport — guaranteed full screen */
  position: fixed;
  inset: 0;
  z-index: 9999;

  /* Solid opaque background — nothing bleeds through */
  background: #040E1C;

  /* Off-screen by default — slides in from right */
  transform: translateX(100%);
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);

  /* Scrollable content */
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  /* Layout */
  display: flex;
  flex-direction: column;
  padding: 0;
}

.mobile-overlay--open {
  transform: translateX(0);
}

/* Header row */
.mobile-overlay__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid var(--border-card);
  flex-shrink: 0;
}

.mobile-overlay__logo {
  height: 40px;
  width: auto;
  max-width: 150px;
  background: white;
  border-radius: 8px;
  padding: 3px 7px;
}

.mobile-close-btn {
  background: var(--bg-card);
  border: 1px solid var(--border-card);
  border-radius: var(--radius-sm);
  padding: 8px;
  cursor: pointer;
  color: var(--text-white);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color var(--t-fast), background var(--t-fast);
}
.mobile-close-btn:hover {
  border-color: var(--cyan);
  background: rgba(0, 212, 255, 0.1);
  color: var(--cyan);
}

/* Nav links */
.mobile-overlay__nav {
  flex: 1;
  padding: 0.75rem 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.mobile-nav-link {
  display: block;
  padding: 0.875rem 1rem;
  color: var(--text-bright);
  text-decoration: none;
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 1.05rem;
  border-radius: var(--radius-sm);
  transition: background var(--t-fast), color var(--t-fast);
  border: 1px solid transparent;
}
.mobile-nav-link:hover,
.mobile-nav-link.active {
  background: rgba(0, 212, 255, 0.08);
  color: var(--text-white);
  border-color: var(--border-subtle);
}

/* Accordion */
.mobile-accordion { display: flex; flex-direction: column; }

.mobile-accordion__trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.875rem 1rem;
  background: none;
  border: 1px solid transparent;
  border-radius: var(--radius-sm);
  cursor: pointer;
  color: var(--text-bright);
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 1.05rem;
  text-align: left;
  width: 100%;
  transition: background var(--t-fast), color var(--t-fast);
}
.mobile-accordion__trigger:hover {
  background: rgba(0, 212, 255, 0.08);
  color: var(--text-white);
  border-color: var(--border-subtle);
}

.mobile-accordion__chevron {
  transition: transform 0.25s var(--ease-out);
  flex-shrink: 0;
}
.mobile-accordion__chevron.is-open {
  transform: rotate(180deg);
  color: var(--cyan);
}

.mobile-accordion__panel {
  padding: 0.25rem 0 0.25rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  border-left: 2px solid rgba(0, 212, 255, 0.2);
  margin-left: 1rem;
  margin-bottom: 0.25rem;
}

.mobile-sub-link {
  display: block;
  padding: 0.625rem 0.875rem;
  color: var(--text-muted);
  text-decoration: none;
  font-family: var(--font-body);
  font-weight: 500;
  font-size: 0.95rem;
  border-radius: var(--radius-sm);
  transition: color var(--t-fast), background var(--t-fast);
}
.mobile-sub-link:hover,
.mobile-sub-link.active {
  color: var(--cyan);
  background: rgba(0, 212, 255, 0.06);
}

/* Bottom CTA */
.mobile-overlay__cta {
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  border-top: 1px solid var(--border-card);
  flex-shrink: 0;
}

.mobile-cta-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  border-radius: var(--radius-pill);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: transform var(--t-fast), box-shadow var(--t-fast);
}
.mobile-cta-btn:hover { transform: translateY(-2px); }

.mobile-cta-btn--primary {
  background: var(--grad-cyan);
  color: #000;
  box-shadow: var(--glow-cyan);
}
.mobile-cta-btn--whatsapp {
  background: #25D366;
  color: #000;
  box-shadow: 0 0 20px rgba(37, 211, 102, 0.35);
}


/* ═══════════════════════════════════════════
   RESPONSIVE BREAKPOINTS
═══════════════════════════════════════════ */

/* Hide desktop nav + CTA on mobile, show hamburger */
@media (max-width: 900px) {
  .navbar__desktop { display: none; }
  .navbar__cta { display: none; }
  .navbar__hamburger { display: flex; }
  .navbar__inner { padding: 0 1.25rem; }
}

/* Desktop — hide hamburger, show nav */
@media (min-width: 901px) {
  .navbar__hamburger { display: none; }
  .mobile-overlay { display: none !important; }
}
```

---

## AFTER APPLYING BOTH FIXES

Run:
```bash
npm run build
```

If it passes, commit and push to the GitHub repo:
```bash
git add .
git commit -m "fix: mobile nav portal + vercel.json SPA routing"
git push origin main
```

---

## VERIFY AFTER VERCEL REDEPLOYS

- [ ] Visit `caledoniaheights.co.ke/about` — should load correctly (not 404)
- [ ] Refresh any page — stays on that page, no 404
- [ ] Open site on mobile — hamburger visible, tapping opens full-screen solid overlay
- [ ] Nothing bleeds through behind the menu
- [ ] Services and Platforms expand as accordions inside the menu
- [ ] Tapping any link closes the menu and navigates correctly
- [ ] Desktop nav still works normally
