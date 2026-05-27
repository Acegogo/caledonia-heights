# Caledonia Heights Website — Codebase Documentation (Claude-ready)

This repository is a **static marketing website** built with **React + Vite** and client-side routing via **React Router**. Content is currently **hardcoded in React components** (no CMS, no backend/API integration, no environment variables).

---

## 1) Quick facts (stack / tooling)

- **Runtime**: React `19.x`
- **Bundler / dev server**: Vite `7.x`
- **Routing**: `react-router-dom` `7.x` (BrowserRouter)
- **Language**: JavaScript (ESM), JSX (no TypeScript)
- **Styling**: plain CSS files imported per page/component + global CSS variables
- **Linting**: ESLint flat config

Key files:
- App entry: `src/main.jsx`
- Router + routes: `src/App.jsx`
- Layout shell: `src/layouts/RootLayout.jsx`
- Global styles / design tokens: `src/index.css`
- Static assets: `public/assets/images/*`

---

## 2) Repository layout

Top-level:
- `index.html`: HTML shell (title, meta viewport, root mount element)
- `vite.config.js`: Vite config (currently minimal)
- `package.json`: scripts and dependencies
- `public/`: static files served as-is (images, favicon, etc.)
- `src/`: application source code

Inside `src/`:
- `main.jsx`: mounts the React app into `#root`
- `App.jsx`: defines the router and all routes
- `layouts/RootLayout.jsx`: shared layout (Navbar + page content + Footer)
- `pages/`: route-level pages (About, Home, etc.)
- `components/`: reusable UI components (Navbar, Footer, Card, Section, Button)
- `index.css`: global CSS variables, resets, and shared utility classes

---

## 3) Runtime flow (how the app starts)

1. The browser loads `index.html`, which includes:
   - `<div id="root"></div>`
   - `<script type="module" src="/src/main.jsx"></script>`
2. `src/main.jsx` creates the React root and renders `<App />`.
3. `src/App.jsx` wraps everything in `<BrowserRouter>` and defines all the routes.
4. `RootLayout` provides consistent framing:
   - `Navbar` at top
   - `<Outlet />` for the active page
   - `Footer` at bottom
5. `ScrollToTop` resets scroll on route change.

---

## 4) Routing (site map)

Routes are defined in `src/App.jsx` under the root layout route:

- `/` → `Home` (`src/pages/Home.jsx`)
- `/about` → `About` (`src/pages/About.jsx`)
- `/solutions` → `Solutions` (`src/pages/Solutions.jsx`)
- `/platforms` → `Platforms` (`src/pages/Platforms.jsx`)
- `/industries` → `Industries` (`src/pages/Industries.jsx`)
- `/projects` → `Projects` (`src/pages/Projects.jsx`)
- `/why-us` → `WhyUs` (`src/pages/WhyUs.jsx`)
- `/contact` → `Contact` (`src/pages/Contact.jsx`)

Navigation links live in:
- Header nav: `src/components/Navbar.jsx`
- Footer nav: `src/components/Footer.jsx` (uses `<a href>` currently)

---

## 5) Page-by-page content map (what lives where)

### Home (`src/pages/Home.jsx`)
Purpose: top-level marketing landing page.
- Hero headline + subtitle
- “Trust bar”
- “End-to-End Technology Services” cards
- “Proven Project Experience” previews
- CTA section (mailto)

Uses:
- `Section` (for consistent spacing + background variants)
- `Card` (for service cards)
- `Button` (Link/mailto abstraction)
- CSS: `src/pages/Home.css`

Images referenced:
- Hero background: `public/assets/images/hero-bg.jpg`

### About (`src/pages/About.jsx`)
Purpose: company mission / values.
- Mission section with image and “Since 2018” overlay
- Core values cards
- CSS: `src/pages/About.css`

Images:
- `public/assets/images/about-mission.jpg`

### Solutions (`src/pages/Solutions.jsx`)
Purpose: list of offered services.
- A hardcoded `services` array (title + description)
- Renders each item into a `Card`
- CTA mailto button
- CSS: `src/pages/Solutions.css`

### Platforms (`src/pages/Platforms.jsx`)
Purpose: showcase flagship platforms and innovations.
- STS Prepaid Water Management section (badges, dashboard image)
- NB-IoT Smart Metering section (badges, dashboard image)
- Innovation projects section (2 cards)
- CSS: `src/pages/Platforms.css`

Images:
- `dashboard-sts.jpg`, `dashboard-nbiot.jpg`
- `innovation-irrigation.jpg`, `innovation-worklink.jpg`

### Industries (`src/pages/Industries.jsx`)
Purpose: list industries served.
- Hardcoded `industries` array (name + bullet items)
- CSS: `src/pages/Industries.css`

### Projects (`src/pages/Projects.jsx`)
Purpose: portfolio grid of projects.
- Hardcoded `projects` array:
  - `name`, `category`, `desc`, `tech[]`, `image`, `link`
- Each project renders into a `Card` with image and external link
- CSS: `src/pages/Projects.css`

Images:
- Many project screenshots in `public/assets/images/*`

### Why Us (`src/pages/WhyUs.jsx`)
Purpose: differentiation and credibility.
- Four “reason” blocks
- Includes a hosting/datacenter image
- CSS: `src/pages/WhyUs.css`

Images:
- `public/assets/images/hosting-datacenter.jpg`

### Contact (`src/pages/Contact.jsx`)
Purpose: contact page and simple lead capture UI.
- Contact details (email, location)
- A form UI, but **no submission** (onSubmit prevents default)
- “Send Message” button is a **mailto** link
- CSS: `src/pages/Contact.css`

---

## 6) Shared components (how UI is built)

### `RootLayout` (`src/layouts/RootLayout.jsx`)
Wraps all pages with:
- `Navbar`
- `<Outlet />`
- `Footer`

### `Navbar` (`src/components/Navbar.jsx`)
- Logo image: `/assets/images/logo.png`
- Uses `<Link>` for internal navigation
- CTA button “Contact Us” points to `/contact`
- CSS: `src/components/Navbar.css`

### `Footer` (`src/components/Footer.jsx`)
- Renders current year dynamically
- Uses `<a href="/...">` for internal links (note: these cause full page reloads; see improvements)
- CSS: `src/components/Footer.css`

### `Section` (`src/components/Section.jsx`)
Reusable section wrapper with:
- **Background variants**: `white | light | dark | primary` via `section-bg-*` classes
- A **fade-in-on-scroll** effect powered by `IntersectionObserver`
- Container wrapper for consistent max-width
- CSS: `src/components/Section.css`

### `Card` (`src/components/Card.jsx`)
Simple card container; optional hover effect.
- CSS: `src/components/Card.css`

### `Button` (`src/components/Button.jsx`)
Unified button component that renders:
- `<Link>` when `to` is provided (internal navigation)
- `<a>` when `href` is provided (external links / mailto)
- `<button>` otherwise

### `ScrollToTop` (`src/components/ScrollToTop.jsx`)
On route change, runs `window.scrollTo(0,0)`.

---

## 7) Styling system (global tokens + per-page CSS)

Global design tokens live in `src/index.css`:
- CSS variables for colors, typography scale, spacing, radii, shadows
- global resets and common utilities (`.container`, `.grid`, `.text-center`, etc.)
- animation classes for fade-in sections (and reduced motion handling)

Each page/component imports its own CSS file for layout-specific rules, for example:
- `src/pages/Home.css`
- `src/components/Navbar.css`

---

## 8) Data, state, and backend/API integration

Current state:
- **No backend calls** (no `fetch`, no API clients)
- **No environment variables** (`.env` not present / not referenced)
- Page data is mostly **hardcoded arrays inside page components**:
  - `services` in `Solutions.jsx`
  - `industries` in `Industries.jsx`
  - `projects` in `Projects.jsx`

---

## 9) Dev scripts / operational usage

Scripts (`package.json`):
- `npm run dev`: start Vite dev server
- `npm run build`: production build
- `npm run preview`: serve production build locally
- `npm run lint`: run ESLint

Build output:
- Vite outputs to `dist/` (gitignored)

---

## 10) “Where do I change X?”

- **Change site routes**: `src/App.jsx`
- **Change site-wide header/nav**: `src/components/Navbar.jsx` (+ `Navbar.css`)
- **Change site-wide footer**: `src/components/Footer.jsx` (+ `Footer.css`)
- **Change homepage hero text / CTA**: `src/pages/Home.jsx` (+ `Home.css`)
- **Update services list**: `src/pages/Solutions.jsx` (`services` array)
- **Update industries list**: `src/pages/Industries.jsx` (`industries` array)
- **Update portfolio projects**: `src/pages/Projects.jsx` (`projects` array) + screenshots in `public/assets/images`
- **Replace logo / images**: `public/assets/images/*` (logo is `logo.png`)
- **Global typography/colors/spacing**: `src/index.css` (`:root` variables)

---

## 11) High-impact improvement opportunities (for Claude to propose)

These are the most meaningful areas to improve the website from a product/engineering standpoint:

### A) SEO + social sharing
- Set real `<title>` and add meta tags (description, Open Graph, Twitter cards) in `index.html`.
- Add route-level metadata strategy (React Helmet, or static pre-rendering).
- Generate `sitemap.xml` and `robots.txt`.

### B) Performance (especially images)
- Convert large `.jpg` images to modern formats (WebP/AVIF), add responsive `srcset`, and lazy-load non-critical images.
- Audit bundle size and eliminate unused CSS.

### C) Accessibility & UX
- Navbar mobile responsiveness (hamburger menu, focus states).
- Improve color contrast checks and add skip-to-content link.
- Ensure buttons/links have consistent keyboard focus outlines.

### D) Content maintainability (separate content from components)
- Move hardcoded arrays into `src/data/*.js` (or JSON) so updates don’t require editing JSX.
- Consider a lightweight CMS (e.g., Contentful/Sanity/Strapi) if non-devs will update content.

### E) Contact form (real lead capture)
- Implement real submission (email service, serverless endpoint, or form provider) instead of `mailto`.
- Add validation, success/error states, spam protection (honeypot / Turnstile).

### F) Routing consistency
- In `Footer.jsx`, replace internal `<a href="/...">` with React Router `<Link>` to avoid full reloads.

### G) Analytics + conversion tracking
- Add privacy-respecting analytics (Plausible/GA4) and track CTA clicks.

### H) Testing & code quality
- Add basic component/page smoke tests (Vitest + React Testing Library).
- Add formatting (Prettier) and pre-commit hooks (optional).

---

## 12) Suggested prompts to give Claude (copy/paste)

Use one of these when you upload the repo or this document:

1) “Review this Vite+React marketing site codebase. Propose improvements for SEO, performance, accessibility, and maintainability. For each improvement: explain why, list exact files to change, and show concrete code diffs.”

2) “Refactor the site so page content (projects, services, industries) is driven from `src/data/` files (JSON or JS). Keep the same UI, but make it easy to update content without touching JSX.”

3) “Implement a real contact form submission flow (no mailto). Suggest 2 options: a serverless endpoint and a form provider. Provide implementation steps and code changes.”

